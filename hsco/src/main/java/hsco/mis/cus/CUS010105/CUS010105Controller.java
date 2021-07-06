package hsco.mis.cus.CUS010105;

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
 * @Class Name   	: CUS010105Controller.java
 * @Description  	: 해피콜목록을 관리하는 컨트롤러 클래스
 * @author       	: 김병진
 * @since        	: 2015. 8. 27.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 27.		   김병진			 최초생성
 * </pre>  
 */

@Controller
public class CUS010105Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="CUS010105Service")
	CUS010105ServiceImpl CUS010105Service;

	/**
	 * 해피콜 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/cus/CUS010105/selectHppCallList.do") 
	public ModelAndView selectHppCallList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("해피콜 목록 조회 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(CUS010105Service, "selectHppCallList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 해피콜목록 수정
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/cus/CUS010105/hppCallListU.do")
	public ModelAndView hppCallListU(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("해피콜 목록 U 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

			execService(CUS010105Service, "hppCallListU", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
     * 분양정보조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010105/selectHcntrctrInfo.do") 
    public ModelAndView selectHcntrctrInfo(NexacroMapDTO xpDto, Model model) throws Exception {
        log.debug("분양정보 조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(CUS010105Service, "selectHcntrctrInfo", xpDto, mav );
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }


}
