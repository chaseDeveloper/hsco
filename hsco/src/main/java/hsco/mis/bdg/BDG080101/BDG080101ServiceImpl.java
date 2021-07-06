package hsco.mis.bdg.BDG080101;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.security.cipher.sha.Sha256Cipher;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
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
* &#64;Class Name   	: BDG080101ServiceImpl.java
* &#64;Description  	: 제안공모 정보를 관리하는 서비스 구현체 클래스
* &#64;author       	: 권재만
* &#64;since        	: 2020. 8. 25.
* &#64;version      	: 1.0
* &#64;see          	: 
* &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
* <pre>
* ------------------------------------------------------------------
* Modification Information 
* ------------------------------------------------------------------
*   작성일                        작성자                내용
* ------------------------------------------------------------------
 *  2020. 8. 25.                  권재만               최초생성
 * </pre>
 */

@Service("BDG080101Service")
public class BDG080101ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(BDG080101ServiceImpl.class);

	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;

	/**
	 * 제안공모 목록 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPropsePssrpManage(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>) baseDao.list("BDG080101DAO.selectPropsePssrpManage", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);

	}
	
	/**
	 * 공동제안자 목록 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCopertnPropseManage(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>) baseDao.list("BDG080101DAO.selectCopertnPropseManage", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);

	}

	/**
	 * 제안공모, 공동제안자 정보 저장
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public void savePropsePssrpManage(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		//제안공모 정보(list1)
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		int listSize1 = (list1 == null) ? 0 : list1.size();
		
		//공동제안자 정보(list2)
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		int listSize2 = (list2 == null) ? 0 : list2.size();
		
		int propseSn = 0;
		if (listSize1 > 0) {
			//제안공모 삭제 선처리
			for (int x = 0; x < listSize1; x++) {
				Map map = list1.get(x);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				switch (rowType) {
				case DataSet.ROW_TYPE_DELETED:
					 baseDao.delete("BDG080101DAO.deleteCopertnPropseManage", map); //공동제안자 정보 전체삭제
					 baseDao.delete("BDG080101DAO.deleteProposeBbsVote", map); //제안공모 투표 전체 삭제
					 baseDao.delete("BDG080101DAO.deleteProposeBbsReplyVote", map); //제안공모 댓글 투표 전체 삭제
					 baseDao.delete("BDG080101DAO.deleteProposeBbsReply", map); //제안공모 댓글 전체 삭제
					 baseDao.delete("BDG080101DAO.deletePropsePssrpManage", map); //제안공모 정보 삭제
					break;
				default:
					break;
				}
			}
			//제안공모  등록, 수정
			for (int x = 0; x < listSize1; x++) {
				Map map = list1.get(x);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				String lastRowAt = "";
				if(map.get("LAST_ROW_AT") != null){
					lastRowAt = map.get("LAST_ROW_AT").toString();//공동제안자(sub) 데이터 신규 추가 Row 판별
				}
				switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if("Y".equals(lastRowAt)){ 
						propseSn = (int)baseDao.insert("BDG080101DAO.insertPropsePssrpManage", map);//제안공모 정보 등록
					}else{
						baseDao.insert("BDG080101DAO.insertPropsePssrpManage", map);//제안공모 정보 등록
					}
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("BDG080101DAO.updatePropsePssrpManage", map); //제안공모 정보 수정
					break;
				default:
					break;
				}
			}
		}
		
		if(listSize2 > 0){
			//공동 제안자 삭제 선처리
			for (int x = 0; x < listSize2; x++) {
				Map map = list2.get(x);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				switch (rowType) {
				case DataSet.ROW_TYPE_DELETED:
					 baseDao.delete("BDG080101DAO.deleteCopertnPropseManage", map); //공동제안자 정보 삭제
					break;
				default:
					break;
				}
			}
			
			//공동 제안자  등록, 수정
			for (int x = 0; x < listSize2; x++) {
				Map map = list2.get(x);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				
				switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (map.get("PROPSE_SN") == null)
						map.put("PROPSE_SN", propseSn);
					baseDao.insert("BDG080101DAO.insertCopertnPropseManage", map); //제안공모 정보 등록
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("BDG080101DAO.updateCopertnPropseManage", map); //제안공모 정보 수정
					break;
				default:
					break;
				}
			}
		}
		
	}
}