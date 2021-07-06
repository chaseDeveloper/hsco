package hsco.pms.prj.PRJ010108;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ010108Controller.java
 * @Description  	: 
 * @author       	: 이수지
 * @since        	: 2017. 10. 31.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 10. 31.                  이수지                최초생성
 * </pre>
 */
@Controller
public class PRJ010108Controller extends BaseContoller {
    protected Logger log = LoggerFactory.getLogger(PRJ010108Controller.class);

    @Resource(name = "PRJ010108Service")
    PRJ010108ServiceImpl PRJ010108Service;

    /**
     * 참여기술자 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/prj/PRJ010108/selectDsMain.do")
    public ModelAndView selectDsMain(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(PRJ010108Service, "selectDsMain", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    

    /**
     * 참여기술자 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/prj/PRJ010108/saveDsMain.do")
    public ModelAndView saveDsMain(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(PRJ010108Service, "saveDsMain", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

        return mav;
    }
    

    /**
     * 참여기술자 변경목록 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/prj/PRJ010108/selectDsSub.do")
    public ModelAndView selectDsSub(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(PRJ010108Service, "selectDsSub", xpDto, mav);
        
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
    @RequestMapping("/hsco/pms/prj/PRJ010108/selectCtgryFile.do")
    public ModelAndView selectCtgryFile(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(PRJ010108Service, "selectCtgryFile", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    
    /**
     * 표준문서 정보 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/prj/PRJ010108/saveCtgryFile.do")
    public ModelAndView saveCtgryFile(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(PRJ010108Service, "saveCtgryFile", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
}