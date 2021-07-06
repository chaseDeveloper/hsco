package hsco.hpm.bbs.HPM030201;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.DateUtil;
import hsco.cmm.util.FileUtils;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;

@Service("HPM030201Service")
public class HPM030201ServiceImpl extends BaseService  {

	protected Logger log = LoggerFactory.getLogger(HPM030201ServiceImpl.class);
	
	@Resource(name = "FileUploadService")
	protected FileUploadServiceImpl fileUploadServiceImpl;
	
	/**
	 * 게시판 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selBoard( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> boardKind = (List<Map>)baseDao.list("HPM030101DAO.selectBoardKind", inMap);
		DataSetMap outBoardKindMap = new DataSetMap();
		outBoardKindMap.setRowMaps(boardKind);
		outDataset.put("boardKind", outBoardKindMap);

		List <Map> records = (List<Map>)baseDao.list("HPM030201DAO.selectBoard", inMap);
		for(Map map : records){
		    String APP_ID = String.valueOf(map.get("APP_ID"));
			String BOARD_IDX = String.valueOf(map.get("BOARD_IDX"));
			map.put("BOARD_URL", getBoardUrl(APP_ID, BOARD_IDX));
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 게시물 구분 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selBoardKind( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> boardKind = (List<Map>)baseDao.list("HPM030101DAO.selectBoardKind", inMap);
		DataSetMap outBoardKindMap = new DataSetMap();
		outBoardKindMap.setRowMaps(boardKind);
		outDataset.put("boardKind", outBoardKindMap);
	}
	
	/**
	 * 게시물 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes" })
	public int saveBoardD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		int iRow = 0;
		
        int listSize = (inDsMap == null) ? 0 : inDsMap.size();
        for (int x = 0; x < listSize; x++) {
            
            Map map = inDsMap.get(x);
            
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            
            switch(rowType) {
                case DataSet.ROW_TYPE_DELETED :
                	baseDao.delete("HPM030201DAO.deleteAtchFileAll", (String)map.get("BOARD_IDX"));
                    iRow += baseDao.delete("HPM030201DAO.saveBoardD",map);
                    break;
            }   
        }
        return iRow;
	}
	
	/**
	 * 게시판 상세조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selBoardInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> boardKind = (List<Map>)baseDao.list("HPM030101DAO.selectBoardKind", inMap);
		DataSetMap outBoardKindMap = new DataSetMap();
		outBoardKindMap.setRowMaps(boardKind);
		outDataset.put("boardKind", outBoardKindMap);

		List <Map> records = (List<Map>)baseDao.list("HPM030201DAO.selectBoardDetail", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		List <Map> fileList = (List<Map>)baseDao.list("HPM030201DAO.selAtchFile", inMap);
		DataSetMap fileListMap = new DataSetMap();
		fileListMap.setRowMaps(fileList);
		outDataset.put("fileList",fileListMap);
	}
	
	/**
	 * 게시판 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveBoard( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for(Map map : list.getRowMaps()){
			String BOARD_IDX = StringUtil.nvl((String)map.get("BOARD_IDX"));
			if("".equals(BOARD_IDX)){
				BOARD_IDX = (String)baseDao.select("HPM030201DAO.getBoardIdx");
				String authKey = UUID.randomUUID().toString().replaceAll("-", "");
				map.put("BOARD_IDX", BOARD_IDX);
				map.put("AUTH_KEY", authKey);
				baseDao.insert("HPM030201DAO.insertBoard", map);
			}else{
				baseDao.update("HPM030201DAO.updateBoard", map);
				baseDao.delete("HPM030201DAO.deleteAtchFileAll", BOARD_IDX);
			}
			
			DataSetMap listFile = (DataSetMap) inDataset.get("input2");
			for(Map filemap : listFile.getRowMaps()){
				filemap.put("BOARD_IDX", BOARD_IDX);
				baseDao.insert("HPM030201DAO.insertAtchFile", filemap);
			}
		}
	}
	
	/**
	 * 게시판 Confirm 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings("rawtypes")
	public void updateConfirmYn( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for(Map map : list.getRowMaps()){
			baseDao.update("HPM030201DAO.updateConfirmYn", map);
		}
	}
	
	/**
	 * 게시판 파일조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selAtchFile( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("HPM030201DAO.selAtchFile", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 게시판 파일 다운로드정보
	 * @param (List<Map> list) 
	 * @return List <Map>
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public List<Map> downloadFileInfo(NexacroMapDTO xpDto) throws NexaServiceException {
		Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		List <Map> records = new ArrayList<Map>();
		int listSize = (list == null) ? 0 : list.size();
		for (int x = 0; x < listSize; x++) {
			Map inMap = list.get(x);
			if (inMap != null) {
				Map map = (Map)baseDao.select("HPM030201DAO.selAtchFileInfo", inMap);
				records.add(map);
			}
		}
		return records;
	}
	
	/**
	 * 게시판 파일 삭제 
	 * @param (List<Map> list) 
	 * @return List <Map>
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void deleteFile( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		for(Map map : inDsMap.getRowMaps()){
			baseDao.delete("HPM030201DAO.deleteAtchFile", map);
		}
	}
	
	/**
	 * 게시판 게시물 내부결재
	 * @param (List<Map> list) 
	 * @return List <Map>
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked"})
	public void innerSanctn( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> boardDetailList = new ArrayList<Map>();
		Map boardDetailMap = (Map)baseDao.select("HPM030101DAO.innerSanctn", inMap);
		String BOARD_IDX = (String) inMap.get("BOARD_IDX");
		String AUTH_KEY = (String) boardDetailMap.get("AUTH_KEY");
		boardDetailMap.put("BOARD_URL", getBoardUrl(BOARD_IDX, AUTH_KEY));
		boardDetailList.add(boardDetailMap);
		
		DataSetMap outBoardKindMap = new DataSetMap();
		outBoardKindMap.setRowMaps(boardDetailList);
		outDataset.put("output1", outBoardKindMap);
	}
	
	/**
	 * 게시판 파일 저장
	 * @param (List<Map> list) 
	 * @return List <Map>
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void uploadFile( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		List<Map> fileList = fileUploadServiceImpl.saveFileToStorage(getXpDto());

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(fileList);
		outDataset.put("filelist", outDsMap);
	}
	
	public String getBoardUrl(String boardIdx, String authKey){
		String BOARD_URL = "http://yeyak.hsuco.or.kr/bbs/selectBoardArticle.do?bbsId=";	//게시물미리보기 URL 
		BOARD_URL = BOARD_URL + boardIdx + "&nttId="+authKey;
		return BOARD_URL;
	}
	
	/**
	 * 파일 Storage 업로드
	 * - Service to Service
	 * @author LeeSJ
	 * @param xpDto
	 * @return 
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public List<Map> uploadFileToStorage(NexacroMapDTO xpDto) throws NexaServiceException {
		Map<String, Object> inVar = xpDto.getInVariableMap();
		Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
		HttpServletRequest request = xpDto.getRequest();
		List<Map> fileList = new ArrayList<Map>(); // 업로드 파일 정보

		// 첨부파일 정보
		DataSetMap fileInfo = (DataSetMap) inDataset.get("inputFile"); // List

		if (fileInfo != null) {

			String fileStorage = (String)inVar.get("fileLocation");
			try {
				MultipartHttpServletRequest mpRequest = (MultipartHttpServletRequest) request;
	
				// 파일 저장처리
				// 업로드 파일 정보 추출
				Iterator<String> iterFile = mpRequest.getFileNames();
				while (iterFile.hasNext()) {
					String formName = (String) iterFile.next();
					MultipartFile multiFile = mpRequest.getFile(formName);
					String oriFileName = multiFile.getOriginalFilename();
	
					if (!StringUtil.isNull(oriFileName)) {
						
						String oriExtName = oriFileName.substring(oriFileName.lastIndexOf('.') + 1, oriFileName.length());
						int inFileIdx = ObjectUtil.findRowIndexInDs(fileInfo, "ORGINL_FILE_NM", oriFileName);	//find file dataset
						Map<String, Object> fileInfoMap = (Map<String, Object>) fileInfo.get(inFileIdx);
						String inSysSeCode = (String) fileInfoMap.get("SYS_SE_CODE"); 	// 전달 시스템 구분
						String inJobSeCode = (String) fileInfoMap.get("JOB_SE"); 		// 전달 업무구분
						String inFileExtsn = (String) fileInfoMap.get("FILE_EXTSN"); 	// 전달 파일 확장자
						String inFileId = (String) fileInfoMap.get("FILE_ID"); 			// 전달 파일 ID
						String inFileTy = (String) fileInfoMap.get("FILE_TY"); 			// 전달 파일 타입
	
						//File save directory
						String storageDir = fileStorage + File.separator + inSysSeCode + File.separator + inJobSeCode + File.separator;
						String addFileDir = DateUtil.getYear()+File.separator+DateUtil.getMonth()+File.separator;
						String saveFileDir = storageDir + addFileDir;
						if (!FileUtils.isDirectory(saveFileDir)) {
							FileUtils.makeDir(saveFileDir);
						}
						
						//create saveFilename
						String saveFileName = UUID.randomUUID().toString() + "." + inFileExtsn;
						File file = new File(saveFileDir + saveFileName);
						multiFile.transferTo(file); // 파일저장
						
						// 저장정보 구성
						Map<String, String> resultfileInfoMap = new HashMap<String, String>(); // 업로드 파일정보
						
						long fileSize = new Long(multiFile.getSize()/1000); // 업로드 파일사이즈
						
						// 저장 파일명 정보 설정(TBCOM_CMMN_ATCHMNFL 테이블 구조)
						// 파일 순차번호는 자동 채번
						//resultfileInfoMap.put("FILE_SN", strFileSn); // 파일일련번호
						resultfileInfoMap.put("SYS_SE_CODE", inSysSeCode); // 시스템구분코드
						resultfileInfoMap.put("JOB_SE", inJobSeCode); // 업부구분코드
						resultfileInfoMap.put("FILE_STRE_COURS", addFileDir); // 파일저장경로
						resultfileInfoMap.put("STRE_FILE_NM", saveFileName); // 저장파일명
						resultfileInfoMap.put("ORGINL_FILE_NM", oriFileName); // 원본파일명
						resultfileInfoMap.put("FILE_EXTSN", oriExtName); // 파일확장자
						resultfileInfoMap.put("FILE_CN", fileSize+""); // 파일내용(파일ID)
						resultfileInfoMap.put("FILE_MG", fileSize+""); // 파일크기
						resultfileInfoMap.put("USE_AT", "1"); // 사용여부
						resultfileInfoMap.put("FILE_ID", inFileId); // 파일ID
						resultfileInfoMap.put("FILE_TY", inFileTy); // 파일타입
						fileList.add(resultfileInfoMap);
					}
				}
			} catch (Exception e) {
				throw new NexaServiceException("err.파일.업로드.실패");
			}
		}else{
			throw new NexaServiceException("err.파일.업로드.정보없음");
		}
		return fileList;
	}
}
