package hsco.com.sym.esm.SYM080100;

import java.util.HashMap;
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
 * @Class Name   	: SYM080100ServiceImpl.java
 * @Description  	: 잔지결재진행현황을 관리하는 서비스 구현체 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 9. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------

 * </pre>  
 */
@Service("SYM080100Service")
public class SYM080100ServiceImpl extends BaseService implements SYM080100Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM080100ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    /**
	 * 전자결재진행현황을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void SYM080100Info( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null){
			inMap = (Map<String, Object>)inDsMap.get(0);
		}
		
		List<Map> records;
		records = (List<Map>)baseDao.list("SYM080100DAO.ElctrnSanctionMastrInfo", inMap);		

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);  //data
		
		//공통 Variable 전송방법 재확인필요
		DataSetMap outConfDsMap = new DataSetMap();
		Map<String, String> mapOutConf = new HashMap<String, String>();
		mapOutConf.put("DRFT_URL", getESanctionUrl());
		outConfDsMap.add(mapOutConf);
		outDataset.put("outputConf", outConfDsMap);
	}
    
    /**
	 * 전자결재현황을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void SYM080100List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		records = (List<Map>)baseDao.list("SYM080100DAO.ElctrnSanctionList", inMap);		

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * 전자결재진행 이력을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void SYM080100SanctnHist( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

//		if (inMap != null) {
			records = (List<Map>)baseDao.list("SYM080100DAO.SanctnHistList", inMap);
//		} else {
//			records = (List<Map>)baseDao.list("SYM080100DAO.SYM080100CodeList", inVar);
//		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);
		
	}

	

}
