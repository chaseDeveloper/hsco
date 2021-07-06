package hsco.mis.ach.ACH030103;

import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACH030103ServiceImpl.java
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
@Service("ACH030103Service")
public class ACH030103ServiceImpl extends BaseService implements ACH030103Service {
	
	protected Logger log = LoggerFactory.getLogger(ACH030103ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

	
    
    
    /**
	 * 지표가중치 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 	
		
    	if(log.isInfoEnabled()) log.info("selectList Started!");
    	
//    	String strParams[] = new String[20];
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

// 미사용 변수 및 무의미한 코드 주석 처리(Code Inspection)        
//		List<Map> records_in = (List<Map>)baseDao.list("ACHCommonDAO.selectOrgnztList", inMap);
//		
//				
//		int records_inSize = (records_in == null) ? 0 : records_in.size();
//		
//		
//		List paramList = new ArrayList();
//		
//		for (int i = 0; i < records_inSize; i++) {
//			
//			
//			Map mapin = records_in.get(i);
//
//			strParams[i] = (String)mapin.get("CODE");
//			
//			paramList.add((String)mapin.get("CODE"));
//			
//		}
		
		// inMap.put("IN_PARAM",paramList);	//ERROR			
		
		List <Map> records;
		
		records = (List<Map>)baseDao.list("ACH030103DAO.selectList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
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
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ACH030103DAO.selectListMst", inMap);		
		
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

		records = (List<Map>)baseDao.list("ACH030103DAO.selectListDtl", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	}    
	
	/**
	 * 지표가중치  등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int mainCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;
		int iSize = 0;
        iSize = inDataset.size();
		log.debug("inDataset.size()=======" + iSize);

		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();		
		
			String strIxcharct = map.get("IX_CHARCT").toString();
			
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :	
					baseDao.insert("ACH030103DAO.mainC", map);
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					/* 계량지표  */
					if ("000".equals(strIxcharct)){
						baseDao.update("ACH030103DAO.mainQyevalU", map);	
					/* 비계량지표  */
					}else if("001".equals(strIxcharct)){
						baseDao.update("ACH030103DAO.mainQlevalU", map);						
					}

					break;
					
				case DataSet.ROW_TYPE_DELETED :	
					iRow += baseDao.delete("ACH030103DAO.mainD", map);
					break;
				default:
					break;
			}				
		}		
		return iRow;		
	}	
	
	/**
	 * 사용자정보를 저장, 수정, 삭제 한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int ACH030103CodeCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("ACH030103DAO.ACH030103CodeC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("ACH030103DAO.ACH030103CodeU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("ACH030103DAO.ACH030103CodeD", map);
					break;
			    default:
			    	break;
			}
		
		}
		return iRow;
		
	}

}
