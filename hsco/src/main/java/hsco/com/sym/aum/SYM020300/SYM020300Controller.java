package hsco.com.sym.aum.SYM020300;

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
import hsco.cmm.util.CommonUtil;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM020300Controller.java
 * @Description  	: 권한복사 및 교체
 * @author       	: 정윤원
 * @since        	: 2015. 8. 28.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 28.					정윤원				최초생성
 * </pre>
 */
@Controller
public class SYM020300Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(SYM020300Controller.class);	
	
	@Resource(name="SYM020300Service")
	SYM020300ServiceImpl SYM020300Service;
	

	/**
	 * 권한그룹 대상 사용자
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020300/getListUser.do") 
	public ModelAndView getListUser(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" getListUser ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020300Service, "getListUser", xpDto, mav);
		
		return mav;
		
	}
	
	/**
	 * 권한그룹 목록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020300/getListGrp.do") 
	public ModelAndView getListGrp(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020300Service, "getListGrp", xpDto, mav);
		
		return mav;
		
	}
	
	/**
	 * 권한그룹 목록(사용자)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020300/getListGrpByUser.do") 
	public ModelAndView getListGrpByUser(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView"); 
		
		execService(SYM020300Service, "getListGrpByUser", xpDto, mav);
		
		return mav;
		
	}
	
	
	/**
	 * 사용자 권한에 따른 메뉴, 서비스, 버튼 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020300/getListAllByUser.do") 
	public ModelAndView getListAllByUser(NexacroMapDTO xpDto, Model model) throws Exception {
    	//long implStartTime, implEndTime;
    	//implStartTime = CommonUtil.getCurrentTime();
		
		ModelAndView mav = new ModelAndView("nexacroMapView"); 
		
		execService(SYM020300Service, "getListAllByUser", xpDto, mav);
		
		//implEndTime = CommonUtil.getCurrentTime();
		//System.out.println("메뉴, 서비스, 버튼 목록 조회(control) " + CommonUtil.getElapsedTime(implStartTime, implEndTime));
		
		return mav;
		
	}	

	/**
	 * 사용자 권한에 따른 메뉴 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020300/getListMenuByUser.do") 
	public ModelAndView getListMenuByUser(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView"); 
		
		execService(SYM020300Service, "getListMenuByUser", xpDto, mav);
		
		return mav;
		
	}	
	
	/**
	 * 사용자 권한에 따른 서비스 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020300/getListSvcByUser.do") 
	public ModelAndView getListSvcByUser(NexacroMapDTO xpDto, Model model) throws Exception {
		//long controlStartTime = CommonUtil.getCurrentTime();
		ModelAndView mav = new ModelAndView("nexacroMapView"); 
		
		execService(SYM020300Service, "getListSvcByUser", xpDto, mav);
		
		//long controlEndTime = CommonUtil.getCurrentTime();
		
		//System.out.println("서비스 목록 조회" + CommonUtil.getElapsedTime(controlStartTime, controlEndTime));
				
		return mav;
		
	}	
	
	/**
	 * 사용자 권한에 따른 버튼 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020300/getListBtnByUser.do") 
	public ModelAndView getListBtnByUser(NexacroMapDTO xpDto, Model model) throws Exception {
		//long implStartTime,implEndTime;
		//implStartTime = CommonUtil.getCurrentTime();
		ModelAndView mav = new ModelAndView("nexacroMapView"); 
		
		execService(SYM020300Service, "getListBtnByUser", xpDto, mav);
		
		//implEndTime = CommonUtil.getCurrentTime();
		//System.out.println("버튼 목록 조회(control) " + CommonUtil.getElapsedTime(implStartTime, implEndTime));
		
		return mav;
	}	
	
	/**
	 * 권한 교체.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020300/exchangeAuth.do")
	public ModelAndView exchangeAuth(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020300Service, "exchangeAuth", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 권한 복사.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020300/copyAuth.do")
	public ModelAndView copyAuth(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020300Service, "copyAuth", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 사용자 메뉴 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020300/saveUserMenu.do")
	public ModelAndView saveUserMenu(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020300Service, "saveUserMenu", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 사용자 서비스 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020300/saveUserSvc.do")
	public ModelAndView saveUserSvc(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020300Service, "saveUserSvc", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 사용자 버튼 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020300/saveUserBtn.do")
	public ModelAndView saveUserBtn(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020300Service, "saveUserBtn", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	
}

