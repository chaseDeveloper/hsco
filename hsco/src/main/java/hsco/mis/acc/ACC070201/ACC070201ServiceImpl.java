package hsco.mis.acc.ACC070201;

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
 * @Class Name   	: ACC070201ServiceImpl.java
 * @Description  	: 대행사업 수입결의등록을 관리하는 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2017. 07. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 07. 20.	이수지		최초생성
 * </pre>  
 */
@Service("ACC070201Service")
public class ACC070201ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC070201ServiceImpl.class);
	
	
	/**
	 * 대행사업 수입결의서 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void incDsnList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("ACC070201DAO.incDsnList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
	/**
	 * 대행사업 수입결의서 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectIncDsn( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1 = (List<Map>)baseDao.list("ACC070201DAO.selectIncDsn", inMap);
		List <Map> records2 = (List<Map>)baseDao.list("ACC070201DAO.selectIncDsnDtls", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDataset.put("output1", outDsMap1);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		outDataset.put("output2", outDsMap2);
		
	}

    /**
     * 대행사업 수입결의서 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAtchFile( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records1 = (List<Map>)baseDao.list("ACC070201DAO.selectAtchFile", inMap);
        
        DataSetMap outDsMap1 = new DataSetMap();
        outDsMap1.setRowMaps(records1);
        outDataset.put("output1", outDsMap1);
    }
    
	/**
	 * 대행사업 수입결의서 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int saveIncDsn( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		int iRow = 0;
		
		if(inDataset.get("input1").size() > 0) {
			
			Map mastrMap = inDataset.get("input1").get(0);
			int mastrRowType = ((Integer) mastrMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch(mastrRowType) {
				case DataSet.ROW_TYPE_INSERTED:
					Map keyMap = (Map) baseDao.select("ACC070201DAO.selectIncDecsnNo");
					mastrMap.put("DECSN_YEAR", (String)keyMap.get("DECSN_YEAR"));
					mastrMap.put("DECSN_NO", (String)keyMap.get("DECSN_NO"));
					baseDao.insert("ACC070201DAO.incDsnMastrC", mastrMap);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					iRow += baseDao.update("ACC070201DAO.incDsnMastrU", mastrMap);
					break;
				default:
					break;
			}
			
			
			if(inDataset.get("input2") != null) {
				for(Map map : inDataset.get("input2").getRowMaps()) {
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED:
							map.put("DSNMASTR", mastrMap);							
							baseDao.insert("ACC070201DAO.incDsnDetailC", map);
							break;
							
						case DataSet.ROW_TYPE_UPDATED:
							baseDao.update("ACC070201DAO.incDsnDetailU", map);
							break;
							
						case DataSet.ROW_TYPE_DELETED:
							baseDao.delete("ACC070201DAO.incDsnDetailD", map);
							break;
							
						default:
							break;
					}
				}
			}
			
			DataSetMap outDsMap1 = new DataSetMap();
			outDsMap1.add(mastrMap);
			outDataset.put("output1", outDsMap1);
		}
		
		
		return iRow;
		
	}

	
	@SuppressWarnings("rawtypes")
	public int incDsnD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		int iRow = 0;
		
		
		if(inDataset.get("input1") != null) {
			for(Map map : inDataset.get("input1").getRowMaps()) {
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				switch(rowType) {
					case DataSet.ROW_TYPE_DELETED:
						baseDao.delete("ACC070201DAO.incDsnMastrD", map);
						break;
						
					default:
						break;
				}
			}
		}
		
		
		return iRow;
		
	}
	
}