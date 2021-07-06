package hsco.etc.itm.ITM050400;

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
 * @Class Name   	: ITM050400Controller.java
 * @Description  	: 사용자지침서를 관리하는 컨트롤러 클래스
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
public class ITM050400Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM050400Controller.class);	
	
	@Resource(name="ITM050400Service")
	ITM050400ServiceImpl ITM050400Service;
	
	/** 사용자지침서 목록  리스트를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM050400/ITM050400List.do") 
	public ModelAndView ITM050400List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사용자지침서 목록  리스트를  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM050400Service, "ITM050400List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 사용자지침서 변경내역 목록을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM050400/ITM050400DetailList.do") 
	public ModelAndView ITM050400DetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사용자지침서 변경내역 목록을  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM050400Service, "ITM050400DetailList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/** 사용자지침서 변경내역을 신규,수정 */
	@RequestMapping("/hsco/etc/itm/ITM050400/ITM050400DetailCU.do")
	public ModelAndView ITM050400DetailCU(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사용자지침서 변경내역을 신규,수정----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM050400Service, "ITM050400DetailCU", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}
	
	/** 사용자지침서 변경내역을 삭제 */
	@RequestMapping("/hsco/etc/itm/ITM050400/ITM050400DetailD.do")
	public ModelAndView ITM050400DetailD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사용자지침서 변경내역을 삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM050400Service, "ITM050400DetailD", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}
	
	/**
	 * 사용자지침서 첨부파일을 삭제(삭제)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/etc/itm/ITM050400/ITM050400DFILE.do") 
	public ModelAndView ITM050400DFILE(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM050400Service, "ITM050400DFILE", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}


}
