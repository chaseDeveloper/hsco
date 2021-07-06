package hsco.mis.hrm.HRM020304;

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
 * @Class Name   	: HRM020304ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 08. 03.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 03.	이혜선			최초생성
 * </pre>  
 */

@Service("HRM020304Service")
public class HRM020304ServiceImpl extends BaseService implements HRM020304Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /** 인적성검사관리 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void paTestScrproList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020304DAO.paTestScrproList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
    }
    
    /** 인적성검사관리 상세조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void paTestScrproR(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input5");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020304DAO.paTestScrproR", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output5", outDsMap);
    }
    
    /** 인적성검사관리  채용년도 콤보데이터 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void empmnYearComboList (DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020304DAO.empmnYearComboList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output2", outDsMap);
	}	
	
    /** 인적성검사관리  차수 콤보데이터 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void odrSeComboList (DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input3");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020304DAO.odrSeComboList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output3", outDsMap);
	}
	
    /** 인적성검사관리 채용공고명 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void pblancNmComboList (DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input4");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020304DAO.pblancNmComboList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output4", outDsMap);
	}
	
    @SuppressWarnings({ "rawtypes" })
    public void paTestScrproDetailCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input7");
        int listSize = (list == null) ? 0 : list.size();
        for (int x = 0; x < listSize; x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("HRM020304DAO.paTestScrproC", map);
                baseDao.insert("HRM020304DAO.paTestScrproDetailC", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM020304DAO.paTestScrproDetailU", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM020304DAO.paTestScrproDetailD", map);
                baseDao.delete("HRM020304DAO.paTestScrproD", map);
                break;
            }
        }

        DataSetMap list3 = (DataSetMap) inDataset.get("input8");
        int listSize3 = (list3 == null) ? 0 : list3.size();
        for (int x = 0; x < listSize3; x++) {
            Map map3 = list3.get(x);
            baseDao.update("HRM020304DAO.paTestScrproDetailTotU", map3);
        }
    }

    @SuppressWarnings({ "rawtypes" })
    public void saveExcelUpload(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = inDsMap.get(0);
        baseDao.delete("HRM020302DAO.deleteEtcScrproDetail", inMap);    // 기타전형상세 삭제
        baseDao.delete("HRM020302DAO.deleteEtcScrpro", inMap);          // 기타전형 삭제
        
        DataSetMap list = (DataSetMap) inDataset.get("input2");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            baseDao.insert("HRM020302DAO.insertEtcScrpro", map);        // 기타전형 추가
        }
//        for (int x = 0; x < list.size(); x++) {
//            Map map = list.get(x);
//            baseDao.insert("HRM020302DAO.insertEtcScrproDetail", map);  // 기타전형상세 추가
//        }
//        
//        baseDao.update("HRM020302DAO.updateEtcScrpro", inMap);          // 기타전형 총금액 집계 
    }
}