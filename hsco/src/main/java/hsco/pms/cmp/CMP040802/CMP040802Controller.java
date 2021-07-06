package hsco.pms.cmp.CMP040802;

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
 * @Class Name   	: CMP040802Controller.java
 * @Description  	: 수용확인발급대장
 * @author       	: 지효정
 * @since        	: 2015. 7. 17.
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
@RequestMapping("/hsco/pms/cmp/tdd/CMP040802")
public class CMP040802Controller extends BaseContoller{
	private final Logger log = LoggerFactory.getLogger(CMP040802Controller.class);
	
	@Resource(name="CMP040802Service")
	CMP040802ServiceImpl cmp040802Service;
	
	@RequestMapping("/aceptncCnfrmnList.do") 
	public ModelAndView aceptncCnfrmnList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("대체취득 물건내역 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp040802Service, "aceptncCnfrmnList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}
