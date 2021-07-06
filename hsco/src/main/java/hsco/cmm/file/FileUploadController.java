package hsco.cmm.file;

import java.util.HashMap;
import java.util.Map;
import java.util.Iterator;
import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;






/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: FileUploadController.java
 * @Description  	: File Upload
 * @author       	: 
 * @since        	: 2015. 8. 28.
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
public class FileUploadController extends BaseContoller {
	protected Logger log = LoggerFactory.getLogger(FileUploadController.class);	

	 @Resource(name="FileUploadService")
	 FileUploadServiceImpl FileUploadService;
	 
	 // BaseContoller 에 포함
	 //@Value("#{fileStore[fileStoreLoc]}")
     //private String fileLocation;
	
	/**
	 * 파일 업로드 서비스
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/hsco/cmm/file/uploadFile.do", method = RequestMethod.POST) 
    public ModelAndView uploadFile(MultipartHttpServletRequest request, Model model) throws Exception {
		
		//NexacroMapDTO xpDto = new NexacroMapDTO();
		DataSetMap inDsMap = new DataSetMap();
		//DataSetMap tempDsMap = new DataSetMap();
		DataSetMap formDsMap = new DataSetMap();
		DataSetMap outDsMap = new DataSetMap();
		
		//Map<String, Object> formMap = new HashMap<String, Object>();
		//Map<String, Object> inMap = new HashMap<String, Object>();
		log.debug("---- 파일업로드 ----");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		//HttpServletRequest request = super.getRequest();
		
		//MultipartHttpServletRequest request = (MultipartHttpServletRequest)super.getRequest();

		//ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
		//HttpServletRequest request = attr.getRequest();
		
		
		
		
		String contentType = request.getContentType();
		
//		String key, value1;
//		Enumeration<String> enumer = request.getHeaderNames();
//	    while (enumer.hasMoreElements()) {
//	        key = enumer.nextElement();
//	        value1 = request.getHeader(key);
//	       
//	    }


	    
		boolean isMultipart = false;
		
		if(!"".equals(contentType)){
			if(contentType.indexOf("multipart/form-data") >= 0){  // multipart request
				isMultipart = true;
			} 
		}

		//PlatformData resData = new PlatformData();
		//VariableList resVarList = resData.getVariableList();
        
		//OS 확인. iOS 6.0버그(이미지선택시 image.jpg로만 반환하는 버그대응용. 20150312)
		//String userAgent = request.getHeader("User-Agent");
		//boolean isIOS = false;
		//userAgent = userAgent.toLowerCase();

//		if(userAgent.indexOf("macintosh") > -1 || userAgent.indexOf("iphone") > -1 || userAgent.indexOf("ipad") > -1) {
//			isIOS = true;
//		}
		
		try 
		{
		    if (isMultipart)
		    {
		    	String strInDataset= request.getParameter("inputDatasets");
		    	
				
				PlatformData pdata = new PlatformData();
				pdata.loadXml(strInDataset);
				
				DataSetList inputDslist = pdata.getDataSetList();
				
//				//DataSet deleteDs = new DataSet("ds_input");

				DataSet inuptDs = new DataSet("ds_input");
//				//DataSet tempDs = new DataSet("ds_temp");
				DataSet formDs = new DataSet("gds_form");
				if(inputDslist != null){

					for (int i = 0; i < inputDslist.size(); i++) {
						DataSet iDs = (DataSet)inputDslist.get(i);
						String dsName = iDs.getName();
						
						if("ds_input".equals(dsName)){
							iDs.copyTo(inuptDs);
							// Integer Type이 BigDecimal로 변경되는 버그 보정
							inuptDs.setColumnDataType("FILE_ORDR", DataTypes.INT);
							inuptDs.setColumnDataType("FILE_MG", DataTypes.INT);
							inuptDs.setColumnDataType("SN", DataTypes.INT);
							inuptDs.setColumnDataType("PROGRS", DataTypes.INT);
							inuptDs.setColumnDataType("STTUS", DataTypes.INT);
							//
////							iDs.copyTo(deleteDs);
////							iDs.copyTo(tempDs);
////							tempDs.clearData();
////							tempDs.clearDataChanges();
////							iDs.copyTo(tempDs);
							inDsMap.convertDataSet2DataSetMap(inuptDs);
////							tempDsMap.convertDataSet2DataSetMap(tempDs);
						}
                        if("gds_form".equals(dsName)){
                        	iDs.copyTo(formDs);
                        	formDsMap.convertDataSet2DataSetMap(formDs);
						}
					}
					
				} 
				
				
////				if(deleteDs.getRowCount() != 0){
////					for(int k=0; k<deleteDs.getRowCount(); k++ ){
////						if(deleteDs.getRowType(k) != DataSet.ROW_TYPE_DELETED){
////							deleteDs.removeRow(k);
////						}
////					}
////				}
				
////				DataSet dsFiles = new DataSet("ds_files");
////				deleteDs.copyTo(dsFiles); 
				
		        
////		        outDsMap.convertDataSet2DataSetMap(dsFiles);
		        Map<String, DataSetMap> outDataset = new HashMap<String, DataSetMap>();
	            outDataset.put("ds_files", outDsMap);


				

//		    	inMap = (inDsMap == null) ? null : inDsMap.get(0);
//		    	formMap = (formDsMap == null) ? null : formDsMap.get(0);

		        String sysSeCode = (String)inuptDs.getObject(0, "SYS_SE_CODE");
		        String jobSeCode = (String)inuptDs.getObject(0,"JOB_SE");
		        BigDecimal fileSn = (BigDecimal)inuptDs.getObject(0,"FILE_SN");
		        
		        //String formUrl  = (String)formDs.getObject(0,"FORM_URL");
		        
		        
		        int cnt = inuptDs.getRowCount();
//////////////// File Uploading Processing 		        
////              // 파일 삭제 처리
		        for(int j=0; j<cnt; j++){
		        	int rowType = inuptDs.getRowType(j);
		        	if(rowType == DataSet.ROW_TYPE_DELETED){
		        				        		
		        		String savedPath = (String)inuptDs.getObject(j,  "FILE_STRE_COURS");
		        		String deleteFileName = (String)inuptDs.getObject(j,  "STRE_FILE_NM");
		        		File delFile = new File(savedPath+ File.separator+ deleteFileName);
		        		if(delFile.exists()){
		        			if(delFile.isDirectory()){
		        				if(delFile.canWrite()){
		        					try{
		        						delFile.delete();
		        					} catch(SecurityException se){
		        						se.printStackTrace(System.err);
		        					} catch(Exception e){
		        						e.printStackTrace(System.err);
		        					}
		        				}
		        				    
		        			}
		        			    
		        		} else {
		        			// 파일삭제 처리 실패
		        			mav.addObject(NexacroConstant.ERROR_CODE, "-1");
	        				mav.addObject(NexacroConstant.ERROR_MSG, "err.파일.없음");  
		   		        }
		        	}
		    	}
		    	
		    			        
		        String strFileSn = "";

		        if(fileSn == null) {
		        	fileSn = FileUploadService.selectFileSn();
		        	strFileSn = fileSn.toString();
		        }
		        strFileSn = fileSn.toString();
////////////// File Uploading Processing 		        
                String fileLocation = super.getFileLocation();
		    	String savePath = fileLocation + File.separator + sysSeCode + File.separator  + jobSeCode;
		        File filePath = new File(savePath); 
		    	if (!filePath.exists()) 
		    	{
		    		if(filePath.canWrite()) {
		    			try{
		    				filePath.mkdirs();
		    			} catch(SecurityException se){
		    				throw new SecurityException("파일 생성에 실패하였습니다 : \nSecurityException이 발생하였습니다.");
		    			}
		    			
		    		} else {
		    			throw new SecurityException("파일 생성에 실패하였습니다 : \nSecurityException이 발생하였습니다.");
		    		}
		    		
		    	}
		    	
		        Iterator<String> fileNames = request.getFileNames();
		        
	            int k = 0;
		        while(fileNames.hasNext()){
		        	String fileName = fileNames.next();
		        	MultipartFile mFile = request.getFile(fileName);

		            int idx = fileName.lastIndexOf(".")+1;
		           
		            String extName = fileName.substring(idx);
		            Map<String, BigDecimal> ordrMap = new HashMap<String, BigDecimal>();
			    	ordrMap.put("FILE_SN", fileSn);
		            int nextFileOrdr = (Integer)FileUploadService.selectFileOrdr(ordrMap) + k;
		            int fRow = findRowInDsFiles(inuptDs, fileName);
		            
			        String saveFileName = strFileSn + "" + nextFileOrdr;
			        if(fRow > -1){
			            inuptDs.set(fRow, "FILE_SN", fileSn);
			            inuptDs.set(fRow, "STRE_FILE_NM", saveFileName);  //  저장파일명
		                inuptDs.set(fRow, "FILE_ORDR", nextFileOrdr);
		                inuptDs.set(fRow, "FILE_STRE_COURS", savePath);  // 파일저장경로
		                inuptDs.set(fRow, "USE_AT", "1");  // 사용여부
			        } else {
			        	// 업로드할 파일 정보가 존재하지 않습니다. 네트워크 오류?
			        	mav.addObject(NexacroConstant.ERROR_CODE, "-1");
	   			        mav.addObject(NexacroConstant.ERROR_MSG, "err.파일.업로드.정보없음"); 
			        }
		            k++;

		        	File file = new File(savePath+ File.separator+ saveFileName + "." + extName);
		        	if(!mFile.isEmpty() && mFile.getSize() != 0){
		        		
    		            
		        		if(!file.exists()){
		        			try {
		        				file.createNewFile();
////		        				long fileSize = mFile.getSize();
////		        				String fileType = mFile.getContentType();
		        			} catch(IOException ioe){
		        				
		        				mav.addObject(NexacroConstant.ERROR_CODE, "-1");
		        				mav.addObject(NexacroConstant.ERROR_MSG, "err.파일.업로드.실패|" + ioe);
		        				ioe.printStackTrace();
		        			} 
		        		} else {
		        			// 이미 존재하는 파일입니다
		        			mav.addObject(NexacroConstant.ERROR_CODE, "-1");
		   			        mav.addObject(NexacroConstant.ERROR_MSG, "err.파일.업로드.기존재"); //이미 존재하는 파일입니다  @todo
		        		}
		        		try {
		        			
		     		    	
		     		    	
		        			mFile.transferTo(file); //임시로 저장된 multipartFile을 실제 파일로 전송
		        			
		        			
		        		} catch (IllegalStateException e) {
		        			// TODO Auto-generated catch block
		        			e.printStackTrace();
		        		} catch (IOException e) {
		        			// TODO Auto-generated catch block
		        			e.printStackTrace();
		        		}
		        	} else {
			        	// inputdataset list size = 0
		        		mav.addObject(NexacroConstant.ERROR_CODE, "-1");
	   			        mav.addObject(NexacroConstant.ERROR_MSG, "err.입력데이터셋.없음"); //
			        }
		        	
		        }
		        // 
		        FileUploadService.insertAtchmnfl(inuptDs, outDataset);
 		    	FileUploadService.selectAtchmnflList(fileSn, outDataset); 
    			mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, 	outDataset);
		    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		    	mav.addObject(NexacroConstant.ERROR_MSG, "success.파일.업로드.성공");

		     } else {
		    	 // multipart request
		    	 mav.addObject(NexacroConstant.ERROR_CODE, "-1");
			     mav.addObject(NexacroConstant.ERROR_MSG, "err.파일.업로드.mulpart.아님"); //
		     }
		    } catch(SecurityException se){
		    	mav.addObject(NexacroConstant.ERROR_CODE, "-1");
				mav.addObject(NexacroConstant.ERROR_MSG, "err.예외상황.발생|" + se);
		    } catch(RuntimeException re){
		    	mav.addObject(NexacroConstant.ERROR_CODE, "-1");
				mav.addObject(NexacroConstant.ERROR_MSG, "err.예외상황.발생|" + re);
		    } catch (Exception e) {
				
				mav.addObject(NexacroConstant.ERROR_CODE, "-1");
				mav.addObject(NexacroConstant.ERROR_MSG, "err.예외상황.발생|" + e);
				e.printStackTrace();
			}

		
		return mav;
	}
	
	
	/**
	 * 첨부한 파일을 업로드하고 공통 첨부파일 정보를 저장한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/cmm/file/fileUpload.do")
	public ModelAndView fileUpload(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FileUploadService, "fileUpload", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		 
		return mav;
	}
	
	/**
	 * 파일일련번호 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/cmm/file/getFileSn.do") 
	public ModelAndView atchmnFileSn(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("코드 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(FileUploadService, "selectFielSnMap", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	
	/**
	 * 업로드 파일 마스터 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/cmm/file/selectAtchmnFileMastList.do") 
	public ModelAndView atchmnFileMastList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("코드 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(FileUploadService, "atchmnFileMastList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 업로드 파일 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/cmm/file/selectAtchmnFileList.do") 
	public ModelAndView atchmnFileList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("코드 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(FileUploadService, "atchmnFileList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 파일정보  수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/cmm/file/updateFileInfo.do")
	public ModelAndView fileInfoCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug(" 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		Map<String, DataSetMap> inDsMap = xpDto.getInDataSetMap();
		DataSetMap list = (DataSetMap) inDsMap.get("input1");
		BigDecimal fileSn = null;
		if(list.size() > 0){
			Map map = list.get(0);
			Object obj = map.get("FILE_SN");
			fileSn = new BigDecimal(obj.toString());
		}

		execService(FileUploadService, "atchmnFileInfoUD", xpDto, mav);
		Map<String, DataSetMap> outDataset = new HashMap<String, DataSetMap>();
		
		if(fileSn != null){
			FileUploadService.selectAtchmnflList(fileSn, outDataset); 
		}
		
		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, 	outDataset);
        
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		
		return mav;
	}
	
	/**
	 * 파일  삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/cmm/file/deleteFile.do")
	public ModelAndView deleteFile(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug(" 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		Map<String, DataSetMap> inDsMap = xpDto.getInDataSetMap();
		DataSetMap list = (DataSetMap) inDsMap.get("input1");
		BigDecimal fileSn = null;
		if(list.size() > 0){
			Map map = list.get(0);
			Object obj = map.get("FILE_SN");
			fileSn = new BigDecimal(obj.toString());
		}

		execService(FileUploadService, "atchmnFileD", xpDto, mav);
		
		Map<String, DataSetMap> outDataset = new HashMap<String, DataSetMap>();
		
		if(fileSn != null){
			FileUploadService.selectAtchmnflList(fileSn, outDataset); 
		}
		
		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, 	outDataset);
        
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		
		return mav;
	}
	
	/**
	 * 단건 파일 및 첨부마스터 모두  삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/cmm/file/fileDelete.do")
	public ModelAndView fileDelete(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug(" 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		Map<String, DataSetMap> inDsMap = xpDto.getInDataSetMap();
		DataSetMap list = (DataSetMap) inDsMap.get("input1");
		BigDecimal fileSn = null;
		if(list.size() > 0){
			Map map = list.get(0);
			Object obj = map.get("FILE_SN");
			fileSn = new BigDecimal(obj.toString());
		}
        
		execService(FileUploadService, "deleteAtchmnMastFile", xpDto, mav);
		
		Map<String, DataSetMap> outDataset = new HashMap<String, DataSetMap>();
		
		if(fileSn != null){
			execService(FileUploadService, "atchmnFileMastList", xpDto, mav);
		}
		
		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, 	outDataset);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		
		return mav;
	}
	
	private int findRowInDsFiles(DataSet ds, String fileName){
		int fRow = -1;
		for(int i=0; i<ds.getRowCount(); i++){
			String curName = (String)ds.getObject(i, "ORGINL_FILE_NM");
			if(fileName.equals(curName)){
				fRow = i;
			}
		}
		return fRow;
	}
	
	/**
	 * RichTextEditor Image File Upload 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/cmm/file/richTextEditorImageUpload.do")
	public ModelAndView richTextEditorImageUpload(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(FileUploadService, "richTextEditorImageUpload", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		return mav;
	}
	
	/**
	 * 첨부파일 순서변경
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/cmm/file/updateAtchmnFileOrdr.do")
	public ModelAndView updateAtchmnFileOrdr(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(FileUploadService, "updateAtchmnFileOrdr", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		
		return mav;
	}
}