package hsco.pms.sls.hou.ctr.SLS020102;

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
 * @Class Name   	: SLS020102Controller.java
 * @Description  	: 주택계약 해약처리(분양) 관리Controller
 * @author       	: 정윤원
 * @since        	: 2015. 10.26.
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
public class SLS020102Controller extends BaseContoller{
			
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS020102Service")
	SLS020102ServiceImpl SLS020102Service;
	
	@Resource(name="SancService")
	SancServiceImpl sancService;

	/**
	 * 주택계약자 해약 리스트 조회(공통)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/selectHouseCancelList.do")
	public ModelAndView selectHouseCancelList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택계약자 해약 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHouseCancelList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020102Service, "selectHouseCancelList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	
	/**
	 * 주택 분양 해약 리스트 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/selectHouseLttotCancelList.do")
	public ModelAndView selectHouseLttotCancelList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("분양 주택 계약 해약 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHouseLttotCancelList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020102Service, "selectHouseLttotCancelList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	
	/**
	 * 주택계약 해약 리스트 조회(임대)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/selectHouseRentCancelList.do")
	public ModelAndView selectHouseRentCancelList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("임대 주택 계약 해약 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHouseRentCancelList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020102Service, "selectHouseRentCancelList", xpDto, mav);
		
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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/selectHcntrctrSeizrInfo.do")
	public ModelAndView selectHcntrctrSeizrInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 계약자 압류정보 조회 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHcntrctrSeizrInfo");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020102Service, "selectHcntrctrSeizrInfo", xpDto, mav);
		
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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/selectLttotRatioInfo.do")
	public ModelAndView selectLttotRatioInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 분양 이율정보조회 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectLttotRatioInfo");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020102Service, "selectLttotRatioInfo", xpDto, mav);
		
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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/selectRentRatioInfo.do")
	public ModelAndView selectRentRatioInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 임대 이율정보조회 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectRentRatioInfo");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020102Service, "selectRentRatioInfo", xpDto, mav);
		
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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/selectHouseLttotCancelReturnAmtList.do")
	public ModelAndView selectHouseCancelReturnAmtList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 계약 해약(분양) 반환금 조회 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHouseLttotCancelReturnAmtList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020102Service, "selectHouseLttotCancelReturnAmtList", xpDto, mav);
		
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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/selectHouseCancelRentReturnAmtList.do")
	public ModelAndView selectHouseCancelRentReturnAmtList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 계약 해약(임대) 반환금 조회 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHouseCancelRentReturnAmtList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020102Service, "selectHouseCancelRentReturnAmtList", xpDto, mav);
		
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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/saveHouseCancelInfo.do")
	public ModelAndView saveHouseCancelInfo(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("####################################################[RUN]saveHouseCancelInfo");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020102Service, "saveHouseCancelInfo", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상등록");
			
		return mav;
	}	
	
	
	/**
	 * 주택계약 해약(임대) 납부 보증금 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/selectRenLttotPayList.do")
	public ModelAndView selectRenLttotPayList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 계약 해약(임대) 납부 보증금 조회 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectRenLttotPayList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020102Service, "selectRenLttotPayList", xpDto, mav);
		
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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/saveHouseRentCancelInfo.do")
	public ModelAndView saveHouseRentCancelInfo(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("주택임대 해약정보 저장##########################################[RUN]saveHouseRentCancelInfo");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020102Service, "saveHouseRentCancelInfo", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상처리");
			
		return mav;
	}	
	
	/**
	 * 주택계약자 해약정보(임대) 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/deleteHouseRentCancelInfo.do")
	public ModelAndView deleteHouseRentCancelInfo(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("주택임대 해약정보 삭제#########################################[RUN]deleteHouseRentCancelInfo");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020102Service, "deleteHouseRentCancelInfo", xpDto, mav);	
	
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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/selectRentCancelChckReqestInfo.do")
	public ModelAndView selectRentCancelChckReqestInfo(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("주택임대 해약 시설점검의뢰 조회##########################################[RUN]selectRentCancelChckReqestInfo");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020102Service, "selectRentCancelChckReqestInfo", xpDto, mav);	
	
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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/saveRentCancelChckReqestInfo.do")
	public ModelAndView saveRentCancelChckReqestInfo(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("주택임대 해약 시설점검의뢰 저장##########################################[RUN]saveRentCancelChckReqestInfo");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020102Service, "saveRentCancelChckReqestInfo", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상처리");
			
		return mav;
	}		
	
	/**
	 * 주택계약 해약정보(임대) -시설점검의뢰 수정
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/updateRentCancelChckReqestInfo.do")
	public ModelAndView updateRentCancelChckReqestInfo(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("주택임대 해약 시설점검의뢰 저장##########################################[RUN]updateRentCancelChckReqestInfo");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020102Service, "updateRentCancelChckReqestInfo", xpDto, mav);	
	
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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/selectRentCancelChckDspthInfo.do")
	public ModelAndView selectRentCancelChckDspthInfo(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("주택임대 해약 시설점검통보 조회##########################################[RUN]selectRentCancelChckDspthInfo");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020102Service, "selectRentCancelChckDspthInfo", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상처리");
			
		return mav;
	}
	
	/**
	 * 주택계약 해약정보(임대) -시설점검 통보 첨부파일 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/selectDspthFileList.do")
	public ModelAndView selectDspthFileList(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("주택임대 해약 시설점검통보 첨부파일 조회##########################################[RUN]selectDspthFileList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020102Service, "selectDspthFileList", xpDto, mav);	
	
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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/approveU.do")
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
        	execService(SLS020102Service, "approveU2", xpDto, mav);
        } else if ("SLS3003".equals(DIV_SE)) {
        	execService(SLS020102Service, "approveFclts", xpDto, mav);
        } else{
        	execService(SLS020102Service, "approveU", xpDto, mav);
        }		

		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	/**
	 * 주택계약자 해약정보(임대) 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020102/updateHouseRentCancelInfo.do")
	public ModelAndView updateHouseRentCancelInfo(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("시설물보수 납부정보 업데이트#########################################[RUN]updateHouseRentCancelInfo");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020102Service, "updateHouseRentCancelInfo", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상처리");
			
		return mav;
	}	
	
}
