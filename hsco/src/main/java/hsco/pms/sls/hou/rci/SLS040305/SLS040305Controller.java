package hsco.pms.sls.hou.rci.SLS040305;

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
import hsco.pms.sls.com.SLS000000.SLS000000ServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS040305Controller.java
 * @Description  	: 주택별 수납현황
 * @author       	: 이인성
 * @since        	: 2015. 6.11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        	작성자                	내용
 * ------------------------------------------------------------------
 *  2015. 6.11.		이인성			최초생성
 * </pre>  
 */
@Controller
public class SLS040305Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS040305Service")
	SLS040305ServiceImpl SLS040305Service;
	
	@Resource(name="SLS000000Service")
	SLS000000ServiceImpl SLS000000Service;

	/**
	 * 화면 기초정보 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040305/selectInitInfo.do")
	public ModelAndView selectInitInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectHouseCodeList", xpDto, mav);	// 주택코드 조회 - houseCode
		execService(SLS040305Service, "selectPayCodeList", xpDto, mav);		// 주택납부코드 조회 - payCode
		execService(SLS040305Service, "selectPaySeCodeList", xpDto, mav);	// 주택납부구분(분납)코드 목록 조회 - paySeCode
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 주택별 수납현황(분양금,보증금내역) 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040305/selectLttotGtnList.do")
	public ModelAndView selectLttotGtnList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS040305Service, "selectLttotGtnList", xpDto, mav);	// output1
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 주택별 수납현황(임대료내역) 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040305/selectRentList.do")
	public ModelAndView selectRentList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS040305Service, "selectRentList", xpDto, mav);	// output1
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 주택별 수납현황(임대료내역 - 개인증액) 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	// TODO
	
}
