package hsco.mis.cus.CUS030112;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/* import com.nexacro.xapi.data.DataSet; */


import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CUS030112ServiceImpl.java
 * @Description  	: 운영실적및계획관리하는 컨트롤러 클래스
 * @author       	: 조창화
 * @since        	: 2016. 9. 19.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2016 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 9. 19.			  조창화			최초생성
 * </pre>  
 */

@Service("CUS030112Service")
public class CUS030112ServiceImpl extends BaseService implements CUS030112Service {
	
	protected Logger log = LoggerFactory.getLogger(CUS030112ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /** 실적내역  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void CUS030112List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("CUS030112List Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("CUS030112DAO.CUS030112List", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /** 계획내역  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void CUS030112DetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("CUS030112DAO.CUS030112DetailList", inMap);
		} else {
			records = (List<Map>)baseDao.list("CUS030112DAO.CUS030112DetailList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

    /**
     * 운영계획을 저장/수정/삭제 한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int acmsltPlanListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input02");
        
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);
                            
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            
            switch(rowType) {
            case DataSet.ROW_TYPE_INSERTED :
                baseDao.insert("CUS030112DAO.acmsltPlanListC", map);
                break;
            case DataSet.ROW_TYPE_UPDATED :
                iRow += baseDao.update("CUS030112DAO.acmsltPlanListU", map);
                break;
            case DataSet.ROW_TYPE_DELETED :
                iRow += baseDao.delete("CUS030112DAO.acmsltPlanListD", map);
                break;
            }   
        }
        return iRow;
    }    

    /**
     *  계획내역  전월복사 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public void acmsltPlanCopy(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		baseDao.delete("CUS030112DAO.acmsltPlanDelete", inMap);	//현재달 계획내역 삭제
    	
    	baseDao.insert("CUS030112DAO.acmsltPlanCopy", inMap);	//전월 계획내역 복사
    }    
}
