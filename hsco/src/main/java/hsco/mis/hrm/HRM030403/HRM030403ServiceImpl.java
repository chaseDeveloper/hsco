package hsco.mis.hrm.HRM030403;

import java.util.List;
import java.util.Map;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM030403ServiceImpl.java
 * @Description  	: 인사현황
 * @author       	: 정 민 
 * @since        	: 2017. 06. 19.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017. 06. 19.   정 민		최초생성
 * </pre>  
 */

@Service("HRM030403Service")
public class HRM030403ServiceImpl extends BaseService implements HRM030403Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** 인사현황(탭1 : 학력현황) 목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAcdmcrSttusList(DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM030403DAO.selectAcdmcrSttusList", inMap));
		
		outDataset.put("output1", outDsMap);
	}
    
	/** 인사현황(탭2 : 자격증현황) 자격증 통계 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCrqfcStats(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

	    DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
		    inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM030403DAO.selectCrqfcStats", inMap));
		outDataset.put("output1", outDsMap);
	}
    
    /** 인사현황(탭2 : 자격증현황) 목록 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectQualfSttusList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    
	    DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
		    inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM030403DAO.selectQualfSttusList", inMap));
		outDataset.put("output1", outDsMap);

	}
    
    /** 인사현황(탭3 : 현보직근무연수) 목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectNowAppntWorkYycntList(DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
		    inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM030403DAO.selectNowAppntWorkYycntList", inMap));
		
		outDataset.put("output1", outDsMap);
    }
    
    /** 인사현황(탭4 : 시점별부서현황) 목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPnttmDeptSttusList(DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
		    inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM030403DAO.selectPnttmDeptSttusList", inMap));
		
		outDataset.put("output1", outDsMap);
    }
    
    /** 인사현황(탭5 : 시점별사업소현황) 목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPnttmBizplcSttusList(DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
		    inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM030403DAO.selectPnttmBizplcSttusList", inMap));
		
		outDataset.put("output1", outDsMap);
    }
    
    /** 인사현황(탭6 : 겸직자현황) 목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCtsEmpSttusList(DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM030403DAO.selectCtsEmpSttusList"));
		
		outDataset.put("output1", outDsMap);
    }
    
    /** 인사현황(탭7 : 부서장현황) 목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDprlrSttusList(DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM030403DAO.selectDprlrSttusList"));
		
		outDataset.put("output1", outDsMap);
    }
}