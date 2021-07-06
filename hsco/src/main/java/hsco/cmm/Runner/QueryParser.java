package hsco.cmm.Runner;

import egovframework.rte.psl.orm.ibatis.support.SqlMapClientDaoSupport;

import com.ibatis.sqlmap.engine.impl.SqlMapClientImpl;
import com.ibatis.sqlmap.engine.mapping.parameter.ParameterMap;
import com.ibatis.sqlmap.engine.mapping.sql.Sql;
import com.ibatis.sqlmap.engine.mapping.statement.MappedStatement;
import com.ibatis.sqlmap.engine.scope.SessionScope;
import com.ibatis.sqlmap.engine.scope.StatementScope;

public class QueryParser {
	
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:SQL Query 파싱
	 * @param dao
	 * @param queryID
	 * @param paramObject
	 * @return
	 * 2015. 9. 17.
	 * </pre>
	 */
	public static String sqlParser( SqlMapClientDaoSupport dao, String queryID, Object paramObject ) {
		
		 
		SqlMapClientImpl sqlMapClientImpl = (SqlMapClientImpl)dao.getSqlMapClientTemplate().getSqlMapClient();
		
		MappedStatement mappedStatement = sqlMapClientImpl.getMappedStatement(queryID);
		
		SessionScope sessionScope = new SessionScope();
		StatementScope statementScope = new StatementScope(sessionScope);
		mappedStatement.initRequest(statementScope);
		
		Sql sql = mappedStatement.getSql();
		ParameterMap paramMap = sql.getParameterMap(statementScope, paramObject);
		statementScope.setParameterMap(paramMap);
		Object[] parameters = paramMap.getParameterObjectValues(statementScope, paramObject);
		
		String strSql = sql.getSql(statementScope, paramObject);
		
//		String realSql = sqlMapping(replaceAll(strSql, "  ", " "), parameters);
		String realSql = sqlMapping(strSql, parameters);
		
		return realSql;
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:SQL 파라미터맵에 값을 Query에 맵핑, $ 는 사용하지 않음.
	 * @param inString
	 * @param parameters
	 * @return
	 * 2015. 9. 17.
	 * </pre>
	 */
	private static String sqlMapping(String inString , Object[] parameters) {
		String sqlMappingStr = "";
		if( inString == null){
			sqlMappingStr = "";
		} else if("".equals(inString)){
			sqlMappingStr = "";
	    } else {
		    StringBuilder sb = new StringBuilder();
		    int pos = 0;
		    int index = inString.indexOf("?");
		    // 
		    int patLen = "?".length();
		    
		    int i = 0;
		    while (index >= 0) {
		    	sb.append(inString.substring(pos, index));
		    	
		    	Object object = parameters[i];
		    	
		    	if( object == null )
		    		sb.append("null");
		    	else if( object instanceof String)
		    		sb.append("'" + parameters[i].toString() + "'");
		    	else
		    		sb.append(parameters[i].toString());
		    	
		    	pos = index + patLen;
		    	index = inString.indexOf("?", pos);
		    	
		    	i++;
		    }		
		    
		    sb.append(inString.substring(pos));
		    sqlMappingStr = sb.toString();
	    }
		return sqlMappingStr;
		
	}
	

	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:특정문자열을 지정 문자열로 모두 변환(재귀처리)
	 * @param strSql
	 * @param parameters
	 * @return
	 * 2015. 9. 14.
	 * </pre>
	 */
	private static String replaceAll(String inString , String before, String after) {
		
		String realSql = null;
		
		if(inString == null || inString.length() <= 0)
			return inString;
		
		StringBuffer rtn = new StringBuffer();
		
		int from_idx = 0;
		int to_idx = 0;
		while ((to_idx = inString.indexOf(before, from_idx)) >= 0)
		{
			
			rtn.append(inString.substring(from_idx, to_idx));
			
			rtn.append(after.toString());
			
			from_idx = to_idx + before.length();
		}
		
		if (from_idx == 0)
			rtn.append(inString);
		else if (from_idx < inString.length())
			rtn.append(inString.substring(from_idx));
		
		realSql =  rtn.toString();
		
		if(from_idx > 0) {
			realSql = replaceAll(rtn.toString() , before, after) ;
		}
		
		return realSql;
	}

}
