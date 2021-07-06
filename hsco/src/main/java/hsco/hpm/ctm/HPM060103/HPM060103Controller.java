package hsco.hpm.ctm.HPM060103;

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
 * @Class Name   	: HPM060103Controller.java
 * @Description  	: 대관(프로그램)관리
 * @author       	: 정 민
 * @since        	: 2017. 08. 31.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2017. 08. 31.					정 민			최초생성
 * </pre>  
 */

@Controller
public class HPM060103Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(HPM060103Controller.class);
	@Resource(name="HPM060103Service")
	HPM060103ServiceImpl HPM060103Service;
	
	/**
	 * 대관(프로그램)관리 목록 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM060103/selectRentProgrmManageList.do")
	public ModelAndView selectRentProgrmManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM060103Service, "selectRentProgrmManageList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 사용요금 목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM060103/selectUseChrgeManageList.do")
	public ModelAndView selectUseChrgeManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM060103Service, "selectUseChrgeManageList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 대관(프로그램)관리 목록 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM060103/saveRentProgrmManageList.do")
	public ModelAndView saveRentProgrmManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HPM060103Service, "saveRentProgrmManageList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}	
	
//	/**
//	 * 대관(프로그램)정보 이관
//	 * @param xpDto
//	 * @param model
//	 * @return ModelAndView
//	 * @throws Exception
//	 */
//	@RequestMapping("/hsco/hpm/ctm/HPM060103/trnsferProgrmInfoList.do")
//	public ModelAndView trnsferProgrmInfoList(NexacroMapDTO xpDto, Model model) throws Exception {
//		
//		ModelAndView mav = new ModelAndView("nexacroMapView");
//
//		execService(HPM060103Service, "trnsferProgrmInfoList", xpDto, mav);
//
//		mav.addObject(NexacroConstant.ERROR_CODE, "0");
//		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
//		
//		
//		return mav;
//	}	
	
	
	/**
	 * 대관(프로그램)목록 조회(콤보성 데이터)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM060103/selectRentProgrmList.do")
	public ModelAndView selectRentProgrmList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM060103Service, "selectRentProgrmList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 프로그램 목록 조회(콤보성 데이터)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM060103/selectProgrmList.do")
	public ModelAndView selectProgrmList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM060103Service, "selectProgrmList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 프로그램 목록 조회(콤보성 데이터)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM060103/selectClassList.do")
	public ModelAndView selectClassList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM060103Service, "selectClassList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

}