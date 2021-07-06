package hsco.cmm.cmmCode.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.cmmCode.service.impl.CmmCodeServiceImpl;
import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CmmCodeController.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 6. 6.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 6.					정윤원				최초생성
 * </pre>  
 */
@Controller
public class CmmCodeController extends BaseContoller  {

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
	/** Log Factory */
    private Logger log = LoggerFactory.getLogger(CmmCodeController.class);
    
    /** Service Call */
    @Resource(name = "cmmCodeService")
    protected CmmCodeServiceImpl cmmCodeService;
    
    /**
     * 그룹코드 목록조회
     * @param HttpServletRequest req
     * @param HttpServletResponse res
     * @param ComnCdSrchVO comnCdSrchVo
     * @return ModelAndView mv
     * @throws Exception   
     */
    @RequestMapping(value = { "/hsco/cmm/cmmCode/cmmCodeList.do" })
    public ModelAndView cmmCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
    	log.debug("코드 조회 ----------------------------------------------------!");
		
    	ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmmCodeService, "cmmCodeList", xpDto, mav);
		
		return mav;
    }
    
    @RequestMapping(value = { "/hsco/cmm/cmmCode/cmmCodeList2.do" })
    public ModelAndView cmmCodeList2(NexacroMapDTO xpDto, Model model) throws Exception {
    	log.debug("코드조회2 ----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmmCodeService, "cmmCodeList2", xpDto, mav);
		
		return mav;
		
    }
    
    @RequestMapping(value = { "/hsco/cmm/cmmCode/cmmCodeList3.do" })
    public ModelAndView cmmCodeList3(NexacroMapDTO xpDto, Model model) throws Exception {
    	log.debug(" 콤보 코드 조회3 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmmCodeService, "cmmCodeList3", xpDto, mav);
		
		return mav;
		
    }
    
    @RequestMapping(value = { "/hsco/cmm/cmmCode/cmmServerDate.do" })
    public ModelAndView cmmServerDate(NexacroMapDTO xpDto, Model model) throws Exception {
    	log.debug(" Server SYSDATE ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmmCodeService, "cmmServerDate", xpDto, mav);
		
		return mav;
		
    }
    /**
     * 메뉴벼 메뉴레벨별 메뉴 목록을 조회한다(콤보용)
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping(value = { "/hsco/cmm/cmmCode/cmmMenuList.do" })
    public ModelAndView cmmMenuList(NexacroMapDTO xpDto, Model model) throws Exception {
    	log.debug(" Server SYSDATE ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmmCodeService, "cmmMenuList", xpDto, mav);
		
		return mav;
		
    }
}
