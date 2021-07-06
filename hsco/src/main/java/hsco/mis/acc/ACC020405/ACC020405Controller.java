package hsco.mis.acc.ACC020405;

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
 * @Class Name      : ACC020405Controller.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 11. 25.
 * @version         : 1.0
 * @see             :
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 25.                  정윤원                최초생성
 * </pre>
 */
@Controller
public class ACC020405Controller extends BaseContoller {
    protected Logger log = LoggerFactory.getLogger(ACC020405Controller.class);

    @Resource(name = "ACC020405Service")
    ACC020405ServiceImpl ACC020405Service;

    /**
     * 자금지출기록부 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/acc/ACC020405/select.do")
    public ModelAndView select(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	if(log.isInfoEnabled()) log.info("select Started!");
    	
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(ACC020405Service, "select", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    
    /**
     * 자금지출기록부 승인/취소
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/acc/ACC020405/timhderConfmU.do")
    public ModelAndView timhderConfmU(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(ACC020405Service, "timhderConfmU", xpDto, mav);
        //execService(ACC020405Service, "select", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    /**
     * 내부결재레포트용데이터셋 목록 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/acc/ACC020405/innerSanctnUbiDataset.do") 
    public ModelAndView innerSanctnUbiDataset(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(ACC020405Service, "innerSanctnUbiDataset", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    } 
    
	/**
     * 내부결재 저장
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/acc/ACC020405/saveInnerSanc.do") 
    public ModelAndView saveInnerSanc(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(ACC020405Service, "saveInnerSanc", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    } 
    
}