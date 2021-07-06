package hsco.pms.prj.prj04.PRJ040104;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;
import hsco.pms.prj.PrjServiceImpl;

@Service("PRJ040104Service")
@SuppressWarnings({ "rawtypes", "unchecked" })
public class PRJ040104ServiceImpl extends BaseService {
	@Resource(name = "PRJService")
	protected PrjServiceImpl prjSvc;

	@Resource(name = "FileUploadService")
	protected FileUploadServiceImpl fileUploadService;


	/**
	 * 용역참여자 조회
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
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ040104.mList", inMap));

		outDataset.put("output1", outDsMap);
	}


	/**
	 * 용역참여자 저장
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
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("PRJ040104.mC", map);		// 용역참여자 추가
				break;
			case DataSet.ROW_TYPE_UPDATED :
				baseDao.update("PRJ040104.mU", map);		// 용역참여자 수정
				break;
			case DataSet.ROW_TYPE_DELETED :
//				String fileSn = StringUtil.nvl(String.valueOf(map.get("FILE_SN")));
//				if(fileSn != ""){
//					// 파일일련번호가 존재하면 용역참가자의 첨부파일을 삭제
//					Map<String, DataSetMap> fileListDS = new HashMap<String, DataSetMap>();
//					List fileList = (List<Map>)baseDao.list("selectAtchmnFileList", map);		// 첨부파일 조회
//
//					// 첨부파일이 존재하면
//					if(fileList.size() > 0){
//						DataSetMap dsMap = new DataSetMap();
//						dsMap.setRowMaps(fileList);
//						fileListDS.put("input1", dsMap);
//	
//						fileUploadService.deleteAtchmnMastFile(null, null, fileListDS, null, null);	// 첨부파일 삭제
//					}
//				}
				baseDao.delete("PRJ040104.mD", map);		// 용역참여자 삭제
				break;
			}
		}
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
				baseDao.update("PRJ040104.mU_fileSn", targetMap);
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

		DataSetMap failMap = new DataSetMap();
		failMap.setRowMaps(failList);

		outDataset.put("failList", failMap);
		outDataset.put("output1", targetInfo);
	}


	/**
	 * 첨부파일 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	public void fileDelete(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap bsnsList = (DataSetMap) inDataset.get("input1");
		DataSetMap fileList = (DataSetMap) inDataset.get("input2");

		int listSize = (fileList == null) ? 0 : fileList.size();

		if (fileList != null && listSize > 0){
			Map<String, Object> inMap = fileList.get(0);

			for (int x = 0; x < listSize; x++) {
				Map<String, Object> map = fileList.get(x);
				String fileSn   = map.get("FILE_SN").toString();	// 파일일련번호
				String fileOrdr = map.get("FILE_ORDR").toString();	// 파일순번
				String isChk    = map.get("CHK").toString();		// 삭제 선택여부

				// 선택여부가 '1'이 아니면 skip
				if(StringUtil.isNull(isChk) || !isChk.equals("1"))
					continue;

				// 파일정보가 존재하지 않으면 skip
				if(StringUtil.isNull(fileSn))
					continue;

				fileUploadService.deleteFileInfo(fileSn, fileOrdr);			// 파일삭제
			}

			// file_sn의 파일수 조회 - file_sn의 파일수가 0이면 업무테이블의 FILE_SN을 null로 변경
			int fileCnt = (Integer)baseDao.select("checkAtchmnFile", inMap);
			if(fileCnt == 0){
				Map<String, Object> inBsnsMap = bsnsList.get(0);
				inBsnsMap.put("FILE_SN", null);
				baseDao.update("PRJ040104.mU_fileSn", inBsnsMap);
			}
		}
		else{
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
	}
}
