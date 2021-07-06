package hsco.pms.rnt.lrm.RNT030306;

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
 * @Class Name   	: RNT030302Controller.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 7. 11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 1.					   이광원				최초생성
 * </pre>  
 */
@Controller
public class RNT030306Controller extends BaseContoller {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="RNT030306Service")
	RNT030306ServiceImpl rnt030306Service;
	/* 해약자 및 신규주택자 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030306/getList.do") 
	public ModelAndView getList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("해약자 및 신규주택자 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030306Service, "getList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 지원금반환 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030306/getListR1.do") 
	public ModelAndView getListR1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("지원금반환 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030306Service, "getListR1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}

	/* 미납임대료 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030306/P1.do") 
	public ModelAndView P1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("미납임대료 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030306Service, "P1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	

	/* 미납지원금 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030306/P2.do") 
	public ModelAndView P2(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("미납지원금 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030306Service, "P2", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}		

	/* 미납지원금 ,임대료 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030306/P3.do") 
	public ModelAndView P3(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 미납지원금 ,임대료  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030306Service, "P3", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	
	
	/* 입금내역(가상계좌)조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030306/P4.do") 
	public ModelAndView P4(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 입금내역(가상계좌)조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030306Service, "P4", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}		
	
	/* 납부요청(가상계좌 VA_BILL) */
	@RequestMapping("/hsco/pms/rnt/rnt030306/P5.do") 
	public ModelAndView P5(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 납부요청(가상계좌 VA_BILL)조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030306Service, "P5", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	
	
	/* 납부요청(가상계좌 VA_BILL_DEDATIL)*/
	@RequestMapping("/hsco/pms/rnt/rnt030306/P6.do") 
	public ModelAndView P6(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 입금내역(가상계좌)조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030306Service, "P6", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	

	/* 납부요청(가상계좌 VA_BILL_DEDATIL)*/
	@RequestMapping("/hsco/pms/rnt/rnt030306/P7.do") 
	public ModelAndView P7(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 프로시저 호출  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030306Service, "P7", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}		

	/* 은행콤보 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030306/P8.do") 
	public ModelAndView P8(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 은행콤보 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030306Service, "P8", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	
	

	/* 출력물1 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030306/PRINT1.do") 
	public ModelAndView PRINT1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 은행콤보 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030306Service, "PRINT1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 출력물2 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030306/PRINT2.do") 
	public ModelAndView PRINT2(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 은행콤보 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030306Service, "PRINT2", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}			
	
	/* 출력물3 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030306/PRINT3.do") 
	public ModelAndView PRINT3(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" 출력물 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030306Service, "PRINT3", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	
	
	/* 신규,수정,삭제 */
	@RequestMapping("/hsco/pms/rnt/rnt030306/listCUD.do")
	public ModelAndView listCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030306Service, "listCUD", xpDto, mav);

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
