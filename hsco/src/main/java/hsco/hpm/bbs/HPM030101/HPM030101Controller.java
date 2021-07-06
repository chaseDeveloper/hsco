package hsco.hpm.bbs.HPM030101;

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
 * @Class Name   	: HPM03010100Controller.java
 * @Description  	: 게시판생성및조회
 * @author       	: 김지훈
 * @since        	: 2016. 04. 19.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 04. 19.					김지훈			최초생성
 * </pre>  
 */
@Controller
public class HPM030101Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(HPM030101Controller.class);
	@Resource(name="HPM030101Service")
	HPM030101ServiceImpl HPM030101Service;
	
	/**
	 * 게시판ID 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/bbs/HPM030101/selectBbsId.do")
	public ModelAndView selectBbsId(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HPM030101Service, "selectBbsId", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 게시판정보조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/bbs/HPM030101/selectBbsMaster.do")
	public ModelAndView selectBbsInfoList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HPM030101Service, "selectBbsMaster", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 게시판정보 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	
	@RequestMapping("/hsco/hpm/bbs/HPM030101/saveBbsMaster.do")
	public ModelAndView saveBbsInfoList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HPM030101Service, "saveBbsMaster", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		return mav;
	}
}
