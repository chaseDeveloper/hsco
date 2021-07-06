package hsco.mis.hrm.HRMCommon;

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
 * @Class Name   	: HRMCommonController.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 8. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 18.	박병일			최초생성
 * </pre>  
 */

@Controller
public class HRMCommonController extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="HRMCommonService")
	HRMCommonServiceImpl HRMCommonService;
	
	/**
	 * 현재 평가차수(평가연도&차수)정보  조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRMCommon/selectCurDevaOdrInfo.do") 
	public ModelAndView selectCurDevaOdrInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("현재 평가차수 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRMCommonService, "selectCurDevaOdrInfo", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 직전 평가차수(평가연도&차수)정보  조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRMCommon/selectBefDevaOdrInfo.do") 
	public ModelAndView selectBefDevaOdrInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("직전 평가차수 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRMCommonService, "selectBefDevaOdrInfo", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 평정단위별 평정자 정보  조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRMCommon/selectRaterDtlInfo.do") 
	public ModelAndView selectRaterDtlInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평정단위별 평정자 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRMCommonService, "selectRaterDtlInfo", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 징계처붐코드 목록  조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRMCommon/selectDslrcCodeList.do") 
	public ModelAndView selectDslrcCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("징계처분목록 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRMCommonService, "selectDslrcCodeList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 직무지원 부서코드 목록  조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRMCommon/selectSportDeptList.do") 
	public ModelAndView selectSportDeptList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("직무지원 부서코드 목록목록 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRMCommonService, "selectSportDeptList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 현재 기준년도&차수[직위/직무공모]  조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRMCommon/selectCurStdrOdrInfo.do") 
	public ModelAndView selectCurStdrOdrInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("기준년도&차수 정보 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRMCommonService, "selectCurStdrOdrInfo", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;		
	}	

	/**
     * 접속자정보 조회
     * 
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/hrm/HRMCommon/selectUserInfo.do")
    public ModelAndView selectUserInfo(NexacroMapDTO xpDto, Model model) throws Exception {
    	 ModelAndView mav = new ModelAndView("nexacroMapView");

         execService(HRMCommonService, "selectUserInfo", xpDto, mav);

         mav.addObject(NexacroConstant.ERROR_CODE, "0");
         mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

         return mav;
    }
    
        
    /**
     * 사용자정보 조회
     * 
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/hrm/HRMCommon/selectEmpnoList.do")
    public ModelAndView selectEmpnoList(NexacroMapDTO xpDto, Model model) throws Exception {
    	 ModelAndView mav = new ModelAndView("nexacroMapView");

         execService(HRMCommonService, "selectEmpnoList", xpDto, mav);

         mav.addObject(NexacroConstant.ERROR_CODE, "0");
         mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

         return mav;
    }
    
    @RequestMapping("hsco/mis/hrm/HRMCommon/selectUserIdList.do")
    public ModelAndView selectUserIdList(NexacroMapDTO xpDto, Model model) throws Exception {
    	 ModelAndView mav = new ModelAndView("nexacroMapView");

         execService(HRMCommonService, "selectUserIdList", xpDto, mav);

         mav.addObject(NexacroConstant.ERROR_CODE, "0");
         mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

         return mav;
    }
}
