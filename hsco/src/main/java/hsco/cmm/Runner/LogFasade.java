package hsco.cmm.Runner;

import java.io.File;
import java.io.FileInputStream;
import java.text.SimpleDateFormat;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Value;

import egovframework.rte.psl.orm.ibatis.support.SqlMapClientDaoSupport;
import hsco.cmm.util.ObjectUtil;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.support.RequestContextUtils;

import com.ibatis.sqlmap.engine.impl.SqlMapClientImpl;
import com.ibatis.sqlmap.engine.mapping.parameter.ParameterMap;
import com.ibatis.sqlmap.engine.mapping.sql.Sql;
import com.ibatis.sqlmap.engine.mapping.statement.MappedStatement;
import com.ibatis.sqlmap.engine.scope.SessionScope;
import com.ibatis.sqlmap.engine.scope.StatementScope;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: LogFasade.java
 * @Description  	: 로그 서비스 데몬 호출을 위한 퍼사드 
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
public class LogFasade {
	
	@Value("#{fileStore['logStoreLoc']}")
	private String logStoreLoc;
	
//	private static LogFasade _instance = new LogFasade();
//	public static LogFasade getInstance() {
//		
//		if( _instance == null ) {			
//			
//			synchronized (LogFasade.class) {				
//				if(_instance == null) {
//					_instance = new LogFasade();		
//				}				
//			}				
//		}
//		
//		return _instance;
//	}
	// 클래스변수들이 final이 아니므로 volatile을 추가하였음. by jdkim
	private static volatile LogFasade _instance = null;
    public static LogFasade getInstance() {
		
		if( _instance == null ) {			
			
			synchronized (LogFasade.class) {				
				if(_instance == null) {
					_instance = new LogFasade();		
				}				
			}				
		}
		
		return _instance;
	}
	
	public LogFasade () {}

	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:Throw 로그(파일에만 적재)
	 * @param ex
	 * 2015. 9. 14.
	 * </pre>
	 */
	public void putLog(Throwable ex) {
		
		//int format_type = LogEntry.FILE_TYPE | LogEntry.SYSTEM_FORMAT;
		
		Throwable e = ex.getCause();		
		String msg = ExceptionUtils.getStackTrace(e==null ? ex : e);
		
		putLog(msg);
	}

	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:단순 String 로그(파일에만 적재)
	 * @param msg
	 * 2015. 9. 14.
	 * </pre>
	 */
	public void putLog(String msg) {
		
		int format_type = LogEntry.FILE_TYPE | LogEntry.SYSTEM_FORMAT;
		
		putLog(format_type, msg, null, null, null, null);
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:단순 String 및 파라미터맵(파일에만 적재)
	 * @param msg
	 * @param param
	 * 2015. 9. 14.
	 * </pre>
	 */	
	@SuppressWarnings("rawtypes")
	public void putLog(String msg, Map param) {
		
		int format_type = LogEntry.FILE_TYPE | LogEntry.SYSTEM_FORMAT;
		
		putLog(format_type, msg, param, null, null, null);
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION: 시스템에서 발생한 로그(파일 및 DB 모두 적재)
	 * @param dao
	 * @param param
	 * 2015. 9. 14.
	 * </pre>
	 */
	@SuppressWarnings("rawtypes")
	public void putLog(SqlMapClientDaoSupport dao, Map param) {
		
		int format_type = LogEntry.ALL_TYPE | LogEntry.SYSTEM_FORMAT;
		String msg = "SYSTEM";
		
		putLog(format_type, msg, param, dao, null, null);
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:개인정보 조회 로그
	 * @param dao
	 * @param process_se_code <"R"|"X"|"P"|"E">
	 * 2015. 9. 18.
	 * </pre>
	 */
	@SuppressWarnings("rawtypes")
	public void putIndivisualInfoLog(SqlMapClientDaoSupport dao, Map param) {

		int format_type = LogEntry.DB_TYPE | LogEntry.DATABASE_FORMAT;
		String msg = "INDIVIDUAL_AUTH";

		putLog(format_type, msg, param, dao, null, null);
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:메뉴사용 로그
	 * @param dao
	 * @param process_se_code <"R"|"X"|"P"|"E">
	 * 2015. 9. 18.
	 * </pre>
	 */
	@SuppressWarnings("rawtypes")
	public void putMenuUseLog(SqlMapClientDaoSupport dao, Map param) {
		
		int format_type = LogEntry.DB_TYPE | LogEntry.DATABASE_FORMAT;
		String msg = "MENU_USE";
		//Map map = new HashMap();
		
		putLog(format_type, msg, param, dao, null, null);
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION: 표준 형태의 로그
	 * @param dao
	 * @param param
	 * @param format_type
	 * 2015. 9. 22.
	 * </pre>
	 */
	@SuppressWarnings("rawtypes")
	public void putLog(int format_type, String msg, SqlMapClientDaoSupport dao, Map param) {
		
		putLog(format_type, msg, param, dao, null, null);
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION: DAO 발생 로그(파일 및 DB 모두 적재)
	 * @param dao
	 * @param queryID
	 * @param logMap
	 * 2015. 9. 14.
	 * </pre>
	 */
	@SuppressWarnings("rawtypes")
	public void putLog(SqlMapClientDaoSupport dao, String queryID, Map logMap) {
		
				
		int format_type = LogEntry.ALL_TYPE | LogEntry.DATABASE_FORMAT;
		String msg = "DATABASE";
		
		putLog(format_type, msg, logMap, dao, queryID, null);
		
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:DAO에서 발생한 로그(파일 및 DB 적재)
	 * @param dao
	 * @param queryID
	 * @param paramObject
	 * @param logMap
	 * 2015. 9. 14.
	 * </pre>
	 */
	@SuppressWarnings("rawtypes")
	public void putLog(SqlMapClientDaoSupport dao, String queryID, Object paramObject, Map logMap) {		
		
		// SQL Parsing
		
		int format_type = LogEntry.ALL_TYPE | LogEntry.DATABASE_FORMAT;
		String msg = "DATABASE";
		
		putLog(format_type, msg, logMap, dao, queryID, paramObject);
	}
	
	
	
	
	@SuppressWarnings("rawtypes")
	public void putLog(int format_type, String msg, Map logMap, 
							SqlMapClientDaoSupport dao, String queryID, Object paramObject) {		
		LogEntry entry = new LogEntry(format_type, msg, logMap);
		entry.setDao(dao);
		entry.setQueryID(queryID);
		entry.setParamObject(paramObject);
		
		try {
			ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
			HttpServletRequest request = attr.getRequest();
			entry.setRequest(request);
			
			// 로그에 필요한 기본정보를 세팅
			logMapping(entry);
			
			runSvc(entry) ;
		} catch (IllegalStateException e) {
			// IllegalStateException 오류발생시 로그생략
		}
	}
	
	
	private void runSvc(LogEntry entry) 
	{
		
		LogRunner logSvc = LogRunner.getInstance();
		logSvc.startSvc();
		
		logSvc.log(entry);
	}
	
	

	@SuppressWarnings({ "unchecked", "rawtypes" })
	private void logMapping(LogEntry entry)
	{
		
		//WebPath 설정
		HttpServletRequest request = entry.getRequest();
		
//		String contextPath = request.getRealPath("/");		
//		
//		if(contextPath == null) {
//			contextPath = request.getContextPath();
//		}
		
		String contextPath = logStoreLoc;
		
		entry.setWebContextPath(contextPath);
		
				
		Map logMap = entry.getParam();		
		
		if( logMap == null ) {
			return;
		}
		
		// UA
		String user_agent = request.getHeader("user-agent");			
		logMap.put("CONECT_MTHD", user_agent);
		
		// URI
		String uri = request.getRequestURI();
		logMap.put("URI", uri);
		
		// UUID 가져오기
		Object uuID = request.getAttribute("UUID");
		logMap.put("INSTN_ID", (uuID == null) ? "" : uuID.toString());
		
		// Menu ID
		String menuID = (String)request.getAttribute("MENU_ID");
		logMap.put("MENU_ID", menuID);
		
		// System ID
		String sysID = (String)request.getAttribute("SYS_ID");
		logMap.put("SYS_ID", sysID);
		
		// Service
		String svcID = (String)request.getAttribute("SVC_ID");
		logMap.put("SVC_ID", svcID);
		
		// method
		String operation = (String)request.getAttribute("OPRTIN_NM");
		logMap.put("OPRTIN_NM", operation);		
		

		
		// 세션값 설정
		HttpSession sessionInfo = request.getSession();		
		String userId = (String)sessionInfo.getAttribute("S_USER_ID");
		String deptCd = (String)sessionInfo.getAttribute("S_DEPT_CODE");
		String ipAddr = (String)sessionInfo.getAttribute("S_USER_IP");
		logMap.put("S_USER_ID", userId == null ? "SYSTEM": userId);		
		logMap.put("S_DEPT_CODE", deptCd == null ? "9999" : deptCd);
		logMap.put("S_USER_IP", ipAddr == null ? "unknown host" : ipAddr);
		
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:DAO에서 발생한 로그(파일 및 DB 적재)
	 * @param dao
	 * @param queryID
	 * @param paramObject
	 * @param logMap
	 * 2015. 9. 14.
	 * </pre>
	 */
	@SuppressWarnings("rawtypes")
	public void putBatchLog(SqlMapClientDaoSupport dao, String queryID, Object paramObject, Map logMap) {		
		
		// SQL Parsing
		
		int format_type = LogEntry.ALL_TYPE | LogEntry.DATABASE_FORMAT;
		String msg = "DATABASE";
		
		putBatchLog(format_type, msg, logMap, dao, queryID, paramObject);
	}
	
	
	
	
	@SuppressWarnings("rawtypes")
	public void putBatchLog(int format_type, String msg, Map logMap, 
							SqlMapClientDaoSupport dao, String queryID, Object paramObject) {		
		
		LogEntry entry = new LogEntry(format_type, msg, logMap);
		entry.setDao(dao);
		entry.setQueryID(queryID);
		entry.setParamObject(paramObject);
		
		
		// 로그에 필요한 기본정보를 세팅
		logBatchMapping(entry);
		
		runSvc(entry) ;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	private void logBatchMapping(LogEntry entry)
	{
		
		//WebPath 설정
//		HttpServletRequest request = entry.getRequest();
//		
//		String contextPath = request.getRealPath("/");		
//		
//		if(contextPath == null) {
//			contextPath = request.getContextPath();
//		}
		
		String contextPath = logStoreLoc;
		
		entry.setWebContextPath(contextPath);
		
				
		Map logMap = entry.getParam();		
		
		if( logMap == null ) {
			return;
		}
		
		// UA		
		logMap.put("CONECT_MTHD", "N/A");
		
		// URI
		logMap.put("URI", "");
		
		// UUID 가져오기
		logMap.put("INSTN_ID", "1155662314219650118");
		
		// Menu ID
		logMap.put("MENU_ID", "");
		
		// System ID
		logMap.put("SYS_ID", "SYSTEM");
		
		// Service
		logMap.put("SVC_ID", "hsco.cmm.batch.service.BatchScheduler");
		
		// method
		logMap.put("OPRTIN_NM", entry.getQueryID());		
		

		
		// 세션값 설정	
		logMap.put("S_USER_ID", "SYSTEM");		
		logMap.put("S_DEPT_CODE", "000000");
		logMap.put("S_USER_IP", "192.168.10.223");
		
	}
	 
}
