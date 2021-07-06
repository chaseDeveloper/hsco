package hsco.mis.bdg.BDG040308;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * 
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : BDG040308ServiceImpl.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 11. 5.
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
 *  2015. 11. 5.                  정윤원                최초생성
 * </pre>
 */
@Service("BDG040308Service")
public class BDG040308ServiceImpl extends BaseService implements BDG040308Service {

    protected Logger     log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }

        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        DataSetMap outDsMap3 = new DataSetMap();
        DataSetMap outDsMap4 = new DataSetMap();

        outDsMap1.setRowMaps((List<Map>) baseDao.list("BDG040308DAO.selectIncmeBudgetTot", inMap));
        outDsMap2.setRowMaps((List<Map>) baseDao.list("BDG040308DAO.selectExpndtrBudgetTot", inMap));

        outDataset.put("output1", outDsMap1);
        outDataset.put("output2", outDsMap2);
        outDataset.put("output3", outDsMap3);
        outDataset.put("output4", outDsMap4);
    }
}
