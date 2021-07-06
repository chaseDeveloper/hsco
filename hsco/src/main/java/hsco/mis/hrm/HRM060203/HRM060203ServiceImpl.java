package hsco.mis.hrm.HRM060203;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM060203ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 11. 11. 
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 11	 이혜선				최초생성
 * </pre>  
 */
@Service("HRM060203Service")
public class HRM060203ServiceImpl extends BaseService implements HRM060203Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**집계내역 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectCrevalSmList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM060203DAO.selectCrevalSmList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
    }

    
    /**기초자료생성 */
    @SuppressWarnings({ "rawtypes" })
    public void crevalSmCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        baseDao.delete("HRM060203DAO.CrevalSmListD", inMap); 
        baseDao.delete("HRM060203DAO.CrevalSmD", inMap); 
        baseDao.insert("HRM060203DAO.bassCrevalSmC", inMap); 
        baseDao.insert("HRM060203DAO.excessCrevalSmC", inMap); 
    }

    /**집계자료생성 */
    @SuppressWarnings({ "rawtypes" })
    public void crevalSmListCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        baseDao.delete("HRM060203DAO.CrevalSmListD", inMap); 
        baseDao.insert("HRM060203DAO.CrevalSmListC", inMap); 
    }

    /** 일괄확정 */
    @SuppressWarnings({ "rawtypes" })
    public int setDcsnList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
    
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);
            baseDao.update("HRM060203DAO.setDcsnList", map);

        }
        return iRow;
        
    }

    /** 경력평정서 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCrevalPrintList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		DataSetMap outDsMap4 = new DataSetMap();
		DataSetMap outDsMap5 = new DataSetMap();
		DataSetMap outDsMap6 = new DataSetMap();
		DataSetMap outDsMap7 = new DataSetMap();
		DataSetMap outDsMap8 = new DataSetMap();
		DataSetMap outDsMap9 = new DataSetMap();
		DataSetMap outDsMap10 = new DataSetMap();
		
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM060203DAO.tbhrmAcreval", inMap));
		outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM060203DAO.tbhrmBcreval", inMap));
		outDsMap3.setRowMaps((List<Map>) baseDao.list("HRM060203DAO.tbhrmCcreval", inMap));
		outDsMap4.setRowMaps((List<Map>) baseDao.list("HRM060203DAO.tbhrmDcreval", inMap));
		outDsMap5.setRowMaps((List<Map>) baseDao.list("HRM060203DAO.tbhrmEcreval", inMap));
		outDsMap6.setRowMaps((List<Map>) baseDao.list("HRM060203DAO.tbhrmFcreval", inMap));
		outDsMap7.setRowMaps((List<Map>) baseDao.list("HRM060203DAO.tbhrmGcreval", inMap));
		outDsMap8.setRowMaps((List<Map>) baseDao.list("HRM060203DAO.tbhrmHcreval", inMap));
		outDsMap9.setRowMaps((List<Map>) baseDao.list("HRM060203DAO.tbhrmIcreval", inMap));
		outDsMap10.setRowMaps((List<Map>) baseDao.list("HRM060203DAO.tbhrmJcreval", inMap));
		
		outDataset.put("output1", outDsMap1); //ds_print01
		outDataset.put("output2", outDsMap2); //ds_print02
		outDataset.put("output3", outDsMap3); //ds_print03
		outDataset.put("output4", outDsMap4); //ds_print04
		outDataset.put("output5", outDsMap5); //ds_print05
		outDataset.put("output6", outDsMap6); //ds_print06
		outDataset.put("output7", outDsMap7); //ds_print07
		outDataset.put("output8", outDsMap8); //ds_print08
		outDataset.put("output9", outDsMap9); //ds_print09
		outDataset.put("output10", outDsMap10); //ds_print10
	}
}
