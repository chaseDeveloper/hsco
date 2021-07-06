package hsco.cmm.sanc;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.sanc.service.SancAfterProcService;

@Controller
public class SancController extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(SancController.class);

	@Resource(name = "SancService")
	SancServiceImpl SancService;

	/**
	 * 전자결재
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/cmm/sanc/sanctn.do")
	public ModelAndView sanctn(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SancService, "sanctn", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/**
	 * 전자결재 콜백
	 * 
	 * @param request
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	@RequestMapping(value = { "/hsco/cmm/sanc/result.do" })
	public String result(HttpServletRequest request, Model model) throws Exception {
		
		String result = "SUCCESS";
		Map<String, Object> map = new HashMap<String, Object>();
		StringBuffer sb = new StringBuffer();
		Enumeration er = request.getParameterNames();
		while (er != null && er.hasMoreElements()) {
			String key = (String) er.nextElement();
			map.put(key, request.getParameter(key));
			sb.append(key + " = " + request.getParameter(key));
			sb.append("\r\n");
		}
		log.info("/hsco/cmm/sanc/result.do ===>>");
		log.info(sb.toString());
		
		String apprStatus = (String)map.get("apprStatus");
		String sanctnKnd = SancServiceImpl.APPR_STATUS_MAP.get(apprStatus);
		map.put("sanctnKnd", sanctnKnd);
		
		try {
			
			// 그룹웨어 양식ID 조회
			String formId = SancService.getFormId(map);
			
			if(formId != null && SancServiceImpl.SANC_AFTER_PROC_MAP.containsKey(formId)) {
				SancAfterProcService sfps = SancServiceImpl.SANC_AFTER_PROC_MAP.get(formId);
						
				switch (sanctnKnd) {
					case "1": // [1 상신] - 기안 서명후
						sfps.sancAfterProc_01(SancService.getBaseDao(), map);
						break;
					case "2": // [2 반려] - 반송 서명 후
						sfps.sancAfterProc_02(SancService.getBaseDao(), map);
						break;
					case "3": // [3 취소] - 결재취소 직후
						sfps.sancAfterProc_03(SancService.getBaseDao(), map);
						break;
					case "4": // [4 중간결재] - 중간결재 서명 후
						sfps.sancAfterProc_04(SancService.getBaseDao(), map);
						break;
					case "5": // [5 완료] - 최종결재 서명 후, 기안자 전결 서명후 (후처리가 필요한 업무단은 패키지에서 후처리 실행)
						sfps.sancAfterProc_05(SancService.getBaseDao(), map);
						break;
					default:
						// TODO 미설정 이벤트 예외처리
						log.info("===== TODO 미설정 이벤트 예외처리 ====> " + apprStatus);
						
						break;
				}
			}
				
		} catch (Exception e) {
			e.printStackTrace();
			result = "FAIL";
		}
		SancService.insertSancResult(sb.toString(), map);
		
		model.addAttribute("RESULT", result);

		return "sancResult";
	}

	/**
	 * 전자결재 URL 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/cmm/sanc/getSancURL.do")
	public ModelAndView getSancURL(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SancService, "getSancURL", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
}
