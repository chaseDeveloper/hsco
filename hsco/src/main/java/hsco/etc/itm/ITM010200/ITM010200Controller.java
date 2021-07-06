package hsco.etc.itm.ITM010200;

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
 * @Class Name   	: ITM010200Controller.java
 * @Description  	: IT분류코드를 관리하는 컨트롤러 클래스
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
public class ITM010200Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM010200Controller.class);	
	
	@Resource(name="ITM010200Service")
	ITM010200ServiceImpl ITM010200Service;
	
	/** IT분류코드를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM010200/ITM010200List.do") 
	public ModelAndView ITM010200List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("IT분류코드를  조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM010200Service, "ITM010200List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** IT분류코드 상세내역을 조회 */
	@RequestMapping("/hsco/etc/itm/ITM010200/ITM010200DetailList.do") 
	public ModelAndView ITM010200DetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("IT분류코드 상세내역을 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM010200Service, "ITM010200DetailList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** IT분류코드를 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM010200/ITM010200CUD.do")
	public ModelAndView ITM010200CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("IT분류코드를 신규,수정,삭제 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM010200Service, "ITM010200CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	/** IT분류코드 상세내역을 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM010200/ITM010200DetailCUD.do")
	public ModelAndView ITM010200DetailCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("IT분류코드 상세내역을 신규,수정,삭제 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM010200Service, "ITM010200DetailCUD", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}
	


}
