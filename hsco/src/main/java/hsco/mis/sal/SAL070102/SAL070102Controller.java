package hsco.mis.sal.SAL070102;

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
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL070102Controller.java
 * @Description  	: 기간제근태관리
 * @author       	: 이상명
 * @since        	: 2015. 11. 09.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 09.					이상명				최초생성
 * </pre>  
 */


@Controller
public class SAL070102Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SAL070102Service")
	SAL070102ServiceImpl SAL070102Service;
	
	/**
	 * 기간제근태관리
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL070102/selectPdWorkDclzList.do") 
	public ModelAndView selectPdWorkDclzList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SAL070102Service, "selectPdWorkDclzList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	
	/**
	 * 기간제근태관리 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL070102/PdWorkDclzCUD.do")
	public ModelAndView PdWorkDclzCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("기간제근태관리CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SAL070102Service, "PdWorkDclzCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
     * 기간제근태관리 근태 생성
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL070102/PdWorkDclzCRE.do")
    public ModelAndView PdWorkDclzCRE(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("기간제근태관리 근태 생성 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL070102Service, "PdWorkDclzCRE", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
	
	
}