package hsco.etc.itm.ITM010300;

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
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ITM010300Controller.java
 * @Description  	: IT직원을 관리하는 컨트롤러 클래스
 * @author       	: 이호준
 * @since        	: 2015. 6. 9.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.			  이호준			최초생성
 * </pre>  
 */


@Controller
public class ITM010300Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM010300Controller.class);	
	
	@Resource(name="ITM010300Service")
	ITM010300ServiceImpl ITM010300Service;
	
	/** 업체목록을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM010300/ITM010300List.do") 
	public ModelAndView ITM010300List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("업체목록을  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM010300Service, "ITM010300List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 업체직원정보를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM010300/ITM010300DetailList.do") 
	public ModelAndView ITM010300DetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("업체직원정보를  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM010300Service, "ITM010300DetailList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 업체를 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM010300/ITM010300CUD.do")
	public ModelAndView ITM010300CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("업체를 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM010300Service, "ITM010300CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	/** 업체별 직원을 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM010300/ITM010300DetailCUD.do")
	public ModelAndView ITM010300DetailCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("업체별 직원을 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM010300Service, "ITM010300DetailCUD", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}
	


}
