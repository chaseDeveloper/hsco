package hsco.pms.rnt.prm.RNT02050800;

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
 * @Class Name   	: RNT02050800ServiceImpl.java
 * @Description  	: 수납현황 조회
 * @author       	: 변승우
 * @since        	: 2015. 12. 10.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 10.					변승우				최초생성
 * </pre>  
 */


@Service("RNT02050800Service")
public class RNT02050800ServiceImpl extends BaseService{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/**
	 * 매입임대 개별수납현황 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectIndvdlzRcivList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02050800DAO.selectIndvdlzRcivList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 매입임대 개월별현황 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMonthRcivList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02050800DAO.selectMonthRcivList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}	
}
