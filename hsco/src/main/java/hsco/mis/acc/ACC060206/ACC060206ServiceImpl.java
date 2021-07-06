package hsco.mis.acc.ACC060206;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC060206Service.java
 * @Description  	: 구분회계결산처리 명세서를 조회하는 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 11. 30.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 30.	이수지		최초생성
 * </pre>  
 */
@Service("ACC060206Service")
public class ACC060206ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC060206ServiceImpl.class);
	
	
	/**
	 * 구분회계결산처리 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
		if(log.isInfoEnabled()) log.info("select Started!");
		
		Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC060206DAO.select", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 구분회계 결산처리
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void spaccStacntProcSe(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        // 구분회계 결산처리
		baseDao.update("ACC060206DAO.spaccStacntProcSe", inMap);
		baseDao.update("ACC060206DAO.spaccStacntProcSe01", inMap);
		// 구분회계 현금흐름표 생성
	// 2016.10.21 주석처리
		if(inMap.get("DLRY_YN") == null || inMap.get("DLRY_YN").equals("")){
			baseDao.update("ACC060206DAO.spaccStacntCashFlow", inMap);
		}
	}
	
	/**
	 * 구분회계결산 검증데이터 생성
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void spaccStacntProcSeMig(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        // 구분회계결산 검증데이터 생성
		baseDao.update("ACC060206DAO.spaccStacntProcSeMig", inMap);
		
	}
	
	/**
     * 조정구분회계전표생성
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes"})
	
	public void spaccSlipToSeSlipAi2( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	
    	Map inMap = null;
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        if (inDsMap != null) {
        	inMap = inDsMap.get(0);
        }
    	
    	//집계테이블에서 해당년월에 자료가 있는지 없는지 체크하여 없을시 메시지 표시.
        String cnt= (String) baseDao.select("ACC060206DAO.selectAccnutStacntSeCnt", inMap);
		if("0".equals(cnt)){
			throw new NexaServiceException("fail.정보등록.실패", "결산자료가 집계되지 않았습니다. 결산실행 또는 배부실행을 하 신후 재실행 하시기 바랍니다.");
		}
        
		if (inMap != null) {
			
			baseDao.update("ACC060206DAO.spaccSlipToSeSlipAi2", inMap);	// 조정구분회계전표생성
		}
		DataSetMap output1 = new DataSetMap();
		output1.add(inMap);
		outDataset.put("output1", output1);
		
		
    }
    
}