package hsco.mis.hrm.HRM070113;

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
 * @Class Name   	: HRM070113ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 12. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 04.   김형태		최초생성
 * </pre>  
 */

@Service("HRM070113Service")
public class HRM070113ServiceImpl extends BaseService implements HRM070113Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** 신청자 정보 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectEmpnoInfo(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM070113DAO.selectEmpnoInfo", inMap));
        
        outDataset.put("output1", outDsMap);
    }
    
    /** 영유아 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectInfantList(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM070113DAO.selectInfantList", inMap));
        
        outDataset.put("output1", outDsMap);
    }
	
    /** 휴직신청 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectLayOffList(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        // 휴직 신청 조회
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM070113DAO.selectLayOffList", inMap));
        
        // 복직 신청 조회
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM070113DAO.selectReinsat", inMap));
        
        outDataset.put("output1", outDsMap);
        outDataset.put("output2", outDsMap2);
    }
    
    /** 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    
    public void saveLayOffCUD(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        String seq = null;
        
        // 휴직현황 CUD
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            
            switch (rowType) {
                case DataSet.ROW_TYPE_INSERTED:
                    baseDao.insert("HRM070113DAO.insertLayOff", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED:
                    baseDao.update("HRM070113DAO.updateLayOff", map);
                    break;
                case DataSet.ROW_TYPE_DELETED:
                    baseDao.delete("HRM070113DAO.deleteLayOff", map);
                    break;
            }
        }
        
        // 복직현황 CUD
        DataSetMap list2 = (DataSetMap) inDataset.get("input2");
        for (int x = 0; x < list2.size(); x++) {
            Map map = list2.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            
            switch (rowType) {
                case DataSet.ROW_TYPE_INSERTED:
                    break;
                case DataSet.ROW_TYPE_UPDATED:
                    baseDao.update("HRM070113DAO.updateReinsat", map);
                    break;
                case DataSet.ROW_TYPE_DELETED:
                    baseDao.delete("HRM070113DAO.deleteReinsat", map);
                    break;
            }
        }
    }
}