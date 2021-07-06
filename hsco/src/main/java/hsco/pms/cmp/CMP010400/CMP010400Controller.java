package hsco.pms.cmp.CMP010400;

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
 * @Project Name 	: 보상물류분류 코드
 * @Class Name   	: CMP010400Controller.java
 * @Description  	: 보상물류분류 코드를 관리하는 컨트롤러 클래스
 * @author       	: 이광원
 * @since        	: 20160. 1. 3.
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
public class CMP010400Controller extends BaseContoller{
	
	private final Logger log = LoggerFactory.getLogger(CMP010400Controller.class);
	
	@Resource(name="CMP010400Service")
	CMP010400ServiceImpl cmp010400Service;
	
	/**
	 * 보상물류분류 코드
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/cmp/CMP010400/selectCodeList.do") 
	public ModelAndView selectCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상물류분류 코드 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp010400Service, "selectCodeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;	
	}
	
	/**
	 * 보상물류분류 코드 사용건수
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/cmp/CMP010400/selectCodeCnt.do") 
	public ModelAndView selectCodeCnt(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상물류분류 코드 사용건수 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp010400Service, "selectCodeCnt", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;	
	}	

	/**
	 * 보상물류분류 코드 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/cmp/CMP010400/CodeCUD.do") 
	public ModelAndView CodeCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상물류분류 코드  CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp010400Service, "CodeCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;	
	}
}
