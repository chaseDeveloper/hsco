package hsco.cmm.download;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.util.FileUtils;



/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: FileDownloadController.java
 * @Description  	: File Download
 * @author       	: 
 * @since        	: 2015. 10. 06.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *
 * </pre>
 */

@Controller
public class DownloadFileController extends BaseContoller {
	protected Logger log = LoggerFactory.getLogger(DownloadFileController.class);	
	
	
	@Value("#{fileStore['fileDownloadLoc']}")
    private String fileDownloadLoc;
	
	@Resource(name="DownloadFileService")
	DownloadFileServiceImpl DownloadFileService;
	
	private static String attachFileName = "/app_files/upload/SYS/attach.ini";

	// BaseController에 포함
	//@Value("#{fileStore[fileStoreLoc]}")
    //private String fileLocation;
	
	/**
	 * 파일다운로드 서비스
	 * @param fileId 서버상에 저장된 물리적 파일 id
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws IOException 
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes"})
	//@RequestMapping("/hsco/cmm/download/downloadFile.do") 
	@ResponseBody
	public File fieDownload(@RequestParam("fileKey") String fileId, NexacroMapDTO xpDto, HttpServletResponse response) throws IOException {
		log.debug(" 시작----------------------------------------------------!");
		
		File down = null;
	    
		
		//HttpServletRequest request = super.getRequest();
		response.setContentType("application/octet-stream;charset=utf-8");
		
        try {
        	String filename = "";
        	if(fileId != null){
        		Map rsltMap = new HashMap();
        		rsltMap = DownloadFileService.selectDownloadInfo(fileId);
        		String savePath = (String)rsltMap.get("FILE_STRE_COURS");
				String saveFilename = (String)rsltMap.get("STRE_FILE_NM");
				String orginlFileNm = (String)rsltMap.get("ORGINL_FILE_NM");
				String extNm = (String)rsltMap.get("FILE_EXTSN");
				String repoFilePath = savePath + File.separator + saveFilename+ "." + extNm;
				
				down = new File(repoFilePath);

				if(down.exists()){
					
					setHeader(response, down, orginlFileNm, filename);
		
//					//mav = new ModelAndView("download", "downloadFile", down);

				} 

        	} else {
        		List<Map> records = new ArrayList<Map>();
        		records = DownloadFileService.selectDownloadInfoList(xpDto);
        		
        		int listSize = records.size();
        		if(listSize > 0){
        			for(int i=0; i<listSize;i++){
        				Map map = records.get(i);
        				
        				String savePath = (String)map.get("FILE_STRE_COURS");
        				String saveFilename = (String)map.get("STRE_FILE_NM");
        				String orginlFileNm = (String)map.get("ORGINL_FILE_NM");
        				String extNm = (String)map.get("FILE_EXTSN");
        				String repoFilePath = savePath + File.separator + saveFilename+ "." + extNm;
        				
        				down = new File(repoFilePath);
        				if(down.exists()){
        					response = setHeader(response, down, orginlFileNm, filename);
    			
//        					//mav = new ModelAndView("download", "downloadFile", down); 
        				} 

 
        			}
        		} 
        	}
        } catch(UnsupportedEncodingException e){
        	e.printStackTrace();
        } catch(Exception e){
        	e.printStackTrace();
        } 
        return down;
	}
	
	private HttpServletResponse setHeader(HttpServletResponse response, File file, String orginlFileNm, String filename) throws UnsupportedEncodingException {
		filename = new String(orginlFileNm.getBytes("iso8859-1"), "utf-8");
		response.setHeader("Content-Length", Long.toString(file.length()));
		response.setHeader("Content-Transper-Encoding", "binary");
		String encodeFileName = java.net.URLEncoder.encode(filename, "utf-8").replaceAll("\\+", "\\ ");
		response.setHeader("Content-Disposition", "attachment; filename = \"" + new String(encodeFileName.getBytes("utf-8"), "ISO8859_1") + "\"");
	    return response;
	}
	
	// =======================================================
	
	/**
	 * 파일 다운로드
	 * - Dataset 기반
	 * @author LeeSJ
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/hsco/cmm/download/fileDownload.do")
	@SuppressWarnings({"unchecked","rawtypes"})
	public ModelAndView fileDownload(NexacroMapDTO xpDto, Model model) throws IOException {
		
		ModelAndView mav = new ModelAndView();
		
		File downFile = null;

		try {

			List<Map> fileList = DownloadFileService.selectDownloadInfoList(xpDto);
			
			//int fileListSize = fileList == null ? 0 : fileList.size();
			int fileListSize = fileList.size();
			
			for(int i = 0; i < fileListSize; i++){
				
				Map<String, Object> fileItem = (Map<String, Object>)fileList.get(i);
				
				String savePath = (String)fileItem.get("FILE_STRE_COURS");		// 저장경로
				String saveFilename = (String)fileItem.get("STRE_FILE_NM");		// 저장파일명
				String orginlFileNm = (String)fileItem.get("ORGINL_FILE_NM");	// 실제파일명
				String fileExtsn = (String)fileItem.get("FILE_EXTSN");			// 파일확장자
				
				String repoFilePath = savePath + File.separator + saveFilename;
				
				downFile = new File(repoFilePath);
				
				if(downFile.exists()){					
					xpDto.getRequest().setAttribute("downFileName", orginlFileNm);
					
					mav.setViewName("download");
					mav.addObject("downloadFile", downFile);
				} else {
					
					downFile = null;
					
					repoFilePath = savePath + File.separator + saveFilename + "." + fileExtsn;
					
					downFile = new File(repoFilePath);
					
					if(downFile.exists()){
						xpDto.getRequest().setAttribute("downFileName", orginlFileNm);
						
						mav.setViewName("download");
						mav.addObject("downloadFile", downFile);
					}else{
					
						//throw new NexaServiceException("err.파일.다운로드.실패", "파일없음");
						mav.setViewName("nexacroMapView");
						mav.addObject(NexacroConstant.ERROR_CODE, "-1");
    					mav.addObject(NexacroConstant.ERROR_MSG, "err.파일.다운로드.실패");
					}
				}
	
			}
        } catch(Exception e){
        	e.printStackTrace();
        	throw new NexaServiceException("err.파일.다운로드.실패");
        } 

		return mav;
	}
	
	@RequestMapping("/hsco/cmm/download/downloadFile.do")
	public ModelAndView downloadFile(@RequestParam("FILE_SN") String fileSn, @RequestParam("FILE_ORDR") String fileOrdr , NexacroMapDTO xpDto, HttpServletResponse response) throws IOException {
		
		ModelAndView mav = new ModelAndView();
		
		File downFile = null;
		
		try
		{
			Map<String, Object> schInfoMap = new HashMap<String, Object>();
			
			if(fileSn != null){
				if(!"".equals(fileSn)){
					schInfoMap.put("FILE_SN", new BigDecimal(fileSn));
					schInfoMap.put("FILE_ORDR", fileOrdr);
					
					Map<String, Object> fileItem = (Map<String, Object>)DownloadFileService.selectDownloadInfo(schInfoMap);
					if(fileItem == null){
						throw new NexaServiceException("err.파일.다운로드.실패");
					}
					
					String savePath = (String)fileItem.get("FILE_STRE_COURS");		// 저장경로
					String saveFilename = (String)fileItem.get("STRE_FILE_NM");		// 저장파일명
					String orginlFileNm = (String)fileItem.get("ORGINL_FILE_NM");	// 실제파일명
					String fileExtsn = (String)fileItem.get("FILE_EXTSN");			// 파일확장자
					
					String repoFilePath = savePath + File.separator + saveFilename;
				
					
					downFile = new File(repoFilePath);
					
					if(downFile.exists()){
						xpDto.getRequest().setAttribute("downFileName", orginlFileNm);
						
						mav.setViewName("download");
						mav.addObject("downloadFile", downFile);
					} else {
						
						repoFilePath = savePath + File.separator + saveFilename + "." + fileExtsn;
						
						downFile = new File(repoFilePath);
						
						if(downFile.exists()){
							xpDto.getRequest().setAttribute("downFileName", orginlFileNm);
							
							mav.setViewName("download");
							mav.addObject("downloadFile", downFile);
						}else{
							throw new NexaServiceException("err.파일.다운로드.실패", "파일없음");
						}
					}
				} else {
					throw new NexaServiceException("err.파일다운로드요청.무효");
				}
			} else {
				throw new NexaServiceException("err.파일다운로드요청.무효");
			}	
		} catch(Exception e){
        	e.printStackTrace();
        } 

		return mav;
	}
	
	@RequestMapping("/hsco/cmm/download/viewImage.do")
	public ModelAndView viewImage(@RequestParam("FILE_SN") String fileSn, @RequestParam("FILE_ORDR") String fileOrdr , NexacroMapDTO xpDto, HttpServletResponse response) throws IOException {
		
		ModelAndView mav = new ModelAndView();
		
		File downFile = null;
		
		try
		{
			Map<String, Object> schInfoMap = new HashMap<String, Object>();
			
			if(fileSn != null){
				if(!"".equals(fileSn)){
					schInfoMap.put("FILE_SN", new BigDecimal(fileSn));
					schInfoMap.put("FILE_ORDR", fileOrdr);
					
					Map<String, Object> fileItem = (Map<String, Object>)DownloadFileService.selectDownloadInfo(schInfoMap);
					if(fileItem == null){
						throw new NexaServiceException("err.파일.다운로드.실패");
					}
					
					String savePath = (String)fileItem.get("FILE_STRE_COURS");		// 저장경로
					String saveFilename = (String)fileItem.get("STRE_FILE_NM");		// 저장파일명
					//String orginlFileNm = (String)fileItem.get("ORGINL_FILE_NM");	// 실제파일명
					String fileExtsn = (String)fileItem.get("FILE_EXTSN");			// 파일확장자
					
					String repoFilePath = savePath + File.separator + saveFilename;
				
					
					downFile = new File(repoFilePath);
					
					if(downFile.exists()){
						xpDto.getRequest().setAttribute("downFileName", saveFilename);
						xpDto.getRequest().setAttribute("contentType", getContentType(fileExtsn));
						mav.setViewName("download");
						mav.addObject("downloadFile", downFile);
						
					} else {
						
						repoFilePath = savePath + File.separator + saveFilename + "." + fileExtsn;
						
						downFile = new File(repoFilePath);
						
						if(downFile.exists()){
							xpDto.getRequest().setAttribute("downFileName", saveFilename);
							xpDto.getRequest().setAttribute("contentType", getContentType(fileExtsn));
							mav.setViewName("download");
							mav.addObject("downloadFile", downFile);
						
						}else{
							throw new NexaServiceException("err.파일.다운로드.실패", "파일없음");
						}
					}
				} else {
					throw new NexaServiceException("err.파일다운로드요청.무효");
				}
			} else {
				throw new NexaServiceException("err.파일다운로드요청.무효");
			}	
		} catch(Exception e){
        	e.printStackTrace();
        } 

		return mav;
	}
	
	private String getContentType(String fileExtSn){
		String contentType = "application/octet-stream;charset=UTF-8";
		switch(fileExtSn.toLowerCase()){
			case "jpeg" :
			case "jpg" :
				contentType = "image/jpeg";
				break;
			case "gif":
				contentType = "image/gif";
				break;
			case "png":
				contentType = "image/png";
				break;
			default :
				break;
		}
		return contentType;
	}
	

	
	/**
	 * 내부결재완료 파일을 전자결재시스템에 업로드하기 위한 환경설정파일 다운로드
	 * - Dataset 기반
	 * @author JdKim
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/hsco/cmm/download/downloadElectricSanctnAttachIni.do")
	public ModelAndView downloadElectricSanctnAttachIni(NexacroMapDTO xpDto, Model model) throws IOException {
		
		ModelAndView mav = new ModelAndView();
		

		try {
			
			String attachCn = DownloadFileService.selectCompletedSanctnFileCn(xpDto);

			File of = new File(attachFileName);
			if(of.exists()){
				try {
				    of.delete();
				} catch(SecurityException e){	
					e.printStackTrace();
		        	throw new NexaServiceException("err.파일.다운로드.실패");
		        }
			}
			if(FileUtils.writeTextFile(attachFileName, attachCn)){
				File f = new File(attachFileName);
				mav.setViewName("download");
				mav.addObject("downloadFile", f);
			}
		} catch(Exception e){
        	e.printStackTrace();
        	throw new NexaServiceException("err.파일.다운로드.실패");
        } 

		return mav;
	}
	

}