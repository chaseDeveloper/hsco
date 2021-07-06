package hsco.com.sym.cdm.deptCode;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: deptCodeController.java
 * @Description  	: 부서조회
 * @author       	: 정윤원
 * @since        	: 2015. 7. 14.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 14.                   정윤원                최초생성
 * </pre>
 */

@Controller
public class DeptCodeController {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @Resource(name = "DeptCodeService")
    DeptCodeServiceImpl DeptCodeService;

    @RequestMapping("/hsco/com/sym/cdm/deptCode/selectDeptCode.do")
    public ModelAndView selectDeptCode(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        if(log.isInfoEnabled())
		    log.info("selectDeptCode called!");
        try {
            DataSetMap tranInfo = xpDto.getTranInfoMap();
            Map<String, Object> inVar = xpDto.getInVariableMap();
            Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
            Map<String, Object> outVar = xpDto.getOutVariableMap();
            Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

            DeptCodeService.selectDeptCode(tranInfo, inVar, inDataset, outVar, outDataset);

            mav.addObject(NexacroConstant.OUT_VARIABLES_ATT_NAME, xpDto.getOutVariableMap());
            mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
        } catch (Exception e) {
            e.printStackTrace();
            mav.addObject(NexacroConstant.ERROR_CODE, "-1");
            mav.addObject(NexacroConstant.ERROR_MSG, e.toString());
        }
        return mav;
    }
}