package hsco.mis.ctr.CTR040200;

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
 * @Class Name   	: CTR040200Service.java
 * @Description  	: 용역계약관리 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 10. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 07.	이수지		최초생성
 * </pre>  
 */	
@Service("CTR040200Service")
public class CTR040200ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/**
	 * 용역계약 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void servcCntrctList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("CTR040200DAO.servcCntrctList", inMap));
        outDataset.put("output1", outDsMap);
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps((List<Map>) baseDao.list("CTR040200DAO.inturnList", inMap));
        outDataset.put("output2", outDsMap2);
	}
	
	
	/**
	 * 용역계약거래처 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void servcCntrctBcncList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("CTR040200DAO.servcCntrctBcncList", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	
	 /**
     * 용역계약 저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked"})
	
	public int saveCntrct( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	int iRow = 0;
    	
    	DataSetMap input1 = inDataset.get("input1");	// 용역계약
		DataSetMap input2 = inDataset.get("input2");	// 용역계약거래처
		
		if(input1.size() > 0) {
			Map mastrMap = null;
			
			// 용역계약 저장(등록,수정)
			for(Map map : input1.getRowMaps()) {
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED:
						map.put("CNTRCT_NO", (String) baseDao.select("CTR040200DAO.servcCntrctNo", map)); // 키값 취득
						baseDao.insert("CTR040200DAO.servcCntrctC", map);
						break;
					case DataSet.ROW_TYPE_UPDATED:
						iRow += baseDao.update("CTR040200DAO.servcCntrctU", map);
						break;
					default:
						break;
				}
				
				if("1".equals((String)map.get("CURROW"))) {
					mastrMap = map;
				}
			}
			
			// 계약업체정보 저장
			for(Map map : input2.getRowMaps()) {
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED:
						if(mastrMap != null) {
							map.put("CNTRCT", mastrMap);
						}
						baseDao.insert("CTR040200DAO.servcCntrctBcncC", map);
						baseDao.update("CTR040200DAO.waitSeqU", map);			// 대기순서 변경
						break;
					case DataSet.ROW_TYPE_UPDATED:
						baseDao.update("CTR040200DAO.servcCntrctBcncU", map);
						break;
					case DataSet.ROW_TYPE_DELETED:
						baseDao.delete("CTR040200DAO.servcCntrctBcncD", map);
						break;
					default:
						break;
				}
			}
			
			// 용역계약 저장(삭제)
			for(Map map : input1.getRowMaps()) {
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				switch(rowType) {
					case DataSet.ROW_TYPE_DELETED:
						iRow += baseDao.delete("CTR040200DAO.servcCntrctD", map);
						break;
					default:
						break;
				}
			}
			
		}
		
		return iRow;
    }
    
}