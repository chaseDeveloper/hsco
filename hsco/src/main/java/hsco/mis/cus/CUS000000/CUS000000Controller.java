package hsco.mis.cus.CUS000000;

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
 * @Class Name   	: CUS000000Controller.java
 * @Description  	: 
 * @author       	: 
 * @since        	: 2016. 4. 5.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 4. 5.									최초생성
 * </pre>
 */
@Controller
public class CUS000000Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    
    @Resource(name="CUS000000Service")
    CUS000000ServiceImpl CUS000000Service;
	
	/**
	 * LONG 타입 마이그레이션 (민원내용)
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
    @RequestMapping("hsco/mis/cus/CUS000000/migration.do") 
    public ModelAndView migration(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(CUS000000Service, "migration", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }  
  
    
	/**
	 * LONG 타입 마이그레이션 (처리결과)
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
    @RequestMapping("hsco/mis/cus/CUS000000/migration2.do") 
    public ModelAndView migration2(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(CUS000000Service, "migration2", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    } 
    
	/**
	 * LONG 타입 마이그레이션 (자주묻는질문 질문내용)
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
    @RequestMapping("hsco/mis/cus/CUS000000/migration3.do") 
    public ModelAndView migration3(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(CUS000000Service, "migration3", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }  
  
    
	/**
	 * LONG 타입 마이그레이션 (자주묻는질문 처리내용)
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
    @RequestMapping("hsco/mis/cus/CUS000000/migration4.do") 
    public ModelAndView migration4(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(CUS000000Service, "migration4", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }    
    
	/**
	 * 로그인 사용자 정보 조회
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
    @RequestMapping("hsco/mis/cus/CUS000000/selectUserInfo.do") 
    public ModelAndView selectUserInfo(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(CUS000000Service, "selectUserInfo", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }    
    
	/**
	 * LONG 타입 마이그레이션 (감사 마이그레이션)
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
    @RequestMapping("hsco/mis/cus/CUS000000/migration5.do") 
    public ModelAndView migration5(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(CUS000000Service, "migration5", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }  
    
	/**
	 * LONG 타입 마이그레이션 (고객참여 마이그레이션)
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
    @RequestMapping("hsco/mis/cus/CUS000000/migration6.do") 
    public ModelAndView migration6(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(CUS000000Service, "migration6", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }  
    
	/**
	 * 홈페이지 회원 조회
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
    @RequestMapping("hsco/mis/cus/CUS000000/selectMemberList.do") 
    public ModelAndView selectMemberList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(CUS000000Service, "selectMemberList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
	/**
	 * 기타, 홈페이지 회원 조회(오프라인 민원 등록시)
	 * @param xpDto
	 * @param model
	 * @return 
	 * @throws Exception
	 */
    @RequestMapping("hsco/mis/cus/CUS000000/selectMemberList02.do") 
    public ModelAndView selectMemberList02(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(CUS000000Service, "selectMemberList02", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }    
    
    /**
     * 첨부파일 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS000000/selectFileList.do")
    public ModelAndView selectFileList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS000000Service, "selectFileList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    } 
    
    /**
     * 주택계약정보 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS000000/selectHcntrctrList.do")
    public ModelAndView selectHcntrctrList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS000000Service, "selectHcntrctrList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }       
}