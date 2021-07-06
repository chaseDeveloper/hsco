package hsco.pms.sls.lad.rqe.SLS090202;

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

@Controller
public class SLS090202Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="SLS090202Service")
	SLS090202ServiceImpl SLS090202Service;


	/**
	 * 토지납부 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/rqe/SLS090202/selectLadPayList.do")
	public ModelAndView selectLadPayList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS090202Service, "selectLadPayList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	// 토지부가세 조회
    @RequestMapping("/hsco/pms/sls/lad/rqe/SLS090202/selectLadVatList.do")
	public ModelAndView selectLadVatList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS090202Service, "selectLadVatList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    // 간주임대료 조회
    @RequestMapping("/hsco/pms/sls/lad/rqe/SLS090202/selectRegardList.do")
	public ModelAndView selectRegardList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS090202Service, "selectRegardList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
    // 토지부가세  기생성자료 조회
    @RequestMapping("/hsco/pms/sls/lad/rqe/SLS090202/selectLadVatExsitYn.do")
	public ModelAndView selectLadVatExsitYn(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS090202Service, "selectLadVatExsitYn", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
	/**
     * 토지부가세 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/lad/rqe/SLS090202/saveLadVat.do")
	public ModelAndView saveLadVat (NexacroMapDTO xpDto, Model model) throws Exception {

    	ModelAndView mav = new ModelAndView("nexacroMapView");

    	execService(SLS090202Service, "saveLadVat", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
    	return mav;
	}
    
    
    // 토지부가세 매출조서 조회
    @RequestMapping("/hsco/pms/sls/lad/rqe/SLS090202/selectLadSellingWtnncList.do")
	public ModelAndView selectLadSellingWtnncList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS090202Service, "selectLadSellingWtnncList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
    
    // 세금계산서_합계 출력 조회
    @RequestMapping("/hsco/pms/sls/lad/rqe/SLS090202/selectLadTaxbillSumList.do")
	public ModelAndView selectLadTaxbillSumList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS090202Service, "selectLadTaxbillSumList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
    // 세금계산서_합계 출력 상세조회
    @RequestMapping("/hsco/pms/sls/lad/rqe/SLS090202/selectLadTaxbillSumDetailList.do")
	public ModelAndView selectLadTaxbillSumDetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS090202Service, "selectLadTaxbillSumDetailList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
    
    // 세금계산서_개별 출력 조회
    @RequestMapping("/hsco/pms/sls/lad/rqe/SLS090202/selectLadTaxbillIndvdlzList.do")
	public ModelAndView selectLadTaxbillIndvdlzList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS090202Service, "selectLadTaxbillIndvdlzList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
    // 전자세금계산서 조회
    @RequestMapping("/hsco/pms/sls/lad/rqe/SLS090202/selectLadElecTaxbillList.do")
	public ModelAndView selectLadElecTaxbillList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS090202Service, "selectLadElecTaxbillList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
    // 부동산임대공급가액 명세서 조회
    @RequestMapping("/hsco/pms/sls/lad/rqe/SLS090202/selectLadRentSupplyBillList.do")
	public ModelAndView selectLadRentSupplyBillList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS090202Service, "selectLadRentSupplyBillList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}
