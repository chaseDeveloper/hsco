package hsco.pms.rnt.lrm.RNT030102;

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
 * @Class Name   	: RNT030102Controller.java
 * @Description  	: 요율정보를 관리하는 컨트롤러 클래스
 * @author       	: 이광원
 * @since        	: 2015. 6. 9.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 infozen, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.					   이광원				최초생성
 * </pre>  
 */
@Controller
public class RNT030102Controller extends BaseContoller {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="RNT030102Service")
	RNT030102ServiceImpl rnt030102Service;
	/**
	 * 요율정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt030102/getList.do") 
	public ModelAndView getList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("요율정보 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030102Service, "getList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	/**
	 * 요율정보 신규,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt030102/listCUD.do")
	public ModelAndView listCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("권한그룹 관리 저장 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030102Service, "listCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
