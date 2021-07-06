package hsco.mis.hrm.HRM090205;

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
 * @Class Name   	: HRM090205ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 10. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10.15.   김형태		최초생성
 * </pre>  
 */

@Service("HRM090205Service")
public class HRM090205ServiceImpl extends BaseService implements HRM090205Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /** 제증명발행관리 목록조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmInfoList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090205DAO.tbhrmInfoList", inMap));
		
		outDataset.put("output1", outDsMap);
	}
    
    /** 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    
    public void tbhrmInfoSave(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
    	
    	for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                String existAt = (String)baseDao.select("HRM090205DAO.existAt", map);
                if("Y".equals(existAt)){
                	throw new NexaServiceException("fail.정보등록.실패", "이미 존재하는 접수번호 입니다.");
                }
                break;
            }
        }
    	
    	for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED: case DataSet.ROW_TYPE_UPDATED:
                baseDao.delete("HRM090205DAO.deleteInfo", map);
                baseDao.delete("HRM090205DAO.deleteSelf", map);
                break;
            }
        }
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED: case DataSet.ROW_TYPE_UPDATED:
                baseDao.insert("HRM090205DAO.insertInfo", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM090205DAO.deleteSelf", map);
                break;
            }
        }
    }
    
    /** 접수번호 채번 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void getRceptNo(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090205DAO.getRceptNo", inMap));
        
        outDataset.put("output1", outDsMap);
    }
}