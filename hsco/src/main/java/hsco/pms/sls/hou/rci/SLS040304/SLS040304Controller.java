package hsco.pms.sls.hou.rci.SLS040304;

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
 * @Class Name   	: SLS040304Controller.java
 * @Description  	: 
 * @author       	: 변승우
 * @since        	: 2015. 10. 01.
 * @version      	: 1.0
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 01.				변승우				최초생성
 * </pre>  
 */
@Controller
public class SLS040304Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS040304Service")
	SLS040304ServiceImpl SLS040304Service;

	
	//주택결의서 목록
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040304/selectHouseDecsnList.do")
	public ModelAndView selectHouseDecsnList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택수납관리(결의서일괄)----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS040304Service, "selectHouseDecsnList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	//임대료조정현황
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040304/selectHouseRntchrgMdatList.do")
	public ModelAndView selectHouseRntchrgMdatList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS040304Service, "selectHouseRntchrgMdatList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	
	//주택 수입결의서 조회
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040304/selectHouseIncmeDecsnList.do")
	public ModelAndView selectHouseIncmeDecsnList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS040304Service, "selectHouseIncmeDecsnList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	//주택 수입결의서 조회2
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040304/selectHouseIncmeDecsnList2.do")
	public ModelAndView selectHouseIncmeDecsnList2(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS040304Service, "selectHouseIncmeDecsnList2", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	
	
	//주택 수입내역서 조회
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040304/selectHouseIncmeDtstmnList.do")
	public ModelAndView selectHouseIncmeDtstmnList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS040304Service, "selectHouseIncmeDtstmnList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
}
