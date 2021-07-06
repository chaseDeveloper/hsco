package hsco.mis.sup.SUP020204;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SUP020204ServiceImpl.java
 * @Description  	: 제안자료 심사자료관리 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2015. 11. 06.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 06.				   양성모				최초생성
 * </pre>  
 */

@Service("sup020204Service")
public class SUP020204ServiceImpl extends BaseService implements SUP020204Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    /**
	 * 제안목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectPropseMastrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);		
		
		List <Map> records1;

		records1 = (List<Map>)baseDao.list("SUP020204DAO.selectPropseMastrList", inMap);
		
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
	}
	
    /**
	 * 제안자, 검토부서 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectPropseSubList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);		
		
		List <Map> records1;
		List <Map> records2;

		records1 = (List<Map>)baseDao.list("SUP020204DAO.selectPropsePropsrList", inMap);
		records2 = (List<Map>)baseDao.list("SUP020204DAO.selectPropseExmntDeptList", inMap);
		
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
	}
	
	/**
	 * 제안자, 검토부서, 제안 실시성과 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectPropseOprtnList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);		
		
		List <Map> records1;
		List <Map> records2;
		List <Map> records3;

		records1 = (List<Map>)baseDao.list("SUP020204DAO.selectPropsePropsrList", inMap);
		records2 = (List<Map>)baseDao.list("SUP020204DAO.selectPropseExmntDeptList", inMap);
		records3 = (List<Map>)baseDao.list("SUP020204DAO.selectPropseOprtnList", inMap);	// 제안실시성과 조회
		
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		outDsMap3.setRowMaps(records3);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
	}
	
    /**
	 * 검토부서의견 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectExmntOpinio( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);		
		
		List <Map> records1;

		records1 = (List<Map>)baseDao.list("SUP020204DAO.selectExmntOpinio", inMap);
		
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
	}	
	
    /**
	 * 보고서 데이터셋 생성
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectReportList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
	    
		List<Map> strList = new ArrayList<Map>(inDsMap.size());
		for(int i = 0; i < inDsMap.size(); i++){
		   strList.add(inDsMap.get(i));
		}
		  
		inMap.put("list", strList);
		
		List <Map> records1;
		List <Map> records2;

		records1 = (List<Map>)baseDao.list("SUP020204DAO.selectReportList", inMap);
		records2 = (List<Map>)baseDao.list("SUP020204DAO.selectReportOprtnList", inMap);
		
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
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
