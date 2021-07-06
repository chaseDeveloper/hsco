package hsco.hpm.pbm.HPM040101;

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
 * @Class Name   	: HPM040101Controller.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2016. 04. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 04. 25.	   박병일			최초생성
 * </pre>  
 */

@Controller
public class HPM040101Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(HPM040101Controller.class);
	@Resource(name="HPM040101Service")
	HPM040101ServiceImpl HPM040101Service;
	
	/**
	 * 공급공고 접수정보 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/pbm/HPM040101/selectSuplyReqstList.do")
	public ModelAndView selectSuplyReqstList(NexacroMapDTO xpDto, Model model) throws Exception {

		if(log.isInfoEnabled()) log.info("selectSuplyReqstList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM040101Service, "selectSuplyReqstList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 공급공고 목록(Combo) 정보조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/pbm/HPM040101/selectSuplyPblancList.do")
	public ModelAndView selectSuplyPblancList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM040101Service, "selectSuplyPblancList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
}