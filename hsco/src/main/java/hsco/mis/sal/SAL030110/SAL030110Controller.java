package hsco.mis.sal.SAL030110;

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
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL030110Controller.java
 * @Description  	: 급여이체자료관리
 * @author       	: 이상명
 * @since        	: 2015. 9. 10.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 10.					이상명				최초생성
 * </pre>  
 */


@Controller
public class SAL030110Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SAL030110Service")
	SAL030110ServiceImpl SAL030110Service;
	
	/**
	 * 급여이체자료내역 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL030110/selectPymntTransfrList.do") 
	public ModelAndView selectYearPymntList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SAL030110Service, "selectPymntTransfrList", xpDto, mav);
		
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
    @RequestMapping("hsco/mis/sal/SAL030110/PymntTransfrCUD.do")
    public ModelAndView PymntTransfrCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여이체자료관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL030110Service, "PymntTransfrCUD", xpDto, mav);

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
    @RequestMapping("hsco/mis/sal/SAL030110/accPymntTransfr.do")
    public ModelAndView accPymntTransfr(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여이체 회계로관리 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL030110Service, "accPymntTransfr", xpDto, mav);

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
    @RequestMapping("hsco/mis/sal/SAL030110/pymntRqs.do")
    public ModelAndView pymntRqs(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여이체 회계로관리 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL030110Service, "pymntRqs", xpDto, mav);

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
    @RequestMapping("hsco/mis/sal/SAL030110/pymntRqsC.do")
    public ModelAndView pymntRqsC(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여이체 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        //지급요청
        execService(SAL030110Service, "pymntRqsC", xpDto, mav);
        
        //조회
        execService(SAL030110Service, "pymntRqs", xpDto, mav);

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
    @RequestMapping("hsco/mis/sal/SAL030110/pymntRqsD.do")
    public ModelAndView pymntRqsD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여이체 취소----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL030110Service, "pymntRqsD", xpDto, mav);
        
        execService(SAL030110Service, "pymntRqs", xpDto, mav);

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
    @RequestMapping("hsco/mis/sal/SAL030110/pymntRqsExcel.do")
    public ModelAndView pymntRqsExcel(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여이체 엑셀자료등록 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        //급여이체 엑셀자료등록
        execService(SAL030110Service, "pymntRqsExcel", xpDto, mav);
        
        execService(SAL030110Service, "pymntRqs", xpDto, mav);

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
    @RequestMapping("hsco/mis/sal/SAL030110/pymntRqsExcelDelete.do")
    public ModelAndView pymntRqsExcelDelete(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여이체 엑셀자료삭제----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL030110Service, "pymntRqsExcelDelete", xpDto, mav);
        
        execService(SAL030110Service, "pymntRqs", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");       
        
        return mav;
    }
	
}