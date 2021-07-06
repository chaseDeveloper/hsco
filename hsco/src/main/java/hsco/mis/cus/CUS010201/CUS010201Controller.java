package hsco.mis.cus.CUS010201;

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
 * @Class Name      : CUS010201Controller.java
 * @Description     : 직원칭찬관리 목록을 조회하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 08. 06.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 06.      김병진             최초생성
 * </pre>  
 */

@Controller
public class CUS010201Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
	
    @Resource(name="CUS010201Service")
    CUS010201ServiceImpl CUS010201Service;
	
    /**
     * 직원칭찬관리 목록 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010201/selectCstmrPartcptnList.do") 
    public ModelAndView selectCstmrPartcptnList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("직원칭찬관리 목록 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

	        execService(CUS010201Service, "selectCstmrPartcptnList", xpDto, mav );

	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        
	        return mav;
	    }   
	 
		
    /**
     * 직원칭찬관리 목록 수정 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010201/cstmrPartcptnListU.do")
    public ModelAndView cstmrPartcptnListU(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("고객방문평가카드 테이블 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
             execService(CUS010201Service, "cstmrPartcptnListU", xpDto, mav);
             
             mav.addObject(NexacroConstant.ERROR_CODE, "0");
             mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
         
         return mav;
     }
    
    /**
    * 내부결재레포트용데이터셋 목록 조회
    * @param xpDto
    * @param model
    * @return 
    * @throws Exception
    */
   @RequestMapping("hsco/mis/cus/CUS010201/innerSanctnUbiDataset.do") 
   public ModelAndView innerSanctnUbiDataset(NexacroMapDTO xpDto, Model model) throws Exception {
       
       log.debug("내부결재레포트용데이터셋 목록 리스트 ----------------------------------------------------!");
       ModelAndView mav = new ModelAndView("nexacroMapView");
   
       execService(CUS010201Service, "innerSanctnUbiDataset", xpDto, mav );

       mav.addObject(NexacroConstant.ERROR_CODE, "0");
       mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
       
       return mav;
   } 
   
   /**
    * 내부결재 최초 진행여부체크
    * @param xpDto
    * @param model
    * @return ModelAndView
    * @throws Exception
    */
   @RequestMapping("/hsco/mis/cus/CUS010201/selectInnerSanctnMasterCheck.do") 
   public ModelAndView selectInnerSanctnMasterCheck(NexacroMapDTO xpDto, Model model) throws Exception {
       
       log.debug("내부결재 최초 진행여부체크 ----------------------------------------------------!");
       ModelAndView mav = new ModelAndView("nexacroMapView");

       execService(CUS010201Service, "selectInnerSanctnMasterCheck", xpDto, mav );

       mav.addObject(NexacroConstant.ERROR_CODE, "0");
       mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
       
       return mav;
       
   }

   /**
    * 내부결재 번호 업데이트
    * @param xpDto
    * @param model
    * @return ModelAndView
    * @throws Exception
    */
   @RequestMapping("/hsco/mis/cus/CUS010201/saveInnerSanc.do") 
   public ModelAndView saveInnerSanc(NexacroMapDTO xpDto, Model model) throws Exception {
	   
	   log.debug("내부결재 번호 업데이트 ----------------------------------------------------!");
	   ModelAndView mav = new ModelAndView("nexacroMapView");
	   
	   execService(CUS010201Service, "saveInnerSanc", xpDto, mav );
	   
	   mav.addObject(NexacroConstant.ERROR_CODE, "0");
	   mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	   
	   return mav;
	   
   }
}