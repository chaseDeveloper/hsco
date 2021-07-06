package hsco.mis.hrm.HRM070107;

import java.util.HashMap;
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
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HRM070107ServiceImpl.java
 * @Description     : 유연근무신청내역목록을 관리하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 11. 19.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 19.      김병진              최초생성
 * </pre>  
 */
@Service("HRM070107Service")
public class HRM070107ServiceImpl extends BaseService implements HRM070107Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;    
	
	/**
	 * 유연근무신청내역 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFlxwkList( DataSetMap tranInfo, Map<String, Object> inVar,
	        Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	        Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    
	    Map inMap = null;
	    DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");
	    if (inDsMap != null) {
	        inMap = inDsMap.get(0);
	    }
	    DataSetMap outDsMap = new DataSetMap();
	    outDsMap.setRowMaps((List<Map>) baseDao.list("HRM070107DAO.selectFlxwkList", inMap));
	    outDataset.put("output01", outDsMap);
	}
	
	/**
	 * 유연근무 수정, 삭제, 등록 처리
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes"})
	public int flxwkCUD(DataSetMap tranInfo, Map<String, Object> inVar,
	        Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	        Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    
	    int iRow = 0;
	    DataSetMap list = (DataSetMap) inDataset.get("input01");
	    int listSize = (list == null) ? 0 : list.size();
	    
	    // 중복 데이터 방지를 위하여 삭제 후 등록, 수정을 진행
	    for (int x = 0; x < listSize; x++) {
	        Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
	
			switch(rowType) {
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("HRM070107DAO.flxwkListD", map);
					break;
			}	
	    }
	    
	    for (int x = 0; x < listSize; x++) {
	        Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			int existAt = 0;
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					existAt = (int)baseDao.select("HRM070107DAO.chkDate", map);
	                if(existAt == 0) {
	                	baseDao.insert("HRM070107DAO.flxwkListC", map);
	                }
	                else {
	                	String errMsg = (String) map.get("EMPNM") + "님의 기간이";
	                    throw new NexaServiceException("info.항목.중복.재입력.요청", errMsg);
	                }
	                break;
				case DataSet.ROW_TYPE_UPDATED :
					existAt = (int)baseDao.select("HRM070107DAO.chkDate", map);
	                if(existAt == 0) {
	                	iRow += baseDao.update("HRM070107DAO.flxwkListU", map);
	                }
	                else {
	                    String errMsg = (String) map.get("EMPNM") + "님의 기간이";
	                    throw new NexaServiceException("info.항목.중복.재입력.요청", errMsg);
	                }
					break;
			}	
		}
		return iRow;
	}
	
	@SuppressWarnings({ "rawtypes" })
	public void updateSanctnNo(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		baseDao.update("HRM070107DAO.updateSanctnNo", inMap);
	}
	
}
