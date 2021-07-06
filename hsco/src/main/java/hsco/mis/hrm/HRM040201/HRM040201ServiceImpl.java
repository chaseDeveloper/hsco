package hsco.mis.hrm.HRM040201;

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
 * @Class Name   	: HRM040201ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 09. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 09.04.   김형태		최초생성
 * </pre>  
 */

@Service("HRM040201Service")
public class HRM040201ServiceImpl extends BaseService implements HRM040201Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /** 제안입상자 목록조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmPropseWnpzList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM040201DAO.tbhrmPropseWnpzList", inMap));
		
		outDataset.put("output1", outDsMap);
	}
    
    /** 제안입상 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    
    public void tbhrmPropseWnpzSave(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("HRM040201DAO.insertPropseWnpz", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM040201DAO.updatePropseWnpz", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM040201DAO.deletePropseWnpz", map);
                break;
            }
        }
    }
    
    /** 사외수상자 목록조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmOutCompanyWnpzList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM040201DAO.tbhrmOutCompanyWnpzList", inMap));
		
		outDataset.put("output1", outDsMap);
	}
    
    /** 사외수상 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    
    public void tbhrmOutCompanyWnpzSave(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("HRM040201DAO.insertOutCompanyWnpz", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM040201DAO.updateOutCompanyWnpz", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM040201DAO.deleteOutCompanyWnpz", map);
                break;
            }
        }
    }
	
}