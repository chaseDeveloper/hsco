package hsco.mis.acc.ACC020102;

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
 * @Class Name   	: ACC020102ServiceImpl.java
 * @Description  	: 금융기관을 관리하는 ServiceImpl 클래스 
 * @author       	: 이상명
 * @since        	: 2015. 07. 09.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 09.	이상명		최초생성
 * </pre>  
 */
@Service("acc020102Service")
public class ACC020102ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC020102ServiceImpl.class);
	

	/**
	 * 금융기관 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void fnncInsttCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		if(log.isInfoEnabled()) log.info("fnncInsttCodeList Started!");
		
		DataSetMap output = new DataSetMap();
		List<Map> records = (List<Map>)baseDao.list("ACC020102DAO.fnncInsttCodeList");		
		output.setRowMaps(records);
		outDataset.put("output1", output);
		
	}

	/**
	 * 금융기관지점 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void fnncInsttSpotCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap input = inDataset.get("input1");
		DataSetMap output = new DataSetMap();
		List<Map> records = (List<Map>)baseDao.list("ACC020102DAO.fnncInsttSpotCodeList", input.get(0));	
		output.setRowMaps(records);
		outDataset.put("output1", output);		
	}

	/**
	 * 금융기관, 금융기관지점 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void fnncInsttCodeCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap input = inDataset.get("input1");
		for(Map map : input.getRowMaps()) {
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("ACC020102DAO.fnncInsttCodeC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("ACC020102DAO.fnncInsttCodeU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("ACC020102DAO.fnncInsttCodeD", map);
					break;
				default:
					break;
			}
		}
		
		DataSetMap input2 = inDataset.get("input2");
		for(Map map : input2.getRowMaps()) {
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("ACC020102DAO.fnncInsttSpotCodeC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("ACC020102DAO.fnncInsttSpotCodeU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("ACC020102DAO.fnncInsttSpotCodeD", map);
					break;
				default:
					break;
			}
		}
		
	}
	
}
