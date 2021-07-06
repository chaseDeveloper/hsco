package hsco.pms.sls.lad.stt.SLS110106;

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
 * @Class Name   	: SLS110106Controller.java
 * @Description  	: 토지현황을 조회하는 컨트롤러 
 * @author       	: 이인성
 * @since        	: 2015. 6.11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        	작성자                	내용
 * ------------------------------------------------------------------
 *  2015. 6.11.		이인성			최초생성
 *  2015.10.04.		이상준			Re-Work
 * </pre>  
 */

@Controller
public class SLS110106Controller extends BaseContoller{
	
	@Resource(name="SLS110106Service")
	SLS110106ServiceImpl SLS110106Service;

	/**
	 * 토지공급기초내역 목록 조회(T1)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/stt/SLS110106/selectLadSuplyDtlsList.do") 
	public ModelAndView selectDataSeCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS110106Service, "selectLadSuplyDtlsList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지별미분양 목록 조회(T2)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/stt/SLS110106/selectLadNotLttotList.do") 
	public ModelAndView selectLadNotLttotList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS110106Service, "selectLadNotLttotList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지별공유자 목록 조회(T3)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/stt/SLS110106/selectLadCocnrList.do") 
	public ModelAndView selectLadCocnrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS110106Service, "selectLadCocnrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지별공유자변경내역 목록 조회(T4)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/stt/SLS110106/selectLadCocnrChangeDtlsList.do") 
	public ModelAndView selectLadCocnrChangeDtlsList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS110106Service, "selectLadCocnrChangeDtlsList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지별명의변경 목록 조회(T5)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/stt/SLS110106/selectLadNmChangeList.do") 
	public ModelAndView selectLadNmChangeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS110106Service, "selectLadNmChangeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지별 소유권이전현황 목록 조회(T6)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/stt/SLS110106/selectLadOwnShipTransrSttusList.do") 
	public ModelAndView selectLadOwnShipTransrSttusList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS110106Service, "selectLadOwnShipTransrSttusList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지별 압류현황 목록 조회(T7)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/stt/SLS110106/selectLadSeizrSttusList.do") 
	public ModelAndView selectLadSeizrSttusList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS110106Service, "selectLadSeizrSttusList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지별 대출현황 목록 조회(T8)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/stt/SLS110106/selectLadLonSttusList.do") 
	public ModelAndView selectLadLonSttusList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS110106Service, "selectLadLonSttusList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지별 미수금현황 목록 조회(T9)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/stt/SLS110106/selectLadUnclamtSttusList.do") 
	public ModelAndView selectLadUnclamtSttusList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS110106Service, "selectLadUnclamtSttusList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지별 잔금납부현황 목록 조회(T10)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/stt/SLS110106/selectLadRemndrAmtPaySttusList.do") 
	public ModelAndView selectLadRemndrAmtPaySttusList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS110106Service, "selectLadRemndrAmtPaySttusList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지별 수납내역(수납일기준) 목록 조회(T11)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/stt/SLS110106/selectLadRcivDtlsRcivDtList.do") 
	public ModelAndView selectLadRcivDtlsRcivDtList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS110106Service, "selectLadRcivDtlsRcivDtList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지별 수납내역(수납실적) 목록 조회(T12)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/stt/SLS110106/selectLadRcivDtlsRcivAcmsltList.do") 
	public ModelAndView selectLadRcivDtlsRcivAcmsltList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS110106Service, "selectLadRcivDtlsRcivAcmsltList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}
