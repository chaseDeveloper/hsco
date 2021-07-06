package hsco.pms.prj.PRJ010119;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ010119ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2017. 11. 14.
 * @version      	: 1.0
 * @see          	:
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 11. 14.                  김형태              최초생성
 * </pre>
 */

@Service("PRJ010119Service")
public class PRJ010119ServiceImpl extends BaseService {

	protected Logger	log	= LoggerFactory.getLogger(this.getClass());

	// 조회(계약정보, 준공검사)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCompetInspct(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		// 계약정보
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("PRJ010119DAO.selectCntrct", inMap));
		outDataset.put("output1", outDsMap1);

		// 준공검사
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("PRJ010119DAO.selectCompetInspct", inMap));
		outDataset.put("output2", outDsMap2);
	}

	// 상세조회(검사자명단, 첨부파일)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectInsptrList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		// 검사자명단
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("PRJ010119DAO.selectInsptrList", inMap));
		outDataset.put("output1", outDsMap1);

		// 첨부파일
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("PRJ010119DAO.selectCtgryFile", inMap));
		outDataset.put("output2", outDsMap2);
	}
	
	// 파일 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCtgryFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010119DAO.selectCtgryFile", inMap));
		outDataset.put("output1", outDsMap);
	}

	// 저장
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		// 준공검사
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		String nextCcwAdtgSn = null;
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				nextCcwAdtgSn = (String) baseDao.select("PRJ010119DAO.selectCcwAdtgSn", map);
				map.put("CCW_ADTG_SN", nextCcwAdtgSn);
				baseDao.insert("PRJ010119DAO.insertCompetInspct", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("PRJ010119DAO.updateCompetInspct", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				// 첨부파일삭제(실제 첨부파일은 보류)
				if (!StringUtil.isNull((String)map.get("CTGRY_FILE_ID"))) {
					baseDao.delete("PRJ010119DAO.deleteCtgryFile", map);	// 자료분류체계 삭제
					baseDao.delete("PRJ010119DAO.deleteDocRgs", map);		// 문서 삭제
				}
				
				baseDao.delete("PRJ010119DAO.deleteInsptrAll", map);
				baseDao.delete("PRJ010119DAO.deleteCompetInspct", map);
				break;
			}
		}
		
		// 검사자명단
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			String ccwAdtgSn = (String) map.get("CCW_ADTG_SN");
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				// 준공검사일련번호 값이 없고, 다음준공검사일련번호 값이 있을 경우 해당 값으로 교체
				if("".equals(ccwAdtgSn) || ccwAdtgSn == null) {
					if(nextCcwAdtgSn != null) {
						map.put("CCW_ADTG_SN", nextCcwAdtgSn);
					}
				}
				baseDao.insert("PRJ010119DAO.insertInsptr", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("PRJ010119DAO.updateInsptr", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("PRJ010119DAO.deleteInsptr", map);
				break;
			}
		}
	}
	
	// 첨부파일 수정사항 저장
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveCtgryFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		List<Map> resultList = new ArrayList<Map>();
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
				case DataSet.ROW_TYPE_UPDATED:
					String ctgryFileId = (String) map.get("CTGRY_FILE_ID");
					if (StringUtils.isEmpty(ctgryFileId) || "".equals(ctgryFileId)) {
						ctgryFileId = (String) baseDao.select("PRJ010119DAO.getCtgryFileId", map);
						map.put("CTGRY_FILE_ID", ctgryFileId);
						baseDao.insert("PRJ010119DAO.insertCtgryFile", map);
						
						String docSn = (String) map.get("DOC_SN");
						if (StringUtils.isEmpty(docSn) || "".equals(docSn)) {
							docSn = (String) baseDao.select("PRJ010119DAO.getDocSn", map);
							map.put("DOC_SN", docSn);
							baseDao.update("PRJ010119DAO.updateDocSn", map);		// 문서번호 갱신(부모테이블)
						}
						baseDao.insert("PRJ010119DAO.insertDocRgs", map);		// 문서 등록 추가
					}
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("PRJ010119DAO.deleteCtgryFile", map);
					baseDao.delete("PRJ010119DAO.deleteDocRgs", map);
					/*

					map.put("DOC_SN", "");

					// 문서번호 갱신(부모테이블)
					baseDao.update("PRJ010119DAO.updateDocSn", map);
					*/
					break;
			}
			resultList.add(map);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("output1", outDsMap);
	}
	
	// 확인여부 수정
	@SuppressWarnings({ "rawtypes" })
	public void updateCnfirmAt(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		baseDao.update("PRJ010119DAO.updateCnfirmAt", inMap);
	}
	
	// 준공금지급내역(팝업) 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCompetAmPymntDtls(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010119DAO.selectCompetAmPymntDtls", inMap));
		outDataset.put("output1", outDsMap);
	}

}
