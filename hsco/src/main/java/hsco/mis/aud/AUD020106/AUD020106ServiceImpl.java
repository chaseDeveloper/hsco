package hsco.mis.aud.AUD020106;

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
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD020106ServiceImpl.java
 * @Description     : 예산모니터링을 조회하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 07.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 07.      김병진              최초생성
 * </pre>  
 */
@Service("AUD020106Service")
public class AUD020106ServiceImpl extends BaseService implements AUD020106Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
     * 예산목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBudgetList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		int year = Integer.parseInt((String) inMap.get("YEAR"));
		DataSetMap outDsMap = new DataSetMap();

		if (year < 2018) { // 2018년 이전
			System.out.println("YEAR : "+year);
			System.out.println("YEAR : "+year);
			System.out.println("YEAR : "+year);
			System.out.println("YEAR : "+year);
			System.out.println("YEAR : "+year);
			outDsMap.setRowMaps((List<Map>) baseDao.list("AUD020106DAO.selectBudgetListOld", inMap));
		} else {
			System.out.println("YEAR : "+year);
			System.out.println("YEAR : "+year);
			System.out.println("YEAR : "+year);
			System.out.println("YEAR : "+year);
			System.out.println("YEAR : "+year);
			outDsMap.setRowMaps((List<Map>) baseDao.list("AUD020106DAO.selectBudgetList", inMap));
		}
		
		outDataset.put("output01", outDsMap);
	}
}
