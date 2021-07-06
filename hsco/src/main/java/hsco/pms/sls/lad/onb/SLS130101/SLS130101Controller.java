package hsco.pms.sls.lad.onb.SLS130101;

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
 * @Class Name   	: SLS130101Controller.java
 * @Description  	: 온비드 연계코드 조회
 * @author       	: 김지훈
 * @since        	: 2016. 04. 30.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 04. 30.					김지훈			최초생성
 * </pre>  
 */
@Controller
public class SLS130101Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="SLS130101Service")
	SLS130101ServiceImpl SLS130101Service;
	
	
	/**
	 * 온비드 공통콤보조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/onb/SLS130101/selectComboList.do")
	public ModelAndView selectComboList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS130101Service, "selectComboList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	
	
	/**
	 * 온비드연계코드조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/onb/SLS130101/selectOnbhirkCdLst.do")
	public ModelAndView selectOnbhirkCdLst(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS130101Service, "selectOnbhirkCdLst", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 온비드연계 상세코드조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/onb/SLS130101/selectOnbDtlCdList.do")
	public ModelAndView selectOnbDtlCdList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS130101Service, "selectOnbDtlCdList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 온비드연계 전송정보조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/onb/SLS130101/selectTxTrnsInfo.do")
	public ModelAndView selectTxTrnsInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS130101Service, "selectTxTrnsInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 온비드연계 전송정보 등록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/onb/SLS130101/insertTxTrnsInfo.do")
	public ModelAndView insertTxTrnsInfo(NexacroMapDTO xpDto, Model model) throws Exception {
	
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS130101Service, "insertTxTrnsInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}

	/**
	 * 온비드연계 전송정보 수정
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/onb/SLS130101/updateTxTrnsInfo.do")
	public ModelAndView updateTxTrnsInfo(NexacroMapDTO xpDto, Model model) throws Exception {
	
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS130101Service, "updateTxTrnsInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}	
}
