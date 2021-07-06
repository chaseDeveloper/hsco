package hsco.mis.hrm.HRM070124;

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
 * @Class Name   	: HRM070124ServiceImpl.java
 * @Description  	: 출/퇴근현황(근태기)
 * @author       	: 정  민
 * @since        	: 2017. 05. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 05. 15.				정  민				최초생성
 */
@Service("HRM070124Service")
public class HRM070124ServiceImpl extends BaseService implements HRM070124Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    
    /**
	 * 출/퇴근현황(근태기)  조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDclzDtlsList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");    	
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		
		outDsMap.setRowMaps( (List<Map>)baseDao.list("HRM070124DAO.selectDclzDtlsList",  inMap));
		
		outDataset.put("output1", outDsMap);
		
	}    
    
	/**
	 * 근태기연결테스트
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDclzDtlsList2( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps( (List<Map>)bioStarDao.list("biostarDAO.selectDclzDtlsList", inMap));
		
		outDataset.put("output1", outDsMap);
		
	}
	
    
    /**
	 * 출/퇴근현황(근태기) 최신데이터로 업데이트
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    
    @SuppressWarnings({"unchecked" })
	public void dclzDtlsTrnsfer(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");    	
		
		Map<String, Object> inMap = null;
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		
		if((inMap.get("DEPT_CODE") != null && !"".equals(inMap.get("DEPT_CODE"))) || (inMap.get("EMPNO") != null && !"".equals(inMap.get("EMPNO")))) {
			// 근태기ID
			List<Map<String, Object>> dclzIdList = (List<Map<String, Object>>)baseDao.list("HRM070124DAO.selectDclzIdList",  inMap);

			// delete
			for(int i = 0; i < dclzIdList.size(); i++) {
				String dclzId = (String) dclzIdList.get(i).get("DCLZ_ID");
				inMap.put("DCLZ_ID", dclzId);
				baseDao.delete("HRM070124DAO.dclzDtlsD", inMap);
			}
			
			inMap.put("dclzIdList", dclzIdList);
			
		}else {
			baseDao.delete("HRM070124DAO.dclzDtlsD", inMap);
		}	
		

    	List<Map<String, Object>> dclzList = (List<Map<String, Object>>) bioStarDao.list("biostarDAO.selectDclzDtlsList", inMap);
    	
    	// 서버단 밸리데이션 체크
        if(dclzList.size() > 0) {
            baseDao.insert("HRM070124DAO.dclzDtlsC", dclzList);
        } else {
            String errMsg = "검색조건에 해당하는 근태기 내역이 없습니다.";
     	   errMsg += "\n(검색조건 변경 후, 다시 진행해주시기 바랍니다)";
     	   throw new NexaServiceException("info.처리불가", errMsg);
        }
    	

	}

}