package hsco.com.sym.mnm.SYM040600;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM040600ServiceImpl.java
 * @Description  	: 화면별 버튼을 관리
 * @author       	: 정윤원
 * @since        	: 2015. 9. 1.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 1.					정윤원				최초생성
 * </pre>
 */

@Service("SYM040600Service")
public class SYM040600ServiceImpl extends BaseService implements SYM040600Service {
	
protected Logger log = LoggerFactory.getLogger(SYM040600ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    /**
	 * 메뉴정보 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getButtonList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled())
		    log.info("getButtonList called!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0); 
		
		 List<Map> records = (List)baseDao.list("SYM040600DAO.getButtonList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

    /**
	 * 메뉴정보를 저장, 수정, 삭제 한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int execCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
			int iRow = 0;
			
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			int listSize = (list==null) ? 0 : list.size();
			
			for (int x = 0; x < listSize; x++) {
					
				Map map = list.get(x);						
					
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();				
				
				switch(rowType) {
				
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("SYM040600DAO.SYM040600C", map);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						iRow += baseDao.update("SYM040600DAO.SYM040600U", map);
						if(map.get("USE_AT").equals("0")){ 
							baseDao.delete("SYM040600DAO.deleteButtonInfo", map); // 그룹별 버튼정보에 해당버튼 삭제
						}
						break;
					case DataSet.ROW_TYPE_DELETED :
						iRow += baseDao.delete("SYM040600DAO.SYM040600D", map);
						break;
					default :
						
				}
				
				
		} // end of for (int x = 0 ...
			
		return iRow;
			
	}
	
	

}
