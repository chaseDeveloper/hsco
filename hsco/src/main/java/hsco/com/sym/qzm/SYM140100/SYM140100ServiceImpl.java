package hsco.com.sym.qzm.SYM140100;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * &#64;Project Name    : 화성도시공사 차세대정보시스템
 * &#64;Class Name      : SYM140100ServiceImpl.java
 * &#64;Description     : 
 * &#64;author          : 권재만
 * &#64;since           : 2020. 06. 02.
 * &#64;version         : 1.0
 * &#64;see             : 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2020. 06. 02      권재만              최초생성(AUD040201소스와 동일)
 * </pre>
 */

@Service("SYM140100Service")
public class SYM140100ServiceImpl extends BaseService {

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
		outDsMap.setRowMaps((List<Map>) baseDao.list("SYM140100DAO.selectSjList", inMap));

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
		outDsMap.setRowMaps((List<Map>) baseDao.list("SYM140100DAO.selectDtls", inMap));
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
		outDsMap.setRowMaps((List<Map>) baseDao.list("SYM140100DAO.selectAswper", inMap));
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
						qustnrManageSn = (String) baseDao.select("SYM140100DAO.qustnrManageKey", map);	
						map.put("QUSTNR_MANAGE_SN", qustnrManageSn);
					}
					baseDao.insert("SYM140100DAO.save", map);	
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("SYM140100DAO.update", map);		
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("SYM140100DAO.deleteAllAswper", map);
					baseDao.delete("SYM140100DAO.deleteAllDtls", map);
					baseDao.delete("SYM140100DAO.delete", map);
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
						qustnrDtlsSn = (String) baseDao.select("SYM140100DAO.qustnrDtlsManageKey", map);
						map.put("QUSTNR_DTLS_SN", qustnrDtlsSn);
					}
					baseDao.insert("SYM140100DAO.saveDtls", map);	
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("SYM140100DAO.updateDtls", map);		
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("SYM140100DAO.deleteAllAswper", map);
					baseDao.delete("SYM140100DAO.deleteDtls", map);
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
						qustnrAswperSn = (String) baseDao.select("SYM140100DAO.qustnrAswperManageKey", map);
						map.put("QUSTNR_ASWPER_SN", qustnrAswperSn);
					}
					baseDao.insert("SYM140100DAO.saveAswper", map);	
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("SYM140100DAO.updateAswper", map);		
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("SYM140100DAO.deleteAswper", map);
					break;	
			}				
		}	

	}
}
