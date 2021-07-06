package hsco.pms.com.COM000000;

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
 * @Class Name   	: COM000000Controller.java
 * @Description  	: 사원정보 조회
 * @author       	: 정윤원
 * @since        	: 2015. 09.01.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  
 * </pre>  
 */
@Controller
public class COM000000Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(COM000000Controller.class);
	
	@Resource(name="COM000000Service")
	COM000000ServiceImpl COM000000Service;

	/**
	 * 사원정보조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/selectDeptCodeList.do")
	public ModelAndView selectDeptCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("[RUN]selectDeptCodeList :: 사원정보 리스트 ::---------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(COM000000Service, "selectDeptCodeList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회"); 
		
		return mav;
	}
	
	/**
	 * 공통코드 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/selectComCodeList.do")
	public ModelAndView selectComCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(COM000000Service, "selectComCodeList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회"); 
		
		return mav;
	}
	
	/**
	 * 민원서류 목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/selectIssuFormatList.do")
	public ModelAndView selectIssuFormatList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(COM000000Service, "selectIssuFormatList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 계약자별 서식 발급이력 목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/selectIssuFormatLogList.do")
	public ModelAndView selectIssuFormatLogList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(COM000000Service, "selectIssuFormatLogList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 계약자별 서식 발급이력 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/insertIssuFormatLog.do")
	public ModelAndView insertIssuFormatLog(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(COM000000Service, "insertIssuFormatLog", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리.성공");
		
		return mav;
	}
	
	/**
	 * 사이버브랜치(가상계좌)용 은행코드 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/selectCyberBankCodeList.do")
	public ModelAndView selectCyberBankCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(COM000000Service, "selectCyberBankCodeList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 가상계좌 발급 목록 및 세부내역을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/selectVaMastAllList.do")
	public ModelAndView selectVaMastAllList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(COM000000Service, "selectVaMastAllList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 가상계좌 발급 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/selectVaMastList.do")
	public ModelAndView selectVaMastList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(COM000000Service, "selectVaMastList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 가상계좌 입금내역 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/selectVaReceiptList.do")
	public ModelAndView selectVaReceiptList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(COM000000Service, "selectVaReceiptList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 가상계좌 납부진행내역 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/selectVaBillList.do")
	public ModelAndView selectVaBillList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(COM000000Service, "selectVaBillList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 가상계좌 납부진행상세내역 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/selectVaBillDetailList.do")
	public ModelAndView selectVaBillDetailList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(COM000000Service, "selectVaBillDetailList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 은행별 가상계좌 임대료 지정계좌 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/selectOptMastList.do")
	public ModelAndView selectOptMastList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(COM000000Service, "selectOptMastList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 가상계좌원장 옵션정보를 수정한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/updateVaMastOptionInfo.do") 
	public ModelAndView updateVaMastOptionInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(COM000000Service, "updateVaMastOptionInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 첨부한 파일을 업로드하고 공통 첨부파일 정보를 저장한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/uploadFile.do")
	public ModelAndView uploadFile(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(COM000000Service, "uploadFile", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 업로드한 파일을 읽어 데이터화 하여 반환한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/getDataFromFile.do")
	public ModelAndView getDataFromFile(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(COM000000Service, "getDataFromFile", xpDto, mav);
		
		/*
		Map<String, Object> readDataMap = COM000000Service.getDataFromFile(xpDto);
		
		if(readDataMap != null){
			
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			
			// header
			Map headerMap = (Map)readDataMap.get("DATA_HEADER");	// Header내용
			DataSetMap headDsMap = new DataSetMap();
			headDsMap.add(headerMap);
			
			// footer
			Map footerMap = (Map)readDataMap.get("DATA_FOOTER");	// Footer 내뇽
			DataSetMap footDsMap = new DataSetMap();
			footDsMap.add(footerMap);
			
			// body
			List<Map> bodyList = (List<Map>)readDataMap.get("DATA_BODY");	// 데이터 목록
		
			DataSetMap bodyDsMap = new DataSetMap();
			bodyDsMap.setRowMaps(bodyList);
			
			outDataset.put("headInfo", headDsMap);
			outDataset.put("footInfo", footDsMap);
			outDataset.put("bodyList", bodyDsMap);
		}
		*/
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		
	}
	
	
	/**
	 * 신규 가상계좌정보를 등록한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/insertVaMast.do") 
	public ModelAndView insertVaMast(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
//		Map <String, DataSetMap>inDataset = xpDto.getInDataSetMap();
//		
//		// 전달값 추출
//		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
//		
//		Map paramMap = null;
//		if(inDsMap != null){
//			paramMap = inDsMap.get(0);
//		}
//		
//		// debug
//		MapUtils.debugPrint(System.out, "REQUEST", paramMap);
		
//		Map resultMap = COM000000Service.insertVaMast(paramMap);
		
		// debug
//		MapUtils.debugPrint(System.out, "RESULT", resultMap);
		
		execService(COM000000Service, "insertVaMast", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	
	
	/**
	 * 각종현황 및 분석표 결의번호를 조회한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/selectDecsn.do")
	public ModelAndView selectDecsn(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(COM000000Service, "selectDecsn", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 각종현황 및 분석표 결의번호 등록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/com/COM000000/insertDecsn.do")
	public ModelAndView updateHcntrctrChangeAll(NexacroMapDTO xpDto, Model model) throws Exception {
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(COM000000Service, "insertDecsn", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		return mav;
	}		
	
}
