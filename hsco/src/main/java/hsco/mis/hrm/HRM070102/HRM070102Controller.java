package hsco.mis.hrm.HRM070102;

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
 * @Class Name   	: HRM070102Controller.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2017. 5. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017. 5. 16.			  양성모			최초생성
 * </pre>  
 */

@Controller
public class HRM070102Controller extends BaseContoller  {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM070102Service")
	HRM070102ServiceImpl HRM070102Service;
	
	@Resource(name="SancService")
	SancServiceImpl sancService;
	

    /**연차일수조회 */
    @RequestMapping("/hsco/mis/hrm/HRM070102/tbhrmYryc.do") 
    public ModelAndView tbhrmYryc(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("연차일수조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM070102Service, "tbhrmYryc", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
	
	/**근무상황부 목록조회 */
	@RequestMapping("/hsco/mis/hrm/HRM070102/tbhrmWrkcpList.do") 
	public ModelAndView tbhrmWrkcpList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("근무상황부 목록조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM070102Service, "tbhrmWrkcpList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	@RequestMapping("/hsco/mis/hrm/HRM070102/tbhrmWrkcpCUD.do")
	public ModelAndView tbhrmWrkcpCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("근무상황부  저장시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM070102Service, "tbhrmWrkcpCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
	
	/**근무상황부 취소 대상 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM070102/selectWrkcpCancelList.do") 
	public ModelAndView selectWrkcpCancelList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("근무상황부 취소 대상 목록조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM070102Service, "selectWrkcpCancelList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
    /**
     * 첨부파일 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM070102/selectFileList.do")
    public ModelAndView selectFileList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070102Service, "selectFileList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }	
		
	/** 근무상황부 결재처리 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@RequestMapping("/hsco/mis/hrm/HRM070102/approve.do")
	public ModelAndView approve(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }

        map.put("DIV",     "HRM4003");      // 500 : 근무상황부  --> HRM4003

        // 자동 데이터 세팅(Key 채번)
        StringBuffer buffer = new StringBuffer();
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy");
        String yyyy = dayTime.format(new Date(time));
        Integer keySeq = sancService.selectSeqKey();
        buffer.append("HRM");
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

        // --------------------------
        System.out.println("resultMap : " + resultMap);
        // --------------------------
        
        map.put("O_URL", resultMap.get("O_URL"));
        
        Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
      
        execService(HRM070102Service, "approveCUD", xpDto, mav); 

        mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
        
	}
	
	/**휴무일 확인 */
	@RequestMapping("/hsco/mis/hrm/HRM070102/chkHolyDe.do") 
	public ModelAndView chkHolyDe(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM070102Service, "chkHolyDe", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**결재취소*/	
	@RequestMapping("/hsco/mis/hrm/HRM070102/cancelAppr.do") 
	public ModelAndView cancelAppr(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM070102Service, "cancelAppr", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**자녀돌봄휴가 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM070102/selectChldrnNrtrVcatn.do") 
	public ModelAndView selectChldrnNrtrVcatn(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("자녀돌봄휴가 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM070102Service, "selectChldrnNrtrVcatn", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
}//end controller