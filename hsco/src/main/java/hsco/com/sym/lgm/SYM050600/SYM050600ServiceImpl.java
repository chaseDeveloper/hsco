package hsco.com.sym.lgm.SYM050600;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM050600ServiceImpl.java
 * @Description  	: 개인정보수준진단
 * @author       	: 정민
 * @since        	: 2018. 8. 23.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2018. 8. 23.					정민				최초생성
 * </pre>
 */
@Service("SYM050600Service")
public class SYM050600ServiceImpl extends BaseService {
	
    /**
     * 
     * <pre>
     * @DESCRIPTION: 암호화된 주민등록번호 수 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     * 2015. 9. 18.
     * </pre>
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void select(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		Map inMap = null;

		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("SYM050600DAO.select", inMap));	// 암호화된 주민등록번호 수
		outDsMap2.setRowMaps((List<Map>) baseDao.list("SYM050600DAO.select2", inMap));	// 암호화된 주민등록번호 수(임직원)

		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
	}
 
}
