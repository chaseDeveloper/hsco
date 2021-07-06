package hsco.pms.rnt.lrm.RNT040401;

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
 * @Class Name   	: RNT040401Controller.java
 * @Description  	: 수선요청등록
 * @author       	: 이광원
 * @since        	: 2015. 11. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 infozen, Inc. All Right Reserved.
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
public class RNT040401Controller extends BaseContoller {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="RNT040401Service")
	RNT040401ServiceImpl rnt040401Service;
	/**
	 * 영구임대 매입임대 주택코드 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040401/houseCode1.do") 
	public ModelAndView houseCode1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("영구임대 매입임대 주택코드조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040401Service, "houseCode1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
	}

	/**
	 * 영구임대 주택코드 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040401/houseCode2.do") 
	public ModelAndView houseCode2(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("영구임대 주택코드조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040401Service, "houseCode2", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
	}
	
	/**
	 * 영구임대 주택코드 조회2
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040401/houseCode22.do") 
	public ModelAndView houseCode22(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("영구임대 주택코드조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040401Service, "houseCode22", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
	}	

	/**
	 * 영구매입 주택코드 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040401/houseCode3.do") 
	public ModelAndView houseCode3(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("영구매입 주택코드조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040401Service, "houseCode3", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
	}	
	
	/**
	 * 영구임대계약자 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040401/getList.do") 
	public ModelAndView getList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("영구임대 계약자 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040401Service, "getList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
	}	

	
	/**
	 * 영구매입계약자 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040401/getList1.do") 
	public ModelAndView getList1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("영구임대 계약자 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040401Service, "getList1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
	}		

	/**
	 * 장기수선내역 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040401/getListR1.do") 
	public ModelAndView getListR1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("장기수선내역 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040401Service, "getListR1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
	}		

	/**
	 * 사진조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040401/getListR2.do") 
	public ModelAndView getListR2(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("사진조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040401Service, "getListR2", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
	}			
	
}
