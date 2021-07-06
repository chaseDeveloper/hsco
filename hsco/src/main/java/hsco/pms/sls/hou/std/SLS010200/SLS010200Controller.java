package hsco.pms.sls.hou.std.SLS010200;

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
 * @Class Name   	: SLS010200Controller.java
 * @Description  	:  
 * @author       	: 최승락
 * @since        	: 2015. 7.29.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 29.		 최승락			최초생성
 * </pre>  
 */

@Controller
public class SLS010200Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS010200Service")
	SLS010200ServiceImpl SLS010200Service;
	
	/**
	 * 주택타입정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010200/selectHouseTypeList.do")
	public ModelAndView selectHouseTypeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택타입정보 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS010200Service, "selectHouseTypeList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	/**
	 * 주택타입정보 신규,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010200/saveHouseTypeList.do")
	public ModelAndView saveHouseTypeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("주택타입정보 신규,수정,삭제 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS010200Service, "saveHouseTypeList", xpDto, mav);
			
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 납부정보(tabpage1) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010200/selectHouseTybyPayPayList.do")
	public ModelAndView selectHouseTybyPayPayList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("납부정보(tabpage1) 조회 ----------------------------------------------------!");		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS010200Service, "selectHouseTybyPayPayList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	/**
	 * 옵션정보(tabpage2) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010200/selectHouseTybyPayOptnList.do")
	public ModelAndView selectHouseTybyPayOptnList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("옵션정보(tabpage2) 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS010200Service, "selectHouseTybyPayOptnList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
		
	/**
	 * 할인정보(tabpage3) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010200/selectHouseTybyPayDscntList.do")
	public ModelAndView selectHouseTybyPayDscntList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("할인정보(tabpage3) 조회 ----------------------------------------------------!");		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS010200Service, "selectHouseTybyPayDscntList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	/**
	 * 납부정보, 옵션정보, 할인정보 신규,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010200/saveHouseTybyPayList.do")
	public ModelAndView saveHouseTybyPayList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("납부정보, 옵션정보, 할인정보 신규,수정,삭제 ----------------------------------------------------!");		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS010200Service, "saveHouseTybyPayList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
