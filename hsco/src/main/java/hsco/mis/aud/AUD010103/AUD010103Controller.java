package hsco.mis.aud.AUD010103;

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
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD010103Controller.java
 * @Description     : 내외부감사실시관리를 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 06. 12.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 06. 12.      김병진             최초생성
 * </pre>  
 */


@Controller
public class AUD010103Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass()); 
	
	@Resource(name="AUD010103Service")
	AUD010103ServiceImpl AUD010103Service;
	@Resource(name="SancService")
	SancServiceImpl sancService;
	
	
	/**
	 * 내외부감사목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/aud/AUD010103/selectInExAdList.do") 
	public ModelAndView selectInExAdList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(AUD010103Service, "selectInExAdList", xpDto, mav );
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 내외부감사실시관리_감사실시통보 목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/aud/AUD010103/selectIEAOList.do") 
	public ModelAndView selectIEAOList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
	
		execService(AUD010103Service, "selectIEAOList", xpDto, mav );
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}   
	
	/**
	 * 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/aud/AUD010103/IEAOListCUD.do")
	public ModelAndView IEAOListCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(AUD010103Service, "IEAOListCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/** 감사실시통보 결재처리 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@RequestMapping("/hsco/mis/aud/AUD010103/approve.do")
	public ModelAndView approve(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		Map map = null;
		Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
		    map = inDsMap.get(0);
		}
		
		map.put("DIV",     "AUD4001");      // 530 :
		
		// 자동 데이터 세팅(Key 채번)
		StringBuffer buffer = new StringBuffer();
		long time = System.currentTimeMillis();
		SimpleDateFormat dayTime = new SimpleDateFormat("yyyy");
		String yyyy = dayTime.format(new Date(time));
		Integer keySeq = sancService.selectSeqKey();
		buffer.append("AUD");
		buffer.append("_");
		buffer.append(yyyy);
		buffer.append(StringUtil.lpad(keySeq.toString(), '0', 6));
		String key = buffer.toString();
		map.put("KEY", key);
		
		String title = StringUtil.nvl((String)map.get("DATA_TITLE"));
		String value = StringUtil.nvl((String)map.get("DATA_VALUE"));
		String data_value = title + "|" + key + "|" + value;
		map.put("DATA_VALUE", data_value);
		
		Map resultMap = sancService.requestApproval(map);
		
		System.out.println("resultMap : " + resultMap);
		
		map.put("O_URL", resultMap.get("O_URL"));
		
		execService(AUD010103Service, "approveCUD", xpDto, mav);    // 감사실시통보 테이블에 전자결재번호 업데이트 수행
		Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		outDataset.put("output1", outDsMap);
		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
}
