package hsco.mis.sup.SUP010102;

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
 * @Class Name   	: SUP010102ServiceImpl.java
 * @Description  	: 성과급지급율관리 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 10. 27.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 27.	이수지		최초생성
 * </pre>  
 */

@Service("SUP010102Service")
public class SUP010102ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void mngntEvlRsltPymntRtList(DataSetMap tranInfo,
			Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {
		
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("SUP010102DAO.mngntEvlRsltPymntRtList", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 성과급지급율 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int mngntEvlRsltPymntRtCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("SUP010102DAO.mngntEvlRsltPymntRtC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SUP010102DAO.mngntEvlRsltPymntRtU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SUP010102DAO.mngntEvlRsltPymntRtD", map);
					break;
			
			}	
			
		}
		
		return iRow;
		
	}
	
	/**
	 * 성과율지급율 전년도 복사
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	
    public void mngntEvlRsltPymntRtCOPY(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        Map map = list.get(0);
    	
		baseDao.delete("SUP010102DAO.mngntEvlRsltPymntRtCOPYD", map);	//삭제
		baseDao.insert("SUP010102DAO.mngntEvlRsltPymntRtCOPYC", map);	//등록
    }
}
