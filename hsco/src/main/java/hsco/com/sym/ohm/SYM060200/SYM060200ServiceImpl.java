package hsco.com.sym.ohm.SYM060200;

import java.io.File;
import java.math.BigDecimal;
import java.rmi.server.UID;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.lang.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.FileUtils;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;
 
/**
* <pre>
* @Project Name 	: 화성도시공사 차세대정보시스템
* @Class Name   	: SYM060200ServiceImpl.java
* @Description  	: 온라인도움말을 관리하는 서비스 구현체 클래스
* @author       	: 고진호
* @since        	: 2015. 12. 21.
* @version      	: 1.0
* @see          	: 
* @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
* <pre>
* ------------------------------------------------------------------
* Modification Information 
* ------------------------------------------------------------------
*   작성일                        작성자                내용
* ------------------------------------------------------------------

* </pre>  
*/

@Service("SYM060200Service")
public class SYM060200ServiceImpl extends BaseService implements SYM060200Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM060200ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /**
	 * 온라인도움말 버전 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void hpcmVerList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled())
		    log.info("hpcmVerList called");
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0); 
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SYM060200.HpcmVerList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    /**
	 * 온라인도움말 버전 등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int SYM060200CUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();

        if(listSize > 0) {
        	for (int x = 0; x < listSize; x++) {
				
    			Map map = list.get(x);
    			
    			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
    			
    			
    			switch(rowType) {
    				case DataSet.ROW_TYPE_INSERTED :
    					baseDao.insert("SYM060200.HpcmVerC", map);
    					break;
    				case DataSet.ROW_TYPE_UPDATED :
    					iRow += baseDao.update("SYM060200.HpcmVerU", map);
    					break;
    				case DataSet.ROW_TYPE_DELETED :
    					iRow += baseDao.delete("SYM060200.HpcmVerD", map);
    					break;
    			    default:
    			    	break;
    			}	
    			
    		}
        }
        
		return iRow;
		
	}

    /**
	 * 온라인도움말 등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int SYM060201CUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		//DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		
		int listSize = (list == null) ? 0 : list.size();
		//int listSize2 = (list2 == null) ? 0 : list2.size();

        if(listSize > 0) {
        	for (int x = 0; x < listSize; x++) {
				
    			Map map = list.get(x);
    			
    			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
    			
    			
    			switch(rowType) {
    				case DataSet.ROW_TYPE_INSERTED :
    					baseDao.insert("SYM060201.HpcmC", map);
    					break;
    				case DataSet.ROW_TYPE_UPDATED :
    					iRow += baseDao.update("SYM060201.HpcmU", map);
    					break;
    				case DataSet.ROW_TYPE_DELETED :
    					iRow += baseDao.delete("SYM060201.HpcmD", map);
    					break;
    			    default:
    			    	break;
    			}	
    			
    		}
        }
        
        //도움말 상세
/*        if(listSize2 > 0) {
        	for (int x = 0; x < listSize2; x++) {
				
    			Map map = list2.get(x);
    			
    			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
    			
    			
    			switch(rowType) {
    				case DataSet.ROW_TYPE_INSERTED :
    					baseDao.insert("SYM060202.HpcmDtlsC", map);
    					break;
    				case DataSet.ROW_TYPE_UPDATED :
    					iRow += baseDao.update("SYM060202.HpcmDtlsU", map);
    					break;
    				case DataSet.ROW_TYPE_DELETED :
    					iRow += baseDao.delete("SYM060202.HpcmDtlsD", map);
    					break;
    			
    			}	
    		}
        }
        
 */       
		return iRow;
		
	}
	
	
	
    //
    /**
	 * 온라인 도움말  목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void hpcmList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SYM060201.HpcmList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    
    /**
   	 * 온라인도움말 상세 등록, 수정, 삭제
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public int SYM060202CUD( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {
   		
   		
   		int iRow = 0;
   		
   		DataSetMap list = (DataSetMap) inDataset.get("input1");
   		
   		
   		int listSize = (list == null) ? 0 : list.size();

   			if(listSize > 0) {
				for (int x = 0; x < listSize; x++) {
					
					Map map = list.get(x);
					
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED :
							baseDao.insert("SYM060202.HpcmDtlsC", map);
							break;
						case DataSet.ROW_TYPE_UPDATED :
							iRow += baseDao.update("SYM060202.HpcmDtlsU", map);
							break;
						case DataSet.ROW_TYPE_DELETED :
							iRow += baseDao.delete("SYM060202.HpcmDtlsD", map);
							break;
					    default:
					    	break;
					}	
					
		       	}
   			}
           
   		return iRow;
   		
   	}
    

    /**
   	 * 온라인도움말 등록, 수정, 삭제
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes", "unchecked" })
   	
   	public int SYM060201CUDWithFile( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {
   		
   		int iRow = 0;
   		
   		
   		DataSetMap list = (DataSetMap) inDataset.get("input1");
   		NexacroMapDTO xpDto = getXpDto(); 
   		
   		
   		int listSize = (list == null) ? 0 : list.size();

   			if(listSize > 0) {
				for (int x = 0; x < listSize; x++) {
					
					Map map = list.get(x);
					Map<String, Object> resultMap = null;
					
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
					boolean bStreFile = !StringUtil.isNull((String)map.get("STRE_FILE_NM"));
					boolean bFileOrdr = false;
					if (map.containsKey("FILE_ORDR"))
						bFileOrdr = StringUtil.isNull(String.valueOf(map.get("FILE_ORDR"))) ? false : true;
					boolean bOrgFile  = !StringUtil.isNull((String)map.get("ORGINL_FILE_NM"));
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED :
							//파일이 있는지 확인후 등록
							if (bOrgFile) {
								resultMap = uploadSingleFileinfo(xpDto, (String)map.get("ORGINL_FILE_NM"));
								
								//FILE_ORDR 가져오기
								map.put("FILE_ORDR", (Integer)resultMap.get("FILE_ORDR"));
							}
							
							baseDao.insert("SYM060201.HpcmC", map);
							break;
						case DataSet.ROW_TYPE_UPDATED :
							//파일이 변경된것인지 확인
							//신규(파일명(유), ORDR(무),STRE_FILE_NM(무))
							//취소후 다른파일((파일명(유), ORDR(무),STRE_FILE_NM(유))
							//삭제(파일명(무), ORDR(무), STRE_FLE_NAME(유))
							//정상(무, 무, 무)
							
							//신규
							if (bOrgFile  && !bFileOrdr && !bStreFile) {
								resultMap = uploadSingleFileinfo(xpDto, (String)map.get("ORGINL_FILE_NM"));
								
								//FILE_ORDR 가져오기
								map.put("FILE_ORDR", (Integer)resultMap.get("FILE_ORDR"));
							} else if (bOrgFile && !bFileOrdr && bStreFile) {	//삭제후 업로드저장
								//삭제루틴 추가 필요
								deleteFileInfo(map);

								//추가 루틴
								resultMap = uploadSingleFileinfo(xpDto, (String)map.get("ORGINL_FILE_NM"));
								
								//FILE_ORDR 가져오기
								Integer fileOrdr = (Integer)resultMap.get("FILE_ORDR");
								if (fileOrdr.intValue() == -1) {
									map.put("FILE_ORDR", null);
								} else {
									map.put("FILE_ORDR", fileOrdr);
								}
							} else if (!bOrgFile && !bFileOrdr && bStreFile ) {	//삭제작업
								//삭제루틴
								deleteFileInfo(map);
								map.put("FILE_ORDR", null);
							}
							
							iRow += baseDao.update("SYM060201.HpcmU", map);
							break;
						case DataSet.ROW_TYPE_DELETED :
							//삭제루틴
							if (bStreFile)
							deleteFileInfo(map);
							iRow += baseDao.delete("SYM060201.HpcmD", map);
							break;
					    default:
					    	break;
					}	
		       	}
   			}
           
   		return iRow;
   		
   	}
   	
   	//
    /**
	 * 온라인 도움말  목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void hpcmDtlsList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SYM060202.HpcmDtlsList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    /**
	 * 파일일련번호를 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectFielSnMap( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		// 파일 업로드를 위한 파일일련번호 조회
		Map<String, BigDecimal> fileSnMap;
		fileSnMap = (Map)baseDao.select("SYM060202.selectFileSnMap");
		BigDecimal seqFileSn = (BigDecimal)fileSnMap.get("FILE_SN");
		
		SimpleDateFormat sf = new SimpleDateFormat("yyyyMMdd");
        long today = System.currentTimeMillis();
        String ymd = sf.format(today);
        // 시퀀스 채번 서비스 호출 

    	String strFileSn = ymd +""+ seqFileSn;  // 파일일련번호 = YYYYMMDD + 시퀀스
    	
    	BigDecimal fileSn = new BigDecimal(strFileSn); // 파일일련번호
    	
    	fileSnMap.put("FILE_SN", fileSn);
		
    	List <Map> list = new ArrayList<Map>(); 
    	list.add(fileSnMap);
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(list);
		outDataset.put("output_fsn", outDsMap2);
	}
	
	
	/**
	 * 파일 업로드
	 * - Service to Service
	 * @author LeeSJ
	 * @param xpDto
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({"unchecked"})
	public Map<String, Object> uploadSingleFileinfo(NexacroMapDTO xpDto, String workFileName) throws NexaServiceException {
		
		Map<String, Object> resultMap = null;
		
		Map <String, Object> inVar 			= xpDto.getInVariableMap();
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
		HttpServletRequest request 			= xpDto.getRequest();
		
		// 첨부파일 정보
		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");	// List
		
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
    			
//    			int filInfoSize = fileInfo.size();
//    			System.out.println("업로드 대상 파일정보 수 = " + filInfoSize);
    			
    			// 파일일련번호 조회
				//BigDecimal filesSn = null;
				
				
				String strFileSn = null;  ////String.valueOf(filesSn);
				strFileSn = (String)fileInfo.getMapValue(0, "FILE_SN");
//				if(strFileSn != null){
//					if(!"".equals(strFileSn)){
//						//filesSn = new BigDecimal(strFileSn);
//						//isNewMaster = false;
//					}
//				}
				
				//System.out.println("strFileSn === " + strFileSn);
				
				resultMap = new HashMap<String, Object>();
				
				// 파일 저장처리
				// 업로드 파일 정보 추출
				Iterator<String> iterFile = mpRequest.getFileNames();
				
				while(iterFile.hasNext())
				{
					String formName = (String)iterFile.next();	
					
		    		MultipartFile multiFile = mpRequest.getFile(formName);
					oriFileName = multiFile.getOriginalFilename();
					
					//개별적으로 파일 추가
					if (!StringUtil.isNull(oriFileName) && !StringUtil.isNull(workFileName))
					{
						if (!oriFileName.equals(workFileName)) {
							continue;
						}
						
					}
						
					if(!StringUtil.isNull(oriFileName))
					{
						oriExtName = oriFileName.substring(oriFileName.lastIndexOf('.') + 1, oriFileName.length());
			    		
						// 전달 파일정보
						int inFileIdx = ObjectUtil.findRowIndexInDs(fileInfo, "ORGINL_FILE_NM", oriFileName);
						Map<String, Object> inFileItem = (Map<String, Object>)fileInfo.get(inFileIdx);
		    			
		    			String inFileSn = (String)inFileItem.get("FILE_SN");				// 파일 일련번호 
    					strFileSn = inFileSn;
		    			
		    			String inSysSeCode = (String)inFileItem.get("SYS_SE_CODE");			// 전달 시스템 구분
		    			String inJobSeCode = (String)inFileItem.get("JOB_SE");				// 전달 업무구분
		    			
//		    			String inOrginlFileNm = (String)inFileItem.get("ORGINL_FILE_NM");	// 전달 파일명
//		    			String inFileExtsn = (String)inFileItem.get("FILE_EXTSN");			// 전달 파일 확장자
		    			String inFileId = (String)inFileItem.get("FILE_ID");				// 전달 파일 ID
		    			String inFileTy = (String)inFileItem.get("FILE_TY");				// 전달 파일 타입
		    			
			    		// 저장경로 설정
		    			String rootPath = null;
						//String path = null;
						
						String fileStoreLoc = (String)inVar.get("fileLocation");
						fileStoreLoc = StringUtil.replace(fileStoreLoc, "/", File.separator);
								
						// RootPath 구하기
						rootPath = fileStoreLoc;//servletcontext.getRealPath("upload");
						uploadDir = rootPath + File.separator + inSysSeCode + File.separator  + inJobSeCode + File.separator;
						//path = fileStoreLoc + File.separator;
						
//						System.out.println("rootPath = " + rootPath);
//						System.out.println("uploadDir = " + uploadDir);
//						System.out.println("path = " + path);
//						System.out.println("  {Upload Target Dir} 업로드 경로 = " + uploadDir);
						
						// 디렉토리생성 확인
						if(!FileUtils.isDirectory(uploadDir)){
							FileUtils.makeDir(uploadDir);
						}
					
//						System.out.println("  {Upload 파일} 업로드 파일 = " + oriFileName + " :: " + multiFile.getBytes().length);
						
						uniqueFileName = ((new UID()).toString()).replaceAll(":", "");	// 임시 파일명생성
						uniqueFileName = strFileSn +  uniqueFileName;
						
						File uploadedFile = new File(uploadDir + uniqueFileName);		// 임시파일명으로 파일생성
						
						multiFile.transferTo(uploadedFile);								// 파일저장
						
//						System.out.println("  {Upload 파일} 업로드 파일 저장완료");
						
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
				////int upFileListSize = fileList == null ? 0 : fileList.size();

				int fileOrdr = -1;
				
				for(int i = 0; i < upFileListSize; i++)
				{
					Map<String, Object> upFileItem = fileList.get(i);
					
					//check 첨부마스터
					Integer cnt = (Integer)baseDao.select("checkAtchmnFileMast", upFileItem);
					
					if(cnt == 0){
						baseDao.insert("insertAtchmnFileMast", upFileItem);
					}
					
					// 상세 파일순차 조회
					fileOrdr = (Integer)baseDao.select("selectFileOrdr", upFileItem);
					upFileItem.put("FILE_ORDR", fileOrdr);
					
					// 상세 정보 저장 
					baseDao.insert("insertAtchmnFile", upFileItem); 
				}
				
				resultMap.put("FILE_SN", strFileSn);			// 파일 일련번호
				resultMap.put("FILE_ORDR", fileOrdr);			// 상세 파일순차 번호(최종)
				resultMap.put("UP_FILE_CNT", upFileListSize);	// 파일 수
				resultMap.put("UP_FILE_LIST", fileList);		// 업로드 파일 정보
				
    		}catch(Exception ex){
    			
//    			System.out.println("!!ERROR {" + ex.getClass().getName() + "} 파일 업로드 중 오류발생 " + ExceptionUtils.getStackTrace(ex));
    			
    			log.error("!!ERROR {" + ex.getClass().getName() + "} 파일 업로드 중 오류발생 " + ExceptionUtils.getStackTrace(ex));
    			
    			// 저장된 파일은 삭제
    			log.error(" saveFile = " + saveFile);
    			
    			if(saveFile)
    			{
    				int fileListSize = fileList.size();
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
	public Map<String, Object> deleteFileInfo(Map<String, Object> delInfo) throws NexaServiceException {
		
		Map<String, Object> resultMap = null;
		
		resultMap = new HashMap<String, Object>();
			
		List<Map<String, Object>> fileList = new ArrayList<Map<String,Object>>();
		int targetListSize = 0;

		BigDecimal inFileSn = new BigDecimal(String.valueOf(delInfo.get("FILE_SN")));			// 파일일련번호
		Integer inFileOrdr;
		
		
		
		
		if(inFileSn != null && !(inFileSn.toString().equals("")))
		{
			if (StringUtil.isNull(String.valueOf(delInfo.get("DEL_FILE_ORDR")))) {					
				inFileOrdr = Integer.valueOf(String.valueOf(delInfo.get("FILE_ORDR")));// update로 인한 삭제
			} else {
				inFileOrdr = Integer.valueOf(String.valueOf(delInfo.get("DEL_FILE_ORDR")));				// 행삭제로 인한 삭제
				delInfo.put("FILE_ORDR", inFileOrdr);
			}
			
			log.debug("FILE_SN = " + inFileSn + " :: FILE_ORDR = " + inFileOrdr);
			// 대상 파일 조회
			List targetList = (List)baseDao.list("selectAtchmnFileList", delInfo);
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
			int detailCount = (Integer)baseDao.select("checkAtchmnFile", delInfo);
			if(detailCount == 0)
			{
				// 마스터 삭제
				baseDao.delete("deleteAtchmnFileMast", delInfo);
			}
			
		}else{
			String errMsg = "첨부파일 삭제(파일일련번호 없음)";
			throw new NexaServiceException("fail.삭제.실패", errMsg);
		}
		
		resultMap.put("DEL_FILE_CNT", targetListSize);	// 삭제 파일 수
		resultMap.put("DEL_FILE_LIST", fileList);		// 삭제파일 정보
	
		return resultMap;
	}
	
	
}