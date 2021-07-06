package hsco.mis.aud.AUD010101;

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
import hsco.cmm.sanc.SancServiceImpl;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD010101Controller.java
 * @Description     : 감사계획목록을 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 06. 09.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 06. 09.      김병진             최초생성
 * </pre>  
 */

@Controller
public class AUD010101Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="AUD010101Service")
    AUD010101ServiceImpl AUD010101Service;
    @Resource(name="SancService")
    SancServiceImpl sancService;
    
    /**
     * 감사계획 관리 목록 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD010101/selectAuditPlanList.do") 
    public ModelAndView selectAuditPlanList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD010101Service, "selectAuditPlanList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   

    /**
     * 감사계획관리 테이블 저장/수정/삭제 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD010101/AuditPlanListCUD.do")
    public ModelAndView AuditPlanListCUD(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(AUD010101Service, "AuditPlanListCUD", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    /**
     * 감사부서, 감사인 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD010101/selectAuditR.do") 
    public ModelAndView selectAuditR(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD010101Service, "selectAuditR", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
    /**
	 * 부서리스트 조회
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/aud/AUD010101/selectDeptCodeList.do") 
	public ModelAndView selectDeptCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
	    
	    ModelAndView mav = new ModelAndView("nexacroMapView");

	    execService(AUD010101Service, "selectDeptCodeList", xpDto, mav );

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
	    return mav;
	}
	
	/**
	 * 승인
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/aud/AUD010101/updateConfmAt.do") 
	public ModelAndView updateConfmAt(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(AUD010101Service, "updateConfmAt", xpDto, mav );
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

}
