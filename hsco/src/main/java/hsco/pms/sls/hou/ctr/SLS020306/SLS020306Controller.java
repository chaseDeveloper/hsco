package hsco.pms.sls.hou.ctr.SLS020306;

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
 * @Class Name   	: SLS020306Controller.java
 * @Description  	: 국민주택기금상환내역 Controller
 * @author       	: 정윤원
 * @since        	: 2015. 11.27.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 
 * </pre>  
 */
@Controller
public class SLS020306Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS020306Service")
	SLS020306ServiceImpl SLS020306Service;

	/**
	 * 입주대기자 리스트 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020306/selectKjfRpayList.do")
	public ModelAndView selectKjfRpayList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("국민주택상환내역 리스트 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectKjfRpayList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020306Service, "selectKjfRpayList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	

	
}
