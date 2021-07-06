package hsco.mis.aud.AUD030102;

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
 * &#64;Project Name    : 화성도시공사 차세대정보시스템
 * &#64;Class Name      : AUD030102ServiceImpl.java
 * &#64;Description     : 온라인신고를 관리하는 서비스 구현체 클래스 
 * &#64;author          : 김병진
 * &#64;since           : 2015. 07. 06.
 * &#64;version         : 1.0
 * &#64;see             : 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 06.      김병진              최초생성
 * </pre>
 */

@Service("AUD030102Service")
public class AUD030102ServiceImpl extends BaseService implements AUD030102Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;

	/**
	 * 온라인 신고 관리 목록 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked", "unused" })
	public void selectOnCvplist(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		
		// 1. 화성도시공사 홈페이지 민원 정보 SELECT
		List homePageMinwonList = hscoHomePageDao.list("HomepageDAO.selectMinwonList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(homePageMinwonList);

		outDataset.put("output01", outDsMap);

	}
	
	/**
	 * 첨부파일 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked", "unused" })
	public void selectFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		
		// 1. 화성도시공사 홈페이지 민원 첨부파일 정보 SELECT
		List file = hscoHomePageDao.list("HomepageDAO.selectFile", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(file);

		outDataset.put("output01", outDsMap);

	}
}
