package hsco.mis.law.LAW010301;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : LAW010301ServiceImpl.java
 * @Description     : 소송현황 정보를 관리하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 15.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 15.      김병진              최초생성
 * </pre>  
 */
@Service("LAW010301Service")
public class LAW010301ServiceImpl extends BaseService implements LAW010301Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
     * 소송현황 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectLwstList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLwstList", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLwstList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
    
    /**
     * 변호사(법무사)사무실 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectJcffrOffmList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input6");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectJcffrOffmList", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectJcffrOffmList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output6", outDsMap);
        
    }
    
    
    /**
     * 변호사(법무사) 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectLawyerList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input7");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLawyerList", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLawyerList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output7", outDsMap);
        
    }
    
    /**
     * 소송현황 목록을 저장, 수정, 삭제 한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public void lwstListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	 // 사건목록
	   	DataSetMap list0 = (DataSetMap) inDataset.get("input01");
	   	if(list0 != null) {
		   	for (int x = 0; x < list0.size(); x++) {
		         Map map = list0.get(x);
		         int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		         switch (rowType) {
		         case DataSet.ROW_TYPE_DELETED:
		        	 baseDao.delete("LAW010300DAO.incdntListD", map);
		             break;
		         }
		     }
		     for (int x = 0; x < list0.size(); x++) {
		         Map map = list0.get(x);
		         int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		         switch (rowType) {
		         case DataSet.ROW_TYPE_INSERTED:
		             baseDao.insert("LAW010300DAO.incdntListC", map);
		             break;
		         case DataSet.ROW_TYPE_UPDATED:
		             baseDao.update("LAW010300DAO.incdntListU", map);
		             break;
		         }
		     }
	   	}
    	
    	//소송현황
        DataSetMap list1 = (DataSetMap) inDataset.get("input02");
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("LAW010301DAO.lwstListD", map);
                break;
            }
        }
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("LAW010301DAO.lwstListC", map);
                baseDao.insert("LAW010301DAO.incdntListU", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("LAW010301DAO.lwstListU", map);
                break;
            }
        }
        //소장등록
        DataSetMap list2 = (DataSetMap) inDataset.get("input04");
        for (int x = 0; x < list2.size(); x++) {
            Map map = list2.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("LAW010301DAO.hdchRegistListD", map);
                break;
            }
        }
        for (int x = 0; x < list2.size(); x++) {
            Map map = list2.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.insert("LAW010301DAO.hdchRegistListCU", map);
                break;
            }
        }
        
        //소제기 의뢰 
        DataSetMap list3 = (DataSetMap) inDataset.get("input06");
        for (int x = 0; x < list3.size(); x++) {
            Map map = list3.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            switch(rowType) {
            case DataSet.ROW_TYPE_DELETED :
                baseDao.delete("LAW010301DAO.smallLdggReqestListD", map);
                break;
            }   
        }
        for (int x = 0; x < list3.size(); x++) {
            Map map = list3.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            switch(rowType) {
            case DataSet.ROW_TYPE_INSERTED :
                baseDao.insert("LAW010301DAO.smallLdggReqestListC", map);
                break;
            case DataSet.ROW_TYPE_UPDATED :
                baseDao.update("LAW010301DAO.smallLdggReqestListU", map);
                break;
            }   
        }
        
        //소송자료
        DataSetMap list4 = (DataSetMap) inDataset.get("input08");
        for (int x = 0; x < list4.size(); x++) {
            Map map = list4.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            switch(rowType) {
            case DataSet.ROW_TYPE_DELETED :
                baseDao.delete("LAW010301DAO.lwstDtaListD", map);
                break;
            }   
        }
        for (int x = 0; x < list4.size(); x++) {
            Map map = list4.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            switch(rowType) {
            case DataSet.ROW_TYPE_INSERTED :
                baseDao.insert("LAW010301DAO.lwstDtaListC", map);
                break;
            case DataSet.ROW_TYPE_UPDATED :
                baseDao.update("LAW010301DAO.lwstDtaListU", map);
                break;
            }   
        }
        
        DataSetMap list5 = (DataSetMap) inDataset.get("input10");
        for (int x = 0; x < list5.size(); x++) {
            Map map = list5.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            switch(rowType) {
            case DataSet.ROW_TYPE_DELETED :
                baseDao.delete("LAW010301DAO.lwstAgentListD", map);
                break;
            }   
        }
        for (int x = 0; x < list5.size(); x++) {
            Map map = list5.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            switch(rowType) {
            case DataSet.ROW_TYPE_INSERTED :
                baseDao.insert("LAW010301DAO.lwstAgentListC", map);
                break;
            case DataSet.ROW_TYPE_UPDATED :
                baseDao.update("LAW010301DAO.lwstAgentListU", map);
                break;
            }   
        }
        
        //소송판결관리
        DataSetMap list6 = (DataSetMap) inDataset.get("input12");
        for (int x = 0; x < list6.size(); x++) {
            Map map = list6.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            switch(rowType) {
            case DataSet.ROW_TYPE_UPDATED :
                baseDao.update("LAW010304DAO.lwstResultListU", map);
                baseDao.update("LAW010301DAO.incdntListU", map);
                break;
            }
        }
        
        //공탁금
        DataSetMap list7 = (DataSetMap) inDataset.get("input14");
        for (int x = 0; x < list7.size(); x++) {
            Map map = list7.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            switch(rowType) {
            case DataSet.ROW_TYPE_DELETED :
                baseDao.delete("LAW010301DAO.ldgmntAmountListD", map);
                break;
            }   
        }
        for (int x = 0; x < list7.size(); x++) {
            Map map = list7.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            switch(rowType) {
            case DataSet.ROW_TYPE_INSERTED :
                baseDao.insert("LAW010301DAO.ldgmntAmountListC", map);
                break;
            case DataSet.ROW_TYPE_UPDATED :
                baseDao.update("LAW010301DAO.ldgmntAmountListU", map);
                break;
            }   
        }
        
        //판결금
        DataSetMap list8 = (DataSetMap) inDataset.get("input16");
        for (int x = 0; x < list8.size(); x++) {
            Map map = list8.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            switch(rowType) {
            case DataSet.ROW_TYPE_DELETED :
                baseDao.delete("LAW010301DAO.judmnAmountListD", map);
                break;
            }   
        }
        for (int x = 0; x < list8.size(); x++) {
            Map map = list8.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            switch(rowType) {
            case DataSet.ROW_TYPE_INSERTED :
                baseDao.insert("LAW010301DAO.judmnAmountListC", map);
                break;
            case DataSet.ROW_TYPE_UPDATED :
                baseDao.update("LAW010301DAO.judmnAmountListU", map);
                break;
            }   
        }
        
        //소송비용
        DataSetMap list9 = (DataSetMap) inDataset.get("input18");
        for (int x = 0; x < list9.size(); x++) {
            Map map = list9.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            switch(rowType) {
            case DataSet.ROW_TYPE_DELETED :
                baseDao.delete("LAW010301DAO.lwstCtListD", map);
                break;
            }   
        }
        for (int x = 0; x < list9.size(); x++) {
            Map map = list9.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            switch(rowType) {
            case DataSet.ROW_TYPE_INSERTED :
                baseDao.insert("LAW010301DAO.lwstCtListC", map);
                break;
            case DataSet.ROW_TYPE_UPDATED :
                baseDao.update("LAW010301DAO.lwstCtListU", map);
                break;
            }   
        }
    }
    
    /**
     * 소장등록 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked"})
    public void selectSubTab( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input03");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        //소장등록
        DataSetMap outDsMap1Tab1 = new DataSetMap();
        outDsMap1Tab1.setRowMaps((List<Map>) baseDao.list("LAW010301DAO.selectHdchRegistList", inMap));
        
        //소제기의뢰
        DataSetMap outDsMap1Tab2 = new DataSetMap();
        outDsMap1Tab2.setRowMaps((List<Map>) baseDao.list("LAW010301DAO.selectSmallLdggReqestList", inMap));
        
        //소송자료
        DataSetMap outDsMap1Tab3 = new DataSetMap();
        outDsMap1Tab3.setRowMaps((List<Map>) baseDao.list("LAW010301DAO.selectLwstDtaList", inMap));
        
        //소송대리인
        DataSetMap outDsMap1Tab4 = new DataSetMap();
        outDsMap1Tab4.setRowMaps((List<Map>) baseDao.list("LAW010301DAO.selectLwstAgentList", inMap));
        
        //소송판결관리
        
        //공탁금
        DataSetMap outDsMap1Tab6 = new DataSetMap();
        outDsMap1Tab6.setRowMaps((List<Map>) baseDao.list("LAW010301DAO.selectLdgmntAmountList", inMap));
        
        //판결금
        DataSetMap outDsMap1Tab7 = new DataSetMap();
        outDsMap1Tab7.setRowMaps((List<Map>) baseDao.list("LAW010301DAO.selectJudmnAmountList", inMap));
        
        //소송비용
        DataSetMap outDsMap1Tab8 = new DataSetMap();
        outDsMap1Tab8.setRowMaps((List<Map>) baseDao.list("LAW010301DAO.selectLwstCtList", inMap));
        
        outDataset.put("output03", outDsMap1Tab1);
        outDataset.put("output05", outDsMap1Tab2);
        outDataset.put("output07", outDsMap1Tab3);  
        outDataset.put("output09", outDsMap1Tab4);  
        outDataset.put("output13", outDsMap1Tab6);  
        outDataset.put("output15", outDsMap1Tab7);  
        outDataset.put("output17", outDsMap1Tab8);  
        
        
    }
    /**
     * 소제기의뢰 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSmallLdggReqestList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input05");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectSmallLdggReqestList", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectSmallLdggReqestList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output05", outDsMap);
    }
    
    /**
     * 소송자료 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectLwstDtaList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input07");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLwstDtaList", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLwstDtaList", inVar);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        outDataset.put("output07", outDsMap);
    }
    /**
     * 소송대리인 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectLwstAgentList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input09");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLwstAgentList", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLwstAgentList", inVar);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        outDataset.put("output09", outDsMap);
    }

    /**
     * 소송진행내역 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectLwstFxList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input11");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLwstFxList", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLwstFxList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output11", outDsMap);
        
    }

    
    /**
     * 공탁금 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectLdgmntAmountList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input13");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLdgmntAmountList", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLdgmntAmountList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output13", outDsMap);
        
    }

    /**
     * 판결금 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectJudmnAmountList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input15");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectJudmnAmountList", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectJudmnAmountList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output15", outDsMap);
        
    }
    
    
    /**
     * 소송비용 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectLwstCtList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input17");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLwstCtList", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLwstCtList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output17", outDsMap);
        
    }
  
    
    /**
     * 선택 행의 자식 레코드 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectLwstListChild( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input19");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLwstListChild", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010301DAO.selectLwstListChild", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output19", outDsMap);
        
    }
}
