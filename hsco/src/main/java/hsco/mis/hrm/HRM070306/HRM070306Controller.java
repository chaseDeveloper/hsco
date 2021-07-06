package hsco.mis.hrm.HRM070306;

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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM070306Controller.java
 * @Description  	: 
 * @author       	: 박세현
 * @since        	: 2016. 10. 31.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2016. 11. 31			  박세현			최초생성
 * </pre>  
 */

@Controller
public class HRM070306Controller extends BaseContoller  {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM070306Service")
	HRM070306ServiceImpl HRM070306Service;
	
	@Resource(name="SancService")
	SancServiceImpl sancService;
	
	/**
	 * 급여이체자료내역 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/hrm/HRM070306/selectPymntTransfrList.do") 
	public ModelAndView selectYearPymntList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM070306Service, "selectPymntTransfrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
     * 급여이체자료관리 등록, 수정, 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/hrm/HRM070306/PymntTransfrCUD.do")
    public ModelAndView PymntTransfrCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여이체자료관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070306Service, "PymntTransfrCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");       
        
        return mav;
    }
    
    /**
     * 급여이체 회계로 등록 old
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/hrm/HRM070306/accPymntTransfr.do")
    public ModelAndView accPymntTransfr(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여이체 회계로관리 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070306Service, "accPymntTransfr", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");       
        
        return mav;
    }

    /**
     * 급여이체 결과
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/hrm/HRM070306/pymntRqs.do")
    public ModelAndView pymntRqs(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여이체 회계로관리 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070306Service, "pymntRqs", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");       
        
        return mav;
    }
    
    
    /**
     * 급여이체
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/hrm/HRM070306/pymntRqsC.do")
    public ModelAndView pymntRqsC(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여이체 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        //지급요청
        execService(HRM070306Service, "pymntRqsC", xpDto, mav);
        
        //조회
        execService(HRM070306Service, "pymntRqs", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");       
        
        return mav;
    }
    
    /**
     * 급여이체 취소
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/hrm/HRM070306/pymntRqsD.do")
    public ModelAndView pymntRqsD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여이체 취소----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070306Service, "pymntRqsD", xpDto, mav);
        
        execService(HRM070306Service, "pymntRqs", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");       
        
        return mav;
    }
    
    
    /**
     * 급여이체 엑셀자료등록
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/hrm/HRM070306/pymntRqsExcel.do")
    public ModelAndView pymntRqsExcel(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여이체 엑셀자료등록 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        //급여이체 엑셀자료등록
        execService(HRM070306Service, "pymntRqsExcel", xpDto, mav);
        
        execService(HRM070306Service, "pymntRqs", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");       
        
        return mav;
    }
    
    /**
     * 급여이체 엑셀자료삭제
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/hrm/HRM070306/pymntRqsExcelDelete.do")
    public ModelAndView pymntRqsExcelDelete(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여이체 엑셀자료삭제----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070306Service, "pymntRqsExcelDelete", xpDto, mav);
        
        execService(HRM070306Service, "pymntRqs", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");       
        
        return mav;
    }
	
}