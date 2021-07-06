package hsco.mis.sal.SAL010108;

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
 * @Class Name   	: SAL010108ServiceImpl.java
 * @Description  	: 사원은행계좌관리
 * @author       	: 이상명
 * @since        	: 2015. 6. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 16.					이상명				최초생성
 * </pre>  
 */

@Service("SAL010108Service")
public class SAL010108ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    
    /**
	 * 사원은행계좌 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEmplBankAcnutList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL010108DAO.selectEmplBankAcnutList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL010108DAO.selectEmplBankAcnutList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
   	}
    
    /**
	 * 사원은행계좌 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEmplBankAcnutChangeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL010108DAO.selectEmplBankAcnutChangeList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL010108DAO.selectEmplBankAcnutChangeList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);	
   		
   	}
	
    /**
   	 * 사원은행계좌 등록, 수정, 삭제
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public int emplbankchangeCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
   					baseDao.insert("SAL010108DAO.emplBankAcnutC", map);
   					break;
   				case DataSet.ROW_TYPE_UPDATED :
   					iRow += baseDao.update("SAL010108DAO.emplBankAcnutU", map);
   					break;
   				case DataSet.ROW_TYPE_DELETED :
   					iRow += baseDao.delete("SAL010108DAO.emplBankAcnutD", map);
   					break;			
   			}				
   		}		
   		return iRow;
   	}
	
   	/**
   	 * 사원은행계좌 등록, 수정, 삭제
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public int EmplbankchangeU( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
   		
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input4");     

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
            
            baseDao.insert("SAL010108DAO.emplBankChangeU", map);
            
        }
               
   		return iRow;
   	}
	
}
