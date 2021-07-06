package hsco.pms.rnt.prm.RNT02031200;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT02031200Controller.java
 * @Description  	: 소유물건조회
 * @author       	: 송호원
 * @since        	: 2016. 07. 08.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 07. 08.				송호원				최초생성
 * </pre>  
 */
@Service("RNT02031200Service")
public class RNT02031200ServiceImpl extends BaseService{

	/**
	 * 소유물건조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentPosesnThingPopList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		String get_gubun = (String)inMap.get("gubun");
		List <Map> records = null;

		if ("1".equals(get_gubun)) {
			records = (List<Map>)baseDao.list("RNT02031200DAO.rentPosesnThingPopList", inMap);		// 계약자 조회
		}
		else if ("2".equals(get_gubun)) {
			records = (List<Map>)baseDao.list("RNT02031200DAO.rentPosesnThingPopList", inMap);		// 해약자 조회
		}
		else if ("3".equals(get_gubun)) {
			records = (List<Map>)baseDao.list("RNT02031200DAO.rentPosesnThingPopList2", inMap);		// 대기자 조회
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
}
