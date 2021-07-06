package hsco.mis.sal.SAL040109;

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
 * @Class Name   	: SAL040109ServiceImpl.java
 * @Description  	: 환산급여공제율관리
 * @author       	: 이상명
 * @since        	: 2016. 4. 7.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 4. 7.					이상명				최초생성
 * </pre>  
 */

@Service("SAL040109Service")
public class SAL040109ServiceImpl extends BaseService implements SAL040109Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**
	 * 환산급여공제율관리 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCnvrsnSalaryDateList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL040109DAO.selectCnvrsnSalaryDateList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL040109DAO.selectCnvrsnSalaryDateList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
			        		
   		
   	}
    
    /**
	 * 환산급여공제율관리2 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCnvrsnSalaryList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL040109DAO.selectCnvrsnSalaryList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL040109DAO.selectCnvrsnSalaryList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);
			        		
   		
   	}
    
    
    /**
	 * 환산급여공제율관리 등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int CnvrsnSalaryCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("SAL040109DAO.CnvrsnSalaryC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SAL040109DAO.CnvrsnSalaryU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SAL040109DAO.CnvrsnSalaryD", map);
					break;			
			}				
		}		
		return iRow;
	}
	
	/**
     * 세액계산특례 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectRetiretaxamtexcptList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL040109DAO.selectRetiretaxamtexcptList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL040109DAO.selectRetiretaxamtexcptList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
                            
        
    }
    
    
    /**
     * 세액계산특례관리 등록, 수정, 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int RetiretaxamtexcptCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
                    baseDao.insert("SAL040109DAO.RetiretaxamtexcptC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("SAL040109DAO.RetiretaxamtexcptU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("SAL040109DAO.RetiretaxamtexcptD", map);
                    break;          
            }               
        }       
        return iRow;
    }
    
   	
}
