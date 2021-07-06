package hsco.mis.cus.CUS010407;

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
 * @Class Name      : CUS010407Controller.java
 * @Description    : VOC(해피콜), 고객방문평가카드 점수에 해당하는 공통코드를 관리하는 컨트롤러 클래스
 * @author          : 이수지
 * @since           : 2016. 05. 31.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 05. 31.       이수지             최초생성
 * </pre>  
 */

@Controller
public class CUS010407Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="CUS010407Service")
    CUS010407ServiceImpl CUS010407Service;
    
    /**
     * 산정표점수관리 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010407/selectCodeList.do") 
    public ModelAndView selectOnlineCvplList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("산정표점수관리목록 조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010407Service, "selectCodeList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }   
    
    /**
     * 산정표점수관리 수정
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010407/codeU.do") 
    public ModelAndView selectUbiOnlineCvpl(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("산정표점수관리수정");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010407Service, "codeU", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    
}
