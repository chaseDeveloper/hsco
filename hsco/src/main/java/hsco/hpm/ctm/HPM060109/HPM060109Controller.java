package hsco.hpm.ctm.HPM060109;

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
 * @Class Name   	: HPM060109Controller.java
 * @Description  	: 
 * @author       	: 정 민
 * @since        	: 2017. 10. 13.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 10. 13.				   정 민				최초생성
 * </pre>  
 */
@Controller
public class HPM060109Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(HPM060109Controller.class);
	
	@Resource(name="HPM060109Service")
	HPM060109ServiceImpl HPM060109Service;
	
	
	/**
	 * 테니스장일일수입현황 목록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM060109/selectTnncrtDailIncmeSttusList.do")
	public ModelAndView selectTnncrtDailIncmeSttusList(NexacroMapDTO xpDto, Model model) throws Exception {
				
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM060109Service, "selectTnncrtDailIncmeSttusList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	

	
	/** 테니스장일일수입현황 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM060109/saveTnncrtDailIncmeSttusListCUD.do")
	public ModelAndView saveTnncrtDailIncmeSttusListCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM060109Service, "saveTnncrtDailIncmeSttusListCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 테니스장일일수입현황 엑셀 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM060109/excelUpload.do")
	public ModelAndView excelUpload(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM060109Service, "excelUpload", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
    /**
     * 이용금액 셋팅
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
	@RequestMapping("/hsco/hpm/ctm/HPM060109/setting.do")
    public ModelAndView lgExcclcData(NexacroMapDTO xpDto, Model model) throws Exception {
        if(log.isInfoEnabled()) log.info("selectSuplyInfoList Started!");
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HPM060109Service, "setting", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    

}
