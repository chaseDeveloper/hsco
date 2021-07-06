package hsco.mis.mis.MIS000000;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.FileUtils;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.OutMap;
import hsco.cmm.util.StringUtil;
import hsco.mis.mis.service.MisMailSendServiceImpl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.channels.FileChannel;
import java.rmi.server.UID;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.mail.internet.InternetAddress;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

/**
 * 
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : MIS000000ServiceImpl.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 9. 17.
 * @version         : 1.0
 * @see             :
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 17.                  정윤원                최초생성
 * </pre>
 */
@Service("MIS000000Service")
public class MIS000000ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "FileUploadService")
	FileUploadServiceImpl FileUploadService;

	@Resource(name = "misMailSendService")
	MisMailSendServiceImpl mailSendService;

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveAutoFileSn(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		String strFileSn = inMap.get("FILE_SN") == null ? null : String.valueOf(inMap.get("FILE_SN"));

		// step 1 : 테이블에 실제로 fileSn이 존재하는지 확인 (존재시, fileSn을 반환 후 종료)
		String selectFileSnOnTable = "MISFILE00_DAO.sel" + (String) inMap.get("TABLE_NAME");
		List<Map> rtnList = (List) baseDao.list(selectFileSnOnTable, inMap);
		if (rtnList.size() > 0 && (strFileSn == null || "0".equals(strFileSn) || "".equals(strFileSn) || "null".equals(strFileSn) || "undefined".equals(strFileSn)) ) {
			Map rtnMap = rtnList.get(0);
			String getFileSn = String.valueOf(rtnMap.get("FILE_SN"));
			if ("null".equals(getFileSn) || "0".equals(getFileSn)) {
				// step 2 : fileSn이 존재하지 않는 경우, 신규 채번

				// date get
				SimpleDateFormat sDateFormat = new SimpleDateFormat("yyyyMMdd");
				long curentTime = System.currentTimeMillis();

				// FileSn calculate
				String todayStr = sDateFormat.format(curentTime);
				BigDecimal seqFileSn = (BigDecimal) baseDao.select("selectFileSn");
				if(strFileSn == null) {
					strFileSn = todayStr + "" + seqFileSn;
					inMap.put("SN_TYPE", "NEW");
				}

				// input FileSn
				BigDecimal fileSn = new BigDecimal(strFileSn);
				inMap.put("FILE_SN", fileSn);

				if("NEW".equals(String.valueOf(inMap.get("SN_TYPE")))) {
					// insert into File Master
					baseDao.insert("insertAtchmnFileMast", inMap);

					// update to My Table
					String updateAutoFileSn = "MISFILE00_DAO.upd" + (String) inMap.get("TABLE_NAME");
					baseDao.update(updateAutoFileSn, inMap);
				}
			} else {
				inMap.put("FILE_SN", getFileSn);
			}
		} else {
			inMap.put("FILE_SN", strFileSn);
		}

		// step 4 : 복사되어 가져올 파일이 존재할 경우, 해당 데이터셋으로부터 파일을 복사해서 가져 옴
		DataSetMap inCopyDsMap = (DataSetMap) inDataset.get("input2");
		if (inCopyDsMap != null) {

			// ** 1. 받아서 집어넣고자 하는 대상첨부파일(시간이 없으므로 회계로 고정)
			String sysSeCode = "MIS";
			String jobSeCode = "ACC";

			// ** 2. 복사되어 가져올 저장경로 설정
			String fileStoreLoc = (String) inVar.get("fileLocation");
			fileStoreLoc = StringUtil.replace(fileStoreLoc, "/", File.separator);
			String rootPath = fileStoreLoc;
			String uploadDir = rootPath + File.separator + sysSeCode + File.separator + jobSeCode;

			// ** 3. 해당 저장경로의 폴더가 없을 경우(디렉토리생성 확인)
			if (!FileUtils.isDirectory(uploadDir)) {
				FileUtils.makeDir(uploadDir);
			}

			// ** 4. 가져오고자 하는 첨부파일 목록
			for (int cRow = 0; cRow < inCopyDsMap.size(); cRow++) {
				Map copyMap = inCopyDsMap.get(cRow);
				String fileStreCours = String.valueOf(copyMap.get("FILE_STRE_COURS"));
				String fileStreNm    = String.valueOf(copyMap.get("STRE_FILE_NM"));
				String fileExtsn     = String.valueOf(copyMap.get("FILE_EXTSN"));

				// 신규 파일명
				String uniqueFileName = ((new UID()).toString()).replaceAll(":", ""); // 임시 파일명생성
				uniqueFileName = strFileSn + uniqueFileName;
				try {

					// ** 5. 파일의 물리적 경로 복사
					File orgFile = new File(fileStreCours + File.separator + fileStreNm + "." + fileExtsn);		// 복사해 올 기존 파일
					FileInputStream inputStream = new FileInputStream(orgFile);
					FileOutputStream outputStream = new FileOutputStream(uploadDir + File.separator + uniqueFileName + "." + fileExtsn);	// 복사되는 신규 파일
					FileChannel fcin =  inputStream.getChannel();
					FileChannel fcout = outputStream.getChannel(); 

					long size = fcin.size();
					fcin.transferTo(0, size, fcout); 

					fcout.close();
					fcin.close(); 
					outputStream.close();
					inputStream.close();

					// ** 6. 파일 맵 정보 변조(신규 경로)
					copyMap.remove("FILE_SN");
					copyMap.remove("SYS_SE");
					copyMap.remove("JOB_SE");
					copyMap.remove("STRE_FILE_NM");

					// (위에서 가져올 정보 - FILE_SN, SYS_SE, JOB_SE)
					copyMap.put("FILE_SN", strFileSn);
					copyMap.put("SYS_SE", sysSeCode);
					copyMap.put("JOB_SE", jobSeCode);
					copyMap.put("STRE_FILE_NM", uniqueFileName);

					// (신규 채번 - FILE_ORDR, FILE_STRE_COURS)
					int fileOrdr = (Integer)baseDao.select("selectFileOrdr", copyMap);
					copyMap.put("FILE_ORDR", fileOrdr);
					copyMap.put("FILE_STRE_COURS", uploadDir);

					// ** 7. 파일정보 저장(업로드가 완료된 파일정보)
					baseDao.insert("insertAtchmnFile", copyMap);
				} catch (Exception ex) {
					String errMsg = "!!ERROR {" + ex.getClass().getName() + "} 파일 업로드 중 오류발생 " + ExceptionUtils.getStackTrace(ex);
					log.error(errMsg);
					System.out.println(errMsg);
//					throw new NexaServiceException("err.파일.업로드.실패", ex);
				}
			}

			// ** 8. 파일정보 재조회
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
			outDataset.put("output2", outDsMap);
		}

		List<Map> outList = new ArrayList<Map>();
		outList.add(inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(outList);
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 첨부파일을 업로드하고 공통 첨부파일정보에 저장한 정보를 반환한다.
	 * 
	 * @param file
	 * @param fieldInfo
	 * @param inputMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void fileUpload(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap fileInfo = (DataSetMap) inDataset.get("inputFile");
		Map<String, Object> upResult = null;
		if (fileInfo != null) {
			NexacroMapDTO xpDto = getXpDto();
			setFileLocation(getFileLocation());

			upResult = (Map<String, Object>) uploadSingleFileinfo(xpDto);
			List<Map> resultList = (List<Map>) upResult.get("UP_FILE_LIST");

			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(resultList);
			outDataset.put("fileList", outDsMap);
		} else {
			throw new NexaServiceException("err.파일.업로드.정보없음");
		}
	}

	/**
	 * 파일 업로드 - Service to Service
	 * 
	 * @author LeeSJ
	 * @param xpDto
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked" })
	public Map<String, Object> uploadSingleFileinfo(NexacroMapDTO xpDto) throws NexaServiceException {
		Map<String, Object> resultMap = null;
		Map<String, Object> inVar = xpDto.getInVariableMap();
		Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
		HttpServletRequest request = xpDto.getRequest();

		// 첨부파일 정보
		DataSetMap fileInfo = (DataSetMap) inDataset.get("inputFile"); // List

		if (fileInfo != null) {

			String uploadDir = null; // 업로드 디렉토리
			boolean saveFile = false; // 파일 저장여부
			boolean isNewMaster = true; // 첨부마스터가 신규 인지 여부 신규(true)/ 이미존재하면 false

			ArrayList<Map<String, Object>> fileList = new ArrayList<Map<String, Object>>(); // 업로드 파일 정보

			String oriFileName = null; // 실제 파일명
			String oriExtName = null; // 실제 확장자
			String uniqueFileName = null; // 변경(유일) 파일명
			try {

				// [STEP1] 파일저장
				MultipartHttpServletRequest mpRequest = (MultipartHttpServletRequest) request;

				// 파일일련번호 조회
				BigDecimal filesSn = null;

				String strFileSn = null; // //String.valueOf(filesSn);
				strFileSn = (String) fileInfo.getMapValue(0, "FILE_SN");
				if (strFileSn != null) {
					if (!"".equals(strFileSn)) {
						filesSn = new BigDecimal(strFileSn);
						isNewMaster = false;
					}
				}

				resultMap = new HashMap<String, Object>();

				// 파일 저장처리
				// 업로드 파일 정보 추출
				Iterator<String> iterFile = mpRequest.getFileNames();
				while (iterFile.hasNext()) {
					String formName = (String) iterFile.next();

					MultipartFile multiFile = mpRequest.getFile(formName);
					oriFileName = multiFile.getOriginalFilename();

					if (!StringUtil.isNull(oriFileName)) {
						oriExtName = oriFileName.substring(oriFileName.lastIndexOf('.') + 1, oriFileName.length());

						// 전달 파일정보
						int inFileIdx = ObjectUtil.findRowIndexInDs(fileInfo, "ORGINL_FILE_NM", oriFileName);
						Map<String, Object> inFileItem = (Map<String, Object>) fileInfo.get(inFileIdx);

						String inFileSn = (String) inFileItem.get("FILE_SN"); // 파일 일련번호

						// 파일일련번호 설정
						if (strFileSn == null) {
							if (inFileSn == null) {
								// 파일에 일련번호가 없고 채번된 일련번호가 없을 경우 채번
								filesSn = FileUploadService.selectFileSn(); // 파일일련번호 채번
								strFileSn = String.valueOf(filesSn);
							} else {
								strFileSn = inFileSn;
							}
						}

						String inSysSeCode = (String) inFileItem.get("SYS_SE_CODE"); // 전달 시스템 구분
						String inJobSeCode = (String) inFileItem.get("JOB_SE"); // 전달 업무구분

						String inFileExtsn = (String) inFileItem.get("FILE_EXTSN"); // 전달 파일 확장자
						String inFileId = (String) inFileItem.get("FILE_ID"); // 전달 파일 ID
						String inFileTy = (String) inFileItem.get("FILE_TY"); // 전달 파일 타입

						// 저장경로 설정
						String rootPath = null;

						String fileStoreLoc = (String) inVar.get("fileLocation");
						fileStoreLoc = StringUtil.replace(fileStoreLoc, "/", File.separator);

						// RootPath 구하기
						rootPath = fileStoreLoc;
						uploadDir = rootPath + File.separator + inSysSeCode + File.separator + inJobSeCode;

						// 디렉토리생성 확인
						if (!FileUtils.isDirectory(uploadDir)) {
							FileUtils.makeDir(uploadDir);
						}

						uniqueFileName = ((new UID()).toString()).replaceAll(":", ""); // 임시 파일명생성
						uniqueFileName = strFileSn + uniqueFileName;

						File uploadedFile = new File(uploadDir + File.separator + uniqueFileName + "." + inFileExtsn); // 임시파일명으로 파일생성

						multiFile.transferTo(uploadedFile); // 파일저장

						// 저장정보 구성
						Map<String, Object> fileItem = new HashMap<String, Object>(); // 업로드 파일정보

						long fileSize = new Long(multiFile.getSize()); // 업로드 파일사이즈

						// 저장 파일명 정보 설정(TBCOM_CMMN_ATCHMNFL 테이블 구조)
						// 파일 순차번호는 자동 채번
						fileItem.put("FILE_SN", strFileSn); // 파일일련번호
						fileItem.put("SYS_SE_CODE", inSysSeCode); // 시스템구분코드
						fileItem.put("JOB_SE", inJobSeCode); // 업부구분코드
						fileItem.put("FILE_STRE_COURS", uploadDir); // 파일저장경로
						fileItem.put("STRE_FILE_NM", uniqueFileName); // 저장파일명
						fileItem.put("ORGINL_FILE_NM", oriFileName); // 원본파일명
						fileItem.put("FILE_EXTSN", oriExtName); // 파일확장자
						fileItem.put("FILE_CN", fileSize); // 파일내용(파일ID)
						fileItem.put("FILE_MG", fileSize); // 파일크기
						fileItem.put("USE_AT", "1"); // 사용여부
						fileItem.put("FILE_ID", inFileId); // 파일ID
						fileItem.put("FILE_TY", inFileTy); // 파일타입

						fileList.add(fileItem);
					}
				}

				saveFile = true; // 파일 저장 완료 처리
				System.out.println("filesSn 2 === " + filesSn);
				System.out.println("strFileSn === " + strFileSn);
				// 파일정보 DB 처리
				// 마스터 정보 처리
				int upFileListSize = fileList == null ? 0 : fileList.size();

				int fileOrdr = -1;
				for (int i = 0; i < upFileListSize; i++) {
					Map<String, Object> upFileItem = fileList.get(i);
					// 첫 행의 경우 마스터 정보에 Insert
					if (i == 0) {
						if (isNewMaster)
							baseDao.insert("insertAtchmnFileMast", upFileItem);
					}

					// 상세 파일순차 조회
					fileOrdr = (Integer) baseDao.select("selectFileOrdr", upFileItem);
					upFileItem.put("FILE_ORDR", fileOrdr);

					// 상세 정보 저장
					baseDao.insert("insertAtchmnFile", upFileItem);
				}

				resultMap.put("FILE_SN", strFileSn); // 파일 일련번호
				resultMap.put("FILE_ORDR", fileOrdr); // 상세 파일순차 번호(최종)
				resultMap.put("UP_FILE_CNT", upFileListSize); // 파일 수
				resultMap.put("UP_FILE_LIST", fileList); // 업로드 파일 정보

			} catch (Exception ex) {
				log.error("!!ERROR {" + ex.getClass().getName() + "} 파일 업로드 중 오류발생 " + ExceptionUtils.getStackTrace(ex));

				// 저장된 파일은 삭제
				log.error(" saveFile = " + saveFile);

				if (saveFile) {
					int fileListSize = (fileList == null) ? 0 : fileList.size();
					log.error(" Delete File Count = " + fileListSize);

					for (int i = 0; i < fileListSize; i++) {
						Map<String, Object> item = (Map<String, Object>) fileList.get(i);
						String delStrePath = (String) item.get("FILE_STRE_COURS");
						String delFileName = (String) item.get("STRE_FILE_NM");
						String delFilePath = delStrePath + delFileName;
						FileUtils.removeFile(delFilePath);
					}
				}

				throw new NexaServiceException("err.파일.업로드.실패", ex);
			}

		}

		return resultMap;
	}


	/**
	 * 파일 복사 - Service to Service
	 * @param inVar
	 * @param strFileSn (입력할 목표 FileSn)
	 * @param trgetFileSnList (가져올 대상 FILE_SN List)
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void fileCopyOnService(Map<String, Object> inVar, BigDecimal strFileSn, DataSetMap trgetFileSnList) throws NexaServiceException {
		// ** 1. 받아서 집어넣고자 하는 대상첨부파일
		/**
		 * TODO : 시간이 없으므로, 회계로 고정
		 * *********
			Map inMap = new HashMap();
			inMap.put("FILE_SN", strFileSn);
			ArrayList fileMastrList = (ArrayList)baseDao.list("selectAtchmnFileMast", inMap);
			Map fileMastrMap = (Map) fileMastrList.get(0);
			String sysSeCode = fileMastrMap.get("SYS_SE_CODE") == null ? null : String.valueOf(fileMastrMap.get("SYS_SE_CODE"));
			String jobSeCode = fileMastrMap.get("JOB_SE_CODE") == null ? null : String.valueOf(fileMastrMap.get("JOB_SE_CODE"));
		 */
		String sysSeCode = "MIS";
		String jobSeCode = "ACC";
		
		// ** 2. 복사되어 가져올 저장경로 설정
		String fileStoreLoc = (String) inVar.get("fileLocation");
		fileStoreLoc = StringUtil.replace(fileStoreLoc, "/", File.separator);
		String rootPath = fileStoreLoc;
		String uploadDir = rootPath + File.separator + sysSeCode + File.separator + jobSeCode;
		
		// ** 3. 해당 저장경로의 폴더가 없을 경우(디렉토리생성 확인)
		if (!FileUtils.isDirectory(uploadDir)) {
			FileUtils.makeDir(uploadDir);
		}
		
		// ** 4. 가져오고자 하는 첨부파일 key 목록
		for(int mRow = 0; mRow < trgetFileSnList.size(); mRow++) {
			// ** 5. 저장된 파일 정보를 가져오기
			Map<String, Object> inFileMap = (Map<String, Object>)trgetFileSnList.get(mRow);
			List<Map> fileList = (List<Map>)baseDao.list("selectAtchmnFileList", inFileMap);
			for(int fRow = 0; fRow < fileList.size(); fRow++) {
				Map fileMap = (Map) fileList.get(fRow);
				String fileStreCours = String.valueOf(fileMap.get("FILE_STRE_COURS"));
				String fileStreNm    = String.valueOf(fileMap.get("STRE_FILE_NM"));
				String fileExtsn     = String.valueOf(fileMap.get("FILE_EXTSN"));
				try {

					// ** 6. 파일의 물리적 경로 복사
					File orgFile         = new File(fileStreCours + File.separator + fileStreNm + "." + fileExtsn);
					FileInputStream inputStream = new FileInputStream(orgFile);
					FileOutputStream outputStream = new FileOutputStream(uploadDir + File.separator + fileStreNm + "." + fileExtsn); 
					FileChannel fcin =  inputStream.getChannel();
					FileChannel fcout = outputStream.getChannel(); 

					long size = fcin.size();
					fcin.transferTo(0, size, fcout); 

					fcout.close();
					fcin.close(); 
					outputStream.close();
					inputStream.close();
				} catch (Exception ex) {
					log.error("!!ERROR {" + ex.getClass().getName() + "} 파일 업로드 중 오류발생 " + ExceptionUtils.getStackTrace(ex));
					
					// TODO : 업로드 중 오류 발생 시, 복사된 파일만 찾아서 지워야 함(업로드한 파일객체정보를 보존하고 있어야 함)
					//---------------------------------------------------
					// 저장된 파일은 삭제
					//log.error(" saveFile = " + saveFile);
					//---------------------------------------------------
					
					throw new NexaServiceException("err.파일.업로드.실패", ex);
				}

				// ** 7. 파일 맵 정보 변조(신규 경로)
				fileMap.remove("FILE_SN");
				fileMap.remove("SYS_SE");
				fileMap.remove("JOB_SE");

				// (위에서 가져올 정보 - FILE_SN, SYS_SE, JOB_SE)
				fileMap.put("FILE_SN", strFileSn);
				fileMap.put("SYS_SE", sysSeCode);
				fileMap.put("JOB_SE", jobSeCode);

				// (신규 채번 - FILE_ORDR, FILE_STRE_COURS)
				int fileOrdr = (Integer)baseDao.select("selectFileOrdr", fileMap);
				fileMap.put("FILE_ORDR", fileOrdr);
				fileMap.put("FILE_STRE_COURS", uploadDir);

				// ** 8. 파일정보 저장(업로드가 완료된 파일정보)
				baseDao.insert("insertAtchmnFile", fileMap);
			}
		}
	}






	/**
	 * 첨부파일 삭제
	 * 
	 * @param tranInfo
	 *            , inVar, inDataset, outVar, outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void AtchmnFileD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			String savedPath = (String) map.get("FILE_STRE_COURS");
			String deleteFileName = (String) map.get("STRE_FILE_NM");
			String extName = (String) map.get("FILE_EXTSN");
			File delFile = new File(savedPath + File.separator + deleteFileName + "." + extName);
			if (delFile.exists()) {
				if (delFile.delete()) {
					baseDao.delete("deleteAtchmnFile", map);
				}
			}
		}
	}

	/**
	 * 사업지구코드를 조회한다.
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void bsnsAreaList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		if (inMap != null) {
			records = (List<Map>) baseDao.list("MIS000000DAO.bsnsAreaList", inMap);
		} else {
			records = (List<Map>) baseDao.list("MIS000000DAO.bsnsAreaList", inVar);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output01", outDsMap);

	}

	/**
	 * 권한그룹을 조회한다.
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void getAuthGrp(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		List<Map> records;
		if (inMap != null) {
			records = (List<Map>) baseDao.list("MIS000000DAO.getAuthCnt", inMap);
		} else {
			records = (List<Map>) baseDao.list("MIS000000DAO.getAuthCnt", inVar);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output01", outDsMap);
	}

	/**
	 * 최종 내부결재 상태를 조회한다.
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLastSanctnSttus(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		if (inMap != null) {
			records = (List<Map>) baseDao.list("MIS000000DAO.selectLastSanctnSttus", inMap);
		} else {
			records = (List<Map>) baseDao.list("MIS000000DAO.selectLastSanctnSttus", inVar);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output01", outDsMap);

	}

	/**
	 * 인사마스터 사진 마이그레이션 (BLOB -> 공통첨부파일)
	 * 
	 * @param fileLocation
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public void empPicMig_ORG(String fileLocation) throws Exception {

		String savePath = fileLocation + '/' + "MIS" + '/' + "HRM";
		File filePath = new File(savePath);
		if (!filePath.exists()) {
			filePath.mkdirs();
		}

		List<OutMap> empPicList = (List<OutMap>) baseDao.list("MIS000000DAO.empPicList", false);

		for (OutMap outMap : empPicList) {
			BigDecimal fileSn = FileUploadService.selectFileSn();
			String strFileSn = fileSn.toString();
			String uniqueFileName = ((new UID()).toString()).replaceAll(":", "");
			String saveFileName = strFileSn + uniqueFileName;
			byte[] photo = (byte[]) outMap.get("PHOTO");
			String empno = (String) outMap.get("EMPNO");

			File uploadedFile = new File(savePath + '/' + saveFileName + ".jpg");
			FileOutputStream fos = new FileOutputStream(uploadedFile);
			fos.write(photo);
			fos.close();

			Map<String, Object> fileItem = new HashMap<String, Object>();
			fileItem.put("FILE_SN", strFileSn); // 파일일련번호
			fileItem.put("SYS_SE_CODE", "MIS"); // 시스템구분코드
			fileItem.put("JOB_SE", "HRM"); // 업부구분코드
			fileItem.put("FILE_STRE_COURS", savePath); // 파일저장경로
			fileItem.put("STRE_FILE_NM", saveFileName + ".jpg"); // 저장파일명
			fileItem.put("ORGINL_FILE_NM", empno + ".jpg"); // 원본파일명
			fileItem.put("FILE_EXTSN", "jpg"); // 파일확장자
			fileItem.put("FILE_CN", photo.length); // 파일내용(파일ID)
			fileItem.put("FILE_MG", photo.length); // 파일크기
			fileItem.put("USE_AT", "1"); // 사용여부
			fileItem.put("FILE_ID", ""); // 파일ID
			fileItem.put("FILE_TY", "image/jpeg"); // 파일타입
			fileItem.put("FILE_ORDR", "1");
			fileItem.put("EMPNO", empno);
			baseDao.insert("insertAtchmnFileMast", fileItem);
			baseDao.insert("insertAtchmnFile", fileItem);
			baseDao.update("MIS000000DAO.empPicU", fileItem);
		}

	}

	/**
	 * 인사마스터 사진 마이그레이션 (BLOB -> 공통첨부파일)
	 * 
	 * @param fileLocation
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public void empPicMig(String fileLocation) throws Exception {

		String savePath = fileLocation + '/' + "MIS" + '/' + "HRM";
		File filePath = new File(savePath);
		if (!filePath.exists()) {
			filePath.mkdirs();
		}
		//log.error(" filePath.getAbsolutePath() : "+filePath.getAbsolutePath());
		//savePath = filePath.getAbsolutePath();

		List<OutMap> empPicList = (List<OutMap>) baseDao.list("MIS000000DAO.empPicList", false);

		java.sql.Connection conn = null;
		java.sql.PreparedStatement pstmt = null;
		java.sql.ResultSet rs = null;
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");

			//conn=java.sql.DriverManager.getConnection("jdbc:oracle:thin:@192.168.10.219:1521:dvlhscodb","hscodvl","hscodvl");
			conn = java.sql.DriverManager.getConnection("jdbc:oracle:thin:@192.168.10.219:1521:hscodb", "hscoopr", "hscoopr");
			pstmt = conn.prepareStatement("SELECT EMPNO ,PHOTO_FILE FROM TBHRM_HR_PHOTO");
			rs = pstmt.executeQuery();

			while (rs.next()) {

				String sEMPNO = (String) rs.getString(1);
				oracle.sql.BLOB blobPhoto = (oracle.sql.BLOB) rs.getBlob(2);

				BigDecimal fileSn = FileUploadService.selectFileSn();
				String strFileSn = fileSn.toString();
				String uniqueFileName = ((new UID()).toString()).replaceAll(":", "");
				String saveFileName = strFileSn + uniqueFileName;
				//String 		saveFileName 	= sEMPNO;
				String empno = sEMPNO;

				File uploadedFile = new File(savePath + '/' + saveFileName + ".jpg");
				FileOutputStream fos = new FileOutputStream(uploadedFile);

				java.io.InputStream in = (java.io.InputStream) blobPhoto.getBinaryStream();
				byte[] bytes = new byte[4096];
				int len = in.read(bytes);

				while (len != -1) {
					fos.write(bytes, 0, len);
					len = in.read(bytes);
				}

				fos.close();

				Map<String, Object> fileItem = new HashMap<String, Object>();
				fileItem.put("FILE_SN", strFileSn); // 파일일련번호
				fileItem.put("SYS_SE_CODE", "MIS"); // 시스템구분코드
				fileItem.put("JOB_SE", "HRM"); // 업부구분코드
				fileItem.put("FILE_STRE_COURS", StringUtil.replace(savePath, "/", File.separator)); // 파일저장경로
				fileItem.put("STRE_FILE_NM", saveFileName); // 저장파일명
				fileItem.put("ORGINL_FILE_NM", empno + ".jpg"); // 원본파일명
				fileItem.put("FILE_EXTSN", "jpg"); // 파일확장자
				fileItem.put("FILE_CN", blobPhoto.length()); // 파일내용(파일ID)
				fileItem.put("FILE_MG", blobPhoto.length()); // 파일크기
				fileItem.put("USE_AT", "1"); // 사용여부
				fileItem.put("FILE_ID", ""); // 파일ID
				fileItem.put("FILE_TY", "image/jpeg"); // 파일타입
				fileItem.put("FILE_ORDR", "1");
				fileItem.put("EMPNO", empno);
				baseDao.insert("insertAtchmnFileMast", fileItem);
				baseDao.insert("insertAtchmnFile", fileItem);
				baseDao.update("MIS000000DAO.empPicU", fileItem);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				rs.close();
			} catch (Exception e) {
			}
			try {
				pstmt.close();
			} catch (Exception e) {
			}
			try {
				conn.close();
			} catch (Exception e) {
			}
		}
		/*
		 * for(OutMap outMap : empPicList) { BigDecimal fileSn =
		 * FileUploadService.selectFileSn(); String strFileSn =
		 * fileSn.toString(); String uniqueFileName = ((new
		 * UID()).toString()).replaceAll(":", ""); //String saveFileName =
		 * strFileSn + uniqueFileName; String saveFileName = (String)
		 * outMap.get("EMPNO"); byte[] photo = (byte[]) outMap.get("PHOTO");
		 * oracle.sql.BLOB blobPhoto = (oracle.sql.BLOB) outMap.get("PHOTO");
		 * String empno = (String) outMap.get("EMPNO");
		 * 
		 * File uploadedFile = new File(savePath + '/' + saveFileName + ".jpg");
		 * FileOutputStream fos = new FileOutputStream(uploadedFile);
		 * 
		 * java.io.InputStream in =
		 * (java.io.InputStream)blobPhoto.getBinaryStream(); byte[] bytes = new
		 * byte[4096]; int len = in.read(bytes);
		 * 
		 * while(len!=-1) { fos.write(blobPhoto.getBytes(),0,len); len =
		 * in.read(bytes); }
		 * 
		 * fos.write(photo); fos.close();
		 * 
		 * Map<String, Object> fileItem = new HashMap<String, Object>();
		 * fileItem.put("FILE_SN", strFileSn); // 파일일련번호
		 * fileItem.put("SYS_SE_CODE", "MIS"); // 시스템구분코드 fileItem.put("JOB_SE",
		 * "HRM"); // 업부구분코드 fileItem.put("FILE_STRE_COURS", savePath); //
		 * 파일저장경로 fileItem.put("STRE_FILE_NM", saveFileName+".jpg"); // 저장파일명
		 * fileItem.put("ORGINL_FILE_NM", empno+".jpg"); // 원본파일명
		 * fileItem.put("FILE_EXTSN", "jpg"); // 파일확장자 fileItem.put("FILE_CN",
		 * photo.length); // 파일내용(파일ID) fileItem.put("FILE_MG", photo.length);
		 * // 파일크기 fileItem.put("USE_AT", "1"); // 사용여부 fileItem.put("FILE_ID",
		 * ""); // 파일ID fileItem.put("FILE_TY", "image/jpeg"); // 파일타입
		 * fileItem.put("FILE_ORDR", "1"); fileItem.put("EMPNO", empno);
		 * baseDao.insert("insertAtchmnFileMast", fileItem);
		 * baseDao.insert("insertAtchmnFile", fileItem);
		 * baseDao.update("MIS000000DAO.empPicU", fileItem); }
		 */

	}

	/**
	 * 메일발송
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void sendEmail(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			String result = mailSendService.sendMail((String) map.get("RECV_EMAIL"), (String) map.get("RECV_NM"), (String) map.get("SEND_EMAIL"), (String) map.get("SEND_NM"), (String) map.get("SUBJECT"), "defaultMailContents", new String[] { (String) map.get("TITLE"), (String) map.get("SUBJECT"), ((String) map.get("CONTENTS")).replaceAll("\n", "<BR/>") }, (String) map.get("FILE_SN"));

			baseDao.insert("UmsDAO.EmailsendCUD", map);//이메일 전송내역 저장

			if (result != null) {
				throw new NexaServiceException("fail.정보등록.실패", "메일발송을 실패하였습니다. " + result);
			}

		}

	}

	/**
	 * 대량메일발송
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void sendMultiEmail(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap input1 = (DataSetMap) inDataset.get("input1"); // 메일내용
		DataSetMap input2 = (DataSetMap) inDataset.get("input2"); // 발송대상

		int input1Size = (input1 == null) ? 0 : input1.size();
		int input2Size = (input2 == null) ? 0 : input2.size();

		if (input2Size <= 0) {
			throw new NexaServiceException("fail.정보등록.실패", "메일발송할 대상이 없습니다.");
		}

		try {
			InternetAddress[] iAddrArr = new InternetAddress[input2Size];

			for (int i = 0; i < input2Size; i++) {
				Map map = input2.get(i);
				iAddrArr[i] = new InternetAddress((String) map.get("RECV_EMAIL"), (String) map.get("RECV_NM"), "UTF-8");
			}
			if (input1Size > 0 && input2Size > 0) {
				Map map = input1.get(0);
				String result = mailSendService.sendMail(iAddrArr, (String) map.get("SEND_EMAIL"), (String) map.get("SEND_NM"), (String) map.get("SUBJECT"), "defaultMailContents", new String[] { (String) map.get("TITLE"), (String) map.get("SUBJECT"), ((String) map.get("CONTENTS")).replaceAll("\n", "<BR/>") }, (String) map.get("FILE_SN"));
				for (int i = 0; i < input2Size; i++) {
					Map subMap = input2.get(i);
					String receiveNm = (String) subMap.get("RECEIVE_NM");
					if (receiveNm == null || "".equals(receiveNm)) {
						receiveNm = " ";
					}
					map.put("RECEIVE_NM", receiveNm);
					map.put("RECV_EMAIL", subMap.get("RECV_EMAIL"));
					map.put("RECV_NM", subMap.get("RECV_NM"));
					if (result == null) {
						map.put("RSLT_EMAIL", "정상");
					}
					baseDao.insert("UmsDAO.EmailsendCUD", map);//이메일 전송내역 저장
				}

				if (result != null) {
					throw new NexaServiceException("fail.정보등록.실패", "메일발송을 실패하였습니다. " + result);
				}
			} else {
				throw new NexaServiceException("fail.정보등록.실패", "메일발송할 대상이나 내용이 없습니다.");
			}
		} catch (UnsupportedEncodingException e) {
			log.error("메일발송에러", e);
			throw new NexaServiceException("fail.정보등록.실패", "메일발송을 실패하였습니다. " + e.getMessage());
		}
	}

	/**
	 * 알림 등록, 수정, 삭제
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 * @throws IOException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int ntcnSndngCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException, IOException {

		String ntcnUrl = "";
		int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		Map map = list.get(0);

		// 알림저장
		baseDao.insert("SYM110100DAO.NtcnSndngC", map);

		String message1 = (String) baseDao.select("MIS000000DAO.msgEmpno", map);
		String message2 = (String) map.get("SENDER_USER_NM");
		String message3 = (String) map.get("NTCN_CN");
		String message4 = (String) map.get("LINK_ADRES");
		String message5 = (String) map.get("NTCN_SJ");

		ntcnUrl = ntcnUrl + "?message1=" + message1;
		ntcnUrl = ntcnUrl + "&message2=" + encodeToUtf8(message2);
		ntcnUrl = ntcnUrl + "&message3=" + encodeToUtf8(message3);
		ntcnUrl = ntcnUrl + "&message4=" + message4;
		ntcnUrl = ntcnUrl + "&message5=" + encodeToUtf8(message5);

		/*
		 * http://포털IP/AtMessengerCommunicator.do?message1=사번&message2=보내는사람이름&
		 * message3=알리미내용&message4=링크주소&message5=알람창일뜰때제목
		 */

		String apiUrl = "http://192.168.10.222/AtMessengerCommunicator.do" + ntcnUrl; // 포털주소 입력
		//System.out.println("messangerUrl :" + apiUrl);

		InputStream in = null;

		try {
			in = new URL(apiUrl).openConnection().getInputStream();
		} catch (Exception e) {/* 문자발송 후 오류무시 */
		} finally {
			if (in != null)
				in.close();
		}
		return iRow;
	}

	/**
	 * 알리미내용 엔코드
	 * 
	 * @param
	 * @return
	 * @throws
	 * @throws
	 */
	private String encodeToUtf8(String str) {
		String utf8Str = "";
		try {
			utf8Str = URLEncoder.encode(str, "UTF-8");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return utf8Str;
	}

	/**
	 * 권한체크
	 * 
	 * @param (Map, String, String)
	 * @return void
	 * @throws NexaServiceException
	 * @throws IOException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void authCheck(Map map, String searchEmpno, String allowAuthCode) {

		Map inMap = map;
		Map inMap2 = new HashMap<String, String[]>();

		Map userMap = (Map) inMap.get("USER");
		String userId = (String) userMap.get("S_USER_ID");

		if (userId == null || "".equals(userId)) {
			throw new NexaServiceException("comm.err", "로그인 정보가 없습니다.");
		}

		//자기것 조회시 통과
		if (userId.equals(searchEmpno)) {
			return;
		}

		if (allowAuthCode == null || "".equals(allowAuthCode) || allowAuthCode.split(",").length == 0) {
			throw new NexaServiceException("comm.err", "조회 가능한 권한 정보가 없습니다.");
		}

		inMap2.put("EMPNO", new String[] { userId });
		inMap2.put("ALLOW_AUTH_CODE", allowAuthCode.split(","));

		List<Map> records = null;
		if (inMap != null) {
			records = (List<Map>) baseDao.list("MIS000000DAO.allowAt", inMap2);
		}

		if (records != null) {
			Map outMap = records.get(0);
			if ("N".equals(outMap.get("ALLOW_AT"))) {
				throw new NexaServiceException("comm.err", "다른사용자의 정보를 조회할 권한이 없습니다.");
			}
		} else {
			throw new NexaServiceException("comm.err", "조회 가능여부 조회시 오류가 발생하였습니다.");
		}
	}
}
