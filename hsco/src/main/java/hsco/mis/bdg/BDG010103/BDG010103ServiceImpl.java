package hsco.mis.bdg.BDG010103;

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
 * @Class Name   	: BDG010103ServiceImpl.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 07. 08.
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
 *  2015. 07. 08.                  정윤원                최초생성
 * </pre>
 */

@Service("BDG010103Service")
public class BDG010103ServiceImpl extends BaseService implements BDG010103Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectFrmtnPd(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010103DAO.selectFrmtnPd", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectFrmtnPdDept(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010103DAO.selectFrmtnPdDept", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public void saveFrmtnPd(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        String parentKey = null;
        String childKey = null;

        DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                if (map.get("SN") == null) {
                    parentKey = (String) baseDao.select("BDG010103DAO.selectStrSeqNo", map); // 부모Key에 대하여 미리 get(list2와 동시에 insert 하는 경우)
                    map.put("SN", parentKey);
                    baseDao.insert("BDG010103DAO.insertFrmtnPd", map);
                    if("TRUE".equals(map.get("PARENT_AT"))) {
                        childKey = parentKey;
                    }
                }
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG010103DAO.updateFrmtnPd", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                map.put("IS_PARENT", "TRUE");
                baseDao.delete("BDG010103DAO.deleteFrmtnPdDept", map); // 자식 데이터를 먼저 지움
                baseDao.delete("BDG010103DAO.deleteFrmtnPd", map);
                break;
            }
        }

        DataSetMap list2 = (DataSetMap) inDataset.get("input2");
        for (int x = 0; x < list2.size(); x++) {
            Map map = list2.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                if (childKey != null) {
                    map.put("SN", childKey); // 부모와 동시에 저장하는 경우, Key를 받아옴
                }
                baseDao.insert("BDG010103DAO.insertFrmtnPdDept", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG010103DAO.updateFrmtnPdDept", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("BDG010103DAO.deleteFrmtnPdDept", map);
                break;
            }
        }
    }
}
