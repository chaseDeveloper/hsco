package hsco.pms.com.PMS000001;

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
 * @Class Name   	: PMS000001Controller.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 11. 4.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 9.					   이광원				최초생성
 * </pre>  
 */
@Controller
public class PMS000001Controller extends BaseContoller {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="PMS000001Service")
	PMS000001ServiceImpl PMS000001Service;
	
	/**
	 * 월별 자동이체 신청해지 결과 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/PMS000001/selectAtcngReqstList.do") 
	public ModelAndView selectAtcngRqestList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(PMS000001Service, "selectAtcngReqstSumInfo", xpDto, mav);	// reqstSumInfo - 월별 자동이체 신청해지 결과 내역
		execService(PMS000001Service, "selectAtcngReqstList", xpDto, mav);		// reqstList - 월별 자동이체 신청해지 결과 목록 조회
		
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
	@RequestMapping("/hsco/pms/com/PMS000001/selectAtcngProcessCnt.do") 
	public ModelAndView selectAtcngProcessCnt(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(PMS000001Service, "selectAtcngProcessCnt", xpDto, mav);	// reqstCntInfo - 월별 자동이체 신청해지 처리 건수 조회
		
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
	@RequestMapping("/hsco/pms/com/PMS000001/uploadAtcngReqstFile.do")
	public ModelAndView uploadAtcngRqestList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(PMS000001Service, "uploadAtcngRqestList", xpDto, mav);
		
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
	@RequestMapping("/hsco/pms/com/PMS000001/downloadAtcngReqstFile.do")
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
    	
    	
		File AtcngReqstFile = PMS000001Service.getAtcngReqstFile(xpDto);
		
		if(AtcngReqstFile == null){
			throw new NexaServiceException("err.파일.다운로드.실패");
		}
		
		xpDto.getRequest().setAttribute("downFileName", downFileName);
		
		mav.setViewName("download");
		mav.addObject("downloadFile", AtcngReqstFile);
		
		return mav;
	}	
	
	/**
	 * 월별 자동이체 신청해지 정보를 전세자동이체정보로 입력 및 신청결과등록.
	 *  
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/PMS000001/listCUD.do")
	public ModelAndView listCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("자동이체신청 등록 및 신청결과 등록 프로시저----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(PMS000001Service, "listCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		}	
	
	
}
