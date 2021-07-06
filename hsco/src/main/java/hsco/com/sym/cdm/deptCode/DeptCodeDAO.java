package hsco.com.sym.cdm.deptCode;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;
import hsco.cmm.exception.NexaDaoException;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: deptCodeDAO.java
 * @Description  	: 부서조회
 * @author       	: 정윤원
 * @since        	: 2015. 7. 14.
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
 *  2015. 7. 14.                   정윤원                최초생성
 * </pre>
 */

@Repository("deptCodeDAO")
public class DeptCodeDAO extends EgovAbstractDAO {

    @SuppressWarnings("unused")
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "deprecation", "rawtypes" })
    public List selectDeptCode(Map map) throws NexaDaoException {
        return getSqlMapClientTemplate().queryForList("DeptCodeDAO.selectDeptCode", map);
    }

}
