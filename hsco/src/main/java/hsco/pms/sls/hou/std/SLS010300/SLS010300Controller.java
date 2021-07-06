package hsco.pms.sls.hou.std.SLS010300;

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
 * @Class Name   	: SLS010300Controller.java
 * @Description  	: 
 * @author       	: 김시영
 * @since        	: 2015. 6.11.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7.29					   정윤원				작성자 변경
 * </pre>  
 */
@Controller
public class SLS010300Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS010300Service")
	SLS010300ServiceImpl SLS010300Service;

	
	/**
	 * 분양타입, 임대타입 콤보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010300/cmbLttotTyCodeList.do")
	public ModelAndView cmbLttotTyCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("[RUN]cmbHouseCodeList :: 분양타입, 임대타입 콤보 리스트 ::---------------------------------------------!");

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS010300Service, "cmbLttotTyCodeList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");			
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	

	/**
	 * 주택타입 콤보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010300/comboHouseTyCodeList.do")
	public ModelAndView comboHouseTyCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택타입 콤보 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]comboHouseTyCodeList");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS010300Service, "comboHouseTyCodeList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 주택 타입별 납부코드 콤보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010300/comboHouseTyByPayList.do")
	public ModelAndView comboHouseTyByPayList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 타입별 납부코드  콤보 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]comboHouseTyByPayList");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS010300Service, "comboHouseTyByPayList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	
	/**
	 * 주택동호 정보 조회 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010300/selectHouseDongHoList.do")
	public ModelAndView selectHouseDongHoList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택동호 정보 조회 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHouseDongHoList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS010300Service, "selectHouseDongHoList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	   }
	
	
	/**
	 * 주택동호별 주택 타입 상세 정보조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010300/selectHouseDongHoTyByInfo.do")
	public ModelAndView selectHouseDongHoTyByInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택동호별 주택 타입 상세 정보조회~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHouseDongHoTyByInfo");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS010300Service, "selectHouseDongHoTyByInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		 return mav;
	   }
	
	
	/**
	 * 주택기본정보 신규,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010300/saveHouseDongHoList.do")
	public ModelAndView saveHouseDongHoList(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("##########################################################################[RUN]saveHouseDongHoList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS010300Service, "saveHouseDongHoList", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		return mav;
	}	
	
	
	
	/**
	 * 주택정보 엑셀 자료 일괄업로드
	 *  - 일괄등록시 처리 프로세스
   	 *	- 동.호 정보 Insert
   	 *	- 타입정보 자동 생성
   	 *	- 타입별 납부정보 자동 생성
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010300/saveHouseDongHoListProc.do")
	public ModelAndView saveHouseDongHoListProc(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("##########################################################################[RUN]saveHouseDongHoListProc");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS010300Service, "saveHouseDongHoListProc", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		return mav;
	}	
		
		
	/**
	 * 납부정보(Tab00>tapage1) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010300/selectHouseTybyPayList.do")
	public ModelAndView selectHouseTybyPayPayList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("납부정보(Tab00>tapage1) 조회###################################[RUN]selectHouseTybyPayList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS010300Service, "selectHouseTybyPayList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
		
	
	/**
	 * 옵션정보(Tab00>tabpage2) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010300/selectHouseTybyPayOptnList.do")
	public ModelAndView selectHouseTybyPayOptnList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("옵션정보(Tab00>tabpage2) 조회#####################################[RUN]selectHouseTybyPayOptnList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS010300Service, "selectHouseTybyPayOptnList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
		

	/**
	 * 할인정보(Tab00>tabpage3) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010300/selectHouseTybyPayDscntList.do")
	public ModelAndView selectHouseTybyPayDscntList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("할인정보(Tab00>tabpage3) 조회############################[RUN]selectHouseTybyPayDscntList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS010300Service, "selectHouseTybyPayDscntList", xpDto, mav);


		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	

	/** 납부정보(tabpage1) 신규,수정,삭제
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010300/saveHouseTybyPayList.do") 
	public ModelAndView saveHouseTybyPayPayList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("##########################################################################[RUN]saveHouseTybyPayPayList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS010300Service, "saveHouseTybyPayList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	

	/**
	 * 옵션정보(tabpage2) 신규,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010300/saveHouseTybyPayOptnList.do")
	public ModelAndView saveHouseTybyPayOptnList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("##옵션정보(tabpage2) 신규,수정,삭제#############################[RUN]saveHouseTybyPayOptnList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS010300Service, "saveHouseTybyPayList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	
	/**
	 * 할인정보(tabpage3) 신규,수정,삭제 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010300/saveHouseTybyPayDscntList.do")
	public ModelAndView saveHouseTybyPayDscntList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("#####할인정보(tabpage3) 신규,수정,삭제#########################################[RUN]saveHouseTybyPayDscntList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS010300Service, "saveHouseTybyPayList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
}
