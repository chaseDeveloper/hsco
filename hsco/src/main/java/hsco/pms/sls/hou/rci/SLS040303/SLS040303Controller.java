package hsco.pms.sls.hou.rci.SLS040303;

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
 * @Class Name   	: SLS040303Controller.java
 * @Description  	: 주택수납관리>일자별수납내역 Controller
 * @author       	: 정윤원
 * @since        	: 2015. 9.8.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 
 * </pre>  
 */
@Controller
public class SLS040303Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS040303Service")
	SLS040303ServiceImpl SLS040303Service;

	/**
	 * 주택납부코드 콤보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040303/cmbPayCodeList.do")
	public ModelAndView cmbPayCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("[RUN]cmbHouseCodeList :: 납부코드 ::---------------------------------------------!!!!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS040303Service, "cmbPayCodeList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회"); 
		
		return mav;
	}	
	


	/**
	 * 일자별수납내역
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception  selectDeAcctoRcivDtls
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040303/selectDeAcctoRcivDtls.do")
	public ModelAndView selectHcntrctrList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("일자별수납내역~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectDeAcctoRcivDtls");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS040303Service, "selectDeAcctoRcivDtls", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
