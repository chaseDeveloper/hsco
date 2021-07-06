package hsco.mis.bdg.BDG030302;

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
 * @Class Name   	: BDG030302Controller.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 07. 15.
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
 *  2015. 07. 15.                  정윤원                최초생성
 * </pre>
 */
@Controller
public class BDG030302Controller extends BaseContoller {
    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @Resource(name = "BDG030302Service")
    BDG030302ServiceImpl BDG030302Service;

    /**
     * 실행예산, 입력가능여부 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/bdg/BDG030302/selectStacntGrp.do")
    public ModelAndView selectStacntGrp(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(BDG030302Service, "selectStacntGrp", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    /**
     * 이월예산 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/bdg/BDG030302/selectStacntDetail.do")
    public ModelAndView selectStacntDetail(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(BDG030302Service, "selectStacntDetail", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    /**
     * 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/bdg/BDG030302/save.do")
    public ModelAndView save(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(BDG030302Service, "save", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

        return mav;
    }

    /**
     * 이월예산 확정
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/bdg/BDG030302/saveExecutCyfd.do")
    public ModelAndView saveExecutCyfdTmp(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(BDG030302Service, "saveExecutCyfd", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }

    /**
     * 예산서 출력대상 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/bdg/BDG030302/selectPrint.do")
    public ModelAndView selectPrint(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(BDG030302Service, "selectPrint", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    
    /**
  	 *  사업지구 정보 리스트
  	 * @param xpDto
  	 * @param model
  	 * @return ModelAndView
  	 * @throws Exception
  	 */
  	@RequestMapping("hsco/mis/bdg/BDG030302/businessDistrictList.do") 
  	public ModelAndView businessDistrictList(NexacroMapDTO xpDto, Model model) throws Exception {
  		log.debug("사업지구 리스트----------------------------------------------------!");
  		
  		ModelAndView mav = new ModelAndView("nexacroMapView");
  		
  		execService(BDG030302Service, "businessDistrictList", xpDto, mav);
  		
  		mav.addObject(NexacroConstant.ERROR_CODE, "0");
  		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  		
  		return mav;
  	}
    
}