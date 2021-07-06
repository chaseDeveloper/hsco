package hsco.mis.sup.SUP020206;

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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SUP020206ServiceImpl.java
 * @Description  	: 제안별 심사등급 조회 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2015. 11. 03.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 03.				   양성모				최초생성
 * </pre>  
 */

@Service("sup020206Service")
public class SUP020206ServiceImpl extends BaseService implements SUP020206Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    /**
	 * 제안별 심사등급 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectPropseResultList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);		
		
		List <Map> records1;

		records1 = (List<Map>)baseDao.list("SUP020206DAO.selectPropseResultList", inMap);
		
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
	}
	
    /**
	 * 년도별 심사위원 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectJudgeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);		
		
		List <Map> records1;

		records1 = (List<Map>)baseDao.list("SUP020206DAO.selectJudgeList", inMap);
		
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
	}
	
    /**
	 * 제안별 심사위원 심사결과 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectJdgmnResult( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);	
		
		
        DataSetMap outDsMap = new DataSetMap();
        
        // 년도별 심사위원 조회
        List<Map> list = (List<Map>)baseDao.list("SUP020206DAO.selectJudgeList", inMap);
        inMap.put("list", list);
        
        // 제안별 심사위원 심사결과 조회
        outDsMap.setRowMaps((List<Map>)baseDao.list("SUP020206DAO.selectJdgmnResult", inMap));
        outDataset.put("output1", outDsMap);		
	}
	
	/**
	 * 전자결재번호 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */	
	@SuppressWarnings({ "rawtypes" })
	
	public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 					
	
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		
		Map map = list.get(0);
		
		// 전자결재번호 조회
		String sanctnNO= (String) baseDao.select("SUP020206DAO.selectSanctnNO", map);
		map.put("SANCTN_NO", sanctnNO);
		
		int listSize = (list == null) ? 0 : list.size();
		
		for(int i=0; i < listSize; i++){
			Map map2 = list2.get(i);
			map2.put("SANCTN_NO", sanctnNO);
			
			// 전자결재번호 업데이트
			baseDao.update("SUP020206DAO.approveU", map2);
		}
		
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
        
	}    	
	
}
