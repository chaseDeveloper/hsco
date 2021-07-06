package hsco.mis.ach.ACHCommon;

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
 * @Class Name   	: ACHCommonController.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 8. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 18.	박병일			최초생성
 * </pre>  
 */

@Controller
public class ACHCommonController extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ACHCommonController.class);	
	
	@Resource(name="ACHCommonService")
	ACHCommonServiceImpl ACHCommonService;
	
	/**
	 * 평가 조직코드 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectOrgnztList.do") 
	public ModelAndView selectOrgnztList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("조직코드 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectOrgnztList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * get 지표명
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectIxNm.do") 
	public ModelAndView selectIxNm(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("지표명 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectIxNm", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * get 평가점수목록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectEvlScoreList.do") 
	public ModelAndView selectEvlScoreList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가점수목록 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectEvlScoreList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * get 평가주기
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectEvlCycleSingle.do") 
	public ModelAndView selectEvlCycleSingle(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가점수목록 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectEvlCycleSingle", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 평가차수 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectOdrList.do") 
	public ModelAndView selectOdrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가차수 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectOdrList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 현재 평가차수(평가연도&차수)정보  조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectCurEvlOdrInfo.do") 
	public ModelAndView selectCurEvlOdrInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("현재 평가차수 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectCurEvlOdrInfo", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 계량지표 코드목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectQyeIxcodeList.do") 
	public ModelAndView selectQyeIxcodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("계량평가지표코드 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectQyeIxcodeList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * get 지표별가감점기준점수 목록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectAdsbtrScoreList.do") 
	public ModelAndView selectAdsbtrScoreList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("가감점기준점수 목록 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectAdsbtrScoreList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 지표 코드[마일리지타입] 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectIxcodeListM.do") 
	public ModelAndView selectIxcodeListM(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가지표코드[마일리지타입] 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectIxcodeListM", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 지표 코드[복합지표타입] 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectIxcodeListT.do") 
	public ModelAndView selectIxcodeListT(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가지표코드[복합지표타입] 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectIxcodeListT", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 지표 코드[상대평가 타입] 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectIxcodeListA.do") 
	public ModelAndView selectIxcodeListA(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가지표코드[상대평가 타입] 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectIxcodeListA", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 지표 코드[일정관리 타입] 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectIxcodeListD.do") 
	public ModelAndView selectIxcodeListD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가지표코드[일정관리 타입] 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectIxcodeListD", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 지표 코드[이행평가 타입] 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectIxcodeListE.do") 
	public ModelAndView selectIxcodeListE(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가지표코드[이행평가 타입] 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectIxcodeListE", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 지표 코드[공정율관리 타입] 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectIxcodeListF.do") 
	public ModelAndView selectIxcodeListF(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가지표코드[공정율관리 타입] 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectIxcodeListF", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 상위지표 코드 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectUpIxcodeList.do") 
	public ModelAndView selectUpIxcodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("상위평가지표코드 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectUpIxcodeList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 지표 코드 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectIxcodeAllList.do") 
	public ModelAndView selectIxcodeAllList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가지표코드 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectIxcodeAllList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 비계량지표 측정월 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectQlevalSeqList.do") 
	public ModelAndView selectQlevalSeqList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("측정월 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectQlevalSeqList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 달성율구간Color 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACHCommon/selectAchivRtSctnList.do") 
	public ModelAndView selectAchivRtSctnList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("달성율구간color 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACHCommonService, "selectAchivRtSctnList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	

}
