package hsco.mis.ctr.CTR030100_P03;

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
 * @Class Name   	: CTR030100_P03Service.java
 * @Description  	: 계약변경내역을 관리하는 ServiceImpl 클래스 
 * @author       	: 정윤원
 * @since        	: 2015. 10. 30.
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
 *  2015. 10. 30.	정윤원		최초생성
 * </pre>
 */
@Service("CTR030100_P03Service")
public class CTR030100_P03ServiceImpl extends BaseService implements CTR030100_P03Service {

    protected Logger         log = LoggerFactory.getLogger(this.getClass());

    /**
     * 계약보증변경 조회
     * 
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("CTR030100_P03DAO.selectEntrpsCntrctAssrncCha", inMap));
        outDataset.put("output1", outDsMap);
    }

    /**
     * 계약보증변경 저장
     * 
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        int listSize = (list == null) ? 0 : list.size();
        for (int x = 0; x < listSize; x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("CTR030100_P03DAO.insertEntrpsCntrctAssrncCha", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("CTR030100_P03DAO.updateEntrpsCntrctAssrncCha", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("CTR030100_P03DAO.deleteEntrpsCntrctAssrncCha", map);
                break;
            }
        }
    }
}