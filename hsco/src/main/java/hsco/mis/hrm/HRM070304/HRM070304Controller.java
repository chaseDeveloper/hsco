package hsco.mis.hrm.HRM070304;


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
 * @Class Name   	: HRM070304Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 10. 27.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 10. 27			  이혜선			최초생성
 * 2016. 07. 15			  최현식			전자결재 추가
 * </pre>  
 */

@Controller
public class HRM070304Controller extends BaseContoller  {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM070304Service")
	HRM070304ServiceImpl HRM070304Service;
	
	@Resource(name="SancService")
	SancServiceImpl sancService;
	
	/**대직승인내역 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM070304/selectSubDutyList.do") 
	public ModelAndView selectSubDutyList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("대직승인내역 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM070304Service, "selectSubDutyList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	

	   /**대직승인내역 상세 조회 */
    @RequestMapping("/hsco/mis/hrm/HRM070304/subdutyListR.do") 
    public ModelAndView subdutyListR(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("대직승인내역 상세조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM070304Service, "subdutyListR", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   
    
    /**당직자정보 조회 */
    @RequestMapping("/hsco/mis/hrm/HRM070304/selectBndtEmpnoList.do") 
    public ModelAndView selectBndtEmpnoList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("당직자정보 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM070304Service, "selectBndtEmpnoList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
    /**당직일자 선택팝업 조회 */
    @RequestMapping("/hsco/mis/hrm/HRM070304/selectBndtDeList.do") 
    public ModelAndView selectBndtDeList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("당직일자 선택팝업  조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM070304Service, "selectBndtDeList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }

    /**현당직자 선택팝업 조회 */
    @RequestMapping("/hsco/mis/hrm/HRM070304/selectCurEmpnoList.do") 
    public ModelAndView selectCurEmpnoList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("현당직자 선택팝업  조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM070304Service, "selectCurEmpnoList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }

    /**대직자 선택팝업 조회 */
    @RequestMapping("/hsco/mis/hrm/HRM070304/selectEmpnoList.do") 
    public ModelAndView selectEmpnoList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("대직자 선택팝업  조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM070304Service, "selectEmpnoList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
    /** CUD */
    @RequestMapping("/hsco/mis/hrm/HRM070304/saveSubDutyList.do")
    public ModelAndView saveSubDutyList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("저장시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070304Service, "saveSubDutyList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
                
        return mav;
    }
    
    /**상세 CUD */
    @RequestMapping("/hsco/mis/hrm/HRM070304/saveBndtCUD.do")
    public ModelAndView saveBndtCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("저장시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070304Service, "saveBndtCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
                
        return mav;
    }
    
    /**
	 * 대직 승인원 전자결재
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@RequestMapping("/hsco/mis/hrm/HRM070304/approve.do")
	public ModelAndView approve(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }

        map.put("DIV",     "HRM4004");      // 500 : 대직승인원  --> HRM4004

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

        System.out.println("resultMap : " + resultMap);
        
        map.put("O_URL", resultMap.get("O_URL"));
        
        Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
        
        execService(HRM070304Service, "approveCUD", xpDto, mav); 

        mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
	}
	
/*	@RequestMapping("/hsco/mis/hrm/HRM070304/saveAutoBndtSnCUD.do")
	public ModelAndView saveAutoBndtSnCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("자동생성 저장시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM070304Service, "saveAutoBndtSnCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
	*/
    
    /** CUD */
    @RequestMapping("/hsco/mis/hrm/HRM070304/saveSubDutyCfm.do")
    public ModelAndView saveSubDutyCfm(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("저장시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070304Service, "saveSubDutyCfm", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
                
        return mav;
    }

}