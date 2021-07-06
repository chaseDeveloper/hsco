package hsco.mis.acc.ACC040203;

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
 * @Class Name   	: ACC040203Controller.java
 * @Description  	: 법인카드 연간사용내역을 관리하는 Controller 클래스 
 * @author       	: 이수지
 * @since        	: 2017. 11. 22.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 11. 22.	이수지		최초생성
 * </pre>  
 */
@Controller
public class ACC040203Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC040203Controller.class);
	
	@Resource(name="ACC040203Service")
	ACC040203ServiceImpl ACC040203Service;
	
	/**
	 * 승인내역조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC040203/confmDtlsList.do") 
	public ModelAndView confmDtlsList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("confmDtlsList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC040203Service, "confmDtlsList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

    @RequestMapping("/hsco/mis/acc/ACC040203/cardList.do") 
    public ModelAndView cardList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        if(log.isInfoEnabled()) log.info("cardList Started!");
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(ACC040203Service, "cardList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
}
