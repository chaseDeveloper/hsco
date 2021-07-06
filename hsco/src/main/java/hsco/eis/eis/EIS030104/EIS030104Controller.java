package hsco.eis.eis.EIS030104;

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
 * @Class Name   	: EIS030104Controller.java
 * @Description  	: 보수현황조회
 * @author       	: 이동석
 * @since        	: 2016. 4. 4.
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
public class EIS030104Controller extends BaseContoller {
	
    protected Logger log = LoggerFactory.getLogger(EIS030104Controller.class);    
	
	@Resource(name="EIS030104Service")
	EIS030104ServiceImpl EIS030104Service;
	
	/**
     * 보수현황조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/eis/eis/EIS030104/selectSalaryList.do") 
    public ModelAndView selectSalaryList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	if(log.isDebugEnabled()) log.debug("selectSalaryList started!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(EIS030104Service, "selectSalaryList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    } 
   
	
}