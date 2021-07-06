package hsco.mis.cus.CUS030112;

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
 * @Class Name   	: CUS030112Controller.java
 * @Description  	: 운영실적및계획관리하는 컨트롤러 클래스
 * @author       	: 조창화
 * @since        	: 2016. 9. 19.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2016 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 9. 19.			  조창화			최초생성
 * </pre>  
 */


@Controller
public class CUS030112Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(CUS030112Controller.class);	
	
	@Resource(name="CUS030112Service")
	CUS030112ServiceImpl CUS030112Service;
	
	/** 운영실적  조회 */
	@RequestMapping("/hsco/mis/cus/CUS030112/CUS030112List.do") 
	public ModelAndView CUS030112List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("실적내역  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CUS030112Service, "CUS030112List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 운영계획  조회 */
	@RequestMapping("/hsco/mis/cus/CUS030112/CUS030112DetailList.do") 
	public ModelAndView CUS030112DetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("계획내역  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(CUS030112Service, "CUS030112DetailList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}

    /**
     * 운영계획  등록/수정/삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS030112/acmsltPlanListCUD.do")
    public ModelAndView cstmrMntrStgListCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("운영계획 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(CUS030112Service, "acmsltPlanListCUD", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }	
	
    /** 계획내역  전월복사 */
    @RequestMapping("/hsco/mis/cus/CUS030112/acmsltPlanCopy.do") 
    public ModelAndView acmsltPlanCopy(NexacroMapDTO xpDto, Model model) throws Exception {
    	
    	log.debug("계획내역  전월복사 ----------------------------------------------------!"); 
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(CUS030112Service, "acmsltPlanCopy", xpDto, mav );
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
    	
    }
}
