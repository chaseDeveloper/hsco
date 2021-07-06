package hsco.hpm.ctm.HPM060106;

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
 * @Class Name   	: HPM060106Controller.java
 * @Description  	: 경기타운일자관리
 * @author       	: 정 민
 * @since        	: 2017. 09. 10.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2017. 09. 10.					정 민			최초생성
 * </pre>  
 */

@Service("HPM060106Service")
public class HPM060106ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(HPM060106ServiceImpl.class);
	
	
    /**
	 * 경기타운일자관리 목록 조회 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHscDeManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM060106DAO.selectHscDeManageList", inMap));
		
		outDataset.put("output1", outDsMap);		
	}
    
    
    /**
	 * 경기타운일자관리 목록 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public void saveHscDeManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();	
		
		for (int x = 0; x < listSize; x++) {				
			Map map = list.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HPM060106DAO.hscDeManageC", map);	
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HPM060106DAO.hscDeManageU", map);		
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HPM060106DAO.hscDeManageD", map);
					break;	
			}				
		}				
	}
	

	
}