package hsco.pms.frm.FRM02010900;

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
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: FRM02010900ServiceImpl.java
 * @Description  	: 자산건전성이율표
 * @author       	: 김지훈
 * @since        	: 2016. 01. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 01. 20.					김지훈			최초생성
 * </pre>  
 */
@Service("FRM02010900Service")
public class FRM02010900ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 자산건전성이율표 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFrmAssetsSndIntrt( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("FRM02010900DAO.selectFrmAssetsSndIntrt", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	

		
	/**
	 * 자산건전성이율표 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes" })
	
	public void saveFrmAssetsSndIntrt(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}
			catch( Exception e) {
				throw new NexaServiceException(e); 
			} 
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("FRM02010900DAO.insertFrmAssetsSndIntrt", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("FRM02010900DAO.updateFrmAssetsSndIntrt", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("FRM02010900DAO.deleteFrmAssetsSndIntrt", map);
			}
		}
	} 

}
