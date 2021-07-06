package hsco.mis.hrm.HRM080201;

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
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HRM080201Service.java
 * @Description     : 인사교육관리 서비스 클래스
 * @author          : 김형태
 * @since           : 2017. 05. 31.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017.05. 31.                    김형태              최초생성
 * </pre>  
 */

@Service("HRM080201Service")
public class HRM080201ServiceImpl extends BaseService implements HRM080201Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 수요조사 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDmandExaminList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080201DAO.selectDmandExaminList", inMap));
		outDataset.put("output1", outDsMap);
	}

	
	/**
	 * 수요조사 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void saveDmandExamin( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");	
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HRM080201DAO.insertDmandExamin", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HRM080201DAO.updateDmandExamin", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HRM080201DAO.deleteDmandExamin", map);
					break;
			}	
		}
	}

}
