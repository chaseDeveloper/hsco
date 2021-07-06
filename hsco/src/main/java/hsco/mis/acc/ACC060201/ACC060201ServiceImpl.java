package hsco.mis.acc.ACC060201;

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
 * @Class Name   	: ACC060201Service.java
 * @Description  	: 배부항목를 관리하는 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 11. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 04.	이수지		최초생성
 * </pre>  
 */
@Service("ACC060201Service")
public class ACC060201ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC060201ServiceImpl.class);
	
	
	/**
	 * 배부항목 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void seAccnutDlryStdrIemList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
		if(log.isInfoEnabled()) log.info("seAccnutDlryStdrIemList Started!");
		
		Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC060201DAO.seAccnutDlryStdrIemList", inMap));
        outDataset.put("output1", outDsMap);
	}
	

	/**
	 * 배부항목 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int seAccnutDlryStdrIemCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("ACC060201DAO.seAccnutDlryStdrIemC", map);
					break;	
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("ACC060201DAO.seAccnutDlryStdrIemU", map);
					break;			
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("ACC060201DAO.seAccnutDlryStdrIemD", map);
					break;
			    default:
			    	break;
			}	
		}
		return iRow;
		
	}
}