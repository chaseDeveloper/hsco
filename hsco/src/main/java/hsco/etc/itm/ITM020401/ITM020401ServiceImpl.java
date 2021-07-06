package hsco.etc.itm.ITM020401;

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
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ITM020401ServiceImpl.java
 * @Description  	: OA현황을 조회하는 컨트롤러 클래스
 * @author       	: 이호준
 * @since        	: 2015. 6. 9.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.			  이호준			최초생성
 * </pre>  
 */

@Service("ITM020401Service")
public class ITM020401ServiceImpl extends BaseService implements ITM020401Service {
	
	protected Logger log = LoggerFactory.getLogger(ITM020401ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /** 총괄현황을  조회 */
    /*
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM020401List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("ITM020401List Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ITM020401DAO.ITM020401List", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	} */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM020401List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("ITM020401List Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		// [STEP 1] 가로 출력을 위한 현재 사용중인 PC모델명 출력(그리드 헤더)
		List<Map> headDateList = (List<Map>) baseDao.list("ITM020401DAO.ITM020401List_1", inMap);
		
		// 로우 조회용
		List<Map> ladReceiveList = (List<Map>)baseDao.list("ITM020401DAO.ITM020401List_2", inMap);
		
		//결과값
		List<Map> records = new ArrayList<Map>();
		
		if(headDateList == null){
			throw new NexaServiceException("조회조건이 맞지 않습니다.");  
		}
		else{
			
			for(int i = 0 ; i < ladReceiveList.size() ; i++){
				
				Map rowMap = ladReceiveList.get(i);
				
				for(int z = 0 ; z < headDateList.size() ; z++ ){
					Map colMap = headDateList.get(z);
					
					String colName = "PAYAMT_" + colMap.get("RQEST_YM"); // 컬럼 Alias
					
					inMap.put("MODEL_NO",  	colMap.get("MODEL_NO"));	// cell 값 조회조건 
					inMap.put("CNTRCTR_NO",  	rowMap.get("CNTRCTR_NO"));	// cell 값 조회조건
										
					System.out.println("colName =1=============================> " + colName);
					System.out.println("CNTRCTR_NO =1=============================> " + inMap.get("MODEL_NO"));
					System.out.println("RCIV_SE =1=============================> " + inMap.get("EQPMN_USER"));
					
					Map rsltColMap = (Map)baseDao.select("SLS110105DAO.selectLadReceiveList2", inMap); // cell 값 조회 
					// cell 값 설정
					/*if(rsltColMap == null){
						 rowMap.put(colName , ""); 
					}
					else{
						 rowMap.put(colName , rsltColMap.get("PAY_MONTH_PAYAMT"));
						 System.out.println("PAY_MONTH_PAYAMT =" + rsltColMap.get("PAY_MONTH_PAYAMT"));
					}*/
				}		
				records.add(rowMap); // 행추가
			}
			
		}
    }
    
    /** 사용자별현황을  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM020401Tab2List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ITM020401DAO.ITM020401Tab2List", inMap);
		} else {
			records = (List<Map>)baseDao.list("ITM020401DAO.ITM020401Tab2List", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    

    /** 사용자별예상교체현황(년도별교체현황)을  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM020401Tab3List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ITM020401DAO.ITM020401Tab3List", inMap);
		} else {
			records = (List<Map>)baseDao.list("ITM020401DAO.ITM020401Tab3List", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    

    

    /** 사용자별예상교체현황(부서/사용자)를  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM020401Tab32List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ITM020401DAO.ITM020401Tab32List", inMap);
		} else {
			records = (List<Map>)baseDao.list("ITM020401DAO.ITM020401Tab32List", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}  

    /** 노트북관리대장을  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM020401Tab4List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ITM020401DAO.ITM020401Tab4List", inMap);
		} else {
			records = (List<Map>)baseDao.list("ITM020401DAO.ITM020401Tab4List", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
}
