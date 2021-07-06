package hsco.pms.sls.hou.ctr.SLS020101;

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
 * @Class Name   	: SLS020101Controller.java
 * @Description  	: 
 * @author       	: 최승락
 * @since        	: 2015. 8.17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 17.		 최승락			최초생성
 * </pre>  
 */
@Controller
public class SLS020101Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS020101Service")
	SLS020101ServiceImpl SLS020101Service;
	
	/**
	 * 사용자콤보 주택코드 조회영역
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/houseCodeSh.do")
	public ModelAndView houseCodeSh(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택코드 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020101Service, "houseCodeSh", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
		
	/**
	 * 평형코드 조회영역
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/pyeongSh.do")
	public ModelAndView pyeongSh(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("평형코드 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020101Service, "pyeongSh", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	/**
	 * 계약목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectHcntrctrList.do")
	public ModelAndView selectHcntrctrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("계약목록 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectHcntrctrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 계약상세 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectHcntrctrInfo.do")
	public ModelAndView selectHcntrctrInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("계약상세 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectHcntrctrInfo", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
    /**
     * 계약상세 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/saveHcntrctrInfo.do")
	public ModelAndView saveHcntrctrInfo(NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("계약상세 저장----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020101Service, "saveHcntrctrInfo", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}
    
    /**
     * 계약상세 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/deleteHcntrctrInfo.do")
	public ModelAndView deleteHcntrctrInfo(NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("계약상세 삭제----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020101Service, "deleteHcntrctrInfo", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}
    
    //첨부파일 삭제
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/deleteFileInfo.do")
	public ModelAndView deleteFileInfo(NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("첨부파일 삭제----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020101Service, "deleteFileInfo", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	} 
    
    /**
     * 납부코드 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectHouPayCodeList.do")
	public ModelAndView selectHouPayCodeList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("납부코드 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020101Service, "selectHouPayCodeList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}

    
    /**
     * 기준정보 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectHouPayBaisList.do")
	public ModelAndView selectHouPayBaisList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("기준정보 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020101Service, "selectHouPayBaisList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}


    /**
     * 기준정보 생성
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectCreatHouPayBaisList.do")
	public ModelAndView selectCreatHouPayBaisList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("기준정보 생성----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020101Service, "selectCreatHouPayBaisList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}
    
    
    /**
     * 기준정보 저장
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/saveHouPayBaisList.do")
	public ModelAndView saveHouPayBaisList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("기준정보 저장----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020101Service, "saveHouPayBaisList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}
    

    /**
     * 분납정보 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectInspyIntrList.do")
	public ModelAndView selectInspyIntrList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("기준정보 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020101Service, "selectInspyIntrList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}
    

    /**
     * 분납정보 저장
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/saveInspyIntrList.do")
	public ModelAndView saveInspyIntrList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("분납정보 저장----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020101Service, "saveInspyIntrList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}
    
    /**
     * 납부금액계산 및 적용
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectInspyIntrInfo.do")
	public ModelAndView selectInspyIntrInfo (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("납부금액계산 및 적용----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020101Service, "selectInspyIntrInfo", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}
    
    
	/**
	 * 분양납부 약정사항(tabpage1) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectHcntrctrPayList.do")
	public ModelAndView selectHcntrctrPayList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("약정사항(tabpage1) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectHcntrctrPayList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	
	/**
	 * 분양전환/취소 가능 여부 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectParcelCnt.do")
	public ModelAndView selectParcelCnt(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("분양전환/취소 가능 여부 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectParcelCnt", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	
	
	/**
	 * 분양납부 약정사항(tabpage1) 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/saveLcntrctrPayPopList.do")
	public ModelAndView saveLcntrctrPayPopList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("분양납부 약정사항(tabpage1) 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "saveLcntrctrPayPopList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}

	
	
	/**
	 * 임대료 사항(tabpage3) 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/saveHcntrctrRentPayPopList.do")
	public ModelAndView saveHcntrctrRentPayPopList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("임대료 사항(tabpage3) 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "saveHcntrctrRentPayPopList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	
	/**
	 * 공유자(tabpage3) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectHcntrctrCocnrList.do")
	public ModelAndView selectHcntrctrCocnrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("공유자(tabpage3) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectHcntrctrCocnrList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	/**
	 * 공유자(tabpage3) 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/saveHcntrctrCocnrList.do")
	public ModelAndView saveHcntrctrCocnrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("공유자(tabpage3) 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "saveHcntrctrCocnrList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	
	
	/**
	 * 공유자(tabpage3) 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/deleteOneHcntrctrCocnr.do")
	public ModelAndView deleteOneHcntrctrCocnr(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("공유자(tabpage3) 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "deleteOneHcntrctrCocnr", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	
	
	
	/**
	 * 가족사항(tabpage6) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectHcntrctrFamilyList.do")
	public ModelAndView selectHcntrctrFamilyList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("가족사항(tabpage3) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectHcntrctrFamilyList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	/**
	 * 가족사항(tabpage6) 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/saveHcntrctrFamilyList.do")
	public ModelAndView saveHcntrctrFamilyList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("가족사항(tabpage6) 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "saveHcntrctrFamilyList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	/**
	 * 가족사항(tabpage6) 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/delOnehcntrctrFamily.do")
	public ModelAndView delOnehcntrctrFamily(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("가족사항(tabpage6) 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "delOnehcntrctrFamily", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	
	
	/**
	 * 사업자(tabpage7) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectHouseCstmrBsnmList.do")
	public ModelAndView selectHouseCstmrBsnmList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사업자(tabpage4) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectHouseCstmrBsnmList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
    
	/**
	 * 약정사항(tabpage4) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectVirtlAcnutList.do")
	public ModelAndView selectVirtlAcnutList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("가상계좌(tabpage4) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectVirtlAcnutList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	// 임대보증금(tabpage5) 2016.03.08
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectHcntrctrRentGtnPayList.do")
	public ModelAndView selectHcntrctrRentGtnPayList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("임대보증금(tabpage5) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectHcntrctrRentGtnPayList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	
	//임대료내역(tabpage6) 2016.03.08
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectHcntrctrRentPayList.do")
	public ModelAndView selectHcntrctrRentPayList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("임대료내역(tabpage6) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectHcntrctrRentPayList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	//공급금액정보(tabpage7) 2016.03.09
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectHcntrctrSuplyAmtList.do")
	public ModelAndView selectHcntrctrSuplyAmtList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("공급금액정보(tabpage7) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectHcntrctrSuplyAmtList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	
	/**
	 * 납부일 일괄등록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectPayList.do")
	public ModelAndView selectPayList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("납부일 일괄등록 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectPayList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 	
	
	/**
	 * 잔금납부일 일괄등록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/saveRemndrPayDe.do")
	public ModelAndView saveRemndrPayDe(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("잔금납부일 일괄등록----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "saveRemndrPayDe", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 
	
	/**
	 * 연체/선납 계산
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/houseCalList.do")
	public ModelAndView houseCalList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("연체/선납 계산 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "houseCalList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 
	
	

	/**
	 * 연체/선납 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/saveHouseCalPay.do")
	public ModelAndView saveHouseCalPay(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("연체/선납 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "saveHouseCalPay", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 
	
	
	
	/**
	 * 임대료 연체/선납 계산
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/houseRentCalList.do")
	public ModelAndView houseRentCalList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("임대료 연체/선납 계산 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "houseRentCalList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 
	
	
	/**
	 * 연체/선납 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/saveHouseRentCalPay.do")
	public ModelAndView saveHouseRentCalPay(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("임대료 연체/선납 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "saveHouseRentCalPay", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 
	
	
	/**
	 * 주택 사업자 계약자 수정
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/saveHouseLcntrctrBsnmList.do")
	public ModelAndView saveHouseLcntrctrBsnmList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("주택 사업자 계약자 수정----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "saveHouseLcntrctrBsnmList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 
	
	/**
	 * 주택 특정사업자 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectHouseLcntrctrBnsmList.do")
	public ModelAndView selectLadLcntrctrBnsmList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("주택 사업자 계약자 수정----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectHouseLcntrctrBnsmList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 
	
	
	
	/**
	 * 주택계약자 압류 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectSeizeList.do")
	public ModelAndView selectLcntrctrSeizrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("주택계약자 압류 목록 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectLcntrctrSeizrList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 
	
	
	/**
	 * 주택계약자 압류 단일 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectSeizeOne.do")
	public ModelAndView selectSeizeOne(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("주택계약자 압류 상세 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectSeizeOne", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 
	
	
	/**
	 * 주택계약자 대출 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectLonList.do")
	public ModelAndView selectLcntrctrLonList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("주택계약자 대출 목록 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectLcntrctrLonList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 
	
	
	/**
	 * 주택계약자 대출 단일 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectLonOne.do")
	public ModelAndView selectLonOne(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("주택계약자 대출 상세 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectLonOne", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 
	
	/**
	 * 주택 압류/대출 첨부파일 정보 수정
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/atchCUD.do") 
	public ModelAndView atchCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "atchCUD", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}	
	
	
	/**
	 * 주택 압류/대출 첨부파일 정보 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/atchDelete.do")
	public ModelAndView atchDelete(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("주택 압류/대출 첨부파일 정보 삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "atchDelete", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	
	
	/**
	 * 주택 압류 정보 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/saveSeizeOne.do")
	public ModelAndView saveSeizeOne(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("주택 압류 정보 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "saveSeizeOne", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}	
	
	
	/**
	 * 주택 대출 정보 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/saveLonOne.do")
	public ModelAndView saveLonOne(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("주택 대출 정보 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "saveLonOne", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	
	
	/**
	 * 주택 타입 당초금액 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectHouseTySuplyAmount.do")
	public ModelAndView selectHouseTySuplyAmount(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("주택 타입 당초금액 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectHouseTySuplyAmount", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	
	/**
	 * 주택 타입 상세정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/selectHouseTypeInfo.do")
	public ModelAndView selectHouseTypeInfo(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("주택 타입 당초금액 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "selectHouseTypeInfo", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	

	
	/**
	 * 명의변경 첨부파일 정보 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/ChangeFileDelete.do")
	public ModelAndView ChangeFileDelete(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("주택 명의변경 첨부파일 정보 삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101Service, "ChangeFileDelete", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	
	/**
     * 우편주소  저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101/saveDM.do")
	public ModelAndView saveDM(NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("우편주소 저장----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020101Service, "saveDM", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}
	    
}
