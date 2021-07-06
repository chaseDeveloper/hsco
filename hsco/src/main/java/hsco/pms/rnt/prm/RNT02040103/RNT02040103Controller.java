package hsco.pms.rnt.prm.RNT02040103;

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
 * @Class Name   		: RNT02040103Controller.java
 * @Description  		: 매입임대 압류정보
 * @author       			: 변승우
 * @since       		 	: 2015. 11. 26.
 * @version  	    		: 1.0
 * @see        		 	 	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 26.					변승우				최초생성
 * </pre>  
 */


@Controller
public class RNT02040103Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="RNT02040103Service")
	RNT02040103ServiceImpl RNT02040103Service;
	
	
	/**
	 * 매입임대 압류 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040103/selectGtnSeizureList.do")
	public ModelAndView selectGtnSeizureList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040103Service, "selectGtnSeizureList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}		

}
