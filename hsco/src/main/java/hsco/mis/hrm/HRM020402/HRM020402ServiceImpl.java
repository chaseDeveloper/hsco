package hsco.mis.hrm.HRM020402;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * &#64;Project Name 	: 화성도시공사 차세대정보시스템
 * &#64;Class Name   	: HRM020402ServiceImpl.java
 * &#64;Description  	: 
 * &#64;author       	: 정 민
 * &#64;since        	: 2017. 12. 26.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일						작성자				내용
 * ------------------------------------------------------------------
 *  2017. 12. 26.				정 민				최초생성
 * </pre>
 */

@Service("HRM020402Service")
public class HRM020402ServiceImpl extends BaseService implements HRM020402Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** 모집분야 목록 조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectEmpmnRcritRealmList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020402DAO.selectEmpmnRcritRealmList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	/** 최종결과관리 상세조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void empmnLastResultR(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020402DAO.empmnLastResultR", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	/** 최종결과관리 생성 및 수정 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public void empmnLastResultCU(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HRM020402DAO.empmnLastResultCU", map);
				break;
			}
		}
	}
	
	/** 인사자료생성 
	 * @throws IOException */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void hrmastrC(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException, IOException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");	// 확정지원자 목록

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);
			String empmnDcsnAt = String.valueOf(map.get("EMPMN_DCSN_AT"));	//입사확정
			String dtaCreatAt  = String.valueOf(map.get("DTA_CREAT_AT"));	//인사자료생성여부

			if("1".equals(empmnDcsnAt) && !"1".equals(dtaCreatAt)) {
				/**** 사진파일복사 ****/
				Map<String, Object> fileInfo = (Map<String, Object>) baseDao.select("selectAtchmnFileList", map);	// 파일첨부조회
				
				if(fileInfo != null) {
					Map<String, Object> newFileInfo = copyFile(fileInfo, "MIS", "HRM");	// 파일카피
					
					if(newFileInfo != null) {
						BigDecimal newFileSn = selectFileSn();	// 새로운 파일순번 조회
						newFileInfo.put("NEW_FILE_SN", newFileSn);
						map.put("FILE_SN", newFileSn);
						baseDao.insert("HRM020402DAO.insertAtchmnFileMast", newFileInfo);	// 파일마스터생성
						baseDao.insert("HRM020402DAO.insertAtchmnFile", newFileInfo);		// 파일생성
					}
				}
				
				/**** 인사자료생성 ****/
				Map<String, Object> empnoMap = (Map<String, Object>) baseDao.select("HRM030103DAO.selectNewEmpno");			// 사번채번
				String empno = (String) empnoMap.get("EMPNO");
				map.put("EMPNO", empno);
				baseDao.insert("HRM020402DAO.hrmastrC", map);			// 인사자료생성
				baseDao.update("HRM020402DAO.empmnLastResultU", map);	// 채용최종결과 자료생성여부 업데이트
			}
		}
	}
	
    /**
	 * 파일첨부 시퀀스 가져오기
	 * @param 
	 * @return Long
	 */
	public BigDecimal selectFileSn() {
		BigDecimal seqFileSn = (BigDecimal)baseDao.select("selectFileSn");	
		
		SimpleDateFormat sf = new SimpleDateFormat("yyyyMMdd");
        long today = System.currentTimeMillis();
        String ymd = sf.format(today);
        // 시퀀스 채번 서비스 호출 

    	String strFileSn = ymd +""+ seqFileSn;  // 파일일련번호 = YYYYMMDD + 시퀀스
    	
    	BigDecimal fileSn = new BigDecimal(strFileSn); // 파일일련번호
		return fileSn;
	}
	
    /**
	 * 파일복사하기
	 * @param 
	 * @return Long
     * @throws IOException 
	 */
	public static Map<String, Object> copyFile(Map<String, Object> oldFileMap, String newSysSeCode, String newJobSeCode) throws IOException {
		
		String fileStoreLoc = "/data/app_home/upload/mis";
		
		String fileStreCours = (String) oldFileMap.get("FILE_STRE_COURS");
		String streFileNm    = (String) oldFileMap.get("STRE_FILE_NM");
		String fileExtsn     = (String) oldFileMap.get("FILE_EXTSN");
		
		String newFileStreCours = fileStoreLoc + System.getProperty("file.separator") + newSysSeCode + System.getProperty("file.separator") + newJobSeCode;

		String oldSource = fileStreCours + System.getProperty("file.separator") + streFileNm+"."+fileExtsn;
		String newSoucre = newFileStreCours + System.getProperty("file.separator") + streFileNm +"."+ fileExtsn;
		
		File oldFile = new File(oldSource);
		File newFile = new File(newSoucre);
		
		if(!oldFile.exists()) {
			return null;
		}
		
		if(!newFile.exists()) {
			Files.copy(oldFile.toPath(), new File(newSoucre).toPath());
		}
		
		oldFileMap.put("FILE_STRE_COURS", newFileStreCours);
		oldFileMap.put("SYS_SE_CODE", newSysSeCode);
		oldFileMap.put("JOB_SE", newJobSeCode);
		return oldFileMap;
		
	}

}