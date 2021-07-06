package hsco.mis.cus.CUS010102_P02;

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
 * @Class Name      : CUS010102_P02ServiceImpl.java
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
@Service("CUS010102_P02Service")
public class CUS010102_P02ServiceImpl extends BaseService {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
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
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
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
        outDsMap1.setRowMaps((List<Map>) baseDao.list("CUS010102_P02DAO.selectPuchasInfo", inMap));
        //영구임대  ds_rentInfo
        outDsMap2.setRowMaps((List<Map>) baseDao.list("CUS010102_P02DAO.selectRentInfo", inMap));
        //전세임대  ds_lfstsInfo
        outDsMap3.setRowMaps((List<Map>) baseDao.list("CUS010102_P02DAO.selectLfstsInfo", inMap));
        //주택판매  ds_hcntrctrInfo
        outDsMap4.setRowMaps((List<Map>) baseDao.list("CUS010102_P02DAO.selectHcntrctrInfo", inMap));
        //토지판매  ds_lcntrctrInfo
        outDsMap5.setRowMaps((List<Map>) baseDao.list("CUS010102_P02DAO.selectLcntrctrInfo", inMap));
        //보상고객  ds_ownerInfo
        outDsMap6.setRowMaps((List<Map>) baseDao.list("CUS010102_P02DAO.selectOwnerInfo", inMap));
        
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
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        DataSetMap outDsMap1 = new DataSetMap();
        //매입임대  ds_puchasInfo
        outDsMap1.setRowMaps((List<Map>) baseDao.list("CUS010102_P02DAO.selectOwnerInfoDetail", inMap));
        
        outDataset.put("output01", outDsMap1);
    }
}
