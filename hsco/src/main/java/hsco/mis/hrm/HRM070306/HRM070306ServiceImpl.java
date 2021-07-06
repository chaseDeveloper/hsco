package hsco.mis.hrm.HRM070306;

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
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM070306ServiceImpl.java
 * @Description  	: 
 * @author       	: 박세현
 * @since        	: 2016. 10. 31.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 10. 31	박세현			최초생성
 * </pre>  
 */

@Service("HRM070306Service")
public class HRM070306ServiceImpl extends BaseService implements HRM070306Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**
	 * 급여이체자료 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPymntTransfrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("HRM070306DAO.selectPymntTransfrList", inMap);
		} else {
			records = (List<Map>)baseDao.list("HRM070306DAO.selectPymntTransfrList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
    /**
     * 급여이체자료 등록, 수정, 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int PymntTransfrCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input2");     
        int listSize = (list == null) ? 0 : list.size();        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);          
            // 세션정보 설정
            try {
                ObjectUtil.setUserToMap(map);
            }
            catch( Exception e) {
                throw new NexaServiceException(e); 
            }   
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();             
            switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED :
                    
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("HRM070306DAO.PymntTransfrU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    
                    break;          
            }               
        }       
        return iRow;
    }
    
    /**
     * 급여이체자료 회계로 old
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int accPymntTransfr( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");     
                
                
        Map map = list.get(0);          
        // 세션정보 설정
        try {
            ObjectUtil.setUserToMap(map);
        }
        catch( Exception e) {
            throw new NexaServiceException(e); 
        }   
        // 삭제
        baseDao.delete("HRM070306DAO.delAccPymntTransfr", map);
        // 생성
        baseDao.insert("HRM070306DAO.creAccPymntTransfr", map);
        // 전송확인
        baseDao.update("HRM070306DAO.updAccPymntTransfr", map);
        
            
        return iRow;
    }

    /**
     * 지급요청 처리자료
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    //조회
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void pymntRqs( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		//지급요청처리자료 
		List <Map> records2 = (List<Map>)baseDao.list("HRM070306DAO.pymntRqsProc", inMap);
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		outDataset.put("output2", outDsMap2);
		
		//지급요청대상자료 
		List <Map> records = (List<Map>)baseDao.list("HRM070306DAO.pymntRqsTrg", inMap);
		if(records2 != null && records2.size() > 0) {
			//records = new ArrayList();
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    /**
     * 지급요청 
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	@SuppressWarnings("rawtypes")
	public void pymntRqsC( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
			
			//지급요청
			baseDao.insert("HRM070306DAO.pymntRqsC", inMap);
		}
		
	}
	
	/**
	 * 지급요청취소
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void pymntRqsD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
			baseDao.insert("HRM070306DAO.pymntRqsD", inMap);
		}
		
	}

    /**
     * 급여이체 엑셀자료등록
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	@SuppressWarnings("rawtypes")
	public void pymntRqsExcel( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap1 = (DataSetMap)inDataset.get("input1");
		DataSetMap inDsMap2 = (DataSetMap)inDataset.get("input2");
		
		Map inMap1 = inMap1 = inDsMap1.get(0);
		
        for (int i = 0; i < inDsMap2.size(); i++) {
            Map map = inDsMap2.get(i);
            
            map.put("BPLC_CODE", inMap1.get("BPLC_CODE"));
            map.put("SRCH_DT", inMap1.get("SRCH_DT"));
            map.put("PYMNT_SE", inMap1.get("PYMNT_SE"));
            map.put("PYMNT_DE", inMap1.get("PYMNT_DE"));
            
            map.put("EMPNO", map.get("Column1"));
            map.put("EMPNM", map.get("Column2"));
            map.put("DECSN_AMOUNT", map.get("Column3"));
            

            baseDao.insert("HRM070306DAO.pymntRqsExcel", map);
        }		
	}
	
	/**
	 * 급여이체 엑셀자료삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void pymntRqsExcelDelete( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
			baseDao.insert("HRM070306DAO.pymntRqsExcelDelete", inMap);
		}
		
	}
    
}