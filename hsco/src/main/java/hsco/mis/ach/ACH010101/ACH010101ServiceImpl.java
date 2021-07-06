package hsco.mis.ach.ACH010101;

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
 * @Class Name   	: ACH010101ServiceImpl.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 9. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 02.	박병일		최초생성
 * </pre>  
 */
@Service("ACH010101Service")
public class ACH010101ServiceImpl extends BaseService implements ACH010101Service {
	
	protected Logger log = LoggerFactory.getLogger(ACH010101ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
  
    /**
	 * 지표별 평가내역 집계 정보를 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectListDtl( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("selectListDtl Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("ACH010101DAO.selectListDtl", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	}     
    
    /**
	 * 평가주기 정보를  저장, 수정, 삭제 한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int mstCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("ACH010101DAO.mstC",  map);					
					break;
					
				case DataSet.ROW_TYPE_UPDATED :                              
					baseDao.update("ACH010101DAO.mstU", map);                                  
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					break;
			    default:
			    	break;
			}
		
		}
		return iRow;
		
	}
	
	/**
	 * 평가내역 정보를  저장, 수정, 삭제 한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
		
	public int dtlCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("ACH010101DAO.dtlC", map);  					
					break;
					
				case DataSet.ROW_TYPE_UPDATED :     
					baseDao.update("ACH010101DAO.dtlU", map);                                  
					break;
					
				case DataSet.ROW_TYPE_DELETED :		
					break;
				default:
					break;
			
			}
		
		}
		return iRow;
		
	}
	
	/**
	 * 평가차수  삭제 및 재생성
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int beforeD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;  
		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		int listSize = (list == null) ? 0 : list.size();		
		
		if (listSize == 1) {
			Map map = list.get(0);
			baseDao.delete("ACH010101DAO.before01D", map);	// 마감 테이블
			baseDao.delete("ACH010101DAO.before02D", map);	// 데이터이관 테이블
			baseDao.delete("ACH010101DAO.before03D", map);	// 가중치 테이블
			baseDao.delete("ACH010101DAO.before04D", map);	// 핵심성과지표 테이블
			baseDao.delete("ACH010101DAO.before05D", map);	// 평가차수 테이블
		}
		return iRow;		
	}
		
	
    /**
	 * 평가차수 기초자료를 생성하기 위한 임시조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectTempOdr( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("ACH010101DAO.selectTempOdr", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	}
    
	/**
	 * 평가차수 및 평가주기  삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
		
	public int mstDtlD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;  
		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		int listSize = (list == null) ? 0 : list.size();		
		
		if (listSize == 1) {
			Map map = list.get(0);
			baseDao.delete("ACH010101DAO.before01D", map);	// 마감 테이블
			baseDao.delete("ACH010101DAO.before02D", map);	// 데이터이관 테이블
			baseDao.delete("ACH010101DAO.before03D", map);	// 가중치 테이블
			baseDao.delete("ACH010101DAO.before04D", map);	// 핵심성과지표 테이블
			baseDao.delete("ACH010101DAO.before05D", map);	// 평가차수 테이블
			baseDao.delete("ACH010101DAO.cycleD", map);			
		}
		return iRow;		
	}
}
