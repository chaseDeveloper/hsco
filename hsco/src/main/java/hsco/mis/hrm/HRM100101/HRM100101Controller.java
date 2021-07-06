package hsco.mis.hrm.HRM100101;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;




/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM100101Controller.java
 * @Description  	: 
 * @author       	: 최인석
 * @since        	: 2016. 09. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 09. 20. 				   최인석				최초생성
 * </pre>  
 */
@Controller
public class HRM100101Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="HRM100101Service")
	HRM100101ServiceImpl HRM100101Service;

	/**
	 * 이사회임원명부 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM100101/selectBodNmstList.do") 
	public ModelAndView selectExtrnlCorpr(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM100101Service, "selectBodNmstList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 이사회임원명부 수정, 삭제, 등록 처리
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/mis/hrm/HRM100101/saveBodNmst.do")
	public ModelAndView saveExtrnlCorpr(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("이사회임원명부 수정, 삭제, 등록 처리 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM100101Service, "saveBodNmst", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;		
		
	}
	
	/* 첨부파일 저장 */
			
	@RequestMapping("/hsco/mis/hrm/HRM100101/atchCUD.do")
	public ModelAndView atchCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM100101Service, "atchCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}

	/**
     * 첨부파일 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM100101/selectFileList.do")
    public ModelAndView selectFileList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM100101Service, "selectFileList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }	
    
    /**
     * 첨부파일 삭제
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
	@RequestMapping("/hsco/mis/hrm/HRM100101/deleteFileList.do")
	public ModelAndView atchDelete(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("첨부파일 삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM100101Service, "atchDelete", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	    
}