package hsco.pms.sls.hou.rqe.SLS030202;

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
 * @Class Name   	: SLS030202Controller.java
 * @Description  	: 
 * @author       	: 홍길동
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
 *  2015. 8. 17.		 홍길동			최초생성
 * </pre>  
 */
@Controller
public class SLS030202Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS030202Service")
	SLS030202ServiceImpl SLS030202Service;
	
	/**
	 * 주택납부 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rqe/SLS030202/selectHousePayList.do")
	public ModelAndView selectHousePayList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS030202Service, "selectHousePayList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	// 주택부가세 조회
    @RequestMapping("/hsco/pms/sls/hou/rqe/SLS030202/selectHouseVatList.do")
	public ModelAndView selectHouseVatList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS030202Service, "selectHouseVatList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
    // 주택부가세  기생성자료 조회
    @RequestMapping("/hsco/pms/sls/hou/rqe/SLS030202/selectHouseVatExsitYn.do")
	public ModelAndView selectHouseVatExsitYn(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS030202Service, "selectHouseVatExsitYn", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
	/**
     * 주택부가세 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/hou/rqe/SLS030202/saveHouseVat.do")
	public ModelAndView saveHouseVat (NexacroMapDTO xpDto, Model model) throws Exception {

    	ModelAndView mav = new ModelAndView("nexacroMapView");

    	execService(SLS030202Service, "saveHouseVat", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
    	return mav;
	}
    
    
    // 주택부가세 매출조서 조회
    @RequestMapping("/hsco/pms/sls/hou/rqe/SLS030202/selectHouseSellingWtnncList.do")
	public ModelAndView selectHouseSellingWtnncList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS030202Service, "selectHouseSellingWtnncList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
    
    // 세금계산서_합계 출력 조회
    @RequestMapping("/hsco/pms/sls/hou/rqe/SLS030202/selectHouseTaxbillSumList.do")
	public ModelAndView selectHouseTaxbillSumList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS030202Service, "selectHouseTaxbillSumList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
    // 세금계산서_합계 출력 상세조회
    @RequestMapping("/hsco/pms/sls/hou/rqe/SLS030202/selectHouseTaxbillSumDetailList.do")
	public ModelAndView selectHouseTaxbillSumDetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS030202Service, "selectHouseTaxbillSumDetailList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
    
    // 세금계산서_개별 출력 조회
    @RequestMapping("/hsco/pms/sls/hou/rqe/SLS030202/selectHouseTaxbillIndvdlzList.do")
	public ModelAndView selectHouseTaxbillIndvdlzList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS030202Service, "selectHouseTaxbillIndvdlzList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
    // 전자세금계산서 조회
    @RequestMapping("/hsco/pms/sls/hou/rqe/SLS030202/selectHouseElecTaxbillList.do")
	public ModelAndView selectHouseElecTaxbillList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS030202Service, "selectHouseElecTaxbillList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
    
}
