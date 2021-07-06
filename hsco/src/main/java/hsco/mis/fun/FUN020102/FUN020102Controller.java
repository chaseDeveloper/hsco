package hsco.mis.fun.FUN020102;

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
 * @Class Name   	: FUN020102Controller.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2015. 07. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 14.  				   양성모				최초생성
 * </pre>  
 */
@Controller
public class FUN020102Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="fun020102Service")
	FUN020102ServiceImpl fun020102Service;

	
	/**
	 * 공사채등록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN020102/selectPbncdList.do")  
	public ModelAndView selectPbncdList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("공사채등록 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun020102Service, "selectPbncdList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 공사채승인 리스트 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN020102/selectPbncdConfmList.do")  
	public ModelAndView selectPbncdConfmList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("공사채승인 리스트 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun020102Service, "selectPbncdConfmList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}

	
	/**
	 * 공사채등록 CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/mis/fun/FUN020102/PbncdCUD.do")
	public ModelAndView PbncdCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("공사채등록 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(fun020102Service, "PbncdCUD", xpDto, mav);

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
    @RequestMapping("/hsco/mis/fun/FUN010201/selectFileList.do")
    public ModelAndView selectFileList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(fun020102Service, "selectFileList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }	
    
    /**
     * 첨부파일 Key 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/fun/FUN010201/saveNewFileSn.do")
    public ModelAndView saveNewFileSn(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(fun020102Service, "saveNewFileSn", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

        return mav;
    }
    
    
	/**
	 * 채권 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN020102/selectCditList.do")  
	public ModelAndView selectCditList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("공사채등록 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun020102Service, "selectCditList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}

	
	/**
	 * 실물채정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN020102/selectObjtInfo.do")  
	public ModelAndView selectObjtInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("실물채정보 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun020102Service, "selectObjtInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}


	/**
	 * 실물채정보 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN020102/ObjtInfoCUD.do")  
	public ModelAndView ObjtInfoCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("공사채등록 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun020102Service, "ObjtInfoCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		
	}
}