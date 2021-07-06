package hsco.cmm.message;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.util.MetadataUtil;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: MessageMngDao.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 8. 7.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 7.					정윤원				최초생성
 * </pre>
 */

@Repository("MessageMngDao")
public class MessageMngDao extends BaseDao {

	
	/**
	 * 메세지 가져오기
	 * @param map
	 * @return
	 * @throws NexaDaoException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public List<Map> getList(Map map)  {
		
		
		
		List<Map> list = (List<Map>)list("MessageMng.getList", map);
		
		return list;
	}
}
