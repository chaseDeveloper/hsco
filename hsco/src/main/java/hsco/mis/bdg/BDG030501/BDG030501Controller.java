package hsco.mis.bdg.BDG030501;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : BDG030501Controller.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 8. 25.
 * @version         : 1.0
 * @see             :
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 25.                  정윤원                최초생성
 * </pre>
 */
@Controller
public class BDG030501Controller extends BaseContoller {
    protected Logger log = LoggerFactory.getLogger(this.getClass());

    /**
	 * 예산서 출력기준년도 조회
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
    @RequestMapping("hsco/mis/bdg/BDG030501/selectBdgOutputStdrYear.do") 
    public ModelAndView selectUserInfo(NexacroMapDTO xpDto, Model model, HttpServletRequest req) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        HttpSession session = req.getSession();
        Map<String, Object> map = new HashMap<String, Object>();
        
        map.put("YEAR", session.getAttribute("bdgOutputStdrYear"));
        Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
        
        mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }    
    
    
    /**
     * 예산서 출력기준년도 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/bdg/BDG030501/saveBdgOutputStdrYear.do")
    public ModelAndView saveBdgOutputStdrYear(NexacroMapDTO xpDto, Model model, HttpServletRequest req) throws Exception {
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	HttpSession session = req.getSession();
    	
    	Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0); 
		}
		String year = inMap.get("YEAR").toString();
		
    	session.setAttribute("bdgOutputStdrYear", year);
    	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
    }
}