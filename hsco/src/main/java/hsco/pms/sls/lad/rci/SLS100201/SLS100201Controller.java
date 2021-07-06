package hsco.pms.sls.lad.rci.SLS100201;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS100201Controller.java
 * @Description  	: 
 * @author       	: 최승락
 * @since        	: 2015. 10.28.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 28.		 최승락			최초생성
 * </pre>  
 */
@Controller
public class SLS100201Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS100201Service")
	SLS100201ServiceImpl SLS100201Service;

		
	/**
	 * 영수필통지서입력 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100201/selectLadRcivPstmrkList.do")
	public ModelAndView selectLadRcivPstmrkList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("영수필통지서입력 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS100201Service, "selectLadRcivPstmrkList", xpDto, mav);
			    
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
    /**
     * 영수필통지서입력 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/rci/SLS100201/saveLadRcivPstmrkList.do")
	public ModelAndView saveLadRcivPstmrkList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("영수필통지서입력 저장----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS100201Service, "saveLadRcivPstmrkList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}
    
	/**
	 * 수납처리(소인처리) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100201/selectLadRcivList.do")
	public ModelAndView selectLadRcivList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("수납처리(소인처리) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS100201Service, "selectLadRcivList", xpDto, mav);
			    
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
    /**
     * 수납처리(소인처리) 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/rci/SLS100201/saveLadRcivList.do")
	public ModelAndView saveLadRcivList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("수납처리(소인처리) 저장----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS100201Service, "saveLadRcivList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}
    
	/**
	 * 과오납 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100201/selectLadRcivFaltList.do")
	public ModelAndView selectLadRcivFaltList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("과오납 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS100201Service, "selectLadRcivFaltList", xpDto, mav);
			    
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
    /**
     * 과오납 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/rci/SLS100201/saveLadRcivFaltList.do")
	public ModelAndView saveLadRcivFaltList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("과오납 저장----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS100201Service, "saveLadRcivFaltList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}
}
