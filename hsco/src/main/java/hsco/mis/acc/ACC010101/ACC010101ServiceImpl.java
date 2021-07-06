package hsco.mis.acc.ACC010101;

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
 * @Class Name   	: ACC010101ServiceImpl.java
 * @Description  	: 분개유형관리 ServiceImpl 클래스 
 * @author       	: 이상명
 * @since        	: 2017. 10. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 15.	이상명		최초생성
 *  2016. 01. 18.	이수지		역분개실행(팝업)
 * </pre>  
 */
@Service("acc010101Service")
public class ACC010101ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC010101ServiceImpl.class);
	
	/**
	 * 예산계정관리
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void budgetAcntList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
		
		List<Map> records = (List<Map>)baseDao.list("ACC010101DAO.budgetAcntList", inMap);
		
		DataSetMap output = new DataSetMap();
		output.setRowMaps(records);
		outDataset.put("output1", output);
		
	}
	
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAtmcJrnlzTy(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC010101DAO.selectAtmcJrnlzTy", inMap));
        outDataset.put("output1", outDsMap);
    }
	
	
	@SuppressWarnings({ "rawtypes" })
    public void saveCopyPrvYearJrnlzTy(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        Map map = list.get(0);
        
        baseDao.delete("ACC010101DAO.deleteCopyPrvYearJrnlzTy", map);
        baseDao.insert("ACC010101DAO.insertCopyPrvYearJrnlzTy", map);
    }

	@SuppressWarnings({ "rawtypes" })
    public void saveJrnlzTy(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("ACC010101DAO.insertAtmcJrnlzTy", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("ACC010101DAO.updateAtmcJrnlzTy", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("ACC010101DAO.deleteAtmcJrnlzTy", map);
                break;
            }
        }
    }
	
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAtmcJrnlzTyPopup(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC010101DAO.selectAtmcJrnlzTyPopup", inMap));
        outDataset.put("output1", outDsMap);
    }
	
	
    @SuppressWarnings("rawtypes")
	public void selectJrnlzTyUseCnt(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        Map resultMap = (Map) baseDao.select("ACC010101DAO.selectJrnlzTyUseCnt", inMap);
        outDsMap.add(resultMap);
        outDataset.put("output1", outDsMap);
    }
}