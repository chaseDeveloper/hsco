package hsco.pms.rnt.pra.RNT01040203;

import java.io.File;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT01040203Controller.java
 * @Description  	: 월임대료관리
 * @author       	: 지효정
 * @since        	: 2015. 11. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 16.					지효정				최초생성
 * </pre>  
 */
@Controller
public class RNT01040203Controller extends BaseContoller{
	@Resource(name="RNT01040203Service")
	RNT01040203ServiceImpl RNT01040203Service;

	/**
	 * 임대료 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01040203/rentMtRntchrgList.do")
	public ModelAndView rentMtRntchrgList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01040203Service, "rentMtRntchrgList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
	
	/**
	 * 임대료 수납 목록(팝업)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01040203/rentMtRntchrgPopList.do")
	public ModelAndView rentMtRntchrgPopList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01040203Service, "rentMtRntchrgPopList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
	
	/**
	 * 임대료 연체이자 생성
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01040203/rentMtRntchrgU.do")
	public ModelAndView rentMtRntchrgU(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01040203Service, "rentMtRntchrgU", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 임대료 연체이자 생성(checkBox)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01040203/rentMtRntchrgChkU.do")
	public ModelAndView rentMtRntchrgChkU(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01040203Service, "rentMtRntchrgChkU", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 보증금 연체이자 생성
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01040203/rentGtnMtRntchrgU.do")
	public ModelAndView rentGtnMtRntchrgU(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01040203Service, "rentGtnMtRntchrgU", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 고지서 내역조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01040203/rentMtRntNhtSheetInfo.do")
	public ModelAndView rentMtRntNhtSheetInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01040203Service, "rentMtRntNhtSheetInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	//텍스트파일다운로드
	@RequestMapping("/hsco/pms/rnt/pra/RNT01040203/downloadFile.do")
	public ModelAndView downloadFile(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView();
		
    	String downFileName = "임대료납부.txt";
		File AtcngReqstFile = RNT01040203Service.getDownloadFile(xpDto);
		
		if(AtcngReqstFile == null){
			throw new NexaServiceException("err.파일.다운로드.실패");
		}
		
		xpDto.getRequest().setAttribute("downFileName", downFileName);
		
		mav.setViewName("download");
		mav.addObject("downloadFile", AtcngReqstFile);
		
		return mav;
	}
	
	
	/**
	 * 사용자 고지서 출력 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01040203/selectUserNoticeSheetReportList.do")
	public ModelAndView selectUserNoticeSheetReportList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01040203Service, "selectUserNoticeSheetReportList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}		
	
	
	/**
	 * 영구임대 월임대료(저장,수정,삭제)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01040203/saveRentRntchrgCUD.do")
	public ModelAndView saveRentRntchrgCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01040203Service, "saveRentRntchrgCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}			
	
}
