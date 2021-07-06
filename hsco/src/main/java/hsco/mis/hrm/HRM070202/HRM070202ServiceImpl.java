package hsco.mis.hrm.HRM070202;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

@Service("HRM070202Service")
public class HRM070202ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="FileUploadService")
	FileUploadServiceImpl FileUploadService;

	/**
	 * 여비기준 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBsrpStdr(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		List<Map> records1 = (List<Map>) baseDao.list("HRM070201DAO.tbhrmBsrpTrvct", inVar);
		List<Map> records2 = (List<Map>) baseDao.list("HRM070201DAO.tbhrmBsrpCty", inVar);
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
	}

	/**
	 * 개인별 출장내역 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBsrpIndvdl(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		List<Map> records = (List<Map>) baseDao.list("HRM070202DAO.selectBsrpIndvdl", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 개인별 출장내역 조회(출장취소팝업 조회 목적)
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBsrpIndvdlCanclList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		List<Map> records = (List<Map>) baseDao.list("HRM070202DAO.selectBsrpIndvdlCanclList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 출장비 상세내역, 첨부파일 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectIndvdlExpens(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		List<Map> records1 = (List<Map>) baseDao.list("HRM070202DAO.selectIndvdlExpens", inMap);	// 출장비 상세내역 조회
		List<Map> records2 = (List<Map>) baseDao.list("selectAtchmnFileList", inMap);				// 첨부파일 조회
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);

		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
	}
	
	/**
	 * 첨부파일 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFileList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
		outDataset.put("output1", outDsMap1);
	}
	
	/**
	 * 배차정보, 동승자정보 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCarAlcInfo(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		List<Map> records1 = (List<Map>) baseDao.list("HRM070202DAO.selectCarAlcInfo", inMap);		// 배차 신청내역 조회
		List<Map> records2 = (List<Map>) baseDao.list("HRM070202DAO.selectCralcFlwpsg", inMap);		// 배차 동승자 등록내역 조회
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);

		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
	}

	/**
	 * 출장내역 저장
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveBsrpDtl(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int bsrpSeq = 0;	// 출장순번 저장 변수
		
		// 개인별 출장내역
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					bsrpSeq = (Integer)baseDao.select("HRM070202DAO.selectBsrpSeq", map);
					map.put("BSRP_SEQ", bsrpSeq);
					baseDao.insert("HRM070202DAO.tbhrmBsrpIndvdlC", map);	// 개인별출장내역 등록
					break;
				case DataSet.ROW_TYPE_UPDATED:
					
					// 교통수단이 공용차량이 아닐 때, 배차키가 존재하면 배차키에 해당하는 배차정보 및 동승자 정보 삭제 처리
					if(!"001".equals(map.get("TFCMN_SE"))){
						if(!StringUtil.isNull((String)map.get("CARALC_SEQ"))){
							baseDao.delete("HRM070202DAO.deleteFlwpsg", map);		// 배차동승자 정보 삭제
						    baseDao.delete("HRM070202DAO.deleteReqst", map);		// 배차정보 삭제
						}
					}
					baseDao.update("HRM070202DAO.tbhrmBsrpIndvdlU", map);	// 개인별출장내역 수정
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM070202DAO.deleteFlwpsg", map);			// 배차동승자 정보 삭제
				    baseDao.delete("HRM070202DAO.deleteReqst", map);			// 배차정보 삭제
					baseDao.delete("HRM070202DAO.tbhrmIndvdlExpensD", map);		// 개인별 출장비용 상세내역 삭제
					
					// 관련 파일 삭제
					if (!StringUtil.isNull((String)map.get("FILE_SN"))) {
						FileUploadService.deleteFileAll((String)map.get("FILE_SN"));
	                }
					baseDao.delete("HRM070202DAO.tbhrmBsrpIndvdlD", map);		// 개인별 출장내역 삭제
					break;
			}
		}
		
		// 개인별 출장비용 상세내역
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					// 출장순번키 유무 체크
					if(StringUtil.isNull((String)map.get("BSRP_SEQ"))){
						map.put("BSRP_SEQ", bsrpSeq);
					}
					baseDao.insert("HRM070202DAO.tbhrmIndvdlExpensC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM070202DAO.tbhrmIndvdlExpensU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM070202DAO.tbhrmIndvdlExpensD", map);
					break;
			}
		}
		
		int existAt = 0;	// 배차시간 중복 건수 체크 변수
		int seq = 0;		// 배차등록 대표키 저장 변수
        
		// 배차등록 영역
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < list3.size(); x++) {
			Map map = list3.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:					
					existAt = (int)baseDao.select("HRM070202DAO.chkCarAlc", map);		// 배차시간 중복 체크
					if(existAt == 0) {
						seq = (Integer)baseDao.select("HRM090403DAO.selectCaralcSeq", map);		// 배차순번키 생성
						map.put("CARALC_SEQ", seq);
						
						// 출장순번키 유무 체크
						if(StringUtil.isNull((String)map.get("BSRP_SEQ"))){
							map.put("BSRP_SEQ", bsrpSeq);
						}
						
						baseDao.insert("HRM070202DAO.insertReqst", map);
					} else {
						String errMsg = "배차시간";
						throw new NexaServiceException("info.항목.중복.재입력.요청", errMsg);
					}
					
					break;
				case DataSet.ROW_TYPE_UPDATED:
					existAt = (int)baseDao.select("HRM070202DAO.chkCarAlc", map);		// 배차시간 중복 체크
					if(existAt == 0) {
						baseDao.update("HRM070202DAO.updateReqst", map);
					} else {
						String errMsg = "배차시간";
						throw new NexaServiceException("info.항목.중복.재입력.요청", errMsg);
					}
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM070202DAO.deleteFlwpsg", map);
				    baseDao.delete("HRM070202DAO.deleteReqst", map);
					break;
			}
		}

		// 동승자 영역
		DataSetMap list4 = (DataSetMap) inDataset.get("input4");		
		for (int x = 0; x < list4.size(); x++) {
			Map map = list4.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				
				// 배차정보 대표키 유무 체크
				if(StringUtil.isNull((String)map.get("CARALC_SEQ"))){
					map.put("CARALC_SEQ", seq);
				}
				baseDao.insert("HRM070202DAO.insertFlwpsg", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("HRM070202DAO.deleteFlwpsg", map);
				break;
			}
		}
	}
	
	/**
	 * 출장취소내역 저장
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveBsrpIndvdlCancl(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int bsrpSeq = 0;	// 출장순번 저장 변수
		
		// 개인별 출장 취소 내역
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					break;
				case DataSet.ROW_TYPE_UPDATED:
					bsrpSeq = (Integer)baseDao.select("HRM070202DAO.selectBsrpSeq", map);
					map.put("BSRP_SEQ", bsrpSeq);
					baseDao.insert("HRM070202DAO.tbhrmBsrpIndvdlCanclC", map);		// 개인별출장 취소내역 등록
					baseDao.insert("HRM070202DAO.tbhrmIndvdlExpensCanclC", map);	// 개인별출장비 상세내역 등록
					
					// 배차키가 존재하면 배차키에 해당하는 배차정보 및 동승자 정보 삭제 처리
					if("001".equals(map.get("TFCMN_SE"))){
						if(!StringUtil.isNull((String)map.get("CARALC_SEQ"))){
							baseDao.delete("HRM070202DAO.deleteFlwpsg", map);		// 배차동승자 정보 삭제
						    baseDao.delete("HRM070202DAO.deleteReqst", map);		// 배차정보 삭제
						}
					}
					
					bsrpSeq = (Integer)baseDao.select("HRM070202DAO.selectBsrpSeq", map);
					baseDao.delete("HRM070202DAO.tbhrmIndvdlExpensCanclC", map);	// 개인별출장비 상세내역 등록
					break;
				case DataSet.ROW_TYPE_DELETED:
					break;
			}
		}
	}
	
    /** 배차건별 배차 현황 조회(배차현황보기 버튼 클릭시) */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCarAlcList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		List<Map> records = (List<Map>) baseDao.list("HRM070202DAO.selectCarAlcList", inMap);
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    /** 일자별 차량 배차 현황 조회(배차기본정보 시간선택 버튼 클릭시) */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectVhcleCarAlcList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		List<Map> records = (List<Map>) baseDao.list("HRM070202DAO.selectVhcleCarAlcList", inMap);
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    /** 동승자 선택 팝업 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFlwpsgList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		List<Map> records = (List<Map>) baseDao.list("HRM070202DAO.selectFlwpsgList", inMap);
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    /** 개인별출장내역 일비, 식비 계산 실행 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectTrvctCalc(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		List<Map> records = (List<Map>) baseDao.list("HRM070202DAO.selectTrvctCalc", inMap);
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


}
