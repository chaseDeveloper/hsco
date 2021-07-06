package hsco.etc.itm.ITM070200;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ITM070200ServiceImpl.java
 * @Description  	: SLA평가결과를 조회하는 컨트롤러 클래스
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

@Service("ITM070200Service")
public class ITM070200ServiceImpl extends BaseService implements ITM070200Service {
	
	protected Logger log = LoggerFactory.getLogger(ITM070200ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /** 평가결과표를  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM070200List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("ITM070200List Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200List", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    

    /** 평가결과표를 신규,수정,삭제 */
	@SuppressWarnings({ "rawtypes" })
	
	public int ITM070200CUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		baseDao.update("ITM070200DAO.ITM070200U", inMap);
		
		/*int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("ITM070200DAO.ITM070200C", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("ITM070200DAO.ITM070200U", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("ITM070200DAO.ITM070200D", map);
					break;
			
			}	
			
		}
		
		return iRow;*/
		
		return 0;
		
	}
	
	
	
	
	/** 서비스시간(서비스현황)  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM070200Tab2List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab2List", inMap);
		} else {
			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab2List", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}


    /** 장애현황(서비스가동율)을  조회 */
	    @SuppressWarnings({ "rawtypes", "unchecked" })
		public void ITM070200Tab3List( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;
	
			if (inMap != null) {
				records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab3List", inMap);
			} else {
				records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab3List", inVar);
			}
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
			
		}
    
	    /** 장애현황(장애조치현황)을  조회 */
	    @SuppressWarnings({ "rawtypes", "unchecked" })
		public void ITM070200Tab32List( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;

			if (inMap != null) {
				records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab32List", inMap);
			} else {
				records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab32List", inVar);
			}
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
			
		}
	    
	    
	    /** 장애현황 서비스가동율 상세현황을  조회  */
	    @SuppressWarnings({ "rawtypes", "unchecked" })
		public void ITM070200Tab33List( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;

			if (inMap != null) {
				records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab33List", inMap);
			} else {
				records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab33List", inVar);
			}
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
			
		}
	    
	    /** 장애현황(장애조치현황) 상세현황을  조회  */
	    @SuppressWarnings({ "rawtypes", "unchecked" })
		public void ITM070200Tab34List( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;

			if (inMap != null) {
				records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab34List", inMap);
			} else {
				records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab34List", inVar);
			}
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
			
		}
	    
	    /** 장애현황 상세현황을 조회 */
	    @SuppressWarnings({ "rawtypes", "unchecked" })
		public void ITM070200Tab35List( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;

			if (inMap != null) {
				records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab35List", inMap);
			} else {
				records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab35List", inVar);
			}
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
			
		}
	    

	    /** SR현황 SR적기처리율 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM070200Tab4List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab4List", inMap);
		} else {
			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab4List", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /** SR현황 오류발생 조회 */
      @SuppressWarnings({ "rawtypes", "unchecked" })
  	public void ITM070200Tab42List( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;

  		if (inMap != null) {
  			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab42List", inMap);
  		} else {
  			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab42List", inVar);
  		}
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);
  		
  	}
      
      /** SR현황 SR내역 조회 */
      @SuppressWarnings({ "rawtypes", "unchecked" })
  	public void ITM070200Tab43List( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;

  		if (inMap != null) {
  			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab43List", inMap);
  		} else {
  			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab43List", inVar);
  		}
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);
  		
  	}
      
      /** Call처리율 목록을 조회*/
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM070200Tab5List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab5List", inMap);
		} else {
			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab5List", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**  Call처리율(내역)을 조회 */
     @SuppressWarnings({ "rawtypes", "unchecked" })
 	public void ITM070200Tab52List( DataSetMap tranInfo, Map<String, Object> inVar,
 			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
 			Map<String, DataSetMap> outDataset) throws NexaServiceException {
 		
 		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
 		Map inMap = null;
 		
 		if (inDsMap != null)
 			inMap = inDsMap.get(0);
 		
 		List <Map> records;

 		if (inMap != null) {
 			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab52List", inMap);
 		} else {
 			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab52List", inVar);
 		}
 		
 		DataSetMap outDsMap = new DataSetMap();
 		outDsMap.setRowMaps(records);
 		
 		outDataset.put("output1", outDsMap);
 		
 	}
     
     
     /** 백업준수율 목록을 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM070200Tab6List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab6List", inMap);
		} else {
			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab6List", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    
    /** 백업준수율 상세내역을 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM070200Tab62List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab62List", inMap);
		} else {
			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab62List", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    

    /** 보안준수 목록을 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM070200Tab7List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab7List", inMap);
		} else {
			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab7List", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    
    

    /** 보안준수 상세내역을   조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void ITM070200Tab72List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab72List", inMap);
		} else {
			records = (List<Map>)baseDao.list("ITM070200DAO.ITM070200Tab72List", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}   
    
    /** 평가결과를 생성 */
    @SuppressWarnings({ "rawtypes" })
    public void ITM070200P(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    
    	// 전달값 확인
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		baseDao.insert("ITM070200DAO.SP_ITM_SLA_EVL_RESULT_01", inMap);
		
		List<Map> resultList = new ArrayList<Map>();	
		resultList.add(inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("output1", outDsMap);
    
}

	
}
