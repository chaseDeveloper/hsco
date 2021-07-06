package hsco.mis.hrm.HRM020303;

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
 * @Class Name   	: HRM020303ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 08.03.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08.03.	이혜선			최초생성
 * </pre>  
 */

@Service("HRM020303Service")
public class HRM020303ServiceImpl extends BaseService implements HRM020303Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**서류전형관리 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void tbhrmPapersScrproList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020303DAO.tbhrmPapersScrproList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
    }
    
    /** 서류전형관리 상세조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void tbhrmPapersScrproR(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input5");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020303DAO.tbhrmPapersScrproR", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output5", outDsMap);
    }
    
    /** 서류전형관리  채용년도 콤보데이터 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void empmnYearComboList (DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020303DAO.empmnYearComboList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output2", outDsMap);
	}	
	
    /** 서류전형관리  차수 콤보데이터 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void odrSeComboList (DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input3");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020303DAO.odrSeComboList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output3", outDsMap);
	}
	
    /** 서류전형관리 채용공고명 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void pblancNmComboList (DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input4");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020303DAO.pblancNmComboList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output4", outDsMap);
	}
	
    /** 평가항목 콤보 불러오기 */
/*    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectEvlIemCombo (DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020303DAO.selectEvlIemCombo", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
	}*/
    
    @SuppressWarnings("rawtypes")
    public void tbhrmPapersScrproCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        int listSize4 = (list1 == null) ? 0 : list1.size();
        for (int x = 0; x < listSize4; x++) {
            Map map3 = list1.get(x);
            baseDao.insert("HRM020303DAO.tbhrmPapersScrproI", map3);
        }

        DataSetMap list2 = (DataSetMap) inDataset.get("input2");
        int listSize = (list2 == null) ? 0 : list2.size();
        for (int x = 0; x < listSize; x++) {
            Map map = list2.get(x);
            baseDao.insert("HRM020303DAO.tbhrmPapersScrproU",     map);
            baseDao.insert("HRM020303DAO.tbhrmPapersScrproRankU", map);
        }
    }

}