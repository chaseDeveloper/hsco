package hsco.cmm.batch.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.batch.service.BatchOpertService;
import hsco.cmm.batch.vo.BatchOpert;
import hsco.cmm.service.JobService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: BatchOpertServiceImpl.java
 * @Description  	: 배치작업관리 서비스 클래스 
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
@Service("batchOpertService")
public class BatchOpertServiceImpl extends JobService implements BatchOpertService {
	/** Log 생성*/
    private static final Logger LOGGER = LoggerFactory.getLogger(BatchOpertServiceImpl.class);
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    
    /**
	 * 배치작업을 삭제한다.
	 * @param batchOpert    삭제대상 배치작업model
	 * @exception Exception Exception
	 */
    public void deleteBatchOpert(BatchOpert batchOpert) throws Exception {
    	if(LOGGER.isInfoEnabled()){
    		LOGGER.info("deleteBatchOpert started!");
    	}
    	batchDao.delete("BatchOpertDao.deleteBatchOpert", batchOpert);
    }
    
    /**
	 * 배치작업을 등록한다.
	 * @param batchOpert    등록대상 배치작업model
	 * @exception Exception Exception
	 */
	public void insertBatchOpert(BatchOpert batchOpert) throws Exception {
		batchDao.insert("BatchOpertDao.insertBatchOpert", batchOpert);
	}
	
	/**
	 * 배치작업정보를 상세조회 한다.
	 * @return 배치작업정보
	 *
	 * @param batchOpert    조회할 KEY가 있는 배치작업 VO
	 * @exception Exception Exception
	 */
	public BatchOpert selectBatchOpert(BatchOpert batchOpert) throws Exception {
		return (BatchOpert) batchDao.select("BatchOpertDao.selectBatchOpert", batchOpert);
	}

	/**
	 * 배치작업정보목록을  조회한다.
	 * @return 배치작업목록
	 *
	 * @param searchVO    조회조건이 저장된 VO
	 * @exception Exception Exception
	 */
	public List<?> selectBatchOpertList(BatchOpert searchVO) throws Exception {
		return batchDao.list("BatchOpertDao.selectBatchOpertList", searchVO);
	}

	/**
	 * 배치작업 목록 전체 건수를(을) 조회한다.
	 * @return 목록건수
	 *
	 * @param searchVO    조회할 정보가 담긴 VO
	 * @exception Exception Exception
	 */
	public int selectBatchOpertListCnt(BatchOpert searchVO) throws Exception {
		return (Integer) batchDao.select("BatchOpertDao.selectBatchOpertListCnt", searchVO);
	}

	/**
	 * 배치작업정보를 수정한다.
	 *
	 * @param batchOpert    수정대상 배치작업 VO
	 * @exception Exception Exception
	 */
	public void updateBatchOpert(BatchOpert batchOpert) throws Exception {

    	batchDao.update("BatchOpertDao.updateBatchOpert", batchOpert);
	}
}