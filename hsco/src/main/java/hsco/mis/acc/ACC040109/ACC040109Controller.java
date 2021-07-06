package hsco.mis.acc.ACC040109;

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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC040109Controller.java
 * @Description  	: 부동산임대공급가액을 관리하는 Controller 클래스 
 * @author       	: 이수지
 * @since        	: 2017. 12. 09.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 12. 09.	이수지		최초생성
 * </pre>  
 */
@Controller
public class ACC040109Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC040109Controller.class);
	
	@Resource(name="ACC040109Service")
	ACC040109ServiceImpl ACC040109Service;
	
	/**
     * 부동산임대관리 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/acc/ACC040109/estateRentList.do") 
    public ModelAndView estateRentList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	if(log.isInfoEnabled()) log.info("select Started!");
    	
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(ACC040109Service, "estateRentList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }   

    /**
     * 부동산임대관리 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/acc/ACC040109/estateRentCUD.do") 
    public ModelAndView estateRentCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        if(log.isInfoEnabled()) log.info("save Started!");
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(ACC040109Service, "estateRentCUD", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
	/**
	 * 파일생성
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC040109/createFile.do") 
	@SuppressWarnings({"rawtypes"})
	public ModelAndView createFile(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
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
    		
    		File AtcngReqstFile = ACC040109Service.getAtcngReqstFile(xpDto);
		
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
		
		/*
        execService(ACC040109Service, "createFile", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");*/
	}
}
