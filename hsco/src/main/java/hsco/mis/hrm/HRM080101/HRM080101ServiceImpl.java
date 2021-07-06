package hsco.mis.hrm.HRM080101;

import java.util.List;
import java.util.Map;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HRM080101Service.java
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

@Service("HRM080101Service")
public class HRM080101ServiceImpl extends BaseService implements HRM080101Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 수요조사교육구분 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDmandExaminEdcList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080101DAO.selectDmandExaminEdcList", inMap));
		outDataset.put("output1", outDsMap);
	}

	
	/**
	 * 수요조사교육구분 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void saveDmandExaminEdc( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");	
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HRM080101DAO.insertDmandExaminEdc", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HRM080101DAO.updateDmandExaminEdc", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HRM080101DAO.deleteDmandExaminEdc", map);
					break;
			}	
		}
	}

	/**
	 * 전년도 복사
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	 @SuppressWarnings({ "rawtypes" })
	 @Transactional
	public void copyData( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		// 모두 삭제
		baseDao.delete("HRM080101DAO.deleteDmandExaminEdcAll", inMap);
		
		// 전년도 데이터 복사
		baseDao.insert("HRM080101DAO.copyDataDmandExaminEdc", inMap);
		
	}
}
