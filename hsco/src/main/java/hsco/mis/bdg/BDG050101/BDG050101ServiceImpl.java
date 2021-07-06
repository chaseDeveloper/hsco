package hsco.mis.bdg.BDG050101;

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
 * 
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : BDG050101ServiceImpl.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 9. 17.
 * @version         : 1.0
 * @see             :
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 17.                  정윤원                최초생성
 * </pre>
 */
@Service("BDG050101Service")
public class BDG050101ServiceImpl extends BaseService implements BDG050101Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBudgetExcutPlan(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap1 = new DataSetMap();
        outDsMap1.setRowMaps((List<Map>) baseDao.list("BDG030101DAO.selectInpYn", inMap));
        outDataset.put("output1", outDsMap1);
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps((List<Map>) baseDao.list("BDG050101DAO.selectExecutBudget", inMap));
        outDataset.put("output2", outDsMap2);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPopup(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap1.setRowMaps((List<Map>) baseDao.list("BDG050101DAO.selectBudgetExcutPlan", inMap));
        outDsMap2.setRowMaps((List<Map>) baseDao.list("BDG050101DAO.selectExecutBudget", inMap));
        outDataset.put("output1", outDsMap1);
        outDataset.put("output2", outDsMap2);
    }
    
    @SuppressWarnings({ "rawtypes" })
    public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG050101DAO.updateBudgetExcutPlan", map);
                break;
            }
        }
    }
    
    @SuppressWarnings({ "rawtypes" })
    public void saveAtmcCalc(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        baseDao.delete("BDG050101DAO.deleteBudgetExcutPlan", inMap);
        baseDao.insert("BDG050101DAO.insertBudgetExcutPlan", inMap);
    }
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void saveDcsnAsignPlan(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        baseDao.delete("BDG050101DAO.deleteBudgetAsign", inMap);
        for(int i = 1; i < 13; i++) {
        	inMap.put("MT", i);
        	baseDao.insert("BDG050101DAO.insertBudgetAsign", inMap);
        }
    }
    
    @SuppressWarnings({ "rawtypes" })
    public void saveDcsnExcutPlan(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        baseDao.update("BDG050101DAO.updateDcsnAt", inMap);
    }
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void saveBudgetExcutPlnHist(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap1 = new DataSetMap();
        outDsMap1.setRowMaps((List<Map>) baseDao.list("BDG050101DAO.selectNextOdr", inMap));
        if(outDsMap1.size() > 0) {
        	inMap.put("ODR", outDsMap1.get(0).get("ODR"));
        } else {
        	throw new NexaServiceException("info.처리불가", "집행계획 이력남기기를 진행할 수 없습니다.\n예산년도를 확인하여 주십시오.");
        }
        baseDao.insert("BDG050101DAO.insertBudgetExcutPlnHist", inMap);
    }
}
