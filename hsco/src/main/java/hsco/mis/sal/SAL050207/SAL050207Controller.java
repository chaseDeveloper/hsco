package hsco.mis.sal.SAL050207;

import java.io.File;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;




/**
 * <pre>
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL050207Controller.java
 * @Description  	: 연말정산전산매체생성관리
 * @author       	: 이상명
 * @since        	: 2015. 10. 27.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 27.					이상명				최초생성
 * </pre>  
 */


@Controller
public class SAL050207Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SAL050207Service")
	SAL050207ServiceImpl SAL050207Service;
	
	/**
     * 연말정산대상자조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL050207/selectYndMediumEmpList.do") 
    public ModelAndView selectYndMediumEmpList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SAL050207Service, "selectYndMediumEmpList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }   
    
    /**
     * 퇴직소득대상자조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL050207/selectYndMediumEmp2List.do") 
    public ModelAndView selectYndMediumEmp2List(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SAL050207Service, "selectYndMediumEmp2List", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }   
	
    /**
	 * 연말정산 근로소득 전산매체파일 다운로드
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL050207/Medium1downloadFile.do")
	@SuppressWarnings({"rawtypes"})
	public ModelAndView Medium1downloadFile(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView();
		
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
       	String downFileName = null;
    	if (inDsMap != null){
			inMap = inDsMap.get(0);
		
			
			downFileName = (String)inMap.get("file_name");	// 파일명
    	}
		
    	// 파일명을 조건에 추가
    	
    	try{
    		
    		File AtcngReqstFile = SAL050207Service.getAtcngReqstFile(xpDto);
		
    		if(AtcngReqstFile == null){
    			throw new NexaServiceException("err.파일.다운로드.실패");
    		}
		
			xpDto.getRequest().setAttribute("downFileName", downFileName);
			
			mav.setViewName("download");
			mav.addObject("downloadFile", AtcngReqstFile);
		
    	}catch(Exception ex){
    		mav.setViewName("nexacroMapView");
    		throw ex;
    	}
		
		return mav;
	}
	
	/**
	 * 연말정산 의료비 전산매체파일 다운로드
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL050207/Medium2downloadFile.do")
	@SuppressWarnings({"rawtypes"})
	public ModelAndView Medium2downloadFile(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView();
		
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
       	String downFileName = null;
    	if (inDsMap != null){
			inMap = inDsMap.get(0);
		
			
			downFileName = (String)inMap.get("file_name");	// 파일명
    	}
		
    	// 파일명을 조건에 추가
    	
    	try{
    		
    		File AtcngReqstFile = SAL050207Service.getAtcngReqstFile2(xpDto);
		
    		if(AtcngReqstFile == null){
    			throw new NexaServiceException("err.파일.다운로드.실패");
    		}
		
			xpDto.getRequest().setAttribute("downFileName", downFileName);
			
			mav.setViewName("download");
			mav.addObject("downloadFile", AtcngReqstFile);
		
    	}catch(Exception ex){
    		mav.setViewName("nexacroMapView");
    		throw ex;
    	}
		
		return mav;
	}
	
	/**
	 * 연말정산 기부금 전산매체파일 다운로드
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL050207/Medium3downloadFile.do")
	@SuppressWarnings({"rawtypes"})
	public ModelAndView Medium3downloadFile(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView();
		
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
       	String downFileName = null;
    	if (inDsMap != null){
			inMap = inDsMap.get(0);
		
			
			downFileName = (String)inMap.get("file_name");	// 파일명
    	}
		
    	// 파일명을 조건에 추가
    	
    	try{
    		
    		File AtcngReqstFile = SAL050207Service.getAtcngReqstFile3(xpDto);
		
    		if(AtcngReqstFile == null){
    			throw new NexaServiceException("err.파일.다운로드.실패");
    		}
		
			xpDto.getRequest().setAttribute("downFileName", downFileName);
			
			mav.setViewName("download");
			mav.addObject("downloadFile", AtcngReqstFile);
		
    	}catch(Exception ex){
    		mav.setViewName("nexacroMapView");
    		throw ex;
    	}
		
		return mav;
	}
	
	/**
	 * 연말정산 기부금 전산매체파일 다운로드
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL050207/Medium4downloadFile.do")
	@SuppressWarnings({"rawtypes"})
	public ModelAndView Medium4downloadFile(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView();
		
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
       	String downFileName = null;
    	if (inDsMap != null){
			inMap = inDsMap.get(0);
		
			
			downFileName = (String)inMap.get("file_name");	// 파일명
    	}
		
    	// 파일명을 조건에 추가
    	
    	try{
    		
    		File AtcngReqstFile = SAL050207Service.getAtcngReqstFile4(xpDto);
		
    		if(AtcngReqstFile == null){
    			throw new NexaServiceException("err.파일.다운로드.실패");
    		}
		
			xpDto.getRequest().setAttribute("downFileName", downFileName);
			
			mav.setViewName("download");
			mav.addObject("downloadFile", AtcngReqstFile);
		
    	}catch(Exception ex){
    		mav.setViewName("nexacroMapView");
    		throw ex;
    	}
		
		return mav;
	}
	
	
}