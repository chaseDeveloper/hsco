package hsco.mis.law.LAW010103;

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
 * @Class Name      : LAW010103ServiceImpl.java
 * @Description     : 변호사비용관리 목록을 관리하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 13.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 13.      김병진              최초생성
 * </pre>  
 */
@Service("LAW010103Service")
public class LAW010103ServiceImpl extends BaseService implements LAW010103Service {
    
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

        records = (List<Map>)baseDao.list("LAW010103DAO.selectLwstList", inMap);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }    
    
    /**
     * 소송비용지출 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectLawyerCtList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input02");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010103DAO.selectLawyerCtList", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010103DAO.selectLawyerCtList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output02", outDsMap);
        
    }
    
    /**
     * 소송비용지출 목록을 저장/수정 한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
        public int lawyerCtListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
                Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
                Map<String, DataSetMap> outDataset) throws NexaServiceException {
            
            int iRow = 0;
            
            DataSetMap list = (DataSetMap) inDataset.get("input03");
            
            int listSize = (list == null) ? 0 : list.size();
            
            for (int x = 0; x < listSize; x++) {
                    
                Map map = list.get(x);
                int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
                switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED :
                    baseDao.insert("LAW010103DAO.lawyerCtListCU", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("LAW010103DAO.lawyerCtListCU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("LAW010103DAO.lawyerCtListD", map);
                    break;
                }
            }
        return iRow;
    }
    
  
    /**
     * 지출결의번호저장
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
        public int updateExpndtrDecsnNo(DataSetMap tranInfo, Map<String, Object> inVar,
                Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
                Map<String, DataSetMap> outDataset) throws NexaServiceException {
            
            int iRow = 0;
            
            DataSetMap list = (DataSetMap) inDataset.get("input01");
            
            int listSize = (list == null) ? 0 : list.size();
            
            for (int x = 0; x < listSize; x++) {
                    
                Map map = list.get(x);
                baseDao.insert("LAW010103DAO.updateExpndtrDecsnNo", map);
            }
        return iRow;
    }
    
    /**
     * UBIREOPORT DATASET을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void innerSanctnUbiDataset( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010103DAO.innerSanctnUbiDataset", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010103DAO.innerSanctnUbiDataset", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
    
    /**
     * 최초내부결재진행여부체크
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectInnerSanctnMasterCheck( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010103DAO.selectInnerSanctnMasterCheck", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010103DAO.selectInnerSanctnMasterCheck", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /**전자결재 */
    @SuppressWarnings({ "rawtypes" })
    public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        Map map = list.get(0);
        baseDao.update("LAW010103DAO.approveU", map);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
    }
    
    /**
     * 소송지출팝업조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPymnt( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010103DAO.selectPymnt", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010103DAO.selectPymnt", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
    }
        
}
