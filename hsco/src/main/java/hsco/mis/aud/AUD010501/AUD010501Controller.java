package hsco.mis.aud.AUD010501;

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
 * @Class Name      : AUD010501Controller.java
 * @Description     : 감사공개관리 목록을 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 07. 24.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 24.      김병진              최초생성
 * </pre>  
 */

@Controller
public class AUD010501Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="AUD010501Service")
    AUD010501ServiceImpl AUD010501Service;
    
    /**
     * 감사공개 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD010501/selectAuditKnwldgList.do") 
    public ModelAndView selectAuditKnwldgList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("감사공개 목록 상세 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD010501Service, "selectAuditKnwldgList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   

    /**
     * 감사공개등록을 위한 감사 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD010501/selectAuditList.do") 
    public ModelAndView selectAuditList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("감사목록 상세 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(AUD010501Service, "selectAuditList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
    /**
    * 감사공개목록 저장/수정/삭제
    * @param xpDto
    * @param model
    * @return
    * @throws Exception
    */
   @RequestMapping("hsco/mis/aud/AUD010501/AuditKnwldgListCUD.do")
   public ModelAndView AuditKnwldgListCUD(NexacroMapDTO xpDto, Model model)
           throws Exception {
       
       log.debug("감사공개목록 저장 시작----------------------------------------------------!");
       ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(AUD010501Service, "AuditKnwldgListCUD", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }

   /**
    * 홈페이지 등록
    * @param xpDto
    * @param model
    * @return
    * @throws Exception
    */
   @RequestMapping("hsco/mis/aud/AUD010501/saveHpgCU.do")
   public ModelAndView saveHpgCU(NexacroMapDTO xpDto, Model model)
		   throws Exception {
	   
	   log.debug("홈페이지 등록 시작----------------------------------------------------!");
	   ModelAndView mav = new ModelAndView("nexacroMapView");
	   
	   execService(AUD010501Service, "saveHpgCU", xpDto, mav);
	   
	   mav.addObject(NexacroConstant.ERROR_CODE, "0");
	   mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
	   
	   return mav;
   }

/**
    * 홈페이지 게시판 조회
    * @param xpDto
    * @param model
    * @return
    * @throws Exception
    */
   @RequestMapping("hsco/mis/aud/AUD010501/selectHpgBoardList.do")
   public ModelAndView selectHpgBoardList(NexacroMapDTO xpDto, Model model)
		   throws Exception {
	   
	   log.debug("홈페이지 조회 시작----------------------------------------------------!");
	   ModelAndView mav = new ModelAndView("nexacroMapView");
	   
	   execService(AUD010501Service, "selectHpgBoardList", xpDto, mav);
	   
	   mav.addObject(NexacroConstant.ERROR_CODE, "0");
	   mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
	   
	   return mav;
   }
}
