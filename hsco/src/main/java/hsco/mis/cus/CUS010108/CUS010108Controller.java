package hsco.mis.cus.CUS010108;

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
 * @Class Name      : CUS010108Controller.java
 * @Description     : 고객평가지출을 관리하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 22.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 22.       김병진              최초생성
 * </pre>  
 */

@Controller
public class CUS010108Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="CUS010108Service")
    CUS010108ServiceImpl CUS010108Service;
    @Resource(name="SancService")
    SancServiceImpl sancService;
    
    
    /**
     * 고객평가지출 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010108/selectCstmrMntgStgExpndtrList.do") 
    public ModelAndView selectCstmrMntgStgExpndtrList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("고객평가지출목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010108Service, "selectCstmrMntgStgExpndtrList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }  
    
    /**
     * 고객방문평가 지출 대상 목록을 조회한다.
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010108/selectCstmrVisitEvlCardList01.do") 
    public ModelAndView selectCstmrVisitEvlCardList01(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("고객방문평가 지출 대상 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010108Service, "selectCstmrVisitEvlCardList01", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    } 
    
    /**
     * 지출에 해당하는 고객방문평가 상세목록을 조회한다.
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010108/selectCstmrVisitEvlCardList02.do") 
    public ModelAndView selectCstmrVisitEvlCardList02(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("지출에 해당하는 고객방문평가 상세목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010108Service, "selectCstmrVisitEvlCardList02", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }     

    /**
     * 고객평가지출 목록 저장/수정
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010108/cstmrMntgStgExpndtrListCUD.do")
    public ModelAndView cstmrMntgStgExpndtrListCU(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("고객평가지출목록 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(CUS010108Service, "cstmrMntgStgExpndtrListCUD", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    /**
     * 지출결의번호 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010108/updateExpndtrDecsnNo.do")
    public ModelAndView updateExpndtrDecsnNo(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("지출결의번호저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(CUS010108Service, "updateExpndtrDecsnNo", xpDto, mav );
            
        return mav;
    }
    
    /**
     * 내부결재레포트용데이터셋 목록 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010108/innerSanctnUbiDataset.do") 
    public ModelAndView innerSanctnUbiDataset(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("내부결재레포트용데이터셋 목록 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(CUS010108Service, "innerSanctnUbiDataset", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    } 
    
    /**
     * 내부결재 최초 진행여부체크
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010108/selectInnerSanctnMasterCheck.do") 
    public ModelAndView selectInnerSanctnMasterCheck(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("내부결재 최초 진행여부체크 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010108Service, "selectInnerSanctnMasterCheck", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /** 감사실시통보 결재처리 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    @RequestMapping("/hsco/mis/cus/CUS010108/approve.do")
    public ModelAndView approve(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }

        map.put("DIV",     "CUS3002");      // 002 : 일반기안(추산필)

        // 자동 데이터 세팅(Key 채번)
        StringBuffer buffer = new StringBuffer();
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy");
        String yyyy = dayTime.format(new Date(time));
        Integer keySeq = sancService.selectSeqKey();
        buffer.append("CUS");
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
        
        execService(CUS010108Service, "approveCUD", xpDto, mav);    // 테이블에 전자결재번호 업데이트 수행

        mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
        
    }
}
