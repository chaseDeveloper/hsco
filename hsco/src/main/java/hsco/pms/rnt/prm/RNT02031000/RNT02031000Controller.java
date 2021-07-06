package hsco.pms.rnt.prm.RNT02031000;

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
 * @Class Name   		: RNT02031000Controller.java
 * @Description  		: 매입임대 주택소유
 * @author       			: 변승우
 * @since        			: 2015. 11. 26.
 * @version      			: 1.0
 * @see          			: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 26.					변승우				최초생성
 * </pre>  
 */


@Controller
public class RNT02031000Controller extends BaseContoller{
	@Resource(name="RNT02031000Service")
	RNT02031000ServiceImpl RNT02031000Service;


	/**
	 * 소유물건정보 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02031000/rentPosesnThingPopList.do")
	public ModelAndView rentPosesnThingPopList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02031000Service, "rentPosesnThingPopList", xpDto, mav);		// 소유물건정보 목록

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


	/**
	 * 	
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02031000/downloadFile.do")
	public ModelAndView downloadFile(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView();

		String downFileName = "주택소유조회결과.txt";
		File AtcngReqstFile = RNT02031000Service.getDownloadFile(xpDto);			// 주택소유조회결과 파일다운로드

		if(AtcngReqstFile == null){
			throw new NexaServiceException("err.파일.다운로드.실패");
		}

		xpDto.getRequest().setAttribute("downFileName", downFileName);

		mav.setViewName("download");
		mav.addObject("downloadFile", AtcngReqstFile);

		return mav;
	}
}
