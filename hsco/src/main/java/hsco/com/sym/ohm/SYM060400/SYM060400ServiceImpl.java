package hsco.com.sym.ohm.SYM060400;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.FileUtils;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;

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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
 
/**
* <pre>
* @Project Name 	: 화성도시공사 차세대정보시스템
* @Class Name   	: SYM060400ServiceImpl.java
* @Description  	: Q&A를 관리하는 서비스 구현체 클래스
* @author       	: 고진호
* @since        	: 2015.  1. 04.
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

@Service("SYM060400Service")
public class SYM060400ServiceImpl extends BaseService implements SYM060400Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM060400ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    

    /**
     * 권한그룹별 사용자 목록(HELP_ADMIN 조회용)
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void getListGrpUser(DataSetMap tranInfo,
            Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
            throws NexaServiceException {
        
        Map inMap = new HashMap<String, String>();
        inMap.put("AUTH_GRP_ID", "HELP_ADMIN");
            
        List <Map> records = (List)baseDao.list("SYM020200DAO.getListGrpUser", inMap);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /**
	 * Q&A 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void SYM060400List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled())
		    log.info("SYM060400List called");
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SYM060400.HpcmQnaList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    
    /**
	 * Q&A 등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int SYM060400CUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
    					baseDao.insert("SYM060400.HpcmQnaC", map);
    					break;
    				case DataSet.ROW_TYPE_UPDATED :
    					iRow += baseDao.update("SYM060400.HpcmQnaU", map);
    					break;
    				case DataSet.ROW_TYPE_DELETED :
    					iRow += baseDao.delete("SYM060400.HpcmQnaD", map);
    					break;
    			    default:
    			    	break;
    			}	
    			
    		}
        }
        
		return iRow;
		
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
		
//		DataSetMap tranInfo 				= xpDto.getTranInfoMap();
		Map <String, Object> inVar 			= xpDto.getInVariableMap();
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
//		Map <String, Object> outVar 		= xpDto.getOutVariableMap();
//		Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
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
//    			System.out.println("업로드 대상 파일정보 수 = " + filInfoSize);
    			
    			// 파일일련번호 조회
				BigDecimal filesSn = null;
				
				
				String strFileSn = null;  ////String.valueOf(filesSn);
				strFileSn = (String)fileInfo.getMapValue(0, "FILE_SN");
				if(strFileSn != null){
					if(!"".equals(strFileSn)){
						filesSn = new BigDecimal(strFileSn);
						
						Map<String, Object> inFileItem = new HashMap<String, Object>();
						inFileItem.put("FILE_SN",  filesSn);
						// 파일일련번호에 해당하는 마스터 정보 존해 확인
	    				int regMstCnt = (Integer)baseDao.select("checkAtchmnFileMast", inFileItem);
	    				if(regMstCnt != 0){
	    					isNewMaster = false;
	    				}
					}
				}
				
				//System.out.println("strFileSn === " + strFileSn);
				
				resultMap = new HashMap<String, Object>();
				
//				System.out.println("selectFileSn = " + strFileSn);
				
				
				
				// 파일 저장처리
				// 업로드 파일 정보 추출
				Iterator<String> iterFile = mpRequest.getFileNames();
				while(iterFile.hasNext())
				{
					String formName = (String)iterFile.next();	
					
		    		MultipartFile multiFile = mpRequest.getFile(formName);
					oriFileName = multiFile.getOriginalFilename();
					
//					System.out.println("multiFile.getName = " + multiFile.getName());
					
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
						
						File uploadedFile = new File(uploadDir  + File.separator + uniqueFileName);		// 임시파일명으로 파일생성
						
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
						
//						System.out.println(fileItem.toString());
						
						fileList.add(fileItem);
					}
				}
				
				saveFile = true; // 파일 저장 완료 처리
				//System.out.println("filesSn 2 === " + filesSn);
				//System.out.println("strFileSn === " + strFileSn);
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
    			
//    			System.out.println("!!ERROR {" + ex.getClass().getName() + "} 파일 업로드 중 오류발생 " + ExceptionUtils.getStackTrace(ex));
    			
    			log.error("!!ERROR {" + ex.getClass().getName() + "} 파일 업로드 중 오류발생 " + ExceptionUtils.getStackTrace(ex));
    			
    			// 저장된 파일은 삭제
    			log.error(" saveFile = " + saveFile);
    			
    			if(saveFile)
    			{
    				//int fileListSize = (fileList == null) ? 0 : fileList.size();
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
	
}