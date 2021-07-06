package hsco.mis.hrm.HRM020201;

import java.security.MessageDigest;
import java.util.List;
import java.util.Map;

import org.apache.commons.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * &#64;Project Name 	: 화성도시공사 차세대정보시스템
 * &#64;Class Name   	: HRM020201ServiceImpl.java
 * &#64;Description  	: 
 * &#64;author       	: 이혜선
 * &#64;since        	: 2015. 07.24.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07.24.	이혜선			최초생성
 * </pre>
 */

@Service("HRM020201Service")
public class HRM020201ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** 입사지원관리 기본사항상세조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbhrmEcnySportGnrlR(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020201DAO.tbhrmEcnySportGnrlR", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}

	/** 입사지원관리 기본사항상세조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectTbhrmEcnySportGnrlTab(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020201DAO.selectEdcList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);

		List<Map> records2;
		records2 = (List<Map>) baseDao.list("HRM020201DAO.selectQualfList", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records2);
		outDataset.put("output2", outDsMap);

		List<Map> records3;
		records3 = (List<Map>) baseDao.list("HRM020201DAO.selectExprncCareerList", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records3);
		outDataset.put("output3", outDsMap);

		List<Map> records4;
		records4 = (List<Map>) baseDao.list("HRM020201DAO.selectDownFileList", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records4);
		outDataset.put("output4", outDsMap);
	}

	/** 입사지원관리 채용년도 콤보데이터 조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void empmnYearComboList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020201DAO.empmnYearComboList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	/** 입사지원관리 채용공고명 조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void odrSeComboList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020201DAO.odrSeComboList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int tbhrmEcnySportGnrlCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("HRM020201DAO.tbhrmEcnySportGnrlC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HRM020201DAO.tbhrmEcnySportGnrlU", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				map.put("IS_PARENT", "TRUE");
				iRow += baseDao.delete("HRM020201DAO.tbhrmEcnySportGnrlD", map);
				iRow += baseDao.delete("HRM020201DAO.edcD", map);
				iRow += baseDao.delete("HRM020201DAO.qualfD", map);
				iRow += baseDao.delete("HRM020201DAO.exprncCareerD", map);
				break;
			}
		}

		DataSetMap list2 = (DataSetMap) inDataset.get("input2");

		int listSize2 = (list2 == null) ? 0 : list2.size();

		for (int x = 0; x < listSize2; x++) {

			Map map2 = list2.get(x);

			int rowType2 = ((Integer) map2.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType2) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("HRM020201DAO.edcC", map2);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				iRow += baseDao.update("HRM020201DAO.edcU", map2);
				break;
			case DataSet.ROW_TYPE_DELETED:
				iRow += baseDao.delete("HRM020201DAO.edcD", map2);
				break;
			}
		}

		DataSetMap list3 = (DataSetMap) inDataset.get("input3");

		int listSize3 = (list3 == null) ? 0 : list3.size();

		for (int x = 0; x < listSize3; x++) {

			Map map3 = list3.get(x);

			int rowType3 = ((Integer) map3.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType3) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("HRM020201DAO.qualfC", map3);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				iRow += baseDao.update("HRM020201DAO.qualfU", map3);
				break;
			case DataSet.ROW_TYPE_DELETED:
				iRow += baseDao.delete("HRM020201DAO.qualfD", map3);
				break;
			}
		}

		DataSetMap list4 = (DataSetMap) inDataset.get("input4");

		int listSize4 = (list4 == null) ? 0 : list4.size();

		for (int x = 0; x < listSize4; x++) {

			Map map4 = list4.get(x);

			int rowType4 = ((Integer) map4.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType4) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("HRM020201DAO.exprncCareerC", map4);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				iRow += baseDao.update("HRM020201DAO.exprncCareerU", map4);
				break;
			case DataSet.ROW_TYPE_DELETED:
				iRow += baseDao.delete("HRM020201DAO.exprncCareerD", map4);
				break;
			}
		}

		return iRow;

	}

	@SuppressWarnings({ "rawtypes" })
	public void saveExcelUpload(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			baseDao.insert("HRM020201DAO.tbhrmEcnySportGnrlC", map); // 입사지원관리
																		// 기본사항
																		// 추가
		}
	}

	/**
	 * 입사지원관리 첨부파일 다운로드
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDownFileList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020201DAO.selectDownFileList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	/**
	 * 비밀번호 변경
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws Exception 
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void savePwd(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				String email = String.valueOf(map.get("CTTPC_EMAIL"));
				String pwd = String.valueOf(map.get("PWD"));
				String enpassword = encryptPassword(pwd, email);
				map.put("PWD", enpassword);
				baseDao.insert("HRM020201DAO.pwdU", map);
				break;
			}
		}
	}

	/**
	 * 적격여부 변경
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void saveProperAt(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.update("HRM020201DAO.properAtU", map);
				break;
			}
		}
	}
	
	/**
	 * 응시번호 부여
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void rlApyexmNoU(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);
			baseDao.update("HRM020201DAO.rlApyexmNoU", map);
			
		}
	}

    /**
     * 비밀번호를 암호화하는 기능(복호화가 되면 안되므로 SHA-256 인코딩 방식 적용)
     * 
     * @param password 암호화될 패스워드
     * @param id salt로 사용될 사용자 ID 지정
     * @return
     * @throws Exception
     */
    public static String encryptPassword(String password, String id) throws Exception {

		if (password == null) {
		    return "";
		}
	
		byte[] hashValue = null; // 해쉬값
	
		MessageDigest md = MessageDigest.getInstance("SHA-256");
		
		md.reset();
		md.update(id.getBytes());
		
		hashValue = md.digest(password.getBytes());
	
		return new String(Base64.encodeBase64(hashValue));
    }

}