package hsco.pms.sls.hou.rci.SLS040203;

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
 * @Class Name   	: SLS040203Controller.java
 * @Description  	: 자동이체수납결과 관리를 위한 컨트롤러 
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
 *  2015.09.14.		이상준			Re-Work
 * </pre>  
 */
@Controller
public class SLS040203Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS040203Service")
	SLS040203ServiceImpl SLS040203Service;

	/**
	 * 월별 자동이체 수납결과 목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040203/selectAtcngRcivCnt.do") 
	public ModelAndView selectAtcngRqestRcivCnt(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS040203Service, "selectAtcngRcivCnt", xpDto, mav);		// rqestRcivList - 월별 자동이체 수납결과 목록
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	
	/**
	 * 월별 자동이체 수납결과 목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040203/selectAtcngRcivList.do") 
	public ModelAndView selectAtcngRqestRcivList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS040203Service, "selectAtcngRcivList", xpDto, mav);		// rqestRcivList - 월별 자동이체 수납결과 목록
		execService(SLS040203Service, "selectAtcngRcivSumInfo", xpDto, mav);	// rqestRcivSumList - 월별 자동이체 내역 조회
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 월별 자동이체 수납결과 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040203/saveAtcngRcivList.do") 
	public ModelAndView saveHouseMvnWaitrList(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("##########################################################################[RUN]saveAtcngRcivList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS040203Service, "saveAtcngRcivList", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상등록");
			
		return mav;
	}	
	
	
}
