package hsco.pms.sls.lad.ctr.SLS080401;

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
public class SLS080401Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="SLS080401Service")
	SLS080401ServiceImpl SLS080401Service;


	/**
	 * 토지계약목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080401/selectLadLcntrctrList.do")
	public ModelAndView selectLadLcntrctrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080401Service, "selectLadLcntrctrList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 토지계약자압류 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080401/selectLcntrctrSeizrList.do")
	public ModelAndView selectLcntrctrSeizrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080401Service, "selectLcntrctrSeizrList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
     * 토지계약자압류 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080401/saveLcntrctrSeizrList.do")
	public ModelAndView saveLcntrctrSeizrList (NexacroMapDTO xpDto, Model model) throws Exception {

    	ModelAndView mav = new ModelAndView("nexacroMapView");

    	execService(SLS080401Service, "saveLcntrctrSeizrList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
    	return mav;
	}
    
    //첨부파일 삭제
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080401/deleteFileInfo.do")
	public ModelAndView deleteFileInfoSeizr(NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("첨부파일 삭제----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080401Service, "deleteFileInfo", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}
    
    
    /**
	 * 토지계약자대출 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080401/selectLcntrctrLonList.do")
	public ModelAndView selectLcntrctrLonList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080401Service, "selectLcntrctrLonList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
     * 토지계약자대출 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080401/saveLcntrctrLonList.do")
	public ModelAndView saveLcntrctrLonList (NexacroMapDTO xpDto, Model model) throws Exception {

    	ModelAndView mav = new ModelAndView("nexacroMapView");

    	execService(SLS080401Service, "saveLcntrctrLonList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
    	return mav;
	}
	
	
	
}
