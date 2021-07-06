package hsco.pms.prj.prj05.PRJ050401;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.sanc.SancServiceImpl;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ050401Controller.java
 * @Description  	: 공사기성요청 컨트롤러 클래스 
 * @author       	: 
 * @since        	: 
 * @version      	: 
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  
 * </pre>  
 */

@Controller
public class PRJ050401Controller extends BaseContoller {

	@Resource(name="PRJ050401Service")
	PRJ050401ServiceImpl svc;

	@Resource(name="SancService")
	SancServiceImpl sancService;

	// 기성내역 조회
	@RequestMapping("hsco/pms/prj/PRJ050401/mList.do")
	public ModelAndView mList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "mList", xpDto, mav);
		return mav;
	}

	// 상세 조회 - 감독원, 첨부, 기성양식구분, 기성결재내역
	@RequestMapping("hsco/pms/prj/PRJ050401/rList.do")
	public ModelAndView rList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "rList", xpDto, mav);
		return mav;
	}

	//  저장
	@RequestMapping("hsco/pms/prj/PRJ050401/save.do")
	public ModelAndView save(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "save", xpDto, mav);
		return mav;
	}

	// 전자결재
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@RequestMapping("hsco/pms/prj/PRJ050401/approve.do")
	public ModelAndView approve(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		Map map = null;
		Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			map = inDsMap.get(0);
		}

		map.put("DIV",        "532"); // 기성감독조서.

		// 자동 데이터 세팅(Key 채번)
		StringBuffer buffer = new StringBuffer();
		long time = System.currentTimeMillis();
		SimpleDateFormat dayTime = new SimpleDateFormat("yyyy");
		String yyyy = dayTime.format(new Date(time));
		Integer keySeq = sancService.selectSeqKey();
		buffer.append(yyyy);
		buffer.append(StringUtil.lpad(keySeq.toString(), '0', 6));
		String key = buffer.toString();
		map.put("REQUST_NO", key);
		buffer.insert(0, "PRJ_");
		map.put("KEY", buffer.toString());
		map.put("DEPT_CD", ObjectUtil.getSessionObj("S_DEPT_CODE"));

		String title = StringUtil.nvl((String)map.get("SANCTN_SJ"));
		String value1 = StringUtil.nvl((String)map.get("SANCTN_SUMM"));
		String value2 = StringUtil.nvl((String)map.get("SANCTN_ETC"));
		String value3 = StringUtil.nvl((String)map.get("SANCTN_CN"));
		String data_value = title + "|" + key + "|" + value1 + "|" + value2 + "|" + value3 + "|";
		data_value = data_value.replaceAll("(\r\n|\n)", "\r\n");
		map.put("DATA_VALUE", data_value);
		map.put("TITLE", title);

		Map resultMap = sancService.requestApproval(map);

		System.out.println("resultMap : " + resultMap);
		
//		map.put("O_URL", resultMap.get("O_URL"));

		int nErr = 0;
		String sErrMsg = "success.정상조회";
		if (resultMap.get("O_URL") != null) {
			execService(svc, "approve", xpDto, mav);
			resultMap.put("REQUST_NO", key);
		} else if (resultMap.get("I_DEPT_CD") == null) {
			nErr = -2;	// 부서코드 없음
			sErrMsg = "info.ID.미존재";
		} else {
			nErr = -1;	// 
			sErrMsg = "fail.처리.실패";
		}

		Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(resultMap);
		outDataset.put("output1", outDsMap);

		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
		mav.addObject(NexacroConstant.ERROR_CODE, "" + nErr);
		mav.addObject(NexacroConstant.ERROR_MSG, sErrMsg);
		return mav;
	}
}
