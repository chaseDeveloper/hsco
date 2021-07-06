package hsco.cmm.batch.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.batch.service.BatchSchdulService;
import hsco.cmm.batch.vo.BatchResult;
import hsco.cmm.batch.vo.BatchSchdul;
import hsco.cmm.batch.vo.BatchSchdulDfk;
import hsco.cmm.dao.BaseDao;
import hsco.cmm.dao.BatchDao;
import hsco.cmm.dao.BioStarDao;
import hsco.cmm.dao.HscoHomePageDao;

/**
 * <pre>
 * &#64;Project Name 	: 화성도시공사 차세대정보시스템
 * &#64;Class Name   	: BatchSchdulServiceImpl.java
 * &#64;Description  	: 배치실행 스케줄을 관리하는 클래스
 * &#64;author       	: 정윤원
 * &#64;since        	: 2016. 3. 17.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016.3.17.	       정윤원		   최초생성
 * </pre>
 */
@Service("batchSchdulService")
public class BatchSchdulServiceImpl implements BatchSchdulService {

	/** Log 생성 */
	private static final Logger			LOGGER	= LoggerFactory.getLogger(BatchSchdulServiceImpl.class);

	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl	propertiesService;

	@Resource(name = "BatchDao")
	private BatchDao					batchDao;

	@Resource(name = "BaseDao")
	private BaseDao						baseDao;

	@Resource(name = "BioStarDao")
	private BioStarDao					bioStarDao;
	
	@Resource(name = "hscoHomePageDao")
	private HscoHomePageDao hscoHomePageDao;

	public HscoHomePageDao getHscoHomePageDao() {
		return hscoHomePageDao;
	}

	public void setHscoHomePageDao(HscoHomePageDao hscoHomePageDao) {
		this.hscoHomePageDao = hscoHomePageDao;
	}
	
	public BaseDao getBaseDao() {
		return baseDao;
	}

	public void setBaseDao(BaseDao baseDao) {
		this.baseDao = baseDao;
	}

	public BioStarDao getBioStarDao() {
		return bioStarDao;
	}

	public void setBioStarDao(BioStarDao bioStarDao) {
		this.bioStarDao = bioStarDao;
	}

	/**
	 * @return the batchDao
	 */
	public BatchDao getBatchDao() {
		return batchDao;
	}

	/**
	 * @param batchDao
	 *            the batchDao to set
	 */
	public void setBatchDao(BatchDao batchDao) {
		this.batchDao = batchDao;
	}

	/**
	 * 배치스케줄을 삭제한다.
	 *
	 * @param batchSchdul
	 *            삭제할 배치스케줄 VO
	 * @exception Exception
	 *                Exception
	 */
	public void deleteBatchSchdul(BatchSchdul batchSchdul) throws Exception {
		// slave 테이블 삭제
		int iRow = 0;
		iRow += batchDao.delete("BatchSchdulDao.deleteBatchSchdulDfk", batchSchdul.getBatchSchdulId());
		// master 테이블 삭제
		if (iRow > 0)
			batchDao.delete("BatchSchdulDao.deleteBatchSchdul", batchSchdul);
	}

	/**
	 * 배치스케줄을 등록한다.
	 *
	 * @param batchSchdul
	 *            저장할 배치스케줄 VO
	 * @exception Exception
	 *                Exception
	 */
	public void insertBatchSchdul(BatchSchdul batchSchdul) throws Exception {
		if (LOGGER.isInfoEnabled()) {
			LOGGER.info("insertBatchSchdul started!");
		}
		// master 테이블 인서트
		batchDao.insert("BatchSchdulDao.insertBatchSchdul", batchSchdul);
		// slave 테이블 인서트
		if (batchSchdul.getExecutSchdulDfkSes() != null && batchSchdul.getExecutSchdulDfkSes().length != 0) {
			String batchSchdulId = batchSchdul.getBatchSchdulId();
			String[] dfkSes = batchSchdul.getExecutSchdulDfkSes();
			for (int i = 0; i < dfkSes.length; i++) {
				BatchSchdulDfk batchSchdulDfk = new BatchSchdulDfk();
				batchSchdulDfk.setBatchSchdulId(batchSchdulId);
				batchSchdulDfk.setExecutSchdulDfkSe(dfkSes[i]);
				batchDao.insert("BatchSchdulDao.insertBatchSchdulDfk", batchSchdulDfk);
			}
		}
	}

	/**
	 * 배치스케줄정보를 상세조회 한다.
	 * 
	 * @return 배치스케줄정보
	 *
	 * @param batchSchdul
	 *            조회할 KEY가 있는 배치스케줄 VO
	 * @exception Exception
	 *                Exception
	 */
	@SuppressWarnings("unchecked")
	public BatchSchdul selectBatchSchdul(BatchSchdul batchSchdul) throws Exception {
		BatchSchdul result = (BatchSchdul) batchDao.select("BatchSchdulDao.selectBatchSchdul", batchSchdul);
		// 스케줄요일정보를 가져온다.
		List<BatchSchdulDfk> dfkSeList = (List<BatchSchdulDfk>) batchDao.list("BatchSchdulDao.selectBatchSchdulDfkList", result.getBatchSchdulId());
		String[] dfkSes = new String[dfkSeList.size()];
		for (int j = 0; j < dfkSeList.size(); j++) {
			dfkSes[j] = dfkSeList.get(j).getExecutSchdulDfkSe();
		}
		result.setExecutSchdulDfkSes(dfkSes);
		// 화면표시용 실행스케줄 속성을 만든다.
		result.makeExecutSchdul(dfkSeList);

		return result;
	}

	/**
	 * 배치스케줄정보목록을 조회한다.
	 * 
	 * @return 배치스케줄목록
	 *
	 * @param searchVO
	 *            조회조건이 저장된 VO
	 * @exception Exception
	 *                Exception
	 */
	@SuppressWarnings("unchecked")
	public List<?> selectBatchSchdulList(Map<String, Object> searchVO) throws Exception {
		List<BatchSchdul> resultList = (List<BatchSchdul>) batchDao.list("BatchSchdulDao.selectBatchSchdulList", searchVO);

		for (int i = 0; i < resultList.size(); i++) {
			BatchSchdul result = (BatchSchdul) resultList.get(i);
			// 스케줄요일정보를 가져온다.
			List<BatchSchdulDfk> dfkSeList = (List<BatchSchdulDfk>) batchDao.list("BatchSchdulDao.selectBatchSchdulDfkList", result.getBatchSchdulId());
			String[] dfkSes = new String[dfkSeList.size()];
			for (int j = 0; j < dfkSeList.size(); j++) {
				dfkSes[j] = dfkSeList.get(j).getExecutSchdulDfkSe();
			}
			result.setExecutSchdulDfkSes(dfkSes);
			// 화면표시용 실행스케줄 속성을 만든다.
			result.makeExecutSchdul(dfkSeList);
		}
		return resultList;
	}

	/**
	 * 배치스케줄 목록 전체 건수를(을) 조회한다.
	 * 
	 * @return 목록건수
	 *
	 * @param searchVO
	 *            조회할 정보가 담긴 VO
	 * @exception Exception
	 *                Exception
	 */
	public int selectBatchSchdulListCnt(BatchSchdul searchVO) throws Exception {
		return (Integer) batchDao.select("BatchSchdulDao.selectBatchSchdulListCnt", searchVO);
	}

	/**
	 * 배치스케줄정보를 수정한다.
	 *
	 * @param batchSchdul
	 *            수정대상 배치스케줄 VO
	 * @exception Exception
	 *                Exception
	 */
	public void updateBatchSchdul(BatchSchdul batchSchdul) throws Exception {

		batchDao.update("BatchSchdulDao.updateBatchSchdul", batchSchdul);
		// slave 테이블 삭제
		batchDao.delete("BatchSchdulDao.deleteBatchSchdulDfk", batchSchdul.getBatchSchdulId());
		// slave 테이블 인서트
		String[] dfkses = batchSchdul.getExecutSchdulDfkSes();
		if (dfkses != null && dfkses.length != 0) {
			//String batchSchdulId = batchSchdul.getBatchSchdulId();
			String[] dfkSes = batchSchdul.getExecutSchdulDfkSes();
			for (int i = 0; i < dfkSes.length; i++) {
				BatchSchdulDfk batchSchdulDfk = new BatchSchdulDfk();
				batchSchdulDfk.setBatchSchdulId(batchSchdul.getBatchSchdulId());
				batchSchdulDfk.setExecutSchdulDfkSe(dfkSes[i]);
				batchDao.insert("BatchSchdulDao.insertBatchSchdulDfk", batchSchdulDfk);
			}
		}
	}

	/**
	 * 배치결과ID를 조회한다
	 * 
	 * @return 배치결과ID
	 *
	 * @param searchVO
	 *            조회할 정보가 담긴 VO
	 * @exception Exception
	 *                Exception
	 */
	public String selectBatchResultId() throws Exception {
		return (String) batchDao.select("BatchResultDao.selectBatchResultId");
	}

	/**
	 * 배치결과를 등록한다.
	 * 
	 * @param batchResult
	 *            등록대상 배치결과model
	 * @exception Exception
	 *                Exception
	 */
	public void insertBatchResult(BatchResult batchResult) throws Exception {
		batchDao.insert("BatchResultDao.insertBatchResult", batchResult);
	}

	/**
	 * 배치결과정보를 수정한다.
	 *
	 * @param batchResult
	 *            수정대상 배치결과model
	 * @exception Exception
	 *                Exception
	 */
	public void updateBatchResult(BatchResult batchResult) throws Exception {
		batchDao.update("BatchResultDao.updateBatchResult", batchResult);
	}
}