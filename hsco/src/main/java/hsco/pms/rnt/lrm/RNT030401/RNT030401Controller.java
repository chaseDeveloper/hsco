package hsco.pms.rnt.lrm.RNT030401;

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
 * @Class Name   	: RNT030302Controller.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 7. 11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 1.					   이광원				최초생성
 * </pre>  
 */
@Controller
public class RNT030401Controller extends BaseContoller {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="RNT030401Service")
	RNT030401ServiceImpl rnt030401Service;
	/* 해약자 및 신규주택자 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030401/getList.do") 
	public ModelAndView getList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("월임대료 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030401Service, "getList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	


/*월임대료 프로시저 호출 */
@RequestMapping("/hsco/pms/rnt/rnt030401/listCUD.do")
public ModelAndView listCUD(NexacroMapDTO xpDto, Model model) throws Exception {
	log.debug("신규,수정,삭제----------------------------------------------------!");
	ModelAndView mav = new ModelAndView("nexacroMapView");
	
	execService(rnt030401Service, "listCUD", xpDto, mav);

	mav.addObject(NexacroConstant.ERROR_CODE, "0");
	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
	
	return mav;
	}

/*체납이자 프로시저 호출*/
@RequestMapping("/hsco/pms/rnt/rnt030401/listCUD2.do")
public ModelAndView listCUD2(NexacroMapDTO xpDto, Model model) throws Exception {
	log.debug("신규,수정,삭제----------------------------------------------------!");
	ModelAndView mav = new ModelAndView("nexacroMapView");
	
	execService(rnt030401Service, "listCUD2", xpDto, mav);

	mav.addObject(NexacroConstant.ERROR_CODE, "0");
	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
	
	return mav;
	}

}
