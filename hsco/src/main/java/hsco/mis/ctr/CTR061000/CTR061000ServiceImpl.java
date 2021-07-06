package hsco.mis.ctr.CTR061000;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CTR061000Service.java
 * @Description  	: 행정사무감사자료 조회하는 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 10. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 07.	이수지		최초생성
 * </pre>  
 */
@Service("CTR061000Service")
public class CTR061000ServiceImpl extends BaseService implements CTR061000Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/**
	 * 행정사무감사자료
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void auditDtaList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        DataSetMap outDsMap3 = new DataSetMap();
        inMap.put("CHRCTR_PREPAR_VALUE_2", 1);
        outDsMap1.setRowMaps((List<Map>) baseDao.list("CTR061000DAO.auditDtaList1", inMap));
        inMap.put("CHRCTR_PREPAR_VALUE_2", 2);
        outDsMap2.setRowMaps((List<Map>) baseDao.list("CTR061000DAO.auditDtaList1", inMap));
        inMap.put("CHRCTR_PREPAR_VALUE_2", 9);
        outDsMap3.setRowMaps((List<Map>) baseDao.list("CTR061000DAO.auditDtaList1", inMap));
        
        DataSetMap outDsMap4 = new DataSetMap();
        DataSetMap outDsMap5 = new DataSetMap();
        DataSetMap outDsMap6 = new DataSetMap();
        inMap.put("ANACT_KND", "02");	//구입과지출결의서
        outDsMap4.setRowMaps((List<Map>) baseDao.list("CTR061000DAO.auditDtaList2", inMap));
        inMap.put("ANACT_KND", "06");	//공사와집행결의서
        outDsMap5.setRowMaps((List<Map>) baseDao.list("CTR061000DAO.auditDtaList2", inMap));
        inMap.put("ANACT_KND", "08");	//용역과지출결의서
        outDsMap6.setRowMaps((List<Map>) baseDao.list("CTR061000DAO.auditDtaList2", inMap));
        
        outDataset.put("output1", outDsMap1);
        outDataset.put("output2", outDsMap2);
        outDataset.put("output3", outDsMap3);
        outDataset.put("output4", outDsMap4);
        outDataset.put("output5", outDsMap5);
        outDataset.put("output6", outDsMap6);
	}
	
}