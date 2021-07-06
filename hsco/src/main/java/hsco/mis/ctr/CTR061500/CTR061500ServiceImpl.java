package hsco.mis.ctr.CTR061500;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CTR061500ServiceImpl.java
 * @Description  	: 보증현황
 * @author       	: 김형태
 * @since        	: 2017. 08. 11.
 * @version      	: 1.0
 * @see          	:
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 08. 11.                  김형태              최초생성
 * </pre>
 */
@Service("CTR061500Service")
public class CTR061500ServiceImpl extends BaseService implements CTR061500Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** 보증현황 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAssrncSttus(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
		if (inDsMap1 != null) {
			inMap = inDsMap1.get(0);
		}
		
		// 계약보증
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("CTR061500DAO.selectCntrctAssrncDtls", inMap));
		outDataset.put("output1", outDsMap1);
		
		// 하자보증
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("CTR061500DAO.selectFlawAssrncDtls", inMap));
		outDataset.put("output2", outDsMap2);
		
		// 업체별연대보증
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps((List<Map>) baseDao.list("CTR061500DAO.selectEntrpsAcctoSldrtyAssr", inMap));
		outDataset.put("output3", outDsMap3);
	}

}