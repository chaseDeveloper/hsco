package hsco.com.sym.bbs.BBS020101;

import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartHttpServletRequest;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: BBS010102Service.java
 * @Description  	: 제안 게시판을 관리하는 서비스
 * @author       	: 이유리
 * @since        	: 2020.08.25
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일						 작성자				내용
 * ------------------------------------------------------------------
 *  2020.08.25					이유리				최초생성
 * </pre>  
 */
public interface BBS020101Service {

	/**
	 * 제안 게시판 목록 조회
	 * @param mapReqData
	 * @return
	 * @throws Exception
	 */
	List<Map<String,Object>> selectProposeList(Map<String, Object> mapReqData) throws Exception;
	
	/**
	 * 제안 게시판 목록 카운트
	 * @param mapReqData
	 * @return
	 * @throws Exception
	 */
	int selectProposeListCnt(Map<String, Object> mapReqData) throws Exception;
	
	/** 
	 * 근태기 번호로 사용자 정보 조회
	 * @param mapReqData
	 * @return
	 * @throws Exception
	 */
	Map<String,Object> selectUserInfo(Map<String,Object> mapReqData) throws Exception;
	
	/**
	 * 제안 게시판 상세 조회
	 * @param mapReqData
	 * @return
	 * @throws Exception
	 */
	Map<String,Object> selectProposeDetail(Map<String,Object> mapReqData) throws Exception;
	
	/**
	 * 회원정보 목록 조회
	 *  - userId 있으면 해당 회원정보만, 없으면 전체 사용자 조회
	 * @param mapReqData
	 * @return
	 * @throws Exception
	 */
	List<Map<String,Object>> selectUserInfoList(Map<String, Object> mapReqData) throws Exception;
	
	/**
	 * 공동제안자 목록 조회
	 * @param mapReqData
	 * @return
	 * @throws Exception
	 */
	List<Map<String,Object>> selectCopertnPropseList(Map<String, Object> mapReqData) throws Exception;
	
	/**
	 * 공통코드 조회
	 * @param mapReqData
	 * @return
	 * @throws Exception
	 */
	List<Map<String,Object>> selectCmmnCodeList(Map<String, Object> mapReqData) throws Exception;
	
	/**
	 * 제안 등록
	 * @param mapReqData
	 * @throws Exception
	 */
	void insertPropose (Map<String, Object> mapReqData, MultipartHttpServletRequest multiRequest) throws Exception;
	
	/**
	 * 제안 삭제
	 * @param mapReqData
	 * @throws Exception
	 */
	void deletePropose (Map<String, Object> mapReqData) throws Exception;
	
	/**
	 * 익명게시판 댓글 목록조회
	 * @param mapReqData
	 * @return
	 * @throws Exception
	 */
	List<Map<String,Object>> selectProposeBbsReplyList(Map<String, Object> mapReqData) throws Exception;
	
	/**
	 * 익명게시판 투표 등록
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	void insertProposeBbsVote(Map<String, Object> mapReqData) throws Exception;
	
	/**
	 * 익명게시판 투표 삭제
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	void deleteProposeBbsVote(Map<String, Object> mapReqData) throws Exception;
	
	/**
	 * 익명게시판 댓글 등록
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	void insertProposeBbsReply(Map<String, Object> mapReqData) throws Exception;
	
	/**
	 * 익명게시판 댓글 투표 삭제
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	void deleteProposeBbsReplyVoteAll(Map<String, Object> mapReqData) throws Exception;
	
	/**
	 * 익명게시판 댓글 삭제
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	void deleteProposeBbsReply(Map<String, Object> mapReqData) throws Exception;
	
	/**
	 * 익명게시판 댓글 삭제
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	void updateProposeBbsReply(Map<String, Object> mapReqData) throws Exception;
	
	/**
	 * 익명게시판 댓글 투표 등록
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	void insertProposeBbsReplyVote(Map<String, Object> mapReqData) throws Exception;
	
	/**
	 * 익명게시판 댓글 투표 삭제
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	void deleteProposeBbsReplyVote(Map<String, Object> mapReqData) throws Exception;
}
