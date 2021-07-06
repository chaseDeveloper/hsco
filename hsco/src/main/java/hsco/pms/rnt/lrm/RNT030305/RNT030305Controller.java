package hsco.pms.rnt.lrm.RNT030305;

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
 * @Class Name   	: RNT030103Controller.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 6. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.					   이광원				최초생성
 * </pre>  
 */
@Controller
public class RNT030305Controller extends BaseContoller {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="RNT030305Service")
	RNT030305ServiceImpl rnt030305Service;
	/* 계약자 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030305/getList1.do") 
	public ModelAndView getList1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("계약자조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030305Service, "getList1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}

	/* 임대인 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030305/getListR1.do") 
	public ModelAndView getListR1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("임대인조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030305Service, "getListR1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 공유자 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030305/getListR2.do") 
	public ModelAndView getListR2(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("공유자조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030305Service, "getListR2", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 보증보험 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030305/getListR3.do") 
	public ModelAndView getListR3(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보증보험조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030305Service, "getListR3", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 화재보험 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030305/getListR4.do") 
	public ModelAndView getListR4(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("화재보험조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030305Service, "getListR4", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 법무사 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030305/getListR5.do") 
	public ModelAndView getListR5(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("법무사조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030305Service, "getListR5", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 부동산 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030305/getListR6.do") 
	public ModelAndView getListR6(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("부동산조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030305Service, "getListR6", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 세대원 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030305/getListR7.do") 
	public ModelAndView getListR7(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("세대원조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030305Service, "getListR7", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 지원내역 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030305/getListR8.do") 
	public ModelAndView getListR8(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("지원내역조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030305Service, "getListR8", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}

	/* 권리분석 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030305/getListR9.do") 
	public ModelAndView getList3(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("권리분석 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030305Service, "getListR9", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	
	/* 지원금반환 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030305/getListR10.do") 
	public ModelAndView getListR10(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("지원금반환조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030305Service, "getListR10", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	
	

	
	/* 신규,수정,삭제 */
	@RequestMapping("/hsco/pms/rnt/rnt030305/listCUD.do")
	public ModelAndView listCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030305Service, "listCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
/*	 세대원 신규,수정,삭제 
	@RequestMapping("/hsco/pms/rnt/rnt030201/listCUDR1.do")
	public ModelAndView listCUDR1(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("세대원 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		try
		{
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			
			rnt030201Service.listCUDR1(tranInfo, inVar, inDataset, outVar, outDataset);
		
		} catch ( Exception e )
		{
			e.printStackTrace();
			mav.addObject(NexacroConstant.ERROR_CODE, "-1");
			mav.addObject(NexacroConstant.ERROR_MSG, e.toString());
		}
		return mav;
	}
	
	 발송내역 신규,수정,삭제 
	@RequestMapping("/hsco/pms/rnt/rnt030201/listCUDR2.do")
	public ModelAndView listCUDR2(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("발송내역 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		try
		{
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			
			rnt030201Service.listCUDR2(tranInfo, inVar, inDataset, outVar, outDataset);
		
		} catch ( Exception e )
		{
			e.printStackTrace();
			mav.addObject(NexacroConstant.ERROR_CODE, "-1");
			mav.addObject(NexacroConstant.ERROR_MSG, e.toString());
		}
		return mav;
	}
	
	 통화내역 신규,수정,삭제 
	@RequestMapping("/hsco/pms/rnt/rnt030201/listCUDR3.do")
	public ModelAndView listCUDR3(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("통화내역 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		try
		{
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			
			rnt030201Service.listCUDR3(tranInfo, inVar, inDataset, outVar, outDataset);
		
		} catch ( Exception e )
		{
			e.printStackTrace();
			mav.addObject(NexacroConstant.ERROR_CODE, "-1");
			mav.addObject(NexacroConstant.ERROR_MSG, e.toString());
		}
		return mav;
	}
	
	 문자발송 신규,수정,삭제 
	@RequestMapping("/hsco/pms/rnt/rnt030201/listCUDR4.do")
	public ModelAndView listCUDR4(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("문자발송 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		try
		{
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			
			rnt030201Service.listCUDR4(tranInfo, inVar, inDataset, outVar, outDataset);
		
		} catch ( Exception e )
		{
			e.printStackTrace();
			mav.addObject(NexacroConstant.ERROR_CODE, "-1");
			mav.addObject(NexacroConstant.ERROR_MSG, e.toString());
		}
		return mav;
	}*/
}
