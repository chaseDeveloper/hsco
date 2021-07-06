package hsco.pms.frm.FRM02040300;

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
 * @Class Name   	: FRM02040300ServiceImpl.java
 * @Description  	: 조정분개
 * @author       	: 김지훈
 * @since        	: 2016. 02. 19.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 02. 18.					김지훈			최초생성
 * </pre>  
 */
@Service("FRM02040300Service")
public class FRM02040300ServiceImpl extends BaseService{
	
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
	public void selectStacntList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("FRM02040300DAO.selectStacntList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	

/**
 * 결산처리
 * @param tranInfo
 * @param inVar
 * @param inDataset
 * @param outVar
 * @param outDataset
 * @throws NexaServiceException
 */ 
@SuppressWarnings({ "rawtypes" })

public void stacntProc(DataSetMap tranInfo, Map<String, Object> inVar,
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
		baseDao.update("FRM02040300DAO.StacntProc", inMap);
			
			// 현금흐름표
	    baseDao.update("FRM02040300DAO.StacntCashFlowProc", inMap);
 	 
       }

}
