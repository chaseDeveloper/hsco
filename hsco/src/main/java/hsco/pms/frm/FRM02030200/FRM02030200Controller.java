package hsco.pms.frm.FRM02030200;

import java.text.SimpleDateFormat;
import java.util.Date;
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
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: FRM02030200Controller.java
 * @Description  	: 지출결의 현황
 * @author       	: 김지훈
 * @since        	: 2016. 02. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 02. 02.					김지훈			최초생성
 * </pre>  
 */
@Controller
public class FRM02030200Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="FRM02030200Service")
	FRM02030200ServiceImpl FRM02030200Service;
	
	
	/**
	 * 지출결의 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/frm/FRM02030200/selectFrmEndwExpnDecsn.do")
	public ModelAndView selectFrmEndwExpnDecsn(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FRM02030200Service, "selectFrmEndwExpnDecsn", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 지출결의 전표 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/frm/FRM02030200/selectFrmEndwChit.do")
	public ModelAndView selectFrmEndwChit(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FRM02030200Service, "selectFrmEndwChit", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 수입결의 상세 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/frm/FRM02030200/selectFrmEndwChitDetail.do")
	public ModelAndView selectFrmEndwChitDetail(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FRM02030200Service, "selectFrmEndwChitDetail", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
}
