package hsco.pms.cmp.Common;

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
 * @Class Name   	: CmpCommonController.java
 * @Description  	: 보상의 공통 코드
 * @author       	: 지효정
 * @since        	: 2015. 6. 21.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 21.					지효정				최초생성
 * </pre>  
 */
@Controller
@RequestMapping("/hsco/pms/cmp/CMP000000") 
public class CmpCommonController extends BaseContoller{

	private final Logger log = LoggerFactory.getLogger(CmpCommonController.class);
	
	@Resource(name="CmpCommonService")
	CmpCommonServiceImpl cmpCommonService;
	
	//공통 코드 리스트
	@RequestMapping("/cmmnCodeList.do") 
	public ModelAndView cmmnCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "cmmnCodeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 *  사원목록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/selectEmployeeList.do") 
	public ModelAndView selectEmployeeList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상사업지구 사원정보 리스트----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "selectEmployeeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
	
	/**
	 *  법정 동코드 목록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/selectLegaldongCodeList.do") 
	public ModelAndView selectLegaldongCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상사업지구 사원정보 리스트----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "selectLegaldongCodeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//소재지 코드 리스트
	@RequestMapping("/locplcCodeList.do") 
	public ModelAndView locplcCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "locplcCodeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//사용자 사업지구 리스트
	@RequestMapping("/userBsnsAreaList.do") 
	public ModelAndView userBsnsAreaList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "userBsnsAreaList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//전체 사업지구 코드 리스트
	@RequestMapping("/bsnsAreaList.do") 
	public ModelAndView bsnsAreaList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "bsnsAreaList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//물건분류 코드 리스트
	@RequestMapping("/thingCodeList.do") 
	public ModelAndView thingCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "thingCodeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//단위 코드 리스트
	@RequestMapping("/unitCodeList.do") 
	public ModelAndView unitCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "unitCodeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
	
	//지목 코드 리스트
	@RequestMapping("/lndcgrCodeList.do") 
	public ModelAndView lndcgrCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "lndcgrCodeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
	
	//사업지구의 최대 차수 크기
	@RequestMapping("/maxRewardOdrR.do") 
	public ModelAndView maxRewardOdrR(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "maxRewardOdrR", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//사업지구별 감정평가사 리스트
	@RequestMapping("/servcEntrpsList.do") 
	public ModelAndView prpraprCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "servcEntrpsList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

	//업무구분 코드 리스트
	@RequestMapping("/jobSeList.do") 
	public ModelAndView jobSeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "jobSeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
	
	//서식구분 코드 리스트
	@RequestMapping("/formatSeList.do") 
	public ModelAndView formatSeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "formatSeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
	
	//서식유형 코드 리스트
	@RequestMapping("/dscssDocTypeList.do") 
	public ModelAndView dscssDocTypeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "dscssDocTypeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
	
	//업무구분 코드 리스트
	@RequestMapping("/bndeApplcAtList.do") 
	public ModelAndView bndeApplcAtList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "bndeApplcAtList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
	
	//주택판매 코드 리스트
	@RequestMapping("/houCodeList.do") 
	public ModelAndView houCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "houCodeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
	
	//토지판매 코드 리스트
	@RequestMapping("/ladCodeList.do") 
	public ModelAndView ladCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "ladCodeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
	
	//사업지구별 소유자 리스트
	@RequestMapping("/thingOwnerList.do") 
	public ModelAndView thingOwnerList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "thingOwnerList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}  
	
	//사업지구별 소유자 별 청구일자 리스트
	@RequestMapping("/rqestDeList.do") 
	public ModelAndView rqestDeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmpCommonService, "rqestDeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}
