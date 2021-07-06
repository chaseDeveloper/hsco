package hsco.etc.itm.ITM040200;
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
 * @Class Name   	: ITM040200Controller.java
 * @Description  	: 월정기점검 내역을 관리하는 컨트롤러 클래스
 * @author       	: 이호준
 * @since        	: 2015. 6. 9.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.			  이호준			최초생성
 * </pre>  
 */

@Controller
public class ITM040200Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());    
    
    @Resource(name="ITM040200Service")
    ITM040200ServiceImpl ITM040200Service;
    
    /** 월정기점검관릐(월점검관리) 목록을  조회 */
    @RequestMapping("/hsco/etc/itm/ITM040200/ITM040200List.do") 
    public ModelAndView ITM040200List(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("월정기점검관릐(월점검관리) 목록을  조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(ITM040200Service, "ITM040200List", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        
        
        return mav;
        
    }
    
    /** 월정기점검관릐(월점검관리) 신규,수정,삭제 한다  */
    @RequestMapping("/hsco/etc/itm/ITM040200/ITM040200CUD.do")
    public ModelAndView ITM040200CUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("월정기점검관릐(월점검관리) 신규,수정,삭제 한다 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(ITM040200Service, "ITM040200CUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        
        
        return mav;
    }
    
    /** 월정기점검관리(운영현황표) 목록을  조회 */
    @RequestMapping("/hsco/etc/itm/ITM040200/ITM040200Tab2List.do") 
    public ModelAndView ITM040200Tab2List(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("월정기점검관릐(운영현황표) 목록을  조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(ITM040200Service, "ITM040200Tab2List", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /** 월정기점검관리(운영현황표) 월별 세부내역을  조회 */
    @RequestMapping("/hsco/etc/itm/ITM040200/ITM040200Tab22List.do") 
    public ModelAndView ITM040200Tab22List(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("월정기점검관릐(운영현황표) 월별 세부내역을  조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(ITM040200Service, "ITM040200Tab22List", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /** 월정기점검관리(운영현황표) 특이사항내역을  조회 */
    @RequestMapping("/hsco/etc/itm/ITM040200/ITM040200Tab23List.do") 
    public ModelAndView ITM040200Tab23List(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("월정기점검관릐(운영현황표) 특이사항내역을  조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(ITM040200Service, "ITM040200Tab23List", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    /** 월정기점검관리 운영현황표 보고서  조회 */
    @RequestMapping("/hsco/etc/itm/ITM040200/ITM040200Report.do") 
    public ModelAndView ITM040200Report(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("월정기점검관리 운영현황표 보고서  조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(ITM040200Service, "ITM040200Report", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    /** 이전자료 복사*/
    @RequestMapping("/hsco/etc/itm/ITM040200/ITM040200COPY.do") 
    public ModelAndView ITM040200COPY(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(ITM040200Service, "ITM040200COPY", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }   
    
    // 업체목록 팝업
    @RequestMapping("/hsco/etc/itm/ITM040200/ITM040200List_P.do") 
    public ModelAndView ITM070300List_P(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("업체 목록  조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(ITM040200Service, "ITM040200List_P", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;        
    }
    /** 장비구분 목록리스트를  조회 */
    @RequestMapping("/hsco/etc/itm/ITM040200/ITM040200ITCodeList.do") 
    public ModelAndView ITM040200ITCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("장비구분 목록리스트를  조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(ITM040200Service, "ITM040200ITCodeList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        
        return mav;
        
    }
    
    /** 장비구분 상세 리스트를  조회 */
    @RequestMapping("/hsco/etc/itm/ITM040200/ITM040200ITCodeDetail.do") 
    public ModelAndView ITM040200ITCodeDetail(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("장비구분 상세 리스트를  조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(ITM040200Service, "ITM040200ITCodeDetail", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /** 장비목록을  조회 */
    @RequestMapping("/hsco/etc/itm/ITM040200/ITM040200MODELCodeList.do") 
    public ModelAndView ITM040200MODELCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug(" 장비사용목록을  조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(ITM040200Service, "ITM040200MODELCodeList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
	/** 첨부파일 저장 **/
	@RequestMapping("/hsco/etc/itm/ITM040200/atchCUD.do")
	public ModelAndView atchCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM040200Service, "atchCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 사용자지침서 첨부파일을 삭제(삭제)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/etc/itm/ITM040200/ITM040200DFILE.do") 
	public ModelAndView ITM040200DFILE(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM040200Service, "ITM040200DFILE", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}
	
	
	/** HW비고란 등록 */
    @RequestMapping("/hsco/etc/itm/ITM040200/hwRmU.do") 
    public ModelAndView hwRmU(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("월정기점검관릐(월점검관리) 목록을  조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(ITM040200Service, "hwRmU", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        
        
        return mav;
        
    }
    
    
    
    /** SW비고란 등록 */
    @RequestMapping("/hsco/etc/itm/ITM040200/swRmU.do") 
    public ModelAndView swRmU(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("월정기점검관릐(월점검관리) 목록을  조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(ITM040200Service, "swRmU", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        
        
        return mav;
        
    }


}

