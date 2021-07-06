package hsco.pms.sls.lad.ctr.SLS080201;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS080201Controller.java
 * @Description  	: 
 * @author       	: 최승락
 * @since        	: 2015. 10.06.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 06.		 최승락			최초생성
 * </pre>  
 */
@Controller
public class SLS080201Controller extends BaseContoller {
		
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS080201Service")
	SLS080201ServiceImpl SLS080201Service;

		
	/**
	 * 토지계약목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectLadLcntrctrList.do")
	public ModelAndView selectLadLcntrctrList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지계약목록 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS080201Service, "selectLadLcntrctrList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지계약상세 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectLadLcntrctrInfo.do")
	public ModelAndView selectLadLcntrctrInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지계약상세 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS080201Service, "selectLadLcntrctrInfo", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
    /**
     * 토지계약상세 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/saveLadLcntrctrInfo.do")
	public ModelAndView saveLadLcntrctrInfo (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("토지계약상세 저장----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "saveLadLcntrctrInfo", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}
    
    /**
     * 토지정보상세 보기
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectLadInfo.do")
	public ModelAndView selectLadInfo (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("토지정보상세 보기----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "selectLadInfo", xpDto, mav);
    	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}
    
    /**
     * 약정사항(tabpage1) 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectLcntrctrPayList.do")
	public ModelAndView selectLcntrctrPayList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("약정사항(tabpage1) 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "selectLcntrctrPayList", xpDto, mav);
    	
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
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectCstmrConrList.do")
	public ModelAndView selectCstmrConrList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("공유자(tabpage2) 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "selectCstmrConrList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}
    
    
    
    /**
     * 사업자(tabpage3) 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectLcntrctrBsnmList.do")
	public ModelAndView selectLcntrctrBsnmList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("사업자(tabpage3) 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "selectLcntrctrBsnmList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}
    
    /**
     * 기타정보(tabpage4) 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectLcntrctrEtcInfo.do")
	public ModelAndView selectLcntrctrEtcInfo (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("기타정보(tabpage4) 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "selectLcntrctrEtcInfo", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}
    
    
    /**
     * 가상계좌(tabpage5) 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectVirtlAcnutList.do")
	public ModelAndView selectVirtlAcnutList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("가상계좌(tabpage5) 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "selectVirtlAcnutList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}
    
    /**
     * 분양약정 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectLcntrctrPayPopList.do")
	public ModelAndView selectLcntrctrPayPopList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("분양약정 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "selectLcntrctrPayPopList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}
    
    
    /**
     * 분양약정 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/saveLcntrctrPayPopList.do")
	public ModelAndView saveLcntrctrPayPopList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("분양약정 저장----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "saveLcntrctrPayPopList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
	}
    
    
    /**
     * 임대약정 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectLcntrctrRentPayPopList.do")
	public ModelAndView selectLcntrctrRentPayPopList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("임대약정 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "selectLcntrctrRentPayPopList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}    
    
    /**
     * 분양약정 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/saveLcntrctrRentPayPopList.do")
	public ModelAndView saveLcntrctrRentPayPopList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("분양약정 저장----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "saveLcntrctrRentPayPopList", xpDto, mav);
    	
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
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectLadPayCodeList.do")
	public ModelAndView selectLadPayCodeList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("납부코드 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "selectLadPayCodeList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}

    
    /**
     * 당초금액 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectLadDetailInfoForBgnnAmount.do")
	public ModelAndView selectLadDetailInfoForBgnnAmount (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("당초금액 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "selectLadDetailInfoForBgnnAmount", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}
    
    
    /**
     * 납부비율 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectLadPayStdrList.do")
	public ModelAndView selectLadPayStdrList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("납부비율 조회----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "selectLadPayStdrList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}
    
    
    /**
     * 분양약정 납부금액계산 및 적용
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectLttotInspyIntrInfo.do")
	public ModelAndView selectLttotInspyIntrInfo (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("분양약정 납부금액계산 및 적용----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "selectLttotInspyIntrInfo", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}
    
    /**
     * 임대약정 납부금액계산 및 적용
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectRentInspyIntrInfo.do")
	public ModelAndView selectRentInspyIntrInfo (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("임대약정 납부금액계산 및 적용----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080201Service, "selectRentInspyIntrInfo", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}
    
	/* 첨부파일 저장 */
			
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/atchCUD.do")
	public ModelAndView atchCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("첨부파일 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080201Service, "atchCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}    
	
	
	/* 첨부파일 삭제 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/atchDelete.do")
	public ModelAndView atchDelete(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("첨부파일 삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080201Service, "atchDelete", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}		
	
	
	/* 주택 기타정보 저장 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/saveEtcInfo.do")
	public ModelAndView saveEtcInfo(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("주택 기타정보 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080201Service, "saveEtcInfo", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	
	/* 토지고객 공유자 저장 */
			
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/saveCocnr.do")
	public ModelAndView saveCocnr(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("공유자 수정 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		//토지고객 공유자 수정
		execService(SLS080201Service, "saveCocnr", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}   
	
	
	/* 토지고객 매도자 저장 */
			
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/saveCocnrSler.do")
	public ModelAndView saveCocnrSler(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("매도자 수정 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		//토지고객 매도자 수정
		execService(SLS080201Service, "saveCocnrSler", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	} 
	
	
	/* 토지고객 공유자, 매도자 삭제 */
			
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/removeCocnr.do")
	public ModelAndView removeCocnr(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("공유자/매도자 삭제 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		//토지고객 공유자 수정
		execService(SLS080201Service, "removeCocnr", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}    
	
	
	/* 토지고객 압류 첨부파일 삭제 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/atchSeizeDelete.do")
	public ModelAndView atchSeizeDelete(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("토지고객 압류 첨부파일 삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080201Service, "atchSeizeDelete", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	
	
	
	/* 토지고객 대출 첨부파일 삭제 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/atchLonDelete.do")
	public ModelAndView atchLonDelete(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("토지고객 대출 첨부파일 삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080201Service, "atchLonDelete", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	
	
	/**
	 * 주택 압류 단건 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectLcntrctrSeizr.do") 
	public ModelAndView selectLcntrctrSeizr(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080201Service, "selectLcntrctrSeizr", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}	
	
	
	/**
	 * 주택 대출 단건 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/selectLcntrctrLon.do") 
	public ModelAndView selectLcntrctrLon(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080201Service, "selectLcntrctrLon", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}	
	
	
	
	
	/**
	 * 주택 압류 첨부파일 정보 수정
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/atchSeizeCUD.do") 
	public ModelAndView atchSeizeCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080201Service, "atchSeizeCUD", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}	
	
	/**
	 * 주택 대출 첨부파일 정보 수정
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/atchLonCUD.do") 
	public ModelAndView atchLonCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS080201Service, "atchLonCUD", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}	
	
	
	/**
     * 토지계약자압류 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/saveLcntrctrSeizrList.do")
	public ModelAndView saveLcntrctrSeizrList (NexacroMapDTO xpDto, Model model) throws Exception {

    	ModelAndView mav = new ModelAndView("nexacroMapView");

    	execService(SLS080201Service, "saveLcntrctrSeizrList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
    	return mav;
	}
    
    
    /**
     * 토지계약자대출 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/ctr/SLS080201/saveLcntrctrLonList.do")
	public ModelAndView saveLcntrctrLonList (NexacroMapDTO xpDto, Model model) throws Exception {

    	ModelAndView mav = new ModelAndView("nexacroMapView");

    	execService(SLS080201Service, "saveLcntrctrLonList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
    	return mav;
	}
    
  
	
	
}
