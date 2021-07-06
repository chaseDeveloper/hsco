package hsco.mis.sup.SUP010301;

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
 * @Class Name   	: SUP010301ServiceImpl.java
 * @Description  	: 개선과제등록관리 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 10. 29.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 29.	이수지		최초생성
 * </pre>  
 */

@Service("SUP010301Service")
public class SUP010301ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 대분류지표 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })

	public void mngmtEvlStdrMaster(DataSetMap tranInfo,
			Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {
		
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("SUP010301DAO.mngmtEvlStdrMaster", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 개선과제 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })

	public void mngmtEvlImprvmTaskList(DataSetMap tranInfo,
			Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {
		
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("SUP010301DAO.mngmtEvlImprvmTaskList", inMap));
        outDataset.put("output1", outDsMap);
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps((List<Map>) baseDao.list("SUP010301DAO.mngmtEvlImprvmTaskMaList", inMap));
        outDataset.put("output2", outDsMap2);
	}
	
	
	/**
	 * SN중복 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void snCheck(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("SUP010301DAO.snCheck", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 개선과제등록 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int mngmtEvlImprvmTaskCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		DataSetMap list2 = (DataSetMap) inDataset.get("input2"); // 관리부서 저장
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SUP010301DAO.mngmtEvlImprvmTaskMaD", map);
					iRow += baseDao.delete("SUP010301DAO.mngmtEvlImprvmTaskD", map);
					break;
			}
		}
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("SUP010301DAO.mngmtEvlImprvmTaskC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SUP010301DAO.mngmtEvlImprvmTaskU", map);
					break;
			}
		}
		
		listSize = (list2 == null) ? 0 : list2.size();
	
		for (int x = 0; x < listSize; x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("SUP010301DAO.mngmtEvlImprvmTaskMaSelectD", map);
					break;
			}
		}
		
		for (int x = 0; x < listSize; x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("SUP010301DAO.mngmtEvlImprvmTaskMaC", map);
					break;
			}
		}
		
		return iRow;
	}

	/**
	 * 전년도 복사
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void mngmtEvlImprvmTaskCOPY( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		
		if(listSize>0) {
			Map map = list.get(0);
			
			baseDao.insert("SUP010301DAO.mngmtEvlImprvmTaskCOPY", map);
		}
	}
}