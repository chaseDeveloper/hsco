package hsco.com.sym.bbs.BBS010101;

import hsco.cmm.service.BaseService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: BBS010101ServiceImpl.java
 * @Description  	: 익명게시판을 관리하는 서비스 구현체 클래스
 * @author       	: 김형태
 * @since        	: 2020.06.16
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2020.06.16					김형태				최초생성
 *  2020.06.17					권재만				실기능작업진행
 * </pre>  
 */
@Service("BBS010101Service")
public class BBS010101ServiceImpl extends BaseService implements BBS010101Service {
	
	protected Logger log = LoggerFactory.getLogger(BBS010101ServiceImpl.class);
	
	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;
	
	/**
	 * 익명게시판 목록 총건수 조회
	 * @param mapReqData
	 * @return List<Map>
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public int selectAnonymousBbsListCnt(Map<String, Object> mapReqData) throws Exception {
		return (int)baseDao.select("BBS010101DAO.selectAnonymousBbsListCnt", mapReqData);
	}
	
	/**
	 * 익명게시판 목록 조회
	 * @param mapReqData
	 * @return List<Map>
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<HashMap<String, Object>> selectAnonymousBbsList(Map<String, Object> mapReqData) throws Exception {
		return (List<HashMap<String, Object>>) baseDao.list("BBS010101DAO.selectAnonymousBbsList", mapReqData);
	}
	
	/**
	 * 익명게시판 수정(조회수)
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public void updateAnonymousBbsInqireCo(Map<String, Object> mapReqData) throws Exception {
		baseDao.update("BBS010101DAO.updateAnonymousBbsInqireCo", mapReqData);
	}
	
	/**
	 * 익명게시판 상세조회
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public HashMap<String, Object> selectAnonymousBbsView(Map<String, Object> mapReqData) throws Exception {
		return (HashMap<String, Object>)baseDao.select("BBS010101DAO.selectAnonymousBbsView", mapReqData);
	}
	
	/**
	 * 익명게시판 덧글 목록 조회
	 * @param mapReqData
	 * @return List<Map>
	 * @throws Exception
	 */ 
	@SuppressWarnings("unchecked")
	public List<HashMap<String, Object>> selectAnonymousBbsReplyList(Map<String, Object> mapReqData) throws Exception {
		return (List<HashMap<String, Object>>) baseDao.list("BBS010101DAO.selectAnonymousBbsReplyList", mapReqData);
	}
	
	/**
	 * 익명게시판 등록
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void insertAnonymousBbs(Map<String, Object> mapReqData) throws Exception {
		baseDao.insert("BBS010101DAO.insertAnonymousBbs", mapReqData);
	}
	
	/**
	 * 익명게시판 투표 등록
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void insertAnonymousBbsVote(Map<String, Object> mapReqData) throws Exception {
		baseDao.insert("BBS010101DAO.insertAnonymousBbsVote", mapReqData);
	}
	
	/**
	 * 익명게시판 투표 삭제
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void deleteAnonymousBbsVote(Map<String, Object> mapReqData) throws Exception {
		baseDao.delete("BBS010101DAO.deleteAnonymousBbsVote", mapReqData);
	}
	
	/**
	 * 익명게시판 댓글 등록
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void insertAnonymousBbsReply(Map<String, Object> mapReqData) throws Exception {
		baseDao.insert("BBS010101DAO.insertAnonymousBbsReply", mapReqData);
	}
	
	/**
	 * 익명게시판 댓글 투표 삭제
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void deleteAnonymousBbsReplyVoteAll(Map<String, Object> mapReqData) throws Exception {
		baseDao.delete("BBS010101DAO.deleteAnonymousBbsReplyVoteAll", mapReqData);
	}
	
	/**
	 * 익명게시판 댓글 삭제
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void deleteAnonymousBbsReply(Map<String, Object> mapReqData) throws Exception {
		baseDao.delete("BBS010101DAO.deleteAnonymousBbsReply", mapReqData);
	}
	
	/**
	 * 익명게시판 댓글 삭제
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void updateAnonymousBbsReply(Map<String, Object> mapReqData) throws Exception {
		baseDao.update("BBS010101DAO.updateAnonymousBbsReply", mapReqData);
	}
	
	/**
	 * 익명게시판 댓글 투표 등록
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void insertAnonymousBbsReplyVote(Map<String, Object> mapReqData) throws Exception {
		baseDao.insert("BBS010101DAO.insertAnonymousBbsReplyVote", mapReqData);
	}
	
	/**
	 * 익명게시판 댓글 투표 삭제
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void deleteAnonymousBbsReplyVote(Map<String, Object> mapReqData) throws Exception {
		baseDao.delete("BBS010101DAO.deleteAnonymousBbsReplyVote", mapReqData);
	}
}
