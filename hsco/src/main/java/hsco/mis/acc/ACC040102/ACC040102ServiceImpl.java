package hsco.mis.acc.ACC040102;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC040102ServiceImpl.java
 * @Description  	: 청구내역대사관리 ServiceImpl 클래스 
 * @author       	: 이상명
 * @since        	: 2015. 07. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 16.	이상명		최초생성
 * </pre>  
 */
@Service("acc040102Service")
public class ACC040102ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC040102ServiceImpl.class);
	
	/**
	 * 청구내역대사관리 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void catsBillList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		if(log.isInfoEnabled()) log.info("catsBillList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		DataSetMap outDsMap1 = new DataSetMap();
		
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
		}
		
		List <Map> records = (List<Map>)baseDao.list("ACC040102DAO.catsBillList", inMap);		
		outDsMap1.setRowMaps(records);
		outDataset.put("output1", outDsMap1);

	}

}
