package hsco.mis.cus.CUS010101_OLD;

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
import hsco.mis.cus.CUS010101_OLD.CUS010101_OLDServiceImpl;



/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CUS010101Controller.java
 * @Description  	: 오프라인민원접수 목록을 관리하는 컨트롤러 클래스 
 * @author       	: 김병진
 * @since        	: 2015. 08. 03.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 03.  김병진	           최초생성
 * </pre>  
 */

@Controller
public class CUS010101_OLDController extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    
    @Resource(name="CUS010101_OLDService")
    CUS010101_OLDServiceImpl CUS010101_OLDService;
	
	/**
	 * 오프라인민원 목록 조회
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
    @RequestMapping("hsco/mis/cus/CUS010101/selectHmpgCvplList.do") 
    public ModelAndView selectHmpgCvplList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("오프라인민원목록 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(CUS010101_OLDService, "selectHmpgCvplList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }  
    
    /**
     * 민원분배관리 테이블 저장/수정/삭제 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
     
     @RequestMapping("/hsco/mis/cus/CUS010101/hmpgCvplDstbListCUD.do")
     public ModelAndView hmpgCvplDstbListCUD(NexacroMapDTO xpDto, Model model) throws Exception {
         
         log.debug("민원분배관리 테이블 저장 시작----------------------------------------------------!");
         ModelAndView mav = new ModelAndView("nexacroMapView");
         
		    execService(CUS010101_OLDService, "hmpgCvplListCUD", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
        return mav;
	}
	
	/**
	 * 고객정보  조회
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
    @RequestMapping("hsco/mis/cus/CUS010101/selectHmpgCstmrInfo.do") 
    public ModelAndView selectHmpgCstmrInfo(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("고객목록 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
    

        execService(CUS010101_OLDService, "selectHmpgCstmrInfo", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        }
	
}