package hsco.mis.ass.ASS010500;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.sanc.SancServiceImpl;
import hsco.cmm.util.StringUtil;
import hsco.mis.ass.ASS010400.ASS010400ServiceImpl;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ASS010500Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 6. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 18	       이혜선		   최초생성
 * </pre>  
 */
@Controller
public class ASS010500Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="ass010500Service")
	ASS010500ServiceImpl ass010500Service;
	
    @Resource(name = "SancService")
    SancServiceImpl      sancService;	

    /**
	 * 취득물품(수급계획목록) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@RequestMapping("/hsco/mis/ass/ASS010500/thngReciptPlanAcList.do") 
	public ModelAndView thngReciptPlanAcList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("취득물품수급계획 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010500Service, "thngReciptPlanAcList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 취득물품(수급계획상세) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@RequestMapping("/hsco/mis/ass/ASS010500/thngReciptPlanDetail.do") 
	public ModelAndView thngReciptPlanDetail(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("취득물품수급계획 상세 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010500Service, "thngReciptPlanDetail", xpDto, mav);
		
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
    @RequestMapping("/hsco/mis/ass/ASS010500/selectFileList.do")
    public ModelAndView selectFileList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(ass010500Service, "selectFileList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }	
	
    /**
     * 물품수급계획 CUD
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */	
	@RequestMapping("/hsco/mis/ass/ASS010500/thngReciptPlanCUD.do")
	public ModelAndView thngReciptPlanCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("물품수금계획 저장 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010500Service, "thngReciptPlanCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/hsco/mis/ass/ASS010500/atldManageList.do") 
	public ModelAndView atldManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("불용품관리 리스트 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010500Service, "atldManageList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	@RequestMapping("/hsco/mis/ass/ASS010500/atldManageDetail.do") 
	public ModelAndView atldManageDetail(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("불용품관리상세 리스트 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010500Service, "atldManageDetail", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	@RequestMapping("/hsco/mis/ass/ASS010500/atldManageCUD.do")
	public ModelAndView atldManageCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("불용품관리 CUD----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010500Service, "atldManageCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

	@RequestMapping("/hsco/mis/ass/ASS010500/atldTrgetList.do") 
	public ModelAndView atldTrgetList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("불용품대상 리스트 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010500Service, "atldTrgetList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
}