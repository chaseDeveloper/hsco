package hsco.mis.bdg.BDG040102;

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
 * @Class Name      : BDG040102ServiceImpl.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 8. 30.
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
 *  2015. 8. 30.                  정윤원                최초생성
 * </pre>
 */
@Service("BDG040102Service")
public class BDG040102ServiceImpl extends BaseService implements BDG040102Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectOperIncme(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        
        baseDao.update("BDG040102DAO.updateChitNo", inMap);
        
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG040102DAO.selectOperIncme", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes" })
    public void saveOperIncme(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            
            switch (rowType) {
            case DataSet.ROW_TYPE_UPDATED :
                baseDao.update("BDG040102DAO.updateOperIncme",    map);     // 레포츠센터 수입
                baseDao.update("BDG040102DAO.updatePstyrAtmptAm", map);     // 과년도 미수액
                break;
            case DataSet.ROW_TYPE_DELETED :
                baseDao.update("BDG040102DAO.deleteOperIncmeEa",    map);     // 레포츠센터 수입
               // baseDao.update("BDG040102DAO.deletePstyrAtmptAmEa", map);     // 과년도 미수액
                break;
            }
        }
    }

    @SuppressWarnings({ "rawtypes" })
    public void insertOperIncme(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        baseDao.delete("BDG040102DAO.deleteOperIncme", inMap); // 레포츠센터수입 일괄제거
        baseDao.insert("BDG040102DAO.insertOperIncme", inMap); // 레포츠센터수입 일괄생성
    }

    //레포츠센터수입 전표생성
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public Map<String, ?> saveMakeChit(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

        if (inDsMap != null && inDsMap.size() > 0) {
            
	        System.out.println("레포츠센터수입 전표생성============================> ");
	        for( int i=0; i< inDsMap.size(); i++){
        		inMap = inDsMap.get(i);
        		baseDao.insert("BDG040102DAO.callSpaccCnterIncmeSlipI", inMap);
	        
		        if (null != inMap.get("OUT_RESULT_MSG")) {
					//throw new NexaServiceException(inMap.get("OUT_RESULT_MSG").toString());
					throw new NexaServiceException("info.처리불가", inMap.get("OUT_RESULT_MSG").toString());
		        }
			}
        }else {
        	throw new NexaServiceException("info.처리불가", "데이터가 없으므로");
        }
        return inMap;
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void sanSelectOperIncme(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG040102DAO.sanSelectOperIncme", inMap));
        outDataset.put("output1", outDsMap);
    }
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAtchFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
   
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG040102DAO.selectAtchFile", inMap));
        outDataset.put("output1", outDsMap);
    }
    
    @SuppressWarnings({ "rawtypes" })
    public void updateFileValue(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        Map inMap = null;
        if (inDsMap != null) {
        	 inMap = inDsMap.get(0);
        }
        baseDao.update("BDG040102DAO.updateFileValue",    inMap);     // 레포츠센터 수입
    }
}
