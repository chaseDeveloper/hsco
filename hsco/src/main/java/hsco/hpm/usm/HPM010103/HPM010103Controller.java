package hsco.hpm.usm.HPM010103;

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
 * @Class Name   	: HPM010103Controller.java
 * @Description  	: LG유플러스상점관리
 * @author       	: 정 민
 * @since        	: 2017. 08. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *	작성일							작성자				내용
 * ------------------------------------------------------------------
 *	2017. 08. 04.					정 민				최초생성
 * </pre>  
 */

@Controller
public class HPM010103Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(HPM010103Controller.class);
	@Resource(name="HPM010103Service")
	HPM010103ServiceImpl HPM010103Service;
	
	/**
	 * LG유플러스상점 목록 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/usm/HPM010103/selectLguplusStoreManageList.do")
	public ModelAndView selectLguplusStoreManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM010103Service, "selectLguplusStoreManageList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * LG유플러스상점 목록 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/usm/HPM010103/saveLguplusStoreManageList.do")
	public ModelAndView saveLguplusStoreManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HPM010103Service, "saveLguplusStoreManageList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}
	
}