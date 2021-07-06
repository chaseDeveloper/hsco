package hsco.mis.hrm.HRM070103;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HRM070103ServiceImpl.java
 * @Description     : 연차관리
 * @author          : 김병진
 * @since           : 2017. 05. 23.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 05. 23.      정  민              최초생성
 * </pre>  
 */

@Service("HRM070103Service")
public class HRM070103ServiceImpl extends BaseService implements HRM070103Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
     * 연차관리 목록 조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectYrycManageList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>)baseDao.list("HRM070103DAO.selectYrycManageList", inMap));
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /**
     * 연차관리 목록 등록, 수정
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public int yrycManageListCU(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);
                            
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            
            switch(rowType) {
            case DataSet.ROW_TYPE_INSERTED :
                baseDao.insert("HRM070103DAO.yrycManageListC", map);
                break;
            case DataSet.ROW_TYPE_UPDATED :
                iRow += baseDao.update("HRM070103DAO.yrycManageListU", map);
                break;
            }   
        }
        return iRow;
    }
    
  
	/**
     * 연차생성
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes"})
    public void yrycManageProcess(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        baseDao.update("HRM070103DAO.yrycManageProcess", inMap);
	}
}
