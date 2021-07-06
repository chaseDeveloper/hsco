package hsco.mis.sal.SAL020105;

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
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL020105ServiceImpl.java
 * @Description  	: 자격수당신청관리
 * @author       	: 이상명
 * @since        	: 2015. 7. 6.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 6.					이상명				최초생성
 * </pre>  
 */

@Service("SAL020105Service")
public class SAL020105ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    
    /**
	 * 자격수당신청정보 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectQualfAllwncReqstList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("SAL020105DAO.selectQualfAllwncReqstList", inMap));
		
		outDataset.put("output1", outDsMap);	
   		
   	}	
    
    /**
	 * 자격수당신청정보 팝업 승인정보, 신청인정보 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectQualfAllwncReqstInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
   		DataSetMap outDsMap = new DataSetMap();
		
   		// 자격수당신청정보 팝업 승인정보, 신청인정보, 신청자격증정보 조회
		outDsMap.setRowMaps((List<Map>)baseDao.list("SAL020105DAO.selectQualfAllwncReqst", inMap));
   		
   		outDataset.put("output1", outDsMap);	
   		
   		outDsMap = new DataSetMap();
   		
   		// 자격수당신청정보 팝업 신청인정보(보유자격증정보) 조회
   		outDsMap.setRowMaps((List<Map>)baseDao.list("SAL020105DAO.selectHoldCrqfcInfo", inMap));
   		
   		outDataset.put("output2", outDsMap);
   		
   	}	
	
    /**
   	 * 자격수당신청정보 등록 
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public void qualfAllwncReqstInfoC( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
   		
   		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
   		Map inMap = null;
   		
   		if (inDsMap != null)
   			inMap = inDsMap.get(0);   		
 
   		baseDao.insert("SAL020105DAO.qualfAllwncReqstInfoC", inMap);
   	}
   	
   	
    /**
   	 * 자격수당신청정보 수정 
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public void qualfAllwncReqstInfoU( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
   		
   		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
   		Map inMap = null;
   		
   		if (inDsMap != null)
   			inMap = inDsMap.get(0);   	
   		
   		baseDao.insert("SAL020105DAO.qualfAllwncReqstInfoU", inMap);
   		
   		// 승인상태가 승인일 때, 승인정보 수정 및 인사자격테이블에 해당 자격수당신청정보를 적용
   		if(inMap.get("SALARY_CONFM_AT").equals("2")) {
   	   		if(inMap.get("REQST_SE").equals("1")) {	// 신청구분 = 취득
   	   			baseDao.insert("SAL020105DAO.hrmQualfAllwncReqstC", inMap);
   	   		}
   	   		if(inMap.get("REQST_SE").equals("2")) { // 신청구분 = 상실
   	   			baseDao.insert("SAL020105DAO.hrmQualfAllwncReqstD", inMap);

   	   		}
   		}
   	}
   	
    /**
   	 * 자격수당신청정보 삭제
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
    
	@SuppressWarnings({ "rawtypes" })
	public void qualfAllwncReqstInfoD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		Map map = null;

		int listSize = (list == null) ? 0 : list.size();

		for (int i = 0; i < listSize; i++) {
			map = list.get(i);
			int rowType = ((Integer) (Object) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("SAL020105DAO.qualfAllwncReqstInfoD", map);
				break;
			}
		}
	}
		
	
}
