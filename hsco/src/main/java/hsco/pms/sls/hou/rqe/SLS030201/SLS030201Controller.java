package hsco.pms.sls.hou.rqe.SLS030201;

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
 * @Class Name   	: SLS030201Controller.java
 * @Description  	:
 * @author       	: 최승락
 * @since        	: 2015. 11.06.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 06.		 최승락			최초생성
 * </pre>
 */
@Controller
public class SLS030201Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="SLS030201Service")
	SLS030201ServiceImpl SLS030201Service;


	/**
	 * 분양금납부대상자 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rqe/SLS030201/selectHouseLttotPayList.do")
	public ModelAndView selectHouseLttotPayList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("분양금납부대상자 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS030201Service, "selectHouseLttotPayList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

    /**
     * 분양금납부대상자 저장(조정파일생성)
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/hou/rqe/SLS030201/saveHouseLttotPayList.do")
	public ModelAndView saveHouseLttotPayList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("분양금납부대상자 저장(조정파일생성)----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");

    	execService(SLS030201Service, "saveHouseLttotPayList", xpDto, mav);

    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

    	return mav;
	}

	/**
	 * 임대료납부대상자 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rqe/SLS030201/selectHouseRentPayList.do")
	public ModelAndView selectHouseRentPayList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("임대료납부대상자 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS030201Service, "selectHouseRentPayList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


    /**
     * 임대료납부대상자 저장(체납파일생성)
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/hou/rqe/SLS030201/saveNpymHouseRentPayList.do")
	public ModelAndView saveNpymHouseRentPayList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("임대료납부대상자 저장(체납파일생성)----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");

    	execService(SLS030201Service, "saveNpymHouseRentPayList", xpDto, mav);

    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

    	return mav;
	}

	/**
	 * 임대료납부대상자 조정파일 생성여부 체크
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rqe/SLS030201/selectMdatFileCreatYn.do")
	public ModelAndView selectMdatFileCreatYn(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("임대료납부대상자 조정파일 생성여부 체크----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS030201Service, "selectMdatFileCreatYn", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


    /**
     * 임대료납부대상자 저장(조정파일생성)
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/hou/rqe/SLS030201/saveMdaHouseRentPayList.do")
	public ModelAndView saveMdaHouseRentPayList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("임대료납부대상자 저장(조정파일생성)----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");

    	execService(SLS030201Service, "saveMdaHouseRentPayList", xpDto, mav);

    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

    	return mav;
	}
    
	/**
	 * 임대료전월비교 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rqe/SLS030201/selectHouseRentPayLsmthCmpr.do")
	public ModelAndView selectHouseRentPayLsmthCmpr(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("임대료전월비교 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS030201Service, "selectHouseRentPayLsmthCmpr", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

	/**
	 * 분양금납부내역[조정] 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rqe/SLS030201/selectHouseLttotPayListP01.do")
	public ModelAndView selectHouseLttotPayListP01(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("분양금납부내역[조정] 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS030201Service, "selectHouseLttotPayListP01", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	/**
	 * 임대료납부내역[조정] 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rqe/SLS030201/selectHouseRentPayListP01.do")
	public ModelAndView selectHouseRentPayListP01(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("임대료납부내역 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS030201Service, "selectHouseRentPayListP01", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	/**
	 * 임의수납[분양금] 저장(수정)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rqe/SLS030201/mainUL.do")
	public ModelAndView mainUL(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Update 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS030201Service, "mainUL", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}	
	
	/**
	 * 임의수납[임대료] 저장(수정)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rqe/SLS030201/mainUR.do")
	public ModelAndView mainUR(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Update 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS030201Service, "mainUR", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}
	
	/**
	 * 조정년월기준 고지서정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rqe/SLS030201/selectNhtList.do")
	public ModelAndView selectNhtList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("고지서정보 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS030201Service, "selectNhtList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	/**
	 * 조정년월기준 출력요파일정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rqe/SLS030201/selectPrintList.do")
	public ModelAndView selectPrintList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("출력용파일정보 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS030201Service, "selectPrintList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}	
	
}
