package hsco.mis.cus.CUS010103;

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
 * @Class Name      : CUS010103Controller.java
 * @Description     : 담당자지정 테이블을 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 08. 11.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 11.      김병진               최초생성
 * </pre>  
 */

@Controller
public class CUS010103Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
	
    @Resource(name="CUS010103Service")
    CUS010103ServiceImpl CUS010103Service;
	
    /**
     * 해당부서의 사원목록 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    
	 @RequestMapping("hsco/mis/cus/CUS010103/selectEmpList.do") 
	    public ModelAndView selectEmpList(NexacroMapDTO xpDto, Model model) throws Exception {
	        
	        log.debug("해당부서의 사원목록 리스트 ----------------------------------------------------!");
	        ModelAndView mav = new ModelAndView("nexacroMapView");

	        execService(CUS010103Service, "selectEmpList", xpDto, mav );

	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        
	        return mav;
	    }   
	
    /**
     * 담당자지정 목록 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010103/selectChargerAppnList.do") 
        public ModelAndView selectChargerAppnList(NexacroMapDTO xpDto, Model model) throws Exception {
	        
	        log.debug("담당자지정 목록 리스트 ----------------------------------------------------!");
	        ModelAndView mav = new ModelAndView("nexacroMapView");
	    
            execService(CUS010103Service, "selectChargerAppnList", xpDto, mav );

            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
            
            return mav;
        }   
     
		
    /**
     * 담당자지정관리 테이블 저장/수정/삭제 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010103/chargerAppnListCUD.do")
	    public ModelAndView chargerAppnListCUD(NexacroMapDTO xpDto, Model model) throws Exception {
	        
	        log.debug("담당자지정관리 테이블 저장 시작----------------------------------------------------!");
	        ModelAndView mav = new ModelAndView("nexacroMapView");
	        
             execService(CUS010103Service, "chargerAppnListCUD", xpDto, mav);
             
             mav.addObject(NexacroConstant.ERROR_CODE, "0");
             mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
         
         return mav;
     }
    
    /**
     * 시스템 그룹 권한 사용자 조회(확인용) 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010103/authuserList.do")
	    public ModelAndView authuserList(NexacroMapDTO xpDto, Model model) throws Exception {
	        
	        log.debug("시스템 그룹 권한 사용자 조회 시작----------------------------------------------------!");
	        ModelAndView mav = new ModelAndView("nexacroMapView");
	        
             execService(CUS010103Service, "authuserList", xpDto, mav);
             
             mav.addObject(NexacroConstant.ERROR_CODE, "0");
             mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
         
         return mav;
     }
}