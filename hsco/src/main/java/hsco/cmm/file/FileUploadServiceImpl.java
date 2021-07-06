package hsco.cmm.file;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.DateUtil;
import hsco.cmm.util.FileUtils;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;
import hsco.mis.hrm.HRM070102.HRM070102ServiceImpl;

import java.awt.Image;
import java.io.File;
import java.math.BigDecimal;
import java.rmi.server.UID;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.swing.ImageIcon;

import org.apache.commons.lang.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: FileUploadService.java
 * @Description  	: File Upload
 * @author       	: 정윤원
 * @since        	: 2015. 8. 28.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        	작성자                	내용
 * ------------------------------------------------------------------
 *  2015. 8. 11.	정윤원			최초생성
 *  2015.10. 20.	이상준			데이터기반 업로드 처리 추가 : uploadSingleFileinfo, deleteFileInfo
 * </pre>
 */
@Service("FileUploadService")
public class FileUploadServiceImpl extends BaseService implements FileUploadService {
	
	protected Logger log = LoggerFactory.getLogger(FileUploadServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectFielSnMap( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		// 파일 업로드를 위한 파일일련번호 조회
		//Map<String, BigDecimal> fileSnMap = new HashMap<String, BigDecimal>();
		Map<String, BigDecimal> fileSnMap = (Map)baseDao.select("selectFileSnMap");
		BigDecimal seqFileSn = (BigDecimal)fileSnMap.get("FILE_SN");
		
		SimpleDateFormat sf = new SimpleDateFormat("yyyyMMdd");
        long today = System.currentTimeMillis();
        String ymd = sf.format(today);
        // 시퀀스 채번 서비스 호출 

    	String strFileSn = ymd +""+ seqFileSn;  // 파일일련번호 = YYYYMMDD + 시퀀스
    	
    	BigDecimal fileSn = new BigDecimal(strFileSn); // 파일일련번호
    	
    	fileSnMap.put("FILE_SN", fileSn);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.add(fileSnMap);
		outDataset.put("output_fsn", outDsMap2);
	}
	
	/**
	 * 파일순차 가져오기
	 * @param Long fileSn 파일일련번호
	 * @return Integer
	 */
	@SuppressWarnings({ "rawtypes" })
	public Integer selectFileOrdr(Map fileSn) {
		Integer fileOrdr = (Integer)baseDao.select("selectFileOrdr", fileSn);		
		
		return fileOrdr;
	}
	
	/**
	 * 업로드 파일 마스터 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void atchmnFileMastList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("selectAtchmnFileMast", inMap);
			
		if(records == null)
			records = new ArrayList<Map>();
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		   
		if(inMap != null){
			if(inMap.get("FILE_SN") != null){
				Object fileSnObj = inMap.get("FILE_SN");
				String type = fileSnObj.getClass().toString();
				//log.info("type==========" + type);
				if("java.lang.String".equals(type)){
					
					DataSetMap outDsMap2 = selectListAtchmnFile(inMap);
					
					outDataset.put("output2", outDsMap2);

				} else if("java.math.BigDecimal".equals(type)) {
					BigDecimal fileSn = (BigDecimal)fileSnObj;

						if(fileSn.longValue() > 0){
							DataSetMap outDsMap2 = selectListAtchmnFile(inMap);
							
							outDataset.put("output2", outDsMap2);
						} else {
								throw new NexaServiceException("err.조회조건.무효");
						}

				} else {
					DataSetMap outDsMap2 = selectListAtchmnFile(inMap);
					
					outDataset.put("output2", outDsMap2);
				}
			} else {
				DataSetMap outDsMap2 = selectListAtchmnFile(inMap);
				
				outDataset.put("output2", outDsMap2);
			}
		}
		
	}
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
	private DataSetMap selectListAtchmnFile(Map inMap) throws NexaServiceException {
    	List <Map> records2 = new ArrayList<Map>();
		if (inMap != null) {
			records2 = (List<Map>)baseDao.list("selectAtchmnFileList", inMap);
		} 
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		
		return outDsMap2;
    }
	
	/**
	 * 업로드 파일 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void atchmnFileList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = new ArrayList<Map>();

		if (inMap != null) {
			records = (List<Map>)baseDao.list("selectAtchmnFileList", inMap);
		} 
			
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
    /**
	 * 업로드 파일 목록을 조회한다.(multipart request 시에 사용)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAtchmnflList(BigDecimal fileSn, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        HashMap<String, Object> inMap = new HashMap<String, Object>();
        inMap.put("FILE_SN", fileSn);
        
		
        
        List <Map> records = (List<Map>)baseDao.list("selectAtchmnFileList", inMap);		
        
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("ds_files", outDsMap);

	}
	
	/**
	 * 파일정보 신규 저장(파일 업로드 시에 사용함)
	 * @param Long fileSn 파일일련번호
	 * @return Integer
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void insertAtchmnfl(DataSet ds, 
			Map<String, DataSetMap> outDataset) {
		//int iRow = 0;
		
		
		
		if(ds != null){
			int size = 0;
			List<HashMap> fList = convertDatasetToMap(ds);
            if(fList != null)
			    size = fList.size();

			//check 첨부마스터
			BigDecimal fileSn = (BigDecimal)ds.getObject(0,"FILE_SN");
			HashMap<String, Object> map2 = new HashMap<String, Object>();
			map2.put("FILE_SN", fileSn);
			Integer cnt = (Integer)baseDao.select("checkAtchmnFileMast", map2);
			
			if(cnt == 0){
				Map map1 = new HashMap();
				map1.put("FILE_SN", fileSn);       // 파일일련번호
				map1.put("SYS_SE_CODE", (String)ds.getObject(0,  "SYS_SE_CODE")); // 시스템구분코드 
				map1.put("JOB_SE", (String)ds.getObject(0,  "JOB_SE"));           // 업무구분코드
				ObjectUtil.setUserToMap(map1);

				baseDao.insert("insertAtchmnFileMast", map1);
			}
			for (int x = 0; x < size; x++) {
				
				Map map = fList.get(x);
				
				int rowType = ((Integer) map.get("ROW_TYPE")).intValue();
				
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("insertAtchmnFile", map);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("updateAtchmnFile2NotUse", map);
						break;
					case DataSet.ROW_TYPE_DELETED :
						// 사용여부만 변경할 경우 
						// 파일을 삭제할 경우
//						String useAt = (String)map.get("USE_AT");					
//						if("0".equals(useAt)){
							String savedPath = (String)map.get("FILE_STRE_COURS");
			        		String deleteFileName = (String)map.get("STRE_FILE_NM");
			        		String extName = (String)map.get("FILE_EXTSN");
			        		File delFile = new File(savedPath+ File.separator+ deleteFileName + "." + extName);
			        		if(delFile.exists()){
			        			if(delFile.delete()){
			        				baseDao.delete("deleteAtchmnFile", map);	
			        			} 
			        		}
												
//						} else {
//						    baseDao.insert("updateAtchmnFile2NotUse", map);
//				        } 

						break;
						
					default:
						break;
				
				}	
			}
		}
	}
	
	/**
	 * 첨부파일 정보 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int atchmnFileInfoUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		
		int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED :

					iRow += baseDao.update("updateAtchmnFile2NotUse", map);
					break;
				case DataSet.ROW_TYPE_DELETED :

					// 사용여부만 변경할 경우
//					String useAt = (String)map.get("USE_AT");					
//					if("0".equals(useAt)){
						String savedPath = (String)map.get("FILE_STRE_COURS");
		        		String deleteFileName = (String)map.get("STRE_FILE_NM");
		        		String extName = (String)map.get("FILE_EXTSN");
		        		File delFile = new File(savedPath+ File.separator+ deleteFileName + "." + extName);
		        		if(delFile.exists()){
		        			if(delFile.delete())
		        				iRow += baseDao.delete("deleteAtchmnFile", map);
		        		}
										
//					} else {
//					    baseDao.insert("updateAtchmnFile2NotUse", map);
//			        } 
					
					break;
				default:
					break;
			
			}	
			
		}

		return iRow;
		
	}
	
	/**
	 * 첨부파일 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int atchmnFileD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		
		int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);

			String savedPath = (String)map.get("FILE_STRE_COURS");
		    String deleteFileName = (String)map.get("STRE_FILE_NM");
		    String extName = (String)map.get("FILE_EXTSN");
		    File delFile = new File(savedPath+ File.separator+ deleteFileName + "." + extName);
		    iRow += baseDao.delete("deleteAtchmnFile", map);
		    if(delFile.exists()){
		    	delFile.delete();
		    }
										
		}

		return iRow;
		
	}
	
	/**
	 * 첨부파일 및 첨부 마스터 동시 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int deleteAtchmnMastFile( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		
		int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);

			String savedPath = (String)map.get("FILE_STRE_COURS");
		    String deleteFileName = (String)map.get("STRE_FILE_NM");
		    String extName = (String)map.get("FILE_EXTSN");
		    File delFile = new File(savedPath+ File.separator+ deleteFileName + "." + extName);
		    if(delFile.exists()){
		    	if(delFile.delete())
		    		iRow += baseDao.delete("deleteAtchmnFile", map);
		    }
											
		}
		if(iRow == listSize){
			Map map = list.get(0);
			iRow = baseDao.delete("deleteAtchmnFileMast", map);
		}
		

		return iRow;
		
	}
	
	@SuppressWarnings({ "rawtypes" })
	private List<HashMap> convertDatasetToMap(DataSet ds){
		
		List<HashMap> lst = new ArrayList<HashMap>();
		int size = ds.getRowCount();
		ds.setColumnDataType("FILE_ORDR", DataTypes.INT);
		
		for (int x = 0; x < size; x++) {
			HashMap<String, Object> map = new HashMap<String, Object>();
			map.put("FILE_SN", (BigDecimal)ds.getObject(x,  "FILE_SN"));
			map.put("FILE_ORDR", (Integer)ds.getObject(x,  "FILE_ORDR"));
			map.put("FILE_STRE_COURS", (String)ds.getObject(x,  "FILE_STRE_COURS"));
			map.put("STRE_FILE_NM", (String)ds.getObject(x, "STRE_FILE_NM"));
			map.put("ORGINL_FILE_NM", (String)ds.getObject(x, "ORGINL_FILE_NM"));
			map.put("FILE_EXTSN", (String)ds.getObject(x, "FILE_EXTSN"));
			map.put("FILE_CN", (Integer)ds.getObject(x, "FILE_MG"));
			map.put("FILE_MG", (Integer)ds.getObject(x, "FILE_MG"));
			map.put("USE_AT", (String)ds.getObject(x, "USE_AT"));
			map.put("FILE_ID", (String)ds.getObject(x, "FILE_ID"));
			map.put("FILE_TY", (String)ds.getObject(x, "FILE_TY"));
			map.put("ROW_TYPE", ds.getRowType(x));
			ObjectUtil.setUserToMap(map);
			lst.add(map);
		}

		
		return lst;
	}
	
	// ============================================================
	
	/**
	 * 파일 업로드
	 * - Service to Service
	 * @author LeeSJ
	 * @param xpDto
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({"unchecked"})
	public Map<String, Object> uploadSingleFileinfo(NexacroMapDTO xpDto) throws NexaServiceException {
		
		Map<String, Object> resultMap = null;
		Map <String, Object> inVar 			= xpDto.getInVariableMap();
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
		HttpServletRequest request 			= xpDto.getRequest();
		
		// 첨부파일 정보
		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");	// List
    	
    	if(fileInfo != null){
    		
    		String uploadDir = null;		// 업로드 디렉토리
    		boolean saveFile = false;		// 파일 저장여부
    		boolean isNewMaster = true; // 첨부마스터가 신규 인지 여부 신규(true)/ 이미존재하면 false
    		
    		ArrayList<Map<String, Object>> fileList = new ArrayList<Map<String,Object>>();	// 업로드 파일 정보
    		
    		String oriFileName = null;		// 실제 파일명
    		String oriExtName = null;		// 실제 확장자
    		String uniqueFileName = null;	// 변경(유일) 파일명
    		try{
    			
    			// [STEP1] 파일저장
	    		MultipartHttpServletRequest mpRequest = (MultipartHttpServletRequest)request;
    			
//    			int filInfoSize = fileInfo.size();

    			
    			// 파일일련번호 조회
				BigDecimal filesSn = null;
				
				
				String strFileSn = null;  ////String.valueOf(filesSn);
				strFileSn = (String)fileInfo.getMapValue(0, "FILE_SN");
				if(strFileSn != null){
					if(!"".equals(strFileSn)){
						filesSn = new BigDecimal(strFileSn);
						isNewMaster = false;
					}
				}

				
				resultMap = new HashMap<String, Object>();

				
				
				
				// 파일 저장처리
				// 업로드 파일 정보 추출
				Iterator<String> iterFile = mpRequest.getFileNames();
				while(iterFile.hasNext())
				{
					String formName = (String)iterFile.next();	
					
		    		MultipartFile multiFile = mpRequest.getFile(formName);
					oriFileName = multiFile.getOriginalFilename();

					if(!StringUtil.isNull(oriFileName))
					{
						oriExtName = oriFileName.substring(oriFileName.lastIndexOf('.') + 1, oriFileName.length());
			    		
						// 전달 파일정보
						int inFileIdx = ObjectUtil.findRowIndexInDs(fileInfo, "ORGINL_FILE_NM", oriFileName);
						Map<String, Object> inFileItem = (Map<String, Object>)fileInfo.get(inFileIdx);
		    			
		    			String inFileSn = (String)inFileItem.get("FILE_SN");				// 파일 일련번호 
						
		    			// 파일일련번호 설정
		    			if(strFileSn == null){
		    				if(inFileSn == null){
		    					// 파일에 일련번호가 없고 채번된 일련번호가 없을 경우 채번
		    					filesSn = selectFileSn();				// 파일일련번호 채번
		    					strFileSn = String.valueOf(filesSn);
		    				}else{
		    					strFileSn = inFileSn;
		    				}
		    			}
		    			
		    			String inSysSeCode = (String)inFileItem.get("SYS_SE_CODE");			// 전달 시스템 구분
		    			String inJobSeCode = (String)inFileItem.get("JOB_SE");				// 전달 업무구분
		    			
//		    			String inOrginlFileNm = (String)inFileItem.get("ORGINL_FILE_NM");	// 전달 파일명
//		    			String inFileExtsn = (String)inFileItem.get("FILE_EXTSN");			// 전달 파일 확장자
		    			String inFileId = (String)inFileItem.get("FILE_ID");				// 전달 파일 ID
		    			String inFileTy = (String)inFileItem.get("FILE_TY");				// 전달 파일 타입
		    			
			    		// 저장경로 설정
		    			String rootPath = null;
//						String path = null;
						
						String fileStoreLoc = (String)inVar.get("fileLocation");
						fileStoreLoc = StringUtil.replace(fileStoreLoc, "/", File.separator);
								
						// RootPath 구하기
						rootPath = fileStoreLoc;//servletcontext.getRealPath("upload");
						uploadDir = rootPath + File.separator + inSysSeCode + File.separator  + inJobSeCode;
//						path = fileStoreLoc + File.separator;
						
						
						// 디렉토리생성 확인
						if(!FileUtils.isDirectory(uploadDir)){
							FileUtils.makeDir(uploadDir);
						}
					
						
						uniqueFileName = ((new UID()).toString()).replaceAll(":", "");	// 임시 파일명생성
						uniqueFileName = strFileSn +  uniqueFileName;
						
						File uploadedFile = new File(uploadDir  + File.separator + uniqueFileName);		// 임시파일명으로 파일생성
						
						multiFile.transferTo(uploadedFile);								// 파일저장

						
						// 저장정보 구성
						Map<String, Object> fileItem = new HashMap<String, Object>();	// 업로드 파일정보
						
						Long mfSize = multiFile.getSize();
						long fileSize = mfSize.longValue();				// 업로드 파일사이즈
						
						// 저장 파일명 정보 설정(TBCOM_CMMN_ATCHMNFL 테이블 구조)
						// 파일 순차번호는 자동 채번
						fileItem.put("FILE_SN", strFileSn);				// 파일일련번호
						fileItem.put("SYS_SE_CODE", inSysSeCode);		// 시스템구분코드
						fileItem.put("JOB_SE", inJobSeCode);			// 업부구분코드
						fileItem.put("FILE_STRE_COURS", uploadDir);		// 파일저장경로
						fileItem.put("STRE_FILE_NM", uniqueFileName);	// 저장파일명
						fileItem.put("ORGINL_FILE_NM", oriFileName);	// 원본파일명
						fileItem.put("FILE_EXTSN", oriExtName);			// 파일확장자
						fileItem.put("FILE_CN", fileSize);				// 파일내용(파일ID)
						fileItem.put("FILE_MG", fileSize);				// 파일크기
						fileItem.put("USE_AT", "1");					// 사용여부
						fileItem.put("FILE_ID", inFileId);				// 파일ID
						fileItem.put("FILE_TY", inFileTy);				// 파일타입

						
						fileList.add(fileItem);
					}
				}
				
				saveFile = true; // 파일 저장 완료 처리
				
				// 파일정보 DB 처리
				// 마스터 정보 처리
				int upFileListSize = fileList.size();

				int fileOrdr = -1;
				for(int i = 0; i < upFileListSize; i++)
				{
					Map<String, Object> upFileItem = fileList.get(i);
					// 첫 행의 경우 마스터 정보에 Insert
					if(i == 0){
						if(isNewMaster)
						    baseDao.insert("insertAtchmnFileMast", upFileItem);
					}
					
					// 상세 파일순차 조회
					fileOrdr = (Integer)baseDao.select("selectFileOrdr", upFileItem);
					upFileItem.put("FILE_ORDR", fileOrdr);
					
					// 상세 정보 저장 
					baseDao.insert("insertAtchmnFile", upFileItem);
				}
				
				// 저장 파일 정모 목록 조회
				//Map<String, Object> resSchMap = new HashMap<String, Object>();
				//resSchMap.put("FILE_SN", strFileSn);
				//List<Map> resultFileList = (List<Map>)baseDao.list("selectAtchmnFileList", resSchMap);
				
				resultMap.put("FILE_SN", strFileSn);			// 파일 일련번호
				resultMap.put("FILE_ORDR", fileOrdr);			// 상세 파일순차 번호(최종)
				resultMap.put("UP_FILE_CNT", upFileListSize);	// 파일 수
				resultMap.put("UP_FILE_LIST", fileList);		// 업로드 파일 정보
				
    		}catch(Exception ex){
 			
    			log.error("!!ERROR {" + ex.getClass().getName() + "} 파일 업로드 중 오류발생 " + ExceptionUtils.getStackTrace(ex));
    			
    			// 저장된 파일은 삭제
    			log.error(" saveFile = " + saveFile);
    			
    			if(saveFile)
    			{
    				int fileListSize = 0;
    			    if(fileList != null) 
    			    	fileListSize = fileList.size();
    				log.error(" Delete File Count = " + fileListSize);
    				
    				for(int i = 0; i < fileListSize; i++)
    				{
    					Map<String, Object> item = (Map<String, Object>)fileList.get(i);
    					String delStrePath = (String)item.get("FILE_STRE_COURS");
    					String delFileName = (String)item.get("STRE_FILE_NM");
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
	 * 파일 업로드
	 * - Service to Service
	 * @author LeeSJ
	 * @param xpDto
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	public Map<String, Object> uploadSingleFileWidthSn(NexacroMapDTO xpDto) throws NexaServiceException {
		
		Map<String, Object> resultMap = null;
		
		Map <String, Object> inVar 			= xpDto.getInVariableMap();
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();

		HttpServletRequest request 			= xpDto.getRequest();
		
		// 첨부파일 정보
		DataSetMap fileBaseInfo = (DataSetMap)inDataset.get("inputFileBase");	// Map
		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");			// List
    	
    	if(fileInfo != null){
    		
    		boolean singleFileSn = false;
    		boolean modeTest = false;
    		Map fileBaseMap = null;
    		if (fileBaseInfo == null){
    			singleFileSn = false;
    			modeTest = false;
    		}else{
    			fileBaseMap = fileBaseInfo.get(0);
    			String inSingleFileSn = (String)fileBaseMap.get("SINGLE_FILE_SN");
    			String inModeTest = (String)fileBaseMap.get("MODE_TEST");
    			singleFileSn = inSingleFileSn == null ? false : ("Y".equals(inSingleFileSn) ? true : false);
    			modeTest = inModeTest == null ? false : ("Y".equals(inModeTest) ? true : false);
    		}
    		
    		
    		String uploadDir = null;		// 업로드 디렉토리
    		boolean saveFile = false;		// 파일 저장여부
    		
    		ArrayList<Map<String, Object>> mstList = new ArrayList<Map<String,Object>>();	// 업로드 마스터 정보
    		ArrayList<Map<String, Object>> fileList = new ArrayList<Map<String,Object>>();	// 업로드 파일 정보
    		
    		String oriFileName = null;		// 실제 파일명
    		String oriExtName = null;		// 실제 확장자
    		String uniqueFileName = null;	// 변경(유일) 파일명
    		try{
    			
    			// [STEP1] 파일저장
	    		MultipartHttpServletRequest mpRequest = (MultipartHttpServletRequest)request;

	    		resultMap = new HashMap<String, Object>();
				
				// 파일 저장처리
				// 업로드 파일 정보 추출
				Iterator<String> iterFile = mpRequest.getFileNames();
				while(iterFile.hasNext())
				{
					String formName = (String)iterFile.next();	
					
		    		MultipartFile multiFile = mpRequest.getFile(formName);
					oriFileName = multiFile.getOriginalFilename();
					
					
					if(!StringUtil.isNull(oriFileName))
					{
						oriExtName = oriFileName.substring(oriFileName.lastIndexOf('.') + 1, oriFileName.length());
			    		
						// 멀티파트에서 추출한 대상 파일의 파일명을 기준으로 파일정보 목록에서 전달 파일정보를 추출한다. - inputFile
						int inFileIdx = ObjectUtil.findRowIndexInDs(fileInfo, "ORGINL_FILE_NM", oriFileName);
						Map<String, Object> inFileItem = (Map<String, Object>)fileInfo.get(inFileIdx);
		    			
						String inFileSn = (String)inFileItem.get("FILE_SN");				// 전달 파일 일련번호
						String inSysSeCode = (String)inFileItem.get("SYS_SE_CODE");			// 전달 시스템 구분
		    			String inJobSeCode = (String)inFileItem.get("JOB_SE");				// 전달 업무구분
		    			
//		    			String inOrginlFileNm = (String)inFileItem.get("ORGINL_FILE_NM");	// 전달 파일명
//		    			String inFileExtsn = (String)inFileItem.get("FILE_EXTSN");			// 전달 파일 확장자
		    			String inFileId = (String)inFileItem.get("FILE_ID");				// 전달 파일 ID
		    			String inFileTy = (String)inFileItem.get("FILE_TY");				// 전달 파일 타입
						
						String strFileSn = null;	// 저장용 파일일련번호
//						BigDecimal filesSn = null;	// 신규 채번 파일일련번호
						
		    			// 파일일련번호 설정
	    				if(inFileSn == null){
	    					// 파일정보에 일련번호가 없고 채번된 일련번호가 없을 경우 채번
	    					//filesSn = selectFileSn();				// 파일일련번호 채번
	    					//strFileSn = String.valueOf(filesSn);
	    				
	    					continue;
	    					
	    				}else{
	    					strFileSn = inFileSn;
	    				}
	    				
	    				// 파일일련번호에 해당하는 마스터 정보 존해 확인
	    				int regMstCnt = (Integer)baseDao.select("checkAtchmnFileMast", inFileItem);
	    				
	    				// 마스터 저장정보 구성
	    				Map<String, Object> mstItem = new HashMap<String, Object>();	// 업로드 파일정보
	    				if(regMstCnt == 0){
	    					mstItem.put("FILE_SN", strFileSn);
	    					mstItem.put("SYS_SE_CODE", inSysSeCode);
	    					mstItem.put("JOB_SE", inJobSeCode);
	    					
	    					mstList.add(mstItem);
	    				}
		    				    				
			    		// 저장경로 설정
		    			String rootPath = null;
						String upFilePath = null;
						
						String fileStoreLoc = (String)inVar.get("fileLocation");
						fileStoreLoc = StringUtil.replace(fileStoreLoc, "/", File.separator);
								
						// RootPath 구하기
						rootPath = fileStoreLoc;//servletcontext.getRealPath("upload");
						uploadDir = rootPath + File.separator + inSysSeCode + File.separator  + inJobSeCode;
						
						uniqueFileName = ((new UID()).toString()).replaceAll(":", "");	// 임시 파일명생성
						uniqueFileName = strFileSn +  uniqueFileName;
						
						upFilePath = uploadDir  + File.separator + uniqueFileName;
						File uploadedFile = new File(upFilePath);						// 임시파일명으로 파일생성
						
						if(!modeTest){
							// 디렉토리생성 확인
							if(!FileUtils.isDirectory(uploadDir)){
								FileUtils.makeDir(uploadDir);
							}
							
							multiFile.transferTo(uploadedFile);								// 파일저장
						}

						
						// 저장정보 구성
						Map<String, Object> fileItem = new HashMap<String, Object>();	// 업로드 파일정보
						Long mfSize = multiFile.getSize();
						long fileSize = mfSize.longValue();				// 업로드 파일사이즈
						
						// 저장 파일명 정보 설정(TBCOM_CMMN_ATCHMNFL 테이블 구조)
						// 파일 순차번호는 자동 채번
						fileItem.put("FILE_SN", strFileSn);				// 파일일련번호
						fileItem.put("SYS_SE_CODE", inSysSeCode);		// 시스템구분코드
						fileItem.put("JOB_SE", inJobSeCode);			// 업부구분코드
						fileItem.put("FILE_STRE_COURS", uploadDir);		// 파일저장경로
						fileItem.put("STRE_FILE_NM", uniqueFileName);	// 저장파일명
						fileItem.put("ORGINL_FILE_NM", oriFileName);	// 원본파일명
						fileItem.put("FILE_EXTSN", oriExtName);			// 파일확장자
						fileItem.put("FILE_CN", fileSize);				// 파일내용(파일ID)
						fileItem.put("FILE_MG", fileSize);				// 파일크기
						fileItem.put("USE_AT", "1");					// 사용여부
						fileItem.put("FILE_ID", inFileId);				// 파일ID
						fileItem.put("FILE_TY", inFileTy);				// 파일타입
						
						
						fileList.add(fileItem);
					}
				}
				
				saveFile = modeTest ? false : true; // 파일 저장 완료 처리
				
				
				// 파일정보 DB 처리
				int i = 0;
				int j = 0;
				
				// 마스터 정보 처리
				int upMstListSize = mstList.size();
				for(i = 0; i < upMstListSize; i++){
					Map<String, Object> upMstItem = mstList.get(i);
					
					if(!modeTest){
						baseDao.insert("insertAtchmnFileMast", upMstItem);
					}
				}
				
				// 파일 정보 처리
				int upFileListSize = fileList.size();
				int fileOrdr = -1;
				for(i = 0; i < upFileListSize; i++)
				{
					Map<String, Object> upFileItem = fileList.get(i);
					
					String upItemSn = (String)upFileItem.get("FILE_SN");	// 대상 파일일련번호
					
					Map<String, Object> checkMap = new HashMap<String, Object>();
					checkMap.put("FILE_SN", upItemSn);
					
					// 마스터별 1개의 첨부파일만 존재하는 Case이므로 기존파일은 삭제한다.
					if(singleFileSn){
						
						// 상세 파일 존재여부 확인
						int regFileCnt = (Integer)baseDao.select("checkAtchmnFile", checkMap);
						if(regFileCnt > 0){
							
							// 대상 파일 조회
							List delFileList = (List)baseDao.list("selectAtchmnFileList", checkMap);
							
							
							int delFileListSize = delFileList == null ? 0 : delFileList.size();
							for(j = 0; j < delFileListSize; j++)
							{
								Map<String, Object> delFileItem = (Map<String, Object>)delFileList.get(j);
								
								// 실제 파일삭제
								String delStrePath = (String)delFileItem.get("FILE_STRE_COURS");		// 파일 저장경로
								String delFileName = (String)delFileItem.get("STRE_FILE_NM");		// 저장 파일명
								String delFileExtsn = (String)delFileItem.get("FILE_EXTSN");			// 파일 확장자
								String delFilePath = delStrePath + delFileName;
								
								if(!modeTest){
									boolean deleteSuccess = FileUtils.removeFile(delFilePath);
									if(!deleteSuccess){
										delFilePath = delStrePath + delFileName + File.separator + delFileExtsn;
										deleteSuccess = FileUtils.removeFile(delFilePath);
										
										if(deleteSuccess){
											// TODO
										}
									}
								
									// 상세정보 삭제
									baseDao.delete("deleteAtchmnFile", delFileItem);	// 파일 상세정보 삭제
								}
							}
						}
					}
					
					// 상세 파일순차 조회
					fileOrdr = (Integer)baseDao.select("selectFileOrdr", checkMap);
					upFileItem.put("FILE_ORDR", fileOrdr);
					
					if(!modeTest){
						// 상세 정보 저장 
						baseDao.insert("insertAtchmnFile", upFileItem);
					}
				}
				
				// 저장 파일 정보 설정				
				//resultMap.put("FILE_SN", strFileSn);			// 파일 일련번호
				//resultMap.put("FILE_ORDR", fileOrdr);			// 상세 파일순차 번호(최종)
				resultMap.put("UP_FILE_CNT", upFileListSize);	// 파일 수
				resultMap.put("UP_FILE_LIST", fileList);		// 업로드 파일 정보
				
    		}catch(Exception ex){
    			    			
    			log.error("!!ERROR {" + ex.getClass().getName() + "} 파일 업로드 중 오류발생 " + ExceptionUtils.getStackTrace(ex));
    			
    			// 저장된 파일은 삭제
    			log.error(" saveFile = " + saveFile);
    			
    			if(saveFile)
    			{
    				int fileListSize = 0;
    				fileListSize = fileList.size();
    				log.error(" Delete File Count = " + fileListSize);
    				
    				for(int i = 0; i < fileListSize; i++)
    				{
    					Map<String, Object> item = (Map<String, Object>)fileList.get(i);
    					String delStrePath = (String)item.get("FILE_STRE_COURS");
    					String delFileName = (String)item.get("STRE_FILE_NM");
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
	 * 업로드 파일 삭제
	 * - Service To Service
	 * @author LeeSJ
	 * @param xpDto
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({"unchecked","rawtypes"})
	public Map<String, Object> deleteFileInfo(NexacroMapDTO xpDto) throws NexaServiceException {
		
		Map<String, Object> resultMap = null;
		
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();

		
		DataSetMap inMapInfo = null;
		
		inMapInfo = (DataSetMap)inDataset.get("inputFile");
		if(inMapInfo == null){
			inMapInfo = (DataSetMap)inDataset.get("input1");
		}
		
		int infoSize = (inMapInfo == null) ? 0 : inMapInfo.size();

		if (infoSize > 0){
			
			resultMap = new HashMap<String, Object>();
			
			List<Map<String, Object>> fileList = new ArrayList<Map<String,Object>>();
			int targetListSize = 0;
			for(int i = 0; i < infoSize; i++)
			{
				Map inItem = inMapInfo.get(i);
		
			
				String inFileSn = (String)inItem.get("FILE_SN");		// 파일일련번호
				String inFileOrdr = (String)inItem.get("FILE_ORDR");	// 파일순차번호
			
				log.debug("FILE_SN = " + inFileSn + " :: FILE_ORDR = " + inFileOrdr);
				
			
				if(!StringUtil.isNull(inFileSn))
				{	
					// 대상 파일 조회
					List targetList = (List)baseDao.list("selectAtchmnFileList", inItem);
					targetListSize = targetList == null ? 0 : targetList.size();
					
					int j = 0;
					for(j = 0; j < targetListSize; j++)
					{
						Map<String, Object> targetItem = (Map<String, Object>)targetList.get(j);
						
						// 상세정보 삭제
						baseDao.delete("deleteAtchmnFile", targetItem);	// 파일 상세정보 삭제
						
						// 실제 파일삭제
						String delStrePath = (String)targetItem.get("FILE_STRE_COURS");
						String delFileName = (String)targetItem.get("STRE_FILE_NM");
						String delFilePath = delStrePath + delFileName;
						FileUtils.removeFile(delFilePath);
						
						fileList.add(targetItem);
					}
					
					// 상세 목록카은트
					int detailCount = (Integer)baseDao.select("checkAtchmnFile", inItem);
					if(detailCount == 0)
					{
						// 마스터 삭제
						baseDao.delete("deleteAtchmnFileMast", inItem);
					}
					
				}else{
					String errMsg = "첨부파일 삭제(파일일련번호 없음)";
					throw new NexaServiceException("fail.삭제.실패", errMsg);
				}
			}
			
			resultMap.put("IN_FILE_CNT", infoSize);			// 요청 파일 수
			resultMap.put("DEL_FILE_CNT", targetListSize);	// 삭제 파일 수
			resultMap.put("DEL_FILE_LIST", fileList);		// 업로드 파일 정보
		}
		
		return resultMap;
	}
	
	/**
	 * 업로드 파일 삭제
	 * - Service To Service
	 * @param fileSn
	 * @param fileOrdr
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"rawtypes"})
	public Map<String, Object> deleteFileInfo(Map fileInfo) throws NexaServiceException {
	
		Map<String, Object>result = null;
		
		String fileSn = (String)fileInfo.get("FILE_SN");
		String fileOrdr = (String)fileInfo.get("FIILE_ORDR");
		
		result = deleteFileInfo(fileSn, fileOrdr);
		
		return result;
	}
	
	/**
	 * 업로드 파일 삭제
	 * - Service To Service
	 * @param fileSn
	 * @param fileOrdr
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({"unchecked","rawtypes"})
	public Map<String, Object> deleteFileInfo(String fileSn, String fileOrdr) throws NexaServiceException {
		
		Map<String, Object> resultMap = null;
	
		resultMap = new HashMap<String, Object>();
			
		List<Map<String, Object>> fileList = new ArrayList<Map<String,Object>>();
		
		log.debug("FILE_SN = " + fileSn + " :: FILE_ORDR = " + fileOrdr);
				
		int reqSize = 0;
		int targetListSize = 0;
		if(!StringUtil.isNull(fileSn))
		{	
			reqSize = 1;
			
			Map<String, Object> inItem = new HashMap<String, Object>();
			inItem.put("FILE_SN", fileSn);
			inItem.put("FILE_ORDR", fileOrdr);
			
			// 대상 파일 조회
			List targetList = (List)baseDao.list("selectAtchmnFileList", inItem);
			targetListSize = targetList == null ? 0 : targetList.size();
					
			int j = 0;
			for(j = 0; j < targetListSize; j++)
			{
				Map<String, Object> targetItem = (Map<String, Object>)targetList.get(j);
				
				// 상세정보 삭제
				baseDao.delete("deleteAtchmnFile", targetItem);	// 파일 상세정보 삭제
				
				// 실제 파일삭제
				String delStrePath = (String)targetItem.get("FILE_STRE_COURS");		// 파일 저장경로
				String delFileName = (String)targetItem.get("STRE_FILE_NM");		// 저장 파일명
				String delFileExtsn = (String)targetItem.get("FILE_EXTSN");			// 파일 확장자
				String delFilePath = delStrePath + delFileName;
				
				boolean deleteSuccess = FileUtils.removeFile(delFilePath);
				if(deleteSuccess){
					fileList.add(targetItem);
				}else{
					delFilePath = delStrePath + delFileName + File.pathSeparator + delFileExtsn;
					deleteSuccess = FileUtils.removeFile(delFilePath);
					
					if(deleteSuccess){
						fileList.add(targetItem);
					}
				}
			}
			
			// 상세 목록카은트
			int detailCount = (Integer)baseDao.select("checkAtchmnFile", inItem);
			if(detailCount == 0){
				// 마스터 삭제
				baseDao.delete("deleteAtchmnFileMast", inItem);
			}
					
		}else{
			String errMsg = "첨부파일 삭제(파일일련번호 없음)";
			throw new NexaServiceException("fail.삭제.실패", errMsg);
		}
			
		resultMap.put("IN_FILE_CNT", reqSize);			// 요청 파일 수
		resultMap.put("DEL_FILE_CNT", targetListSize);	// 삭제 파일 수
		resultMap.put("DEL_FILE_LIST", fileList);		// 업로드 파일 정보
		
		return resultMap;
	}

	/**
	 * 업로드 파일 일괄 삭제
	 * - Service To Service
	 * @param fileSn
	 * @param fileOrdr
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({"unchecked","rawtypes"})
	public void deleteFileAll(String fileSn) throws NexaServiceException {
		
		log.debug("FILE_SN = " + fileSn);

		int targetListSize = 0;
		if(!StringUtil.isNull(fileSn))
		{	
			
			Map<String, Object> inItem = new HashMap<String, Object>();
			inItem.put("FILE_SN", fileSn);
			
			// 대상 파일 조회
			List targetList = (List)baseDao.list("selectAtchmnFileList", inItem);
			targetListSize = targetList == null ? 0 : targetList.size();
					
			int j = 0;
			
			for(j = 0; j < targetListSize; j++) {
				
				Map map = (Map<String, Object>) targetList.get(j);

				String savedPath = (String)map.get("FILE_STRE_COURS");
			    String deleteFileName = (String)map.get("STRE_FILE_NM");
			    String extName = (String)map.get("FILE_EXTSN");
			    File delFile = new File(savedPath+ File.separator+ deleteFileName + "." + extName);
			    baseDao.delete("deleteAtchmnFile", map);
			    if(delFile.exists()){
			    	delFile.delete();
			    }
											
			}
			
			// 상세 목록카은트
			int detailCount = (Integer)baseDao.select("checkAtchmnFile", inItem);
			if(detailCount == 0){
				// 마스터 삭제
				baseDao.delete("deleteAtchmnFileMast", inItem);
			}
					
		}
	}
	
	/**
     * 첨부파일을 업로드하고 공통 첨부파일정보에 저장한 정보를 반환한다.
     * @param file
     * @param fieldInfo
     * @param inputMap
     * @return
     * @throws Exception
     */
    @SuppressWarnings({"rawtypes", "unchecked" })
    public void fileUpload(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	Map<String, Object> upResult = null;
    	if(fileInfo != null){
    		
    		NexacroMapDTO xpDto = getXpDto();
    		setFileLocation(getFileLocation());
    		
    		upResult = (Map<String, Object>)uploadSingleFileinfo(xpDto);
    		
    		List<Map> resultList = (List<Map>)upResult.get("UP_FILE_LIST");
    		
    		DataSetMap outDsMap = new DataSetMap();
    		outDsMap.setRowMaps(resultList);
    		outDataset.put("fileList", outDsMap);
    		
    	}else{
    		throw new NexaServiceException("err.파일.업로드.정보없음");
    	}
    }
    
	/**
	 * 온비드 파일 업로드
	 * - Service to Service
	 * @author LeeSJ
	 * @param xpDto
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({"unchecked"})
	public Map<String, Object> uploadOnbidFile(NexacroMapDTO xpDto) throws NexaServiceException {
		
		Map<String, Object> resultMap = null;
		Map <String, Object> inVar 			= xpDto.getInVariableMap();
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
		HttpServletRequest request 			= xpDto.getRequest();
		
		// 첨부파일 정보
		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");	// List
		DataSetMap atchInfo = (DataSetMap)inDataset.get("input3");	// List
    	
    	if(fileInfo != null){
    		
    		String uploadDir = null;		// 업로드 디렉토리
    		
    		boolean saveFile = false;		// 파일 저장여부
    		//boolean isNewMaster = true; // 첨부마스터가 신규 인지 여부 신규(true)/ 이미존재하면 false
    		
    		ArrayList<Map<String, Object>> fileList = new ArrayList<Map<String,Object>>();	// 업로드 파일 정보
    		
    		String oriFileName = null;		// 실제 파일명
    		String oriExtName = null;		// 실제 확장자
    		String uniqueFileName = null;	// 변경(유일) 파일명
    		try{
    			
    			// [STEP1] 파일저장
	    		MultipartHttpServletRequest mpRequest = (MultipartHttpServletRequest)request;
    			    			
    			// 파일일련번호 조회
				//BigDecimal trnsId = null;
								
				
				
				resultMap = new HashMap<String, Object>();				
				
				// 파일 저장처리
				// 업로드 파일 정보 추출
				Iterator<String> iterFile = mpRequest.getFileNames();
				while(iterFile.hasNext())
				{
					String formName = (String)iterFile.next();	
					
		    		MultipartFile multiFile = mpRequest.getFile(formName);
					oriFileName = multiFile.getOriginalFilename();

					if(!StringUtil.isNull(oriFileName))
					{
						oriExtName = oriFileName.substring(oriFileName.lastIndexOf('.') + 1, oriFileName.length());
			    		
						System.out.println("########## oriFileName : " + oriFileName);
						
						// 전달 파일정보
						int inFileIdx = ObjectUtil.findRowIndexInDs(fileInfo, "ORGINL_FILE_NM", oriFileName);
						Map<String, Object> inFileItem = (Map<String, Object>)fileInfo.get(inFileIdx);

						inFileIdx = ObjectUtil.findRowIndexInDs(atchInfo, "ATCH_FILE_NM", oriFileName);
						Map<String, Object> inAtchItem = (Map<String, Object>)atchInfo.get(inFileIdx);
						
		    			String inSysSeCode = (String)inFileItem.get("SYS_SE_CODE");			// 전달 시스템 구분
		    			String inJobSeCode = (String)inFileItem.get("JOB_SE");				// 전달 업무구분
		    			
		    			//String inFileSn = (String)inFileItem.get("TRNS_ID");				// 파일 일련번호 
		    			
			    		// 저장경로 설정
		    			String rootPath = null;
						//String path = null;						
						String fileStoreLoc = (String)inVar.get("fileLocation");
						fileStoreLoc = StringUtil.replace(fileStoreLoc, "/", File.separator);								
						// RootPath 구하기
						rootPath = fileStoreLoc;//servletcontext.getRealPath("upload");
						
						uploadDir = rootPath + File.separator + inSysSeCode + File.separator  + inJobSeCode + File.separator + "A_files" + File.separator + "data";
						//path = fileStoreLoc + File.separator;
											
						// 디렉토리생성 확인
						if(!FileUtils.isDirectory(uploadDir)){
							FileUtils.makeDir(uploadDir);
						}					
						
						String strTrnsId = (String)inAtchItem.get("TRNS_ID");
						
						uniqueFileName = ((new UID()).toString()).replaceAll(":", "");	// 임시 파일명생성
						uniqueFileName = strTrnsId +  uniqueFileName;
						String fullName = uploadDir  + File.separator + uniqueFileName;
						
						File uploadedFile = new File(fullName);		// 임시파일명으로 파일생성
												
						System.out.println("########## UPLOAD FiLE PATH : " + uploadedFile);						
						
						multiFile.transferTo(uploadedFile);								// 파일저장
						
						// 저장정보 구성
						Map<String, Object> fileItem = new HashMap<String, Object>();	// 업로드 파일정보
						
						//Long mfSize = multiFile.getSize();
						//long fileSize = mfSize.longValue();				// 업로드 파일사이즈
						
						// 저장 파일명 정보 설정(TBCOM_CMMN_ATCHMNFL 테이블 구조)
						// 파일 순차번호는 자동 채번
						fileItem.put("TRNS_ID"     , strTrnsId);				// 파일일련번호
						fileItem.put("DOC_KIND_CD" , (String)inAtchItem.get("DOC_KIND_CD"));	//
						fileItem.put("PHYS_FILE_NM", uniqueFileName);	// 저장파일명
						fileItem.put("ATCH_FILE_NM", oriFileName);	// 원본파일명
						fileItem.put("REFN_KEY"    , (String)inAtchItem.get("REFN_KEY"));
						
						fileList.add(fileItem);
					}
				}
				
				saveFile = true; // 파일 저장 완료 처리
				
				// 파일정보 DB 처리
				// 마스터 정보 처리
				int upFileListSize = fileList.size();

				for(int i = 0; i < upFileListSize; i++)
				{
					Map<String, Object> upFileItem = fileList.get(i);
					
					// 상세 정보 저장 
					baseDao.insert("insertOnbidFile", upFileItem);
				}				
			
				resultMap.put("UP_FILE_CNT", upFileListSize);	// 파일 수
				resultMap.put("UP_FILE_LIST", fileList);		// 업로드 파일 정보
				
    		}catch(Exception ex){
 			
    			log.error("!!ERROR {" + ex.getClass().getName() + "} 파일 업로드 중 오류발생 " + ExceptionUtils.getStackTrace(ex));
    			
    			// 저장된 파일은 삭제
    			log.error(" saveFile = " + saveFile);
    			
    			if(saveFile)
    			{
    				int fileListSize = 0;
    			    if(fileList != null) 
    			    	fileListSize = fileList.size();
    				log.error(" Delete File Count = " + fileListSize);
    				
    				for(int i = 0; i < fileListSize; i++)
    				{
    					Map<String, Object> item = (Map<String, Object>)fileList.get(i);
    					String delFilePath = uploadDir  + File.separator + (String)item.get("PHYS_FILE_NM");
    					FileUtils.removeFile(delFilePath);
    				}
    			}	
    			throw new NexaServiceException("err.파일.업로드.실패", ex);
    		}
    	}
    	return resultMap;
	}
	
	/**
	 * RichTextEditor File Upload
	 * @param (List<Map> list) 
	 * @return List <Map>
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void richTextEditorImageUpload( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		List<Map> fileList = saveFileToStorage(getXpDto());

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(fileList);
		outDataset.put("filelist", outDsMap);
	}
	
	/**
	 * Save To FileStorage
	 * - Service to Service
	 * @author LeeSJ
	 * @param xpDto
	 * @return
	 * @throws NexaServiceException
	 * 
	 ** input DataSet Interface (dataset.name = inputFile)
	 * SYS_SE_CODE		// 전달 시스템 구분
	 * JOB_SE			// 전달 업무구분
	 * FILE_EXTSN		// 전달 파일 확장자
	 * FILE_ID			// 전달 파일 ID
	 * FILE_TY			// 전달 파일 타입
	 * ORGINL_FILE_NM	// 원본 파일명
	 * FILE_WH_YN		// 파일 WIDTH HEIGHT 필요한경우 (Y/N)
	 * 
	 ** input SaveInfo Interface (dataset.name = inputFileStorageInfo) 
	 * DEFAULT_DIR	// 저장경로 (미입력시 : SYS_SE_CODE/JOB_SE)
	 * ADD_DIR		// 추가경로
	 * 
	 * ** result Map Interface 
	 * SYS_SE_CODE		// 시스템구분코드
	 * JOB_SE			// 업부구분코드
	 * FILE_STRE_COURS	// 파일저장경로
	 * STRE_FILE_NM		// 저장파일명
	 * ORGINL_FILE_NM	// 원본파일명
	 * FILE_EXTSN		// 파일확장자
	 * FILE_CN			// 파일내용(파일ID)
	 * FILE_MG			// 파일크기
	 * USE_AT			// 사용여부
	 * FILE_ID			// 파일ID
	 * FILE_TY			// 파일타입
	 * FILE_WIDTH		// 파일이미지 WIDTH
	 * FILE_HEIGHT		// 파일이미지 HEIGHT
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public List<Map> saveFileToStorage(NexacroMapDTO xpDto) throws NexaServiceException {
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
						String fileWidthHeightYn = (String) fileInfoMap.get("FILE_WH_YN"); 			// 전달 파일 타입
						int fileWidth = 0;
						int fileHeight = 0;
						
						//File save directory
						String storageDir = fileStorage + File.separator + inSysSeCode + File.separator + inJobSeCode;
						String addFileDir = "";
						if(inJobSeCode.indexOf("boardfile")>-1){
							addFileDir = File.separator + DateUtil.getYear()+File.separator+DateUtil.getMonth()+File.separator;
						}
						
						// Storage 경로지정시
						DataSetMap inDsFileStorageInfo = (DataSetMap) inDataset.get("inputFileStorageInfo");
						if(inDsFileStorageInfo != null){
							Map<String, Object> fileStorageInfo = inDsFileStorageInfo.get(0);
							if(!"".equals(StringUtil.nvl((String)fileStorageInfo.get("DEFAULT_DIR")))){
								storageDir = fileStorage + File.separator;
								storageDir = storageDir + StringUtil.nvl((String)fileStorageInfo.get("DEFAULT_DIR"));		// DEFAULT 경로
							}
							
							if(!"".equals(StringUtil.nvl((String)fileStorageInfo.get("ADD_DIR")))){
								addFileDir = StringUtil.nvl((String)fileStorageInfo.get("ADD_DIR"));						// 추가저장경로
							}else{
								addFileDir = "";
							}
						}
						String saveFileDir = storageDir + addFileDir;
						if (!FileUtils.isDirectory(saveFileDir)) {
							FileUtils.makeDir(saveFileDir);
						}
						
						//create saveFilename
						String saveFileName = UUID.randomUUID().toString() + "." + inFileExtsn;
						File file = new File(saveFileDir + saveFileName);

						multiFile.transferTo(file); // 파일저장
						
						if("Y".equals(fileWidthHeightYn)
								|| bImgFile(inFileExtsn)){
								
								Image img = new ImageIcon(saveFileDir + saveFileName).getImage();
								fileWidth = img.getWidth(null);
								fileHeight = img.getHeight(null);
							}
						
						// 저장정보 구성
						Map<String, String> resultfileInfoMap = new HashMap<String, String>(); // 업로드 파일정보
						
						long fileSize = multiFile.getSize(); // 업로드 파일사이즈
						
						// 저장 파일명 정보 설정(TBCOM_CMMN_ATCHMNFL 테이블 구조)
						// 파일 순차번호는 자동 채번
						//resultfileInfoMap.put("FILE_SN", strFileSn); // 파일일련번호
						resultfileInfoMap.put("SYS_SE_CODE", inSysSeCode); // 시스템구분코드
						resultfileInfoMap.put("JOB_SE", inJobSeCode); // 업부구분코드
						resultfileInfoMap.put("FILE_STRE_COURS", addFileDir); // 파일저장경로
						resultfileInfoMap.put("STRE_FILE_NM", addFileDir + saveFileName); // 저장파일명 (홈페이지의경우 추가경로를 파일명에 저장함)
						resultfileInfoMap.put("ORGINL_FILE_NM", oriFileName); // 원본파일명
						resultfileInfoMap.put("FILE_EXTSN", oriExtName); // 파일확장자
						resultfileInfoMap.put("FILE_CN", fileSize+""); // 파일내용(파일ID)
						resultfileInfoMap.put("FILE_MG", fileSize+""); // 파일크기
						resultfileInfoMap.put("USE_AT", "1"); // 사용여부
						resultfileInfoMap.put("FILE_IMAGE", getFileImg(oriExtName));
						resultfileInfoMap.put("FILE_ID", inFileId); // 파일ID
						resultfileInfoMap.put("FILE_TY", inFileTy); // 파일타입
						resultfileInfoMap.put("FILE_WIDTH", fileWidth+""); // 파일타입
						resultfileInfoMap.put("FILE_HEIGHT", fileHeight+""); // 파일타입
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
	
	private boolean bImgFile(String fileExtsn){
		boolean bResult = false;
		String sfileExtsn = StringUtil.nvl(fileExtsn);
		switch(sfileExtsn.toLowerCase()){
			case "jpg" :
			case "jpeg" :
			case "gif" :
			case "png" :
			case "bmp" :
				bResult = true;
				break;
			default :
				break;
		}
		return bResult;
	}
	
	public String getFileImg(String fileExtsn){
		String fileImg = "";
		String sfileExtsn = StringUtil.nvl(fileExtsn);
		switch(sfileExtsn.toLowerCase()){
			case "" :
				break;
			case "jpg" :
			case "jpeg" :
			case "gif" :
			case "png" :
			case "bmp" :
				fileImg = "IMG";
				break;
			case "zip" :
			case "rar" :
			case "7z" :
				fileImg = "ZIP";
				break;
			case "txt" :
			case "xml" :
				fileImg = "TXT";
				break;
			case "doc" :
			case "docx" :
				fileImg = "DOC";
				break;
			case "xls" :
			case "xlsx" :
				fileImg = "XLS";
				break;
			case "ppt" :
			case "pptx" :
				fileImg = "PPT";
				break;
			case "pdf" :
				fileImg = "PDF";
				break;
			case "hwp" :
			case "hwt" :
				fileImg = "HWP";
				break;
			default :
				fileImg = "ETC";
				break;
		}
		
		return "theme://images/fileUpDownload/file_icon_"+fileImg.toUpperCase()+".png";
	}
	
	

	/**
	 * 첨부파일 순서변경
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void updateAtchmnFileOrdr( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
				case DataSet.ROW_TYPE_UPDATED :
					int newFileOrdr = Integer.parseInt(String.valueOf(map.get("NEW_FILE_ORDR")));
					map.put("NEW_FILE_ORDR", newFileOrdr*-1);
					baseDao.update("updateAtchmnFileOrdr", map);
					break;
			}	
		}
		
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
				case DataSet.ROW_TYPE_UPDATED :
					int newFileOrdr = Integer.parseInt(String.valueOf(map.get("NEW_FILE_ORDR")));
					map.put("FILE_ORDR"    , newFileOrdr);
					map.put("NEW_FILE_ORDR", newFileOrdr*-1);
					baseDao.update("updateAtchmnFileOrdr", map);
					break;
			}	
		}
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> fileList = (List<Map>)baseDao.list("selectAtchmnFileList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(fileList);
		outDataset.put("output1", outDsMap);
		
	}
}