package hsco.pms.cmp.CMP040201;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CMP040200ServiceImpl.java
 * @Description  	: 보상금일괄지출결의
 * @author       	: 이근표
 * @since        	: 2016. 7. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 7. 18.					이근표				최초생성
 * </pre>  
 */
@Repository("CMP040201Service")
public class CMP040201ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(CMP040201ServiceImpl.class);
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void rwmnyPymntList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		if(log.isInfoEnabled()) log.info("thingRwmnyPymntList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040201DAO.rwmnyPymntList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void rwmnyPymntList1(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		if(log.isInfoEnabled()) log.info("thingRwmnyPymntList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040201DAO.rwmnyPymntList1", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	
	
	@SuppressWarnings({ "rawtypes" })
	
	public void rwmnyPymntDeU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		//메모 CUD
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("CMP040201DAO.rwmnyPymntDeU", map);
		}
	} 

	/**
	 * 내부결재 후처리 메소드 (결재상태 저장)
	 * @param (Map sanctnInfo) 
	 * @return void
	 * @throws NexaServiceException
	 */

	public void postProcess(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		   if(log.isInfoEnabled()) log.info("미구현 메소드입니다!"); // code inspection에 따른 구현 내용 전체 주석처리함.
//         Map sanctnInfo = null; 
//         DataSetMap dsSetMap = inDataset.get("input1");  
//         List<Map> list = dsSetMap.getRowMaps();
//         //String currSanctionSttus = "";   // 미사용 변수 주석처리(code inspection)
//         int lsize = (list == null) ? 0 : list.size();
//         if(lsize > 0){
//           	  sanctnInfo = (Map)list.get(0);
//         }
//         // 전체적으로 
//         if(sanctnInfo != null){  // 미사용 변수 주석처리(code inspection)
//        	 if(sanctnInfo.get("LAST_SANCTN_STTUS") != null){
//        		 currSanctionSttus = (String)sanctnInfo.get("LAST_SANCTN_STTUS"); // 최종결재상태
//        	 }
//         }     	
//         	Map recordMap = null; // 미사용 변수 주석처리(code inspection)        	
//         	StringTokenizer token = new StringTokenizer(sanctnInfo.get("JOB_KEY").toString(),"^");
//         	
//   		if(token.hasMoreTokens()){
//   			recordMap = new HashMap<String, String>();
//   			recordMap.put("ACCNUT_YEAR", token.nextToken());
//   			recordMap.put("ENDW_INCME_DECSN_NO", token.nextToken());
//   		}
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void sanctnerNmDetail(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040201DAO.sanctnerNmDetail", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
}
