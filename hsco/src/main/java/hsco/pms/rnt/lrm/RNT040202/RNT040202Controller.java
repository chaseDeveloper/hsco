package hsco.pms.rnt.lrm.RNT040202;

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
 * @Class Name   	: RNT040202Controller.java
 * @Description  	: 물품정보등록
 * @author       	: 이광원
 * @since        	: 2015. 7. 13.
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
public class RNT040202Controller extends BaseContoller  {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="RNT040202Service")
	RNT040202ServiceImpl rnt040202Service;
	/**
	 * 물품정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040202/getList.do") 
	public ModelAndView getList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("장기수선계획 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040202Service, "getList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}


/**
 * 교체예정일자 집계표 조회
 * @param xpDto
 * @param model
 * @return ModelAndView
 * @throws Exception
 */
@RequestMapping("/hsco/pms/rnt/rnt040202/getList1.do")
public ModelAndView selectLadReceiveList(NexacroMapDTO xpDto, Model model) throws Exception {

	ModelAndView mav = new ModelAndView("nexacroMapView");

	execService(rnt040202Service, "getList1", xpDto, mav);

	mav.addObject(NexacroConstant.ERROR_CODE, "0");
	mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	
	return mav;
	}
}

