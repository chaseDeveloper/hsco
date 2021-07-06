package hsco.pms.rnt.prm.RNT02040206;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   		: RNT02040206ServiceImpl.java
 * @Description  		: 과오납내역처리
 * @author       		: 변승우
 * @since        		: 2015. 12. 1.
 * @version      		: 1.0
 * @see          		: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 1.					정윤원				최초생성
 * </pre>  
 */


@Service("RNT02040206Service")
public class RNT02040206ServiceImpl extends BaseService{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/**
	 * 매입임대 과오납내역처리
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPuchasOverRpayList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02040206DAO.selectPuchasOverRpayList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);	
	}


	/**
	 *  과오반환내역 (지급완료처리, 지급보류처리) Update/Insert
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void sprntPuchasRecDescMissIu( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map inMap = list.get(0);
		
		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(inMap);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		}
		
		baseDao.insert("RNT02040206DAO.SPRNT_PUCHAS_REC_DESC_MISS_IU", inMap);
	}
}
