package hsco.mis.cus.CUS010102;

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
 * @Class Name      : CUS010102Controller.java
 * @Description     : 민원분배를 관리하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 08. 05.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 03.  김병진             최초생성
 * </pre>  
 */

@Controller
public class CUS010102Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
	
    @Resource(name="CUS010102Service")
    CUS010102ServiceImpl CUS010102Service;
	 
    /**
	 * 부서리스트 및 화면접근 가능 사용자 리스트 조회
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
	 @RequestMapping("hsco/mis/cus/CUS010102/selectDeptCodeList.do") 
	    public ModelAndView selectDeptCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
	        
	     log.debug("부서리스트 조회 ----------------------------------------------------!");
	        ModelAndView mav = new ModelAndView("nexacroMapView");

	        execService(CUS010102Service, "selectDeptCodeList", xpDto, mav );

	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        
	        return mav;
	    }   
	 
	/**
	 * 온/오프라인민원 목록 조회
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
	 @RequestMapping("hsco/mis/cus/CUS010102/selectCvplList.do") 
	    public ModelAndView selectCvplList(NexacroMapDTO xpDto, Model model) throws Exception {
	        
	     log.debug("온/오프라인민원목록 리스트 ----------------------------------------------------!");
	        ModelAndView mav = new ModelAndView("nexacroMapView");

	        execService(CUS010102Service, "selectCvplList", xpDto, mav );

	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        
	        return mav;
	    }   
	 
	
	/**
	 * 부서담당자 정보 조회
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
     @RequestMapping("hsco/mis/cus/CUS010102/selectChargerAppnInfo.do") 
        public ModelAndView selectChargerAppnInfo(NexacroMapDTO xpDto, Model model) throws Exception {
            
         log.debug("부서담당자 정보조회 ----------------------------------------------------!");
            ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(CUS010102Service, "selectChargerAppnInfo", xpDto, mav );

            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
            
            return mav;
        }   
     
		
	/**
	 * 민원분배관리 테이블 저장/수정/삭제 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
     
     @RequestMapping("/hsco/mis/cus/CUS010102/hmpgCvplDstbListCUD.do")
     public ModelAndView hmpgCvplDstbListCUD(NexacroMapDTO xpDto, Model model) throws Exception {
         
         log.debug("민원분배관리 테이블 저장 시작----------------------------------------------------!");
         ModelAndView mav = new ModelAndView("nexacroMapView");
             execService(CUS010102Service, "hmpgCvplDstbListCUD", xpDto, mav);
             
             mav.addObject(NexacroConstant.ERROR_CODE, "0");
             mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
         
         return mav;
     }

     
     /**
      * 고객정보  조회
      * @param xpDto
      * @param model
      * @return 
      * @throws Exception
      */
     @RequestMapping("hsco/mis/cus/CUS010102/selectHmpgCstmrInfo.do") 
     public ModelAndView selectHmpgCstmrInfo(NexacroMapDTO xpDto, Model model) throws Exception {
         
      log.debug("고객 정보조회 ----------------------------------------------------!");
         ModelAndView mav = new ModelAndView("nexacroMapView");

         execService(CUS010102Service, "selectHmpgCstmrInfo", xpDto, mav );

         mav.addObject(NexacroConstant.ERROR_CODE, "0");
         mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
         
         return mav;
     }       
}