package hsco.mis.aud.AUD010102;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD010102ServiceImpl.java
 * @Description     : 내외부감사관리를 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 06. 11.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 06. 11.      김병진             최초생성
 * </pre>  
 */

@Service("AUD010102Service")
public class AUD010102ServiceImpl extends BaseService implements AUD010102Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;    
	
	/**
	 * 내외부 감사관리 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectInExAdList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("AUD010102DAO.selectInExAdList", inMap));
		outDataset.put("output01", outDsMap);
	}
	
	/**
	 * 감사계획 가져오기 팝업 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAPPOPList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input03");
		Map inMap = null;
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		List <Map> records;
		
		if (inMap != null) {
			records = (List<Map>)baseDao.list("AUD010102DAO.selectAPPOPList", inMap);
		} else {
			records = (List<Map>)baseDao.list("AUD010102DAO.selectAPPOPList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output03", outDsMap);
	}
	
	/*승인*/
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void updateConfmAt2( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		baseDao.update("AUD010102DAO.updateConfmAt2", inMap);
	}
	
	/**
	 * 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void InExAudListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap list = (DataSetMap) inDataset.get("input02");
		int listSize = (list == null) ? 0 : list.size();
		
		// 내외부감사
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			if(rowType == DataSet.ROW_TYPE_DELETED){
				baseDao.update("AUD010102DAO.AuditPlanListD", map);
			}
			if(rowType == DataSet.ROW_TYPE_INSERTED){
				baseDao.update("AUD010102DAO.AuditPlanListC", map);
			}
			if(rowType == DataSet.ROW_TYPE_UPDATED){
				baseDao.update("AUD010102DAO.InExAudListU", map);
			}
		}
		
		//감사대상부서
		list = (DataSetMap) inDataset.get("input2");
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_DELETED :
				baseDao.insert("AUD010102DAO.AuditTrgetDeptListD",map);
				break;
			}
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("AUD010102DAO.AuditTrgetDeptListC",map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.insert("AUD010102DAO.AuditTrgetDeptListU",map);
					break;
			}
		}
		
		// 감사인
		list = (DataSetMap) inDataset.get("input1");
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_DELETED :
				baseDao.insert("AUD010102DAO.AuditComposiListD",map);
				break;
			}
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("AUD010102DAO.AuditComposiListC",map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.insert("AUD010102DAO.AuditComposiListU",map);
					break;
			}
		}
	}
	
	/**
	 * 감사인 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAdtor( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("AUD010102DAO.selectAdtor", inMap));
		outDataset.put("output1", outDsMap);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("AUD010102DAO.selectAuditR", inMap));
		outDataset.put("output2", outDsMap2);
	}
	
	/**
	 * 감사인가져오기
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void getAdtor( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		baseDao.delete("AUD010102DAO.deleteAdtor", inMap);
		baseDao.insert("AUD010102DAO.getAdtor", inMap);
	}
	
	/**
	 * 감사부서가져오기
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void getTrgetDept( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		baseDao.delete("AUD010102DAO.deleteTrgetDept", inMap);
		baseDao.insert("AUD010102DAO.getTrgetDept", inMap);
	}
}
