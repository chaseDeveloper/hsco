package hsco.mis.acc.ACC050417;

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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC050417ServiceImpl.java
 * @Description  	: 장기임대주택명세서 서비스 구현체 클래스
 * @author       	: 이수지
 * @since        	: 2016. 01. 05.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 01. 05.			이수지				최초생성
 * </pre>  
 */
@Service("ACC050417Service")
public class ACC050417ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC050417ServiceImpl.class);
    
    
    /**
	 * 장기임대주택명세서
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void select( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("select Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ACC050417DAO.select", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		records = (List<Map>)baseDao.list("ACC050417DAO.callData", inMap);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records);
		outDataset.put("output2", outDsMap2);
		
	}
    
    /**
	 * 장기임대주택명세서 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int inorgRentHouseC( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		Map map2 = null;
		int listSize = (list == null) ? 0 : list.size();
		if(listSize > 0)
			map2 = list.get(0);
		if(map2 != null)
		    baseDao.delete("ACC050417DAO.inorgRentHouseCallD", map2);
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_DELETED:
					iRow += baseDao.delete("ACC050417DAO.inorgRentHouseD", map);
					break;
				default :
					iRow += baseDao.update("ACC050417DAO.inorgRentHouseC", map);
					break;
			}
		}
		
		return iRow;
		
	}
}
