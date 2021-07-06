package hsco.cmm.Runner;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import egovframework.rte.psl.orm.ibatis.support.SqlMapClientDaoSupport;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: LogEntry.java
 * @Description  	: 로그 서비스 데몬에서 사용하는 파라미터
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
public class LogEntry {
	
	public final static int EXIT_TYPE		= 0x00;
	public final static int FILE_TYPE 	= 0x01;
	public final static int DB_TYPE 		= 0x02;
	public final static int ALL_TYPE 		= 0x07;	
	public final static int MASK_TYPE 	= 0x0F;
	
	public final static int SYSTEM_FORMAT 	= 0x10;
	public final static int DATABASE_FORMAT 	= 0x20;
	public final static int INFO_FORMAT 		= 0x80; // 개인정보조회로그
	public final static int MASK_FORMAT		= 0xF0;
	
	private int type;			// 파일에 남길지 DB에 남길지
	private int format;		// Log 발생이 System 또는 DB LOG 
	//private String filePath;	// 파일로그 경로
	private String	msg;		// 파일에 남길때 별도 메시지
	private Map param;			// 파일 또는 DB에 남길때 파라미터
	private HttpServletRequest request;
	private SqlMapClientDaoSupport dao;
	private String queryID;
	private Object paramObject;	// SQL 파라미터
	private String webContextPath;	// 로그 생성할때 설정
	

	public LogEntry(String msg)
	{
		this.type	= FILE_TYPE;
		this.format	= SYSTEM_FORMAT;
		this.msg	= msg;	
	}
	
	public LogEntry(int format_type, String msg)
	{
		this.type	= (format_type & MASK_TYPE);
		this.format	= (format_type & MASK_FORMAT);
		this.msg	= msg;		
	}
	
	public LogEntry(int format_type, String msg,  Map param)
	{
		this.type	= (format_type & MASK_TYPE);
		this.format	= (format_type & MASK_FORMAT);		
		this.msg	= msg;
		this.param	= param;
	}
	

	public String getMessage(){
		
		return this.msg;
	}
	
	public int getMsgType(){
		
		return this.type;
	}
	
	public Map getParam()
	{
		return param;
	}
	
	public void setParam(Map param)
	{
		this.param = param;
	}

	public int getFormat() {
		return format;
	}

	public void setFormat(int format) {
		this.format = format;
	}


	public HttpServletRequest getRequest() {
		return request;
	}

	public void setRequest(HttpServletRequest request) {
		this.request = request;
	}

	public SqlMapClientDaoSupport getDao() {
		return dao;
	}

	public void setDao(SqlMapClientDaoSupport dao) {
		this.dao = dao;
	}

	public String getQueryID() {
		return queryID;
	}

	public void setQueryID(String queryID) {
		this.queryID = queryID;
	}

	public Object getParamObject() {
		return paramObject;
	}

	public void setParamObject(Object paramObject) {
		this.paramObject = paramObject;
	}

	public String getWebContextPath() {
		return webContextPath;
	}

	public void setWebContextPath(String webContextPath) {
		this.webContextPath = webContextPath;
	}

	@Override
	public String toString() {
		return "LogEntry [type=" + type + ", format=" + format + ", msg=" + msg
				+ ", param=" + param + ", request=" + request + ", dao=" + dao
				+ ", queryID=" + queryID + ", paramObject=" + paramObject
				+ ", webContextPath=" + webContextPath + "]";
	}
	
	
	


}
