package hsco.mis.cus.CUS010105;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CUS010105ServiceImpl.java
 * @Description  	: 해피콜목록을 관리하는 서비스 구현체 클래스
 * @author       	: 김병진
 * @since        	: 2015. 8. 27.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 27.          김병진			 최초생성
 * </pre>  
 */
@Service("CUS010105Service")
public class CUS010105ServiceImpl extends BaseService implements CUS010105Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
 
    /**
	 * 해피콜 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
  	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHppCallList( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {
   		
   		DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
   		Map inMap = null;
   		
   		if (inDsMap != null)
   			inMap = inDsMap.get(0);
   		
   		List <Map> records;

   		if (inMap != null) {
   			records = (List<Map>)baseDao.list("CUS010105DAO.selectHppCallList", inMap);
   		} else {
   			records = (List<Map>)baseDao.list("CUS010105DAO.selectHppCallList", inVar);
   		}
   		
   		DataSetMap outDsMap = new DataSetMap();
   		outDsMap.setRowMaps(records);
   		
   		outDataset.put("output01", outDsMap);
   		
   	}

	/**
	 * 해피콜 목록을 수정한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int hppCallListU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input02");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
				baseDao.insert("CUS010105DAO.hppCallListU", map);
		}
		return iRow;
	}
	
	 /**
     * 분양정보를 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectHcntrctrInfo( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input03");
        Map inMap = null;
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        List <Map> records;
        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010105DAO.selectHcntrctrInfo", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010105DAO.selectHcntrctrInfo", inVar);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        outDataset.put("output03", outDsMap);
    }
}
