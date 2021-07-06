package hsco.mis.hrm.HRM090101;

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
 * @Class Name   	: HRM090101ServiceImpl.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2017. 05. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 05. 02.   양성모		최초생성
 * </pre>  
 */

@Service("HRM090101Service")
public class HRM090101ServiceImpl extends BaseService implements HRM090101Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /** 공고대장 등록내역 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPblancList(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090101DAO.selectPblancList", inMap));
        
        outDataset.put("output1", outDsMap);
    }
    
    /** 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    
    public void savePblancCUD(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("HRM090101DAO.insertPblanc", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM090101DAO.updatePblanc", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM090101DAO.deletePblanc", map);
                break;
            }
        }
    }
}