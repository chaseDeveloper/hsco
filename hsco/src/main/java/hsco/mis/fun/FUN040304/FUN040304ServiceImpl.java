package hsco.mis.fun.FUN040304;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: fun040304ServiceImpl.java
 * @Description  	: 가상계좌 수납내역을 조회하는 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2015. 09. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 09. 24.				   양성모				최초생성
 * </pre>  
 */

@Service("fun040304Service")
public class FUN040304ServiceImpl extends BaseService implements FUN040304Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    /**
	 * 월간자금계획목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMnthngCptalPlanList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("FUN040304DAO.selectMnthngCptalPlanList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 월간자금계획 CU
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 * @throws UnsupportedEncodingException 
	 */	
    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public void MnthngCptalPlanCU( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException, UnsupportedEncodingException {
    	
        // input Map get
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        
        int listSize = (list == null) ? 0 : list.size();
        String mm = "";
        
		for (int i = 0; i < listSize; i++) {
			
			Map map = list.get(i);
			
			for (int j=1; j<=12; j++) {
				
				// 승인되지 않은 내역만 저장
				if ("0".equals(map.get("CONFM_AT"))) {
					mm = StringUtil.lpad(String.valueOf(j), '0', 2);
					
					map.put("PLAN_YM"     ,map.get("BUDGET_YEAR")+mm);
					map.put("PLAN_AMOUNT" ,map.get("PLAN_AMOUNT_"+mm));
	
					baseDao.insert("FUN040304DAO.MnthngCptalPlanCU", map);
				}
			}
		}
    }		


	/**
	 * 승인
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 * @throws UnsupportedEncodingException 
	 */	
    @SuppressWarnings({ "rawtypes" })
    
    public void updateConfmAt( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        // input Map get
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        
        int listSize = (list == null) ? 0 : list.size();
        
		for (int i = 0; i < listSize; i++) {
			
			Map map = list.get(i);
			
			if(String.valueOf(map.get("CHK")).equals(String.valueOf(map.get("CONFM_AT")))) continue;
			
			baseDao.insert("FUN040304DAO.updateConfmAt", map);
		}
    }		
}