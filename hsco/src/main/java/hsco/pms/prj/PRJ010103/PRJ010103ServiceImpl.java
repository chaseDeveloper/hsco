package hsco.pms.prj.PRJ010103;

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
 * @Class Name   	: PRJ010103ServiceImpl.java
 * @Description  	: 
 * @author       	: 이수지
 * @since        	: 2017. 10. 31.
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
 *  2017. 10. 31.                  이수지                최초생성
 * </pre>
 */

@Service("PRJ010103Service")
public class PRJ010103ServiceImpl extends BaseService implements PRJ010103Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDsBsns(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010103DAO.selectBsnsList", inMap));
        outDataset.put("output1", outDsMap);
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps((List<Map>) baseDao.list("PRJ010103DAO.selectUserBsnsList", inMap));
        outDataset.put("output2", outDsMap2);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDsUser(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010103DAO.selectDs_User", inMap));
        outDataset.put("output1", outDsMap);
    }


    @SuppressWarnings({ "rawtypes" })
    public void saveDsUserBsns(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("PRJ010103DAO.userBsnsC", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("PRJ010103DAO.userBsnsU", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("PRJ010103DAO.userBsnsD", map);
                break;
            }
        }
        
    }

}
