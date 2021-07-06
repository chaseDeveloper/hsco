package hsco.mis.hrm.HRM020201;

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
 * @Class Name   	: HRM020201Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 07.24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 07.24.			  이혜선			최초생성
 * </pre>  
 */

@Controller
public class HRM020201Controller extends BaseContoller {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM020201Service")
	HRM020201ServiceImpl HRM020201Service;
	


	/** 입사지원관리 기본사항상세조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020201/tbhrmEcnySportGnrlR.do")
	public ModelAndView tbhrmEcnySportGnrlR(NexacroMapDTO xpDto, Model model) throws Exception {
		
	    ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020201Service, "tbhrmEcnySportGnrlR", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	

	/** 입사지원관리 기본사항상세조회 탭 */
	@RequestMapping("/hsco/mis/hrm/HRM020201/selectTbhrmEcnySportGnrlTab.do")
	public ModelAndView selectTbhrmEcnySportGnrlTab(NexacroMapDTO xpDto, Model model) throws Exception {
		
	    ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020201Service, "selectTbhrmEcnySportGnrlTab", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	
	/** 입사지원관리 채용년도 콤보데이터 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020201/empmnYearComboList.do")
	public ModelAndView empmnYearComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
	    ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020201Service, "empmnYearComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	/** 입사지원관리 차수 콤보데이터 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020201/odrSeComboList.do")
	public ModelAndView odrSeComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
	    ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020201Service, "odrSeComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	


	/** 저장 */
	@RequestMapping("/hsco/mis/hrm/HRM020201/tbhrmEcnySportGnrlCUD.do")
	public ModelAndView tbhrmEcnySportGnrlCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
	    ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020201Service, "tbhrmEcnySportGnrlCUD", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	

	
	/** 엑셀 파일 업로드 */
	@RequestMapping("/hsco/mis/hrm/HRM020201/saveExcelUpload.do")
    public ModelAndView saveExcelUpload(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020201Service, "saveExcelUpload", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }
	
	/** 입사지원관리 첨부파일 다운로드 */
	@RequestMapping("/hsco/mis/hrm/HRM020201/selectDownFileList.do")
    public ModelAndView selectDownFileList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020201Service, "selectDownFileList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }
	
	/** 비밀번호 변경*/
	@RequestMapping("/hsco/mis/hrm/HRM020201/savePwd.do")
    public ModelAndView savePassword(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020201Service, "savePwd", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }
	
	/** 적격여부 변경*/
	@RequestMapping("/hsco/mis/hrm/HRM020201/saveProperAt.do")
    public ModelAndView saveProperAt(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020201Service, "saveProperAt", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }
	
	/** 응시번호 부여*/
	@RequestMapping("/hsco/mis/hrm/HRM020201/rlApyexmNoU.do")
    public ModelAndView rlApyexmNoU(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020201Service, "rlApyexmNoU", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }
}