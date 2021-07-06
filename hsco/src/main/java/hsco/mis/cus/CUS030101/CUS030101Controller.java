package hsco.mis.cus.CUS030101;

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
 * @Class Name   	: CUS030101Controller.java
 * @Description  	: 안내정보(사업정보/공급정보)를 관리하는 컨트롤러 클래스
 * @author       	: 김병진
 * @since        	: 2015. 8. 19.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 19.	      김병진		       최초생성
 * </pre>  
 */

@Controller
public class CUS030101Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="CUS030101Service")
	CUS030101ServiceImpl CUS030101Service;

	/**
	 * 안내정보(사업정보/공급정보) 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/cus/CUS030101/selectGuidanceInfoList.do") 
	public ModelAndView selectGuidanceInfoList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("안내정보(사업정보/공급정보) 조회 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(CUS030101Service, "selectGuidanceInfoList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
		
	/**
	 * 안내정보(사업정보/공급정보) 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/cus/CUS030101/guidanceInfoListCUD.do")
	public ModelAndView guidanceInfoListCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("안내정보(사업정보/공급정보) CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

			execService(CUS030101Service, "guidanceInfoListCUD", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
