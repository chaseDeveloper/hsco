package hsco.mis.sal.SAL020112;

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
 * @Class Name   	: SAL020112ServiceImpl.java
 * @Description  	: 자체평가급관리
 * @author       	: 이상명
 * @since        	: 2017. 7. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 7. 17.					이상명				최초생성
 * </pre>  
 */

@Service("SAL020112Service")
public class SAL020112ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**
	 * 자체평가급 목록조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBudgetpricewageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL020112DAO.selectBudgetpricewageList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL020112DAO.selectBudgetpricewageList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   	}
	
   /**
	 * 자체평가급 등록, 수정, 삭제 (건별)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int BudgetpricewageCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input3");		
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
					baseDao.insert("SAL020112DAO.BudgetpricewageC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SAL020112DAO.BudgetpricewageU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SAL020112DAO.BudgetpricewageD", map);
					break;			
			}				
		}
		
		return iRow;
	}

    /**
   	 * 자체평가급 일괄 등록
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public int Budgetpricewage2C ( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
   		
   		int iRow = 0;
   		
   		DataSetMap list = (DataSetMap) inDataset.get("input4");		

		Map map = list.get(0);			
		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(map);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		}	

		// 생성
		baseDao.insert("SAL020112DAO.Budgetpricewage2C", map);
		
   		return iRow;
   	}
   	
	/**
	 * 자체평가급 일괄 삭제
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int Budgetpricewage2D( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input4");     
                            
        Map map = list.get(0);          
        // 세션정보 설정
        try {
            ObjectUtil.setUserToMap(map);
        }
        catch( Exception e) {
            throw new NexaServiceException(e); 
        }       
        
        // 삭제
        baseDao.insert("SAL020112DAO.Budgetpricewage2D", map);
             
        return iRow;
	}
	
}
