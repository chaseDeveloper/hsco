package hsco.etc.itm.ITM020200;
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
 * @Class Name   	: ITM020200Controller.java
 * @Description  	: HW사용현황을 관리하는 컨트롤러 클래스
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
public class ITM020200Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM020200Controller.class);	
	
	@Resource(name="ITM020200Service")
	ITM020200ServiceImpl ITM020200Service;
	
	/** HW사용목록을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020200/ITM020200List.do") 
	public ModelAndView ITM020200List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("HW사용목록을  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM020200Service, "ITM020200List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** HW사용내역을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020200/ITM020200UseList.do") 
	public ModelAndView ITM020200UseList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("HW사용내역을  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM020200Service, "ITM020200UseList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/** HW수리내역을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020200/ITM020200RepairList.do") 
	public ModelAndView ITM020200RePairList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("HW수리내역을  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM020200Service, "ITM020200RepairList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/** HW사용내역을 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM020200/ITM020200UseCUD.do")
	public ModelAndView ITM020200UseCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("HW사용내역을 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM020200Service, "ITM020200UseCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	/** HW수리내역을 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM020200/ITM020200RepairCUD.do")
	public ModelAndView ITM020200RepairCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("HW수리내역을 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM020200Service, "ITM020200RepairCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}	


}
