package hsco.pms.prj.PRJ010104;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ010104ServiceImpl.java
 * @Description  	: 
 * @author       	: 이수지
 * @since        	: 2017. 11. 20.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 11. 20.                  이수지                최초생성
 * </pre>
 */

@Service("PRJ010104Service")
public class PRJ010104ServiceImpl extends BaseService {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDsMain(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010104DAO.selectDs", inMap));
        outDataset.put("output1", outDsMap);
        

        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps((List<Map>) baseDao.list("PRJ010104DAO.selectCntrProgres", inMap));
        outDataset.put("output2", outDsMap2);
        
    }

}
