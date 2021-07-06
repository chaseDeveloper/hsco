package hsco.cmm.batch.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.batch.service.BatchResultService;
import hsco.cmm.batch.vo.BatchResult;
import hsco.cmm.service.JobService;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: BatchResultServiceImpl.java
 * @Description  	: 배치작업결과관리 서비스 클래스 
 * @author       	: 정윤원
 * @since        	: 2016. 3. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016.3.17.	       정윤원		   최초생성
 * </pre>  
 */
@Service("batchResultService")
public class BatchResultServiceImpl extends JobService implements BatchResultService {
	/** Log 생성*/
	private static final Logger LOGGER = LoggerFactory.getLogger(BatchResultServiceImpl.class);
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    
    /**
	 * 배치결과ID를 조회한다 
	 * @return 배치결과ID
	 *
	 * @param searchVO    조회할 정보가 담긴 VO
	 * @exception Exception Exception
	 */
	public String selectBatchResultId() throws Exception {
		if(LOGGER.isInfoEnabled()){
    		LOGGER.info("selectBatchResultId started!");
    	}
		return (String) batchDao.select("BatchResultDao.selectBatchResultId");
	}
    
	/**
	 * 배치결과을 삭제한다.
	 *
	 * @param batchResult    삭제할 배치결과 VO
	 * @exception Exception Exception
	 */
	public void deleteBatchResult(BatchResult batchResult) throws Exception {
		batchDao.delete("BatchResultDao.deleteBatchResult", batchResult);
	}

	/**
	 * 배치결과을 등록한다.
	 *
	 * @param batchResult 저장할 배치결과 VO
	 * @exception Exception Exception
	 */
	public void insertBatchResult(BatchResult batchResult) throws Exception {
		batchDao.insert("BatchResultDao.insertBatchResult", batchResult);
	}

	/**
	 * 배치결과정보를 상세조회 한다.
	 * @return 배치결과정보
	 *
	 * @param batchResult    조회할 KEY가 있는 배치결과 VO
	 * @exception Exception Exception
	 */
	public BatchResult selectBatchResult(BatchResult batchResult) throws Exception {
		return (BatchResult) batchDao.select("BatchResultDao.selectBatchResult", batchResult);
	}

	/**
	 * 배치결과정보목록을  조회한다.
	 * @return 배치결과목록
	 *
	 * @param searchVO    조회조건이 저장된 VO
	 * @exception Exception Exception
	 */
	public List<?> selectBatchResultList(BatchResult searchVO) throws Exception {
		return batchDao.list("BatchResultDao.selectBatchResultList", searchVO);
	}

	/**
	 * 배치결과 목록 전체 건수를(을) 조회한다.
	 * @return 목록건수
	 *
	 * @param searchVO    조회할 정보가 담긴 VO
	 * @exception Exception Exception
	 */
	public int selectBatchResultListCnt(BatchResult searchVO) throws Exception {
		return (Integer) batchDao.select("BatchResultDao.selectBatchResultListCnt", searchVO);
	}

	/**
	 * 배치결과정보를 수정한다.
	 *
	 * @param batchResult    수정대상 배치결과 VO
	 * @exception Exception Exception
	 */
	public void updateBatchResult(BatchResult batchResult) throws Exception {
		batchDao.update("BatchResultDao.updateBatchResult", batchResult);
	}
}