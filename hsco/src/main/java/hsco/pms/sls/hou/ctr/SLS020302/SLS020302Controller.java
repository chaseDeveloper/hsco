package hsco.pms.sls.hou.ctr.SLS020302;

import java.io.File;
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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS020302Controller.java
 * @Description  	: 
 * @author       	: 변승우
 * @since        	: 2015. 8. 28.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 28.					변승우				최초생성
 * </pre>  
 */
@Controller
public class SLS020302Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS020302Service")
	SLS020302ServiceImpl SLS020302Service;
	
	
	/**
	 * 사용자콤보 주택코드 조회영역
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020302/houseCodeSh.do")
	public ModelAndView houseCodeSh(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택코드 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020302Service, "houseCodeSh", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	
	/**
	 * 자격구분 조회영역
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020302/selectQualfDivList.do")
	public ModelAndView qualfDivList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("자격구분 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020302Service, "qualfDivList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	

	/**
	 * 자격구분 조회영역
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020302/selectHouseMvnWaitrList.do")
	public ModelAndView houseMvnWaitrList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("자격구분 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020302Service, "houseMvnWaitrList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	/**
	 * 자격구분 조회영역
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020302/selectHouseHcntrctrList.do")
	public ModelAndView houseHcntrctrList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("자격구분 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020302Service, "houseHcntrctrList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}

	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020302/downloadFile.do")
	public ModelAndView downloadFile(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView();
		
    	String downFileName = "주택소유조회결과.txt"; 
		File AtcngReqstFile = SLS020302Service.getDownloadFile(xpDto);
		
		if(AtcngReqstFile == null){
			throw new NexaServiceException("err.파일.다운로드.실패");
		}
		
		xpDto.getRequest().setAttribute("downFileName", downFileName);
		
		mav.setViewName("download");
		mav.addObject("downloadFile", AtcngReqstFile);
		
		return mav;
	}	
}
