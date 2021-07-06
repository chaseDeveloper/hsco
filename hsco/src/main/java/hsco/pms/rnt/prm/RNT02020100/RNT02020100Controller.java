package hsco.pms.rnt.prm.RNT02020100;

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
 * @Class Name   		: RNT02020100Controller.java
 * @Description  		: 매입임대 대기자 목록 정보 
 * @author       			: 변승우
 * @since        			: 2015. 10. 22.
 * @version      			: 1.0
 * @see          			: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 22.	     정윤원			최초생성
 *  2016. 06. 09.	     박병일             	일괄등록(savePuchasWaitrCstmrC) 추가
 * </pre>  
 */
@Controller
public class RNT02020100Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="RNT02020100Service")
	RNT02020100ServiceImpl RNT02020100Service;
	
	
	/**
	 * 입주대기자 목록 정보 조회(매입)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/pms/rnt/prm/RNT02020100/selectMvnWaitrList.do")
	public ModelAndView selectRntchrgStdrList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02020100Service, "selectMvnWaitrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}  

	
	/**
	 * 입주대기자 CUD(매입)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/pms/rnt/prm/RNT02020100/saveMvnWaitrCUD.do")
	public ModelAndView saveMvnWaitrCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02020100Service, "saveMvnWaitrCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 입주대기자, 고객 일괄 등록(매입)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02020100/savePuchasWaitrCstmrC.do")
	public ModelAndView savePuchasWaitrCstmrC(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02020100Service, "savePuchasWaitrCstmrC", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		
	}
}
