package hsco.mis.hrm.HRM060126;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM060126ServiceImpl.java
 * @Description  	: 
 * @author       	: 정 민
 * @since        	: 2017. 06. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017. 06. 14.   정 민		최초생성
 * </pre>  
 */

@Service("HRM060126Service")
public class HRM060126ServiceImpl extends BaseService implements HRM060126Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** 최초 조회 (검색조건에 해당하는 사원의 가장 마지막 근무평정 기간을 초기 검색조건으로 설정) */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSearchList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM060126DAO.selectSearchList", inMap));
    	outDataset.put("output1", outDsMap1);
	}
	
    /** 제외 대상자 목록 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEmpChk(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
    	// 사원체크
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM060126DAO.selectEmpChk", inMap));
    	outDataset.put("output1", outDsMap1);
	}
	
    /** 사원정보, 업무추진실적 세부내역 목록 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectJobPrtnAcmsltList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

    	Map<String, Object> commCodeMap = new HashMap<String, Object>();
    	List<Map> acmsltSeList = new ArrayList<Map>();
    	Map<String, Object> acmsltSeMap = new HashMap<String, Object>();

    	// 실적구분
		commCodeMap.put("GRP_CODE", "HRM050");
		acmsltSeList = (List<Map>) baseDao.list("cmmCodeDAO.cmmCodeList", commCodeMap, false);
		DataSetMap outDsMap1 = new DataSetMap();
    	outDsMap1.setRowMaps(acmsltSeList);
    	outDataset.put("output1", outDsMap1);
    	
    	// 실적기간 조회
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM060126DAO.selectAcmsltPd", inMap));
		outDataset.put("output2", outDsMap2);
    	
    	if(inMap.get("EMPNO") != null) {
    		
    		// 사원정보
    		DataSetMap outDsMap3 = new DataSetMap();
    		outDsMap3.setRowMaps((List<Map>) baseDao.list("HRM060126DAO.selectEmpInfo", inMap));
    		outDataset.put("output3", outDsMap3);
    		
			// 업무추진실적 세부내역
			for(int i=0; i<5; i++) {
				DataSetMap outDsMap = new DataSetMap();
				acmsltSeMap = acmsltSeList.get(i);
				inMap.put("ACMSLT_SE", acmsltSeMap.get("CODE"));
				outDsMap.setRowMaps((List<Map>) baseDao.list("HRM060126DAO.selectJobPrtnAcmsltList", inMap));
				outDataset.put("output"+(i+4),outDsMap);
			}
    	}

	}
    
    /** 업무추진실적 세부내역 목록 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    public void saveJobPrtnAcmsltList(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	
    	for(int i=0; i<5; i++) {
    		
        	DataSetMap list = (DataSetMap) inDataset.get("input"+(i+1));
        	
            for (int x = 0; x < list.size(); x++) {
                Map map = list.get(x);
                int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
                switch (rowType) {
                case DataSet.ROW_TYPE_INSERTED:
                    baseDao.insert("HRM060126DAO.jobPrtnAcmsltC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED:
                    baseDao.update("HRM060126DAO.jobPrtnAcmsltU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED:
                    baseDao.delete("HRM060126DAO.jobPrtnAcmsltD", map);
                    break;
                }
            }
    	}
    	
    }
	
}