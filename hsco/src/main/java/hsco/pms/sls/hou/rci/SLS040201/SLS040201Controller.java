package hsco.pms.sls.hou.rci.SLS040201;

import java.io.File;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.pms.sls.com.SLS000000.SLS000000ServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS040201Controller.java
 * @Description  	: 이율 관리하는 컨트롤러 
 * @author       	: 이인성
 * @since        	: 2015. 6.11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        	작성자                	내용
 * ------------------------------------------------------------------
 *  2015. 6.11.		이인성			최초생성
 *  2015.09.15.		이상준			Re-Work
 * </pre>  
 */
@Controller
public class SLS040201Controller extends BaseContoller{
	
	@Resource(name="SLS040201Service")
	SLS040201ServiceImpl SLS040201Service;
	
	@Resource(name="SLS000000Service")
	SLS000000ServiceImpl SLS000000Service;

	/**
	 * 화면 기초정보 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040201/selectInitInfo.do") 
	public ModelAndView selectInitInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS040201Service, "selectBankCodeList", xpDto, mav);	// 은행목록 - bankCode
		execService(SLS000000Service, "selectHouseCodeList", xpDto, mav);	// 주택코드 조회 - houseCode
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 월별 자동이체 신청해지 결과 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040201/selectAtcngReqstList.do") 
	public ModelAndView selectAtcngRqestList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS040201Service, "selectAtcngReqstSumInfo", xpDto, mav);	// reqstSumInfo - 월별 자동이체 신청해지 결과 내역
		execService(SLS040201Service, "selectAtcngReqstList", xpDto, mav);		// reqstList - 월별 자동이체 신청해지 결과 목록 조회
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 월별 자동이체 신청해지 처리 건수 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040201/selectAtcngProcessCnt.do") 
	public ModelAndView selectAtcngProcessCnt(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS040201Service, "selectAtcngProcessCnt", xpDto, mav);	// reqstCntInfo - 월별 자동이체 신청해지 처리 건수 조회
		
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
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040201/uploadAtcngReqstFile.do")
	public ModelAndView uploadAtcngReqstFile(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS040201Service, "uploadAtcngRqestFile", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 월별 자동이체 신청해지 적용처리
	 *  - 자동이체 신청해지 정보를 적용처리 한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040201/saveAtcngRqestApplyInfo.do")
	public ModelAndView saveAtcngRqestApplyInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS040201Service, "saveAtcngRqestApplyInfo", xpDto, mav);
		
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
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040201/downloadAtcngReqstFile.do")
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
		
			inReqstYm = (String)inMap.get("REQST_YM");	// 신청월
			inFileName = (String)inMap.get("FILE_NM");	// 파일명
			downFileName = inFileName == null ? "ST31" + inReqstYm.substring(4, 6) + ".txt" : inFileName;
    	}
		
    	// 파일명을 조건에 추가
    	
    	try{
    		
    		File AtcngReqstFile = SLS040201Service.getAtcngReqstFile(xpDto);
		
    		if(AtcngReqstFile == null){
    			throw new NexaServiceException("err.파일.다운로드.실패");
    		}
		
			xpDto.getRequest().setAttribute("downFileName", downFileName);
			
			mav.setViewName("download");
			mav.addObject("downloadFile", AtcngReqstFile);
		
    	}catch(Exception ex){
    		mav.setViewName("nexacroMapView");
    		throw ex;
    	}
		
		return mav;
	}
	
	/**
	 * 월별 자동이체 신청해지 상세 목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040201/selectAtcngReqstDetList.do")
	public ModelAndView selectAtcngReqstDetList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS040201Service, "selectAtcngReqstDetList", xpDto, mav);	// reqstDetList - 월별 자동이체 신청해지 상세 목록 조회
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
}
