package hsco.mis.acc.ACC040101;

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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC040101Service.java
 * @Description  	: 법인카드관리 Service 클래스 
 * @author       	: 이상명
 * @since        	: 2015. 07. 13.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 13.	이상명		최초생성
 * </pre>  
 */
@Service("acc040101Service")
public class ACC040101ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC040101ServiceImpl.class);
	
	/**
	 * 법인카드관리 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void cprCardManageList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		if(log.isInfoEnabled()) log.info("cprCardManageList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		DataSetMap outDsMap1 = new DataSetMap();
		
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
		}
		
		List <Map> records = (List<Map>)baseDao.list("ACC040101DAO.cprCardManageList", inMap);		
		outDsMap1.setRowMaps(records);
		outDataset.put("output1", outDsMap1);

	}

	/**
	 * 법인카드관리 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void cprCardManageCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap input = inDataset.get("input1");
		for(Map map : input.getRowMaps()) {
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("ACC040101DAO.cprCardManageC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("ACC040101DAO.cprCardManageU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("ACC040101DAO.cprCardManageD", map);
					break;
				default:
					break;
			}
		}
		
	}

	/**
	 * 법인카드 변경이력 목록 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void cprCardChangeHistList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		DataSetMap outDsMap1 = new DataSetMap();
		
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
		}
		
		List <Map> records = (List<Map>)baseDao.list("ACC040101DAO.cprCardChangeHistList", inMap);		
		outDsMap1.setRowMaps(records);
		outDataset.put("output1", outDsMap1);
		
	}

	/**
	 * 법인카드 콤보목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void cprCardComboList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		DataSetMap outDsMap1 = new DataSetMap();
		
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
		}

		
		List <Map> records = (List<Map>)baseDao.list("ACC040101DAO.cprCardComboList", inMap);		
		outDsMap1.setRowMaps(records);
		outDataset.put("output1", outDsMap1);
		
	}

}
