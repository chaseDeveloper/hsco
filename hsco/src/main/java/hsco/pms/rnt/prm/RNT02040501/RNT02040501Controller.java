package hsco.pms.rnt.prm.RNT02040501;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

@Controller
public class RNT02040501Controller extends BaseContoller {

		@Resource(name="RNT02040501Service")
		RNT02040501ServiceImpl RNT02040501Service;
		
		/**
		 * 문자발송처리
		 * @param xpDto
		 * @param model
		 * @return
		 * @throws Exception
		 */
		@RequestMapping("/hsco/pms/rnt/prm/RNT02040501/selectPuchasRentHouseSmsList.do")
		public ModelAndView selectPuchasRentHouseSmsList(NexacroMapDTO xpDto, Model model) throws Exception {

			ModelAndView mav = new ModelAndView("nexacroMapView");
			
			execService(RNT02040501Service, "selectPuchasRentHouseSmsList", xpDto, mav);

			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
			return mav;
		}
		
		
		/**
		 * 문자발송저장
		 * @param xpDto
		 * @param model
		 * @return
		 * @throws Exception
		 */
		@RequestMapping("/hsco/pms/rnt/prm/RNT02040501/puchasHouseSmsCUD.do")
		public ModelAndView puchasHouseSmsCUD(NexacroMapDTO xpDto, Model model) throws Exception {

			ModelAndView mav = new ModelAndView("nexacroMapView");
			
			execService(RNT02040501Service, "puchasHouseSmsCUD", xpDto, mav);

			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
			return mav;
		}	
}
