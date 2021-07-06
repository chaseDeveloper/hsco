package hsco.pms.rnt.prm.RNT02030800;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT02030800ServiceImpl.java
 * @Description  	: 공가현황
 * @author       	: 변승우
 * @since        	: 2015. 12. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 17.					변승우				최초생성
 * </pre>  
 */


@Service("RNT02030800Service")
public class RNT02030800ServiceImpl extends BaseService{
	/**
	 * 매입임대 공가현황 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void puchasHouseBildList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("RNT02030800DAO.puchasHouseBildList", inMap);		// 매입임대 공가현황
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 매입임대 공가CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"rawtypes"})
	public void puchasHouseBildCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		try {
			for (int x = 0; x < list.size(); x++) {
				Map map = list.get(x);
				ObjectUtil.setUserToMap(map);		// 세션정보 설정

				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

				if(rowType == DataSet.ROW_TYPE_UPDATED )
					baseDao.update("RNT02030300DAO.puchasHouseBildCUD", map);			// 매입임대 공가CUD
			}
		}
		catch( Exception e) {
			throw new NexaServiceException(e);
		}
	}
}
