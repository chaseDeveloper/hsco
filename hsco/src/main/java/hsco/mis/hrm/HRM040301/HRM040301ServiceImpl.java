package hsco.mis.hrm.HRM040301;

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
 * @Class Name   	: HRM040301ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 09. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 09.07.   김형태		최초생성
 * </pre>  
 */

@Service("HRM040301Service")
public class HRM040301ServiceImpl extends BaseService implements HRM040301Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /** 징계기준코드 목록조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmDslrcList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM040301DAO.tbhrmDslrcList", inMap));
		
		outDataset.put("output1", outDsMap);
	}
    
    /** 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    
    public void tbhrmDslrcSave(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("HRM040301DAO.insertDslrc", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM040301DAO.updateDslrc", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM040301DAO.deleteDslrc", map);
                break;
            }
        }
    }
	
}