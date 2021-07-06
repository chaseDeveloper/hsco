package hsco.pms.sls.lad.std.SLS070103;

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

@Controller
public class SLS070103Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="SLS070103Service")
	SLS070103ServiceImpl SLS070103Service;


	//dualList
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070103/ladDetailList.do")
	public ModelAndView ladDetailList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지상세리스트 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS070103Service, "ladDetailList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

	/**
	 * 선수금 정산 조회 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070103/PrepayList.do")
	public ModelAndView PrepayList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지선수금 정산 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS070103Service, "PrepayList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}	

	/**
	 * 적용일자 조회 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070103/ApplcDeList.do")
	public ModelAndView ApplcDeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("적용일자  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS070103Service, "ApplcDeList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}			
	
	/**
	 * 이율 조회 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070103/IntrtList.do")
	public ModelAndView IntrtList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("선납이율 정산 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS070103Service, "IntrtList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}		
	
	
	/**
	 * 선수금 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070103/saveSlaryList2.do")
	public ModelAndView saveSlaryList2(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS070103Service, "saveSlaryList2", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	
	/**
	 * 정산관리 결과 등록 프로시저
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070103/saveSlaryList.do")
	public ModelAndView saveSlaryList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("정산관리 결과 등록 프로시저----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS070103Service, "saveSlaryList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		}		

	/**
	 * 정산관리 결과 등록 프로시저
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070103/updatePrepayList.do")
	public ModelAndView updatePrepayList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("선수금정산 업데이트 프로시저----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS070103Service, "updatePrepayList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		}		
}
