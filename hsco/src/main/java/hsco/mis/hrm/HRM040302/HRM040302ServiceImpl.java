package hsco.mis.hrm.HRM040302;

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
 * @Class Name   	: HRM040302ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 09. 09.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 09.09.   김형태		최초생성
 * </pre>  
 */

@Service("HRM040302Service")
public class HRM040302ServiceImpl extends BaseService implements HRM040302Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
     * 사원조회
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectEmpno(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        Map inMap = null;
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        } else {
            inMap = inVar;
        }

        List<Map> records = (List<Map>) baseDao.list("HRM040302DAO.selectEmpno", inMap);

        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);

        outDataset.put("output1", outDsMap);
    }
    
    /** 징계코드 목록조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDscplStdrList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	// 징계코드 조회
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM040302DAO.selectDscplStdrList"));
		outDataset.put("output1", outDsMap);
		
		// 사원조회
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM040302DAO.selectEmpno"));
		outDataset.put("output2", outDsMap);
	}
	
	/** 징계자 목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDscplDspsList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM040302DAO.selectDscplDspsList", inMap));
		
		outDataset.put("output1", outDsMap);
	}
       
    /** 징계요구내역 저장(CUD) */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void dscplDspsCUD(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		
    	for (int x = 0; x < listSize; x++) {
	        Map map = list.get(x);
	        int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
	        switch (rowType) {
	        case DataSet.ROW_TYPE_INSERTED:
	        	String seq = String.valueOf(baseDao.select("HRM040302DAO.dscplDspsKey"));
	        	map.put("SEQ", seq);
	        	baseDao.insert("HRM040302DAO.dscplDspsC", map);
	            // 감경처리 여부 
	            if(map.get("RWARD_DTLS_SEQ2") != null) {
	            	baseDao.update("HRM040302DAO.rwardDtlsU", map);
	            }
	            break;
	        case DataSet.ROW_TYPE_UPDATED:
	            baseDao.update("HRM040302DAO.dscplDspsU", map);
	            // 감경처리 여부
	            if(map.get("RWARD_DTLS_SEQ2") != null) {
	            	baseDao.update("HRM040302DAO.rwardDtlsU", map);
	            }
	            break;
	        case DataSet.ROW_TYPE_DELETED:
	            baseDao.update("HRM040302DAO.dscplDspsD", map);
	            // 감경처리 여부
	            if(map.get("RWARD_DTLS_SEQ2") != null) {
	            	baseDao.update("HRM040302DAO.rwardDtlsU", map);
	            }
	            break;
	        }
    	}
       
    }
    
	/** 징계말소 */
    @SuppressWarnings({ "rawtypes"})
	public void ersrU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		
    	for (int x = 0; x < listSize; x++) {
	        Map map = list.get(x);
	        int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
	        switch (rowType) {
	        case DataSet.ROW_TYPE_UPDATED:
	            baseDao.update("HRM040302DAO.ersrU", map);
	        }
    	}
	}

}