package hsco.mis.hrm.HRM070503;

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
 * @Class Name   	: HRM070503ServiceImpl.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2017. 06. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 06. 07.	양성모			최초생성
 * </pre>  
 */

@Service("HRM070503Service")
public class HRM070503ServiceImpl extends BaseService implements HRM070503Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /** 현장체재비 지급기준 현황조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSptScstPymntStdrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1 = (List<Map>)baseDao.list("HRM070503DAO.selectSptScstPymntStdrList", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
		
	}
    
	/** 현장체재비 지급기준 현황 CUD */
	@SuppressWarnings({ "rawtypes" })
	public int saveSptScstPymntStdrCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HRM070503DAO.saveSptScstPymntStdrC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
                	iRow += baseDao.update("HRM070503DAO.saveSptScstPymntStdrU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("HRM070503DAO.saveSptScstPymntStdrD", map);
					break;
			}	
		}
		return iRow;
	
	}
}