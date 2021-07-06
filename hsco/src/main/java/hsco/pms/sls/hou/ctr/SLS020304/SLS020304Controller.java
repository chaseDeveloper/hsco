package hsco.pms.sls.hou.ctr.SLS020304;

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
 * @Class Name   	: SLS020304Controller.java
 * @Description  	: 
 * @author       	: 변승우
 * @since        	: 2015. 8. 31.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 31.					변승우				최초생성
 * </pre>  
 */
@Controller
public class SLS020304Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS020304Service")
	SLS020304ServiceImpl SLS020304Service;
	
	/**
	 * 사용자콤보 주택코드 조회영역
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020304/houseCodeSh.do")
	public ModelAndView houseCodeSh(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택코드 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020304Service, "houseCodeSh", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	
	/**
	 * 주택종합정보의뢰 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020304/selectHouseTotalInfoList.do")
	public ModelAndView selectHouseTotalInfoList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택종합정보의뢰  조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020304Service, "selectHouseTotalInfoList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
}
