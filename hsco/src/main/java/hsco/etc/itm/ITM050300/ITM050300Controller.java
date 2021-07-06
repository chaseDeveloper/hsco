package hsco.etc.itm.ITM050300;

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
 * @Class Name   	: ITM050300Controller.java
 * @Description  	: Program을 관리하는 컨트롤러 클래스
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
public class ITM050300Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM050300Controller.class);	
	
	@Resource(name="ITM050300Service")
	ITM050300ServiceImpl ITM050300Service;
	
	/** Program목록 리스트를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM050300/ITM050300List.do") 
	public ModelAndView ITM050300List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Program목록 리스트를  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM050300Service, "ITM050300List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** Program 변경내역을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM050300/ITM050300DetailList.do") 
	public ModelAndView ITM050300DetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Program 변경내역을  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM050300Service, "ITM050300DetailList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
		
	/** Program 변경내역을 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM050300/ITM050300DetailCUD.do")
	public ModelAndView ITM050300DetailCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Program 변경내역을 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM050300Service, "ITM050300DetailCUD", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}
	


}
