package hsco.pms.sls.hou.ctr.SLS020201;

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
 * @Class Name   	: SLS020201Controller.java
 * @Description  	: 주택계약자 명의 변경 Controller
 * @author       	: 정윤원
 * @since        	: 2015. 9.2.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 
 * </pre>  
 */
@Controller
public class SLS020201Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS020201Service")
	SLS020201ServiceImpl SLS020201Service;

	/**
	 * 주택코드 콤보 리스트 : 해당내용 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020201/cmbHouseCodeList.do")
	public ModelAndView cmbHouseCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("[RUN]cmbHouseCodeList :: 주택코드 콤보 리스트 ::---------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020201Service, "cmbHouseCodeList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회"); 
		
		return mav;
	}	
	
	
	
	
	/**
	 * 주택계약자변경 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020201/selectHcntrctrChangeList.do")
	public ModelAndView selectHcntrctrChangeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택계약자 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHcntrctrChangeList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020201Service, "selectHcntrctrChangeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	/**
	 * 주택계약자변경 신규
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020201/selectHcntrctrChangeInsert.do")
	public ModelAndView selectHcntrctrChangeInsert(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택계약자 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHcntrctrChangeList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020201Service, "selectHcntrctrChangeInsert", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	/**
	 * 주택계약 압류 리스트 신규,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020201/saveHcntrctrChangeList.do")
	public ModelAndView saveHcntrctrChangeList(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("##########################################################################[RUN]saveHcntrCtrSeizrList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020201Service, "saveHcntrctrChangeList", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		return mav;
	}	
	
	/**
	 * 주택계약자명의 변경 신청서
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020201/selectNmchangeReqstdoc.do")
	public ModelAndView selectNmchangeReqstdoc(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택계약자 명의변경 신청서~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectNmchangeReqstdoc");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020201Service, "selectNmchangeReqstdoc", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	/**
	 * 주택 명의변경 복원
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020201/deleteHcntrctrChangeRollback.do")
	public ModelAndView deleteHcntrctrChangeRollback(NexacroMapDTO xpDto, Model model) throws Exception {
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020201Service, "deleteHcntrctrChangeRollback", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		return mav;
	}	

	/**
	 * 주택 명의변경 결재번호 업데이트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020201/updateSanctnNo.do")
	public ModelAndView updateSanctnNo(NexacroMapDTO xpDto, Model model) throws Exception {
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020201Service, "updateSanctnNo", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		return mav;
	}	

	
	/**
	 * 주택 명의변경 결재상태 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020201/SANCTNKND.do")
	public ModelAndView SANCTNKND(NexacroMapDTO xpDto, Model model) throws Exception {
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020201Service, "SANCTNKND", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		return mav;
	}		
	
	/**
	 * 주택 명의변경  업데이트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020201/updateHcntrctrChangeAll.do")
	public ModelAndView updateHcntrctrChangeAll(NexacroMapDTO xpDto, Model model) throws Exception {
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020201Service, "updateHcntrctrChangeAll", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		return mav;
	}	
	
}
