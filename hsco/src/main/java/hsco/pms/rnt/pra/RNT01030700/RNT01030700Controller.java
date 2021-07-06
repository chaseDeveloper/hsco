package hsco.pms.rnt.pra.RNT01030700;

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

@Controller
public class RNT01030700Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="RNT01030700Service")
	RNT01030700ServiceImpl RNT01030700Service;
	
	@Resource(name="SancService")
	SancServiceImpl sancService;
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030700/rentHouseChangeList.do")
	public ModelAndView selectRentInfoDetail(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01030700Service, "rentHouseChangeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030700/rentHouseChangeCU.do")
	public ModelAndView rentHouseChangeCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01030700Service, "rentHouseChangeCU", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030700/rentHouseChangeD.do")
	public ModelAndView rentHouseChangeD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01030700Service, "rentHouseChangeD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030700/rentHouseBildList.do")
	public ModelAndView rentHouseBildList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01030700Service, "rentHouseBildList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030700/selectNoticeSheetReport.do")
	public ModelAndView selectNoticeSheetReport(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01030700Service, "selectNoticeSheetReport", xpDto, mav);
		
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
	@RequestMapping("/hsco/pms/rnt/prm/RNT01030700/approveU.do")
	public ModelAndView approveU(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("전자결제번호 입력  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }

        map.put("DIV",     "RNT3021");

        // 자동 데이터 세팅(Key 채번)
        StringBuffer buffer = new StringBuffer();
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy");
        String yyyy = dayTime.format(new Date(time));
        Integer keySeq = sancService.selectSeqKey();
        buffer.append("PRA");
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
        
		execService(RNT01030700Service, "approveU", xpDto, mav);

		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
}
