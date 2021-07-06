package hsco.mis.cus.CUS010203_P01;

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
 * @Class Name      : CUS010203_P01Controller.java
 * @Description     : 설문조사 미리보기를 조회하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 11. 27.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 27.      김병진               최초생성
 * </pre>  
 */


@Controller
public class CUS010203_P01Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    @Resource(name="CUS010203_P01Service")
    CUS010203_P01ServiceImpl CUS010203_P01Service;

    /**
     * 고객상세정보 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    
	 @RequestMapping("hsco/mis/cus/CUS010203_P01/selectExaminInfoView.do") 
	    public ModelAndView selectExaminInfoView(NexacroMapDTO xpDto, Model model) throws Exception {
	        
	        log.debug("설문조사 미리보기 조회----------------------------------------------------!");
	        ModelAndView mav = new ModelAndView("nexacroMapView");

	        execService(CUS010203_P01Service, "selectExaminInfoView", xpDto, mav );

	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        
	        return mav;
	    }   
	 
}