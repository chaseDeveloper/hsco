package hsco.com.sym.lgm.SYM050700;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM050700ServiceImpl.java
 * @Description  	: 개인정보다운이력을 관리하는 서비스 구현체 클래스
 * @author       	: 이우용
 * @since        	: 2020. 07. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2020. 7. 06.		이우용		최초생성
 * </pre>  
 */
@Service("SYM050700Service")
public class SYM050700ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(SYM050700ServiceImpl.class);
	
	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;
	
	/**
	 * 개인정보다운 이력관리
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDwlnHistList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
		{
			inMap = inDsMap.get(0);
		}
		List<Map> records;

		records = (List<Map>) baseDao.list("SYM050700DAO.selectDwlnHistList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);

	}
	
	
	
	
	
}
