package hsco.mis.hrm.HRM090801;

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
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HRM090801ServiceImpl.java
 * @Description     : 복지포인트 기준표관리
 * @author          : 이수지
 * @since           : 2017. 11. 27.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2017 NANUMICT, Ict. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 11. 27.                    이수지             최초생성
 * </pre>  
 */

@Service("HRM090801Service")
public class HRM090801ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    
    /**
	 * 복지포인트 기준표 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectScoreStdrDate( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = null;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("HRM090801DAO.selectScoreStdrDate", inMap);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
   	}
	
		
    /**
	 * 복지포인트 기준표 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectScoreStdr( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

        List <Map> records = null;
        List <Map> recordsAdit = null;

		if (inMap != null) {
			records     = (List<Map>)baseDao.list("HRM090801DAO.selectScoreStdr", inMap);
			recordsAdit = (List<Map>)baseDao.list("HRM090801DAO.selectScoreStdrAdit", inMap);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);

        DataSetMap outDsMapAdit = new DataSetMap();
        outDsMapAdit.setRowMaps(recordsAdit);
        
        outDataset.put("output2", outDsMapAdit);
   		
   	}
	
    /**
   	 * 복지포인트 기준표관리 등록, 수정, 삭제
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public void scoreStdrCUD( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		

        DataSetMap inputDate = (DataSetMap) inDataset.get("inputDate");
        int listDate = (inputDate == null) ? 0 : inputDate.size();
        for (int x = 0; x < listDate; x++) {
            Map map = inputDate.get(x);
            
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            
            switch(rowType) {
                case DataSet.ROW_TYPE_DELETED :
                    baseDao.delete("HRM090801DAO.scoreStdrAditD", map);
                    baseDao.delete("HRM090801DAO.scoreStdrD", map);
                    break;
            }   
        }
        
        DataSetMap input1 = (DataSetMap) inDataset.get("input1");
        int listSize = (input1 == null) ? 0 : input1.size();
        for (int x = 0; x < listSize; x++) {
            Map map = input1.get(x);
            
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            
            switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED :
                    baseDao.insert("HRM090801DAO.scoreStdrC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    baseDao.update("HRM090801DAO.scoreStdrU", map);
                    break;
            }   
        }
        

        DataSetMap input2 = (DataSetMap) inDataset.get("input2");
        int listSize2 = (input2 == null) ? 0 : input2.size();
        for (int x = 0; x < listSize2; x++) {
            Map map = input2.get(x);
            
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            
            switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED :
                    baseDao.insert("HRM090801DAO.scoreStdrAditC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    baseDao.update("HRM090801DAO.scoreStdrAditU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    baseDao.delete("HRM090801DAO.scoreStdrAditD", map);
                    break;
            }   
        }
   	}
    
   	
   	/**
   	 * 복지포인트 기준표관리 삭제
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public void copyScoreStdr( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
   		
   		DataSetMap list = (DataSetMap) inDataset.get("input1");	   			
   			
		Map map = list.get(0);			

        baseDao.insert("HRM090801DAO.scoreStdrCopy", map);
        baseDao.insert("HRM090801DAO.scoreStdrAditCopy", map);
   	}
		
}
