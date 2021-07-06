package hsco.pms.prj.PRJ010125;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ010125Controller.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2017. 11. 08.
 * @version      	: 1.0
 * @see          	:
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 11. 08.                  김형태              최초생성
 * </pre>
 */
@Controller
public class PRJ010125Controller extends BaseContoller {
    protected Logger log = LoggerFactory.getLogger(PRJ010125Controller.class);

    @Resource(name = "PRJ010125Service")
    PRJ010125ServiceImpl PRJ010125Service;

    /**
     * 조회(비상연락망전화번호, 사업소전화번호마스터)
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/prj/PRJ010125/selectEmgncContactNtwk.do")
    public ModelAndView selectEmgncContactNtwk(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(PRJ010125Service, "selectEmgncContactNtwk", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    
    /**
     * 상세조회(사업소전화번호상세(사원, 외부업체)
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/prj/PRJ010125/selectBizplcTelnoDetail.do")
    public ModelAndView selectBizplcTelnoDetail(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(PRJ010125Service, "selectBizplcTelnoDetail", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    

    /**
     * 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/prj/PRJ010125/save.do")
    public ModelAndView save(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(PRJ010125Service, "save", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

        return mav;
    }
    
    
}