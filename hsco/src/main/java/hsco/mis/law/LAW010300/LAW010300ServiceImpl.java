package hsco.mis.law.LAW010300;

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
 * @Class Name      : LAW010300ServiceImpl.java
 * @Description     : 사무실목록, 변호사목록을 관리하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 12. 21.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 21.      김병진              최초생성
 * </pre>  
 */
@Service("LAW010300Service")
public class LAW010300ServiceImpl extends BaseService implements LAW010300Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
     * 사건 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectIncdntList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010300DAO.selectIncdntList", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010300DAO.selectIncdntList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
    
    /**
     * 사건목록 저장,수정,삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    	public void incdntListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
                Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
                Map<String, DataSetMap> outDataset) throws NexaServiceException {
            
    	 DataSetMap list1 = (DataSetMap) inDataset.get("input02");
         for (int x = 0; x < list1.size(); x++) {
             Map map = list1.get(x);
             int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
             switch (rowType) {
             case DataSet.ROW_TYPE_INSERTED:
                 baseDao.insert("LAW010300DAO.incdntListC", map);
                 break;
             case DataSet.ROW_TYPE_UPDATED:
                 baseDao.update("LAW010300DAO.incdntListU", map);
                 break;
             case DataSet.ROW_TYPE_DELETED:
            	 baseDao.delete("LAW010300DAO.incdntListD", map);
                 break;
             }
         }
    }
}
