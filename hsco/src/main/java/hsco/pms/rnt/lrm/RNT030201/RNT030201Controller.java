package hsco.pms.rnt.lrm.RNT030201;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT030103Controller.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 6. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.					   이광원				최초생성
 * </pre>  
 */
@Controller
public class RNT030201Controller extends BaseContoller {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="RNT030201Service")
	RNT030201ServiceImpl rnt030201Service;
	/* 신청자 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030201/getList.do") 
	public ModelAndView getList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("신청자 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030201Service, "getList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 세대원 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030201/getListR1.do") 
	public ModelAndView getListR1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("세대원 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030201Service, "getListR1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
		
	}
	
	/* 발송내역 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030201/getListR2.do") 
	public ModelAndView getListR2(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("발송내역 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030201Service, "getListR2", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
		
	}
	
	/* 통화내역 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030201/getListR3.do") 
	public ModelAndView getListR3(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("통화내역 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030201Service, "getListR3", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
		
	}
	
	/* 문자발송 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030201/getListR4.do") 
	public ModelAndView getListR4(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("문자발송 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030201Service, "getListR4", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
	}	
	/* 권리분석 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030201/getListR5.do") 
	public ModelAndView getListR5(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("권리분석 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030201Service, "getListR5", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
		
	}
	/* 대출정보 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030201/getListR6.do") 
	public ModelAndView getListR6(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("대출정보 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030201Service, "getListR6", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
		
	}	
	
/* 출력물 담당자 조회 */
@RequestMapping("/hsco/pms/rnt/rnt030201/damDangJa.do") 
public ModelAndView damDangJa(NexacroMapDTO xpDto, Model model) throws Exception {
	log.debug("출력물 담당자 조회 ----------------------------------------------------!");
	ModelAndView mav = new ModelAndView("nexacroMapView");
	
	execService(rnt030201Service, "damDangJa", xpDto, mav);
	
	mav.addObject(NexacroConstant.ERROR_CODE, "0");
	mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

	return mav;		
	
}		
	
	/* 신규,수정,삭제 */
	@RequestMapping("/hsco/pms/rnt/rnt030201/listCUD.do")
	public ModelAndView listCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030201Service, "listCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/* 츨략믈 신규 */
	@RequestMapping("/hsco/pms/rnt/rnt030201/listCUD2.do")
	public ModelAndView listCUD2(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("츨력물 신규 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030201Service, "listCUD2", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	
	/* 신청자 변경 */
	@RequestMapping("/hsco/pms/rnt/rnt030201/familyCUD.do")
	public ModelAndView familyCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신청자 변경 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030201Service, "familyCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
}
