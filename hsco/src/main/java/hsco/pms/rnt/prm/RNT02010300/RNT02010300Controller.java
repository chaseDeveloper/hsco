package hsco.pms.rnt.prm.RNT02010300;

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
 * @Class Name   		: RNT02010300Controller.java
 * @Description  		: 보증금,임대료 관리
 * @author       			: 변승우
 * @since        			: 2015. 10. 22.
 * @version      			: 1.0
 * @see          			: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 22.					변승우				최초생성
 * </pre>  
 */


@Controller
public class RNT02010300Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="RNT02010300Service")
	RNT02010300ServiceImpl RNT02010300Service;
	
	
	/**
	 * 매입임대 임대료 기준년도 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/pms/rnt/prm/RNT02010300/selectStdrYear.do")
	public ModelAndView selectStdrYear(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02010300Service, "selectStdrYear", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}  
	
	
	/**
	 * 매입임대 보증금, 임대료 관리 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/pms/rnt/prm/RNT02010300/selectRntchrgStdrList.do")
	public ModelAndView selectRntchrgStdrList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02010300Service, "selectRntchrgStdrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}  

	
	/**
	 * 매입임대 보증금, 임대료 관리 저장,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/pms/rnt/prm/RNT02010300/saveRntchrgStdrCUD.do")
	public ModelAndView saveRntchrgStdrCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02010300Service, "saveRntchrgStdrCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}  
}
