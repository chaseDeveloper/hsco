package hsco.mis.sal.SAL050102;

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
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL050102ServiceImpl.java
 * @Description  	: 근로소득공제율관리
 * @author       	: 이상명
 * @since        	: 2015. 10. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 07.					이상명				최초생성
 * </pre>  
 */

@Service("SAL050102Service")
public class SAL050102ServiceImpl extends BaseService implements SAL050102Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**
	 * 근로소득공제율관리조회 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLaborIncomeDdcDateList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL050102DAO.selectLaborIncomeDdcDateList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL050102DAO.selectLaborIncomeDdcDateList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
   	}
    
    /**
	 * 근로소득공제율관리조회2 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLaborIncomeDdcList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL050102DAO.selectLaborIncomeDdcList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL050102DAO.selectLaborIncomeDdcList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);	
   		
   	}
    
    /**
   	 * 근로소득공제율관리 등록, 수정, 삭제
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public int LaborIncomeDdcCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
   					baseDao.insert("SAL050102DAO.LaborIncomeDdcC", map);
   					break;
   				case DataSet.ROW_TYPE_UPDATED :
   					iRow += baseDao.update("SAL050102DAO.LaborIncomeDdcU", map);
   					break;
   				case DataSet.ROW_TYPE_DELETED :
   					iRow += baseDao.delete("SAL050102DAO.LaborIncomeDdcD", map);
   					break;			
   			}				
   		}		
   		return iRow;
   	}
   	
    /**
     * 근로소득공제율 생성
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    
    public int LaborIncomeDdcC( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        DataSetMap list = inDataset.get("input3");
        @SuppressWarnings("unchecked")
        Map<String, Object> map = list.get(0);  
        // 세션정보 설정
        try {
            ObjectUtil.setUserToMap(map);
        }
        catch( Exception e) {
            throw new NexaServiceException(e); 
        }
        
        // 근로소득공제율 삭제
        baseDao.insert("SAL050102DAO.delLaborIncomeDdcC", map);
        
        // 근로소득공제율 생성
        baseDao.insert("SAL050102DAO.creLaborIncomeDdcC", map);
        
        return iRow;
    }
    
}
