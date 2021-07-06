package hsco.mis.cus.CUS020104;

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
 * @Class Name      : CUS020104Controller.java
 * @Description     : 자주묻는질문 목록을 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 08. 07.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 07.      김병진              최초생성
 * </pre>  
 */

@Controller
public class CUS020104Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
	
    @Resource(name="CUS020104Service")
    CUS020104ServiceImpl CUS020104Service;
	
    /**
     * 자주묻는질문 목록 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS020104/selectIndpndQestnList.do") 
    public ModelAndView selectIndpndQestnList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("자주묻는질문 목록 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

	        execService(CUS020104Service, "selectIndpndQestnList", xpDto, mav );

	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        
	        return mav;
	    }   
	 
		
    /**
     * 자주묻는질문 테이블 저장/수정/삭제 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS020104/indpndQestnListCUD.do")
    public ModelAndView indpndQestnListCUD(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("자주묻는질문 테이블 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
             execService(CUS020104Service, "indpndQestnListCUD", xpDto, mav);
             
             mav.addObject(NexacroConstant.ERROR_CODE, "0");
             mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
         
         return mav;
     }

}