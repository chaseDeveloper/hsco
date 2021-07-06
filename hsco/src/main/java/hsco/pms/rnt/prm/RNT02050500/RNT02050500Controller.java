package hsco.pms.rnt.prm.RNT02050500;

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
 * @Class Name   		: RNT02050500Controller.java
 * @Description  		: 재계약예정자료
 * @author       			: 변승우
 * @since        			: 2015. 10. 22.
 * @version     		 	: 1.0
 * @see          			: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 22.					변승우				최초생성
 * </pre>  
 */


@Controller
public class RNT02050500Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="RNT02050500Service")
	RNT02050500ServiceImpl RNT02050500Service;
	
	
	/**
	 * 매입임대 재계약예정자료 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02050500/selectReCntrctPlaDataList.do")
	public ModelAndView selectReCntrctPlaDataList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02050500Service, "selectReCntrctPlaDataList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}  
}
