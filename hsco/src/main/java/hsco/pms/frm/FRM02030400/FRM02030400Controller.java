package hsco.pms.frm.FRM02030400;

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
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.sanc.SancServiceImpl;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: FRM02030400Controller.java
 * @Description  	: 반납결의
 * @author       	: 김지훈
 * @since        	: 2016. 02. 03.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 02. 03.					김지훈			최초생성
 * </pre>  
 */
@Controller
public class FRM02030400Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="FRM02030400Service")
	FRM02030400ServiceImpl FRM02030400Service;
	
	
	@Resource(name = "SancService")
    SancServiceImpl      sancService;	
	
	/**
	 * 반납결의 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/frm/FRM02030400/selectFrmRturnDecsn.do")
	public ModelAndView selectFrmRturnDecsn(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FRM02030400Service, "selectFrmRturnDecsn", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	

	/**
	 * 반납결의 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/frm/FRM02030400/saveFrmRturnDecsn.do")
	public ModelAndView saveFrmEndwExpndtrDecsn(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FRM02030400Service, "saveFrmRturnDecsn", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	
	/**
	 * 반납결의 전표 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/frm/FRM02030400/selectFrmEndwChit.do")
	public ModelAndView selectFrmEndwChit(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FRM02030400Service, "selectFrmEndwChit", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 반납결의 전표상세 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/frm/FRM02030400/selectFrmEndwChitDetail.do")
	public ModelAndView selectFrmEndwChitDetail(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FRM02030400Service, "selectFrmEndwChitDetail", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	 /**
     * 내부결재레포트용데이터셋 목록 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/frm/FRM02030400/innerSanctnUbiDataset.do") 
    public ModelAndView innerSanctnUbiDataset(NexacroMapDTO xpDto, Model model) throws Exception {
        

        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(FRM02030400Service, "innerSanctnUbiDataset", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    } 
    
    

	/**
	 * 내부결재번호저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/frm/FRM02030400/saveInnerSanctionId.do")
	public ModelAndView saveInnerSanctionId(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FRM02030400Service, "saveInnerSanctionId", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	

	
}
