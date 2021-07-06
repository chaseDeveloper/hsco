package hsco.mis.cus.CUS020102;

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


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CUS020102Controller.java
 * @Description  	: 오프라인민원을 관리하는 컨트롤러 클래스
 * @author       	: 김병진
 * @since        	: 2015. 8. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 18.	     김병진		      최초생성
 * </pre>  
 */

@Controller
public class CUS020102Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="CUS020102Service")
	CUS020102ServiceImpl CUS020102Service;

	/**
	 * 오프라인 민원 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/cus/CUS020102/selectOfflineCvplList.do") 
	public ModelAndView selectOfflineCvplList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("코드 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(CUS020102Service, "selectOfflineCvplList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
		
	/**
	 * 오프라인민원 목록 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/cus/CUS020102/offlineCvplListCUD.do")
	public ModelAndView offlineCvplListCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("오프라인민원 관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
			execService(CUS020102Service, "offlineCvplListCUD", xpDto, mav);

			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
/**
    * 내부결재레포트용데이터셋 목록 조회
    * @param xpDto
    * @param model
    * @return 
    * @throws Exception
    */
   @RequestMapping("hsco/mis/cus/CUS020102/innerSanctnUbiDataset.do") 
   public ModelAndView innerSanctnUbiDataset(NexacroMapDTO xpDto, Model model) throws Exception {
       
       log.debug("내부결재레포트용데이터셋 목록 리스트 ----------------------------------------------------!");
       ModelAndView mav = new ModelAndView("nexacroMapView");
   
       execService(CUS020102Service, "innerSanctnUbiDataset", xpDto, mav );

       mav.addObject(NexacroConstant.ERROR_CODE, "0");
       mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
       
       return mav;
   } 
   
   /**
    * 내부결재 최초 진행여부체크
    * @param xpDto
    * @param model
    * @return ModelAndView
    * @throws Exception
    */
   @RequestMapping("/hsco/mis/cus/CUS020102/selectInnerSanctnMasterCheck.do") 
   public ModelAndView selectInnerSanctnMasterCheck(NexacroMapDTO xpDto, Model model) throws Exception {
       
       log.debug("내부결재 최초 진행여부체크 ----------------------------------------------------!");
       ModelAndView mav = new ModelAndView("nexacroMapView");

       execService(CUS020102Service, "selectInnerSanctnMasterCheck", xpDto, mav );

       mav.addObject(NexacroConstant.ERROR_CODE, "0");
       mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
       
       return mav;
       
   }
   
	/**
	 * 업로드 파일 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/cus/CUS020102/selectAtchmnFileList.do") 
	public ModelAndView atchmnFileList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("코드 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(CUS020102Service, "atchmnFileList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}   

	/**
	 * 내부결재 번호 업데이트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/cus/CUS020102/innerSanctU.do") 
	public ModelAndView innerSanctU(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("내부결재 번호 업데이트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CUS020102Service, "innerSanctU", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}   
}
