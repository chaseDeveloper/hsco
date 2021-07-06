package hsco.hpm.lguplus.HPM090101;

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
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HPM090101Controller.java
 * @Description     : LG U+ 정산내역
 * @author          : 이수지
 * @since           : 2018. 01. 29.
 * @version         : 1.0
 * @see             :
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                            작성자         내용
 * ------------------------------------------------------------------
 *  2018. 01. 29.                   이수지         최초생성
 * </pre>
 */

@Controller
public class HPM090101Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(HPM090101Controller.class);
	@Resource(name="HPM090101Service")
	HPM090101ServiceImpl HPM090101Service;
	
	/**
	 * LG U+ 상점ID 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/lguplus/HPM090101/selectStoreIdList.do")
	public ModelAndView selectStoreIdList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("selectSuplyInfoList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM090101Service, "selectStoreIdList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * LG U+ 정산내역 목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/lguplus/HPM090101/lgExcclcDataList.do")
	public ModelAndView selectRcpmnyDtlsManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("selectSuplyInfoList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM090101Service, "lgExcclcDataList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

    /**
     * LG U+ 정산내역 생성
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/hpm/lguplus/HPM090101/lgExcclcData.do")
    public ModelAndView lgExcclcData(NexacroMapDTO xpDto, Model model) throws Exception {
        if(log.isInfoEnabled()) log.info("selectSuplyInfoList Started!");
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HPM090101Service, "makeUplusData", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
}