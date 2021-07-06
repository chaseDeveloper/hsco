package hsco.com.sym.lgm;


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
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM050100Controller.java
 * @Description  	: 로그조회 
 * @author       	: 정윤원
 * @since        	: 2015. 9. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 14.					정윤원				최초생성
 * </pre>
 */

@Controller
public class SYM050100Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(SYM050100Controller.class);	
	
	@Resource(name="SYM050100Service")
	SYM050100ServiceImpl SYM050100Service;
	
	/**
	 * 시스템 로그 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/lgm/SYM050100/getListSysLog.do") 
	public ModelAndView getListSysLog(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled())
		    log.info("getListSysLog called!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM050100Service, "getListSysLog", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION: DB 로그 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 * 2015. 9. 14.
	 * </pre>
	 */
	@RequestMapping("/hsco/com/sym/lgm/SYM050100/getListDBLog.do") 
	public ModelAndView getListDBLog(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM050100Service, "getListDBLog", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION: 개인정보 조회 로그
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 * 2015. 9. 18.
	 * </pre>
	 */
	@RequestMapping("/hsco/com/sym/lgm/SYM050100/getListIndvdlLog.do") 
	public ModelAndView getListIndvdlLog(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM050100Service, "getListIndvdlLog", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
     * 
     * <pre>
     * @DESCRIPTION: 외부연계 송수신로그 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     * 2016. 3. 9.
     * </pre>
     */
    @RequestMapping("/hsco/com/sym/lgm/SYM050100/selectTrsmrcvLogList.do") 
    public ModelAndView selectTrsmrcvLogList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SYM050100Service, "selectTrsmrcvLogList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 
     * <pre>
     * @DESCRIPTION: 메뉴사용현황 목록을 조회한다.
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     * 2016. 3. 9.
     * </pre>
     */
    @RequestMapping("/hsco/com/sym/lgm/SYM050300/MenuUsedSttus.do") 
    public ModelAndView selectMenuUsedSttus(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SYM050100Service, "selectMenuUsedSttus", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 
     * <pre>
     * @DESCRIPTION: 사용자별/일별 메뉴사용현황 목록을 조회한다.
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     * 2016. 3. 9.
     * </pre>
     */
    @RequestMapping("/hsco/com/sym/lgm/SYM050300/MenuUsedSttusDtl.do") 
    public ModelAndView selectMenuUsedSttusDtl(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SYM050100Service, "selectMenuUsedSttusDtl", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
	
	
	
}
