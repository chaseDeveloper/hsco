package hsco.pms.prj.PRJ010131;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ010131ServiceImpl.java
 * @Description  	: 
 * @author       	: 정  민
 * @since        	: 2017. 11. 09.
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
 *  2017. 11. 09.                  정  민                최초생성
 * </pre>
 */

@Service("PRJ010131Service")
public class PRJ010131ServiceImpl extends BaseService implements PRJ010131Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    
    /**
	 * 사업분류별 계약현황 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBsnsClCntrctList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        
    	if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
    	DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010131DAO.selectBsnsClCntrctList", inMap));
        outDataset.put("output1", outDsMap);
        
    }
    
    
    /**
	 * 사업분류별 계약현황 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBsnsDstrcCntrctList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        
    	if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
    	DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010131DAO.selectBsnsDstrcCntrctList", inMap));
        outDataset.put("output1", outDsMap);
        
    }

}
