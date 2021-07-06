package hsco.pms.sls.hou.rci.SLS040301;

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
 * @Class Name   	: SLS040301Controller.java
 * @Description  	:
 * @author       	: 최승락
 * @since        	: 2015. 11.14.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 14.		 최승락			최초생성
 * </pre>
 */
@Controller
public class SLS040301Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS040301Service")
	SLS040301ServiceImpl SLS040301Service;
	
	@Resource(name="SancService")
	SancServiceImpl sancService;

	/**
	 * 주택수납소인 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040301/selectHouseRcivPstmrkList.do")
	public ModelAndView selectHouseRcivPstmrkList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택수납소인 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS040301Service, "selectHouseRcivPstmrkList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040301/selectHouseRcivPstmrk.do")
	public ModelAndView selectHouseRcivPstmrk(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택수납자료 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS040301Service, "selectHouseRcivPstmrk", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}	
	
	//주택수납소인 처리
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040301/saveHouseRcivPstmrkList.do")
	public ModelAndView saveHouseRcivPstmrkList(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("주택수납소인 처리##########################################[RUN]saveHouseRcivPstmrkList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS040301Service, "saveHouseRcivPstmrkList", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상처리");
			
		return mav;
	}
	
	//주택수납소인 취소 처리
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040301/saveHouseRcivPstmrkListCancel.do")
	public ModelAndView saveHouseRcivPstmrkListCancel(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("주택수납소인 취소 처리##########################################[RUN]saveHouseRcivPstmrkListCancel");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS040301Service, "saveHouseRcivPstmrkListCancel", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상처리");
			
		return mav;
	}
		
	
	//주택수납과오 조회
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040301/selectHouseRcivFaltList.do")
	public ModelAndView selectHouseRcivFaltList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택수납과오 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS040301Service, "selectHouseRcivFaltList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	//주택수납과오 저장
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040301/saveHouseRcivFaltList.do")
	public ModelAndView saveHouseRcivFaltList(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("주택수납과오 저장##########################################[RUN]saveHouseRcivFaltList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS040301Service, "saveHouseRcivFaltList", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상처리");
			
		return mav;
	}
	
	//주택수납 수입관리 저장
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040301/saveHouseRcivCUD.do")
	public ModelAndView saveHouseRcivCUD(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("주택수납 수입관리 저장##########################################[RUN]saveHouseRcivFaltList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS040301Service, "saveHouseRcivCUD", xpDto, mav);	
	
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
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040301/approveU.do")
	public ModelAndView approveU(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("전자결제번호 입력  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }

        map.put("DIV",     "546");      // 초과 임대보증금 지출 

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
        
		execService(SLS040301Service, "approveU", xpDto, mav);

		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
		
		
	
}
