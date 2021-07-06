package hsco.mis.hrm.HRM060201T04;

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
 * @Class Name   	: HRM060201T04ServiceImpl.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 11. 03.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 03.	박병일				최초생성
 * </pre>  
 */
@Service("HRM060201T04Service")
public class HRM060201T04ServiceImpl extends BaseService implements HRM060201T04Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
	 * 평정방법을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 	
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
        
		List <Map> records;
		
		records = (List<Map>)baseDao.list("HRM060201T04DAO.selectList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * 평정방범 등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int mainCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;

		// 감점부여 방법
		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch(rowType) {
				case DataSet.ROW_TYPE_DELETED :	
					baseDao.delete("HRM060201T04DAO.mainD", map);
					break;
			}
		}
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :	
					baseDao.insert("HRM060201T04DAO.mainC", map);
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HRM060201T04DAO.mainU", map);
					break;
			}
		}
		
		// 감점부여기준내역
		list = (DataSetMap) inDataset.get("input2");
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :	
					baseDao.insert("HRM060201T04DAO.detailC", map);
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HRM060201T04DAO.detailU", map);
					break;
					
				case DataSet.ROW_TYPE_DELETED :	
					baseDao.delete("HRM060201T04DAO.detailD", map);
					break;			
			}				
		}
		return iRow;		
	}
	
    /**
	 * 평정기준내역을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void detailR( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 	
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
        
		List <Map> records;
		
		records = (List<Map>)baseDao.list("HRM060201T04DAO.detailR", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
	/** 직전차수 경력평정 기준자료 생성 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public int bsisC( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
		
		int iRow = 0;
		int iSize = inDataset.size();
		
		log.debug("bsisC inDataset.size()=======" + iSize);
		
		DataSetMap listKey = (DataSetMap) inDataset.get("input1");
				
		Map mapKey = listKey.get(0);
		String strBefYear = mapKey.get("BEF_DEVA_YEAR").toString();
		String strBefOdr  = mapKey.get("BEF_ODR_SE").toString();
		
		System.err.print("strBefYear:" + strBefYear + "\n");	//
		System.err.print("strBefOdr:" + strBefOdr + "\n");	//
		
		DataSetMap list = (DataSetMap) inDataset.get("input2");
		
		Map map = list.get(0);
		map.put("BEF_DEVA_YEAR", strBefYear);
		map.put("BEF_ODR_SE", strBefOdr);
		String existAt = (String) baseDao.select("HRM060201T04DAO.existAt", map);
		
		if(existAt.equals("0")) {
			throw new NexaServiceException("errors.없음.요청", "생성된 자료가|직전차수 정보를");
		}
		else {
			baseDao.delete("HRM060201T04DAO.mainD", map); //전체삭제
			baseDao.insert("HRM060201T04DAO.bsisC", map);
		}

		return iRow;		
	}
	
	/** 징계처분기준코드로 현.기준자료 생성 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public int bsisRefC( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
		
		int iRow = 0;		
		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		Map map = list.get(0);
		
		baseDao.delete("HRM060201T04DAO.bsisRefD", map);
		baseDao.insert("HRM060201T04DAO.bsisRefC", map);

		return iRow;		
	}

}
