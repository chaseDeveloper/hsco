package hsco.mis.acc.ACC000000;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("acc000000Service")
public class ACC000000ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC000000ServiceImpl.class);
	
	/**
	 * 전표 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void chit(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		if(log.isInfoEnabled()) log.info("chit Started!");
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
		    inMap = inDsMap.get(0);
		}
		
		List<Map> records1 = (List<Map>) baseDao.list("ACC000000DAO.chit", inMap);
		List<Map> records2 = (List<Map>) baseDao.list("ACC000000DAO.chitDetailList", inMap);
		DataSetMap output1 = new DataSetMap();
		DataSetMap output2 = new DataSetMap();
		output1.setRowMaps(records1);
		output2.setRowMaps(records2);
		outDataset.put("output1", output1);
		outDataset.put("output2", output2);
	}
	
	/**
	 * 사업코드
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void bsnsCodeList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC000000DAO.bsnsCodeList", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 원가코드
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void prmpcList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC000000DAO.prmpcList", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 구분회계코드
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void seAccnutAcntCodeList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC000000DAO.seAccnutAcntCodeList", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 구분회계코드(유형별)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void seAccnutAcntCodeTyList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        if(inMap != null){
        	inMap.put("SE_ACC_CODE", "1");
            DataSetMap outDsMap1 = new DataSetMap();
            outDsMap1.setRowMaps((List<Map>) baseDao.list("ACC000000DAO.seAccnutAcntCodeTyList", inMap));
            outDataset.put("output1", outDsMap1);
            
            inMap.put("SE_ACC_CODE", "2");
            DataSetMap outDsMap2 = new DataSetMap();
            outDsMap2.setRowMaps((List<Map>) baseDao.list("ACC000000DAO.seAccnutAcntCodeTyList", inMap));
            outDataset.put("output2", outDsMap2);
            
            inMap.put("SE_ACC_CODE", "3");
            DataSetMap outDsMap3 = new DataSetMap();
            outDsMap3.setRowMaps((List<Map>) baseDao.list("ACC000000DAO.seAccnutAcntCodeTyList", inMap));
            outDataset.put("output3", outDsMap3);
            
            inMap.put("SE_ACC_CODE", "4");
            DataSetMap outDsMap4 = new DataSetMap();
            outDsMap4.setRowMaps((List<Map>) baseDao.list("ACC000000DAO.seAccnutAcntCodeTyList", inMap));
            outDataset.put("output4", outDsMap4);
        }
        
	}
	
	/**
	 * 회계 마감여부
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void accClosAt(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC000000DAO.accClosAt", (String)inVar.get("YYYYMM")));
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 예산정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void budgetInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("ACC000000DAO.budgetInfo", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 사업지구(구분회계코드) 팝업
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void seAccnutAcntCodePopList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC000000DAO.seAccnutAcntCodePopList", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 전표삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void deleteChit(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        int result = baseDao.delete("ACC000000DAO.deleteChitDetail", inMap);
        if( result > 0 ){
        	result = 0;
        	result = baseDao.delete("ACC000000DAO.deleteChitMaster", inMap);
        	if(result > 0){
        		baseDao.update("ACC000000DAO.updateOperIncme", inMap);
        	}
        }
                
	}
	
}