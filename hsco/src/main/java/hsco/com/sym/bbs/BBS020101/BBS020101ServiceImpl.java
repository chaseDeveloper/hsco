package hsco.com.sym.bbs.BBS020101;

import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;
import hsco.egov.com.cmm.service.EgovFileMngService;
import hsco.egov.com.cmm.service.EgovFileMngUtil;
import hsco.egov.com.cmm.service.FileVO;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: BBS010102ServiceImpl.java
 * @Description  	: 제안게시판을 관리하는 서비스 구현체 클래스
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
@Service("BBS020101Service")
public class BBS020101ServiceImpl extends BaseService implements BBS020101Service {
	
	@Resource(name="EgovFileMngService")
	private EgovFileMngService fileMngService;	
	 
	@Resource(name="EgovFileMngUtil")
	private EgovFileMngUtil fileUtil;

	/** 제안 게시판 목록 조회*/
	@SuppressWarnings("unchecked")
	@Override
	public List<Map<String, Object>> selectProposeList(Map<String, Object> mapReqData) throws Exception {
		return (List<Map<String, Object>>) baseDao.list("BBS020101DAO.selectProposeList", mapReqData);
	}

	/** 제안 게시판 목록 카운트*/
	@Override
	public int selectProposeListCnt(Map<String, Object> mapReqData) throws Exception {
		return (int) baseDao.select("BBS020101DAO.selectProposeListCnt", mapReqData);
	}

	/**근태기 번호로 사용자 정보 조회*/
	@SuppressWarnings("unchecked")
	@Override
	public Map<String, Object> selectUserInfo(Map<String, Object> mapReqData) throws Exception {
		return (Map<String, Object>) baseDao.select("BBS020101DAO.selectUserInfo", mapReqData);
	}

	/**제안 게시판 상세 조회*/
	@SuppressWarnings("unchecked")
	@Override
	public Map<String, Object> selectProposeDetail(Map<String, Object> mapReqData) throws Exception {
		return (Map<String, Object>) baseDao.select("BBS020101DAO.selectProposeDetail", mapReqData);
	}

	/**공동제안자 목록 조회*/
	@SuppressWarnings("unchecked")
	@Override
	public List<Map<String, Object>> selectCopertnPropseList(Map<String, Object> mapReqData) throws Exception {
		return (List<Map<String, Object>>) baseDao.list("BBS020101DAO.selectCopertnPropseList", mapReqData);
	}

	/**회원정보 목록 조회*/
	@SuppressWarnings("unchecked")
	@Override
	public List<Map<String, Object>> selectUserInfoList(Map<String, Object> mapReqData) throws Exception {
		return (List<Map<String, Object>>) baseDao.list("BBS020101DAO.selectUserInfoList", mapReqData);
	}

	/**공통코드 목록 조회*/
	@SuppressWarnings("unchecked")
	@Override
	public List<Map<String, Object>> selectCmmnCodeList(Map<String, Object> mapReqData) throws Exception {
		return (List<Map<String, Object>>) baseDao.list("BBS020101DAO.selectCmmnCodeList", mapReqData);
	}

	/**제안 등록*/
	@Override
	public void insertPropose(Map<String, Object> mapReqData, MultipartHttpServletRequest multiRequest) throws Exception {
		
		//validation
		if ( checkMaxLength(String.valueOf(mapReqData.get("CNTRBT_RATE")), 3) ) {
			throw new Exception("제안자 기여도 값이 유효하지 않습니다.");
		} else if ( checkMaxLength((String)mapReqData.get("PROPSE_SJ_NM"), 60) ) {
			throw new Exception("제안명 값이 유효하지 않습니다.");
		} else if ( checkMaxLength((String)mapReqData.get("PROPSE_SUMRY_CN"), 1300) ) {
			throw new Exception("개요 유효하지 않습니다.");
		} else if ( checkMaxLength((String)mapReqData.get("PROPSE_STUS_CN"), 1300) ) {
			throw new Exception("현황 및 문제점 값이 유효하지 않습니다.");
		} else if ( checkMaxLength((String)mapReqData.get("PROPSE_METHOD_CN"), 1300) ) {
			throw new Exception("개선방안 값이 유효하지 않습니다.");
		} else if ( checkMaxLength((String)mapReqData.get("EXPC_EFFECT_CN"), 1300) ) {
			throw new Exception("기대효과 값이 유효하지 않습니다.");
		} else if ( StringUtil.isNull((String)mapReqData.get("EXPC_EFFECT_CN")) ) {
			throw new Exception("제안종류 값이 유효하지 않습니다.");
		}
		
		// 첨부파일 등록
		List<FileVO> atchFileInfList = null;
		String atchFileId = "";
		final Map<String, MultipartFile> files = multiRequest.getFileMap();
		if(!files.isEmpty()){
			atchFileInfList = fileUtil.parseFileInf(files, "PROP_", 0, "", "");
			String usrId = String.valueOf(mapReqData.get("USER_ID"));
			for (FileVO fileVO : atchFileInfList) {
				fileVO.setRegisterId(usrId);
			}
			atchFileId = fileMngService.insertFileInfs(atchFileInfList);  //파일이 생성되고나면 생성된 첨부파일 ID를 리턴한다.
			mapReqData.put("FILE_SN", atchFileId);
		}
		
		
		mapReqData.put("userId", mapReqData.get("USER_ID"));
		@SuppressWarnings("unchecked")
		Map<String, Object> mapUserInfo =  (Map<String, Object>)baseDao.select("BBS020101DAO.selectUserInfoList", mapReqData);
		mapReqData.put("DEPT_CODE", mapUserInfo.get("DEPT_CODE"));
		
		//제안정보 등록
		baseDao.insert("BBS020101DAO.insertPropose", mapReqData);
		
		String[] copertnNameList = (String[]) mapReqData.get("copertnIdArr");
		String[] copertnRateList = (String[]) mapReqData.get("copertnRateArr");
		
		if (copertnNameList != null && copertnNameList.length != 0) {
			//공동제안자 정보 셋팅 및 등록
			Map<String,Object> copertnMap = new HashMap<>();
			copertnMap.put("PROPSE_SN", mapReqData.get("PROPSE_SN"));
			copertnMap.put("REGISTER_ID", mapReqData.get("USER_ID"));
			
			int leng = copertnNameList.length;
			for (int i = 0 ; i < leng ; i++ ) {
				//기여도 값 유효성 체크
				if ( checkMaxLength(copertnRateList[i], 3) ) {
					throw new Exception("공동제안자 기여도 값이 유효하지 않습니다.");
				}
				
				copertnMap.put("USER_ID", copertnNameList[i]);
				copertnMap.put("CNTRBT_RATE", copertnRateList[i]);
				baseDao.insert("BBS020101DAO.insertCopertnPropse", copertnMap);
			}
		}
		
		
	}
	
	/**제안 삭제*/
	@Override
	public void deletePropose(Map<String, Object> mapReqData) throws Exception {
		baseDao.delete("BBS020101DAO.deleteCopertnPropseAll", mapReqData); //공동제안자 정보 전체 삭제
		baseDao.delete("BBS020101DAO.deleteProposeBbsVoteAll", mapReqData); //제안공모 투표 전체 삭제
		baseDao.delete("BBS020101DAO.deleteProposeBbsReplyVoteAll", mapReqData); //제안공모 댓글 투표 전체 삭제
		baseDao.delete("BBS020101DAO.deleteProposeBbsReplyAll", mapReqData); //제안공모 댓글 전체 삭제
		baseDao.delete("BBS020101DAO.deletePropose", mapReqData); //제안공모 정보 삭제
		
	}
	/** string 값이 null 이 아닌지, maxLength 값보다 작은지 체크*/
	public boolean checkMaxLength(String str, int maxLength) {
		if (!StringUtil.isNull(str) && str.length() > maxLength) {
			return true;
		}
		return false;
	}
	
	/**
	 * 제안게시판 덧글 목록 조회
	 * @param mapReqData
	 * @return List<Map>
	 * @throws Exception
	 */ 
	@SuppressWarnings("unchecked")
	public List<Map<String, Object>> selectProposeBbsReplyList(Map<String, Object> mapReqData) throws Exception {
		return (List<Map<String, Object>>) baseDao.list("BBS020101DAO.selectProposeBbsReplyList", mapReqData);
	}
	
	/**
	 * 제안게시판 투표 등록
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void insertProposeBbsVote(Map<String, Object> mapReqData) throws Exception {
		baseDao.insert("BBS020101DAO.insertProposeBbsVote", mapReqData);
	}
	
	/**
	 * 제안게시판 투표 삭제
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void deleteProposeBbsVote(Map<String, Object> mapReqData) throws Exception {
		baseDao.delete("BBS020101DAO.deleteProposeBbsVote", mapReqData);
	}
	
	/**
	 * 제안게시판 댓글 등록
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void insertProposeBbsReply(Map<String, Object> mapReqData) throws Exception {
		baseDao.insert("BBS020101DAO.insertProposeBbsReply", mapReqData);
	}
	
	/**
	 * 제안게시판 댓글 투표 삭제
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void deleteProposeBbsReplyVoteAll(Map<String, Object> mapReqData) throws Exception {
		baseDao.delete("BBS020101DAO.deleteProposeBbsReplyVoteAll", mapReqData);
	}
	
	/**
	 * 제안게시판 댓글 삭제
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void deleteProposeBbsReply(Map<String, Object> mapReqData) throws Exception {
		baseDao.delete("BBS020101DAO.deleteProposeBbsReply", mapReqData);
	}
	
	/**
	 * 제안게시판 댓글 삭제
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void updateProposeBbsReply(Map<String, Object> mapReqData) throws Exception {
		baseDao.update("BBS020101DAO.updateProposeBbsReply", mapReqData);
	}
	
	/**
	 * 제안게시판 댓글 투표 등록
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void insertProposeBbsReplyVote(Map<String, Object> mapReqData) throws Exception {
		baseDao.insert("BBS020101DAO.insertProposeBbsReplyVote", mapReqData);
	}
	
	/**
	 * 제안게시판 댓글 투표 삭제
	 * @param mapReqData
	 * @return Map
	 * @throws Exception
	 */
	public void deleteProposeBbsReplyVote(Map<String, Object> mapReqData) throws Exception {
		baseDao.delete("BBS020101DAO.deleteProposeBbsReplyVote", mapReqData);
	}
}
