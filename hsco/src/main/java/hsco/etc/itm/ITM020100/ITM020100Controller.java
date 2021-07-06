package hsco.etc.itm.ITM020100;

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
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ITM020100Controller.java
 * @Description  	: HW대장을 관리하는 컨트롤러 클래스
 * @author       	: 이호준
 * @since        	: 2015. 6. 9.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.			  이호준			최초생성
 * </pre>  
 */


@Controller
public class ITM020100Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM020100Controller.class);	
	
	@Resource(name="ITM020100Service")
	ITM020100ServiceImpl ITM020100Service;
	
	/** 업체코드  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020100/ITM020100ListCodeEntrPs.do") 
	public ModelAndView ITM020100ListCodeEntrPs(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("업체코드  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM020100Service, "ITM020100ListCodeEntrPs", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 직원 코드 조회 */
	@RequestMapping("/hsco/etc/itm/ITM020100/ITM020100ListCodeItEmp.do") 
	public ModelAndView ITM020100ListCodeItEmp(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("직원 코드 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM020100Service, "ITM020100ListCodeItEmp", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/** 업무구분목록을 조회 */
	@RequestMapping("/hsco/etc/itm/ITM020100/ITM020100ListCode.do") 
	public ModelAndView ITM020100ListCode(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("업무구분목록을 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM020100Service, "ITM020100ListCode", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 장비구분목록을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020100/ITM020100ListCodeDetail.do") 
	public ModelAndView ITM020100ListCodeDetail(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("장비구분목록을  조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM020100Service, "ITM020100ListCodeDetail", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** HW대장현황을   조회 */
	@RequestMapping("/hsco/etc/itm/ITM020100/ITM020100List.do") 
	public ModelAndView ITM020100List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("HW대장현황을   조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM020100Service, "ITM020100List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 장비목록을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020100/ITM020100DetailList.do") 
	public ModelAndView ITM020100DetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("장비목록을  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM020100Service, "ITM020100DetailList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 장비계약이력을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020100/ITM020100HistList.do") 
	public ModelAndView ITM020100HistList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("장비목록을  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM020100Service, "ITM020100HistList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** HW대장현황을 신규,수정 */
	@RequestMapping("/hsco/etc/itm/ITM020100/ITM020100CU.do")
	public ModelAndView ITM020100CU(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("HW대장현황을 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM020100Service, "ITM020100CU", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	/** HW대장현황을 삭제 */
	@RequestMapping("/hsco/etc/itm/ITM020100/ITM020100D.do")
	public ModelAndView ITM020100D(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("HW대장현황을 삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM020100Service, "ITM020100D", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	/**
	 * 사용자지침서 첨부파일을 삭제(삭제)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/etc/itm/ITM020100/ITM020100DFILE.do") 
	public ModelAndView ITM020100DFILE(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM020100Service, "ITM020100DFILE", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}
	
	/** 장비목록을 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM020100/ITM020100DetailCUD.do")
	public ModelAndView ITM020100DetailCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("장비목록을 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM020100Service, "ITM020100DetailCUD", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}
	
	/** 장비계약목록을 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM020100/ITM020100HistCUD.do")
	public ModelAndView ITM020100HistCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("장비목록을 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM020100Service, "ITM020100HistCUD", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}	


}
