package hsco.pms.rnt.pra.RNT01051401;

import java.io.File;
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
 * @Class Name   	: RNT01051401Controller.java
 * @Description  	: 자동이체 신청등록정보
 * @author       	: 김지훈
 * @since        	: 2015. 12. 21.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 21.					김지훈			최초생성
 * </pre>  
 */
@Controller
public class RNT01051401Controller extends BaseContoller{
	@Resource(name="RNT01051401Service")
	RNT01051401ServiceImpl RNT01051401Service;
	
	/**
	 * 자동이체 신청정보 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01051401/selectAtcngReqstTrmnatList.do")
	public ModelAndView selectAtcngReqstTrmnatList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01051401Service, "selectAtcngReqstTrmnatList", xpDto, mav);
		execService(RNT01051401Service, "selectAtcngReqstTrmnatListCnt", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 자동이체 기정보 체크
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01051401/selectAtcngReqstCntChck.do")
	public ModelAndView selectAtcngReqstCntChck(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01051401Service, "selectAtcngReqstCntChck", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 월별 자동이체 신청해지 파일을 업로드한다.
	 *  - 파일의 내용을 데이터로 변환하여 반환한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01051401/uploadAtcngReqstFile.do")
	public ModelAndView uploadAtcngReqstFile(NexacroMapDTO xpDto, Model model) throws Exception {


		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01051401Service, "uploadAtcngRqestList", xpDto, mav);
		
		//execService(RNT01051401Service, "selectAtcngReqstTrmnatList", xpDto, mav);
		//execService(RNT01051401Service, "selectAtcngReqstTrmnatListCnt", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 월별 자동이체 신청/해지 정보를 자동이체정보로 입력 및 신청결과등록.
	 *  
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01051401/saveAtcngReqstTrmnat.do")
	public ModelAndView saveAtcngReqstTrmnat(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01051401Service, "saveAtcngReqstTrmnat", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		}	

	/**
	 * 월별 자동이체 신청해지 결과 파일 다운로드
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01051401/downloadAtcngReqstFile.do")
	@SuppressWarnings({"rawtypes"})
	public ModelAndView downloadAtcngRqestList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView();
		
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
    	String inReqstYm = null;
    	String inFileName = null;
    	String downFileName = null;
    	
    	
    	if (inDsMap != null){
			inMap = inDsMap.get(0);
		
			inReqstYm = (String)inMap.get("monCal");	// 신청월
			inFileName = (String)inMap.get("FILE_NM");	// 파일명
			downFileName = inFileName == null ? "ST31" + inReqstYm.substring(4, 6) + ".txt" : inFileName;
    	}
		
    	// 파일명을 조건에 추가
    	
    	
		File AtcngReqstFile = RNT01051401Service.getAtcngReqstFile(xpDto);
		
		if(AtcngReqstFile == null){
			throw new NexaServiceException("err.파일.다운로드.실패");
		}
	
		xpDto.getRequest().setAttribute("downFileName", downFileName);
		
		mav.setViewName("download");
		mav.addObject("downloadFile", AtcngReqstFile);
		
		return mav;
	}	
}
