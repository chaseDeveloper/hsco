package hsco.pms.frm.FRM02040400;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: FRM02040400ServiceImpl.java
 * @Description  	: 결산자료이월처리
 * @author       	: 김지훈
 * @since        	: 2016. 02. 22.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 02. 22.					김지훈			최초생성
 * </pre>  
 */
@Service("FRM02040400Service")
public class FRM02040400ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 결산내역조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCyfdList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("FRM02040400DAO.selectCyfdList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	

/**
 * 결산자료이월처리
 * @param tranInfo
 * @param inVar
 * @param inDataset
 * @param outVar
 * @param outDataset
 * @throws NexaServiceException
 */ 
@SuppressWarnings({ "rawtypes" })

public void cyfdProc(DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) {
	    Map inMap = null;
	    DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
	     if (inDsMap != null) {
	            inMap = inDsMap.get(0);
	      }
	     
	    System.out.println("=====================================================");
	    System.out.println(inMap);
	    System.out.println("=====================================================");
	    
	        // 결산처리
		baseDao.update("FRM02040400DAO.cyfdProc", inMap);
			
 	 
       }


/**
 * 결산이월자료 수정
 * @param tranInfo
 * @param inVar
 * @param inDataset
 * @param outVar
 * @param outDataset
 * @throws NexaServiceException
 */ 
@SuppressWarnings({ "rawtypes" })

public void saveCyfdList(DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) {
	
	DataSetMap list1 = (DataSetMap) inDataset.get("input1");
	
	for (int x = 0; x < list1.size(); x++) {
		Map map = list1.get(x);
		
		    
		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(map);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		} 
					
		int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
		
	    if(rowType == DataSet.ROW_TYPE_UPDATED ){
			baseDao.update("FRM02040400DAO.updateCyfdList", map);
		}
			
	  }
	
   }
	
    

}
