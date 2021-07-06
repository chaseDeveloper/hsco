package hsco.pms.cmp.CMP010300;

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
 * @Class Name   	: CMP010300Controller.java
 * @Description  	: 단가등록(감정평가비대상)을 관리하는 컨트롤러 클래스
 * @author       	: 변승우
 * @since        	: 2015. 6. 26.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 26.					변승우				최초생성
 * </pre>  
 */

@Controller
public class CMP010300Controller extends BaseContoller{
	
	private final Logger log = LoggerFactory.getLogger(CMP010300Controller.class);
	
	@Resource(name="CMP010300Service")
	CMP010300ServiceImpl cmp010300Service;
	
	/**
	 * 단가등록(감정평가비대상) 정보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/cmp/CMP010300/selectBsnsbyUntpcList.do") 
	public ModelAndView selectBsnsbyUntpcList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("단가등록(감정평가비대상) 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp010300Service, "selectBsnsbyUntpcList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;	
	}

	/**
	 * 단가등록(감정평가비대상) 정보 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/cmp/CMP010300/bsnsbyUntpcCUD.do") 
	public ModelAndView bsnsbyUntpcCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("단가등록(감정평가비대상) 관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp010300Service, "bsnsbyUntpcCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;	
	}
}
