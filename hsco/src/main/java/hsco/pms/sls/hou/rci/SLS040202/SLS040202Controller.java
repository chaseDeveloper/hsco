package hsco.pms.sls.hou.rci.SLS040202;

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
 * @Class Name   	: SLS040202Controller.java
 * @Description  	: 자동이체청구생성(공사->은행) Controller
 * @author       	: 정윤원
 * @since        	: 2015. 11.05
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 
 * </pre>  
 */
@Controller
public class SLS040202Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS040202Service")
	SLS040202ServiceImpl SLS040202Service;

	/**
	 * 자동이체청구대상 등록 여부 체크
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040202/selectAtcngRqestCnt.do")
	public ModelAndView selectAtcngRqestCnt(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("자동이체청구대상 등록 여부 체크~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectAtcngRqestCnt");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS040202Service, "selectAtcngRqestCnt", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	
	/**
	 * 자동이체청구 수납 조회(기존 등록된 데이터가 있는경우조회)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040202/selectAtcngRqestList.do")
	public ModelAndView selectAtcngRqestList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("자동이체청구 수납 조회 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectAtcngRqestList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS040202Service, "selectAtcngRqestList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	
	
	/**
	 * 자동이체청구 대상(납부,주택결제) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040202/selectAtcngRqestTrgetList.do")
	public ModelAndView selectAtcngRqestTrgetList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("자동이체청구 대상(납부,주택결제) 조회 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectAtcngRqestTrgetList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS040202Service, "selectAtcngRqestTrgetList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	
	/**
	 * 자동이체 청구대상 신규 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040202/insertAtcngRqestTrgetList.do")
	public ModelAndView insertAtcngRqestTrgetList(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("##########################################################################[RUN]insertAtcngRqestTrgetList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS040202Service, "insertAtcngRqestTrgetList", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상등록");
			
		return mav;
	}	
	
	
	
	/**
	 * 월별 자동이체청구대상 결과 파일 다운로드
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040202/downloadAtcngReqstFile.do")
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
			downFileName = inFileName == null ? "D43" + inReqstYm + ".txt" : inFileName;
    	}
		
    	// 파일명을 조건에 추가
    	
    	try{
    		
    		File AtcngReqstFile = SLS040202Service.getAtcngReqstFile(xpDto);
		
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
	
	
	
	
	
}
