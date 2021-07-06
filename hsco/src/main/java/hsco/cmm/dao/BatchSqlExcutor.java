package hsco.cmm.dao;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;

import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import egovframework.rte.psl.orm.ibatis.support.SqlMapClientDaoSupport;
import hsco.cmm.Runner.LogFasade;
import hsco.cmm.Runner.LogMap;
import hsco.cmm.Runner.QueryParser;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.util.ObjectUtil;

import org.springframework.stereotype.Repository;

import com.ibatis.sqlmap.client.SqlMapClient;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SqlExcutor.java
 * @Description  	: SQL 실행 Class
 * @author       	: 정윤원
 * @since        	: 2015. 9. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 16.					정윤원				최초생성
 * </pre>
 */

@Repository("BatchSqlExcutor")
public class BatchSqlExcutor extends SqlMapClientDaoSupport {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/**
     * Annotation 형식으로 sqlMapClient 를 받아와 이를 super(SqlMapClientDaoSupport) 의 setSqlMapClient 메서드를 호출하여 설정해 준다.
     *
     * @param sqlMapClient - ibatis 의 SQL Map 과의 상호작용을 위한 기본 클래스로
     *               mapped statements(select, insert, update, delete 등)의 실행을 지원함.
     */
	@Resource(name = "batchSqlMapClient")
	public void setSuperSqlMapClient(SqlMapClient sqlMapClient) {		
		
		super.setSqlMapClient(sqlMapClient);
		
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION: 파라미터 없는 Query
	 * @param function
	 * @param queryId
	 * @return
	 * 2015. 9. 15.
	 * </pre>
	 */
	public Object execQuery( String function, String queryId) {
		
		Class paramClass[] = new Class[]{String.class};
		Object paramValue[] = new Object[]{queryId};
		
		Object object = execQuery(function, queryId, paramClass, paramValue, null);
	
		return object;
	}
	

	/**
	 * 
	 * <pre>
	 * @DESCRIPTION: 파라미터 없는 Query
	 * @param function
	 * @param queryId
	 * @return
	 * 2015. 9. 15.
	 * </pre>
	 */
	public Object execQuery( String function, String queryId, boolean bLog) {
		
		Class paramClass[] = new Class[]{String.class};
		Object paramValue[] = new Object[]{queryId};
		
		Object object = execQuery(function, queryId, paramClass, paramValue, null, bLog);
	
		return object;
	}
	
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:파라미터를 가지는 Query
	 * @param function
	 * @param queryId
	 * @param parameterObject : Map
	 * @return
	 * 2015. 9. 15.
	 * </pre>
	 */
	public Object execQuery( String function, String queryId, Object parameterObject) {
		
		if(parameterObject != null && parameterObject instanceof Map) {
			ObjectUtil.setUserToMap(parameterObject);			
		}
		
		Class paramClass[] = new Class[]{String.class, Object.class};
		Object paramValue[] = new Object[]{queryId, parameterObject};
		
		Object object = execQuery( function, queryId, paramClass, paramValue, parameterObject);
	
		return object;
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:파라미터를 가지는 Query
	 * @param function
	 * @param queryId
	 * @param parameterObject : Map
	 * @return
	 * 2015. 9. 15.
	 * </pre>
	 */
	public Object execQuery( String function, String queryId, Object parameterObject, boolean bLog) {
		
		if(parameterObject instanceof HashMap)
		    ObjectUtil.setBatchUserToMap((HashMap)parameterObject);		
		
		Class paramClass[] = new Class[]{String.class, Object.class};
		Object paramValue[] = new Object[]{queryId, parameterObject};
		
		Object object = execQuery( function, queryId, paramClass, paramValue, parameterObject, bLog);
	
		return object;
	}
	
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION: 호환성 유지를 위해 구현(Not Use)
	 * @param function
	 * @param queryId
	 * @param parameterObject
	 * @param resultObject
	 * @return
	 * 2015. 9. 15.
	 * </pre>
	 */
	public Object execQuery( String function, String queryId, Object parameterObject, final Object resultObject) {
		
		if(parameterObject != null && parameterObject instanceof Map) {
			ObjectUtil.setUserToMap(parameterObject);			
		}
		
		Class paramClass[] = new Class[]{String.class, Object.class, Object.class};
		Object paramValue[] = new Object[]{queryId, parameterObject, resultObject};
		
		Object object = execQuery(function, queryId, paramClass, paramValue, parameterObject);
	
		return object;
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:호환성 유지를 위해 구현(Not Use)
	 * @param function
	 * @param queryId
	 * @param parameterObject
	 * @param keyProperty
	 * @return
	 * 2015. 9. 15.
	 * </pre>
	 */
	public Object execQuery( String function, String queryId, final Object parameterObject, final String keyProperty) {
		
		if(parameterObject != null && parameterObject instanceof Map) {
			ObjectUtil.setUserToMap(parameterObject);			
		}
		
		Class paramClass[] = new Class[]{String.class, Object.class, String.class};
		Object paramValue[] = new Object[]{queryId, parameterObject, keyProperty};
		
		Object object = execQuery(function, queryId, paramClass, paramValue, parameterObject);
	
		return object;
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:호환성 유지를 위해 구현(Not Use)
	 * @param function
	 * @param queryId
	 * @param parameterObject
	 * @param keyProperty
	 * @param valueProperty
	 * @return
	 * 2015. 9. 15.
	 * </pre>
	 */
	public Object execQuery( String function, String queryId, final Object parameterObject, 
									final String keyProperty, final String valueProperty) {
		
		if(parameterObject != null && parameterObject instanceof Map) {
			ObjectUtil.setUserToMap(parameterObject);			
		}
		
		Class paramClass[] = new Class[]{String.class, Object.class, String.class, String.class};
		Object paramValue[] = new Object[]{queryId, parameterObject, keyProperty, valueProperty};
		
		Object object = execQuery(function, queryId, paramClass, paramValue, parameterObject);
	
		return object;
	}
	
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:호환성 유지를 위해 구현함(Not Use)
	 * @param function
	 * @param queryID
	 * @param parameterObject
	 * @param requiredRowsAffected
	 * @return
	 * 2015. 9. 15.
	 * </pre>
	 */
	public Object execQuery( String function, String queryId, Object parameterObject, int requiredRowsAffected) {
		
		if(parameterObject != null && parameterObject instanceof Map) {
			ObjectUtil.setUserToMap(parameterObject);			
		}
		
		Class paramClass[] = new Class[]{String.class, Object.class, int.class};
		Object paramValue[] = new Object[]{queryId, parameterObject, requiredRowsAffected};	
		Object object = execQuery(function, queryId, paramClass, paramValue, parameterObject);
	
		return object;
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:호환성 유지를 위해 구현함(Not Use)
	 * @param function
	 * @param queryId
	 * @param skipResults
	 * @param maxResults
	 * @return
	 * 2015. 9. 15.
	 * </pre>
	 */
	public Object execQuery( String function, String queryId, int skipResults, int maxResults) {
		
		Class paramClass[] = new Class[]{String.class, int.class, int.class};
		Object paramValue[] = new Object[]{queryId, skipResults, maxResults};	
		Object object = execQuery(function, queryId, paramClass, paramValue, null);
	
		return object;
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:호환성 유지를 위해 구현(Not Use)
	 * @param function
	 * @param queryId
	 * @param parameterObject
	 * @param skipResults
	 * @param maxResults
	 * @return
	 * 2015. 9. 15.
	 * </pre>
	 */
	public Object execQuery( String function, String queryId, Object parameterObject, int skipResults, int maxResults) {
		
		if(parameterObject != null && parameterObject instanceof Map) {
			ObjectUtil.setUserToMap(parameterObject);			
		}
		
		Class paramClass[] = new Class[]{String.class, Object.class, int.class, int.class};
		Object paramValue[] = new Object[]{queryId, parameterObject, skipResults, maxResults};	
		Object object = execQuery(function, queryId, paramClass, paramValue, parameterObject);
	
		return object;
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION: Query 실행 (로그)
	 * @param function
	 * @param queryId
	 * @param paramClass
	 * @param paramValue
	 * @param parameterObject
	 * @return
	 * 2015. 9. 17.
	 * </pre>
	 */
	public <T> T execQuery( String function, String queryId, Class paramClass[], 
			Object paramValue[], Object parameterObject) {
		
		T t = execQuery( function, queryId, paramClass, paramValue, parameterObject, true);
		return t;
	}
	
	
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION: Query 실행
	 * @param function
	 * @param queryId
	 * @param paramClass
	 * @param paramValue
	 * @return
	 * 2015. 9. 15.
	 * </pre>
	 */
	@SuppressWarnings("unchecked")
	public <T> T execQuery( String function, String queryId, Class paramClass[], 
								Object paramValue[], Object parameterObject, boolean bLog) {
		
		T object = null;
		String method_name = null;
		
		Map logMap = new LogMap();
		
		Class sqlClass = super.getSqlMapClientTemplate().getClass();
		
		long before_time = System.currentTimeMillis();
		try {
			
			Method method = sqlClass.getMethod(function, paramClass);
			method_name = (String)method.getName();
			
			object = (T)method.invoke(super.getSqlMapClientTemplate(), paramValue);			
		}
		catch(Exception ex) {
			
			Throwable e = ExceptionUtils.getRootCause(ex);
    		logMap.put("RSPNS_CODE", -2);
        	logMap.put("ERROR_MSSAGE", e.getLocalizedMessage());
        	
    		if( e instanceof SQLException) {
    			int rspns_code = ( (SQLException)e ).getErrorCode();
    			String errorMsg = ( (SQLException)e ).getLocalizedMessage();
    			
    			logMap.put("RSPNS_CODE", rspns_code);
            	logMap.put("ERROR_MSSAGE", errorMsg);	
    		}
    		
    		throw new NexaServiceException("err.예외상황.발생.SQL", queryId);
		}
		finally {
			
			long after_time = System.currentTimeMillis();
			
			String realSql = sqlLog(queryId,parameterObject, object );
			
			if(bLog) {      	
				Long processingTime = Long.valueOf(after_time) - Long.valueOf(before_time);
	        	logMap.put("PROCESS_SE_NM", method_name);
	        	logMap.put("PROCESS_TIME", processingTime);
	        	
	        	if("queryForList".equals(method_name)) {
	        		logMap.put("PROCESS_CO", object == null ? 0 : ((List)object).size());
	        	}
	        	else if("delete".equals(method_name) || "update".equals(method_name)) {
	        		logMap.put("PROCESS_CO", object == null ? 0 :object);
	        	}
	        	else {
	        		logMap.put("PROCESS_CO", 1);
	        	}
	        	
	        	LogFasade logSvc = LogFasade.getInstance();	
	        	
	        	logMap.put("SQL_ID", queryId);
	        	logMap.put("REQUST_SQL", realSql);
	        	
	        	logSvc.putBatchLog(this, queryId, parameterObject, logMap);
			}
    		
    	}		
	
		return object;
	}
	
	public String sqlLog(String queryID, Object paramObject, Object result) {
		
		String realSql = QueryParser.sqlParser(this, queryID, paramObject);	
		
		if(log.isDebugEnabled()) {
			
			log.debug("["+queryID +"] : " +realSql.trim());
			
			if(result == null ) return realSql;			
			/**
			if( result instanceof List )
			{
				List list = (List)result;
				if(list.size()<= 0) {
					log.debug(queryID + " Result : 결과가 없습니다. ");
					return realSql;	
				}
				
				// 헤더
				Map hdr = (Map)list.get(0);
				Set s = hdr.keySet();
				Iterator it = s.iterator();				
				StringBuffer hdrBuffer = new StringBuffer();
				hdrBuffer.append(queryID + " Header :[ ");
				while(it.hasNext())
				{	
					Object key = it.next();
					
					hdrBuffer.append(key + (it.hasNext() ? ", " : ""));
				}
				hdrBuffer.append("] ");				
				log.debug(hdrBuffer.toString());
				
				
				// result
				for(int i=0; i<list.size(); i++) {
					StringBuffer buffer = new StringBuffer();					
					Map map = (Map)list.get(i);
					
					Iterator iKey = s.iterator();
					buffer.append(queryID + " Result :[ ");
					while(iKey.hasNext())
					{	
						Object key = iKey.next();
						
						buffer.append(map.get(key) + (iKey.hasNext() ? ", " : ""));
					}
					buffer.append("]");
					
					log.debug(buffer.toString());
				}
				
				log.debug("end of " + queryID );
			}			
			else {
				StringBuffer buffer = new StringBuffer();
				buffer.append(queryID + " Result :[ " + result+ "]");
				
				log.debug(buffer.toString());
				
				log.debug("end of " + queryID );
				
			}
			*/
			
		}
		
		return realSql;
		
		
	}	
	

}
