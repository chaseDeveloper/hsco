package hsco.pms.sls.com.SLS000000;

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
 * @Class Name   	: SLS000000Controller.java
 * @Description  	: 판매공통관련 
 * @author       	: 김시영
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
 *  2015. 6.11.		김시영			최초생성
 *  2015.08.26		이상준			Rework
 * </pre>  
 */
@Controller
public class SLS000000Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS000000Service")
	SLS000000ServiceImpl SLS000000Service;
	
	/**
	 * 주택코드 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectHouseCodeList.do")
	public ModelAndView selectHouseCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectHouseCodeList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 주택코드별 동 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectHouseDongList.do")
	public ModelAndView selectHouseDongList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectHouseDongList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 주택코드,동별 호 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectHouseHoList.do")
	public ModelAndView selectHouseHoList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectHouseHoList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 주택코드별 동-호 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectHouseDongHoList.do")
	public ModelAndView selectHouseDongHoList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectHouseDongHoList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 주택코드별 평형 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectHouseAeaList.do")
	public ModelAndView selectHouseAeaList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectHouseAeaList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 주택코드별 타입평수 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectHouseTyAeaList.do")
	public ModelAndView selectHouseTyAeaList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectHouseTyAeaList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 주택 계약(해약) 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectHcntrctrList.do")
	public ModelAndView selectHcntrctrList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectHcntrctrList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 주택 계약(해약) 팝업 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectHOUcntrctr.do")
	public ModelAndView selectHOUcntrctr(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectHOUcntrctr", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	

	/**
	 * 토지 계약(해약) 팝업 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectLADcntrctr.do")
	public ModelAndView selectLADcntrctr(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectLADcntrctr", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}		
	
	/**
	 * 토지코드 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectLadCodeList.do")
	public ModelAndView selectLandCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectLadCodeList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지상세정보 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectLadDetailList.do")
	public ModelAndView selectLadDetailList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectLadDetailList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지계약자 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectLcntrctrList.do")
	public ModelAndView selectLcntrctrList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectLcntrctrList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지계약자 기타정보(압류, 대출, 소유권)를 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectLcntrctrEtcInfo.do")
	public ModelAndView selectLcntrctrEtcInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectLcntrctrEtcInfo", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 사업코드 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectBsnsCodeList.do")
	public ModelAndView selectBsnsCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectBsnsCodeList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 주택상세정보 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectHouseInfo.do")
	public ModelAndView selectHouseInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectHouseInfo", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	

	
	/* 미납지원금 ,임대료 조회 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/P3.do") 
	public ModelAndView P3(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 미납지원금 ,임대료  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "P3", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	
	

	
	/* 납부요청(가상계좌 VA_BILL) */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/P5.do") 
	public ModelAndView P5(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 납부요청(가상계좌 VA_BILL)조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "P5", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	

	/* 납부요청(가상계좌 VA_BILL_DEDATIL)*/
	@RequestMapping("/hsco/pms/sls/com/SLS000000/P6.do") 
	public ModelAndView P6(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 입금내역(가상계좌)조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "P6", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}		
	
	/* 납부요청(프로시저 호출)*/
	@RequestMapping("/hsco/pms/sls/com/SLS000000/P7.do") 
	public ModelAndView P7(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 프로시저 호출  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "P7", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}		

	/* 은행콤보 조회 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/P8.do") 
	public ModelAndView P8(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 은행콤보 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "P8", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
	}
	
	/* 은행콤보 조회 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/P4.do") 
	public ModelAndView P4(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 선납할인 / 연체이자 계산 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "P4", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
		
	}	
	
	/* 사용자별 가상계좌 종류 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/P02.do") 
	public ModelAndView P02(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 미납분양금 , 임대료 조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "P02", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	
	
	/* 미납지원금 ,임대료 조회 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/P05.do") 
	public ModelAndView P05(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 미납분양금 , 임대료 조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "P05", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	

	/* 미납기타수입조회 조회 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/P005.do") 
	public ModelAndView P005(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 미납 기타수입조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "P005", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	
	
	
	/* 연체/선납 계산 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/P06.do") 
	public ModelAndView P06(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 연체/선납 계산  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "P06", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}		

	/* 연체/선납 계산 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/P06CUD.do") 
	public ModelAndView P06CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 연체/선납 계산 저장  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "P06CUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}

	
	/* 연체/선납 계산 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/P09.do") 
	public ModelAndView P09(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 연체/선납 계산조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "P09", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	

	/**
	 * 납부서 출력 (토지)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectBillPrintList.do")
	public ModelAndView selectBillPrintList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectBillPrintList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 납부서 일괄출력 (토지)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectBillPrintListAll.do")
	public ModelAndView selectBillPrintListAll(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectBillPrintListAll", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	


	/**
	 * 납부서 출력 (주택: 분양, 임대)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectBillPrintListHouse.do")
	public ModelAndView selectBillPrintListHouse(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectBillPrintListHouse", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 납부서 일괄 출력 (주택: 분양, 임대)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000000/selectBillPrintListHouseALL.do")
	public ModelAndView selectBillPrintListHouseALL(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000000Service, "selectBillPrintListHouseALL", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
}
