package hsco.pms.sls.hou.ctr.SLS020207;

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
 * @Class Name   	: SLS020207Controller.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 12.16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 16.		 이광원			최초생성
 * </pre>  
 */
@Controller
public class SLS020207Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS020207Service")
	SLS020207ServiceImpl SLS020207Service;
	
	/**
	 * 증감율 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020207/Intrt.do")
	public ModelAndView Intrt(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("증감율 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020207Service, "Intrt", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}

	/**
	 * 임대료,보증금 증액 조회 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020207/RntchrgChangeList.do")
	public ModelAndView RntchrgChangeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("임대료,보증금 증액 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020207Service, "RntchrgChangeList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}	

	/**
	 * 임대료,보증금 증액처리 프로시저
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020207/spsls_house_260c_raise.do")
	public ModelAndView spsls_house_260c_raise(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("임대료,보증금 증액처리 프로시저----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020207Service, "spsls_house_260c_raise", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}		

	/**
	 * 임대료,보증금 증액처리 프로시저
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020207/spsls_house_260c_raise_cancel.do")
	public ModelAndView spsls_house_260c_raise_cancel(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("임대료,보증금 증액처리 취소프로시저----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020207Service, "spsls_house_260c_raise_cancel", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}		
	
	
	
	
	
	/**
	 * 임대료,보증금 증액처리 프로시저
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020207/spsls_house_rentinfo_change.do")
	public ModelAndView spsls_house_rentinfo_change(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("임대료,보증금 증액처리 프로시저----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020207Service, "spsls_house_rentinfo_change", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}		

	/**
	 * 임대료,보증금 증액처리 프로시저
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020207/spsls_house_rentinfo_change_d.do")
	public ModelAndView spsls_house_rentinfo_change_d(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("임대료,보증금 증액처리 취소프로시저----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020207Service, "spsls_house_rentinfo_change_d", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}		
	
	
	/**
	 * 재계약회차
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020207/reContractNum.do")
	public ModelAndView reContractNum(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("재계약회차----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020207Service, "reContractNum", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
}
