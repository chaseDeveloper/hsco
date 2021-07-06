package hsco.com.sym.cdm.SYM030500;

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
 * @Class Name   	: SYM030500ServiceImpl.java
 * @Description  	: 메시지관리
 * @author       	: 정윤원
 * @since        	: 2015. 8. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 25.					정윤원				최초생성
 * </pre>
 */

@Service("SYM030500Service")
public class SYM030500ServiceImpl extends BaseService implements
		SYM030500Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM030500ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
	
    
    
    
    @SuppressWarnings({ "unchecked", "rawtypes"})
	public void getType( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled())
		    log.info("getType called!");
//		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
//		Map inMap = null;
//		
//		if (inDsMap != null)
//			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SYM030500DAO.getType");
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
    /**
	 * 메시지 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked"})
	public void getList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SYM030500DAO.getList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

	
	/**
	 * 메시지 등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int execCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("SYM030500DAO.insertMsg", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SYM030500DAO.updateMsg", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SYM030500DAO.deleteMsg", map);
					break;
			    default:
			    	break;
			}	
			
		}
		
		return iRow;
		
	}

}
