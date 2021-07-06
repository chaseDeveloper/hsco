package hsco.mis.aud.AUD020107;

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
 * @Class Name      : AUD020107ServiceImpl.java
 * @Description     : 법무코드를 관리하는 서비스 구현체 클래스
 * @author          : 이수지
 * @since           : 2016. 05. 30.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 05. 30.      이수지             최초생성
 * </pre>  
 */
@Service("AUD020107Service")
public class AUD020107ServiceImpl extends BaseService {
    
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
    public void selectNtcnCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records = (List<Map>)baseDao.list("AUD020107DAO.selectNtcnCodeList", inMap);
        
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /**
     * 코드 등록, 수정
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public void ntcnCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        //코드
    	 DataSetMap list1 = (DataSetMap) inDataset.get("input1");
         for (int x = 0; x < list1.size(); x++) {
             Map map = list1.get(x);
             int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
             switch (rowType) {
             case DataSet.ROW_TYPE_INSERTED:
                 baseDao.insert("AUD020107DAO.ntcnCodeC", map);
                 break;
             case DataSet.ROW_TYPE_UPDATED:
                 baseDao.update("AUD020107DAO.ntcnCodeU", map);
                 break;
             }
         }
         //알림대상
         DataSetMap list2 = (DataSetMap) inDataset.get("input2");
         for (int x = 0; x < list2.size(); x++) {
             Map map = list2.get(x);
             int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
             switch (rowType) {
             case DataSet.ROW_TYPE_DELETED:
                 baseDao.delete("AUD020107DAO.ntcnEmpD", map);
                 break;
             case DataSet.ROW_TYPE_INSERTED:
                 baseDao.insert("AUD020107DAO.ntcnEmpC", map);
                 break;
             }
         }
    }
    
    /**
     * 알림대상 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectNtcnEmpList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records = (List<Map>)baseDao.list("AUD020107DAO.selectNtcnEmpList", inMap);

        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
}
