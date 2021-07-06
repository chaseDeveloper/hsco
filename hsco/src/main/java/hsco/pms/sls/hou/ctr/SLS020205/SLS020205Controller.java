package hsco.pms.sls.hou.ctr.SLS020205;

import java.text.SimpleDateFormat;
import java.util.Date;
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
import hsco.cmm.sanc.SancServiceImpl;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS020205Controller.java
 * @Description  	: 
 * @author       	: 홍길동
 * @since        	: 2016. 1.14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6.11.					김시영				최초생성
 * </pre>  
 */
@Controller
public class SLS020205Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());		
	
	@Resource(name="SLS020205Service")
	SLS020205ServiceImpl SLS020205Service;
	
	@Resource(name="SancService")
	SancServiceImpl sancService;	
	
	/**
	 * 주택분양전환조회영역 조회영역
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020205/changeHouseList.do")
	public ModelAndView changeHouseList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 분양전환조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020205Service, "changeHouseList", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020205/typeCodeUpdate.do")
	public ModelAndView typeCodeUpdate(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("타입코드 적용 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020205Service, "typeCodeUpdate", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020205/typeCodeCancel.do")
	public ModelAndView typeCodeCancel(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("타입코드 복원 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020205Service, "typeCodeCancel", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}	
	
	/**
	 * 주택분양타입코드 조회영역
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020205/houseTypeCodeList.do")
	public ModelAndView houseTypeCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 분양타입코드 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020205Service, "houseTypeCodeList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	/**
	 * 주택분양타입코드 양식조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020205/houseTypeCodeExelList.do")
	public ModelAndView houseTypeCodeExelList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 분양타입코드 양식 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020205Service, "houseTypeCodeExelList", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020205/SPSLS_HOUSE_270_SR_CHANGE.do")
	public ModelAndView SPSLS_HOUSE_270_SR_CHANGE(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("임대주택 분양전환 프로시저 호출----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020205Service, "SPSLS_HOUSE_270_SR_CHANGE", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020205/SPSLS_HOUSE_270_SR_CANCEL.do")
	public ModelAndView SPSLS_HOUSE_270_SR_CANCEL(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("임대주택 분양전환 취소 프로시저 호출----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020205Service, "SPSLS_HOUSE_270_SR_CANCEL", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}	
	
	/**
	 * 전세주택 분양전환 및 취소 프로시저 호출
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020205/SPSLS_HOUSE_SR_CHANGE_JUN.do")
	public ModelAndView SPSLS_HOUSE_SR_CHANGE_JUN(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("전세주택 분양전환 및 취소 프로시저 호출----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020205Service, "SPSLS_HOUSE_SR_CHANGE_JUN", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}		
	
	/**
	 * 주택분양타입코드 생성 프로시저 호출
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020205/houseTypeCodeSP.do")
	public ModelAndView houseTypeCodeSP(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 분양타입코드 생성 프로시저 호출----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020205Service, "houseTypeCodeSP", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	/**
	 * 전자결제 등록자 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020205/registerInfoR.do")
	public ModelAndView registerInfoR(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("전자결제 등록자 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020205Service, "registerInfoR", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}	
	
	/**
	 * 전자결제 정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020205/approveList.do")
	public ModelAndView approveList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("전자결제 정보 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020205Service, "approveList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020205/approveU.do")
	public ModelAndView approveU(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("전자결제번호 입력  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }

        map.put("DIV",     "546");      // 546 : 초과임대보증금 지출

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
        
        System.out.println("resultMap : " + resultMap);
        
        map.put("O_URL", resultMap.get("O_URL"));		

		execService(SLS020205Service, "approveU", xpDto, mav);

		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}	
	
		
}
