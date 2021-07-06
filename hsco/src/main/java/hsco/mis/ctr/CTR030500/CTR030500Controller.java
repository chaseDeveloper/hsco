package hsco.mis.ctr.CTR030500;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CTR030500Controller.java
 * @Description  	: 계약심의요청
 * @author       	: 정 민
 * @since        	: 2017. 07. 19.
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
 *  2017. 07. 19.					정 민				최초생성
 * </pre>
 */
@Controller
public class CTR030500Controller extends BaseContoller {

    protected Logger     log = LoggerFactory.getLogger(this.getClass());

    @Resource(name = "CTR030500Service")
    CTR030500ServiceImpl CTR030500Service;

   
    /**
    * 계약심의요청 목록 조회
    * 
    * @param xpDto
    * @param model
    * @return
    * @throws Exception
    */
   @RequestMapping("/hsco/mis/ctr/CTR030500/selectCntrctDlbrtCmitList.do")
   public ModelAndView selectCntrctDlbrtCmitList(NexacroMapDTO xpDto, Model model) throws Exception {
       
   	ModelAndView mav = new ModelAndView("nexacroMapView");

       execService(CTR030500Service, "selectCntrctDlbrtCmitList", xpDto, mav);

       mav.addObject(NexacroConstant.ERROR_CODE, "0");
       mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
       return mav;
   }
   
    
    /**
     * 계약심의요청 목록 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR030500/saveCntrctDlbrtCmitList.do")
    public ModelAndView saveCntrctDlbrtCmitList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR030500Service, "saveCntrctDlbrtCmitList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

}
