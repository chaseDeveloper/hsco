package hsco.mis.aud.AUD040202;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * &#64;Project Name    : 화성도시공사 차세대정보시스템
 * &#64;Class Name      : AUD040202ServiceImpl.java
 * &#64;Description     : 
 * &#64;author          : 정 민
 * &#64;since           : 2018. 01. 26.
 * &#64;version         : 1.0
 * &#64;see             : 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2018. 01. 26      정 민              최초생성
 * </pre>
 */

@Service("AUD040202Service")
public class AUD040202ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 설문 목록 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("AUD040202DAO.select", inMap));
		outDataset.put("output1", outDsMap);
	
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("AUD040202DAO.selectAswper", inMap));
		outDataset.put("output2", outDsMap);
	}
	

	/**
	 * 설문 관리 저장
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes" })
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();	
		
		for (int x = 0; x < listSize; x++) {				
			Map map = list.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("AUD040202DAO.aswperCU", map);	
					break;
				case DataSet.ROW_TYPE_DELETED :
					break;	
			}				
		}
	
	}
}
