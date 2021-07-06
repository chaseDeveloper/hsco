package hsco.mis.hrm.HRM080105;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HRM080105ServiceImpl.java
 * @Description     : 원격교육코드를 관리하는 서비스 구현체 클래스
 * @author          : 이수지
 * @since           : 2017. 12. 26.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 12. 26.      이수지             최초생성
 * </pre>  
 */
@Service("HRM080105Service")
public class HRM080105ServiceImpl extends BaseService {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
     * 원격교육코드 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records = (List<Map>)baseDao.list("HRM080105DAO.selectCodeList", inMap);
        
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /**
     * 원격교육코드 등록, 수정, 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public void codeListCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	 DataSetMap list = (DataSetMap) inDataset.get("input1");
         for (int x = 0; x < list.size(); x++) {
             Map map = list.get(x);
             int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
             switch (rowType) {
             case DataSet.ROW_TYPE_DELETED:
                 baseDao.delete("HRM080105DAO.codeListD", map);
                 break;
             case DataSet.ROW_TYPE_INSERTED:
                 baseDao.insert("HRM080105DAO.codeListC", map);
                 break;
             case DataSet.ROW_TYPE_UPDATED:
                 baseDao.update("HRM080105DAO.codeListU", map);
                 break;
             }
         }
    }


    /**
     * 전년도 복사
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public void saveCopyPrvYear(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        Map map = list.get(0);
        baseDao.delete("HRM080105DAO.deleteCopyPrvYear", map);
        baseDao.insert("HRM080105DAO.insertCopyPrvYear", map);
    }
}
