package hsco.pms.sls.lad.std.SLS070101;

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
 * @Class Name   	: SLS070101Controller.java
 * @Description  	: 
 * @author       	: 최승락
 * @since        	: 2015. 9.16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 16.		  최승락			최초생성
 * </pre>  
 */
@Controller
public class SLS070101Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS070101Service")
	SLS070101ServiceImpl SLS070101Service;

	/**
	 * 토지기초 정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070101/selectLandList.do")
	public ModelAndView selectLandList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS070101Service, "selectLandList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	/**
	 * 토지별 기타 정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070101/selectLandEtcList.do")
	public ModelAndView selectLandEtcList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS070101Service, "selectLandEtcList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	/**
	 * 토지기초 정보 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070101/saveLandList.do")
	public ModelAndView saveLandList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS070101Service, "saveLandList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 토지기초 정보 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070101/deleteLandInfo.do")
	public ModelAndView deleteLandInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS070101Service, "deleteLandInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	//------------------------------------------------------------------------------
	
	
	
	/**
	 * 토지납부비율 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070101/selectLandPayRateList.do")
	public ModelAndView selectLandPayRateList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지납부비율 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS070101Service, "selectLandPayRateList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	/**
	 * 토지납부비율 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070101/selectLandPayRateExist.do")
	public ModelAndView selectLandPayRateExist(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지납부비율중복조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS070101Service, "selectLandPayRateExist", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	/**
	 * 토지납부비율 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070101/saveLandPayRateList.do")
	public ModelAndView saveLandPayRateList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("토지납부비율 저장 ----------------------------------------------------!");		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS070101Service, "saveLandPayRateList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 토지급지단가 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070101/selectLandClUntpcList.do")
	public ModelAndView selectLandClUntpcList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지급지단가 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS070101Service, "selectLandClUntpcList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	/**
	 * 토지급지단가 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070101/saveLandClUntpcList.do")
	public ModelAndView saveLandClUntpcList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("토지급지단가 저장 ----------------------------------------------------!");		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS070101Service, "saveLandClUntpcList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 토지납부코드 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070101/selectPayCodeList.do")
	public ModelAndView selectPayCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지급지단가 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS070101Service, "selectPayCodeList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
}
