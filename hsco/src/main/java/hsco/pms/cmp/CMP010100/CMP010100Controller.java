package hsco.pms.cmp.CMP010100;

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
 * @Class Name   	: CMP010100Controller.java
 * @Description  	: 보상사업지구를 관리하는 컨트롤러 클래스
 * @author       	: 변승우
 * @since        	: 2015. 6. 11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 11.					변승우				최초생성
 * </pre>  
 */

@Controller
public class CMP010100Controller extends BaseContoller{
	
	private final Logger log = LoggerFactory.getLogger(CMP010100Controller.class);
	
	@Resource(name="CMP010100Service")
	CMP010100ServiceImpl cmp010100Service;
	
	/**
	 *  보상사업지구 정보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/cmp/CMP010100/rewardBsnsDstrcList.do") 
	public ModelAndView rewardBsnsDstrcList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상사업지구 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp010100Service, "rewardBsnsDstrcList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 보상사업지구 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/cmp/CMP010100/rewardBsnsDstrcCUD.do") 
	public ModelAndView rewardBsnsDstrcCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상사업지구,소재지,감정평가법인 CUD (저장,수정,삭제)----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp010100Service, "rewardBsnsDstrcCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 *  소재지 정보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/cmp/CMP010100/locplcInfoList.do") 
	public ModelAndView locplcInfoList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("소재지 리스트----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp010100Service, "locplcInfoList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 소재지 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/cmp/CMP010100/locplcInfoCUD.do") 
	public ModelAndView locplcInfoCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상사업지구,소재지,감정평가법인 CUD (저장,수정,삭제)----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp010100Service, "locplcInfoCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 *  감정평가법인 정보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/cmp/CMP010100/bsnsbyPrpraprList.do") 
	public ModelAndView servcEntrpsList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("감정평가법인 리스트----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp010100Service, "bsnsbyPrpraprList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 감정평가사 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/cmp/CMP010100/bsnsbyPrpraprCUD.do") 
	public ModelAndView bsnsbyPrpraprCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상사업지구,소재지,감정평가법인 CUD (저장,수정,삭제)----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp010100Service, "bsnsbyPrpraprCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}

	/**
	 * 감정평가사 목록(팝업)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/cmp/CMP010100/bsnsbyPrpraprpPopList.do") 
	public ModelAndView selectServcEntrps_popList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상사업지구 감정평가사 리스트----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp010100Service, "bsnsbyPrpraprpPopList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 보상사업지구 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/cmp/CMP010100/rewardBsnsDstrcAllCUD.do") 
	public ModelAndView rewardBsnsDstrcAllCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상사업지구,소재지,감정평가법인 CUD (저장,수정,삭제)----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp010100Service, "rewardBsnsDstrcAllCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 *  사업지구 정보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/cmp/CMP010100/businessDistrictList.do") 
	public ModelAndView businessDistrictList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("사업지구 리스트----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp010100Service, "businessDistrictList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 *  사업지구 코드 채번
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/cmp/CMP010100/businessDistrictCode.do") 
	public ModelAndView businessDistrictCode(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("사업지구 코드 채번----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp010100Service, "businessDistrictCode", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}