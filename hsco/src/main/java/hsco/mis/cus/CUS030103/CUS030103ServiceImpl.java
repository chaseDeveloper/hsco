package hsco.mis.cus.CUS030103;

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
 * @Class Name      : CUS030103ServiceImpl.java
 * @Description     : 고객상담목록을 관리하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 9. 21.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 21.       김병진            최초생성
 * </pre>  
 */
@Service("CUS030103Service")
public class CUS030103ServiceImpl extends BaseService implements CUS030103Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
     * 고객 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCstmrList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS030103DAO.selectCstmrList", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS030103DAO.selectCstmrList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
    
    /**
     * 상담 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCstmrCnsltList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input02");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS030103DAO.selectCstmrCnsltList", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS030103DAO.selectCstmrCnsltList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output02", outDsMap);
        
    }

    /**
     * 상담목록을 저장, 수정, 삭제 한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int cstmrCnsltListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
                baseDao.insert("CUS030103DAO.cstmrCnsltListC", map);
            	if("1".equals((String)map.get("INDPND_CHK"))){
            		baseDao.insert("CUS030103DAO.indpndQestnC", map);
            	}
                break;
            case DataSet.ROW_TYPE_UPDATED :
                iRow += baseDao.update("CUS030103DAO.cstmrCnsltListU", map);
                if("1".equals((String)map.get("INDPND_CHK"))){
            		baseDao.insert("CUS030103DAO.indpndQestnC", map);
            	}
                break;
            case DataSet.ROW_TYPE_DELETED :
                iRow += baseDao.delete("CUS030103DAO.cstmrCnsltListD", map);
                break;
            }   
        }
        return iRow;
    }
    
    /**
     * 고객상세정보를 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCstmrDetailInfo( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input04");
        Map inMap = null;
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        DataSetMap outDsMap3 = new DataSetMap();
        DataSetMap outDsMap4 = new DataSetMap();
        DataSetMap outDsMap5 = new DataSetMap();
        DataSetMap outDsMap6 = new DataSetMap();
        
        //매입임대  ds_puchasInfo
        outDsMap1.setRowMaps((List<Map>) baseDao.list("CUS030103DAO.selectPuchasInfo", inMap));
        //영구임대  ds_rentInfo
        outDsMap2.setRowMaps((List<Map>) baseDao.list("CUS030103DAO.selectRentInfo", inMap));
        //전세임대  ds_lfstsInfo
        outDsMap3.setRowMaps((List<Map>) baseDao.list("CUS030103DAO.selectLfstsInfo", inMap));
        //주택판매  ds_hcntrctrInfo
        outDsMap4.setRowMaps((List<Map>) baseDao.list("CUS030103DAO.selectHcntrctrInfo", inMap));
        //토지판매  ds_lcntrctrInfo
        outDsMap5.setRowMaps((List<Map>) baseDao.list("CUS030103DAO.selectLcntrctrInfo", inMap));
        //보상고객  ds_ownerInfo
        outDsMap6.setRowMaps((List<Map>) baseDao.list("CUS030103DAO.selectOwnerInfo", inMap));
        
        outDataset.put("output01", outDsMap1);
        outDataset.put("output02", outDsMap2);
        outDataset.put("output03", outDsMap3);
        outDataset.put("output04", outDsMap4);
        outDataset.put("output05", outDsMap5);
        outDataset.put("output06", outDsMap6);
    }
    
    
    /**
     * 보상상세정보를 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectOwnerInfoDetail( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input05");
        Map inMap = null;
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        DataSetMap outDsMap1 = new DataSetMap();
        //매입임대  ds_puchasInfo
        outDsMap1.setRowMaps((List<Map>) baseDao.list("CUS030103DAO.selectOwnerInfoDetail", inMap));
        
        outDataset.put("output01", outDsMap1);
    }

    /**
     * 보상상세정보를 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void getAuthBtnList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        DataSetMap outDsMap1 = new DataSetMap();
        //매입임대  ds_puchasInfo
        outDsMap1.setRowMaps((List<Map>) baseDao.list("Author.getListBtn", inMap));
        
        outDataset.put("output1", outDsMap1);
    }    
    
    
}
