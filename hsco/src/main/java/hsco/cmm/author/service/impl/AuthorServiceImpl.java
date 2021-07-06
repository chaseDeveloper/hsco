package hsco.cmm.author.service.impl;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;




//import org.hsqldb.lib.HashMap;
import org.springframework.stereotype.Service;

import hsco.cmm.author.service.AuthorService;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Service("AuthorService")
public class AuthorServiceImpl extends BaseService implements AuthorService {
	
	protected Logger log = LoggerFactory.getLogger(AuthorServiceImpl.class);
	

    /**
     * 사용자 오퍼레이션에 대해 차단 여부
     * @param paramMap (REQUEST_CLASS, REQUEST_METHOD, S_USER_ID)
     * @return
     * @throws NexaServiceException
     */    
	public boolean isGrantUser( Map paramMap) throws NexaServiceException {
    	
 
		Integer size = (Integer)baseDao.select("Author.isGrantUser", paramMap, false);
		return ( size.intValue() > 0 );
	}
	

	/**
	 * 차단된 버튼 목록(화면에 적용)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void getAuthBtnList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		if(log.isInfoEnabled())
			log.info("getAuthBtnList started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		DataSetMap inDsMap2 = (DataSetMap)inDataset.get("input2");
		DataSetMap inDsMap3 = (DataSetMap)inDataset.get("input3");
		
		Map inMap = null;
		Map inMap2 = null;
		Map inMap3 = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0); 
		if (inDsMap2 != null)
			inMap2 = inDsMap2.get(0);
		if (inDsMap3 != null)
			inMap3 = inDsMap3.get(0);
		
		 List<Map> records = (List)baseDao.list("Author.getListBtn", inMap, false);
		 List<Map> records2 = (List)baseDao.list("Author.getIndvdlPage", inMap2, false);
		 List<Map> records3 = (List)baseDao.list("Author.isGrantUser1", inMap3, false);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps(records3);
		
		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
		
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION: 개인정보 화면 여부를 검사
	 * @param paramMap
	 * @return
	 * @throws NexaServiceException
	 * 2015. 9. 17.
	 * </pre>
	 */
	public List getIndvdlPage( Map paramMap) throws NexaServiceException {
    	
		
		List list = baseDao.list("Author.getIndvdlPage", paramMap, false);
		
		return list;
	}
	
	
	

}
