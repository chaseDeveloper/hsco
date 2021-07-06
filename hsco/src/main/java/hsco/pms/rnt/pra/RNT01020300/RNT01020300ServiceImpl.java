package hsco.pms.rnt.pra.RNT01020300;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;

@Service("RNT01020300Service")
public class RNT01020300ServiceImpl extends BaseService{
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "FileUploadService")
	protected FileUploadServiceImpl fileUploadService;


	/**
	 * 입주대기자 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void mvnWaitrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("RNT01020300DAO.mvnWaitrList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 소유물건정보 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentPosesnThingList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("RNT01020300DAO.rentPosesnThingList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 소유물건정보 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes"})
	
	public void rentPosesnThingCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT01020300DAO.rentPosesnThingC", map);
			}
			else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01020300DAO.rentPosesnThingU", map);
			}
			else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("RNT01020300DAO.rentPosesnThingD", map);
			}

			// 소유물건정보 수정(주태소유 유무) 0:무, 1:유
			baseDao.update("RNT01020300DAO.housePosesnAtU", map);
		}
	}


	/**
	 * 소유물건정보 등록 대상자 체크
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentPosesnThingChk( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("RNT01020300DAO.rentPosesnThingChk", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 소유물건 일괄등록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unused"})
	public void rentPosesnThingCmulti( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch(rowType) {

			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT01020300DAO.SPRNT_RENT_POSESN_I", map);
				if ("-1".equals(map.get("OUT_RESULT_CD").toString())) {
					throw new NexaServiceException("errors.항목.값.무효", map.get("OUT_RESULT_MSG").toString());
				}
				if ("-2".equals(map.get("OUT_RESULT_CD").toString())) {
					throw new NexaServiceException("err.예외상황.발생.SQL", map.get("OUT_RESULT_MSG").toString());
				}
				break;

			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT01020300DAO.rentPosesnThingU", map);
				break;

			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT01020300DAO.rentPosesnThingD", map);
				break;
			}
		}
	}


	/**
	 * 임대고객가족 목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentCstmrFamilyList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("RNT01020300DAO.rentCstmrFamilyList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 임대고객가족 고객가족 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked"})
	
	public void rentCstmrFamilyCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);

			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}
			catch( Exception e) {
				throw new NexaServiceException(e);
			}

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				//해당 데이터가 영구임대고객 테이블에 저장되어있는지 확인
				String prmanentCstmrNo = (String) baseDao.select("RNT01020300DAO.prmanentRentCstmr", map);

				//데이터 없을경우 영구임대고객 테이블에 insert
				if("".equals(prmanentCstmrNo) || null==prmanentCstmrNo){
					// 영구임대고객 등록 (TBRNT_PRMANENT_RENT_CSTMR)
					baseDao.insert("rentCstmrDAO.rentCstmrC", map);
					prmanentCstmrNo = (String) baseDao.select("RNT01020300DAO.prmanentRentCstmr", map);
				}

				map.put("PRMANENT_CSTMR_NO", prmanentCstmrNo);
				baseDao.insert("RNT01020300DAO.rentCstmrFamilyC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				// 영구 임대고객 가족사항 수정
				baseDao.update("rentCstmrDAO.rentCstmrFamilyU", map);
				// 영구 임대고객 정보 수정
				baseDao.update("rentCstmrDAO.rentCstmrU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				// 영구 임대고객 가족사항 삭제
				baseDao.update("rentCstmrDAO.rentCstmrFamilyD", map);
				// 영구 임대고객 정보 삭제
				//baseDao.update("rentCstmrDAO.rentCstmrD", map);
			}
		}
	}


	/**
	 * 파일 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void atchCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		// 파일 첨부확인
		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
		DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		Map targetMap = targetInfo.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
		Map fileInfoMap = fileInfo.get(0);  // 파일업로드 할 데이터 셋

		Object fileSn = targetMap.get("FILE_SN");

		Map<String, Object> upResult = null;
		if(fileInfo != null){
			// 계약관리테이블에 file_sn이 존재시 , inputFile 데이터셋에 file_sn을 설정
			// file_sn 없으면 새로 생성
			if(fileSn != null){
				fileInfoMap.put("FILE_SN" , fileSn);
			}
			NexacroMapDTO xpDto = getXpDto();
			fileUploadService.setFileLocation(getFileLocation());
			upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
		}

		List<Map> failList = new ArrayList<Map>();

		try {
			if(upResult != null){
				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				baseDao.insert("RNT01020300DAO.atchCUD", targetMap);
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
	 * 첨부파일 다운로드 목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void ATCH_DOWN_LIST(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT01020300DAO.ATCH_DOWN_LIST", inMap);
		}
		else {
			records = (List<Map>)baseDao.list("RNT01020300DAO.ATCH_DOWN_LIST", inVar);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}


	/**
	 * 첨부파일 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({"unchecked"})
	public void ATCH_FILE_DEL(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list==null) ? 0 : list.size();

		if (list != null && listSize > 0){
			Map<String, Object> inMap = list.get(0);

			for (int x = 0; x < listSize; x++) {
				Map<String, Object> map = list.get(x);

				String inFileSn = (String)map.get("FILE_SN");	// 파일일련번호

				// 컬럼 수정 후 - 파일일련번호, 파일순차번호
				boolean hasAtchFile = StringUtil.isNull(inFileSn) ? false : true;
				if(hasAtchFile){
					NexacroMapDTO xpDto = getXpDto();
					Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);

					log.info("첨부파일 삭제 결과 = " + delResult.toString());
				}
			}

			// 상세 목록카은트
			// 공통첨부 디테일 조회후 파일이 존재 하지 않으면 계약관리 테이블 file_sn 값을 null로 변경
			int fileCnt = (Integer)baseDao.select("RNT01020300DAO.FILECNT", inMap);
			if(fileCnt == 0) {
				// 계약관리 FILE_SN NULL로 업데이트
				baseDao.delete("RNT01020300DAO.ATCH_FILE_DEL", inMap);
			}
		}
		else{
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
	}
}