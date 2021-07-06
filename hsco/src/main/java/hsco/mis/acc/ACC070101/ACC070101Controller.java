package hsco.mis.acc.ACC070101;

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
import hsco.cmm.sanc.SancServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC020203Controller.java
 * @Description  	: 수입결의등록을 관리하는 Controller 클래스 
 * @author       	: 이상명
 * @since        	: 2015. 07. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 20.	이상명		최초생성
 * </pre>  
 */
@Controller
public class ACC070101Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC070101Controller.class);
	
	@Resource(name="acc070101Service")
	ACC070101ServiceImpl acc070101Service;
	
    @Resource(name = "SancService")
    SancServiceImpl      sancService;
	/**
	 * 수입결의 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC070101/incDsnList.do") 
	public ModelAndView incDsnList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(acc070101Service, "incDsnList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/**
	 * 수입결의서 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC070101/selectIncDsn.do") 
	public ModelAndView selectIncDsn(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(acc070101Service, "selectIncDsn", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/**
	 * 수입결의서 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC070101/saveIncDsn.do") 
	public ModelAndView saveIncDsn(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(acc070101Service, "saveIncDsn", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/**
	 * 수입결의서 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC070101/incDsnD.do") 
	public ModelAndView incDsnD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(acc070101Service, "incDsnD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
    /**
     * 첨부파일
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/acc/ACC070101/selectAtchFile.do") 
    public ModelAndView selectAtchFile(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(acc070101Service, "selectAtchFile", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
	 * 수입결의서 결재초기화
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/acc/ACC070101/updateSanctnNo.do")
    public ModelAndView updateSanctnNo(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(acc070101Service, "updateSanctnNo", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
}

