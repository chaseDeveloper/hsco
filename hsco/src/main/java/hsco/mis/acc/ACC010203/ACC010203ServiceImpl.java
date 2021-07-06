package hsco.mis.acc.ACC010203;

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
 * @Class Name   	: ACC010203Service.java
 * @Description  	: 토지예산계정과목맵핑을 조회하는 ServiceImpl 클래스 
 * @author       	: 정윤원
 * @since        	: 2015. 11. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 25.	정윤원		최초생성
 * </pre>  
 */
@Service("ACC010203Service")
public class ACC010203ServiceImpl extends BaseService {

    protected Logger log = LoggerFactory.getLogger(ACC010203ServiceImpl.class);
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void init(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled()) log.info("init Started!");
    	
    	Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        Object houseSe = inMap.get("HOUSE_SE");
        
        DataSetMap outDsMap = new DataSetMap();
        
        System.out.println("houseSe =" + houseSe);
        
        if(houseSe != null){
	        if(houseSe.equals("R1")){
	        	outDsMap.setRowMaps((List<Map>) baseDao.list("ACC010203DAO.selectLadInfo1", inMap));
	        } else if(houseSe.equals("R2")){
	        	outDsMap.setRowMaps((List<Map>) baseDao.list("ACC010203DAO.selectLadInfo2", inMap));
	        } else if(houseSe.equals("R3")){
	        	outDsMap.setRowMaps((List<Map>) baseDao.list("ACC010203DAO.selectLadInfo1", inMap));
	        } else if(houseSe.equals("R4")){
	        	outDsMap.setRowMaps((List<Map>) baseDao.list("ACC010203DAO.selectLadInfo3", inMap));
	        } else {
	        	outDsMap.setRowMaps((List<Map>) baseDao.list("ACC010203DAO.selectLadInfo", inMap));
	        }
        } else {
        	outDsMap.setRowMaps((List<Map>) baseDao.list("ACC010203DAO.selectLadInfo", inMap));
        }
        
        
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC010203DAO.selectBudgetAcntRentMapng", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes" })
    
    public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("ACC010203DAO.insertBudgetAcntRentMapng", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("ACC010203DAO.updateBudgetAcntRentMapng", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("ACC010203DAO.deleteBudgetAcntRentMapng", map);
                break;
		    default:
		    	break;
            }
        }
    }
    
    /**
	 * 전년도 복사
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
    
    public void saveCopyPrvYear(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        Map map = list.get(0);
        baseDao.delete("ACC010203DAO.deleteCopyPrvYear", map);
        baseDao.insert("ACC010203DAO.insertCopyPrvYear", map);
    }
}