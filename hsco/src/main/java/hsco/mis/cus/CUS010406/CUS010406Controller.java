package hsco.mis.cus.CUS010406;

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
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : CUS010406Controller.java
 * @Description     : 고객동향보고서를 조회하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 9. 30.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 30.       김병진             최초생성
 * </pre>  
 */

@Controller
public class CUS010406Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="CUS010406Service")
    CUS010406ServiceImpl CUS010406Service;
    
    /**
     * 고객동향보고서 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010406/selectOnlineCvplList.do") 
    public ModelAndView selectOnlineCvplList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("고객동향보고서목록 조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010406Service, "selectOnlineCvplList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }   
    
    /**
     * 고객동향보고서(보고서출력에 필요한 데이터) 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010406/selectUbiOnlineCvpl.do") 
    public ModelAndView selectUbiOnlineCvpl(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("고객동향보고서목록(보고서출력에 필요한 데이터) 조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010406Service, "selectUbiOnlineCvpl", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    
    /**
     * 고객동향 저장/수정 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010406/cstmrTrendCU.do")
    public ModelAndView cstmrTrendCU(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("고객동향 테이블 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
             execService(CUS010406Service, "cstmrTrendCU", xpDto, mav);
             
             mav.addObject(NexacroConstant.ERROR_CODE, "0");
             mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
         
         return mav;
     }

}
