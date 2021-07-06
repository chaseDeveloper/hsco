package hsco.mis.ach.ACH010402;

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
 * @Class Name   	: ACH010402ServiceImpl.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 9. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 02.	박병일		최초생성
 * </pre>  
 */
@Service("ACH010402Service")
public class ACH010402ServiceImpl extends BaseService implements ACH010402Service {
	
	protected Logger log = LoggerFactory.getLogger(ACH010402ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
  
    /**
	 * 데이터이관 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectListMst( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("selectListMst Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("ACH010402DAO.selectListMst", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    
    
    /**
	 * 마감차수 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectListDtl( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("ACH010402DAO.selectListDtl", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	}    
	
	
	/**
	 * 대상자료 초기화 및 이관등록한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int bsisDC(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;		  
		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		Map map = list.get(0);
		
		// 삭제 영역
		
		// 비계량지표 평가자별 평가등록
		// 비계량지표 평가자매핑관리
		// 비계량지표 평가자관리
		// 비계량지표 기준관리
		// 비계량지표 가중치, 목표치, 실적, 월별평가결과, 최종평가결과
		
		// 계량지표 월별 실적
		// 계량지표 월별목표치
		// 계량지표 가중치 / 합계실적치 / 결과및달성율
		
		// 청렴마일리지
		// 제안목표
		// 교육역량강화
		// 사회공헌이수관리
		// 직원전화친절도
		
		// 개인지표실적참조기준
		
		// 관점전략목표 가중치 및 조직별 지표 배정 정보
		
		// 성과지표
		
		// 집계상세내역관리
		// 집계목록관리
		baseDao.delete("ACH010402DAO.mainD", map);
		
		
		// 이관영역
		
		baseDao.insert("ACH010402DAO.kpiI", map);	// 성과지표
		baseDao.insert("ACH010402DAO.orgnztI", map);	// 평가대상조직 이관 등록
		baseDao.insert("ACH010402DAO.wghtvalI", map);	// 관점전략목표 가중치 및 조직별 지표 배정 정보
		baseDao.insert("ACH010402DAO.qyevalRefrnCnncI", map);	// 개인지표실적참조기준
		baseDao.insert("ACH010402DAO.qyevalResultI", map);		// 계량지표 가중치
		baseDao.insert("ACH010402DAO.qyevalDstbGoalI", map);	// 계량지표 월별목표치
		baseDao.insert("ACH010402DAO.qlevalResultI", map);	// 비계량지표 가중치, 목표치
		
		// 기존코드 주석 처리
		/*
		baseDao.delete("ACH010402DAO.qyevalDstbGoalD", map);	// 배정목표 삭제
		baseDao.delete("ACH010402DAO.wghtvalD", map); 			// 가중치 삭제
		baseDao.delete("ACH010402DAO.orgnztCnncD", map);		// 관점-전략-CSF 가중치 및 피평가조직_지표코드 맵핑정보  삭제
		baseDao.delete("ACH010402DAO.orgnztD", map); 			// 평가대상조직  삭제
		baseDao.delete("ACH010402DAO.kpiD", map); 				// 성과지표  삭제
		
		baseDao.insert("ACH010402DAO.kpiI", map);				// 성과지표 이관 등록
		baseDao.insert("ACH010402DAO.orgnztI", map);			// 평가대상조직 이관 등록
		baseDao.insert("ACH010402DAO.orgnztCnncI", map);		// 관점-전략-CSF 가중치 및 피평가조직_지표코드 맵핑정보  이관 등록		
		baseDao.insert("ACH010402DAO.wghtvalI", map);			// 가중치 이관 등록
		baseDao.insert("ACH010402DAO.qyevalDstbGoalI", map);	// 배정목표 이관 등록
		*/
		
		
		baseDao.update("ACH010402DAO.trnsferCU", map);			// 데이터이관 정보 수정/신규
		
		return iRow;
	}

}
