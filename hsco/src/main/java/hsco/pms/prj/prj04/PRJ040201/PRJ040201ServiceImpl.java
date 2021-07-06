package hsco.pms.prj.prj04.PRJ040201;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import hsco.HscoConstant;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

@Service("PRJ040201Service")
@SuppressWarnings({ "rawtypes", "unchecked" })
public class PRJ040201ServiceImpl extends BaseService {
	@Resource(name = "FileUploadService")
	protected FileUploadServiceImpl fileUploadService;

	/**
	 * 사업개요 조회
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
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ040201.mList", inMap));			// 사업개요 조회
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 사업개요 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	public int save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);

			iRow += baseDao.update("PRJ040201.mCU", map);	// 사업개요 저장
		}
		return iRow;
	}


	/**
	 * 파일조회 [첨부파일, 이미지]
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void fileList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>)baseDao.list("PRJ040201.imgList", inMap));		// 사업개요 이미지 조회
		outDataset.put("output1", outDsMap1);

		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>)baseDao.list("PRJ.fileList", inMap));			// 사업개요 첨부파일 조회
		outDataset.put("output2", outDsMap2);
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
				baseDao.update("PRJ040201.mU_fileSn", targetMap);
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
				inBsnsMap.put("COL", "FILE_SN");		// 수정할 컬럼
				inBsnsMap.put("FILE_SN", null);
				baseDao.update("PRJ040201.mU_fileSn", inBsnsMap);
			}
		}
		else{
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
	}


	/**
	 * 홈페이지 연동(사업개요)
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

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		if(list == null || list.size() == 0)
			return;

		Map map = list.get(0);
		baseDao.update("PRJ040201.mCU", map);				// 사업개요 저장
		List resList = (List<Map>)baseDao.list("PRJ040201.mList", map);			// 사업개요 조회

		map = (Map)resList.get(0);
		map.put("URL", HscoConstant.MAIN_DOMAIN + "/hsco/cmm/download/viewImage.do");
		baseDao.update("PRJ040201.hpgIntrlck", map);		// 홈페이지 연동

	}
}
