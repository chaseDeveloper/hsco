package hsco.com.sym.not.SYM100300;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.security.cipher.sha.Sha256Cipher;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

/**
 * <pre>
* &#64;Project Name 	: 화성도시공사 차세대정보시스템
* &#64;Class Name   	: SYM100300ServiceImpl.java
* &#64;Description  	: 익명게시판을 관리하는 서비스 구현체 클래스
* &#64;author       	: 권재만
* &#64;since        	: 2020. 6. 25.
* &#64;version      	: 1.0
* &#64;see          	: 
* &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
* <pre>
* ------------------------------------------------------------------
* Modification Information 
* ------------------------------------------------------------------
*   작성일                        작성자                내용
* ------------------------------------------------------------------
 * 
 * </pre>
 */

@Service("SYM100300Service")
public class SYM100300ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(SYM100300ServiceImpl.class);

	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;

	/**
	 * 익명게시판 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAnonyMousBbs(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>) baseDao.list("SYM100300DAO.selectAnonyMousBbs", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);

	}

	/**
	 * 익명게시판 저장
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public int saveAnonyMousBbs(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		String encSUerId = "";
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		
		String sUserId = ObjectUtil.getSessionObj("S_USER_ID").toString();
		try {
			encSUerId = Sha256Cipher.encrypt(sUserId, null);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		if (listSize > 0) {
			
			//삭제 선처리
			for (int x = 0; x < listSize; x++) {
				Map map = list.get(x);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				String depth = map.get("DEPTH").toString();
				switch (rowType) {
				case DataSet.ROW_TYPE_DELETED:
					if("1".equals(depth)){ //게시물 삭제
						iRow += baseDao.delete("SYM100300DAO.deleteAnonymousBbsReplyVoteAll", map); //댓글투표 전체삭제
						iRow += baseDao.delete("SYM100300DAO.deleteAnonymousBbsReplyAll", map);  //댓글 전체삭제
						iRow += baseDao.delete("SYM100300DAO.deleteAnonymousBbsVoteAll", map);   //게시물투표 전체삭제
						iRow += baseDao.delete("SYM100300DAO.deleteAnonymousBbs", map); //게시물삭제
					}else{ //댓글 삭제
						iRow += baseDao.delete("SYM100300DAO.deleteAnonymousBbsReplyVote", map); //댓글투표삭제
						iRow += baseDao.delete("SYM100300DAO.deleteAnonymousBbsReply", map);     //댓글삭제
					}
					break;
				default:
					break;
				}
			}
			
			//등록, 수정
			for (int x = 0; x < listSize; x++) {
				Map map = list.get(x);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				String depth = map.get("DEPTH").toString();
				map.put("DISC_VALUE", encSUerId);
				switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if("1".equals(depth)){ //게시물 등록
						baseDao.insert("SYM100300DAO.insertAnonymousBbs", map);
					}else{ //댓글 등록
						baseDao.insert("SYM100300DAO.insertAnonymousBbsReply", map);
					}
					break;
				case DataSet.ROW_TYPE_UPDATED:
					if("1".equals(depth)){ //게시물 수정
						baseDao.update("SYM100300DAO.updateAnonymousBbs", map);
					}else{ //댓글 수정
						baseDao.update("SYM100300DAO.updateAnonymousBbsReply", map);
					}
					break;
				default:
					break;
				}
			}
		}

		return iRow;

	}
}