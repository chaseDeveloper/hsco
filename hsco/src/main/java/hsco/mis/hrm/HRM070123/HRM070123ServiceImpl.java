package hsco.mis.hrm.HRM070123;

import java.util.HashMap;
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
 * @Class Name   	: HRM070123ServiceImpl.java
 * @Description  	: 시간외근무확인등록
 * @author       	: 정  민
 * @since        	: 2017. 05. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 05. 15.				정  민				최초생성
 */
@Service("HRM070123Service")
public class HRM070123ServiceImpl extends BaseService implements HRM070123Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    
    /**
	 * 근무일자 목록조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOvtmworkYmList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");    	
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		
		outDsMap.setRowMaps( (List<Map>)baseDao.list("HRM070123DAO.selectOvtmworkYmList",  inMap));
		
		outDataset.put("output1", outDsMap);
		
	}    
	
    
    /**
	 * 시간외근무내역조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOvtmworkDtls( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");    	
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		
		outDsMap.setRowMaps( (List<Map>)baseDao.list("HRM070123DAO.selectOvtmworkDtls",  inMap));
		
		outDataset.put("output1", outDsMap);
		
	} 
    
    
    /**
	 * 시간외근무내역 수정(인정시간)
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	public int ovtmworkDtlsU( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
   		
   		int iRow = 0;
   		Map map = new HashMap();
   		
   		DataSetMap list = (DataSetMap) inDataset.get("input1");		
   		int listSize = (list == null) ? 0 : list.size();		
   		
   		for (int x = 0; x < listSize; x++) {
   			map = list.get(x);
   			baseDao.update("HRM070123DAO.ovtmworkDtlsU", map);		
   		}		
   		return iRow;
   	}

}