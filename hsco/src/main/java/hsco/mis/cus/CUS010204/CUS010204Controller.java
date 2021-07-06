package hsco.mis.cus.CUS010204;

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
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : CUS010204Controller.java
 * @Description     : 설문조사목록 게시여부를 관리하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 9. 15.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 15.       김병진             최초생성
 * </pre>  
 */

@Controller
public class CUS010204Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="CUS010204Service")
    CUS010204ServiceImpl CUS010204Service;
  
    /**
     * 설문조사목록 게시관리수정
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010204/examinNtceAtListU.do")
    public ModelAndView examinNtceAtListU(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("설문조사목록 게시관리 U 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(CUS010204Service, "examinNtceAtListU", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    

    /**
     * 내부결재레포트용데이터셋 목록 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010204/innerSanctnUbiDataset.do") 
    public ModelAndView innerSanctnUbiDataset(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(CUS010204Service, "innerSanctnUbiDataset", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    } 
    
    /**
     * 내부결재 저장
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010204/saveInnerSanc.do") 
    public ModelAndView saveInnerSanc(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(CUS010204Service, "saveInnerSanc", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    } 

    /**
     * 내부결재 번호 업데이트
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010204/innerSanctU.do") 
    public ModelAndView innerSanctU(NexacroMapDTO xpDto, Model model) throws Exception {
    	
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(CUS010204Service, "innerSanctU", xpDto, mav );
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
    } 
}
