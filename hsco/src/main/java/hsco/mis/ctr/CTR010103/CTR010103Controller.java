package hsco.mis.ctr.CTR010103;

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
 * @Class Name   	: CTR010103Controller.java
 * @Description  	: 기업자료관리
 * @author       	: 정 민
 * @since        	: 2017. 07. 04.
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
 *  2017. 07. 07ㄴ.					정 민				최초생성
 * </pre>
 */
@Controller
public class CTR010103Controller extends BaseContoller {

    protected Logger     log = LoggerFactory.getLogger(this.getClass());

    @Resource(name = "CTR010103Service")
    CTR010103ServiceImpl CTR010103Service;

   
    /**
    * 자료내역(기업자료 참고사항) 목록 조회 
    * 
    * @param xpDto
    * @param model
    * @return
    * @throws Exception
    */
   @RequestMapping("/hsco/mis/ctr/CTR010103/selectDtaReferMatterList.do")
   public ModelAndView selectDtaReferMatterList(NexacroMapDTO xpDto, Model model) throws Exception {
       
   	ModelAndView mav = new ModelAndView("nexacroMapView");

       execService(CTR010103Service, "selectDtaReferMatterList", xpDto, mav);

       mav.addObject(NexacroConstant.ERROR_CODE, "0");
       mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
       return mav;
   }
   
    /**
     * 기업자료관리(탭1 : 중소기업자료관리) 목록 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR010103/selectDtaSmlmdmEntrprsList.do")
    public ModelAndView selectDtaSmlmdmEntrprsList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR010103Service, "selectDtaSmlmdmEntrprsList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    
    /**
     * 기업자료관리(탭2 : 인증신제품기업관리) 목록 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR010103/selectDtaCrtfcNwPrductList.do")
    public ModelAndView selectDtaCrtfcNwPrductList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR010103Service, "selectDtaCrtfcNwPrductList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    
    /**
     * 기업자료관리(탭3 : 중증장애인기업관리) 목록 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR010103/selectDtaSrsillDspsnList.do")
    public ModelAndView selectDtaSrsillDspsnList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR010103Service, "selectDtaSrsillDspsnList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    
    /**
     * 기업자료관리(탭4 : 녹색제품기업관리) 목록 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR010103/selectGreenPrductTrgetThngList.do")
    public ModelAndView selectGreenPrductTrgetThngList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR010103Service, "selectGreenPrductTrgetThngList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    
    /**
     * 기업자료관리(탭5 : 인증사회적기업관리) 목록 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR010103/selectDtaSoctyEntrprsList.do")
    public ModelAndView selectDtaSoctyEntrprsList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR010103Service, "selectDtaSoctyEntrprsList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    
    /**
     * 기업자료관리(탭6 : 사회적협동조합기업관리) 목록 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR010103/selectDtaSoctyCperMxtrList.do")
    public ModelAndView selectDtaSoctyCperMxtrList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR010103Service, "selectDtaSoctyCperMxtrList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    /**
     * 기업자료관리(탭7 : 장애인표준사업장관리) 목록 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR010103/selectDtaDspsnStdBplcList.do")
    public ModelAndView selectDtaDspsnStdBplcList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR010103Service, "selectDtaDspsnStdBplcList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    /**
     * 기업자료관리(탭1 : 중소기업자료관리) 목록 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR010103/saveDtaSmlmdmEntrprsList.do")
    public ModelAndView saveDtaSmlmdmEntrprsList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR010103Service, "saveDtaSmlmdmEntrprsList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    
    /**
     * 기업자료관리(탭2 : 인증신제품기업관리) 목록 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR010103/saveDtaCrtfcNwPrductList.do")
    public ModelAndView saveDtaCrtfcNwPrductList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR010103Service, "saveDtaCrtfcNwPrductList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    
    /**
     * 기업자료관리(탭3 : 중증장애인기업관리) 목록 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR010103/saveDtaSrsillDspsnList.do")
    public ModelAndView saveDtaSrsillDspsnList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR010103Service, "saveDtaSrsillDspsnList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    
    /**
     * 기업자료관리(탭4 : 녹색제품기업관리) 목록 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR010103/saveGreenPrductTrgetThngList.do")
    public ModelAndView saveGreenPrductTrgetThngList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR010103Service, "saveGreenPrductTrgetThngList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    
    /**
     * 기업자료관리(탭5 : 인증사회적기업관리) 목록 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR010103/saveDtaSoctyEntrprsList.do")
    public ModelAndView saveDtaSoctyEntrprsList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR010103Service, "saveDtaSoctyEntrprsList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    
    /**
     * 기업자료관리(탭6 : 사회적협동조합기업관리) 목록 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR010103/saveDtaSoctyCperMxtrList.do")
    public ModelAndView saveDtaSoctyCperMxtrList(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR010103Service, "saveDtaSoctyCperMxtrList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    
    
    /**
     * 기업자료관리(탭7 : 장애인표준사업장관리) 목록 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR010103/saveDtaDspsnStdBplcList.do")
    public ModelAndView saveDtaDspsnStdBplcList(NexacroMapDTO xpDto, Model model) throws Exception {
    	System.out.println("장애인표준사업장관리 Controller");
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR010103Service, "saveDtaDspsnStdBplcList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

}
