package hsco.mis.hrm.HRM020308;

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
 * @Class Name   	: HRM020308ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 08.05.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08.05.	이혜선			최초생성
 * </pre>  
 */

@Service("HRM020308Service")
public class HRM020308ServiceImpl extends BaseService implements HRM020308Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	

    /** 전형결과관리 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void scrproResultList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020308DAO.scrproResultList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
    }
    
    /** 전형결과관리 상세조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void scrproResultR(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input5");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020308DAO.scrproResultR", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output5", outDsMap);
    }
    
    /** 전형결과관리  채용년도 콤보데이터 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void empmnYearComboList (DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020308DAO.empmnYearComboList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output2", outDsMap);
	}	
	
    /** 전형결과관리  차수 콤보데이터 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void odrSeComboList (DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input3");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020308DAO.odrSeComboList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output3", outDsMap);
	}
	
    /** 전형결과관리 채용공고명 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void pblancNmComboList (DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input4");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020308DAO.pblancNmComboList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output4", outDsMap);
	}
	
    @SuppressWarnings({ "rawtypes"})
	public int scrproResultDetailCUD(DataSetMap tranInfo, Map<String, Object> inVar,Map<String, DataSetMap> inDataset, 
			Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input7");
        
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);
            
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            
            switch(rowType) {
                case DataSet.ROW_TYPE_UPDATED :
                    String iCnt = map.get("ICNT") + "";
                    int chk = Integer.parseInt((String)baseDao.select("HRM020308DAO.chkData",map));
                    
                    if("001".equals(iCnt) && chk > 0) {
                        throw new NexaServiceException("info.처리불가", "면접평가 미완료 "+chk+"건이 존재합니다.");
                    }
                    
                    baseDao.insert("HRM020308DAO.scrproWResultU",map);
                    baseDao.insert("HRM020308DAO.scrproPResultU",map);
                    baseDao.insert("HRM020308DAO.scrproPaResultU",map);
                    baseDao.insert("HRM020308DAO.scrproIResultU",map);
                    break;
            }   
        }
        
		return iRow;
	
	}
	
}