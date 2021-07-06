package hsco.eis.eis.EIS030201;

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
 * @Class Name   	: EIS030201ServiceImpl.java
 * @Description  	: 
 * @author       	: 고진호
 * @since        	: 2016. 3. 28.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 3. 28.		고진호			최초생성
 * </pre>  
 */
@Service("EIS030201Service")
public class EIS030201ServiceImpl extends BaseService implements EIS030201Service {
	
	protected Logger log = LoggerFactory.getLogger(EIS030201ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;   
    
	// 사업코드 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void bsnsList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		if(log.isDebugEnabled()) log.debug("bsnsList started!");
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.bsnsList", inMap));

		outDataset.put("output1", outDsMap);
	}
	
	//사업상세정보 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void bsnsDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.bsnsDetailList", inMap));

		outDataset.put("output1", outDsMap);
	}	
	

	//사업상세정보 조회(파일)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void bsnsDetailFileList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.bsnsDetailFileList", inMap));

		outDataset.put("output1", outDsMap);
	}	
		
	//사업일정 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void bsnsPlanList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.bsnsPlanList", inMap));

		outDataset.put("output1", outDsMap);
	}	
	
	//사업일정 상세조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void bsnsPlanDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.bsnsPlanDetailList", inMap));

		outDataset.put("output1", outDsMap);
	}	
	
	//사업일정 상세조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void bsnsPlanDetailFileList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.bsnsPlanDetailFileList", inMap));

		outDataset.put("output1", outDsMap);
	}	
	//보상현황(토지)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void landRewardMainList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.landRewardMainList", inMap));

		outDataset.put("output1", outDsMap);
	}		
	
	//보상현황(물건)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void thingRewardMainList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.thingRewardMainList", inMap));

		outDataset.put("output1", outDsMap);
	}	
	
	//보상상세현황(토지)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void landRewardDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.landRewardDetailList", inMap));

		outDataset.put("output1", outDsMap);
	}		
	
	//보상상세현황(물건)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void thingRewardDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.thingRewardDetailList", inMap));

		outDataset.put("output1", outDsMap);
	}	
	
	//보상현황챠트(토지)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void landRewardChart( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.coRewardChart", inMap));
		outDsMap2.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.amountRewardChart", inMap));

		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap2);
	}		
	
	//보상현황챠트(물건)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void thingRewardChart( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.coRewardChart", inMap));
		outDsMap2.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.amountRewardChart", inMap));

		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap2);;
	}	
	
	
	//공사현황(계약)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntrWkSttusList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.cntrWkSttusList", inMap));

		outDataset.put("output1", outDsMap);
	}
	
	//공사현황(공정)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntrFairList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.cntrFairList", inMap));

		outDataset.put("output1", outDsMap);
	}
	
	
	//공사현황(공정상세)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntrFairDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.cntrFairDetailList", inMap));

		outDataset.put("output1", outDsMap);
	}
	
	
	//공사현황(챠트)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntrFairChart( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.cntrFairChart", inMap));
		outDsMap2.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.cntrFairTotalChart", inMap));
		
		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap2);
	}
	
	//수입현황(주택코드)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void houseCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.houseCodeList", inMap));

		outDataset.put("output1", outDsMap);
	}
	
	//수입현황(토지코드)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void landCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.landCodeList", inMap));

		outDataset.put("output1", outDsMap);
	}
	
	
	//수입현황(주택)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void houseIncmeDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.houseIncmeDetailList", inMap));

		outDataset.put("output1", outDsMap);
	}
	
	//수입현황(토지)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void landIncmeDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.landIncmeDetailList", inMap));

		outDataset.put("output1", outDsMap);
	}
	
	//수입현황(기타)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void etcIncmeDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.etcIncmeDetailList", inMap));

		outDataset.put("output1", outDsMap);
	}
	
	//수입현황(챠트)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void incmeChart( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.incmeChart", inMap));
		outDsMap2.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.incmeTotalChart", inMap));

		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap2);
		
	}	
	
	//연체현황 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.rentList", inMap));

		outDataset.put("output1", outDsMap);
	}
	
	//연체현황(상세)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.rentDetailList", inMap));

		outDataset.put("output1", outDsMap);
	}
	
	//연체현황(챠트)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentChart( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.rentChart", inMap));

		outDataset.put("output1", outDsMap);
	}


	/**
	 * 보상현황
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rewardMainList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030201DAO.rewardMainList", inMap));

		outDataset.put("output1", outDsMap);
	}
}