package hsco.pms.rnt.prm.RNT02030100;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   		: RNT02030100Controller.java
 * @Description  		: 계약정보관리 조회
 * @author       			: 변승우
 * @since        			: 2015. 10. 30.
 * @version      			: 1.0
 * @see          			: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 30.					변승우				최초생성
 * </pre>  
 */


@Controller
public class RNT02030100Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="RNT02030100Service")
	RNT02030100ServiceImpl RNT02030100Service;
	
	
	/**
	 * 매입임대 고객 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectPuchasRentCntrctList.do")
	public ModelAndView selectPuchasRentCntrctList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectPuchasRentCntrctList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 매입임대 고객 정보 상세사항
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectPuchasRentCntrctDetailList.do")
	public ModelAndView selectPuchasRentCntrctDetailList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectPuchasRentCntrctDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 매입임대 고객 정보 상세사항 (수정,삭제)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/savePuchasRentCntrctCUD.do")
	public ModelAndView savePuchasRentCntrctCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "savePuchasRentCntrctCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 매입임대 가족사항 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectPuchasRentCstmrFamilyList.do")
	public ModelAndView selectPuchasRentCstmrFamilyList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectPuchasRentCstmrFamilyList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 매입임대 임대료 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectPuchasRentMtRntchrgList.do")
	public ModelAndView selectPuchasRentMtRntchrgList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectPuchasRentMtRntchrgList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 매입임대 체납 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectPuchasNpymList.do")
	public ModelAndView selectPuchasNpymList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectPuchasNpymList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 매입임대 압류 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectPuchasRentGtnSeizrList.do")
	public ModelAndView selectPuchasRentGtnSeizrList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectPuchasRentGtnSeizrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 매입임대 명의 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectPuchasRentNmchangeList.do")
	public ModelAndView selectPuchasRentNmchangeList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectPuchasRentNmchangeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 매입임대 자격 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectPuchasRentQualfChangeList.do")
	public ModelAndView selectPuchasRentQualfChangeList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectPuchasRentQualfChangeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 매입임대 해약 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectPuchasRentResciList.do")
	public ModelAndView selectPuchasRentResciList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectPuchasRentResciList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	
	/**
	 * 매입임대 보증금 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectPuchasRentGtnList.do")
	public ModelAndView selectPuchasRentGtnList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectPuchasRentGtnList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	

	
	/**
	 * 매입임대 자동이체 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectAtcngList.do")
	public ModelAndView selectAtcngList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectAtcngList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 매입임대 관리비 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectPuchasRentManageCostList.do")
	public ModelAndView selectPuchasRentManageCostList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectPuchasRentManageCostList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	

	/**
	 * 매입임대 소유물건 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectPuchasRentPosesnThingList.do")
	public ModelAndView selectPuchasRentPosesnThingList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectPuchasRentPosesnThingList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 매입임대 소송 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectPuchasRentLwstList.do")
	public ModelAndView selectPuchasRentLwstList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectPuchasRentLwstList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	
	/**
	 * 매입임대 소송 정보 (저장,수정,삭제)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/savePuchasRentLwstCUD.do")
	public ModelAndView savePuchasRentLwstCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "savePuchasRentLwstCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 매입임대 재계약 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectPuchasRentReCntrctList.do")
	public ModelAndView selectGtnSportList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectPuchasRentReCntrctList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 매입임대 재계약 CUD
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/puchasReCntrctCUD.do")
	public ModelAndView rentReCntrctCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "puchasReCntrctCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 매입임대 재계약 복원
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/puchasReCntrctRevert.do")
	public ModelAndView puchasReCntrctRevert(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "puchasReCntrctRevert", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 매입임대 재계약 고지서 출력
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectReCntrctTax.do")
	public ModelAndView selectReCntrctTax(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectReCntrctTax", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 매입임대 가족사항(저장,수정,삭제)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/savePuchasRentCstmrFamilyCUD.do")
	public ModelAndView savePuchasRentCstmrFamilyCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "savePuchasRentCstmrFamilyCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 압류 CUD
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/puchasGtnSeizrCUD.do")
	public ModelAndView rentGtnSeizrCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "puchasGtnSeizrCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
	
	/* 첨부파일 저장 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/atchCUD.do")
	public ModelAndView atchCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "atchCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/* 파일순번 삭제 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/fileSnU.do")
	public ModelAndView fileSnU(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "fileSnU", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 매입임대 재계약 첨부파일 CUD
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/reCntrctAtchCUD.do")
	public ModelAndView reCntrctAtchCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "reCntrctAtchCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 매입임대 재계약 파일순번 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/reCntrctFileSnU.do")
	public ModelAndView reCntrctFileSnU(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "reCntrctFileSnU", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 매입임대 자격변경 첨부파일 CUD
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT02030100/qualfChangeAtchCUD.do")
	public ModelAndView qualfChangeAtchCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "qualfChangeAtchCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 매입임대 자격변경 파일순번 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT02030100/qualfChangeFileSnU.do")
	public ModelAndView qualfChangeFileSnU(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "qualfChangeFileSnU", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 매입임대 명의변경 첨부파일 CUD
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/nmChangeAtchCUD.do")
	public ModelAndView nmChangeAtchCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "nmChangeAtchCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 매입임대 명의변경 파일순번 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/nmChangeFileSnU.do")
	public ModelAndView nmChangeFileSnU(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "nmChangeFileSnU", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 매입임대 동호변경 첨부파일 CUD
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/houseChangeAtchCUD.do")
	public ModelAndView houseChangeAtchCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "houseChangeAtchCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 매입임대 동호변경 파일순번 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/houseChangeFileSnU.do")
	public ModelAndView houseChangeFileSnU(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "houseChangeFileSnU", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 매입임대 해약처리 첨부파일 CUD
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/resciAtchCUD.do")
	public ModelAndView resciAtchCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "resciAtchCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 매입임대 해약처리 파일순번 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/resciFileSnU.do")
	public ModelAndView resciFileSnU(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "resciFileSnU", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 미납금액 목록(공제액)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/selectNonPaymentList.do")
	public ModelAndView selectNonPaymentList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "selectNonPaymentList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 계약취소 확인(수납건 확인)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/puchasRentCntrctCancelCheck.do")
	public ModelAndView rentCntrctCancelCheck(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "puchasRentCntrctCancelCheck", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 계약취소
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030100/puchasRentCntrctCancel.do")
	public ModelAndView rentCntrctCancel(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02030100Service, "puchasRentCntrctCancel", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
