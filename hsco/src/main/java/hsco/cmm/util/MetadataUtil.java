package hsco.cmm.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import egovframework.rte.psl.orm.ibatis.SqlMapClientTemplate;
import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.ria.nexacro.NexacroConstant;

import com.ibatis.sqlmap.engine.impl.SqlMapClientImpl;
import com.ibatis.sqlmap.engine.mapping.parameter.ParameterMap;
import com.ibatis.sqlmap.engine.mapping.parameter.ParameterMapping;
import com.ibatis.sqlmap.engine.mapping.sql.Sql;
import com.ibatis.sqlmap.engine.mapping.statement.MappedStatement;
import com.ibatis.sqlmap.engine.scope.SessionScope;
import com.ibatis.sqlmap.engine.scope.StatementScope;


public class MetadataUtil {
	
    private static Logger logger = LoggerFactory.getLogger(MetadataUtil.class);
 
	@SuppressWarnings({ "finally", "unchecked" })
	public static List<Map<String, Object>> getListMetadata(SqlMapClientTemplate sqlMapClientTemplate, String queryId, Map map) throws NexaDaoException{
		
		List<Map<String, Object>> listMetadata = new ArrayList<Map<String, Object>>();
		
		PreparedStatement ps = null;
		Connection conn = null;
		ResultSet resultSet = null;
		
		try{ 
			
			Sql sql ;
			
			SqlMapClientImpl sqlMapClientImpl;
			MappedStatement mappedStatement;
			StatementScope statementScope;
			SessionScope sessionScope;
			ParameterMap paramMap;
			String strSql;
			//List<String> paramList = new ArrayList<String>();
			
			//ibatis에서 sqlMapClient인터페이스 구현체는 sqlMapClientImpl 밖에 없음(다운캐스팅)
			sqlMapClientImpl = (SqlMapClientImpl)sqlMapClientTemplate.getSqlMapClient();
			//sqlmap statement 객체
			mappedStatement = sqlMapClientImpl.getMappedStatement(queryId);
			
			//ThreadLocal를 통해서 세션을 정의
			sessionScope = new SessionScope();
			statementScope = new StatementScope(sessionScope);
			//다이나믹 쿼리가 적용
			mappedStatement.initRequest(statementScope);
			
			//sql을 추출
			sql = mappedStatement.getSql();
			strSql = sql.getSql(statementScope, map);
			paramMap = sql.getParameterMap(statementScope, map);
			
			if(logger.isDebugEnabled()){
				logger.debug("======================="+strSql);
			}
			
			conn = sqlMapClientTemplate.getDataSource().getConnection();
			ps = conn.prepareStatement(strSql);
			
			@SuppressWarnings("rawtypes")
			List strArry = new ArrayList();
			for(ParameterMapping param : paramMap.getParameterMappings()) {
//				if(logger.isDebugEnabled()){
//					logger.debug("## param.getPropertyName = "+param.getPropertyName());
//					//paramList.add(param.getPropertyName());
//				}
				strArry.add((String)map.get(param.getPropertyName()));
			}
			paramMap.setParameters(statementScope, ps, strArry.toArray());
			
			
			resultSet = ps.executeQuery();
			ResultSetMetaData metaData = resultSet.getMetaData();
			int columnCount = metaData.getColumnCount();
			
			Map<String, Object> mapData = new HashMap<String, Object>();
			mapData.put(NexacroConstant.ONLY_METADATA_RETURN, NexacroConstant.ONLY_METADATA_RETURN);
			for (int i = 1; i <= columnCount; i++) {
				mapData.put(metaData.getColumnName(i), metaData.getColumnType(i));
			}
			listMetadata.add(mapData);
		}catch(RuntimeException e){	
			throw new NexaDaoException("RuntimeException : " + e.getMessage());
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			
			
			try { resultSet.close(); } catch(Exception pe) { pe.printStackTrace();} 	// ignore
			try { ps.close(); } catch(Exception pe) { pe.printStackTrace();} 	// ignore
			try { conn.close(); } catch(Exception pe) { pe.printStackTrace();} 	// ignore
			
				
			
			return listMetadata;
		}
	}
}