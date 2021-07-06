package hsco.mis.acc.ACC030105;

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
 * @Class Name   	: ACC030105Service.java
 * @Description  	: 국세청 전자세금계산서 자료 동기화처리 (엑셀 UPLOAD) ServiceImpl 클래스
 * @author       	: 이상명
 * @since        	: 2015. 07. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 20.	이상명		최초생성
 * </pre>  
 */
@Service("acc030105Service")
public class ACC030105ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(ACC030105ServiceImpl.class);
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectTaxBillList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
		if(log.isInfoEnabled()) log.info("selectTaxBillList Started!");
		
		Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC030105DAO.selectTaxBillList", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 국세청자료 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void saveTaxBill(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap input1 = (DataSetMap) inDataset.get("input1");
        DataSetMap input2 = (DataSetMap) inDataset.get("input2");
        
        if(input1 != null && input1.size() == 1) {
        	Map condMap = input1.get(0);
        	if("1".equals((String)condMap.get("TAXBIL_CL"))) {
        		for (Map<String, Object> map : input2.getRowMaps()) {
        			map.put("COND", condMap);
                    if(baseDao.update("ACC030105DAO.elctrnTaxBillU", map) == 0) {
                    	baseDao.insert("ACC030105DAO.elctrnTaxBillC", map);
                    }
                }
        	} else {
        		for (Map<String, Object> map : input2.getRowMaps()) {
        			map.put("COND", condMap);
                    if(baseDao.update("ACC030105DAO.elctrnBillU", map) == 0) {
                    	baseDao.insert("ACC030105DAO.elctrnBillC", map);
                    }
                }
        	}
        	
        }
        
        
	}
}