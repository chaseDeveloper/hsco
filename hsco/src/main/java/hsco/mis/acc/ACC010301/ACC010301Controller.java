package hsco.mis.acc.ACC010301;

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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC010301Controller.java
 * @Description  	: 주택예산계정과목맵핑을 조회하는 Controller 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 11. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 24.	이수지		최초생성
 * </pre>  
 */
@Controller
public class ACC010301Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC010301Controller.class);
	
	@Resource(name="ACC010301Service")
	ACC010301ServiceImpl ACC010301Service;
	
	
	/**
	 * 계정과목 리스트조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC010301/fnnrTblatManagelist.do") 
	public ModelAndView fnnrTblatManagelist(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("fnnrTblatManagelist Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC010301Service, "fnnrTblatManagelist", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	
	/**
	 * 상세계정과목 리스트 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC010301/fnnrTblatIEMManagelist.do") 
	public ModelAndView fnnrTblatIEMManagelist(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC010301Service, "fnnrTblatIEMManagelist", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 계정과목 리스트 등록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC010301/fnnrTblatManageCUD.do") 
	public ModelAndView fnnrTblatManageCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC010301Service, "fnnrTblatManageCUD", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
    /**
     * 전년도복사
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/acc/ACC010301/saveCopyPrvYear.do")
    public ModelAndView saveCopyPrvYear(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(ACC010301Service, "saveCopyPrvYear", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
}
