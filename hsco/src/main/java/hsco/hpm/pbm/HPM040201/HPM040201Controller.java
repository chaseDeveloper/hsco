package hsco.hpm.pbm.HPM040201;

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
 * @Class Name   	: HPM040201Controller.java
 * @Description  	: 
 * @author       	: 조진연
 * @since        	: 2016. 09. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 09. 20.	   조진연			최초생성
 * </pre>  
 */

@Controller
public class HPM040201Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(HPM040201Controller.class);
	@Resource(name="HPM040201Service")
	HPM040201ServiceImpl HPM040201Service;
	/**
	 * 공급공고 접수정보 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/pbm/HPM040201/selectReqstList.do")
	public ModelAndView selectReqstList(NexacroMapDTO xpDto, Model model) throws Exception {

		if(log.isInfoEnabled()) log.info("selectReqstList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM040201Service, "selectReqstList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}