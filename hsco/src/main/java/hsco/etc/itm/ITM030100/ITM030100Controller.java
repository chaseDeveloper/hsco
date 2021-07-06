package hsco.etc.itm.ITM030100;

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
 * @Class Name   	: ITM030100Controller.java
 * @Description  	: Service Request를 관리하는 컨트롤러 클래스
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
public class ITM030100Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM030100Controller.class);	
	
	@Resource(name="ITM030100Service")
	ITM030100ServiceImpl ITM030100Service;

	
	
	/* 김선진등록 */
	/** ObjCode 리스트를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM030100/ITM030200ListCode.do") 
	public ModelAndView ITM030200ListCode(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("ObjId 리스트를  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM030100Service, "ITM030200ListCode", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/** ObjId 리스트를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM030100/ITM030100ListObjId.do") 
	public ModelAndView ITM030100ListObjId(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("ObjId 리스트를  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM030100Service, "ITM030100ListObjId", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 업무구분리스트를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM030100/ITM030100ListJob.do") 
	public ModelAndView ITM030100ListJob(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("업무구분리스트를  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM030100Service, "ITM030100ListJob", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 부서리스트를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM030100/ITM030100ListDept.do") 
	public ModelAndView ITM030100ListDept(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("부서리스트를  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM030100Service, "ITM030100ListDept", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 사번리스트를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM030100/ITM030100ListEmp.do") 
	public ModelAndView ITM030100ListEmp(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사번리스트를  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM030100Service, "ITM030100ListEmp", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/** Service Request 접수내역을 조회 */
	@RequestMapping("/hsco/etc/itm/ITM030100/ITM030100List.do") 
	public ModelAndView ITM030100List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Service Request 접수내역을 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM030100Service, "ITM030100List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** Service Request 처리내역상세 리스트를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM030100/ITM030100DetailList.do") 
	public ModelAndView ITM030100DetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Service Request 처리내역상세 리스트를  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM030100Service, "ITM030100DetailList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** Service Request 접수내역을 신규,수정,삭제*/
	@RequestMapping("/hsco/etc/itm/ITM030100/ITM030100CUD.do")
	public ModelAndView ITM030100CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Service Request 접수내역을 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM030100Service, "ITM030100CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	/** Service Request 처리내역상세를 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM030100/ITM030100DetailCUD.do")
	public ModelAndView ITM030100DetailCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Service Request 처리내역상세를 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM030100Service, "ITM030100DetailCUD", xpDto, mav);
			
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/** 서비스 접수 첨부파일 저장 **/
	@RequestMapping("/hsco/etc/itm/ITM030100/atchCUD_1.do")
	public ModelAndView atchCUD_1(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM030100Service, "atchCUD_1", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/** 서비스 접수 첨부파일 삭제 **/
	@RequestMapping("/hsco/etc/itm/ITM030100/atchDel_1.do")
	public ModelAndView atchDel_1(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM030100Service, "atchDel_1", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/** 서비스 접수 첨부파일 저장 **/
	@RequestMapping("/hsco/etc/itm/ITM030100/atchCUD_2.do")
	public ModelAndView atchCUD_2(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM030100Service, "atchCUD_2", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/** 서비스 처리 내역 첨부파일 삭제 **/
	@RequestMapping("/hsco/etc/itm/ITM030100/atchDel_2.do")
	public ModelAndView atchDel_2(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM030100Service, "atchDel_2", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}

}
