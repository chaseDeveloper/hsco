package hsco.mis.hrm.HRM020304;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM020304Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 08. 03.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 08. 03.		  이혜선			최초생성
 * </pre>  
 */

@Controller
public class HRM020304Controller extends BaseContoller{
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM020304Service")
	HRM020304ServiceImpl HRM020304Service;
	

	/** 인적성검사관리 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020304/paTestScrproList.do")
	public ModelAndView paTestScrproList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020304Service, "paTestScrproList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	


	@RequestMapping("/hsco/mis/hrm/HRM020304/paTestScrproR.do")
	public ModelAndView paTestScrproR(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020304Service, "paTestScrproR", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	

	/** 인적성검사관리 채용년도 콤보데이터 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020304/empmnYearComboList.do")
	public ModelAndView empmnYearComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020304Service, "empmnYearComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	/** 인적성검사관리 차수 콤보데이터 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020304/odrSeComboList.do")
	public ModelAndView odrSeComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020304Service, "odrSeComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	/** 인적성검사관리 채용공고명 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020304/pblancNmComboList.do")
	public ModelAndView pblancNmComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020304Service, "pblancNmComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	


	@RequestMapping("/hsco/mis/hrm/HRM020304/paTestScrproDetailCUD.do")
	public ModelAndView paTestScrproDetailCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020304Service, "paTestScrproDetailCUD", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}
	
    @RequestMapping("/hsco/mis/hrm/HRM020304/saveExcelUpload.do")
    public ModelAndView saveExcelUpload(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020304Service, "saveExcelUpload", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }
}