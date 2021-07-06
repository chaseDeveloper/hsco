package hsco.mis.ass.ASS010900;

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
 * @Class Name   	: ASS010900ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 6. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 18.	       이혜선		    최초생성
 * </pre>  
 */
@Service("ass010900Service")
public class ASS010900ServiceImpl extends BaseService {
	
	  protected Logger log = LoggerFactory.getLogger(this.getClass());
				
	
	/**
	 * 재물조사계획 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void pptyPlanList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("ASS010900DAO.pptyPlanList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
	}
	
	/**
	 * 재물조사 count 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPptyPlanCnt(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		records = (List<Map>)baseDao.list("ASS010900DAO.selectPptyPlanCnt", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
	}
	
	
	/**
	 * 재물조사계획 CUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes"})
	public void pptyPlanListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("ASS010900DAO.pptyPlanListC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("ASS010900DAO.pptyPlanListU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					
					int cnt = Integer.parseInt((String) baseDao.select("ASS010900DAO.selectPptyPlanCnt", map));
					if(cnt > 0) {
						String odr = String.valueOf(map.get("ODR"));
						String errMsg = odr+"차수 재물조사에 등록된 물품이 존재합니다. 물품을 모두 삭제 후 다시 진행해주십시오.";
						throw new NexaServiceException("info.처리불가", errMsg);
					}
					
					baseDao.delete("ASS010900DAO.pptyPlanListD01", map);
					baseDao.delete("ASS010900DAO.pptyPlanListD02", map);
					break;
			}
		}
	}
}
