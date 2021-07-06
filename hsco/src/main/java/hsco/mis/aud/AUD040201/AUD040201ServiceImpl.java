package hsco.mis.aud.AUD040201;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * &#64;Project Name    : 화성도시공사 차세대정보시스템
 * &#64;Class Name      : AUD040201ServiceImpl.java
 * &#64;Description     : 
 * &#64;author          : 정 민
 * &#64;since           : 2018. 01. 26.
 * &#64;version         : 1.0
 * &#64;see             : 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2018. 01. 26      정 민              최초생성
 * </pre>
 */

@Service("AUD040201Service")
public class AUD040201ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 설문 목록 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSjList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("AUD040201DAO.selectSjList", inMap));

		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 설문 관리 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("AUD040201DAO.selectDtls", inMap));
		outDataset.put("output2", outDsMap);

	}
	
	
	/**
	 * 설문 답변 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAswper(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("AUD040201DAO.selectAswper", inMap));
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 설문 관리 저장
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked"})
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();	
		
		// 채번용 키
		String qustnrManageSn = "";
		String qustnrDtlsSn = "";
		String qustnrAswperSn = "";
		
		for (int x = 0; x < listSize; x++) {				
			Map map = list.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					if(map.get("QUSTNR_MANAGE_SN") == null || "".equals(map.get("QUSTNR_MANAGE_SN"))) {
						qustnrManageSn = (String) baseDao.select("AUD040201DAO.qustnrManageKey", map);	
						map.put("QUSTNR_MANAGE_SN", qustnrManageSn);
					}
					baseDao.insert("AUD040201DAO.save", map);	
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("AUD040201DAO.update", map);		
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("AUD040201DAO.deleteAllAswper", map);
					baseDao.delete("AUD040201DAO.deleteAllDtls", map);
					baseDao.delete("AUD040201DAO.delete", map);
					break;	
			}				
		}
		
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");

		int listSize2 = (list2 == null) ? 0 : list2.size();	
		
		
		for (int x = 0; x < listSize2; x++) {				
			Map map = list2.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					if(map.get("QUSTNR_MANAGE_SN") == null || "".equals(map.get("QUSTNR_MANAGE_SN"))) {
						map.put("QUSTNR_MANAGE_SN", qustnrManageSn);
					}
					
					if(map.get("QUSTNR_DTLS_SN") == null || "".equals(map.get("QUSTNR_DTLS_SN"))) {
						qustnrDtlsSn = (String) baseDao.select("AUD040201DAO.qustnrDtlsManageKey", map);
						map.put("QUSTNR_DTLS_SN", qustnrDtlsSn);
					}
					baseDao.insert("AUD040201DAO.saveDtls", map);	
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("AUD040201DAO.updateDtls", map);		
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("AUD040201DAO.deleteAllAswper", map);
					baseDao.delete("AUD040201DAO.deleteDtls", map);
					break;	
			}				
		}	
		
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");

		int listSize3 = (list3 == null) ? 0 : list3.size();	
		
		
		for (int x = 0; x < listSize3; x++) {				
			Map map = list3.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					if(map.get("QUSTNR_MANAGE_SN") == null || "".equals(map.get("QUSTNR_MANAGE_SN"))) {
						map.put("QUSTNR_MANAGE_SN", qustnrManageSn);
					}
					
					if(map.get("QUSTNR_DTLS_SN") == null || "".equals(map.get("QUSTNR_DTLS_SN"))) {
						map.put("QUSTNR_DTLS_SN", qustnrDtlsSn);
					}
					
					if(map.get("QUSTNR_ASWPER_SN") == null || "".equals(map.get("QUSTNR_ASWPER_SN"))) {
						qustnrAswperSn = (String) baseDao.select("AUD040201DAO.qustnrAswperManageKey", map);
						map.put("QUSTNR_ASWPER_SN", qustnrAswperSn);
					}
					baseDao.insert("AUD040201DAO.saveAswper", map);	
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("AUD040201DAO.updateAswper", map);		
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("AUD040201DAO.deleteAswper", map);
					break;	
			}				
		}	

	}
}
