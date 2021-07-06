package hsco.mis.hrm.HRM050201;

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
 * @Class Name   	: HRM050201Controller.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 10. 09.
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
 * 2015. 10. 09.   김형태		최초생성
 * </pre>
 */

@Controller
public class HRM050201Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "HRM050201Service")
	HRM050201ServiceImpl HRM050201Service;

	@Resource(name = "SancService")
	SancServiceImpl sancService;

	/**
	 * 일반승급대상자 기초자료 생성
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM050201/tbhrmTrgterCreat.do")
	public ModelAndView tbhrmTrgterCreat(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM050201Service, "tbhrmTrgterCreat", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

	/**
	 * 호봉승급정보 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM050201/tbhrmPromtPrsList.do")
	public ModelAndView tbhrmPromtPrsList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM050201Service, "tbhrmPromtPrsList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

	/**
	 * 저장(CUD)
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM050201/tbhrmPromtSave.do")
	public ModelAndView tbhrmPromtSave(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM050201Service, "tbhrmPromtSave", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/**
	 * 승급적용
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM050201/tbhrmPromtAt.do")
	public ModelAndView tbhrmPromtAt(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM050201Service, "tbhrmPromtAt", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/**
	 * 승급취소
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM050201/tbhrmPromtAtC.do")
	public ModelAndView tbhrmPromtAtC(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM050201Service, "tbhrmPromtAtC", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/**
	 * 전자결재
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@RequestMapping("/hsco/mis/hrm/HRM050201/approve.do")
	public ModelAndView saveSanc(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		Map map = null;
		Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			map = inDsMap.get(0);
		}

		map.put("DIV", "HRM5023"); // 호봉승급

		// 자동 데이터 세팅(Key 채번)
		StringBuffer buffer = new StringBuffer();
		long time = System.currentTimeMillis();
		SimpleDateFormat dayTime = new SimpleDateFormat("yyyy");
		String yyyy = dayTime.format(new Date(time));
		Integer keySeq = sancService.selectSeqKey();
		buffer.append("HRM");
		buffer.append("_");
		buffer.append(yyyy);
		buffer.append(StringUtil.lpad(keySeq.toString(), '0', 6));
		String key = buffer.toString();
		map.put("KEY", key);

		String title = StringUtil.nvl((String) map.get("DATA_TITLE"));
		String value = StringUtil.nvl((String) map.get("DATA_VALUE"));
		String data_value = title + "|" + key + "|" + value;
		map.put("DATA_VALUE", data_value);

		Map resultMap = sancService.requestApproval(map);

		System.out.println("resultMap : " + resultMap);

		map.put("O_URL", resultMap.get("O_URL"));
		Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		outDataset.put("output1", outDsMap);

		execService(HRM050201Service, "approveCUD", xpDto, mav); // 호봉승급 테이블에 전자결재번호 업데이트 수행

		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

}