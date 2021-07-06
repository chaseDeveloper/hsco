package hsco.mis.bdg.BDG080101;

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
 * Project Name 	: 화성도시공사 차세대정보시스템
 * Class Name   	: BDG080101Controller.java
 * Description  	: 제안공모 정보를 관리하는 컨트롤러 클래스
 * author       	: 권재만
 * since        	: 2020. 8. 25.
 * version      	: 1.0
 * see          	: 
 * COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2020. 8. 25.                  권재만               최초생성
 * </pre>
 */

@Controller
public class BDG080101Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(BDG080101Controller.class);

	@Resource(name = "BDG080101Service")
	BDG080101ServiceImpl BDG080101Service;

	/**
	 * 제안공모 목록 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/bdg/BDG080101/selectPropsePssrpManage.do")
	public ModelAndView selectPropsePssrpManage(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(BDG080101Service, "selectPropsePssrpManage", xpDto, mav);

		return mav;

	}
	/**
	 * 공동제안자 목록 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/bdg/BDG080101/selectCopertnPropseManage.do")
	public ModelAndView selectCopertnPropseManage(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(BDG080101Service, "selectCopertnPropseManage", xpDto, mav);

		return mav;

	}
	/**
	 * 제안공모, 공동제안자 정보 저장
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/bdg/BDG080101/savePropsePssrpManage.do")
	public ModelAndView savePropsePssrpManage(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(BDG080101Service, "savePropsePssrpManage", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;

	}

}