package hsco.mis.bdg.BDG030404;

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
 * @Class Name      : BDG030404ServiceImpl.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 8. 25.
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
 *  2015. 8. 25.                  정윤원                최초생성
 * </pre>
 */
@Service("BDG030404Service")
public class BDG030404ServiceImpl extends BaseService implements BDG030404Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAcntExcutBudget(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030404DAO.selectAcntExcutBudget", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSub(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030404DAO.selectExpndtrExcutBudget", inMap));     // 지출단위별예산현황
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSub2(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030404DAO.selectAccDtlTemp", inMap));             // 지출현황(임시)
        outDataset.put("output1", outDsMap);
    }
}
