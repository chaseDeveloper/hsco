package hsco.mis.hrm.HRM070302;


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
 * @Class Name   	: HRM070302Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 10. 21.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 10. 21			  이혜선			최초생성
 * </pre>  
 */

@Controller
public class HRM070302Controller extends BaseContoller  {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM070302Service")
	HRM070302ServiceImpl HRM070302Service;
	
	@Resource(name="SancService")
	SancServiceImpl sancService;
	
	/**당직자 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM070302/selectEmpnoList.do") 
	public ModelAndView selectEmpnoList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("당직자 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM070302Service, "selectEmpnoList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**당직리스트 */
	@RequestMapping("/hsco/mis/hrm/HRM070302/selectDalyBndtList.do") 
	public ModelAndView selectDalyBndtList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("당직리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM070302Service, "selectDalyBndtList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**당직순번리스트 */
	@RequestMapping("/hsco/mis/hrm/HRM070302/autoBndtSnList.do") 
	public ModelAndView autoBndtSnList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("당직순번리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM070302Service, "autoBndtSnList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	@RequestMapping("/hsco/mis/hrm/HRM070302/saveAutoBndtSnCUD.do")
	public ModelAndView saveAutoBndtSnCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("자동생성 저장시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM070302Service, "saveAutoBndtSnCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
	
	@RequestMapping("/hsco/mis/hrm/HRM070302/saveBndtPymnt.do")
	public ModelAndView saveBndtPymnt(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("당직수당 생성시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM070302Service, "saveBndtPymnt", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
	
	
	/**
     * 전자결재
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    @RequestMapping("/hsco/mis/hrm/HRM070302/approve.do")
    public ModelAndView saveSanc(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }

        //map.put("DIV", "606");      // 606 : 당직근무명령
        map.put("DIV", "HRM4014");      // 606 : 당직근무명령

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
        
        execService(HRM070302Service, "approveCUD", xpDto, mav); 
        
        mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }    
}