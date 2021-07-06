package hsco.mis.sal.SAL060103;

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
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL060102ServiceImpl.java
 * @Description  	: 학자금대부내역조회
 * @author       	: 이상명
 * @since        	: 2016. 4. 6.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 4. 6.					이상명				최초생성
 * </pre>  
 */

@Service("SAL060103Service")
public class SAL060103ServiceImpl extends BaseService implements SAL060103Service {
	
    protected Logger log = LoggerFactory.getLogger(this.getClass());   
	
    /**
	 * 학자금대부내역 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSchxpnLoanList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL060103DAO.selectSchxpnLoanList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL060103DAO.selectSchxpnLoanList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		List <Map> records2;

        if (inMap != null) {
            records2 = (List<Map>)baseDao.list("SAL060103DAO.selectSchxpnLoan2List", inMap);
        } else {
            records2 = (List<Map>)baseDao.list("SAL060103DAO.selectSchxpnLoan2List", inVar);
        }
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);
        
        outDataset.put("output2", outDsMap2);
   		
   	}
    
       
    
}
