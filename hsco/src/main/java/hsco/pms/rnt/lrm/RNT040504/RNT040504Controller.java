package hsco.pms.rnt.lrm.RNT040504;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT040502Controller.java
 * @Description  	: 물품정보등록
 * @author       	: 이광원
 * @since        	: 2015. 7. 23.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 infozen, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 23.					   이광원				최초생성
 * </pre>  
 */
@Controller
public class RNT040504Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="RNT040504Service")
	RNT040504ServiceImpl rnt040504Service;
	/**
	 * 재고 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040504/getList.do") 
	public ModelAndView getList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("물품재고 조회 ----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040504Service, "getList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/**
	 * 물품정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040504/getListR1.do") 
	public ModelAndView getListR1(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("물품출고등록 조회 ----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040504Service, "getListR1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	
	/**
	 * 신규,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040504/listCUD.do")
	public ModelAndView listCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("저장 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040504Service, "listCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
