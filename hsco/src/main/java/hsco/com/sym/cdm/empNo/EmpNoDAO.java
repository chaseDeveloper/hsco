package hsco.com.sym.cdm.empNo;

import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.util.MetadataUtil;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.ibatis.sqlmap.client.SqlMapClient;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: EmpNoDAO.java
 * @Description  	: 사원조회
 * @author       	: 이동석
 * @since        	: 2015. 6. 23.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 23.					이동석				최초생성
 * </pre>
 */

@Repository("EmpNoDAO")
public class EmpNoDAO extends EgovAbstractDAO {
	@SuppressWarnings("unused")
	private final Logger log = LoggerFactory.getLogger(this.getClass());

	@SuppressWarnings("deprecation")
	@Resource(name = "sqlMapClient")
	public void initDAO(SqlMapClient sqlMapClient) {
		setSqlMapClient(sqlMapClient);
	}

	@SuppressWarnings({ "deprecation", "rawtypes" })
	public List selectEmpnoList(Map map) throws NexaDaoException {
		List list = getSqlMapClientTemplate().queryForList("EmpNoDAO.selectEmpnoList", map);
		if (list.size() == 0) {
			list = MetadataUtil.getListMetadata(getSqlMapClientTemplate(), "EmpNoDAO.selectEmpnoList", map);
		}

		return list;
	}

}
