package hsco.pms.rnt.lrm.RNT030407;

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
 * @Class Name   	: RNT030407Controller.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 10. 21.
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
public class RNT030407Controller extends BaseContoller {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="RNT030407Service")
	RNT030407ServiceImpl rnt030407Service;
	/* 계약자 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030407/getList.do") 
	public ModelAndView getList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("수납 조회 전체 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030407Service, "getList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	

	/* 자동이체 정보 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030407/getList1.do") 
	public ModelAndView getList1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("수납 조회 가상계좌 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030407Service, "getList1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}		
	
	/* 자동이체 정보 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030407/getList2.do") 
	public ModelAndView getList2(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("수납 조회 자동이체 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030407Service, "getList2", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	

	/*수납자료조회1*/
	@RequestMapping("/hsco/pms/rnt/rnt030407/getList3.do")
	public ModelAndView getList3(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030407Service, "getList3", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		}

	/*수납자료조회2*/
	@RequestMapping("/hsco/pms/rnt/rnt030407/getList4.do")
	public ModelAndView getList4(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030407Service, "getList4", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		}	
	
	/*소인처리*/
	@RequestMapping("/hsco/pms/rnt/rnt030407/getList5.do")
	public ModelAndView getList5(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030407Service, "getList5", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		}		
	
	/*소인취소*/
	@RequestMapping("/hsco/pms/rnt/rnt030407/getList6.do")
	public ModelAndView getList6(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030407Service, "getList6", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		}		
	
}
