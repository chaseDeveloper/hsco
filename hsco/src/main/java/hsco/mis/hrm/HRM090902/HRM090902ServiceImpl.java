package hsco.mis.hrm.HRM090902;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM090902ServiceImpl.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2019. 10. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 WebCash, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                        내용
 * ------------------------------------------------------------------
 *  2019. 10. 18.			  양성모			최초생성
 * </pre>
 */

@Service("HRM090902Service")
public class HRM090902ServiceImpl extends BaseService implements HRM090902Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService; 
    
    /**
     * 회의자료조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectMstInfo( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
	    Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> result1;
        
        result1 = (List<Map>)baseDao.list("HRM090902DAO.selectMtgDtaHist", inMap);	// 회의자료이력 조회(과거에 등록한 해당 부서의 자료)

        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(result1);

        outDataset.put("output1", outDsMap);
    }
    
    /**
     * 첨부파일 조회
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectFileList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	Map inMap = null;
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
    
    	if (inDsMap != null) {
    		inMap = inDsMap.get(0);
    	}
    
    	DataSetMap outDsMap1 = new DataSetMap();
    	outDsMap1.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
    	outDataset.put("output1", outDsMap1);
    }
}
