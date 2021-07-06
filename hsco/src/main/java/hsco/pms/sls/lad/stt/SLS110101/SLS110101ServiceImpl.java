package hsco.pms.sls.lad.stt.SLS110101;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS110101ServiceImpl.java
 * @Description  	: 토지공급 관리대장 조회를 위한 Service
 * @author       	: 이인성
 * @since        	: 2015. 6.11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        	작성자                	내용
 * ------------------------------------------------------------------
 *  2015. 6.11.		이인성			최초생성
 *  2015.09.30		이상준			Rework
 * </pre>  
 */

@Service("SLS110101Service")
public class SLS110101ServiceImpl extends BaseService implements SLS110101Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
		
    /**
     * 토지 공급내역 목록 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void selectLadSuplyDtlsList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> resList = null;
		resList = (List<Map>)baseDao.list("SLS110101DAO.selectLadSuplyDtlsList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resList);
		
		outDataset.put("suplyDtlsList", outDsMap);
	}
    
    /**
     * 현재계약자내역 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void selectNowCntrctrDtlsList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> resList = null;
		resList = (List<Map>)baseDao.list("SLS110101DAO.selectNowCntrctrDtlsList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resList);
		
		outDataset.put("cntrctrDtlsList", outDsMap);
	}
    
    /**
     * 공급받는자 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void selectSuplyRcivePersonList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> resList = null;
		resList = (List<Map>)baseDao.list("SLS110101DAO.selectSuplyRcivePersonList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resList);
		
		outDataset.put("rcivePersonList", outDsMap);
	}
    
    /**
     * 대금수납현황 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void selectPricRcivSttusList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> resList = null;
		resList = (List<Map>)baseDao.list("SLS110101DAO.selectPricRcivSttusList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resList);
		
		outDataset.put("pricRcivSttusList", outDsMap);
	}
    
    /**
     * 현재계약자상세(공급받는자,대금수납현황) 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void selectNowCntrctrDetailList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		// 공급받는자 목록
		List<Map> rcivPersonList = (List<Map>)baseDao.list("SLS110101DAO.selectSuplyRcivePersonList", inMap);
		DataSetMap outRcivPersonListMap = new DataSetMap();
		outRcivPersonListMap.setRowMaps(rcivPersonList);
		
		// 대금수납현황 목록
		List<Map> pricRcivList = (List<Map>)baseDao.list("SLS110101DAO.selectPricRcivSttusList", inMap);
		DataSetMap outPricRcivListMap = new DataSetMap();
		outPricRcivListMap.setRowMaps(pricRcivList);
		
		outDataset.put("rcivePersonList", outRcivPersonListMap);
		outDataset.put("pricRcivSttusList", outPricRcivListMap);
	}
    
    /**
     * 토지공급관리대장 레포트 내용 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void selectLadSuplyDtlsReportList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		String reqReportTy = (String)inMap.get("REPORT_TY");
		
		// 토지의 표시
		Map suplyDtlsInfoMap =  (Map)baseDao.select("SLS110101DAO.selectLadSuplyDtlsInfo", inMap);
		DataSetMap outSuplyDtlsInfotMap = new DataSetMap();
		outSuplyDtlsInfotMap.add(suplyDtlsInfoMap);
		/*
		if(suplyDtlsInfoMap != null){
			String resCntrctrNo = (String)suplyDtlsInfoMap.get("CNTRCTR_NO");	// 계약자번호
			inMap.put("CNTRCTR_NO", resCntrctrNo);
		}
    	*/
		
		outDataset.put("rptSuplyDtlsInfo", outSuplyDtlsInfotMap);
		
		if("R1".equals(reqReportTy))
		{
			// 공급받는자 목록
			List<Map> rcivPersonList = (List<Map>)baseDao.list("SLS110101DAO.selectSuplyRcivePersonList", inMap);
			DataSetMap outRcivPersonListMap = new DataSetMap();
			outRcivPersonListMap.setRowMaps(rcivPersonList);
			outDataset.put("rptRcivePersonList", outRcivPersonListMap);
		}
		
		// 대금수납현황 목록
		List<Map> pricRcivList = (List<Map>)baseDao.list("SLS110101DAO.selectPricRcivSttusList", inMap);
		DataSetMap outPricRcivListMap = new DataSetMap();
		outPricRcivListMap.setRowMaps(pricRcivList);
		outDataset.put("rptPricRcivSttusList", outPricRcivListMap);
	}
}
