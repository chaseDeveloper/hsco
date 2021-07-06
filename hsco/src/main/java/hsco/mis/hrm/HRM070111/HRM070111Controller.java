package hsco.mis.hrm.HRM070111;

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
 * @Class Name   	: HRM070111Controller.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 12. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 12. 02.   김형태		최초생성
 * </pre>  
 */

@Controller
public class HRM070111Controller extends BaseContoller {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM070111Service")
	HRM070111ServiceImpl HRM070111Service;
	
	@Resource(name = "SancService")
    SancServiceImpl      sancService;	
	
	/**
     * 신규버튼 클릭시 신청자 정보 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM070111/selectNewData.do")
    public ModelAndView selectNewData(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM070111Service, "selectNewData", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
    /**
     * 휴일근무신청 상세 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM070111/selectRestDeWorkR.do")
    public ModelAndView selectRestDeWorkR(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM070111Service, "selectRestDeWorkR", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
	
	/**
     * 휴일근무신청 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM070111/selectRestDeWorkList.do")
    public ModelAndView selectRestDeWorkList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM070111Service, "selectRestDeWorkList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
	
	/**
     * 저장(CUD)
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM070111/saveRestDeWorkCUD.do")
    public ModelAndView saveSptWorkCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070111Service, "saveRestDeWorkCUD", xpDto, mav);

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
    @RequestMapping("/hsco/mis/hrm/HRM070111/approve.do")
    public ModelAndView saveSanc(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }

        map.put("DIV", "HRM4013");      // 515 : 휴일근무신청서

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
        
        execService(HRM070111Service, "approveCUD", xpDto, mav);    // 대체근무 테이블에 전자결재번호 업데이트 수행

        mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }    
    
    
	/**  휴일근무신청 전자결제 (N건 처리)*/
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@RequestMapping("/hsco/mis/hrm/HRM070111/approveN.do")
	public ModelAndView approveN(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }

        map.put("DIV", "HRM4013");      // 515 : 휴일근무신청서

        // 자동 데이터 세팅(Key 채번)
        StringBuffer buffer = new StringBuffer();
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy");
        String yyyy = dayTime.format(new Date(time));
        Integer keySeq = sancService.selectSeqKey();
        System.out.println("keySeq : " + keySeq);
        
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

        // 1~5 까지  결재번호 저장 	
        String empno;
        String seq;
        String altrtvWorkDe;
        empno = (String) map.get("EMPNO1");
        seq = (String) map.get("SEQ1");
        altrtvWorkDe = (String) map.get("ALTRTV_WORK_DE1");
        if (seq != null) {
            map.put("EMPNO", empno);
        	map.put("SEQ", seq);
        	map.put("ALTRTV_WORK_DE", altrtvWorkDe);
        	execService(HRM070111Service, "approveCUD", xpDto, mav);
        }	
        //System.out.println("resultMap 1: empno : [" + empno + "]   seq : [" + seq + "]   seq.length() : [" + seq.length() + "]");
        empno = (String) map.get("EMPNO2");
        seq = (String) map.get("SEQ2");
        altrtvWorkDe = (String) map.get("ALTRTV_WORK_DE2");
        if (seq != null) {
        	map.put("EMPNO", empno);
        	map.put("SEQ", seq);
        	map.put("ALTRTV_WORK_DE", altrtvWorkDe);
        	execService(HRM070111Service, "approveCUD", xpDto, mav);
        }	
        empno = (String) map.get("EMPNO3");
        seq = (String) map.get("SEQ3");
        altrtvWorkDe = (String) map.get("ALTRTV_WORK_DE3");
        if (seq != null) {
        	map.put("EMPNO", empno);
        	map.put("SEQ", seq);
        	map.put("ALTRTV_WORK_DE", altrtvWorkDe);
        	execService(HRM070111Service, "approveCUD", xpDto, mav);
        }	
        empno = (String) map.get("EMPNO4");
        seq = (String) map.get("SEQ4");
        altrtvWorkDe = (String) map.get("ALTRTV_WORK_DE4");
        if (seq != null) {
        	map.put("EMPNO", empno);
        	map.put("SEQ", seq);
        	map.put("ALTRTV_WORK_DE", altrtvWorkDe);
        	execService(HRM070111Service, "approveCUD", xpDto, mav);
        }	
        empno = (String) map.get("EMPNO5");
        seq = (String) map.get("SEQ5");
        altrtvWorkDe = (String) map.get("ALTRTV_WORK_DE5");
        if (seq != null) {
        	map.put("EMPNO", empno);
        	map.put("SEQ", seq);
        	map.put("ALTRTV_WORK_DE", altrtvWorkDe);
        	execService(HRM070111Service, "approveCUD", xpDto, mav);
        }	

        mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
        
	}

}