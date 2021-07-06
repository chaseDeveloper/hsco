package hsco.pms.rnt.lrm.RNT030304;

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
 * @Class Name   	: RNT030304Controller.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 11. 12.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 1.					   이광원				최초생성
 * </pre>  
 */
@Controller
public class RNT030304Controller extends BaseContoller {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="RNT030304Service")
	RNT030304ServiceImpl rnt030304Service;
	/* 계약자 조회 */
	@RequestMapping("/hsco/pms/rnt/RNT030304/getList.do") 
	public ModelAndView getList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("재계약대상자조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030304Service, "getList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
				
	}
	
	/* 계약자 조회 */
	@RequestMapping("/hsco/pms/rnt/RNT030304/getListR1.do") 
	public ModelAndView getListR1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("안내문 내역 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030304Service, "getListR1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
				
	}	
	
	/* 신규,수정,삭제 */
	@RequestMapping("/hsco/pms/rnt/RNT030304/listCUD.do")
	public ModelAndView listCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("안내문 내역 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030304Service, "listCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/*재계약 처리 */
	@RequestMapping("/hsco/pms/rnt/RNT030304/reCntrctr.do")
	public ModelAndView reCntrctr(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("묵시적 재계약 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030304Service, "reCntrctr", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		}			
}
