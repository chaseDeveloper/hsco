package hsco.pms.cmp.CMP050300;

import javax.annotation.Resource;
import java.io.File;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

@Controller
public class CMP050300Controller extends BaseContoller{
private final Logger log = LoggerFactory.getLogger(CMP050300Controller.class);
	
	@Resource(name="CMP050300Service")
	CMP050300ServiceImpl cmp050300Service;

	@RequestMapping("hsco/pms/cmp/CMP050300/selectDetailDataList.do") 
	public ModelAndView selectDetailDataList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("세부 조건 데이터 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp050300Service, "selectDetailDataList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("hsco/pms/cmp/CMP050300/aceptncAdjdcCU.do") 
	public ModelAndView aceptncAdjdcCU(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("세부 조건 데이터 (저장, 수정)----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp050300Service, "aceptncAdjdcCU", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	@RequestMapping("hsco/pms/cmp/CMP050300/tab01List.do") 
	public ModelAndView tab01List(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("접수메인----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp050300Service, "tab01List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("hsco/pms/cmp/CMP050300/tab02List.do") 
	public ModelAndView tab02List(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("소유자----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp050300Service, "tab02List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	@RequestMapping("hsco/pms/cmp/CMP050300/tab03List.do") 
	public ModelAndView tab03List(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("관계인----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp050300Service, "tab03List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	@RequestMapping("hsco/pms/cmp/CMP050300/tab04List.do") 
	public ModelAndView tab04List(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("토지----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp050300Service, "tab04List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	@RequestMapping("hsco/pms/cmp/CMP050300/tab05List.do") 
	public ModelAndView tab05List(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("토지소유자&관계인관계----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp050300Service, "tab05List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	@RequestMapping("hsco/pms/cmp/CMP050300/tab06List.do") 
	public ModelAndView tab06List(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("지장물----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp050300Service, "tab06List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	@RequestMapping("hsco/pms/cmp/CMP050300/tab07List.do") 
	public ModelAndView tab07List(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("지장물소유자&관계인관계----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp050300Service, "tab07List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	@RequestMapping("hsco/pms/cmp/CMP050300/tab08List.do") 
	public ModelAndView tab08List(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("소유권이외의권리----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp050300Service, "tab08List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	@RequestMapping("hsco/pms/cmp/CMP050300/tab09List.do") 
	public ModelAndView tab09List(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("소유권이외의권리소유자&관계인관계----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp050300Service, "tab09List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	@RequestMapping("hsco/pms/cmp/CMP050300/tab10List.do") 
	public ModelAndView tab10List(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("지상권----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp050300Service, "tab10List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav; 
	} 
   
	@RequestMapping("/hsco/pms/cmp/CMP050300/downloadFile.do") 
	public ModelAndView downloadFile(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("다운로드----------------------------------------------------!");
		ModelAndView mav = new ModelAndView();
		
		File AtcngReqstFile = cmp050300Service.getDownloadFile(xpDto);
		
		if(AtcngReqstFile == null){
			throw new NexaServiceException("err.파일.다운로드.실패");
		}
		
		mav.setViewName("download");
		mav.addObject("downloadFile", AtcngReqstFile);		
		
		return mav;
	}	 
	
}
