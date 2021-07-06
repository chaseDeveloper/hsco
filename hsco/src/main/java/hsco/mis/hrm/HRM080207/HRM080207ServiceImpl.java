package hsco.mis.hrm.HRM080207;

import java.util.HashMap;
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

@Service("HRM080207Service")
public class HRM080207ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 집합교육 목록 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEdcCrseManageList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map<String, Object> inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080207DAO.selectEdcCrseManageList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 대상자 목록 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectGrupEdcTrgterManageList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map<String, Object> inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080207DAO.selectGrupEdcTrgterManageList", inMap));
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 집합교육관리, 대상자 저장
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "unchecked" })
    public void saveEdcCrseManage(DataSetMap tranInfo, Map<String, Object> inVar,Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
		Map<String, Object> inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
    	Map<String, Object> snMap = new HashMap<String, Object>();

		if (inDsMap != null) {
			if(inDsMap.size() > 0) {
				inMap = inDsMap.get(0);
			
				int rowType = ((Integer) inMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
	    	
				switch (rowType) {
		        case DataSet.ROW_TYPE_INSERTED:
		            snMap.put("SN",(int) baseDao.insert("HRM080207DAO.edcCrseManageC", inMap));
		            break;
		        case DataSet.ROW_TYPE_UPDATED:   
		            baseDao.update("HRM080207DAO.edcCrseManageU", inMap);
		            break;               
		        case DataSet.ROW_TYPE_DELETED:
	                baseDao.delete("HRM080207DAO.grupEdcTrgterManageAllD", inMap);
		            baseDao.delete("HRM080207DAO.edcCrseManageD", inMap);
		            break; 
		   		}
			}
		}
        
        
    	DataSetMap list2 = (DataSetMap) inDataset.get("input2");
        for (int x = 0; x < list2.size(); x++) {
            Map<String, Object> map = list2.get(x);
            int rowType2 = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType2) {
            case DataSet.ROW_TYPE_INSERTED:
            	map.putAll(snMap);
                baseDao.insert("HRM080207DAO.grupEdcTrgterManageC", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:   
                baseDao.update("HRM080207DAO.grupEdcTrgterManageU", map);
                break; 
            case DataSet.ROW_TYPE_DELETED:   
                baseDao.delete("HRM080207DAO.grupEdcTrgterManageD", map);
                break; 
            }
        }
        
    }
    
    
	/**
	 * 전체사원 목록 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEmpList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map<String, Object> inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080207DAO.selectEmpList", inMap));
		outDataset.put("output1", outDsMap);
	}
	
 
    
	/**
	 * 교육분류(역량코드) 목록 조회 / 팝업2 교육분류(역량) 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAbilityCodeManageList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map<String, Object> inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080207DAO.selectAbilityCodeManageList", inMap));
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 팝업1 교육유형 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEdcTyRcognTimeList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map<String, Object> inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080207DAO.selectEdcTyRcognTimeList", inMap));
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 집합교육 -> 개인실적등록 데이터 이관처리
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked" })
	public void trnsferEdcManage(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map<String, Object> inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		if (inDsMap != null) {
			if(inDsMap.size() > 0) {
				inMap = inDsMap.get(0);
				
				baseDao.insert("HRM080207DAO.insertEdcManage", inMap);
				baseDao.update("HRM080207DAO.edcCrseManageU01", inMap);
			}
		}
	}

	/**
	 * 엑셀업로드
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "unchecked" })
    public void excelUpload(DataSetMap tranInfo, Map<String, Object> inVar,Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
		Map<String, Object> inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

    	DataSetMap list = (DataSetMap) inDataset.get("input2");
    	int listSize = list.size();
    	if(listSize > 0) {
    		
    		baseDao.delete("HRM080207DAO.grupEdcTrgterManageAllD", inMap);
    		
    		for (int x = 0; x < listSize; x++) {
    			Map<String, Object> map = list.get(x);
    			int rowType2 = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
    			switch (rowType2) {
    			case DataSet.ROW_TYPE_INSERTED:
    				baseDao.insert("HRM080207DAO.excelUpload", map);
    				break;
    			case DataSet.ROW_TYPE_UPDATED:
    				break; 
    			case DataSet.ROW_TYPE_DELETED:
    				break; 
    			}
    		}
    	}
    }
	
}
