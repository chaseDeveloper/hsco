package hsco.pms.sls.lad.ctr.SLS080301;

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

@Controller
public class SLS080301Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS080301Service")
	SLS080301ServiceImpl SLS080301Service;

	
	/**
	 * 토지계약목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080301/selectLadLcntrctrList.do")
	public ModelAndView selectLadLcntrctrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("토지계약목록 조회======================================>");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		try {
			execService(SLS080301Service, "selectLadLcntrctrList", xpDto, mav);
	
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		} 
		catch (Exception e) {
			e.printStackTrace();
			mav.addObject(NexacroConstant.ERROR_CODE, "-1");
			mav.addObject(NexacroConstant.ERROR_MSG, e.toString());
		}
		return mav;
	}
	
	/**
	 * 토지명의변경 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080301/selectLadNmChangeList.do")
	public ModelAndView selectLadNmChangeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지명의변경 조회======================================>");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		try {
			execService(SLS080301Service, "selectLadNmChangeList", xpDto, mav);
	
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		} 
		catch (Exception e) {
			e.printStackTrace();
			mav.addObject(NexacroConstant.ERROR_CODE, "-1");
			mav.addObject(NexacroConstant.ERROR_MSG, e.toString());
		}
		return mav;
	}
	
	
	/**
	 * 토지명의변경 인서트용 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080301/selectLadNmChangeInsert.do")
	public ModelAndView selectLadNmChangeInsert(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지명의변경 인서트용 조회======================================>");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080301Service, "selectLadNmChangeInsert", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		/*
		try {
			execService(SLS080301Service, "selectLadNmChangeInsert", xpDto, mav);
	
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		} 
		catch (Exception e) {
			e.printStackTrace();
			mav.addObject(NexacroConstant.ERROR_CODE, "-1");
			mav.addObject(NexacroConstant.ERROR_MSG, e.toString());
		}
		*/
		return mav;
	}
	
    /**
     * 토지명의변경 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080301/saveLadNmChangeList.do")
	public ModelAndView saveLadNmChangeList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("토지명의변경 저장======================================>");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080301Service, "saveLadNmChangeList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	/*
    	try {
	    	execService(SLS080301Service, "saveLadNmChangeList", xpDto, mav);
	    	
	    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		} 
		catch (Exception e) {
			e.printStackTrace();
			mav.addObject(NexacroConstant.ERROR_CODE, "-1");
			mav.addObject(NexacroConstant.ERROR_MSG, e.toString());
		}
		*/
    	return mav;
	}
    
    //첨부파일 삭제
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080301/deleteFileInfo.do")
	public ModelAndView deleteFileInfo(NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("첨부파일 삭제----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080301Service, "deleteFileInfo", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}
    
    
    
    //=======================================================================================
    // 내부결재
    //=======================================================================================
    
    // 내부결제 아이디 저장
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080301/updateInnerSanctionNo.do")
	public ModelAndView updateInnerSanctionNo(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080301Service, "updateInnerSanctionNo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
    
	/* 결제자 목록 조회 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080301/sanctnerNmDetail.do") 
	public ModelAndView sanctnerNmDetail(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080301Service, "sanctnerNmDetail", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	//내부결제를 위한 레포트에 필요한 데이터셋을 한 서비스에서 처리
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080301/innerSanctnUbiDataset.do")  
	public ModelAndView innerSanctnUbiDataset(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080301Service, "innerSanctnUbiDataset", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}
