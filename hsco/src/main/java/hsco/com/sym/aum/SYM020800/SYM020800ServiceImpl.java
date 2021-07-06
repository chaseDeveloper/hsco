package hsco.com.sym.aum.SYM020800;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.Runner.LogEntry;
import hsco.cmm.Runner.LogFasade;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM020200ServiceImpl.java
 * @Description  	: 권한그룹 사용자 관리
 * @author       	: 정윤원
 * @since        	: 2015. 8. 28.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 28.					정윤원				최초생성
 * </pre>
 */
@Service("SYM020800Service")
public class SYM020800ServiceImpl extends BaseService implements SYM020800Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM020800ServiceImpl.class);
	//protected LogFasade logSvc = LogFasade.getInstance();
	
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    /**
	 * 부서목록
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getListDept(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	log.debug(" getListDept ----------------------------------------------------!");
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = inDsMap.get(0);

		
		List <Map> records = (List)baseDao.list("SYM020800DAO.getListDept", inMap);

		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);		
		outDataset.put("output1", outDsMap);
		
	}
	
    /**
	 * 권한그룹 목록
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getListGrp(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = inDsMap.get(0);
		
		List <Map> records = (List)baseDao.list("SYM020800DAO.getListGrp", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * 권한그룹별 사용자 목록
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */

    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getListGrpUser(DataSetMap tranInfo,
			Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = inDsMap.get(0);
		
		List <Map> records = (List)baseDao.list("SYM020800DAO.getListGrpUser", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
     * 권한그룹 대상자 리스트
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getListUser(DataSetMap tranInfo,
			Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = inDsMap.get(0);
		
		List <Map> records = (List)baseDao.list("SYM020800DAO.getListUser", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

    /**
	 * 권한그룹 저장, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
    
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public int SYM020800CUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);
			
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			Map logmap = new HashMap();
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("SYM020800DAO.SYM020800C", map);					
					
					logmap.put("USER_ID", map.get("USER_ID"));
					logmap.put("BFCHG_GRP_ID", null);
					logmap.put("AFTCH_GRP_ID", map.get("AUTH_GRP_ID"));
					
					baseDao.insert("SYM020800DAO.insertUserChg", logmap);					
					break;
					
				case DataSet.ROW_TYPE_UPDATED :					
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("SYM020800DAO.SYM020800D", map);
					
					logmap.put("USER_ID", map.get("USER_ID"));
					logmap.put("BFCHG_GRP_ID", map.get("AUTH_GRP_ID"));
					logmap.put("AFTCH_GRP_ID", null);					
					
					baseDao.insert("SYM020800DAO.insertUserChg", logmap);
					break;
					
				default:
			}
		}	// end of for (int x = 0; ...
		
		return iRow;
		
	}

}



