package hsco.pms.rnt.lrm.RNT040101;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
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
 * @Class Name   	: RNT040101Controller.java
 * @Description  	: 물품정보등록
 * @author       	: 이광원
 * @since        	: 2015. 11. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 infozen, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * </pre>  
 */
@Controller
public class RNT040101Controller extends BaseContoller {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="RNT040101Service")
	RNT040101ServiceImpl rnt040101Service;
	/**
	 * 물품정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040101/getList.do") 
	public ModelAndView getList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("공종코드 마스터 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040101Service, "getList", xpDto, mav);
		
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
	@RequestMapping("/hsco/pms/rnt/rnt040101/getList1.do") 
	public ModelAndView getList1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("공종코드 디테일 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040101Service, "getList1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
	}	

	/**
	 * 사용중인 코드 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040101/cnt.do") 
	public ModelAndView cnt(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("사용중인 코드 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040101Service, "cnt", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
	}	
	
	/**
	 * 공종 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040101/getList2.do") 
	public ModelAndView getList2(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("공종 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040101Service, "getList2", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
	}	
	
	/* 첨부파일 저장 */
			
	@RequestMapping("/hsco/pms/rnt/rnt040101/atchCUD.do")
	public ModelAndView atchCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040101Service, "atchCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/* 첨부파일 삭제 */
	@RequestMapping("/hsco/pms/rnt/rnt040101/atchDelete.do")
	public ModelAndView atchDelete(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040101Service, "atchDelete", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}		
	
	
	/**
	 * 신규,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040101/listCUD.do")
	public ModelAndView listCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("저장 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040101Service, "listCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
