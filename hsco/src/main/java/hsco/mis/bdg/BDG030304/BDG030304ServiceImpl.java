package hsco.mis.bdg.BDG030304;

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
 * 
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : BDG030304ServiceImpl.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 9. 3.
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
 *  2015. 9. 3.                  정윤원                최초생성
 * </pre>
 */
@Service("BDG030304Service")
public class BDG030304ServiceImpl extends BaseService implements BDG030304Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectExcutBudget(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030304DAO.selectExcutBudget", inMap)); // 실행예산 조회
        outDataset.put("output1", outDsMap);
    }


    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBudgetFrmtnMdat(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030304DAO.selectBudgetFrmtnMdat", inMap)); // 예산편성조정 조회
        outDataset.put("output1", outDsMap);
    }


    @SuppressWarnings({ "rawtypes" })
    
    public void saveBudgetFrmtnMdat(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	// 계정별예산현황
    	DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        
    	for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.insert("BDG030304DAO.insertFrmtnMdat",       map);    // 부서변경이력 추가
                baseDao.update("BDG030304DAO.updateExpndtrUnitCode", map);    // 지출단위코드변경
                baseDao.update("BDG030304DAO.updateExecutBudget",    map);    // 실행예산 변경
                break;
            }
        }
    	
    	// 예산편성조정(부서이력변경)
        DataSetMap list2 = (DataSetMap) inDataset.get("input2");
        for (int x = 0; x < list2.size(); x++) {
            Map map = list2.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("BDG030304DAO.insertBudgetFrmtnMdat", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG030304DAO.updateBudgetFrmtnMdat", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("BDG030304DAO.deleteBudgetFrmtnMdat", map);
                break;
            }
        }
    }

    //편성확정
    @SuppressWarnings({ "rawtypes" })
    
    public void saveExecutBudget(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG030304DAO.updateBudgetFrmtnMdat", map);
                break;
            }
        }

        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input2");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        baseDao.update("BDG020101DAO.updateMvmnExecut", inMap);   // 확정여부를 가진 금액 일괄합산갱신
    }
}
