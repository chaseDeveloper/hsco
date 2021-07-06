package hsco.mis.cus.CUS010104;

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
 * @Class Name   	: CUS010104Controller.java
 * @Description  	: 만족도평가 SMS 발송내역을 관리하는 컨트롤러 클래스
 * @author       	: 김병진
 * @since        	: 2015. 8. 21.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 21.		   김병진			 최초생성
 * </pre>  
 */

@Controller
public class CUS010104Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="CUS010104Service")
	CUS010104ServiceImpl CUS010104Service;

	/**
	 * SMS 발송 내용 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/cus/CUS010104/selectSndngCnList.do") 
	public ModelAndView selectSndngCnList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("SMS 발송 내용 조회 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(CUS010104Service, "selectSndngCnList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 만족도평가가 이루어 지지 않은 민원목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/cus/CUS010104/selectCvplList.do") 
	public ModelAndView selectCvplList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("만족도평가가 이루어 지지 않은 민원목록 조회 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(CUS010104Service, "selectCvplList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * SMS 발송내용 등록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/cus/CUS010104/chrctrCnC.do")
	public ModelAndView chrctrCnC(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("SMS 발송내용 C 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

			execService(CUS010104Service, "chrctrCnC", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}

}
