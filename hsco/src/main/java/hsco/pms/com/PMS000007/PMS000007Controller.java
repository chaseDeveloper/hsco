package hsco.pms.com.PMS000007;

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
 * @Class Name   	: PMS000007Controller.java
 * @Description  	: 
 * @author       	: 홍길동
 * @since        	: 2015. 12.14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 14.	      이광원			최초생성
 * </pre>  
 */
@Controller
public class PMS000007Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="PMS000007Service")
	PMS000007ServiceImpl PMS000007Service;
	
	/**
	 * 현금영수증  결과조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/PMS000007/selectHouseCashRcipt.do")
	public ModelAndView selectHouseCashRcipt(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("현금영수증 결과 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(PMS000007Service, "selectHouseCashRcipt", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
		
	/**
	 * 현금영수증 결과 파일을 업로드한다.
	 *  - 파일의 내용을 데이터로 변환하여 반환한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/PMS000007/uploadAtcngReqstFile.do")
	public ModelAndView uploadCashRqestList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(PMS000007Service, "uploadCashRqestList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}		

	/**
	 * 현금영수증 결과 등록 프로시저
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/PMS000007/saveHouseCashRcipt.do")
	public ModelAndView sprnt_tbpms_cash_result_i(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("현금영수증 결과 등록 프로시저----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(PMS000007Service, "sprnt_tbpms_cash_result_i", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		}
	/**
	 * 현금영수증 결과 정상건만 수정
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/PMS000007/updateHouseCashRcipt.do")
	public ModelAndView updateHouseCashRcipt(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(PMS000007Service, "updateHouseCashRcipt", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		}
	
}
