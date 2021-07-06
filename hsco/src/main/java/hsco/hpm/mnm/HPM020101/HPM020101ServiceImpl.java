package hsco.hpm.mnm.HPM020101;

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
 * @Class Name   	: HPM020101Controller.java
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

@Service("HPM020101Service")
public class HPM020101ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(HPM020101ServiceImpl.class);
	
	
    /**
	 * 메뉴목록을 조회한다.(국문)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMenuList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("selectMenuList Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List<Map>)baseDao.list("HPM020101DAO.selectMenuList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	}
    
    /**
	 * 메뉴 신규,수정,삭제 (국문)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int saveMenuList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");	
		int listSize = (list == null) ? 0 : list.size();		
		for (int x = 0; x < listSize; x++) {				
			Map map = list.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :	
					baseDao.insert("HPM020101DAO.mainC", map);	
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HPM020101DAO.mainU", map);		
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HPM020101DAO.mainD", map);
					break;	
			    default:
			    	break;
			}				
		}		
		return iRow;		
	}  
	
	   /**
		 * 메뉴콤보 리스트를 조회한다. (국문)
		 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
		 * @return void
		 * @throws NexaServiceException
		 */
	    @SuppressWarnings({ "rawtypes", "unchecked" })
		public void selectMenuComboList( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    	
	    	if(log.isInfoEnabled()) log.info("selectMenuComboList Started!");
	    	
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;
			
			records = (List<Map>)baseDao.list("HPM020101DAO.selectMenuComboList", inMap);
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);		
		}
	    
	    /**
		 * 메뉴목록을 조회한다.(모바일)
		 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
		 * @return void
		 * @throws NexaServiceException
		 */
	    @SuppressWarnings({ "rawtypes", "unchecked" })
		public void selectMenuListMobile( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    	
	    	if(log.isInfoEnabled()) log.info("selectMenuListMobile Started!");
	    	
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;
			
			records = (List<Map>)baseDao.list("HPM020101DAO.selectMenuListMobile", inMap);
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);		
		}
	    
	    /**
		 * 메뉴 신규,수정,삭제 (모바일)
		 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
		 * @return int
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "rawtypes" })
		public int saveMenuListMobile( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {		
			
			int iRow = 0;
			DataSetMap list = (DataSetMap) inDataset.get("input1");	
			int listSize = (list == null) ? 0 : list.size();		
			for (int x = 0; x < listSize; x++) {				
				Map map = list.get(x);			
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
				
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :	
						baseDao.insert("HPM020101DAO.mainMobileC", map);	
						break;
						
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("HPM020101DAO.mainMobileU", map);		
						break;
						
					case DataSet.ROW_TYPE_DELETED :
						baseDao.delete("HPM020101DAO.mainMobileD", map);
						break;	
				    default:
				    	break;
				}				
			}		
			return iRow;		
		}  
		
		   /**
			 * 메뉴콤보 리스트를 조회한다.(모바일)
			 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
			 * @return void
			 * @throws NexaServiceException
			 */
		    @SuppressWarnings({ "rawtypes", "unchecked" })
			public void selectMenuComboListMobile( DataSetMap tranInfo, Map<String, Object> inVar,
					Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
					Map<String, DataSetMap> outDataset) throws NexaServiceException {
		    	
		    	if(log.isInfoEnabled()) log.info("selectMenuComboListMobile Started!");
		    	
				DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
				
				Map inMap = null;
				
				if (inDsMap != null)
					inMap = inDsMap.get(0);
				
				List <Map> records;
				
				records = (List<Map>)baseDao.list("HPM020101DAO.selectMenuComboListMobile", inMap);
				
				DataSetMap outDsMap = new DataSetMap();
				outDsMap.setRowMaps(records);
				
				outDataset.put("output1", outDsMap);		
			}
		    /**
			 * 메뉴목록을 조회한다.(영문)
			 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
			 * @return void
			 * @throws NexaServiceException
			 */
		    @SuppressWarnings({ "rawtypes", "unchecked" })
			public void selectMenuListEng( DataSetMap tranInfo, Map<String, Object> inVar,
					Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
					Map<String, DataSetMap> outDataset) throws NexaServiceException {
		    	
		    	if(log.isInfoEnabled()) log.info("selectMenuListEng Started!");
		    	
				DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
				
				Map inMap = null;
				
				if (inDsMap != null)
					inMap = inDsMap.get(0);
				
				List <Map> records;
				
				records = (List<Map>)baseDao.list("HPM020101DAO.selectMenuListEng", inMap);
				
				DataSetMap outDsMap = new DataSetMap();
				outDsMap.setRowMaps(records);
				
				outDataset.put("output1", outDsMap);		
			}
		    
		    /**
			 * 메뉴 신규,수정,삭제 (영문)
			 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
			 * @return int
			 * @throws NexaServiceException
			 */
			@SuppressWarnings({ "rawtypes" })
			public int saveMenuListEng( DataSetMap tranInfo, Map<String, Object> inVar,
					Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
					Map<String, DataSetMap> outDataset) throws NexaServiceException {		
				
				int iRow = 0;
				DataSetMap list = (DataSetMap) inDataset.get("input1");	
				int listSize = (list == null) ? 0 : list.size();		
				for (int x = 0; x < listSize; x++) {				
					Map map = list.get(x);			
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
					
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED :	
							baseDao.insert("HPM020101DAO.mainEngC", map);	
							break;
							
						case DataSet.ROW_TYPE_UPDATED :
							baseDao.update("HPM020101DAO.mainEngU", map);		
							break;
							
						case DataSet.ROW_TYPE_DELETED :
							baseDao.delete("HPM020101DAO.mainEngD", map);
							break;	
					    default:
					    	break;
					}				
				}		
				return iRow;		
			}  
			
			   /**
				 * 메뉴콤보 리스트를 조회한다.(영문)
				 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
				 * @return void
				 * @throws NexaServiceException
				 */
			    @SuppressWarnings({ "rawtypes", "unchecked" })
				public void selectMenuComboListEng( DataSetMap tranInfo, Map<String, Object> inVar,
						Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
						Map<String, DataSetMap> outDataset) throws NexaServiceException {
			    	
			    	if(log.isInfoEnabled()) log.info("selectMenuComboListEng Started!");
			    	
					DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
					
					Map inMap = null;
					
					if (inDsMap != null)
						inMap = inDsMap.get(0);
					
					List <Map> records;
					
					records = (List<Map>)baseDao.list("HPM020101DAO.selectMenuComboListEng", inMap);
					
					DataSetMap outDsMap = new DataSetMap();
					outDsMap.setRowMaps(records);
					
					outDataset.put("output1", outDsMap);		
				}
							
}