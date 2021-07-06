package hsco.pms.rnt.lrm.RNT030301;

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
/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT030103Controller.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 6. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.					   이광원				최초생성
 * </pre>  
 */
@Controller
public class RNT030301Controller extends BaseContoller {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="RNT030301Service")
	RNT030301ServiceImpl rnt030301Service;
	
	@Resource(name="SancService")
	SancServiceImpl sancService;	

	/* 계약자 조회 */	
	@RequestMapping("/hsco/pms/rnt/rnt030301/getList.do") 
	public ModelAndView getList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("계약자조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

				
		execService(rnt030301Service, "getList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
			
	}
	
	/* 임대인 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/getListR1.do") 
	public ModelAndView getListR1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("임대인조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "getListR1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 공유자 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/getListR2.do") 
	public ModelAndView getListR2(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("공유자조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "getListR2", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 보증보험 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/getListR3.do") 
	public ModelAndView getListR3(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보증보험조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "getListR3", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 화재보험 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/getListR4.do") 
	public ModelAndView getListR4(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("화재보험조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "getListR4", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 법무사 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/getListR5.do") 
	public ModelAndView getListR5(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("법무사조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "getListR5", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 법무사 조회 팝업용 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/getListT5.do") 
	public ModelAndView getListT5(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("법무사조회 팝업용 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "getListT5", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	
	
	/* 부동산 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/getListR6.do") 
	public ModelAndView getListR6(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("부동산조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "getListR6", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 부동산 조회 팝업용 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/getListT6.do") 
	public ModelAndView getListT6(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("부동산조회 팝업용----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "getListT6", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	
	
	/* 세대원 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/getListR7.do") 
	public ModelAndView getListR7(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("세대원조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "getListR7", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 지원내역 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/getListR8.do") 
	public ModelAndView getListR8(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("지원내역조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "getListR8", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 신청자선택 팝업 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/getListT02.do") 
	public ModelAndView getListT02(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("신청자팝업 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "getListT02", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}

	/* 신청자선택 팝업 권리분석 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/getListT03.do") 
	public ModelAndView getListT03(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("권리분석 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "getListT03", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}
	
	/* 신청자선택 팝업 권리분석 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/ATCH.do") 
	public ModelAndView ATCH(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("권리분석 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "ATCH", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	
	
	/* 출력물 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/PRT.do") 
	public ModelAndView PRT(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("출력물 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "PRT", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	
	
	/* 계약자번호 생성 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/CNTRCTRNO.do") 
	public ModelAndView CNTRCTRNO(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("권리분석 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "CNTRCTRNO", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}		
	
	/* 전세임대료요율 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/INTRT.do") 
	public ModelAndView INTRT(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("전세임대료요율 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "INTRT", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}		
	
	/* 전세면제 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/EXEMPTION.do") 
	public ModelAndView EXEMPTION(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("전세면제 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "EXEMPTION", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	
	
	
	/* 보증/화재 보험 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/insrncList.do") 
	public ModelAndView insrncList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보증/화재 보험조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "insrncList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;
		
	}	
	
	/* 보증/화재 보험 신규,수정,삭제 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/insrncCUD.do")
	public ModelAndView insrncCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("보증/화재 보험 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "insrncCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	
	/* 명의변경건수 체크 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/changeCNT.do")
	public ModelAndView changeCNT(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("명의변경건수 체크----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "changeCNT", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	
	
	/* 신규,수정,삭제 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/listCUD.do")
	public ModelAndView listCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "listCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/* 첨부파일 저장 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/atchCUD.do")
	public ModelAndView atchCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "atchCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/* 첨부파일 저장2 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/atchCUD2.do")
	public ModelAndView atchCUD2(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "atchCUD2", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	
	/* 첨부파일 삭제 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/atchDelete.do")
	public ModelAndView atchDelete(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "atchDelete", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/* 첨부파일 삭제2 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/atchDelete2.do")
	public ModelAndView atchDelete2(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "atchDelete2", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}		
	
	/* 전자결재 상태 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/sancKnd.do")
	public ModelAndView sancKnd(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("전자결재 상태 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "sancKnd", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}		
	
	/* 자동이체계좌 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/vacct.do")
	public ModelAndView vacct(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("자동이체계좌 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "vacct", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	
	
	/* 지출내역 조회 */
	@RequestMapping("/hsco/pms/rnt/rnt030301/expndtr.do")
	public ModelAndView expndtr(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("지출내역 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt030301Service, "expndtr", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
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
	@RequestMapping("/hsco/pms/rnt/rnt030301/approveU.do")
	public ModelAndView approveU(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("전자결제번호 입력  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }

        map.put("DIV",     "573");      // 573 : 중개수수료

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
        
		execService(rnt030301Service, "approveU", xpDto, mav);

		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}		
}
