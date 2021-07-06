package hsco.mis.law.LAW010102;

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
 * @Class Name      : LAW010102ServiceImpl.java
 * @Description     : 법무코드를 관리하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 12.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 12.      김병진             최초생성
 * </pre>  
 */
@Service("LAW010102Service")
public class LAW010102ServiceImpl extends BaseService implements LAW010102Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
     * 코드그룹 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectLawCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records = (List<Map>)baseDao.list("LAW010102DAO.selectLawCodeList", inMap);
        
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
    
    /**
     * 그룹코드 등록, 수정, 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public void lawCodeListCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	 DataSetMap list1 = (DataSetMap) inDataset.get("input02");
         for (int x = 0; x < list1.size(); x++) {
             Map map = list1.get(x);
             int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
             switch (rowType) {
             case DataSet.ROW_TYPE_DELETED:
            	 baseDao.delete("LAW010102DAO.lawDetailCodeListAllD", map);
                 baseDao.delete("LAW010102DAO.lawCodeListD", map);
                 break;
             }
         }
         for (int x = 0; x < list1.size(); x++) {
             Map map = list1.get(x);
             int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
             switch (rowType) {
             case DataSet.ROW_TYPE_INSERTED:
                 baseDao.insert("LAW010102DAO.lawCodeListC", map);
                 break;
             case DataSet.ROW_TYPE_UPDATED:
                 baseDao.update("LAW010102DAO.lawCodeListU", map);
                 break;
             }
         }
         
         DataSetMap list2 = (DataSetMap) inDataset.get("input04");
         for (int x = 0; x < list2.size(); x++) {
             Map map = list2.get(x);
             int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
             switch (rowType) {
             case DataSet.ROW_TYPE_DELETED:
                 baseDao.delete("LAW010102DAO.lawDetailCodeListD", map);
                 break;
             }
         }
         for (int x = 0; x < list2.size(); x++) {
             Map map = list2.get(x);
             int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
             switch (rowType) {
             case DataSet.ROW_TYPE_INSERTED:
                 baseDao.insert("LAW010102DAO.lawDetailCodeListC", map);
                 break;
             case DataSet.ROW_TYPE_UPDATED:
                 baseDao.update("LAW010102DAO.lawDetailCodeListU", map);
                 break;
             }
         }
    }        
    
    /**
     * 코드 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectLawDetailCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input03");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records = (List<Map>)baseDao.list("LAW010102DAO.selectLawDetailCodeList", inMap);

        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output03", outDsMap);
        
    }
}
