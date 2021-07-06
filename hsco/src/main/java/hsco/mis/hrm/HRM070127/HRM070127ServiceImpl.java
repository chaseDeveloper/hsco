package hsco.mis.hrm.HRM070127;

import java.util.HashMap;
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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM070127ServiceImpl.java
 * @Description  	: 시간외근무확인등록(월별)
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
@Service("HRM070127Service")
public class HRM070127ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
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
		outDsMap.setRowMaps( (List<Map>)baseDao.list("HRM070127DAO.selectOvtmworkDtls",  inMap));
		outDataset.put("output1", outDsMap);

        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps( (List<Map>)baseDao.list("HRM070127DAO.selectOvtmworkDcsn",  inMap));
        outDataset.put("output2", outDsMap2);
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
   			baseDao.update("HRM070127DAO.ovtmworkDtlsU", map);		
   		}		
   		return iRow;
   	}

    /**
     * 확정시간 저장
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public void saveDcsnTm( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        Map map = new HashMap();
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");     
        int listSize = (list == null) ? 0 : list.size();        
        
        for (int x = 0; x < listSize; x++) {
            map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
                case DataSet.ROW_TYPE_INSERTED:
                case DataSet.ROW_TYPE_UPDATED:
                    baseDao.insert("HRM070127DAO.dcsnTmCU", map);
                    break;
            }
        }
    }
}