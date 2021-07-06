package hsco.eis.eis.EIS020100;

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
 * @Class Name   	: EIS020100Controller.java
 * @Description  	: 경영지표등록
 * @author       	: 이동석
 * @since        	: 2016. 3. 29.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 3. 29.					이동석				최초생성
 * </pre>  
 */


@Controller
public class EIS020100Controller extends BaseContoller {
	
    protected Logger log = LoggerFactory.getLogger(EIS020100Controller.class);    
	
	@Resource(name="EIS020100Service")
	EIS020100ServiceImpl EIS020100Service;
	
	/**
     * 경영지표등록조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/eis/eis/EIS020100/selectMngmtixList.do") 
    public ModelAndView selectMngmtixList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(EIS020100Service, "selectMngmtixList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    } 
    
   	
    /**
     * 경영지표등록 등록, 수정, 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/eis/eis/EIS020100/MngmtixCUD.do")
    public ModelAndView mngmtixCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("경영지표등록관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(EIS020100Service, "mngmtixCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");       
        
        return mav;
    }
    
    /**
     * 경영지표등록 복사
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/eis/eis/EIS020100/copyMngmtixList.do") 
    public ModelAndView copyMngmtixList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(EIS020100Service, "copyMngmtixList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    } 
	
	
}