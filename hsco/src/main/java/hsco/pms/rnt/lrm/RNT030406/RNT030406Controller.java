package hsco.pms.rnt.lrm.RNT030406;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT030406Controller.java
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
public class RNT030406Controller extends BaseContoller {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="RNT030406Service")
	RNT030406ServiceImpl rnt030406Service;

	/**
	 * 월별 자동이체 수납결과 목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt030406/selectAtcngRqestRcivList.do") 
	public ModelAndView selectAtcngRqestRcivList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(rnt030406Service, "selectAtcngRqestRcivList", xpDto, mav);		// rqestRcivList - 월별 자동이체 수납결과 목록
		execService(rnt030406Service, "selectAtcngRqestRcivSumInfo", xpDto, mav);	// rqestRcivSumList - 월별 자동이체 내역 조회
		
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
	@RequestMapping("/hsco/pms/rnt/rnt030406/uploadAtcngReqstFile.do")
	public ModelAndView uploadAtcngRqestList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030406Service, "uploadAtcngRqestList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}		

	/**
	 * 월별 자동이체 신청해지 처리 건수 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt030406/selectAtcngProcessCnt.do") 
	public ModelAndView selectAtcngProcessCnt(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(rnt030406Service, "selectAtcngProcessCnt", xpDto, mav);	// reqstCntInfo - 월별 자동이체 신청해지 처리 건수 조회
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}		
	
	
}
