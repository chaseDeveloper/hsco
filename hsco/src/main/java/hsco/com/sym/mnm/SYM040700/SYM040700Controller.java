package hsco.com.sym.mnm.SYM040700;

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
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM040700Controller.java
 * @Description  	: 발령자를 조회하여 권한그룹을 복사하는 컨트롤러 클래스
 * @author       	: 조진연
 * @since        	: 2016. 7. 30.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * </pre>
 */
@Controller
public class SYM040700Controller extends BaseContoller {
	
protected Logger log = LoggerFactory.getLogger(SYM040700Controller.class);	
	
	@Resource(name="SYM040700Service")
	SYM040700ServiceImpl SYM040700Service;
	
	/**
	 * 사용자 정보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040700/getListUser.do") 
	public ModelAndView getListUser(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사용자 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM040700Service, "getListUser", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	  /**
     * 해당부서의 사원목록 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    
	 @RequestMapping("/hsco/com/sym/mnm/SYM040700/selectEmpUserList.do") 
	    public ModelAndView selectEmpList(NexacroMapDTO xpDto, Model model) throws Exception {
	        
	        log.debug("해당부서의 사원목록 리스트 ----------------------------------------------------!");
	        ModelAndView mav = new ModelAndView("nexacroMapView");

	        execService(SYM040700Service, "selectEmpUserList", xpDto, mav );

	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        
	        return mav;
	    }   
	  /**
	     * 해당 사용자의 최종저장된 권한그룹조회
	     * @param xpDto
	     * @param model
	     * @return 
	     * @throws Exception
	     */
	    
		 @RequestMapping("/hsco/com/sym/mnm/SYM040700/getTranUserGrp.do") 
		    public ModelAndView getTranUserGrp(NexacroMapDTO xpDto, Model model) throws Exception {
		        
		        log.debug("해당부서의 사원목록 리스트 ----------------------------------------------------!");
		        ModelAndView mav = new ModelAndView("nexacroMapView");
		        execService(SYM040700Service, "getTranUserGrp", xpDto, mav );

		        mav.addObject(NexacroConstant.ERROR_CODE, "0");
		        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		        
		        return mav;
		    }   
			
			/**
			 * 사용자 권한복사 전 권한복사저장 데이터 생성작업
			 * @param xpDto
			 * @param model
			 * @return
			 * @throws Exception
			 */
			@RequestMapping("/hsco/com/sym/mnm/SYM040700/checkUserGrp.do") 
			public ModelAndView checkUserGrp(NexacroMapDTO xpDto, Model model) throws Exception {
				
				log.debug("사용자 추가 대상 리스트 ----------------------------------------------------!");
				ModelAndView mav = new ModelAndView("nexacroMapView");
				
				execService(SYM040700Service, "checkUserGrp", xpDto, mav);
				mav.addObject(NexacroConstant.ERROR_CODE, "0");
				mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
				
				return mav;
				
			}
			/**
			 * 사용자 권한복사저장 작업
			 * @param xpDto
			 * @param model
			 * @return
			 * @throws Exception
			 */
			@RequestMapping("/hsco/com/sym/mnm/SYM040700/savefnUserGrp.do") 
			public ModelAndView savefnUserGrp(NexacroMapDTO xpDto, Model model) throws Exception {
				
				log.debug("사용자 추가 대상 리스트 ----------------------------------------------------!");
				ModelAndView mav = new ModelAndView("nexacroMapView");			
				execService(SYM040700Service, "savefnUserGrp", xpDto, mav);
				
				mav.addObject(NexacroConstant.ERROR_CODE, "0");
				mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
				
				return mav;
				
			}
}



