package hsco.mis.bdg.BDG030204;

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
 * @Class Name      : BDG030204ServiceImpl.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 8. 17.
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
 *  2015. 8. 17.                  정윤원                최초생성
 * </pre>
 */
@Service("BDG030204Service")
public class BDG030204ServiceImpl extends BaseService implements BDG030204Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    /**
     * 예산집행율(부서별) 조회
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDeptExcutRt(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>)baseDao.list("BDG030204DAO.selectDeptExcutRt", inMap));
        outDataset.put("output1", outDsMap);
    }
}
