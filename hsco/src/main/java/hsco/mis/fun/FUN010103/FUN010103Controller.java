package hsco.mis.fun.FUN010103;

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
 * @Class Name   	: FUN010103Controller.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2015. 07. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 02.  				   양성모				최초생성
 * </pre>  
 */
@Controller
public class FUN010103Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="fun010103Service")
	FUN010103ServiceImpl fun010103Service;

	
	/**
	 * 브랜치계좌 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN010103/selectBranchAcnutList.do")  
	public ModelAndView selectYearAcctoWeekList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("브랜치계좌 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun010103Service, "selectBranchAcnutList", xpDto, mav);
		
		try {
			execService(fun010103Service, "autosave", xpDto, mav);
				
		}
		catch(Exception e) {
			log.debug("미등록 브랜치 계좌 조회후 등록시 장애 발생");
			e.printStackTrace();
		}
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	

	
	/**
	 * 브랜치계좌 CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/mis/fun/FUN010103/saveBranchAcnutCUD.do")
	public ModelAndView saveYearAcctoWeekListCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("브랜치계좌 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(fun010103Service, "saveBranchAcnutCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;		
		
	}

}