package hsco.eis.eis.EIS030201;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: EIS030201Controller.java
 * @Description  	: 
 * @author       	: 고진호
 * @since        	: 2016. 3. 28.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 3. 28.		고진호			최초생성
 * </pre>  
 */

@Controller
public class EIS030201Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(EIS030201Controller.class);	
	
	@Resource(name="EIS030201Service")
	EIS030201ServiceImpl EIS030201Service;
	
	// 사업코드 조회
	@RequestMapping("hsco/eis/eis/EIS030201/bsnsList.do")
	public ModelAndView bsnsList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isDebugEnabled()) log.debug("bsnsList started!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "bsnsList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	
	//사업 상세 정보 조회
	@RequestMapping("hsco/eis/eis/EIS030201/bsnsDetailList.do")
	public ModelAndView bsnsDetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "bsnsDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	//사업 상세 정보 조회(파일)
	@RequestMapping("hsco/eis/eis/EIS030201/bsnsDetailFileList.do")
	public ModelAndView bsnsDetailFileList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "bsnsDetailFileList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}	
	//사업일정조회
	@RequestMapping("hsco/eis/eis/EIS030201/bsnsPlanList.do")
	public ModelAndView bsnsPlanList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "bsnsPlanList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	//사업일정 상세조회
	@RequestMapping("hsco/eis/eis/EIS030201/bsnsPlanDetailList.do")
	public ModelAndView bsnsPlanDetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "bsnsPlanDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	//사업일정 파일조회
		@RequestMapping("hsco/eis/eis/EIS030201/bsnsPlanDetailFileList.do")
		public ModelAndView bsnsPlanDetailFileList(NexacroMapDTO xpDto, Model model) throws Exception {
			ModelAndView mav = new ModelAndView("nexacroMapView");
			execService(EIS030201Service, "bsnsPlanDetailFileList", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			return mav;
		}
		
	//보상현황(토지)
	@RequestMapping("hsco/eis/eis/EIS030201/landRewardMainList.do")
	public ModelAndView landRewardSttus(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "landRewardMainList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	

	//보상현황(물건)
	@RequestMapping("hsco/eis/eis/EIS030201/thingRewardMainList.do")
	public ModelAndView thingRewardSttus(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "thingRewardMainList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}	
	
	//보상상세현황(토지)
	@RequestMapping("hsco/eis/eis/EIS030201/landRewardDetailList.do")
	public ModelAndView landRewardDetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "landRewardDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	

	//보상상세현황(물건)
	@RequestMapping("hsco/eis/eis/EIS030201/thingRewardDetailList.do")
	public ModelAndView thingRewardDetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "thingRewardDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}	
	
	//보상현황챠트(토지)
	@RequestMapping("hsco/eis/eis/EIS030201/landRewardChart.do")
	public ModelAndView landRewardChart(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "landRewardChart", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	

	//보상현황챠트(물건)
	@RequestMapping("hsco/eis/eis/EIS030201/thingRewardChart.do")
	public ModelAndView thingRewardChart(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "thingRewardChart", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}	
	
	//공사현황(계약)
	@RequestMapping("hsco/eis/eis/EIS030201/cntrWkSttusList.do")
	public ModelAndView cntrWkSttusList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "cntrWkSttusList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}	
	
	//공사현황(공정)
	@RequestMapping("hsco/eis/eis/EIS030201/cntrFairList.do")
	public ModelAndView cntrFairList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "cntrFairList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	
	//공사현황(공정상세)
	@RequestMapping("hsco/eis/eis/EIS030201/cntrFairDetailList.do")
	public ModelAndView cntrFairDetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "cntrFairDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}	
	
	//공사현황(챠트)
	@RequestMapping("hsco/eis/eis/EIS030201/cntrFairChart.do")
	public ModelAndView cntrFairChart(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "cntrFairChart", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}	
	
	//수입현황(주택코드)
	@RequestMapping("hsco/eis/eis/EIS030201/houseCodeList.do")
	public ModelAndView houseCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "houseCodeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}	
	
	//수입현황(토지코드)
	@RequestMapping("hsco/eis/eis/EIS030201/landCodeList.do")
	public ModelAndView landCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "landCodeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}	
	
	//수입현황(주택)
	@RequestMapping("hsco/eis/eis/EIS030201/houseIncmeDetailList.do")
	public ModelAndView houseIncmeDetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "houseIncmeDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	//수입현황(토지)
	@RequestMapping("hsco/eis/eis/EIS030201/landIncmeDetailList.do")
	public ModelAndView landIncmeDetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "landIncmeDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	//수입현황(기타)
	@RequestMapping("hsco/eis/eis/EIS030201/etcIncmeDetailList.do")
	public ModelAndView etcIncmeDetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "etcIncmeDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	//수입현황(모두)
	@RequestMapping("hsco/eis/eis/EIS030201/incmeChart.do")
	public ModelAndView incmeChart(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "incmeChart", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	//연체현황(연체리스트)
	@RequestMapping("hsco/eis/eis/EIS030201/rentList.do")
	public ModelAndView rentList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "rentList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	//연체상세현황
	@RequestMapping("hsco/eis/eis/EIS030201/rentDetailList.do")
	public ModelAndView rentDetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "rentDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	//연체현황챠트
	@RequestMapping("hsco/eis/eis/EIS030201/rentChart.do")
	public ModelAndView rentChart(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "rentChart", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	
	
	
	
	/**
	 * 보상현황
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/eis/eis/EIS030201/rewardMainList.do")
	public ModelAndView rewardMainList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(EIS030201Service, "rewardMainList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
}