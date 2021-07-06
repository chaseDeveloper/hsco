package hsco.mis.cus.CUS010102_P01;

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
 * @Class Name      : CUS010102_P01Controller.java
 * @Description     : 고객상세정보를 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 08. 11.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 11.      김병진               최초생성
 * </pre>  
 */


@Controller
public class CUS010102_P01Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
	
    @Resource(name="CUS010102_P01Service")
    CUS010102_P01ServiceImpl CUS010102_P01Service;

    /**
     * 고객상세정보 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    
	 @RequestMapping("hsco/mis/cus/CUS010102_P01/selectCstmrInfo.do") 
	    public ModelAndView selectCstmrInfo(NexacroMapDTO xpDto, Model model) throws Exception {
	        
	        log.debug("고객상세정보----------------------------------------------------!");
	        ModelAndView mav = new ModelAndView("nexacroMapView");

	        execService(CUS010102_P01Service, "selectCstmrInfo", xpDto, mav );

	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        
	        return mav;
	    }   
	 
	/**
     * 고객등급 수정
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
     
     @RequestMapping("/hsco/mis/cus/CUS010102_P01/cstmrInfoU.do")
     public ModelAndView cstmrInfoU(NexacroMapDTO xpDto, Model model) throws Exception {
         
         log.debug("고객등급 CURD 시작----------------------------------------------------!");
         ModelAndView mav = new ModelAndView("nexacroMapView");
             execService(CUS010102_P01Service, "cstmrInfoU", xpDto, mav);
             
             mav.addObject(NexacroConstant.ERROR_CODE, "0");
             mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
         
         return mav;
     }
     
 	/**
      * 고객정보조회
      * @param xpDto
      * @param model
      * @return
      * @throws Exception
      */
      
      @RequestMapping("/hsco/mis/cus/CUS010102_P01/selectCstmrList.do")
      public ModelAndView selectCstmrList(NexacroMapDTO xpDto, Model model) throws Exception {
          
          log.debug("고객정보조회 시작----------------------------------------------------!");
          ModelAndView mav = new ModelAndView("nexacroMapView");
              execService(CUS010102_P01Service, "selectCstmrList", xpDto, mav);
              
              mav.addObject(NexacroConstant.ERROR_CODE, "0");
              mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
          
          return mav;
      }     

}