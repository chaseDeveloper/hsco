package hsco.mis.hrm.HRM030102;

import java.io.BufferedOutputStream;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

@Controller
public class HRM030102Controller extends BaseContoller {
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "HRM030102Service")
	HRM030102ServiceImpl HRM030102Service;

	/**
	 * 인사기본정보 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030102/selectHrMastr.do")
	public ModelAndView selectHrMastr(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM030102Service, "selectHrMastr", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	/**
	 * 서브정보(각 탭 항목) 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030102/selectTab.do")
	public ModelAndView selectTab(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM030102Service, "selectTab", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	/**
	 * 저장
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ctr/CTR030100/saveHrMastr.do")
	public ModelAndView saveHrMastr(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM030102Service, "saveHrMastr", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/**
	 * 사진정보 출력
	 * 
	 * @param empno
	 * @param response
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030102/getPhoto.do")
	public void getPhoto(@RequestParam(value = "empno", required = false) String empno, HttpServletResponse response) throws Exception {
		byte[] photo = HRM030102Service.htmHrPhotoR(empno);

		BufferedOutputStream out = new BufferedOutputStream(response.getOutputStream());
		response.setHeader("Content-Type", "image/jpeg");
		response.setContentLength(photo.length);
		out.write(photo);
		out.flush();
	}
	
	/**
	 * 금융기관코드 정보 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM030102/selectFnncInsttCode.do") 
	public ModelAndView selectFnncInsttCode(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM030102Service, "selectFnncInsttCode", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}

}
