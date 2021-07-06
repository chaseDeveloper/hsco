package hsco.pms.rnt.pra.RNT01051403;

import javax.annotation.Resource;

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
 * @Class Name   	: RNT01051403Controller.java
 * @Description  	: 자동이체 출금결과 조회
 * @author       	: 김지훈
 * @since        	: 2015. 12. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 18.					김지훈			최초생성
 * </pre>  
 */
@Controller
public class RNT01051403Controller extends BaseContoller{
	@Resource(name="RNT01051403Service")
	RNT01051403ServiceImpl RNT01051403Service;
	
	/**
	 * 자동이체 출금결과 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01051403/selectAtcngRqestRciv.do")
	public ModelAndView selectAtcngRqestRciv(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01051403Service, "selectAtcngRqestRciv", xpDto, mav);
		execService(RNT01051403Service, "selectAtcngRqestRcivSum", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 자동이체 기정보 체크
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01051403/selectAtcngRqestRcivChk.do")
	public ModelAndView selectAtcngRqestRcivChk(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01051403Service, "selectAtcngRqestRcivChk", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 월별 자동이체 출금결과 파일을 업로드한다.
	 *  - 파일의 내용을 데이터로 변환하여 반환한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01051403/uploadAtcngReqstRcivFile.do")
	public ModelAndView uploadAtcngReqstRcivFile(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01051403Service, "uploadAtcngReqstRcivFile", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	
	/**
	 * 월별 자동이체 결과등록
	 *  
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01051403/saveAtcngRcivList.do")
	public ModelAndView saveAtcngRcivList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01051403Service, "saveAtcngRcivList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		}	

}
