package hsco.etc.itm.ITM020300;

import java.util.Map;

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
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ITM020300Controller.java
 * @Description  	: SW자산을 관리하는 컨트롤러 클래스
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
public class ITM020300Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM020300Controller.class);	
	
	@Resource(name="ITM020300Service")
	ITM020300ServiceImpl ITM020300Service;
	
	/** SW구분리스트를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020300/ITM020300ListCodeDetail.do") 
	public ModelAndView ITM020300ListCodeDetail(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("SW구분리스트를  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM020300Service, "ITM020300ListCodeDetail", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 업무구분리스트  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020300/ITM020300ListCode.do") 
	public ModelAndView ITM020300ListCode(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("업무구분리스트  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM020300Service, "ITM020300ListCode", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/** SW자산목록을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020300/ITM020300List.do") 
	public ModelAndView ITM020300List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("SW자산목록을  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM020300Service, "ITM020300List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** SW자산정보를 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM020300/ITM020300CUD.do")
	public ModelAndView ITM020300CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("SW자산정보를 신규,수정,삭제 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM020300Service, "ITM020300CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	
	/** SW계약이력을 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM020300/ITM020300HistCUD.do")
	public ModelAndView ITM020300HistCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("장비목록을 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM020300Service, "ITM020300HistCUD", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}
	
	
	
	/** SW계약관리  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020300/ITM020300HistList.do") 
	public ModelAndView ITM020300HistList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("장비목록을  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM020300Service, "ITM020300HistList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}

}
