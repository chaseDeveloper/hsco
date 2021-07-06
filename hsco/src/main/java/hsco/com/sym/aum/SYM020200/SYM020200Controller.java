package hsco.com.sym.aum.SYM020200;

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
import hsco.com.sym.aum.SYM020200.SYM020200Service;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM020200Controller.java
 * @Description  	: 권한별 사용자리스트
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
public class SYM020200Controller extends BaseContoller {

protected Logger log = LoggerFactory.getLogger(SYM020200Controller.class);	
	
	@Resource(name="SYM020200Service")
	SYM020200ServiceImpl SYM020200Service;
	
	
	/**
	 * 부서코드 가져오기
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020200/getListDept.do") 
	public ModelAndView getListDept(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" getListDept ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020200Service, "getListDept", xpDto, mav);
		
		return mav;
		
	}
	
	/**
	 * 권한그룹 목록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020200/getListGrp.do") 
	public ModelAndView getListGrp(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020200Service, "getListGrp", xpDto, mav);
		
		return mav;
		
	}
	
	/**
	 * 권한그룹별 사용자 목록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020200/getListGrpUser.do") 
	public ModelAndView getListGrpUser(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020200Service, "getListGrpUser", xpDto, mav);
		
		return mav;
		
	}
	
	/**
	 * 권한그룹 대상 사용자
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020200/getListUser.do") 
	public ModelAndView getListUser(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020200Service, "getListUser", xpDto, mav);
		
		return mav;
		
	}
	
	/**
	 * 권한그룹별 사용자 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020200/SYM020200CUD.do")
	public ModelAndView SYM020200CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020200Service, "SYM020200CUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}

