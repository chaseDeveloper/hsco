package hsco.pms.sls.lad.ctr.SLS080202;

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
public class SLS080202Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS080202Service")
	SLS080202ServiceImpl SLS080202Service;
	
	@Resource(name="SancService")
	SancServiceImpl sancService;

	
	/**
	 * 토지계약목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080202/selectLadLcntrctrList.do")
	public ModelAndView selectLadLcntrctrList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지계약목록 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS080202Service, "selectLadLcntrctrList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//토지계약자해약정보조회
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080202/selectLadLcntrctrCancl.do")
	public ModelAndView selectLadLcntrctrCancl(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지계약자해약정보조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS080202Service, "selectLadLcntrctrCancl", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	//분양탭 : 토지계약자납부정보조회
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080202/selectLadLcntrctrPayInfo.do")
	public ModelAndView selectLadLcntrctrPayInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지계약자납부정보조회(분양)----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS080202Service, "selectLadLcntrctrPayInfo", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//분양탭 : 보증금
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080202/selectLadLcntrctrPayInfo2.do")
	public ModelAndView selectLadLcntrctrPayInfo2(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지계약자납부정보조회(분양)----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS080202Service, "selectLadLcntrctrPayInfo", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//임대탭 : 임대료
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080202/selectLcntrctrPayList.do")
	public ModelAndView selectLcntrctrPayList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("토지계약자납부정보조회(임대료)----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080202Service, "selectLcntrctrPayList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
	}
		
	
	//토지 분양해약(대체) 처리
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080202/spslsLadLcntrctrCanclUi.do")
	public ModelAndView spslsLadLcntrctrCanclUi(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지 분양해약(대체) 처리----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS080202Service, "spslsLadLcntrctrCanclUi", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//토지 분양해약(대체) 취소 처리
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080202/spslsLadLcntrctrCanclUiCancl.do")
	public ModelAndView spslsLadLcntrctrCanclUiCancl(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지 분양해약(대체) 취소 처리----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS080202Service, "spslsLadLcntrctrCanclUiCancl", xpDto, mav);

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
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080202/approveU.do")
	public ModelAndView approveU(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("전자결제번호 입력  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }

        //map.put("DIV",     "543");      // 계약해제
        map.put("DIV",     "SLS5009");      // 토지일반기안

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
        
		execService(SLS080202Service, "approveU", xpDto, mav);

		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	//결의번호 (원금) 업데이트
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080202/updateExpndtrDecsnNo.do")
	public ModelAndView updateExpndtrDecsnNo(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지 분양해약(대체) 취소 처리----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS080202Service, "updateExpndtrDecsnNo", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//결의번호 (이자) 업데이트
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080202/updateExpndtrDecsnNoIntr.do")
	public ModelAndView updateExpndtrDecsnNoIntr(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지 분양해약(대체) 취소 처리----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS080202Service, "updateExpndtrDecsnNoIntr", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
}
