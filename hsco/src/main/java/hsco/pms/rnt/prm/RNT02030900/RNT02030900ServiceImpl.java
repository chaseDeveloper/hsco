package hsco.pms.rnt.prm.RNT02030900;

import java.util.ArrayList;
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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   		: RNT02030900ServiceImpl.java
 * @Description  		: 매입임대 소유물건
 * @author       			: 변승우
 * @since        			: 2015. 11. 26.
 * @version      			: 1.0
 * @see          			:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 26.					변승우				최초생성
 * </pre>
 */


@Service("RNT02030900Service")
public class RNT02030900ServiceImpl extends BaseService{
	@Resource(name = "FileUploadService")
	protected FileUploadServiceImpl fileUploadService;

	/**
	 * 계약자 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void puchasCntrctList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("RNT02030900DAO.puchasCntrctList", inMap);			// 계약자 목록
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
	public void puchasPosesnThingList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("RNT02030900DAO.puchasPosesnThingList", inMap);		// 소유물건정보 목록
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
	
	public void puchasPosesnThingCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT02030900DAO.puchasPosesnThingC", map);	// 소유물건정보 생성
			}
			else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT02030900DAO.puchasPosesnThingU", map);	// 소유물건정보 수정
			}
			else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("RNT02030900DAO.puchasPosesnThingD", map);	// 소유물건정보 삭제
			}

			baseDao.update("RNT02030900DAO.housePosesnAtU", map);		// 소유물건정보 수정(주태소유 유무) 0:무, 1:유
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
	public void puchasPosesnThingChk( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02030900DAO.puchasPosesnThingChk", inMap);			// 소유물건정보 등록 대상자 체크
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
	@SuppressWarnings({ "rawtypes"})
	public void puchasPosesnThingCmulti( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch(rowType) {

			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT02030900DAO.SPRNT_PUCHAS_POSESN_I", map);		// 소유물건 일괄등록
				if ("-1".equals(map.get("OUT_RESULT_CD").toString())) {
					throw new NexaServiceException("errors.항목.값.무효", map.get("OUT_RESULT_MSG").toString());
				}
				if ("-2".equals(map.get("OUT_RESULT_CD").toString())) {
					throw new NexaServiceException("err.예외상황.발생.SQL", map.get("OUT_RESULT_MSG").toString());
				}
				break;
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
				baseDao.insert("RNT02030900DAO.atchCUD", targetMap);
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

		List <Map> records = null;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT02030900DAO.ATCH_DOWN_LIST", inMap);		// 첨부파일 다운로드 목록 조회
		}
		else {
			records = (List<Map>)baseDao.list("RNT02030900DAO.ATCH_DOWN_LIST", inVar);		// 첨부파일 다운로드 목록 조회
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
					@SuppressWarnings("unused")
					Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
				}
			}

			// 상세 목록카은트
			// 공통첨부 디테일 조회후 파일이 존재 하지 않으면 계약관리 테이블 file_sn 값을 null로 변경
			int fileCnt = (Integer)baseDao.select("RNT02030900DAO.FILECNT", inMap);
			if(fileCnt == 0){
				baseDao.delete("RNT02030900DAO.ATCH_FILE_DEL", inMap);		// 계약관리 FILE_SN NULL로 업데이트
			}
		}
		else{
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
	}
}
