package hsco.mis.cus.CUS010301;

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
 * @Class Name      : CUS010301Controller.java
 * @Description     : 고객관리 목록을 조회하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 08. 07.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 07.      김병진             최초생성
 * </pre>  
 */

@Controller
public class CUS010301Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
	
    @Resource(name="CUS010301Service")
    CUS010301ServiceImpl CUS010301Service;
	
    /**
     * 고객관리 목록 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010301/selectCstmrList.do") 
    public ModelAndView selectCstmrList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("고객관리 목록 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

	        execService(CUS010301Service, "selectCstmrList", xpDto, mav );

	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        
	        return mav;
	    }   
	 
		
    /**
     * 고객관리 목록 수정 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010301/cstmrListCUD.do")
    public ModelAndView cstmrListCUD(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("고객관리 테이블 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
             execService(CUS010301Service, "cstmrListCUD", xpDto, mav);
             
             mav.addObject(NexacroConstant.ERROR_CODE, "0");
             mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
         
         return mav;
     }

    /**
     * 고객관리 구분(코드용 조회)
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010301/selectGetSe.do")
    public ModelAndView selectGetSe(NexacroMapDTO xpDto, Model model)
    		throws Exception {
    	
    	log.debug("고객관리 구분(코드용 조회) 테이블 저장 시작----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(CUS010301Service, "selectGetSe", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
    }

}