package hsco.pms.sls.hou.ctr.SLS020206;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS020206ServiceImpl.java
 * @Description  	: 상호전환
 * @author       	: 지효정
 * @since        	: 2015. 9.07.
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
 * </pre>
 */
@Service("SLS020206Service")
public class SLS020206ServiceImpl extends BaseService implements SLS020206Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

		
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void intrtR( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List<Map> records= new ArrayList<Map>();
		Map record = new HashMap<String, String>();
		String intrt = (String)baseDao.select("SLS020206DAO.intrtR", inMap);
		record.put("INTRT", intrt);
		records.add(record);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void applcYmList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("SLS020206DAO.applcYmList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rntchrgChangeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("SLS020206DAO.rntchrgChangeList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void houseRntchrgList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("SLS020206DAO.houseRntchrgList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	
	/*
	 *  상호전환 상세정보 조회
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void houseRntchrgInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("SLS020206DAO.houseRntchrgInfo", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/*
	 *  상호전환 임대료 조회
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void getRntchrg( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
//		System.out.println("==============1============");
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("SLS020206DAO.getRntchrg", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/*
	 *  상호전환처리
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveRntchrg( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		//기존에 적용일자가 동일한 데이터가 있는지 확인
		List <Map> records = (List<Map>)baseDao.list("SLS020206DAO.selectApplcDe", inMap);
		
		String applc_de = records.size() > 0 ? String.valueOf(records.get(0).get("APPLC_DE")) : "";
		
		if(applc_de != ""){
			//동일한 적용일자가 있으면, update  
			baseDao.update("SLS020206DAO.updateRntchrg", inMap);
		}else{
			//없으면, insert 
			baseDao.insert("SLS020206DAO.insertRntchrg", inMap);
		}
	}
	
	
	/*
	 *  상호전환처리
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveReturnGtn( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SLS020206DAO.saveReturnGtn", inMap);
		
		inMap.put("IN_REGISTER_ID", String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));		
		inMap.put("OUT_RESULT_CD", 	"0");
		inMap.put("OUT_RESULT_MSG", 	"");
		
		baseDao.update("SLS020206DAO.saveReturnGtn", inMap);
		
		if (!"0".equals(inMap.get("OUT_RESULT_CD").toString())) {
			throw new NexaServiceException("info.메시지", inMap.get("OUT_RESULT_MSG").toString());
		}
		
	}
	
}
