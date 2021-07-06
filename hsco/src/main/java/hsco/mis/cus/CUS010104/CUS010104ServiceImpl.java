package hsco.mis.cus.CUS010104;

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
 * @Class Name   	: CUS010104ServiceImpl.java
 * @Description  	: 공지사항을 관리하는 서비스 구현체 클래스
 * @author       	: 김병진
 * @since        	: 2015. 8. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 20.          김병진			 최초생성
 * </pre>  
 */
@Service("CUS010104Service")
public class CUS010104ServiceImpl extends BaseService implements CUS010104Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
 
    /**
	 * SMS 발송 내용 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSndngCnList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010104DAO.selectSndngCnList", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010104DAO.selectSndngCnList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
	}

    /**
   	 * 만족도평가가 이루어 지지 않은 민원목록을 조회한다.
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return void
   	 * @throws NexaServiceException
   	 */
       @SuppressWarnings({ "rawtypes", "unchecked" })
   	public void selectCvplList( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {
   		
   		DataSetMap inDsMap = (DataSetMap)inDataset.get("input02");
   		Map inMap = null;
   		
   		if (inDsMap != null)
   			inMap = inDsMap.get(0);
   		
   		List <Map> records;

   		if (inMap != null) {
   			records = (List<Map>)baseDao.list("CUS010104DAO.selectCvplList", inMap);
   		} else {
   			records = (List<Map>)baseDao.list("CUS010104DAO.selectCvplList", inVar);
   		}
   		
   		DataSetMap outDsMap = new DataSetMap();
   		outDsMap.setRowMaps(records);
   		
   		outDataset.put("output02", outDsMap);
   		
   	}
       
	/**
	 * SMS 발송내용을 등록한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int chrctrCnC(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input03");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
				baseDao.insert("CUS010104DAO.chrctrCnC", map);
		}
		return iRow;
	}
}
