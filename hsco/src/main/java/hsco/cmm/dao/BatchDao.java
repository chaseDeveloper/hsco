package hsco.cmm.dao;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import egovframework.rte.psl.orm.ibatis.support.SqlMapClientDaoSupport;

import org.springframework.stereotype.Repository;

import com.ibatis.sqlmap.client.SqlMapClient;


/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: BaseDao.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 8. 5.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 5.					정윤원				최초생성
 * </pre>
 */

// SqlMapClientDaoSupport 상속받지 말아야 함.....개발 진행중이라 일단 둠.
@Repository("BatchDao")
//public class BaseDao extends SqlMapClientDaoSupport {
public class BatchDao  {
	
	@Resource(name="BatchSqlExcutor")
	protected BatchSqlExcutor sqlExcutor;
	

	protected BatchDao() {
		//
	}
	
	@SuppressWarnings("deprecation")
	public SqlMapClientDaoSupport getDao() {
		return sqlExcutor;
	}
	
	// 임시...
	@Deprecated
	@Resource(name = "batchSqlMapClient")
	public void setSuperSqlMapClient(SqlMapClient sqlMapClient) {		
		
		//super.setSqlMapClient(sqlMapClient);
		sqlExcutor.setSqlMapClient(sqlMapClient);
		
	}
	
    

    /**
     * 입력 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 입력 처리 SQL mapping 쿼리 ID
     * @return 입력 시 selectKey 를 사용하여 key 를 딴 경우 해당 key
     */
    public Object insert(String queryId) {
    	return insert(queryId, true);
    }
    
    /**
     * 입력 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 입력 처리 SQL mapping 쿼리 ID
     * @param bLog - DB에 질의 로그를 남길지 여부
     * @return 입력 시 selectKey 를 사용하여 key 를 딴 경우 해당 key
     */
    public Object insert(String queryId, boolean bLog) {
    	return sqlExcutor.execQuery( "insert", queryId, bLog);
    }
    
    /**
     * 입력 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 입력 처리 SQL mapping 쿼리 ID
     * @param parameterObject - 입력 처리 SQL mapping 입력 데이터를 세팅한 파라메터 객체(보통 VO 또는 Map)
     * @return 입력 시 selectKey 를 사용하여 key 를 딴 경우 해당 key
     */
    public Object insert(String queryId, Object parameterObject) {
    	
    	return insert(queryId, parameterObject, true);
    }

    /**
     * 입력 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 입력 처리 SQL mapping 쿼리 ID
     * @param parameterObject - 입력 처리 SQL mapping 입력 데이터를 세팅한 파라메터 객체(보통 VO 또는 Map)
     * @param bLog - DB에 질의 로그를 남길지 여부
     * @return 입력 시 selectKey 를 사용하여 key 를 딴 경우 해당 key
     */
    public Object insert(String queryId, Object parameterObject, boolean bLog) {
    	
    	return sqlExcutor.execQuery( "insert", queryId, parameterObject, bLog);
    }

    /**
     * 수정 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 수정 처리 SQL mapping 쿼리 ID
     * @return DBMS가 지원하는 경우 update 적용 결과 count
     */
    public int update(String queryId) {
    	int affectedRows = update(queryId, true); 
    	
    	return affectedRows;
    	
    }
    
    /**
     * 수정 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 수정 처리 SQL mapping 쿼리 ID
     * @param bLog - DB에 질의 로그를 남길지 여부
     * @return DBMS가 지원하는 경우 update 적용 결과 count
     */
    public int update(String queryId, boolean bLog) {
    	int affectedRows =  (Integer)sqlExcutor.execQuery( "update", queryId, bLog);
    	
    	return affectedRows;
    	
    }
    
    /**
     * 수정 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 수정 처리 SQL mapping 쿼리 ID
     * @param parameterObject - 수정 처리 SQL mapping 입력 데이터(key 조건 및 변경 데이터)를 세팅한 파라메터 객체(보통 VO 또는 Map)
     * @return DBMS가 지원하는 경우 update 적용 결과 count
     */
    public int update(String queryId, Object parameterObject) {
    	
    	int affectedRows =  update(queryId, parameterObject, true);
    	
    	return affectedRows;
    }

    /**
     * 수정 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 수정 처리 SQL mapping 쿼리 ID
     * @param parameterObject - 수정 처리 SQL mapping 입력 데이터(key 조건 및 변경 데이터)를 세팅한 파라메터 객체(보통 VO 또는 Map)
     * @param bLog - DB에 질의 로그를 남길지 여부
     * @return DBMS가 지원하는 경우 update 적용 결과 count
     */
    public int update(String queryId, Object parameterObject, boolean bLog) {
    	
    	int affectedRows =  (Integer)sqlExcutor.execQuery( "update", queryId, parameterObject, bLog);
    	
    	return affectedRows;
    }


    /**
     * 삭제 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 삭제 처리 SQL mapping 쿼리 ID
     * @return DBMS가 지원하는 경우 delete 적용 결과 count
     */
    public int delete(String queryId) {
    	
    	int affectedRows =  delete(queryId, true);
    	
    	return affectedRows;
    }
    
    /**
     * 삭제 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 삭제 처리 SQL mapping 쿼리 ID
     * @param bLog - DB에 질의 로그를 남길지 여부
     * @return DBMS가 지원하는 경우 delete 적용 결과 count
     */
    public int delete(String queryId, boolean bLog) {
    	
    	int affectedRows =  (Integer)sqlExcutor.execQuery( "delete", queryId, bLog);
    	
    	return affectedRows;
    }
    
    /**
     * 삭제 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 삭제 처리 SQL mapping 쿼리 ID
     * @param parameterObject - 삭제 처리 SQL mapping 입력 데이터(일반적으로 key 조건)를 세팅한 파라메터 객체(보통 VO 또는 Map)
     * @return DBMS가 지원하는 경우 delete 적용 결과 count
     */
    public int delete(String queryId, Object parameterObject) {
    	
    	int affectedRows =  delete(queryId, parameterObject, true);
    	
    	return affectedRows;
    }

    /**
     * 삭제 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 삭제 처리 SQL mapping 쿼리 ID
     * @param parameterObject - 삭제 처리 SQL mapping 입력 데이터(일반적으로 key 조건)를 세팅한 파라메터 객체(보통 VO 또는 Map)
     * @param bLog - DB에 질의 로그를 남길지 여부
     * @return DBMS가 지원하는 경우 delete 적용 결과 count
     */
    public int delete(String queryId, Object parameterObject, boolean bLog) {
    	
    	int affectedRows =  (Integer)sqlExcutor.execQuery( "delete", queryId, parameterObject, bLog);
    	
    	return affectedRows;
    }

    
    /**
     * 단건조회 처리 SQL mapping 을 실행한다.(로그 여부 추가)
     *
     * @param queryId - 단건 조회 처리 SQL mapping 쿼리 ID
     * @return 결과 객체 - SQL mapping 파일에서 지정한 resultClass/resultMap 에 의한 단일 결과 객체(보통 VO 또는 Map)
     */
    public Object select(String queryId) {
    	
    	Object object = select(queryId, true);
    	return object;
    }
    
    /**
     * 단건조회 처리 SQL mapping 을 실행한다.(로그 여부 추가)
     *
     * @param queryId - 단건 조회 처리 SQL mapping 쿼리 ID
     * @param bLog - DB에 질의 로그를 남길지 여부
     * @return 결과 객체 - SQL mapping 파일에서 지정한 resultClass/resultMap 에 의한 단일 결과 객체(보통 VO 또는 Map)
     */
    public Object select(String queryId, boolean bLog) {
    	
    	Object object = sqlExcutor.execQuery( "queryForObject", queryId, bLog);
    	return object;
    }

    /**
     * 단건조회 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 단건 조회 처리 SQL mapping 쿼리 ID
     * @param parameterObject - 단건 조회 처리 SQL mapping 입력 데이터(key)를 세팅한 파라메터 객체(보통 VO 또는 Map)
     * @return 결과 객체 - SQL mapping 파일에서 지정한 resultClass/resultMap 에 의한 단일 결과 객체(보통 VO 또는 Map)
     */
    public Object select(String queryId, Object parameterObject) {
    	
    	Object object = select(queryId, parameterObject, true);
    	return object;
    }
    
    /**
     * 단건조회 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 단건 조회 처리 SQL mapping 쿼리 ID
     * @param parameterObject - 단건 조회 처리 SQL mapping 입력 데이터(key)를 세팅한 파라메터 객체(보통 VO 또는 Map)
     * @param bLog - DB에 질의 로그를 남길지 여부
     * @return 결과 객체 - SQL mapping 파일에서 지정한 resultClass/resultMap 에 의한 단일 결과 객체(보통 VO 또는 Map)     * 
     */
    public Object select(String queryId, Object parameterObject, boolean bLog) {
    	
    	Object object = sqlExcutor.execQuery( "queryForObject", queryId, parameterObject, bLog);
    	return object;
    }
    

    /**
     * 리스트 조회 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 리스트 조회 처리 SQL mapping 쿼리 ID
     * @return 결과 List 객체 - SQL mapping 파일에서 지정한 resultClass/resultMap 에 의한 결과 객체(보통 VO 또는 Map)의 List
     */
	public List<?> list(String queryId) {
		
		List list = list(queryId, true);
    	return list;
    }
	
	/**
     * 리스트 조회 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 리스트 조회 처리 SQL mapping 쿼리 ID
     * @param bLog - DB에 질의 로그를 남길지 여부
     * @return 결과 List 객체 - SQL mapping 파일에서 지정한 resultClass/resultMap 에 의한 결과 객체(보통 VO 또는 Map)의 List
     */
	public List<?> list(String queryId, boolean bLog) {
		
		List list = (List)sqlExcutor.execQuery( "queryForList", queryId, bLog);
    	return list;
    }
	
	/**
     * 리스트 조회 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 리스트 조회 처리 SQL mapping 쿼리 ID
     * @param parameterObject - 리스트 조회 처리 SQL mapping 입력 데이터(조회 조건)를 세팅한 파라메터 객체(보통 VO 또는 Map)
     * @return 결과 List 객체 - SQL mapping 파일에서 지정한 resultClass/resultMap 에 의한 결과 객체(보통 VO 또는 Map)의 List
     */
	public List<?> list(String queryId, Object parameterObject) {
		
		List list = list(queryId, parameterObject, true);
    	return list;
    }

    /**
     * 리스트 조회 처리 SQL mapping 을 실행한다.
     *
     * @param queryId - 리스트 조회 처리 SQL mapping 쿼리 ID
     * @param parameterObject - 리스트 조회 처리 SQL mapping 입력 데이터(조회 조건)를 세팅한 파라메터 객체(보통 VO 또는 Map)
     * @param bLog - DB에 질의 로그를 남길지 여부
     * @return 결과 List 객체 - SQL mapping 파일에서 지정한 resultClass/resultMap 에 의한 결과 객체(보통 VO 또는 Map)의 List
     */
	public List<?> list(String queryId, Object parameterObject, boolean bLog) {
		
		List list = (List)sqlExcutor.execQuery( "queryForList", queryId, parameterObject, bLog);
    	return list;
    }
	

}

