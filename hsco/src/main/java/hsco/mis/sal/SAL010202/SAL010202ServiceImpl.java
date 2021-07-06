package hsco.mis.sal.SAL010202;

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
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL010202ServiceImpl.java
 * @Description  	: 지급공제상세코드관리
 * @author          : 정  민
 * @since        	: 2015. 6. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 3. 17.                    정  민                최초생성
 * </pre>  
 */

@Service("SAL010202Service")
public class SAL010202ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /**
     * 지급공제기준코드 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPymntDdcStdrCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        
        outDsMap.setRowMaps((List<Map>)baseDao.list("SAL010202DAO.selectPymntDdcStdrCodeList", inMap));
        
        outDataset.put("output1", outDsMap);    
    }
    
    /**
     * 급여상세코드 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSalaryDetailCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
       
        outDsMap.setRowMaps((List<Map>)baseDao.list("SAL010202DAO.selectSalaryDetailCodeList", inMap));
        
        outDataset.put("output1", outDsMap);    
    }
    
	
    /**
     * 급여상세코드 등록, 수정, 삭제
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
    public int salaryDetailCodeCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");     
        int listSize = (list == null) ? 0 : list.size();        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);          

            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();             
            switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED :
                    baseDao.insert("SAL010202DAO.salaryDetailCodeC", map);
                    iRow ++;
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("SAL010202DAO.salaryDetailCodeU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("SAL010202DAO.salaryDetailCodeD", map);
                    break;          
            }               
        }       
        return iRow;
    }
	
	
}
