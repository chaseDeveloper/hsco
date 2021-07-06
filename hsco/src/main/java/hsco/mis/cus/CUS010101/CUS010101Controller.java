package hsco.mis.cus.CUS010101;

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
import hsco.mis.cus.CUS010101.CUS010101ServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CUS010101Controller.java
 * @Description  	: 민원현황을 조회하는 컨트롤러 클래스 
 * @author       	: 김병진
 * @since        	: 2015. 12. 08.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 08.      김병진	             최초생성
 * </pre>  
 */

@Controller
public class CUS010101Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    
    @Resource(name="CUS010101Service")
    CUS010101ServiceImpl CUS010101Service;
	
	/**
	 * 민원현황조회
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
    @RequestMapping("hsco/mis/cus/CUS010101/selectCvplSttusList.do") 
    public ModelAndView selectCvplSttusList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("민원현황조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(CUS010101Service, "selectCvplSttusList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }  
  
}