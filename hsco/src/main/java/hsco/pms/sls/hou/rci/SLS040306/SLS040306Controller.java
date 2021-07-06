package hsco.pms.sls.hou.rci.SLS040306;

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
import hsco.pms.sls.com.SLS000000.SLS000000ServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS040306Controller.java
 * @Description  	: 잔금 납부일자 일괄등록
 * @author       	: 최인석
 * @since        	: 2016. 8.27.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        	작성자                	내용
 * ------------------------------------------------------------------
 *  2016. 8.27.		최인석			최초생성
 * </pre>  
 */
@Controller
public class SLS040306Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS040306Service")
	SLS040306ServiceImpl SLS040306Service;

	/**
	 * 잔금 납부일자 일괄등록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040306/saveTmlmtDe.do")
	public ModelAndView saveTmlmtDe(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS040306Service, "saveTmlmtDe", xpDto, mav);		// 주택납부코드 조회 - payCode
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상처리");
		
		return mav;
	}
	
}
