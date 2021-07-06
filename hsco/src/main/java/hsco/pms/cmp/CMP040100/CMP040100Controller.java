package hsco.pms.cmp.CMP040100;

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
public class CMP040100Controller extends BaseContoller{
	private final Logger log = LoggerFactory.getLogger(CMP040100Controller.class);
			
	@Resource(name="CMP040100Service")
	CMP040100ServiceImpl CMP040100Service;
	
	
	//공문목록 조회
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/tbcmpOfldcInfoList.do") 
	public ModelAndView tbcmpOfldcInfoList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("tbcmpOfldcInfoList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "tbcmpOfldcInfoList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//공문대상자 조회
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/tbcmpOfldcTrgterList.do") 
	public ModelAndView tbcmpOfldcTrgterList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("tbcmpOfldcTrgterList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "tbcmpOfldcTrgterList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//소유자목록 조회
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/tbcmpThingOwnerList.do") 
	public ModelAndView tbcmpThingOwnerList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("tbcmpThingOwnerList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "tbcmpThingOwnerList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

	//합의목록 조회
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/tbcmpDscssDocList.do") 
	public ModelAndView tbcmpDscssDocList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("tbcmpDscssDocList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "tbcmpDscssDocList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//공문대상자(팝업) 조회
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/tbcmpThingWtnncListPop.do") 
	public ModelAndView tbcmpThingWtnncListPop(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("tbcmpDscssDocList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "tbcmpThingWtnncListPop", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//협의대상자(팝업) 조회
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/tbcmpThingWtnncListPop2.do") 
	public ModelAndView tbcmpThingWtnncListPop2(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("tbcmpThingWtnncListPop2 Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "tbcmpThingWtnncListPop2", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//공문정보(팝업) 조회
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/tbcmpOfldcInfoListPop.do") 
	public ModelAndView tbcmpOfldcInfoListPop(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("tbcmpOfldcInfoListPop Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "tbcmpOfldcInfoListPop", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//공문 등록, 수정, 삭제
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/tbcmpOfldcInfoCUD.do") 
	public ModelAndView tbcmpOfldcInfoCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "tbcmpOfldcInfoCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	//공문대상자 등록, 수정, 삭제
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/tbcmpOfldcTrgterCUD.do") 
	public ModelAndView tbcmpOfldcTrgterCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "tbcmpOfldcTrgterCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	//협의문서 등록, 수정, 삭제
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/tbcmpDscssDocCUD.do") 
	public ModelAndView tbcmpDscssDocCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "tbcmpDscssDocCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	//협의문서 엑셀 등록
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/tbcmpDscssDocExcelC.do") 
	public ModelAndView tbcmpDscssDocExcelC(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "tbcmpDscssDocExcelC", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/dscssOwnerList.do") 
	public ModelAndView dscssOwnerList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("dscssOwnerList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "dscssOwnerList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/dscssCrcmstncsList.do") 
	public ModelAndView dscssCrcmstncsList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "dscssCrcmstncsList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/dscssCrcmstncsWithOwnerList.do") 
	public ModelAndView dscssCrcmstncsWithOwnerList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "dscssCrcmstncsWithOwnerList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("hsco/pms/cmp/tdd/CMP040100/dscssCrcmstncsCUD.do") 
	public ModelAndView rewardBsnsDstrcCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "dscssCrcmstncsCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/thingOwnerList.do") 
	public ModelAndView thingOwnerList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "thingOwnerList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/dscssDocList.do") 
	public ModelAndView dscssDocList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "dscssDocList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
	
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040100/dscssDocCUD.do") 
	public ModelAndView dscssDocCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040100Service, "dscssDocCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
