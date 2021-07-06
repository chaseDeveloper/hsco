package hsco.mis.sup.SUP010102;

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
 * @Class Name   	: SUP010102Controller.java
 * @Description  	: 성과급지급율관리 Controller 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 10. 27.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 27.	이수지		최초생성
 * </pre>  
 */
@Controller
public class SUP010102Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="SUP010102Service")
	SUP010102ServiceImpl SUP010102Service;
	
	/**
	 * 성과급지급율관리 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/sup/SUP010102/mngntEvlRsltPymntRtList.do") 
	public ModelAndView mngntEvlRsltPymntRtList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(SUP010102Service, "mngntEvlRsltPymntRtList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	

	/**
	 * 성과급지급율관리 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/sup/SUP010102/mngntEvlRsltPymntRtCUD.do") 
	public ModelAndView mngntEvlRsltPymntRtCUD(NexacroMapDTO xpDto, Model model) throws Exception {
	
		ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(SUP010102Service, "mngntEvlRsltPymntRtCUD", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 성과급지급율관리 전년도 복사
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/sup/SUP010102/mngntEvlRsltPymntRtCOPY.do") 
	public ModelAndView mngntEvlRsltPymntRtCOPY(NexacroMapDTO xpDto, Model model) throws Exception {
	
		ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(SUP010102Service, "mngntEvlRsltPymntRtCOPY", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
}
