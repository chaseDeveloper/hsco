package hsco.mis.acc.ACC070101;

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
 * @Class Name   	: ACC070101ServiceImpl.java
 * @Description  	: 수입결의등록을 관리하는 ServiceImpl 클래스 
 * @author       	: 이상명
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
 *  2017. 07. 20.	이상명		최초생성
 * </pre>  
 */
@Service("acc070101Service")
public class ACC070101ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC070101ServiceImpl.class);
	
	
	/**
	 * 수입결의서 목록
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

		records = (List<Map>)baseDao.list("ACC070101DAO.incDsnList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
	/**
	 * 수입결의서 조회
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
		
		List <Map> records1 = (List<Map>)baseDao.list("ACC070101DAO.selectIncDsn", inMap);
		List <Map> records2 = (List<Map>)baseDao.list("ACC070101DAO.selectIncDsnDtls", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDataset.put("output1", outDsMap1);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		outDataset.put("output2", outDsMap2);
		
	}

    /**
     * 수입결의서 조회
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
        
        List <Map> records1 = (List<Map>)baseDao.list("ACC070101DAO.selectAtchFile", inMap);
        
        DataSetMap outDsMap1 = new DataSetMap();
        outDsMap1.setRowMaps(records1);
        outDataset.put("output1", outDsMap1);
    }
    
	/**
	 * 수입결의서 저장
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
					Map keyMap = (Map) baseDao.select("ACC070101DAO.selectIncDecsnNo");
					mastrMap.put("DECSN_NO", (String)keyMap.get("DECSN_NO"));
					baseDao.insert("ACC070101DAO.incDsnMastrC", mastrMap);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					iRow += baseDao.update("ACC070101DAO.incDsnMastrU", mastrMap);
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
							baseDao.insert("ACC070101DAO.incDsnDetailC", map);
							break;
							
						case DataSet.ROW_TYPE_UPDATED:
							baseDao.update("ACC070101DAO.incDsnDetailU", map);
							break;
							
						case DataSet.ROW_TYPE_DELETED:
							baseDao.delete("ACC070101DAO.incDsnDetailD", map);
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
						baseDao.delete("ACC070101DAO.incDsnMastrD", map);
						break;
						
					default:
						break;
				}
			}
		}
		
		
		return iRow;
		
	}
	
	/**
	 * 수입결의서 결재초기화
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void updateSanctnNo(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.delete("ACC070101DAO.deleteChitDetail", map); //전표상세정보 삭제
					baseDao.delete("ACC070101DAO.deleteChitMastr", map);  //전표마스터정보 삭제
					baseDao.update("ACC070101DAO.updateSanctnNo", map);   //수입결의마스터 결재번호 null 초기화
					break;
			    default:
			    	break;
			}	
		}
		
	}
	
}