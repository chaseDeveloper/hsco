package hsco.hpm.ctm.HPM051101;

import java.util.List;
import java.util.Map;
import java.util.UUID;

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
 * @Class Name   	: HPM051101Controller.java
 * @Description  	: 
 * @author       	: 조진연
 * @since        	: 2016. 08. 13.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 08. 13.	   조진연			최초생성
 * </pre>  
 */

@Service("HPM051101Service")
public class HPM051101ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(HPM051101ServiceImpl.class);
	
	
    /**
	 * 회원목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSuplyInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("selectSuplyInfoList Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List<Map>)baseDao.list("HPM051101DAO.selectSuplyInfoList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	}
    
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int saveSuplyInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");
//		for(Map map : list.getRowMaps()){
		int listSize = (list == null) ? 0 : list.size();		
		for (int x = 0; x < listSize; x++) {				
			Map map = list.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			String authKey = UUID.randomUUID().toString().replaceAll("-", "");
			String reqst_uri = (String)map.get("REQST_URI");
			authKey = reqst_uri + authKey;
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					map.put("REQST_URI", authKey);
					baseDao.insert("HPM051101DAO.insertSuplyInfoList", map);	
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HPM051101DAO.updateSuplyInfoList", map);		
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HPM051101DAO.deleteSuplyInfoList", map);
					break;	
			    default:
			    	break;
			}				
		}		
		return iRow;		
	}
	
    /**
	 * 공급공고목록_combo 를 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSuplyPblancList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("HPM051101DAO.selectSuplyPblancList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	} 	
    /**
 	 * House목록_combo 를 조회한다.
 	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
 	 * @return void
 	 * @throws NexaServiceException
 	 */
     @SuppressWarnings({ "rawtypes", "unchecked" })
 	public void selectSuplyHouseList( DataSetMap tranInfo, Map<String, Object> inVar,
 			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
 			Map<String, DataSetMap> outDataset) throws NexaServiceException {
     	
 		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
 		
 		Map inMap = null;
 		
 		if (inDsMap != null)
 			inMap = inDsMap.get(0);
 		
 		List <Map> records;

 		records = (List<Map>)baseDao.list("HPM051101DAO.selectSuplyHouseList", inMap);
 		
 		DataSetMap outDsMap = new DataSetMap();
 		outDsMap.setRowMaps(records);
 		
 		outDataset.put("output1", outDsMap);		
 	} 	
     /**
  	 * HouseType목록_combo 를 조회한다.
  	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
  	 * @return void
  	 * @throws NexaServiceException
  	 */
      @SuppressWarnings({ "rawtypes", "unchecked" })
  	public void selectSuplyHouseTypeList( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
      	
  		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
  		
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;

  		records = (List<Map>)baseDao.list("HPM051101DAO.selectSuplyHouseTypeList", inMap);
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);		
  	} 	     
}