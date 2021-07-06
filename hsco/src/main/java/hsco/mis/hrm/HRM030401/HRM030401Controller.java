package hsco.mis.hrm.HRM030401;


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
 * @Class Name   	: HRM030401Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 9. 2.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 2.         이혜선			최초생성
 * </pre>  
 */

@Controller
public class HRM030401Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="HRM030401Service")
	HRM030401ServiceImpl HRM030401Service;
	
	/**
	 * 기본정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030401/tbhrmHrMastrR.do") 
	public ModelAndView tbhrmHrMastrR(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("기본정보 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM030401Service, "tbhrmHrMastrR", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	

	/**
	 * 기본정보(급여) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030401/tbhrmHrMastrSalR.do") 
	public ModelAndView tbhrmHrMastrSalR(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("기본정보(급여)조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM030401Service, "tbhrmHrMastrSalR", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 기본사항 탭조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030401/tbhrmHrEtcList.do") 
	public ModelAndView tbhrmHrEtcList(NexacroMapDTO xpDto, Model model) throws Exception {
				
		log.debug("기본사항 탭조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM030401Service, "tbhrmHrEtcList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 가족사항 탭조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030401/tbhrmHrFamilyList.do") 
	public ModelAndView tbhrmHrFamilyList(NexacroMapDTO xpDto, Model model) throws Exception {
				
		log.debug("가족사항 탭조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM030401Service, "tbhrmHrFamilyList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 학력사항 탭조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030401/tbhrmHrAcdmcrList.do") 
	public ModelAndView tbhrmHrAcdmcrList(NexacroMapDTO xpDto, Model model) throws Exception {
				
		log.debug("학력사항 탭조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM030401Service, "tbhrmHrAcdmcrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 사회단체 탭조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030401/tbhrmHrSoctyList.do") 
	public ModelAndView tbhrmHrSoctyList(NexacroMapDTO xpDto, Model model) throws Exception {
				
		log.debug("사회단체 탭조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM030401Service, "tbhrmHrSoctyList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 사회단체 탭조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030401/tbhrmHrDscplDspsList.do") 
	public ModelAndView tbhrmHrDscplDspsList(NexacroMapDTO xpDto, Model model) throws Exception {
				
		log.debug("사회단체  탭조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM030401Service, "tbhrmHrDscplDspsList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 포상서훈 탭조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030401/tbhrmHrRwardCnferList.do") 
	public ModelAndView tbhrmHrRwardCnferList(NexacroMapDTO xpDto, Model model) throws Exception {
				
		log.debug("포상서훈 탭조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM030401Service, "tbhrmHrRwardCnferList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 교육훈련 탭조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030401/tbhrmHrEdcTraingComplList.do") 
	public ModelAndView tbhrmHrEdcTraingComplList(NexacroMapDTO xpDto, Model model) throws Exception {
				
		log.debug("교육훈련 탭조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM030401Service, "tbhrmHrEdcTraingComplList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 경력사항 탭조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030401/tbhrmHrCareerList.do") 
	public ModelAndView tbhrmHrCareerList(NexacroMapDTO xpDto, Model model) throws Exception {
				
		log.debug("경력사항 탭조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM030401Service, "tbhrmHrCareerList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 외국시찰 탭조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030401/tbhrmHrFrntnInspnSdytrnList.do") 
	public ModelAndView tbhrmHrFrntnInspnSdytrnList(NexacroMapDTO xpDto, Model model) throws Exception {
				
		log.debug("외국시찰 탭조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM030401Service, "tbhrmHrFrntnInspnSdytrnList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 자격사항 탭조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030401/tbhrmHrQualfList.do") 
	public ModelAndView tbhrmHrQualfList(NexacroMapDTO xpDto, Model model) throws Exception {
				
		log.debug("자격사항 탭조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM030401Service, "tbhrmHrQualfList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 인사기록CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030401/tbhrmHrMastrCUD.do")
	public ModelAndView tbhrmHrMastrCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("인사기록 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM030401Service, "tbhrmHrMastrCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
}
