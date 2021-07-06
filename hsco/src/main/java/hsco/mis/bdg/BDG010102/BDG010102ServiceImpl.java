package hsco.mis.bdg.BDG010102;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: BDG010102ServiceImpl.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 07. 07.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 07.                  정윤원                최초생성
 * </pre>
 */

@Service("BDG010102Service")
public class BDG010102ServiceImpl extends BaseService implements BDG010102Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBudgetAcntCode(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010102DAO.selectBudgetAcntCode", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAtmcJrnlzTy(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010102DAO.selectAtmcJrnlzTy", inMap));
        outDataset.put("output1", outDsMap);
    }
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBukipList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010102DAO.selectBukipList", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes" })
    public void saveBudgetAcntCode(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("BDG010102DAO.insertBudgetAcntCode", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG010102DAO.updateBudgetAcntCode", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("BDG010102DAO.deleteAtmcJrnlzTy", map);      // 자식 데이터를 먼저 제거
                baseDao.delete("BDG010102DAO.deleteBudgetAcntCode", map);
                break;
            }
        }
        
        DataSetMap list2 = (DataSetMap) inDataset.get("input2");
        for (int x = 0; x < list2.size(); x++) {
            Map map = list2.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("BDG010102DAO.insertAtmcJrnlzTy", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG010102DAO.updateAtmcJrnlzTy", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("BDG010102DAO.deleteAtmcJrnlzTy", map);
                break;
            }
        }
        
        DataSetMap list3 = (DataSetMap) inDataset.get("input3");
        for (int x = 0; x < list3.size(); x++) {
            Map map = list3.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("BDG010102DAO.insertBudgetBukipMapping", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("BDG010102DAO.deleteBudgetBukipMapping", map);
                break;
            }
        }
    }


    @SuppressWarnings({ "rawtypes" })
    public void saveCopyPrvYear(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        Map map = list.get(0);

        baseDao.delete("BDG010102DAO.deleteCopyPrvYear", map);
        baseDao.insert("BDG010102DAO.insertCopyPrvYear", map);
    }


    @SuppressWarnings({ "rawtypes" })
    public void saveCopyPrvYearJrnlzTy(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        Map map = list.get(0);
        
        baseDao.delete("BDG010102DAO.deleteCopyPrvYearJrnlzTy", map);
        baseDao.insert("BDG010102DAO.insertCopyPrvYearJrnlzTy", map);
    }
    
    
    @SuppressWarnings({ "rawtypes" })
    public void saveCopyPrvYearBukip(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        Map map = list.get(0);
        
        baseDao.delete("BDG010102DAO.deleteCopyPrvYearBukip", map);
        baseDao.insert("BDG010102DAO.insertCopyPrvYearBukip", map);
    }


    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectUseAcntCnt(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010102DAO.selectUseAcntCnt", inMap));
        outDataset.put("output1", outDsMap);
    }


    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectUseYearCnt(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010102DAO.selectUseYearCnt", inMap));
        outDataset.put("output1", outDsMap);
    }
    
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBukipListP(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010102DAO.selectBukipListP", inMap));
        outDataset.put("output1", outDsMap);
    }
}
