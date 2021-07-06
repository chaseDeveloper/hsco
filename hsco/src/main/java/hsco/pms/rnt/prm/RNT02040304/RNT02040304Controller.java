package hsco.pms.rnt.prm.RNT02040304;

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
public class RNT02040304Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="RNT02040304Service")
	RNT02040304ServiceImpl RNT02040304Service;

	
	/**
	 * 매입임대 주택정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040304/selectPuchasHouseInfoList.do")
	public ModelAndView selectPuchasHouseInfoList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040304Service, "selectPuchasHouseInfoList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

	
	
	/**
	 * 매입임대 주택 상세정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040304/selectPuchasHouseInfoDetailList.do")
	public ModelAndView selectPuchasHouseInfoDetailList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040304Service, "selectPuchasHouseInfoDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	
	/**
	 * 매입임대 관리비 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040304/selectManagectInfoList.do")
	public ModelAndView selectManagectInfoList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040304Service, "selectManagectInfoList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}		
	
	
	/**
	 * 매입임대 관리비 정보 상세정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040304/selectManagectInfoDetailList.do")
	public ModelAndView selectManagectInfoDetailList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040304Service, "selectManagectInfoDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}		
	
	/* 신규,수정,삭제 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040304/saveCUD.do")
	public ModelAndView listCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040304Service, "saveCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
}
