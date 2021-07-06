package hsco.cmm.ums;

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
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: UmsController.java
 * @Description  	: SMS 메시지 팝업
 * @author       	: 이동석
 * @since        	: 2016. 3. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 3. 14.				   이동석			   최초생성
 * </pre>
 */

@Controller
public class UmsController extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(UmsController.class);    
    
    @Resource(name="UmsService")
    UmsServiceImpl UmsService;
    
    /**
     * SMS 메시지조회 
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/cmm/ums/selectDeptcodeList.do") 
    public ModelAndView selectDeptcodeList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(UmsService, "selectDeptcodeList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 부서정보조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/cmm/ums/selectSmstranList.do") 
    public ModelAndView selectSlaryList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(UmsService, "selectSmstranList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
	
	
    /**
     * SMS 메시지 등록, 수정, 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/cmm/ums/sendUms.do")
    public ModelAndView smstranCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("SMS 메시지 관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(UmsService, "smstranCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    /**
     * 메시지구분 등록
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/cmm/ums/CmmnCode_I.do")
    public ModelAndView CmmnCode_I(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("메시지구분 등록 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(UmsService, "CmmnCode_I", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }    
    
    /**
     * 메시지구분 수정
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/cmm/ums/CmmnCode_U.do")
    public ModelAndView CmmnCode_U(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("메시지구분 수정 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(UmsService, "CmmnCode_U", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    } 
     
    /**
     * 메시지구분 삭제
     * @param xpDto
     * @param model 
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/cmm/ums/CmmnCode_D.do")
    public ModelAndView CmmnCode_D(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("메시지구분 삭제 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(UmsService, "CmmnCode_D", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }     
    
    /**
     * 이메일 등록, 수정, 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/cmm/ums/EmailsendCUD.do")
    public ModelAndView emailsendCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("이메일발송 관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(UmsService, "emailsendCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
	
    /**
     * SMS 메시지 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/cmm/ums/SmstranC_D.do")
    public ModelAndView SmstranC_D(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("SMS 메시지 관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(UmsService, "SmstranC_D", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
 
	
	/**
	 * 시스템 구분코드 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/cmm/ums/selectJobSeList.do") 
	public ModelAndView selectJobSeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(UmsService, "selectJobSeList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
		
	/**
	 * 메시지 구분코드 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/cmm/ums/selectMessageSeList.do") 
	public ModelAndView selectMessageSeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(UmsService, "selectMessageSeList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 메시지 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/cmm/ums/mssageManageList.do") 
	public ModelAndView mssageManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(UmsService, "mssageManageList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 맞춤문자 등록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/cmm/ums/CustomMessageReg.do") 
	public ModelAndView CustomMessageReg(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(UmsService, "CustomMessageReg", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		
	} 	
	
	/**
	 * 맞춤문자 수정
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/cmm/ums/CustomMessge_U.do") 
	public ModelAndView CustomMessge_U(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(UmsService, "CustomMessge_U", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		
	}	
		
	
	/**
	 * 맞춤문자 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/cmm/ums/CustomMessge_D.do") 
	public ModelAndView CustomMessge_D(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(UmsService, "CustomMessge_D", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		
	}	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION: 개인정보 조회 로그
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 * 2016. 8. 07.
	 * </pre>
	 */
	@RequestMapping("hsco/cmm/ums/getListMailSendLog.do") 
	public ModelAndView getListMailSendLog(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(UmsService, "getListMailSendLog", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	 
    
	
}
