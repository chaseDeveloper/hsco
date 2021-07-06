package hsco.pms.sls.lad.rqe.SLS090201;

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
 * @Class Name   	: SLS090201Controller.java
 * @Description  	: 
 * @author       	: 최승락
 * @since        	: 2015. 10.19.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 19.		 최승락			최초생성
 * </pre>  
 */
@Controller
public class SLS090201Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS090201Service")
	SLS090201ServiceImpl SLS090201Service;


	/**
	 * 수납조정목록(분양) 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS090201/selectLttotRcivMdatList.do")
	public ModelAndView selectLttotRcivMdatList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("수납조정목록(분양) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS090201Service, "selectLttotRcivMdatList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
    /**
     * 수납조정목록(분양) 수정
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS090201/saveLttotRcivMdatList.do")
	public ModelAndView saveLttotRcivMdatList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("수납조정목록(분양) 수정----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS090201Service, "saveLttotRcivMdatList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}	
	
	

    /**
     * 수납조정목록(분양) 납부요청
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS090201/saveLttotRcivMdatVaBill.do")
	public ModelAndView saveLttotRcivMdatVaBill (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("수납조정목록(분양) 납부요청----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS090201Service, "saveLttotRcivMdatVaBill", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}
    
    /**
     * 수납조정목록(분양) 결의서생성
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS090201/saveLadaActVote.do")
	public ModelAndView saveLadaActVote (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("수납조정목록(분양) 납부요청----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS090201Service, "saveLadaActVote", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}    
}
