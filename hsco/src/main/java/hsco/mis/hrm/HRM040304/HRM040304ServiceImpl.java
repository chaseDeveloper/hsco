package hsco.mis.hrm.HRM040304;

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
 * @Class Name   	: HRM040304ServiceImpl.java
 * @Description  	: 징계처분대장
 * @author       	: 김형태
 * @since        	: 2015. 09. 21.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 09.21.   김형태		최초생성
 * </pre>  
 */

@Service("HRM040304Service")
public class HRM040304ServiceImpl extends BaseService implements HRM040304Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    
    /** 징계코드 목록조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDscplStdrList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM040304DAO.selectDscplStdrList"));
		
		outDataset.put("output1", outDsMap);
	}
    
	/** 징계처분대장 목록조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDscplDspsList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM040304DAO.selectDscplDspsList", inMap));
		
		outDataset.put("output1", outDsMap);
	}
    
}