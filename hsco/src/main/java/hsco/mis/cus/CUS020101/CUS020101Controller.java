package hsco.mis.cus.CUS020101;

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
 * @Class Name      : CUS020101Controller.java
 * @Description     : 우리팀 민원분배를 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 08. 13.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 13.      김병진               최초생성
 * </pre>  
 */


@Controller
public class CUS020101Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
	
    @Resource(name="CUS020101Service")
    CUS020101ServiceImpl CUS020101Service;
	
    /**
     * 우리팀 민원분배 목록 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS020101/selectTeamCvplDstbList.do") 
    public ModelAndView selectTeamCvplDstbList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("온/오프라인민원목록 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

	        execService(CUS020101Service, "selectTeamCvplDstbList", xpDto, mav );

	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        
	        return mav;
	    }   
	 
		
    /**
     * 우리팀 민원분배관리 테이블 저장/수정/삭제 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS020101/teamCvplDstbListCUD.do")
    public ModelAndView teamCvplDstbListCUD(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("우리팀 민원분배관리 테이블 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
             execService(CUS020101Service, "teamCvplDstbListCUD", xpDto, mav);
             
             mav.addObject(NexacroConstant.ERROR_CODE, "0");
             mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
         
         return mav;
     }
    
    /**
	 * 부서별 접수반려 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/cus/CUS020101/returnCVPLU.do")
	public ModelAndView returnCVPLU(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("부서별 접수반려 U 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

			execService(CUS020101Service, "returnCVPLU", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}

}