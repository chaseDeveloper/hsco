package hsco.mis.hrm.HRM090701;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM090701ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 10. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10.20.   김형태		최초생성
 * </pre>  
 */

@Service("HRM090701Service")
public class HRM090701ServiceImpl extends BaseService implements HRM090701Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** 자원봉사정보 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void tbhrmSrvcList(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090701DAO.tbhrmSrvcList", inMap));
        
        outDataset.put("output1", outDsMap);
    }
    
    /** 참가자목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getPrtcpntSearch(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090701DAO.getPrtcpntSearch", inMap));
		
		outDataset.put("output1", outDsMap);
	}
    
    /** 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    
    public void tbhrmSrvcSave(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        // 참가자 목록 저장(CUD)
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("HRM090701DAO.insertPrtcpnt", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM090701DAO.updatePrtcpnt", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM090701DAO.deletePrtcpnt", map);
                break;
            }
        }
        
        // 자원봉사정보 저장(CUD)
        list = (DataSetMap) inDataset.get("input2");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("HRM090701DAO.insertSrvc", map);
                baseDao.insert("HRM090701DAO.insertPrtcpntLeader", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM090701DAO.updateSrvc", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM090701DAO.deleteAllPrtcpnt", map);
                baseDao.delete("HRM090701DAO.deleteSrvc", map);
                break;
            }
        }
    }
}