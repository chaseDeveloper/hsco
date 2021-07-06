package hsco.mis.aud.AUD010105;

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
 * @Class Name      : AUD010105Controller.java
 * @Description     : 내외부감사결과관리를 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 06. 22.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 06. 22.      김병진             최초생성
 * </pre>  
 */

@Controller
public class AUD010105Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="AUD010105Service")
    AUD010105ServiceImpl AUD010105Service;
    
    /**
     * 내외부 감사관리 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD010105/selectInExAdList.do") 
    public ModelAndView selectInExAdList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("내외부감사관리 목록 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(AUD010105Service, "selectInExAdList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
    /**
     * 감사결과관리_처분요구서 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD010105/selectDspsDmdList.do") 
    public ModelAndView selectDspsDmdList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("처분요구서 상세 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD010105Service, "selectDspsDmdList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   

    /**
     * 감사결과관리_처분요구서 저장/수정/삭제
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD010105/DspsDmdListCUD.do")
    public ModelAndView DspsDmdListCUD(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("처분요구서 테이블 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(AUD010105Service, "DspsDmdListCUD", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    /**
     * 감사결과관리_처분요구서(문책) 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD010105/selectDspsDmdCnsreList.do") 
    public ModelAndView selectDspsDmdCnsreList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("조치결과서 상세 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD010105Service, "selectDspsDmdCnsreList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   

    /**
     * 감사결과관리_처분요구서(문책) 저장/수정/삭제
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD010105/DspsDmdCnsreListCUD.do")
    public ModelAndView DspsDmdCnsreListCUD(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("처분요구서 테이블 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(AUD010105Service, "DspsDmdCnsreListCUD", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }

    /**
     * 현지조치요구서 불러오기
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD010105/getAmdList.do")
    public ModelAndView getAmdList(NexacroMapDTO xpDto, Model model)
    		throws Exception {
    	
    	log.debug("현지조치요구서 가져오기 시작----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(AUD010105Service, "getAmdList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
    }
}
