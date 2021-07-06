package hsco.mis.law.LAW010103;

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
 * @Class Name      : LAW010103Controller.java
 * @Description     : 변호사비용관리 목록을 관리하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 13.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 13.      김병진              최초생성
 * </pre>  
 */

@Controller
public class LAW010103Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="LAW010103Service")
    LAW010103ServiceImpl LAW010103Service;
    @Resource(name="SancService")
    SancServiceImpl sancService;
    
    /**
     * 소송현황 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010103/selectLwstList.do") 
    public ModelAndView selectLwstList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("소송현황 목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(LAW010103Service, "selectLwstList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 소송비용지출 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010103/selectLawyerCtList.do") 
    public ModelAndView selectLawyerCtList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("소송비용지출 목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(LAW010103Service, "selectLawyerCtList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 소송비용지출 목록 저장/수정/삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010103/lawyerCtListCUD.do")
    public ModelAndView lawyerCtListCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("소송비용지출 목록 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(LAW010103Service, "lawyerCtListCUD", xpDto, mav );
            
        return mav;
    }
    
    /**
     * 지출결의번호 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010103/updateExpndtrDecsnNo.do")
    public ModelAndView updateExpndtrDecsnNo(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("지출결의번호저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(LAW010103Service, "updateExpndtrDecsnNo", xpDto, mav );
            
        return mav;
    }
    
    /**
     * 내부결재레포트용데이터셋 목록 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/law/LAW010103/innerSanctnUbiDataset.do") 
    public ModelAndView innerSanctnUbiDataset(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("내부결재레포트용데이터셋 목록 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(LAW010103Service, "innerSanctnUbiDataset", xpDto, mav );

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
    @RequestMapping("/hsco/mis/law/LAW010103/selectInnerSanctnMasterCheck.do") 
    public ModelAndView selectInnerSanctnMasterCheck(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("내부결재 최초 진행여부체크 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(LAW010103Service, "selectInnerSanctnMasterCheck", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /** 변호사비용 결재처리 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    @RequestMapping("/hsco/mis/law/LAW010103/approve.do")
    public ModelAndView approve(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }

        map.put("DIV", "LAW3001");

        // 자동 데이터 세팅(Key 채번)
        StringBuffer buffer = new StringBuffer();
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy");
        String yyyy = dayTime.format(new Date(time));
        Integer keySeq = sancService.selectSeqKey();
        buffer.append("LAW");
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
        
        System.out.println("map : " + map);

        execService(LAW010103Service, "approveCUD", xpDto, mav);

        mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    

    /**
     * 소송지출 팝업 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010103/selectPymnt.do") 
    public ModelAndView selectPymnt(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("소송지출 목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(LAW010103Service, "selectPymnt", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
}
