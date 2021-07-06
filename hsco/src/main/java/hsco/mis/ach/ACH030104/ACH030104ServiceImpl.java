package hsco.mis.ach.ACH030104;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACH030104ServiceImpl.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 8. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 18.	박병일				최초생성
 * </pre>  
 */
@Service("ACH030104Service")
public class ACH030104ServiceImpl extends BaseService implements ACH030104Service {
	
	protected Logger log = LoggerFactory.getLogger(ACH030104ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
  
    /**
	 * 기본구조 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectListMst( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("selectListMst Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ACH030104DAO.selectListMst", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    
    
    /**
	 * 기본구조 상세정보를 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectListDtl( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("ACH030104DAO.selectListDtl", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	}    
	
	
	/**
	 * 비계량평가자 정보를  저장, 수정, 삭제 한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int dtlCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;
		
		//input1
		DataSetMap listKey = (DataSetMap) inDataset.get("input1");
		
		Map mapKey = listKey.get(0);
		String strEvlYear 	= (String)mapKey.get("EVL_YEAR");
		String strOdrSe 	= (String)mapKey.get("ODR_SE");
		String strIxCode 	= (String)mapKey.get("IX_CODE");
		
     
		
        //input2
		DataSetMap list = (DataSetMap) inDataset.get("input2");
		
		int listSize = (list == null) ? 0 : list.size();
		
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
							
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			String strAsignAt = "";
			if(map.get("ASIGN_AT") != null)
				strAsignAt = (String)map.get("ASIGN_AT");

			
			
			switch(rowType) {
//				case DataSet.ROW_TYPE_INSERTED :
//					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					if (!"".equals(strAsignAt)){	     
						map.put("EVL_YEAR",strEvlYear);
						map.put("ODR_SE",strOdrSe);    								
						map.put("IX_CODE",strIxCode); 
						
						if("1".equals(strAsignAt)){	                                                  
                          
							baseDao.insert("ACH030104DAO.dtlC", map);                                  
							break;				                                                              
							                                                                            
						}else if("0".equals(strAsignAt)){                                             
					                  
							iRow += baseDao.delete("ACH030104DAO.dtlD", map);                          
							baseDao.delete("ACH030104DAO.dtlEvlD", map);
						}
					}
					break;
//				case DataSet.ROW_TYPE_DELETED :
//					break;
				default:
					break;
			
			}
		
		}
		return iRow;
		
	}

}
