package hsco.mis.cus.CUS010208;

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
 * @Class Name      : CUS010208Controller.java
 * @Description     : 직원칭찬지출을 관리하는 컨트롤러 클래스
 * @author          : 이수지
 * @since           : 2016. 04. 14.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 04. 14.      이수지              최초생성
 * </pre>  
 */

@Controller
public class CUS010208Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="CUS010208Service")
    CUS010208ServiceImpl CUS010208Service;
    @Resource(name="SancService")
    SancServiceImpl sancService;    
    
    /**
     * 직원칭찬지출관리 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010208/selectCstmrMntgStgExpndtr.do") 
    public ModelAndView selectCstmrMntgStgExpndtr(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("직원칭찬지출관리목록 조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010208Service, "selectCstmrMntgStgExpndtr", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   

    

    /**
     * 직원칭찬 목록조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010208/selectCstmrPartcptnList.do")
    public ModelAndView selectCstmrPartcptnList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("지출관련 직원칭찬관리 목록 리스트 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(CUS010208Service, "selectCstmrPartcptnList", xpDto, mav );

            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
            
            return mav;
    } 
        
    /**
     * 직원칭찬관리 목록 수정 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010208/cstmrPartcptnListU.do")
    public ModelAndView cstmrPartcptnListU(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("고객방문평가카드 테이블 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
             execService(CUS010208Service, "cstmrPartcptnListU", xpDto, mav);
             
             mav.addObject(NexacroConstant.ERROR_CODE, "0");
             mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
         
         return mav;
     }
    
    
    /**
     * 직원칭찬지출 목록 저장/수정/삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010208/cstmrMntgStgExpndtrCUD.do")
    public ModelAndView mntrStgExpndtrListCU(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("직원칭찬지출목록CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(CUS010208Service, "cstmrMntgStgExpndtrCUD", xpDto, mav);
            
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
    @RequestMapping("/hsco/mis/cus/CUS010208/updateExpndtrDecsnNo.do")
    public ModelAndView updateExpndtrDecsnNo(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("지출결의번호저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(CUS010208Service, "updateExpndtrDecsnNo", xpDto, mav );
            
        return mav;
    }
    
    /** 감사실시통보 결재처리 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    @RequestMapping("/hsco/mis/cus/CUS010208/approve.do")
    public ModelAndView approve(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }

        map.put("DIV",     "CUS3003");      // 002 : 일반기안(추산필)

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
        
        execService(CUS010208Service, "approveCUD", xpDto, mav);    // 테이블에 전자결재번호 업데이트 수행

        mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
        
    }    
    
}
