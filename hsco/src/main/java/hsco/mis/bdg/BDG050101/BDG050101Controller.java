package hsco.mis.bdg.BDG050101;

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
 * 
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : BDG050101Controller.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 9. 17.
 * @version         : 1.0
 * @see             :
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 17.                  정윤원                최초생성
 * </pre>
 */
@Controller
public class BDG050101Controller extends BaseContoller {
    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @Resource(name = "BDG050101Service")
    BDG050101ServiceImpl BDG050101Service;

    /**
     * 예산집행계획 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/bdg/BDG050101/selectBudgetExcutPlan.do")
    public ModelAndView selectBudgetExcutPlan(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(BDG050101Service, "selectBudgetExcutPlan", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    /**
     * 조기집행계획 등록 팝업 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/bdg/BDG050101/selectPopup.do")
    public ModelAndView selectPopup(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(BDG050101Service, "selectPopup", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    /**
     * 예산집행계획 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/bdg/BDG050101/save.do")
    public ModelAndView save(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(BDG050101Service, "save", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

        return mav;
    }
    
    /**
     * 자동계산
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/bdg/BDG050101/saveAtmcCalc.do")
    public ModelAndView saveAtmcCalc(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(BDG050101Service, "saveAtmcCalc", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    /**
     * 배정계획확정(정기배정 입력)
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/bdg/BDG050101/saveDcsnAsignPlan.do")
    public ModelAndView saveDcsnAsignPlan(NexacroMapDTO xpDto, Model model) throws Exception {
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(BDG050101Service, "saveDcsnAsignPlan", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
    }
    
    /**
     * 집행계획확정
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/bdg/BDG050101/saveDcsnExcutPlan.do")
    public ModelAndView saveDcsnExcutPlan(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(BDG050101Service, "saveDcsnExcutPlan", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    /**
     * 집행계획 이력남기기
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/bdg/BDG050101/saveBudgetExcutPlnHist.do")
    public ModelAndView saveBudgetExcutPlnHist(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(BDG050101Service, "saveBudgetExcutPlnHist", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
}