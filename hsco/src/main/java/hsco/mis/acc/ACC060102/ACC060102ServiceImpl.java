package hsco.mis.acc.ACC060102;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC060102ServiceImpl.java
 * @Description  	: 구분회계코드를 관리하는 서비스 구현체 클래스
 * @author       	: 이상명
 * @since        	: 2015. 8. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 25.					이상명				최초생성
 * </pre>  
 */
@Service("ACC060102Service")
public class ACC060102ServiceImpl extends BaseService {

protected Logger log = LoggerFactory.getLogger(ACC060102ServiceImpl.class);
	
    
    /**
     * 구분회계계정 목록
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void seAccnutAcntCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("seAccnutAcntCodeList Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ACC060102DAO.seAccnutAcntCodeList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
     * 구분회계유형 목록(전체)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	@SuppressWarnings("rawtypes")
	public void seAccnutAcntTyManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		if(inMap != null){
			DataSetMap dsSetMap1 = seAccnutAcntTyManageList(inMap, "1");
			if(dsSetMap1 != null)
			    outDataset.put("output1", dsSetMap1);
			DataSetMap dsSetMap2 = seAccnutAcntTyManageList(inMap, "2");
			if(dsSetMap2 != null)
			    outDataset.put("output2", dsSetMap2);
			DataSetMap dsSetMap3 = seAccnutAcntTyManageList(inMap, "3");
			if(dsSetMap3 != null)
			    outDataset.put("output3", dsSetMap3);
			DataSetMap dsSetMap4 = seAccnutAcntTyManageList(inMap, "4");
			if(dsSetMap4 != null)
			    outDataset.put("output4", dsSetMap4);
		}
		
	}
    
	/**
	 * 구분회계유형 목록(유형별)
	 * @param inMap
	 * @param seAccCode
	 * @return
	 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	private DataSetMap seAccnutAcntTyManageList(Map inMap, String seAccCode) {
    	inMap.put("SE_ACC_CODE", seAccCode);
    	List <Map> records = (List<Map>)baseDao.list("ACC060102DAO.seAccnutAcntTyManageList", inMap);
    	DataSetMap outDsMap = new DataSetMap();
    	outDsMap.setRowMaps(records);
    	return outDsMap;
    }
    
    
    /**
     * 구분회계계정 저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
	@SuppressWarnings({ "rawtypes" })
	
	public int seAccnutAcntCodeCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("ACC060102DAO.seAccnutAcntCodeC", map);
					baseDao.insert("ACC060102DAO.tbprjBsnsCodeCU", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("ACC060102DAO.seAccnutAcntCodeU", map);
					baseDao.insert("ACC060102DAO.tbprjBsnsCodeCU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("ACC060102DAO.seAccnutAcntCodeD", map);
					break;
			    default:
			    	break;
			}	
			
		}
		
		return iRow;
		
	}
	
	/**
	 * 구분회계유형 저장(전체)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	
	public int seAccnutAcntTyManageCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap input1 = (DataSetMap) inDataset.get("input1");
		DataSetMap input2 = (DataSetMap) inDataset.get("input2");
		DataSetMap input3 = (DataSetMap) inDataset.get("input3");
		DataSetMap input4 = (DataSetMap) inDataset.get("input4");
		
		iRow = seAccnutAcntTyManageCUD(iRow, input1);
		iRow += seAccnutAcntTyManageCUD(iRow, input2);
		iRow += seAccnutAcntTyManageCUD(iRow, input3);
		iRow += seAccnutAcntTyManageCUD(iRow, input4);
		
		return iRow;
		
	}

	/**
	 * 구분회계유형 저장(유형별)
	 * @param iRow
	 * @param input
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	private int seAccnutAcntTyManageCUD(int iRow, DataSetMap input) {
		int listSize = (input == null) ? 0 : input.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = input.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("ACC060102DAO.seAccnutAcntTyManageC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("ACC060102DAO.seAccnutAcntTyManageU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("ACC060102DAO.seAccnutAcntTyManageD", map);
					break;
			    default:
			    	break;
			}	
			
		}
		return iRow;
	}

	/**
	 * 전년도 복사
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void seAccnutAcntCopyC( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		baseDao.insert("ACC060102DAO.seAccnutAcntCopyC", inMap);
	}

	/**
	 * 회계명 동기화
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void accNmSync( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		baseDao.update("ACC060102DAO.accNmSync", inMap);
	}

	/**
	 * 사업코드 동기화
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void bsnsSync( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		baseDao.insert("ACC060102DAO.bsnsSync", inMap);
	}
}
