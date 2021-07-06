package hsco.pms.rnt.lrm.RNT030302;

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
 * @Class Name   	: RNT030302Controller.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 7. 11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 1.					   이광원				최초생성
 * </pre>  
 */
@Controller
public class RNT030302Controller extends BaseContoller {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="RNT030302Service")
	RNT030302ServiceImpl rnt030302Service;
	
	@Resource(name="SancService")
	SancServiceImpl sancService;	
	
	/* 계약자 조회 */
	@RequestMapping("/hsco/pms/rnt/RNT030302/getList.do") 
	public ModelAndView getList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("계약자조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(rnt030302Service, "getList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		

		
	}
	
	/* 해약 조회 */
	@RequestMapping("/hsco/pms/rnt/RNT030302/getListR1.do") 
	public ModelAndView getListR1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("임대인조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030302Service, "getListR1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
		
	}

	/* 월임대료 조회 */
	@RequestMapping("/hsco/pms/rnt/RNT030302/getListR2.do") 
	public ModelAndView getListR2(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("임대인조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030302Service, "getListR2", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
		
	}	
	
	/* 지원금반환내역 조회 */
	@RequestMapping("/hsco/pms/rnt/RNT030302/getListR3.do") 
	public ModelAndView getListR3(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("임대인조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030302Service, "getListR3", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
		
	}	
	
	/**
	 * 전자결제번호 입력 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@RequestMapping("/hsco/pms/rnt/rnt030302/approveU.do")
	public ModelAndView approveU(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("전자결제번호 입력  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }

        map.put("DIV",     "572");      // 572 : 전세보증반환금

        // 자동 데이터 세팅(Key 채번)
        StringBuffer buffer = new StringBuffer();
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy");
        String yyyy = dayTime.format(new Date(time));
        Integer keySeq = sancService.selectSeqKey();
        buffer.append("LRM");
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
        
		execService(rnt030302Service, "approveU", xpDto, mav);

		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}			
	
	/* 과오납내역 조회 */
	@RequestMapping("/hsco/pms/rnt/RNT030302/getListR4.do") 
	public ModelAndView getListR4(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("과오납내역 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030302Service, "getListR4", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
		
	}		
	
	/* 신규,수정,삭제 */
	@RequestMapping("/hsco/pms/rnt/RNT030302/listCUD.do")
	public ModelAndView listCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030302Service, "listCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}

	/*체납이자 프로시저 호출*/
	@RequestMapping("/hsco/pms/rnt/RNT030302/listCUD1.do")
	public ModelAndView listCUD1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("월세액계산----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030302Service, "listCUD1", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		}

}
