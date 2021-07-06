package hsco.pms.sls.hou.rqe.SLS030101;

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
 * @Class Name   	: SLS030101Controller.java
 * @Description  	: 
 * @author       	: 변승우
 * @since        	: 2015. 9. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 17.					변승우				최초생성
 * </pre>  
 */

@Controller
public class SLS030101Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS030101Service")
	SLS030101ServiceImpl SLS030101Service;

	/**
	 * 사용자콤보 주택코드 조회영역
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rqe/SLS030101/houseCodeSh.do")
	public ModelAndView houseCodeSh(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택코드 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS030101Service, "houseCodeSh", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	
	/**
	 * 주택안내 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rqe/SLS030101/houseInfoList.do")
	public ModelAndView houseInfoList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택안내 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS030101Service, "houseInfoList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}	

}
