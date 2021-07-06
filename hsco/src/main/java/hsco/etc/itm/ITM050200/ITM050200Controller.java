package hsco.etc.itm.ITM050200;

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
 * @Class Name   	: ITM050200Controller.java
 * @Description  	: Object목록을 관리하는 컨트롤러 클래스
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
public class ITM050200Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM050200Controller.class);	
	
	@Resource(name="ITM050200Service")
	ITM050200ServiceImpl ITM050200Service;
	
	/** Object 목록 을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM050200/ITM050200List.do") 
	public ModelAndView ITM050200List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Object 목록 을  조회 ---------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM050200Service, "ITM050200List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** Object 목록 상세내역을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM050200/ITM050200DetailList.do") 
	public ModelAndView ITM050200DetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Object 목록 상세내역을  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM050200Service, "ITM050200DetailList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** Object 목록 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM050200/ITM050200CUD.do")
	public ModelAndView ITM050200CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Object 목록 신규,수정,삭제 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM050200Service, "ITM050200CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	/** Object 상세내역을 신규,수정*/
	@RequestMapping("/hsco/etc/itm/ITM050200/ITM050200DetailCU.do")
	public ModelAndView ITM050200DetailCU(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Object 상세내역을 신규,수정----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM050200Service, "ITM050200DetailCU", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}
	
	/** Object 상세내역을 삭제*/
	@RequestMapping("/hsco/etc/itm/ITM050200/ITM050200DetailD.do")
	public ModelAndView ITM050200DetailD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Object 상세내역을 삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM050200Service, "ITM050200DetailD", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}
	
	/**
	 * Object 상세내역 첨부파일을 삭제(삭제)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/etc/itm/ITM050200/ITM050200DFILE.do") 
	public ModelAndView ITM050400DFILE(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM050200Service, "ITM050200DFILE", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}
	/** 도메인정의 리스트를  조회 */
    @RequestMapping("/hsco/etc/itm/ITM050200/ITM050200ListCombo.do") 
    public ModelAndView ITM050102ListCombo(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("도메인정의 리스트를  조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(ITM050200Service, "ITM050200ListCombo", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    /** 프로그램목록 팝업을 조회 */
    @RequestMapping("/hsco/etc/itm/ITM050200/ITM050200List_P.do") 
    public ModelAndView ITM050600List_P(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("프로그램목록 팝업을 조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(ITM050200Service, "ITM050200List_P", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
}
