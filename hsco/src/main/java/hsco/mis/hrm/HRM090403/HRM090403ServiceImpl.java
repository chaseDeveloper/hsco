package hsco.mis.hrm.HRM090403;

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
 * @Class Name   	: HRM090403ServiceImpl.java
 * @Description  	: 
 * @author       	: 이수지
 * @since        	: 2017. 05. 12.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 05. 12.   이수지		최초생성
 * </pre>  
 */

@Service("HRM090403Service")
public class HRM090403ServiceImpl extends BaseService implements HRM090403Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** 배차신청 정보 목록조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmReqstList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		List<Map> records = (List<Map>) baseDao.list("HRM090403DAO.tbhrmReqstList", inMap);
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    /** 저장(D) */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void tbhrmReqstSave(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	int existAt = 0;
        int seq = 0;
        
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
    	
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            
            switch (rowType) {
	            case DataSet.ROW_TYPE_DELETED:
	            	baseDao.delete("HRM090403DAO.deleteFlwpsg", map);
	                baseDao.delete("HRM090403DAO.deleteReqst", map);
	                break;
            }
        }
        
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            
            switch (rowType) {
	            case DataSet.ROW_TYPE_INSERTED:
	            	existAt = (int)baseDao.select("HRM090403DAO.chkCarAlc", map);
	            	if(existAt == 0) {
	            		seq = (Integer)baseDao.select("HRM090403DAO.selectCaralcSeq", map);
		                map.put("CARALC_SEQ", seq);
		                baseDao.insert("HRM090403DAO.insertReqst", map);
	            	}
	                else {
	                	String errMsg = "배차시간";
	                    throw new NexaServiceException("info.항목.중복.재입력.요청", errMsg);
	                }
	                break;
	            case DataSet.ROW_TYPE_UPDATED:
	            	existAt = (int)baseDao.select("HRM090403DAO.chkCarAlc", map);
	            	if(existAt == 0) {
	            		baseDao.update("HRM090403DAO.updateReqst", map);
	            	}
	                else {
	                	String errMsg = "배차시간";
	                    throw new NexaServiceException("info.항목.중복.재입력.요청", errMsg);
	                }
	                
	                break;
            }
        }
        

        DataSetMap list2 = (DataSetMap) inDataset.get("input2");
        
        for (int x = 0; x < list2.size(); x++) {
            Map map = list2.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
            	
            	// 배차정보 대표키 유무 체크
            	if(map.get("CARALC_SEQ") == null || ((String) map.get("CARALC_SEQ")).isEmpty()){
            		map.put("CARALC_SEQ", seq);
				}
                baseDao.insert("HRM090403DAO.insertFlwpsg", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
            	
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM090403DAO.deleteFlwpsg", map);
                break;
            }
        }
    }

    /** 동승자조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCralcFlwpsg(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090403DAO.selectCralcFlwpsg", inMap));
        outDataset.put("output1", outDsMap);
    }
    
    /** 차량별 배차 현황 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectVhcleCarAlcList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		List<Map> records = (List<Map>) baseDao.list("HRM090403DAO.selectVhcleCarAlcList", inMap);
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
}