package hsco.mis.acc.ACC020504;

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
 * @Class Name   	: ACC020501Controller.java
 * @Description  	: 수입지출외현금내역 관리하는 Controller 클래스 
 * @author       	: 이상명
 * @since        	: 2017. 08. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 08. 25.	이상명		최초생성
 * </pre>  
 */
@Controller
public class ACC020504Controller extends BaseContoller {

	@Resource(name="ACC020504Service")
	ACC020504ServiceImpl ACC020504Service;
	
	protected Logger log = LoggerFactory.getLogger(ACC020504Controller.class);
	
	/**
	 * 수입지출외현금내역 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020504/incExpElseCashMastrList.do")
	public ModelAndView incExpElseCashMastrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("incExpElseCashMastrList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC020504Service, "incExpElseCashMastrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/**
	 * 수입지출외현금내역 상세 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020504/incExpElseCashDetailList.do")
	public ModelAndView incExpElseCashDetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC020504Service, "incExpElseCashDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 수입지출외현금내역 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020504/incExpElseCashCUD.do")
	public ModelAndView incExpElseCashCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC020504Service, "incExpElseCashCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
    
	/**
	 * 이월처리
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020504/incExpSyfd.do")
	public ModelAndView incExpSyfd(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC020504Service, "incExpSyfd", xpDto, mav);	// 이월처리
		execService(ACC020504Service, "incExpElseCashMastrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
    @RequestMapping("hsco/mis/acc/ACC020504/selectAcnutList.do") 
    public ModelAndView selectAcnutList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(ACC020504Service, "selectAcnutList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    } 

    /**
     * 첨부파일
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/acc/ACC020504/selectAtchFile.do") 
    public ModelAndView selectAtchFile(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(ACC020504Service, "selectAtchFile", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
        
    }
}
