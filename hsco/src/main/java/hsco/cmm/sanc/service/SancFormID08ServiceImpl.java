package hsco.cmm.sanc.service;

import java.util.Map;

import hsco.cmm.dao.BaseDao;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 경영정보시스템 구축용역
 * @Class Name   	: SancFormID08ServiceImpl.java
 * @Description  	: 
 * @author       	: 강노구
 * @since        	: 2017. 12. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 12. 15.				   강노구				최초생성
 * </pre>
 */
public class SancFormID08ServiceImpl implements SancAfterProcService {
	
	@Override
	public void sancAfterProc_01(BaseDao baseDao, Map<String, Object> pMap) {
		// TODO Auto-generated method stub

	}

	@Override
	public void sancAfterProc_02(BaseDao baseDao, Map<String, Object> pMap) {
		// TODO Auto-generated method stub

	}

	@Override
	public void sancAfterProc_03(BaseDao baseDao, Map<String, Object> pMap) {
		// TODO Auto-generated method stub

	}

	@Override
	public void sancAfterProc_04(BaseDao baseDao, Map<String, Object> pMap) {
		baseDao.update("SancDAO.SP_M_08", pMap);
	}

	@Override
	public void sancAfterProc_05(BaseDao baseDao, Map<String, Object> pMap) {
		// TODO Auto-generated method stub

	}

}
