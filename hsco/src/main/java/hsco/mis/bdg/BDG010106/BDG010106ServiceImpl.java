package hsco.mis.bdg.BDG010106;

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
 * @Class Name   	: BDG010106ServiceImpl.java
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

@Service("BDG010106Service")
public class BDG010106ServiceImpl extends BaseService implements BDG010106Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBukipList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010106DAO.selectBukipList", inMap));
        outDataset.put("output1", outDsMap);
    }
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBudgetAcntCode(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010106DAO.selectBudgetAcntCode", inMap));
        outDataset.put("output1", outDsMap);
    }
    
    @SuppressWarnings({ "rawtypes" })
    public void saveBukipCode(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("BDG010106DAO.insertBukipInfo", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("BDG010106DAO.updateBukipInfo", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                int existAt = Integer.parseInt((String)baseDao.select("BDG010106DAO.chkBukip", map));
                if(existAt == 0) {
                    baseDao.delete("BDG010106DAO.deleteBukipInfo", map);
                }
                else {
                    String bukipCode = (String) map.get("BUKIP_CODE");
                    String bukipNm   = (String) map.get("BUKIP_NM");
                    String errMsg = bukipCode + "(" + bukipNm + ")";
                    errMsg += " 정보는 연결된 예산계정코드가 존재합니다.";
                    throw new NexaServiceException("fail.삭제.불가", errMsg);
                }
                
                break;
            }
        }
    }
}
