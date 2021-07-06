package hsco.pms.prj.prj05.PRJ050303;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.HscoConstant;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

@Service("PRJ050303Service")
@SuppressWarnings({ "rawtypes", "unchecked" })
public class PRJ050303ServiceImpl extends BaseService {
	@Resource(name = "FileUploadService")
	protected FileUploadServiceImpl fileUploadService;

	/**
	 * 월간실적 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void mList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ050303.mList", inMap));

		outDataset.put("output1", outDsMap);
	}


	/**
	 * 월간실적 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			if(rowType == DataSet.ROW_TYPE_DELETED)
				baseDao.delete("PRJ050303.mD", map);		// 월간실적 삭제
			else
				baseDao.insert("PRJ050303.mCU", map);		// 월간실적 등록, 수정
		}
	}


	/**
	 * 홈페이지 연동(공정현황)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	public void hpgIntrlck( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		save( tranInfo, inVar,inDataset, outVar, outDataset);		// 월간공정 저장

		DataSetMap list = (DataSetMap) inDataset.get("input2");

		if(list == null || list.size() == 0)
			return;

		Map map = list.get(0);
		map.put("URL", HscoConstant.MAIN_DOMAIN + "/hsco/cmm/download/viewImage.do");		// 이미지 url
		baseDao.update("PRJ050303.hpgIntrlck", map);		// 홈페이지 연동
	}


	/**
	 * 파일업로드
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	public void fileUpload( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		// 파일 첨부확인
		DataSetMap fileInfo   = (DataSetMap)inDataset.get("inputFile");
		DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		Map targetMap   = targetInfo.get(0);	// 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
		Map fileInfoMap = fileInfo.get(0);		// 파일업로드 할 데이터 셋

		String fileSn = String.valueOf(targetMap.get("FILE_SN"));
		Map<String, Object> upResult = null;

		if(fileInfo != null){
			if(!StringUtil.isNull(fileSn))
				fileInfoMap.put("FILE_SN" , fileSn);

			NexacroMapDTO xpDto = getXpDto();
			fileUploadService.setFileLocation(getFileLocation());

			// 파일 업로드 - file_sn 없으면 새로 생성됨
			upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
		}

		List<Map> failList = new ArrayList<Map>();

		try {
			if(StringUtil.isNull(fileSn) && upResult != null){
				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				baseDao.update("PRJ050303.mU_fileSn", targetMap);
			}
		}
		catch(Exception ex) {
			if(ex.getMessage().indexOf("ORA-00001") != -1){
				targetMap.put("EX_COUSE", "중복");
			}
			else{
				targetMap.put("EX_COUSE", ex.getMessage());
			}

			failList.add(targetMap);
		}

		// return 정보 set
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>)upResult.get("UP_FILE_LIST"));

		DataSetMap failMap = new DataSetMap();
		failMap.setRowMaps(failList);

		outDataset.put("failList", failMap);
		outDataset.put("output1", outDsMap1);
	}




	/**
	 * 출력물 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void print( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>)baseDao.list("PRJ050303.print1", inMap));
		outDataset.put("output1", outDsMap1);

		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>)baseDao.list("PRJ050303.print2", inMap));
		outDataset.put("output2", outDsMap2);

		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps((List<Map>)baseDao.list("PRJ050303.print3", inMap));
		outDataset.put("output3", outDsMap3);
	}

}
