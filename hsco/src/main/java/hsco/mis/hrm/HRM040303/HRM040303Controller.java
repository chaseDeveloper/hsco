package hsco.mis.hrm.HRM040303;

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
 * @Class Name   	: HRM040303Controller.java
 * @Description  	: 재심dd
 * @author       	: 김형태
 * @since        	: 2015. 09. 09.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 09. 09.   김형태		최초생성
 * </pre>  
 */

@Controller
public class HRM040303Controller extends BaseContoller {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM040303Service")
	HRM040303ServiceImpl HRM040303Service;
	
	
	/**
     * 징계코드 목록조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
	@RequestMapping("/hsco/mis/hrm/HRM040303/selectDscplStdrList.do")
	public ModelAndView selectDscplStdrList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM040303Service, "selectDscplStdrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
     * 징계자 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
	@RequestMapping("/hsco/mis/hrm/HRM040303/selectDscplDspsList.do")
	public ModelAndView tbhrmCallDslrc(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM040303Service, "selectDscplDspsList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
     * 재심요청 저장
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
	@RequestMapping("/hsco/mis/hrm/HRM040303/saveDscplDsps.do")
	public ModelAndView dscplDspsU(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM040303Service, "dscplDspsU", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
}