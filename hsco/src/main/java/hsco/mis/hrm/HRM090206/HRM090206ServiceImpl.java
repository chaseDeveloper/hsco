package hsco.mis.hrm.HRM090206;

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
 * @Class Name   	: HRM090206ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 11. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11.16.   김형태		최초생성
 * </pre>  
 */

@Service("HRM090206Service")
public class HRM090206ServiceImpl extends BaseService implements HRM090206Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /** 등기우편물 등록내역 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPstmtrList(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090206DAO.selectPstmtrList", inMap));
        
        outDataset.put("output1", outDsMap);
    }
    
    /** 저장(CUD) */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public void savePstmtrCUD(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("HRM090206DAO.insertPstmtr", map);
                map.put("MSG_CODE", "HRM006");
    	        map.put("INS_USER_ID", map.get("S_USER_ID"));			//등록자ID
    	        map.put("FROM_USER_ID", map.get("S_USER_ID"));			//송신자ID
				map.put("TO_USER_ID", map.get("CNFRMR_EMPNO"));			//수신자ID
    	        map.put("CHANGEWORD1", map.get("CNFRMR_EMPNM"));			//담당자명
    	        map.put("CHANGEWORD2", map.get("RGIST_NO"));				//신청자명
    	        map.put("CHANGEWORD3", map.get("CN"));
    	        
    	        baseDao.insert("MessengerDAO.sendMsgr", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM090206DAO.updatePstmtr", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM090206DAO.deletePstmtr", map);
                break;
            }
        }
    }
	
}