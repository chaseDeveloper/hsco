package hsco.mis.hrm.HRM050101;

import java.util.ArrayList;
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
 * @Class Name   	: HRM050101ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 10. 05.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10.05.   김형태		최초생성
 * </pre>  
 */

@Service("HRM050101Service")
public class HRM050101ServiceImpl extends BaseService implements HRM050101Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /** 호봉획정현황 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmSrclsDmrcList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM050101DAO.tbhrmSrclsDmrcList", inMap));
		
		outDataset.put("output1", outDsMap);
	}
    
    /** 경력정보 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmDtlCareer(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	DataSetMap inDsMap2 = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
	    List<String> empno = new ArrayList<String>(inDsMap2.size());
	    for(int i = 0; i < inDsMap2.size(); i++){
	        empno.add(inDsMap2.get(i).get("EMPNO")+"");
	    }
	    inMap.put("EMPNO", empno);

		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM050101DAO.tbhrmACareer", inMap));
		outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM050101DAO.tbhrmBCareer", inMap));
		outDsMap3.setRowMaps((List<Map>) baseDao.list("HRM050101DAO.tbhrmCCareer", inMap));
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
	}
}