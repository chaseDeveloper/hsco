package hsco.mis.bdg.BDG050202;

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
 * @Class Name      : BDG050202Controller.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 9. 21.
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
 *  2015. 9. 21.                  정윤원                최초생성
 * </pre>
 */
@Controller
public class BDG050202Controller extends BaseContoller {
    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @Resource(name = "BDG050202Service")
    BDG050202ServiceImpl BDG050202Service;

    /**
     * 조기집행실적 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/bdg/BDG050202/selectBudgetExcutPlan.do")
    public ModelAndView selectBudgetExcutPlan(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(BDG050202Service, "selectBudgetExcutPlan", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
}