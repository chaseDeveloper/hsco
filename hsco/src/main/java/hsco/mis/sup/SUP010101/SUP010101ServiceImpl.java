package hsco.mis.sup.SUP010101;

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
 * @Class Name   	: SUP010101Service.java
 * @Description  	: 경영평가기준 관리하는 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 10. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 07.	이수지		최초생성
 * </pre>  
 */
@Service("SUP010101Service")
public class SUP010101ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/**
	 * 경영평가 평점표 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void mngmtEvlStdrList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("SUP010101DAO.mngmtEvlStdrList", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 세부평가 및 관리부서 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void mngmtEvlStdrDetailList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        // 세부평가 목록
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("SUP010101DAO.mngmtEvlStdrDetailList", inMap));
        outDataset.put("output1", outDsMap);
        
        // 관리부서 목록
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps((List<Map>) baseDao.list("SUP010101DAO.mngmtEvlManageDeptList", inMap));
        outDataset.put("output2", outDsMap2);
	}
	
	
	/**
	 * 경영평가기준 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	
	public int mngmtEvlStdrCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	int iRow = 0;
    	
    	DataSetMap input1 = inDataset.get("input1");	// 평점표
		DataSetMap input2 = inDataset.get("input2");	// 세부평가내용
		DataSetMap input3 = inDataset.get("input3");	// 관리부서
		
		
		// 평점표 저장(등록, 수정)
		for(Map map : input1.getRowMaps()) {
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("SUP010101DAO.mngmtEvlStdrC", map);
					baseDao.insert("SUP010101DAO.mngmtMngmtEvlReprtC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					iRow += baseDao.update("SUP010101DAO.mngmtEvlStdrU", map);
					break;
				default:
					break;
			}
		}
		
		// 세부평가내용 저장
		for(Map map : input2.getRowMaps()) {
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("SUP010101DAO.mngmtEvlStdrDetailC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("SUP010101DAO.mngmtEvlStdrDetailU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("SUP010101DAO.mngmtEvlStdrDetailD", map);
					break;
				default:
					break;
			}
		}
		
		// 관리부서 저장
		for(Map map : input3.getRowMaps()) {
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("SUP010101DAO.mngmtEvlManageDeptC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("SUP010101DAO.mngmtEvlManageDeptU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("SUP010101DAO.mngmtEvlManageDeptD", map);
					break;
				default:
					break;
			}
		}
		
		// 평점표 저장(삭제)
		for(Map map : input1.getRowMaps()) {
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_DELETED:
					
					baseDao.delete("SUP010101DAO.mngmtEvlImprvmTaskMaD", map);	// 개선과제관리부서삭제
					baseDao.delete("SUP010101DAO.mngmtEvlImprvmTaskD", map);	// 개선과제삭제
					
					baseDao.delete("SUP010101DAO.mngmtEvlManageDeptD01", map);	// 관리부서삭제
					baseDao.delete("SUP010101DAO.mngmtEvlStdrDetailD01", map);	// 세부평가내용삭제
					baseDao.delete("SUP010101DAO.mngmtEvlStdrD", map);			// 평가기준삭제
					
					String ixCode = (String) map.get("IX_CODE");
					
					if ("0".equals(ixCode)) {	// 최상위 지표일 경우 해당년도의 경영평가보고서까지 함께 삭제
						baseDao.delete("SUP010101DAO.mngmtMngmtEvlReprtD", map);        // 경영평가보고서 삭제
					}
					
					break;
				default:
					break;
			}
		}
		
		return iRow;
    }
	
	/**
	 * 전년도 경영평가기준 복사
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	
    public int mngmtEvlStdrCOPY(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
    	
		Map map = list.get(x);
			
		baseDao.delete("SUP010101DAO.mngmtEvlStdrDetailCOPYD", map);	//세부평가내용삭제
		baseDao.delete("SUP010101DAO.mngmtEvlManageDeptCOPYD", map);	//관리부서삭제
		baseDao.delete("SUP010101DAO.mngmtMngmtEvlReprtD", map);        //경영평가보고서 삭제
		baseDao.delete("SUP010101DAO.mngmtEvlStdrCOPYD", map);			//평점표삭제
		baseDao.delete("SUP010101DAO.mngmtEvlImprvmTaskMaCOPYD", map);	//개선과제관리부서삭제
		baseDao.delete("SUP010101DAO.mngmtEvlImprvmTaskCOPYD", map);	//개선과제삭제
		
		baseDao.insert("SUP010101DAO.mngmtEvlStdrCOPYC", map);			//평점표등록
		baseDao.insert("SUP010101DAO.mngmtMngmtEvlReprtC", map);        //경영평가보고서 등록
		baseDao.insert("SUP010101DAO.mngmtEvlStdrDetailCOPYC", map);	//세부평가내용등록
		baseDao.insert("SUP010101DAO.mngmtEvlManageDeptCOPYC", map);	//관리부서등록
		}
		
		return iRow;
    }
}