package hsco.mis.ass.ASS010800;

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
 * @Class Name   	: ASS010800Controller.java
 * @Description  	: 
 * @author       	: 박태혁
 * @since        	: 2016. 9. 8.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 15	       이혜선		   최초생성
 * </pre>  
 */
@Controller
public class ASS010800Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="ASS010800Service")
	ASS010800ServiceImpl ASS010800Service;
	
    @Resource(name = "SancService")
    SancServiceImpl      sancService;	
	
    /**
	 * 취득물품(수급계획목록) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@RequestMapping("/hsco/mis/ass/ASS010800/thngReciptPlanAcList.do") 
	public ModelAndView thngReciptPlanAcList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("취득물품수급계획 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ASS010800Service, "thngReciptPlanAcList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 취득물품(수급계획상세) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@RequestMapping("/hsco/mis/ass/ASS010800/thngReciptPlanDetail.do") 
	public ModelAndView thngReciptPlanDetail(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("취득물품수급계획 상세 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ASS010800Service, "thngReciptPlanDetail", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	

	/**
	 * 취득물품(수급계획실행) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@RequestMapping("/hsco/mis/ass/ASS010800/thngReciptPlanExec.do") 
	public ModelAndView thngReciptPlanExec(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("취득물품수급계획 상세 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ASS010800Service, "thngReciptPlanExec", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
    /**
     * 첨부파일 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ass/ASS010800/selectFileList.do")
    public ModelAndView selectFileList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(ASS010800Service, "selectFileList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }	
	
    /**
     * 물품수급계획 CUD
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */	
	@RequestMapping("/hsco/mis/ass/ASS010800/thngReciptExecCUD.do")
	public ModelAndView thngReciptExecCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("물품수금계획 저장 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ASS010800Service, "thngReciptExecCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
    /**
     * 첨부파일 Key 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ass/ASS010800/saveNewFileSn.do")
    public ModelAndView saveNewFileSn(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(ASS010800Service, "saveNewFileSn", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

        return mav;
    }
    
    @RequestMapping("/hsco/mis/ass/ASS010800/atldManageList.do") 
	public ModelAndView atldManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("불용품관리 리스트 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ASS010800Service, "atldManageList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	@RequestMapping("/hsco/mis/ass/ASS010800/atldManageDetail.do") 
	public ModelAndView atldManageDetail(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("불용품관리상세 리스트 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ASS010800Service, "atldManageDetail", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	@RequestMapping("/hsco/mis/ass/ASS010800/atldTrgetList.do") 
	public ModelAndView atldTrgetList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("불용품대상 리스트 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ASS010800Service, "atldTrgetList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	
	@RequestMapping("/hsco/mis/ass/ASS010800/atldManageCUD.do")
	public ModelAndView atldManageCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("불용품관리 CUD----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ASS010800Service, "atldManageCUD", xpDto, mav);
		
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
    @RequestMapping("/hsco/mis/ass/ASS010800/approve.do")
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
        	//map.put("DIV",     "528");      // 528 : 물품취급조서
        	//map.put("DIV",     "ASS3002");      // ASS3002 : 물품취급조서
        	//map.put("DIV",     "SLS5009");      //  토지 일반기안 사용
        	map.put("DIV",     "ASS4006");      // 
        } else if(se.equals("tpg2")){
//        	map.put("DIV",     "529");      // 529 : 불용물품조서
        	map.put("DIV",     "ASS3003");      // ASS3003 : 불용물품조서
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
        
        execService(ASS010800Service, "approveCUD", xpDto, mav);    // 전자결재번호 업데이트 수행

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
	@RequestMapping("/hsco/mis/ass/ASS010800/insertAssetsMastr.do")
	public ModelAndView insertAssetsMastr(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ASS010800Service, "insertAssetsMastr", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}    
}