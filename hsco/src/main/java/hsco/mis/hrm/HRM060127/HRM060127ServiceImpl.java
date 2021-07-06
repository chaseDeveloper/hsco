package hsco.mis.hrm.HRM060127;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM060127ServiceImpl.java
 * @Description  	: 
 * @author       	: 이수지
 * @since        	: 2017. 06. 14.
 * @version      	: 1.0
 * @see          	: 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 06. 14.   이수지		최초생성
 * </pre>  
 */

@Service("HRM060127Service")
public class HRM060127ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /** 근무성적실적관리(개인별) */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectWorkScreAcmslt(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM060127DAO.selectWorkScreAcmslt", inMap));
		outDataset.put("output1", outDsMap1);
		
		//업무추진내역 및 실적
		DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM060126DAO.selectJobPrtnAcmsltList", inMap));
        outDataset.put("output2" ,outDsMap2);
        
        // 실적기간 조회
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps((List<Map>) baseDao.list("HRM060126DAO.selectAcmsltPd", inMap));
		outDataset.put("output3", outDsMap3);
		
		// 근무평정결과 조회
		DataSetMap outDsMap4 = new DataSetMap();
		outDsMap4.setRowMaps((List<Map>) baseDao.list("HRM060106DAO.selectWorkEvlTrgter", inMap));
		outDataset.put("output4", outDsMap4);
		
	}
    
    /** 근무성적실적관리(개인별) 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    public void saveWorkScreAcmslt(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        baseDao.insert("HRM060127DAO.saveWorkScreAcmslt", inMap);
    }
    
	/**
	 * 첨부파일 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectFileList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
        outDataset.put("output1", outDsMap);
    }
}