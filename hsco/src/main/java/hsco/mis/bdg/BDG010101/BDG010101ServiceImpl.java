package hsco.mis.bdg.BDG010101;

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
 * @Class Name   	: BDG010101ServiceImpl.java
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

@Service("BDG010101Service")
public class BDG010101ServiceImpl extends BaseService implements BDG010101Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBsnsCode(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010101DAO.selectBsnsCode", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSub(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap1.setRowMaps((List<Map>) baseDao.list("BDG010101DAO.selectBsnsDept", inMap));
        outDsMap2.setRowMaps((List<Map>) baseDao.list("BDG010101DAO.selectBsnsSeAccnut", inMap));
        outDataset.put("output1", outDsMap1);
        outDataset.put("output2", outDsMap2);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public void saveBsnsCode(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("BDG010101DAO.insertBsnsCode", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG010101DAO.updateBsnsCode", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                map.put("IS_PARENT", "TRUE");
                baseDao.delete("BDG010101DAO.deleteBsnsSeAccnut", map); // 자식 데이터를 먼저 지움
                baseDao.delete("BDG010101DAO.deleteBsnsDept", map);     // 자식 데이터를 먼저 지움
                baseDao.delete("BDG010101DAO.deleteBsnsCode", map);
                break;
            }
        }

        DataSetMap list2 = (DataSetMap) inDataset.get("input2");
        for (int x = 0; x < list2.size(); x++) {
            Map map = list2.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("BDG010101DAO.insertBsnsDept", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG010101DAO.updateBsnsDept", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("BDG010101DAO.deleteBsnsDept", map);
                break;
            }
        }

        DataSetMap list3 = (DataSetMap) inDataset.get("input3");
        for (int x = 0; x < list3.size(); x++) {
            Map map = list3.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("BDG010101DAO.insertBsnsSeAccnut", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG010101DAO.updateBsnsSeAccnut", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("BDG010101DAO.deleteBsnsSeAccnut", map);
                break;
            }
        }
    }
}
