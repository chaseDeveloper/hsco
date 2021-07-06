package hsco.mis.fun.FUN040302;

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
 * @Class Name   	: FUN040302Controller.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2015. 09. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 09. 14.  				   양성모				최초생성
 * </pre>  
 */
@Controller
public class FUN040302Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="fun040302Service")
	FUN040302ServiceImpl fun040302Service;
	
	/**
	 * 사이버브랜치 거래내역 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN040302/selectCb2Cmstra.do")  
	public ModelAndView selectCb2Cmstra(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("일자별 마감잔액 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun040302Service, "selectCb2Cmstra", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}

	
}