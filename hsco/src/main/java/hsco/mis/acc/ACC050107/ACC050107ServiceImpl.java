package hsco.mis.acc.ACC050107;

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
 * @Class Name   	: ACC050107ServiceImpl.java
 * @Description  	: 초기이월미수금관리하는 서비스 구현체 클래스
 * @author       	: 이근표
 * @since        	: 2016. 8. 19.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 8. 19.					이근표				최초생성
 * </pre>  
 */
@Service("ACC050107Service")
public class ACC050107ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC050107ServiceImpl.class);
    
    
    /**
	 * 초기이월미수금 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void accnutStacntBcncList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("accnutStacntBcncList Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("ACC050107DAO.accnutStacntBcncList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
     * 초기이월미수금 CUD
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes"})
	
	public int accnutStacntBcncCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	int iRow = 0;
    	
    	DataSetMap input1 = inDataset.get("input1");
    	
		for(Map map : input1.getRowMaps()) {
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("ACC050107DAO.accnutStacntBcncC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("ACC050107DAO.accnutStacntBcncU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("ACC050107DAO.accnutStacntBcncD", map);
					break;
				default:
					break;
			}
		}

		return iRow;
    }    
    

    /**
     * 거래처 팝업 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void viaacBcncInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records1 = (List<Map>)baseDao.list("ACC050107DAO.viaacBcncInfoList", inMap);
		
		DataSetMap output1 = new DataSetMap();
		output1.setRowMaps(records1);
		outDataset.put("output1", output1);
	}
}
