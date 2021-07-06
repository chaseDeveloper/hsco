package hsco.mis.ass.ASS010200;

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
 * @Class Name   	: ASS010200Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 6. 19.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 19	       이혜선		   최초생성
 * </pre>  
 */
@Controller
public class ASS010200Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="ASS010200Service")
	ASS010200ServiceImpl ASS010200Service;
	
	/**
	 * 자산대장 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ass/ASS010200/assetsMastrList.do") 
	public ModelAndView assetsMastrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("자산대장 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ASS010200Service, "assetsMastrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	

	/**
	 * 감가상각내역 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ass/ASS010200/assetsMastrR.do") 
	public ModelAndView assetsMastrR(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("감가상각내역 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ASS010200Service, "assetsMastrR", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 소프트웨어 자산사용자 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ass/ASS010200/assetsEmpR.do") 
	public ModelAndView assetsEmpR(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug(" 소프트웨어  자산 사용자 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ASS010200Service, "assetsEmpR", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

	
	/**
	 * 자산대장CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ass/ASS010200/assetsSwU.do")
	public ModelAndView assetsMastrCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("자산대장 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ASS010200Service, "assetsMastrCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
	
	/**
	 * 소프트웨어 자산사용자 CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ass/ASS010200/assetsSwEmpCD.do")
	public ModelAndView assetsSwEmpCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("소프트웨어 자산사용자 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ASS010200Service, "assetsSwEmpCD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
	

}