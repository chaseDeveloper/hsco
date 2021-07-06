package hsco.mis.ctr.CTR010101_P01;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.ibatis.sqlmap.client.SqlMapClient;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;
import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.util.MetadataUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: Sal010101DAO.java
 * @Description  	: 호봉테이블을 관리하는 DAO 클래스 
 * @author       	: 이동석
 * @since        	: 2015. 06. 08.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 06. 08.					이동석				최초생성
 * </pre>  
 */

@Repository("ctr010101_P01DAO")
public class CTR010101_P01DAO extends EgovAbstractDAO {
	/** Log 생성*/
    private final Logger log = LoggerFactory.getLogger(this.getClass());
    
    @Resource(name="sqlMapClient")
	public void initDAO(SqlMapClient sqlMapClient){
		setSqlMapClient(sqlMapClient);
	}

	
	
	@SuppressWarnings({ "deprecation", "rawtypes" })
	public List selectBcnchist(Map map) throws NexaDaoException{
		
		List list = new ArrayList();
		list = getSqlMapClientTemplate().queryForList("CTR010101_P01DAO.selectBcnchist", map);
		if(list.size() == 0)
			list = MetadataUtil.getListMetadata(getSqlMapClientTemplate(), "CTR010101_P01DAO.selectBcnchist", map);
		
		return list;
	}
	
	@SuppressWarnings({ "deprecation", "rawtypes" })
	public List selectBcnchist1(Map map) throws NexaDaoException{
		
		List list = new ArrayList();
		list = getSqlMapClientTemplate().queryForList("CTR010101_P01DAO.selectBcnchist1", map);
		if(list.size() == 0)
			list = MetadataUtil.getListMetadata(getSqlMapClientTemplate(), "CTR010101_P01DAO.selectBcnchist1", map);
		
		return list;
	}
	
	
	@SuppressWarnings({ "deprecation", "rawtypes" })
	public void BcnchistC(Map map) throws NexaDaoException{
		getSqlMapClientTemplate().insert("CTR010101_P01DAO.BcnchistC", map);
		
	}
	
	@SuppressWarnings({ "deprecation", "rawtypes" })
	public void BcnchistC1(Map map) throws NexaDaoException{
		getSqlMapClientTemplate().update("CTR010101_P01DAO.BcnchistC1", map);
		
	}
	
	
	@SuppressWarnings({ "deprecation", "rawtypes" })
	public void BcnchistU(Map map) throws NexaDaoException{
		getSqlMapClientTemplate().update("CTR010101_P01DAO.BcnchistU", map);
		
	}
	
	@SuppressWarnings({ "deprecation", "rawtypes" })
	public void BcnchistD(Map map) throws NexaDaoException{
		getSqlMapClientTemplate().delete("CTR010101_P01DAO.BcnchistD", map);
		
	}

}
