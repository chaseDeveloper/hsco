package hsco.mis.ach.ACH030303;

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
 * @Class Name   	: ACH030303Controller.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 9. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 02.	박병일			최초생성
 * </pre>  
 */

@Controller
public class ACH030303Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ACH030303Controller.class);	
	
	@Resource(name="ACH030303Service")
	ACH030303ServiceImpl ACH030303Service;		
	
	/**
	 * 조직별 평가대상 비계량지표 목록  조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH030303/selectList.do") 
	public ModelAndView selectList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("selectList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH030303Service, "selectList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 평가내역 정보를  저장, 수정, 삭제 한다.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH030303/dtlCUD.do")
	public ModelAndView dtlCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("list CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACH030303Service, "dtlCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
     * 첨부파일 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ach/ACH030303/selectFileList.do")
    public ModelAndView selectFileList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(ACH030303Service, "selectFileList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }	
    
    /**
     * 평가자 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ach/ACH030303/getQleEvlManList.do")
    public ModelAndView getQleEvlManList(NexacroMapDTO xpDto, Model model) throws Exception {
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(ACH030303Service, "getQleEvlManList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	return mav;
    }
}
