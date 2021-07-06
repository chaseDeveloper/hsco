package hsco.pms.sls.lad.std.SLS070102;

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
 * @Class Name   	: SLS000100Controller.java
 * @Description  	: 토지상세정보를 관리하는 컨트롤러 
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
 *  2015.08.17.		이상준			Re-Work
 * </pre>  
 */
@Controller
public class SLS070102Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS070102Service")
	SLS070102ServiceImpl SLS070102Service;

	/**
	 * 토지 상세정보 전체 조회(납부정보, 할인정보 포함)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/selectLadDetailAllInfo.do") 
	public ModelAndView selectLadDetailAllInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS070102Service, "selectLadDetailAllInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지 상세정보 주소(소재지, 소재지지번)조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/selectLadDetailAddrList.do") 
	public ModelAndView selectLadDetailAddrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS070102Service, "selectLadDetailAddrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지 상세정보 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/saveLadDetailInfo.do") 
	public ModelAndView saveLadDetailInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS070102Service, "saveLadDetailInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 토지 상세정보 일괄저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/saveLadDetailAllInfo.do") 
	public ModelAndView saveLadDetailAllInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS070102Service, "saveLadDetailAllInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 토지 상세정보 일괄저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/saveLadDetailInfoBatch.do") 
	public ModelAndView saveLadDetailInfoBatch(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS070102Service, "saveLadDetailInfoBatch", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	
	/**
	 * 토지 상세정보 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/deleteLadDetailInfo.do") 
	public ModelAndView deleteLadDetailInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS070102Service, "deleteLadDetailInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}
	
	/**
	 * 토지 상세정보 주소(소재지, 소재지지번)일괄저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/saveLadDetailAddrInfo.do") 
	public ModelAndView saveLadDetailAddrInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS070102Service, "saveLadDetailAddrInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 토지 상세정보 일괄 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/deleteLadDetailAllInfo.do") 
	public ModelAndView deleteLadDetailAllInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS070102Service, "deleteLadDetailAllInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}
	
	/**
	 * 선택(체크) 토지 상세정보 일괄 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/deleteLadDetailCheckedInfo.do") 
	public ModelAndView deleteLadDetailCheckedInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS070102Service, "deleteLadDetailCheckedInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}
	
	/**
	 * 토지 상세 첨부파일 정보 수정(삭제)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/deleteLadDetailFileInfo.do") 
	public ModelAndView deleteLadDetailFileInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS070102Service, "deleteLadDetailFileInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}
	
	/**
	 * 토지 상세 첨부파일 정보 수정(삭제)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/atchCUD.do") 
	public ModelAndView atchCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS070102Service, "atchCUD", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}	
	
	/**
	 * 물품코드 사진 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
//	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/getList2.do") 
//	public ModelAndView getList2(NexacroMapDTO xpDto, Model model) throws Exception {
//		log.debug("토지상세조회 파일 조회 ----------------------------------------------------!");
//		ModelAndView mav = new ModelAndView("nexacroMapView");
//		
//		execService(SLS070102Service, "getList2", xpDto, mav);
//		
//		mav.addObject(NexacroConstant.ERROR_CODE, "0");
//		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		
//
//		return mav;
//		
//	}
	
	/**
	 * 토지 납부정보 목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/sls/lad/std/SLS070102/getMultiFileList.do") 
	public ModelAndView getMultiFileList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS070102Service, "getMultiFileList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/* 첨부파일 삭제 */
	@RequestMapping("hsco/pms/sls/lad/std/SLS070102/atchDelete.do")
	public ModelAndView atchDelete(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS070102Service, "atchDelete", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}		
	
	/**
	 * 토지 납부정보 목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/selectLadPayInfoList.do") 
	public ModelAndView selectLadPayInfoList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS070102Service, "selectLadPayInfoList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지 납부정보 급지적용 처리용 목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/selectLadPayInfoClass.do") 
	public ModelAndView selectLadPayInfoClass(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS070102Service, "selectLadPayInfoClass", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지 납부정보 급지적용 처리
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/createLadPayInfoClass.do") 
	public ModelAndView createLadPayInfoClass(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS070102Service, "createLadPayInfoClass", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지 납부정보 저장 처리
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/std/SLS070102/saveLadPayInfo.do") 
	public ModelAndView saveLadPayInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS070102Service, "saveLadPayInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
}
