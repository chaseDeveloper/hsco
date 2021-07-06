package hsco.pms.sls.hou.ctr.SLS020208;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
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
import hsco.cmm.sanc.SancServiceImpl;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS020208Controller.java
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
public class SLS020208Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS020208Service")
	SLS020208ServiceImpl SLS020208Service;
	
	@Resource(name="SancService")
	SancServiceImpl sancService;	
	
	/**
	 * 사용자콤보 주택코드 조회영역
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/houseCodeSh.do")
	public ModelAndView houseCodeSh(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택코드 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020208Service, "houseCodeSh", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/pyeongSh.do")
	public ModelAndView pyeongSh(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("평형코드 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020208Service, "pyeongSh", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHcntrctrList.do")
	public ModelAndView selectHcntrctrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("계약목록 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectHcntrctrList", xpDto, mav);
		
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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHcntrctrInfo.do")
	public ModelAndView selectHcntrctrInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("계약상세 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectHcntrctrInfo", xpDto, mav);

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
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/saveHcntrctrInfo.do")
	public ModelAndView saveHcntrctrInfo(NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("계약상세 저장----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020208Service, "saveHcntrctrInfo", xpDto, mav);
    	
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
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/deleteHcntrctrInfo.do")
	public ModelAndView deleteHcntrctrInfo(NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("계약상세 삭제----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020208Service, "deleteHcntrctrInfo", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}
    
  //첨부파일 삭제
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/deleteFileInfo.do")
	public ModelAndView deleteFileInfo(NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("첨부파일 삭제----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020208Service, "deleteFileInfo", xpDto, mav);
    	
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
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHouPayCodeList.do")
	public ModelAndView selectHouPayCodeList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("납부코드 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020208Service, "selectHouPayCodeList", xpDto, mav);
    	
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
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHouPayBaisList.do")
	public ModelAndView selectHouPayBaisList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("기준정보 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020208Service, "selectHouPayBaisList", xpDto, mav);
    	
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
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectCreatHouPayBaisList.do")
	public ModelAndView selectCreatHouPayBaisList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("기준정보 생성----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020208Service, "selectCreatHouPayBaisList", xpDto, mav);
    	
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
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/saveHouPayBaisList.do")
	public ModelAndView saveHouPayBaisList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("기준정보 저장----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020208Service, "saveHouPayBaisList", xpDto, mav);
    	
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
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectInspyIntrList.do")
	public ModelAndView selectInspyIntrList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("기준정보 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020208Service, "selectInspyIntrList", xpDto, mav);
    	
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
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/saveInspyIntrList.do")
	public ModelAndView saveInspyIntrList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("분납정보 저장----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020208Service, "saveInspyIntrList", xpDto, mav);
    	
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
    @RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectInspyIntrInfo.do")
	public ModelAndView selectInspyIntrInfo (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("납부금액계산 및 적용----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS020208Service, "selectInspyIntrInfo", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}
    
	/**
	 * 임대료 약정사항(tabpage8) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHcntrctrRentPay.do")
	public ModelAndView selectHcntrctrRentPay(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("임대료(tabpage8) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectHcntrctrRentPay", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHcntrctrPayList.do")
	public ModelAndView selectHcntrctrPayList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("약정사항(tabpage1) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectHcntrctrPayList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}

	
	/**
	 * 공유자(tabpage2) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHcntrctrCocnrList.do")
	public ModelAndView selectHcntrctrCocnrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("공유자(tabpage2) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectHcntrctrCocnrList", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHouseCstmrBsnmList.do")
	public ModelAndView selectHouseCstmrBsnmList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사업자(tabpage4) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectHouseCstmrBsnmList", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectVirtlAcnutList.do")
	public ModelAndView selectVirtlAcnutList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("가상계좌(tabpage4) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectVirtlAcnutList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	// 임대보증금(tabpage5) 2016.03.08
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHcntrctrRentGtnPayList.do")
	public ModelAndView selectHcntrctrRentGtnPayList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("임대보증금(tabpage5) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectHcntrctrRentGtnPayList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	
	//임대료내역(tabpage6) 2016.03.08
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHcntrctrRentPayList.do")
	public ModelAndView selectHcntrctrRentPayList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("임대료내역(tabpage6) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectHcntrctrRentPayList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	}
	
	//공급금액정보(tabpage7) 2016.03.09
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHcntrctrSuplyAmtList.do")
	public ModelAndView selectHcntrctrSuplyAmtList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("공급금액정보(tabpage7) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectHcntrctrSuplyAmtList", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/saveRemndrPayDe.do")
	public ModelAndView saveRemndrPayDe(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("잔금납부일 일괄등록----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "saveRemndrPayDe", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/LadCalList.do")
	public ModelAndView LadCalList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("잔금납부일 일괄등록----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "LadCalList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 
	
	/**
	 * 전대목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHouseSublsList.do")
	public ModelAndView selectHouseSublsList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectHouseSublsList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 전대목록 CUD
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/houseSublsCUD.do")
	public ModelAndView houseSublsCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "houseSublsCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 전대정보 모두 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/deleteAllSublsList.do")
	public ModelAndView deleteAllSublsList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "deleteAllSublsList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}

	/**
	 * 주택 코드 명의변경 신청서
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectNmchangeReqstdoc.do")
	public ModelAndView selectNmchangeReqstdoc(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectNmchangeReqstdoc", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 주택분양전환조회영역 조회영역
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/changeHouseList.do")
	public ModelAndView changeHouseList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 분양전환조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020208Service, "changeHouseList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}	
	
	/**
	 * 타입코드 적용
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/typeCodeUpdate.do")
	public ModelAndView typeCodeUpdate(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("타입코드 적용 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020208Service, "typeCodeUpdate", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}	
	
	/**
	 * 타입코드 복원
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/typeCodeCancle.do")
	public ModelAndView typeCodeCancle(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("타입코드 복원 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020208Service, "typeCodeCancle", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}	
		

	/**
	 * 임대주택 분양전환  프로시저 호출
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/SPSLS_HOUSE_270_SR_CHANGE.do")
	public ModelAndView SPSLS_HOUSE_270_SR_CHANGE(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("임대주택 분양전환 프로시저 호출----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020208Service, "SPSLS_HOUSE_270_SR_CHANGE", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}		
	
	/**
	 * 임대주택 분양전환 취소 프로시저 호출
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/SPSLS_HOUSE_270_SR_CANCEL.do")
	public ModelAndView SPSLS_HOUSE_270_SR_CANCEL(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("임대주택 분양전환 취소 프로시저 호출----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020208Service, "SPSLS_HOUSE_270_SR_CANCEL", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}	
	
	/**
	 * 주택계약자 해약 리스트 조회(공통)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHouseCancelList.do")
	public ModelAndView selectHouseCancelList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택계약자 해약 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHouseCancelList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020208Service, "selectHouseCancelList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}	
	
	/**
	 * 주택계약 해약(분양) 반환금 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHouseLttotCancelReturnAmtList.do")
	public ModelAndView selectHouseCancelReturnAmtList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 계약 해약(분양) 반환금 조회 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHouseLttotCancelReturnAmtList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020208Service, "selectHouseLttotCancelReturnAmtList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	/**
	 * 주택계약자 압류정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHcntrctrSeizrInfo.do")
	public ModelAndView selectHcntrctrSeizrInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 계약자 압류정보 조회 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHcntrctrSeizrInfo");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020208Service, "selectHcntrctrSeizrInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	/**
	 * 주택분양 이율정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectLttotRatioInfo.do")
	public ModelAndView selectLttotRatioInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 분양 이율정보조회 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectLttotRatioInfo");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020208Service, "selectLttotRatioInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	/**
	 * 주택계약자 해약정보(분양) 저장(신규 등록)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/saveHouseCancelInfo.do")
	public ModelAndView saveHouseCancelInfo(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("####################################################[RUN]saveHouseCancelInfo");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020208Service, "saveHouseCancelInfo", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상등록");
			
		return mav;
	}	
	

	/**
	 * 주택계약 해약 리스트 조회(임대)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHouseRentCancelList.do")
	public ModelAndView selectHouseRentCancelList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("임대 주택 계약 해약 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHouseRentCancelList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020208Service, "selectHouseRentCancelList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	/**
	 * 주택임대 이율정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectRentRatioInfo.do")
	public ModelAndView selectRentRatioInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 임대 이율정보조회 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectRentRatioInfo");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020208Service, "selectRentRatioInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	/**
	 * 주택계약 해약(임대) 반환금 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHouseCancelRentReturnAmtList.do")
	public ModelAndView selectHouseCancelRentReturnAmtList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 계약 해약(임대) 반환금 조회 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHouseCancelRentReturnAmtList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020208Service, "selectHouseCancelRentReturnAmtList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	/**
	 * 주택계약 해약(임대) 납부 보증금 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectRenLttotPayList.do")
	public ModelAndView selectRenLttotPayList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 계약 해약(임대) 납부 보증금 조회 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectRenLttotPayList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020208Service, "selectRenLttotPayList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	/**
	 * 주택계약자 해약정보(임대) 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/saveHouseRentCancelInfo.do")
	public ModelAndView saveHouseRentCancelInfo(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("주택임대 해약정보 저장##########################################[RUN]saveHouseRentCancelInfo");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020208Service, "saveHouseRentCancelInfo", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상처리");
			
		return mav;
	}	
	/**
	 * 주택계약 해약정보(임대) -시설점검의뢰 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectRentCancelChckReqestInfo.do")
	public ModelAndView selectRentCancelChckReqestInfo(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("주택임대 해약 시설점검의뢰 조회##########################################[RUN]selectRentCancelChckReqestInfo");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020208Service, "selectRentCancelChckReqestInfo", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상처리");
			
		return mav;
	}	
	
	/**
	 * 주택계약 해약정보(임대) -시설점검의뢰 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/saveRentCancelChckReqestInfo.do")
	public ModelAndView saveRentCancelChckReqestInfo(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("주택임대 해약 시설점검의뢰 조회##########################################[RUN]saveRentCancelChckReqestInfo");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020208Service, "saveRentCancelChckReqestInfo", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상처리");
			
		return mav;
	}		

	/**
	 * 주택계약 해약정보(임대) -시설점검 통보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectRentCancelChckDspthInfo.do")
	public ModelAndView selectRentCancelChckDspthInfo(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("주택임대 해약 시설점검통보 조회##########################################[RUN]selectRentCancelChckDspthInfo");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020208Service, "selectRentCancelChckDspthInfo", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상처리");
			
		return mav;
	}
	

	/**
	 * 전자결제번호 입력 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/approveU.do")
	public ModelAndView approveU(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("전자결제번호 입력  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }
        
        String DIV_SE = map.get("DIV_SE").toString();
        System.out.println("DIV_SE ==============================> " + DIV_SE);
        map.put("DIV",     DIV_SE);      // 계약해제(임대) : 545, 해약세대점검의뢰서 : 513

        // 자동 데이터 세팅(Key 채번)
        StringBuffer buffer = new StringBuffer();
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy");
        String yyyy = dayTime.format(new Date(time));
        Integer keySeq = sancService.selectSeqKey();
        buffer.append("SLS");
        buffer.append("_");
        buffer.append(yyyy);
        buffer.append(StringUtil.lpad(keySeq.toString(), '0', 6));
        String key = buffer.toString();
        map.put("KEY", key);

        String title = StringUtil.nvl((String)map.get("DATA_TITLE"));
        String value = StringUtil.nvl((String)map.get("DATA_VALUE"));
        String data_value = title + "|" + key + "|" + value;
        map.put("DATA_VALUE", data_value);

        Map resultMap = sancService.requestApproval(map);
        
        System.out.println("resultMap ==============================> " + resultMap);
        
        map.put("O_URL", resultMap.get("O_URL"));		
        
        if("513".equals(DIV_SE)){ //시설점검의뢰
        	execService(SLS020208Service, "approveU2", xpDto, mav);
        } else if ("SLS3003".equals(DIV_SE)) {
        	execService(SLS020208Service, "approveFclts", xpDto, mav);
        } else{
        	execService(SLS020208Service, "approveU", xpDto, mav);
        }
		

		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	/**
	 * 납입기한 날짜계산
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectCountDate.do")
	public ModelAndView selectCountDate(NexacroMapDTO xpDto, Model model) throws Exception {	
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectCountDate", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

	/**
	 * 전세분양전환기본정보조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectChangeInfo.do")
	public ModelAndView selectChangeInfo(NexacroMapDTO xpDto, Model model) throws Exception {	
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectChangeInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 전세주택 분양전환 및 취
소 프로시저 호출
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/SPSLS_HOUSE_SR_CHANGE_JUN.do")
	public ModelAndView SPSLS_HOUSE_SR_CHANGE_JUN(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("전세주택 분양전환 및 취소 프로시저 호출----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020208Service, "SPSLS_HOUSE_SR_CHANGE_JUN", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}		
		
	
	/**
	 * 주택코드 콤보 리스트 : 해당내용 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/cmbHouseCodeList.do")
	public ModelAndView cmbHouseCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("[RUN]cmbHouseCodeList :: 주택코드 콤보 리스트 ::---------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "cmbHouseCodeList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회"); 
		
		return mav;
	}	
	
	
	
	
	/**
	 * 주택계약자변경 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHcntrctrChangeList.do")
	public ModelAndView selectHcntrctrChangeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택계약자 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHcntrctrChangeList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020208Service, "selectHcntrctrChangeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	/**
	 * 주택계약자변경 신규
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHcntrctrChangeInsert.do")
	public ModelAndView selectHcntrctrChangeInsert(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택계약자 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHcntrctrChangeList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020208Service, "selectHcntrctrChangeInsert", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	/**
	 * 주택계약 압류 리스트 신규,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/saveHcntrctrChangeList.do")
	public ModelAndView saveHcntrctrChangeList(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("##########################################################################[RUN]saveHcntrCtrSeizrList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020208Service, "saveHcntrctrChangeList", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		return mav;
	}	
	/**
	 * 공유자(tabpage3) 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/saveHcntrctrCocnrList.do")
	public ModelAndView saveHcntrctrCocnrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("공유자(tabpage3) 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "saveHcntrctrCocnrList", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/deleteOneHcntrctrCocnr.do")
	public ModelAndView deleteOneHcntrctrCocnr(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("공유자(tabpage3) 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "deleteOneHcntrctrCocnr", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectSeizeList.do")
	public ModelAndView selectLcntrctrSeizrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("주택계약자 압류 목록 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectLcntrctrSeizrList", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectLonList.do")
	public ModelAndView selectLcntrctrLonList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("주택계약자 대출 목록 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectLcntrctrLonList", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHcntrctrFamilyList.do")
	public ModelAndView selectHcntrctrFamilyList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("가족사항(tabpage3) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectHcntrctrFamilyList", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/saveHcntrctrFamilyList.do")
	public ModelAndView saveHcntrctrFamilyList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("가족사항(tabpage6) 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "saveHcntrctrFamilyList", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/delOnehcntrctrFamily.do")
	public ModelAndView delOnehcntrctrFamily(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("가족사항(tabpage6) 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "delOnehcntrctrFamily", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/houseCalList.do")
	public ModelAndView houseCalList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("연체/선납 계산 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "houseCalList", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/saveHouseCalPay.do")
	public ModelAndView saveHouseCalPay(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("연체/선납 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "saveHouseCalPay", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/saveLcntrctrPayPopList.do")
	public ModelAndView saveLcntrctrPayPopList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("약정사항(tabpage1) 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "saveLcntrctrPayPopList", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectSeizeOne.do")
	public ModelAndView selectSeizeOne(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("주택계약자 압류 상세 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectSeizeOne", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 
	
	/**
	 * 주택 압류 정보 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/saveSeizeOne.do")
	public ModelAndView saveSeizeOne(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("주택 압류 정보 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "saveSeizeOne", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}	
	
	/**
	 * 주택계약자 대출 단일 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectLonOne.do")
	public ModelAndView selectLonOne(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("주택계약자 대출 상세 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectLonOne", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 	
	

	/**
	 * 주택 대출 정보 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/saveLonOne.do")
	public ModelAndView saveLonOne(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("주택 대출 정보 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "saveLonOne", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 주택 압류/대출 첨부파일 정보 수정
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/atchCUD.do") 
	public ModelAndView atchCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "atchCUD", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}	
	
	/**
	 * 주택 특정사업자 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectHouseLcntrctrBnsmList.do")
	public ModelAndView selectLadLcntrctrBnsmList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("주택 사업자 계약자 수정----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectHouseLcntrctrBnsmList", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/saveHouseLcntrctrBsnmList.do")
	public ModelAndView saveHouseLcntrctrBsnmList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("주택 사업자 계약자 수정----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "saveHouseLcntrctrBsnmList", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    
		return mav;
	} 	
	
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/houseRntchrgList.do")
	public ModelAndView houseRntchrgList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "houseRntchrgList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	

	/**
	 * 국민주택기금 계좌 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectKjfAcctList.do")
	public ModelAndView selectKjfAcctList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("국민주택기금 계좌 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020208Service, "selectKjfAcctList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectTransfe.do")
	public ModelAndView selectTransfe(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "selectTransfe", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/rentPosesnThingList.do")
	public ModelAndView selectHousePosesn(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "rentPosesnThingList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 소유물건정보 CUD
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/rentPosesnThingCUD.do")
	public ModelAndView rentPosesnThingCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "rentPosesnThingCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	} 
	
	/**
	 * 전출입 CUD
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/hcntrctrTransfeCUD.do")
	public ModelAndView hcntrctrTransfeCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "hcntrctrTransfeCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	} 	
	
	/**
	 * 임대고객 가족목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/selectRentCstmrFamilyList.do")
	public ModelAndView selectRentCstmrFamilyList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020208Service, "selectRentCstmrFamilyList", xpDto, mav);		// 임대고객 가족목록

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}	
	
	/* 첨부파일 저장 */
	
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/atchCUD2.do")
	public ModelAndView atchCUD2(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "atchCUD2", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/atchCUD3.do")
	public ModelAndView atchCUD3(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "atchCUD3", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	

	/* 첨부파일 다운로드 팝업 목록 조회 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/ATCH_DOWN_LIST.do") 
	public ModelAndView ATCH_DOWN_LIST(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "ATCH_DOWN_LIST", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
	}

	/* 첨부파일 삭제 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/ATCH_FILE_DEL.do")
	public ModelAndView atchDelete(NexacroMapDTO xpDto, Model model)
	        throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "ATCH_FILE_DEL", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020208/ATCH_FILE_DEL3.do")
	public ModelAndView atchDelete3(NexacroMapDTO xpDto, Model model)
	        throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020208Service, "ATCH_FILE_DEL3", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	
}
