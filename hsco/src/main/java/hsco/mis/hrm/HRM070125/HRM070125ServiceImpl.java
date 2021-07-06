package hsco.mis.hrm.HRM070125;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM070125ServiceImpl.java
 * @Description  	: 
 * @author       	: 이수지
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
 *  2017. 05. 15.   이수지		최초생성
 * </pre>  
 */

@Service("HRM070125Service")
public class HRM070125ServiceImpl extends BaseService implements HRM070125Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** 직원목록  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDeptList(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM070125DAO.selectDeptList", inMap));
        
        outDataset.put("output1", outDsMap);
    }
    
    /** 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    public void ovtmwrkLmtSave(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            baseDao.update("HRM070125DAO.ovtmwrkLmtSave", map);
        }
    }

    
    /** 전년도 복사 */
    @SuppressWarnings({ "rawtypes" })
    public void copyLmtData(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        if(list.size()>0){
            Map map = list.get(0);
            baseDao.delete("HRM070125DAO.deleteLmtData", map);
            baseDao.insert("HRM070125DAO.copyLmtData", map);
        }
    }
    
}