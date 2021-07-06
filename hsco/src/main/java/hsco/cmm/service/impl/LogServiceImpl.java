package hsco.cmm.service.impl;

import java.util.Map;

import javax.annotation.Resource;


import egovframework.rte.psl.orm.ibatis.support.SqlMapClientDaoSupport;
import hsco.cmm.Runner.LogRunner;
import hsco.cmm.exception.NexaServiceException;

import org.springframework.transaction.annotation.Transactional;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: LogServiceImpl.java
 * @Description  	: 로그서비스 
 * @author       	: 정윤원
 * @since        	: 2015. 9. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 14.					정윤원				최초생성
 * </pre>
 */
public class LogServiceImpl  {

	protected LogRunner log = LogRunner.getInstance();
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    private static volatile LogServiceImpl _instance = new LogServiceImpl();
	
	public static LogServiceImpl getInstance() {
		
		if( _instance == null ) {
			
			synchronized (LogServiceImpl.class) {
				
				if( _instance == null ) {
					_instance = new LogServiceImpl();			
				}
			}
		}
		
		return _instance;
	}
	
	/**
	 * 생성자
	 */
	public LogServiceImpl() {	}

	/**
	 * 시스템 로그 남기기
	 * @param dao
	 * @param paramMap
	 * @throws NexaServiceException
	 * 2015. 9. 10.
	 * <pre> 시스템로그 테이블에 로그 적재</pre>
	 */
    
	public void insertSysLog(SqlMapClientDaoSupport dao, Map paramMap) throws NexaServiceException {

    	dao.getSqlMapClientTemplate().insert("LOG.insertSysLog", paramMap);
	}
    

    /**
     * DB 로그 남기기
     * @param dao
     * @param paramMap
     * @throws NexaServiceException
     * 2015. 9. 10.
     * <pre> 데이타베이스로그 테이블에 Query로그 적재</pre>
     */
    
    public void insertDbLog(SqlMapClientDaoSupport dao, Map paramMap) throws NexaServiceException {
		
    	dao.getSqlMapClientTemplate().insert("LOG.insertDbLog", paramMap);
	}
    
    
    /**
     * 개인정보조회 로그 남기기
     * <pre>
     * @DESCRIPTION:개인정보조회 로그 남기기
     * @param dao
     * @param paramMap
     * @throws NexaServiceException
     * 2015. 9. 17.
     * </pre>
     */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	
    public void insertindvlLog(SqlMapClientDaoSupport dao, Map paramMap) throws NexaServiceException {
    	
        dao.getSqlMapClientTemplate().insert("LOG.insertindvdlLog", paramMap);
    	
	}
    
    
    /**
     * 메뉴사용 로그 남기기
     * <pre>
     * @DESCRIPTION:메뉴사용 로그 남기기
     * @param dao
     * @param paramMap
     * @throws NexaServiceException
     * 2015. 9. 17.
     * </pre>
     */
    
    public void insertMenuUseLog(SqlMapClientDaoSupport dao, Map paramMap) throws NexaServiceException {
        
    	dao.getSqlMapClientTemplate().insert("LOG.insertMehuUselLog", paramMap);
	}
}
