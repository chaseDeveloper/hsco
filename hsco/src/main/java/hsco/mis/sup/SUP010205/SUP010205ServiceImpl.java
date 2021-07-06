package hsco.mis.sup.SUP010205;

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
 * @Class Name   	: SUP010205Service.java
 * @Description  	: 경영평가목표비교 관리하는 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 11. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 04.	이수지		최초생성
 * </pre>  
 */
@Service("SUP010205Service")
public class SUP010205ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/**
	 * 경영평가목표비교 목록
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
        outDsMap.setRowMaps((List<Map>) baseDao.list("SUP010205DAO.mngmtEvlStdrList", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 경영평가목표비교 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	
	public int mngmtEvlStdrU( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	int iRow = 0;
    	
    	DataSetMap input1 = inDataset.get("input1");	// 경영평가목표비교
		
		
		// 평점표 저장(등록, 수정)
		for(Map map : input1.getRowMaps()) {
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED:
					iRow += baseDao.update("SUP010205DAO.mngmtEvlStdrU", map);
					break;
				default:
					break;
			}
		}
		
		return iRow;
    }
}