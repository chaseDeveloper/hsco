package hsco.mis.hrm.HRM090203;

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
 * @Class Name   	: HRM090203ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 10. 23.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10.23.   김형태		최초생성
 * </pre>  
 */

@Service("HRM090203Service")
public class HRM090203ServiceImpl extends BaseService implements HRM090203Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /** 실적증명발급내역 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmIssuList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090203DAO.tbhrmIssuList", inMap));
		
		outDataset.put("output1", outDsMap);
	}
    
    /** 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    
    public void tbhrmIssuSave(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        System.out.println('2');
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {System.out.println('3');
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("HRM090203DAO.insertIssu", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:System.out.println('4');
                baseDao.update("HRM090203DAO.updateIssu", map);System.out.println('5');
                break;
            case DataSet.ROW_TYPE_DELETED:System.out.println('4');
                baseDao.delete("HRM090203DAO.deleteIssu", map);System.out.println('5');
                break;
            }
        }
    }
}