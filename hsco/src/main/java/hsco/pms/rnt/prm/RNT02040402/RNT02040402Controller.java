package hsco.pms.rnt.prm.RNT02040402;

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
import hsco.pms.rnt.prm.RNT02040401.RNT02040401ServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT02040402Controller.java
 * @Description  	: 자동이체출금의뢰
 * @author       	: 변승우
 * @since        	: 2015. 12. 30.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 30.					변승우				최초생성
 * </pre>  
 */


@Controller
public class RNT02040402Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="RNT02040402Service")
	RNT02040402ServiceImpl RNT02040402Service;

	
	/**
	 * 매입임대 자동이체 신청 현황 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040402/selectAtcngRqestRcivList.do")
	public ModelAndView selectAtcngReqstTrmnatList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040402Service, "selectAtcngRqestRcivList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}


	/**
	 * 매입임대 자동이체 청구자료 생성
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040402/saveSlaryCUD.do")
	public ModelAndView saveSlaryCUD(NexacroMapDTO xpDto, Model model)throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040402Service, "saveSlaryCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 매입임대 자동이체 청구화일변환
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040402/downloadAtcngReqstFile.do")
	@SuppressWarnings({"rawtypes"})
	public ModelAndView downloadAtcngReqstFile(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView();
		
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
    	String inReqstYm = null;
    	String inFileName = null;
    	String downFileName = null;
    	if (inDsMap != null){
			inMap = inDsMap.get(0);
		
			inReqstYm =  (String)inMap.get("DEFRAY_YM");	// 신청월
			inFileName = (String)inMap.get("FILE_NM");	// 파일명
			downFileName = inFileName == null ? "ST31" + inReqstYm.substring(4, 6) + ".txt" : inFileName;
    	}
		
    	// 파일명을 조건에 추가
    	
    	
		File AtcngReqstFile = RNT02040402Service.getAtcngReqstFile(xpDto);
		
		if(AtcngReqstFile == null){
			throw new NexaServiceException("err.파일.다운로드.실패");
		}
		
		xpDto.getRequest().setAttribute("downFileName", downFileName);
		
		mav.setViewName("download");
		mav.addObject("downloadFile", AtcngReqstFile);
		
		return mav;
	}	
	
	
	/**
	 * 매입임대 자동이체 청구자료 생성 후 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040402/selectAutopayDemandList.do")
	public ModelAndView selectAutopayDemandList(NexacroMapDTO xpDto, Model model)throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040402Service, "selectAutopayDemandList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}

}
