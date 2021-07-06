package hsco.cmm.excel.service.impl;

import hsco.cmm.excel.service.IndvdlinfoDwldService;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.com.sym.not.SYM100300.SYM100300ServiceImpl;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: IndvdlinfoDwldServiceImpl.java
 * @Description  	: 개인정보다운로드내역 관리 ServiceImpl
 * @author       	: 권재만
 * @since        	: 2020. 7. 7.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2020. 7. 7.					권재만				최초생성(한국감정원 Project참조)
 * </pre>  
 */
@Service("indvdlinfoDwldService")
public class IndvdlinfoDwldServiceImpl extends BaseService implements IndvdlinfoDwldService{
	
	protected Logger log = LoggerFactory.getLogger(SYM100300ServiceImpl.class);

	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;
	
	/**
	 * 개인정보다운로드이력 저장
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void saveIndvdlinfoDwldHist(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
		Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		baseDao.insert("IndvdlinfoDwldDAO.insertIndvdlinfoDwldHist", inMap);

	}
}
