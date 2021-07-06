package hsco.mis.hrm.HRM070111;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM070111ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 12. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 02.   김형태		최초생성
 * </pre>  
 */

@Service("HRM070111Service")
public class HRM070111ServiceImpl extends BaseService implements HRM070111Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** 신규버튼 클릭시 신청자 정보 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectNewData(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM070111DAO.selectNewData", inMap));
        
        outDataset.put("output1", outDsMap);
    }
    
    /** 휴일근무신청 상세 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectRestDeWorkR(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM070111DAO.selectRestDeWorkR", inMap));
        
        outDataset.put("output1", outDsMap);
    }
	
    /** 휴일근무신청 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectRestDeWorkList(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM070111DAO.selectRestDeWorkList", inMap));
        
        outDataset.put("output1", outDsMap);
    }
    
    /** 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    
    public void saveRestDeWorkCUD(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("HRM070111DAO.insertRestDeWork", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
            	baseDao.update("HRM070111DAO.updateRestDeWork", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM070111DAO.deleteRestDeWork", map);
                break;
            }
        }
    }
    
    /**
	 * 전자결재번호 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
		
		// 전자결재번호 조회
		String sanctnNO= (String) baseDao.select("HRM070111DAO.selectSanctnNO", map);
		map.put("SANCTN_NO", sanctnNO);
		
		// 대체근무 전자결재번호 업데이트
		baseDao.update("HRM070111DAO.approveU", map);
		
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
	}	
	
}