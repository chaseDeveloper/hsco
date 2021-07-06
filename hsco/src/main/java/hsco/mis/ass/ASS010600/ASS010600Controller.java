package hsco.mis.ass.ASS010600;

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
 * @Class Name   	: ASS010600Controller.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2016. 05. 10.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 05. 10	       양성모		   최초생성
 * </pre>  
 */
@Controller
public class ASS010600Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="ass010600Service")
	ASS010600ServiceImpl ass010600Service;
	
    @Resource(name = "SancService")
    SancServiceImpl      sancService;	
	
    /**
	 * 물품수급계획결재 목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@RequestMapping("/hsco/mis/ass/ASS010600/sanctnList.do") 
	public ModelAndView sanctnList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("물품수급계획결재 목록 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010600Service, "sanctnList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 취득계획 결재 상세 목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@RequestMapping("/hsco/mis/ass/ASS010600/thngReciptPlanDetail.do") 
	public ModelAndView thngReciptPlanDetail(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("취득계획 결재 상세 목록 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010600Service, "thngReciptPlanDetail", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 취득계획 결재 상세 대상 목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@RequestMapping("/hsco/mis/ass/ASS010600/sanctnList3.do") 
	public ModelAndView sanctnList3(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("취득계획 결재 상세 대상 목록 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010600Service, "sanctnList3", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
    /**
     * 취득계획 전자결재 목록 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */	
	@RequestMapping("/hsco/mis/ass/ASS010600/sanctnListCUD1.do")
	public ModelAndView sanctnListCUD1(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("취득계획 전자결재 목록 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010600Service, "sanctnListCUD1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
	/**
	 * 불용계획 결재 상세 목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */	
	@RequestMapping("/hsco/mis/ass/ASS010600/atldManageDetailList.do") 
	public ModelAndView atldManageDetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("불용품관리상세 리스트 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010600Service, "atldManageDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 불용계획 결재 상세 대상 목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */	
	@RequestMapping("/hsco/mis/ass/ASS010600/sanctnList4.do") 
	public ModelAndView sanctnList4(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("불용계획 결재 상세 대상 목록 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010600Service, "sanctnList4", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
    /**
     * 불용계획 전자결재 목록 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */	
	@RequestMapping("/hsco/mis/ass/ASS010600/sanctnListCUD2.do")
	public ModelAndView sanctnListCUD2(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("불용계획 전자결재 목록 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010600Service, "sanctnListCUD2", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
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
    @RequestMapping("/hsco/mis/ass/ASS010600/approve.do")
    public ModelAndView saveSanc(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }
        
        String se = StringUtil.nvl((String)map.get("SE"));
        
        if(se.equals("tpg1")){
//        	map.put("DIV",     "528");      // 528 : 물품취급조서
        	//map.put("DIV",     "ASS3002");      // ASS3002 : 물품취급조서
        	map.put("DIV",     "ASS4004"); 
        } 
        else if(se.equals("tpg2")){
//        	map.put("DIV",     "529");      // 529 : 불용물품조서
        	map.put("DIV",     "ASS4005");      // ASS3003 : 불용물품조서
        }

        // 자동 데이터 세팅(Key 채번)
        StringBuffer buffer = new StringBuffer();
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy");
        String yyyy = dayTime.format(new Date(time));
        Integer keySeq = sancService.selectSeqKey();
        buffer.append("ASS");
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
        
        execService(ass010600Service, "approveCUD", xpDto, mav);    // 전자결재번호 업데이트 수행

        mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    
    /**
     * 자산대장 등록
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
	@RequestMapping("/hsco/mis/ass/ASS010600/insertAssetsMastr.do")
	public ModelAndView insertAssetsMastr(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010600Service, "insertAssetsMastr", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

}