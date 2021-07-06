package hsco.mis.bdg.BDG040305;

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
 * 
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : BDG040305ServiceImpl.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2016. 01. 04.
 * @version         : 1.0
 * @see             :
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 01. 04.                  정윤원                최초생성
 * </pre>
 */
@Service("BDG040305Service")
public class BDG040305ServiceImpl extends BaseService implements BDG040305Service {

    protected Logger     log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }

        DataSetMap outDsMap = new DataSetMap();

        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG040305DAO.selectNpylsStacnt", inMap));

        outDataset.put("output1", outDsMap);
    }


    @SuppressWarnings({ "rawtypes"})
    
    public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG040305DAO.updateNpylsStacnt", map);
                break;
            }
        }
    }
}
