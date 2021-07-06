package hsco.com.sym.bom.SYM120200;


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
 * @Class Name   	: SYM110200Controller.java
 * @Description  	: 배치결과관리
 * @author       	: 김지훈
 * @since        	: 2016. 03. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 03. 16.					김지훈			최초생성
 * </pre>  
 */
@Controller
public class SYM120200Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(SYM120200Controller.class);
	@Resource(name="SYM120200Service")
	SYM120200ServiceImpl SYM120200Service;
	
	/**
	 * 배치결과 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/com/sym/bom/SYM120200/selectBatchRsltList.do")
	public ModelAndView selectBatchRsltList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled())
		    log.info("selectBatchRsltList called!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM120200Service, "selectBatchRsltList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
}
