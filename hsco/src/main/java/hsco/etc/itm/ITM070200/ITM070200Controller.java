package hsco.etc.itm.ITM070200;

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
 * @Class Name   	: ITM070200Controller.java
 * @Description  	: SLA평가결과를 조회하는 컨트롤러 클래스
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
public class ITM070200Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM070200Controller.class);	
	
	@Resource(name="ITM070200Service")
	ITM070200ServiceImpl ITM070200Service;
	
	/** 평가결과표를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200List.do") 
	public ModelAndView ITM070200List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가결과표를  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM070200Service, "ITM070200List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	

	/** 평가결과표를 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200CUD.do")
	public ModelAndView ITM070200CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가결과표를 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
		
	
	/** 서비스시간(서비스현황)  조회 */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200Tab2List.do") 
	public ModelAndView ITM070200Tab2List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("서비스시간(서비스현황)  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200Tab2List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	

	/** 장애현황(서비스가동율)을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200Tab3List.do") 
	public ModelAndView ITM070200Tab3List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("장애현황(서비스가동율)을  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200Tab3List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}

	/** 장애현황(장애조치현황)을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200Tab32List.do") 
	public ModelAndView ITM070200Tab32List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("장애현황(장애조치현황)을  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200Tab32List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 장애현황 서비스가동율 상세현황을  조회  */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200Tab33List.do") 
	public ModelAndView ITM070200Tab33List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("장애현황 서비스가동율 상세현황을  조회   ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200Tab33List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 장애현황(장애조치현황) 상세현황을  조회  */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200Tab34List.do") 
	public ModelAndView ITM070200Tab34List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("장애현황(장애조치현황) 상세현황을  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200Tab34List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 장애현황 상세현황을 조회 */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200Tab35List.do") 
	public ModelAndView ITM070200Tab35List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("장애현황 상세현황을 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200Tab35List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	

	/** SR현황 SR적기처리율 조회 */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200Tab4List.do") 
	public ModelAndView ITM070200Tab4List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("SR현황 SR적기처리율 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200Tab4List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** SR현황 오류발생 조회 */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200Tab42List.do") 
	public ModelAndView ITM070200Tab42List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug(" SR현황 오류발생 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200Tab42List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** SR현황 SR내역 조회 */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200Tab43List.do") 
	public ModelAndView ITM070200Tab43List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("SR현황 SR내역 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200Tab43List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	

	/** Call처리율 목록을 조회*/
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200Tab5List.do") 
	public ModelAndView ITM070200Tab5List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Call처리율 목록을 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200Tab5List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**  Call처리율(내역)을 조회 */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200Tab52List.do") 
	public ModelAndView ITM070200Tab52List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Call처리율(내역)을 조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200Tab52List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 백업준수율 목록을 조회 */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200Tab6List.do") 
	public ModelAndView ITM070200Tab6List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("백업준수율 목록을 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200Tab6List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 백업준수율 상세내역을 조회 */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200Tab62List.do") 
	public ModelAndView ITM070200Tab62List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("백업준수율 상세내역을 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200Tab62List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	

	/** 보안준수 목록을 조회 */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200Tab7List.do") 
	public ModelAndView ITM070200Tab7List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("보안준수 목록을 조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200Tab7List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
		
	/** 보안준수 상세내역을   조회 */
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200Tab72List.do") 
	public ModelAndView ITM070200Tab72List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("보안준수 상세내역을   조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070200Service, "ITM070200Tab72List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/** 평가결과를 생성*/
	@RequestMapping("/hsco/etc/itm/ITM070200/ITM070200P.do") 
	public ModelAndView insertVaMast(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM070200Service, "ITM070200P", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	

}
