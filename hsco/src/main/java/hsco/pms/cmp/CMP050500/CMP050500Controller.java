package hsco.pms.cmp.CMP050500;

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
 * @Class Name   	: CMP050500Controller.java
 * @Description  	: 총물량조서를 관리하는 컨트롤러 클래스
 * @author       	: 변승우
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
 *  2015. 7. 17.					변승우				최초생성
 * </pre>  
 */

@Controller
public class CMP050500Controller extends BaseContoller{

	private final Logger log = LoggerFactory.getLogger(CMP050500Controller.class);
	
	@Resource(name="CMP050500Service")
	CMP050500ServiceImpl cmp050500Service;
	
	@RequestMapping("hsco/pms/cmp/CMP050500/selectTotalVolmWtnncList.do") 
	public ModelAndView selectEnforcemenPrsentList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("총물량조서 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp050500Service, "selectTotalVolmWtnncList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}
