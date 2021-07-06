package hsco.mis.hrm.HRM010404;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM010404ServiceImpl.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 6. 9.
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
 *  2015. 6. 9.		박병일			최초생성
 *  2015.10.28.     박병일                   표준적용
 * </pre>
 */
@Service("HRM010404Service")
public class HRM010404ServiceImpl extends BaseService implements HRM010404Service {

    protected Logger                  log = LoggerFactory.getLogger(this.getClass());

    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    /**
     * P/L추천내역을 조회한다.
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void mainSearchList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        Map inMap = null;
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        List<Map> records;
        records = (List<Map>) baseDao.list("HRM010404DAO.mainSearchList", inMap);
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        outDataset.put("output1", outDsMap);
    }

    /**
     * P/L추천내역 신규,수정,삭제
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int mainCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        int iRow = 0;
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        int listSize = (list == null) ? 0 : list.size();
        System.err.print("detailDC listSize:" + listSize + "\n"); //
        if (listSize > 0) {
            Map map = list.get(0);
            baseDao.delete("HRM010404DAO.mainD", map);
            for (int x = 0; x < listSize; x++) {
                Map map1 = list.get(x);
                baseDao.insert("HRM010404DAO.mainC", map1);
            }
        }
        return iRow;
    }

    /**
     * P/L추천 대상 조회 : 부서장이 추천한 소속부서 2~3급 직원
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectEmpnoList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
    	Map inMap = null;
    	if (inDsMap != null) {
    		inMap = inDsMap.get(0);
    	}
    	
    	List<Map> records;
    	records = (List<Map>) baseDao.list("HRM010404DAO.selectEmpnoList", inMap);
    	DataSetMap outDsMap = new DataSetMap();
    	outDsMap.setRowMaps(records);
    	outDataset.put("output1", outDsMap);
    }
}