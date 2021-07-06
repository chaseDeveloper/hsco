package hsco.mis.aud.AUD040102;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD040102Controller.java
 * @Description     : 청렴마일리지테이블을 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 07. 17.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 17.      김병진              최초생성
 * </pre>  
 */

@Controller
public class AUD040102Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="AUD040102Service")
    AUD040102ServiceImpl AUD040102Service;
    
    /**
     * 청렴마일리지 개인별 목록 메인 목록화면에서 저장버튼 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040102/MlgRegistListCUD.do")
    public ModelAndView MlgRegistListCUD(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("청렴마일리지 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(AUD040102Service, "MlgRegistListCUD", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    /**
     * 청렴마일리지개인별 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040102/selectMlgRegistList.do") 
    public ModelAndView selectMlgRegistList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("청렴마일리지 상세 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(AUD040102Service, "selectMlgRegistList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   

    /**
     * 청렴마일리지개인별 목록 저장/수정
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040102/mlgRegistListCU.do")
    public ModelAndView mlgRegistListCU(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("청렴마일리지 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(AUD040102Service, "mlgRegistListCU", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }

    /**
     * 청렴마일리지개인별 목록 삭제
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040102/mlgRegistListD.do")
    public ModelAndView mlgRegistListD(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("청렴마일리지부서별 삭제 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(AUD040102Service, "mlgRegistListD", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    /**
     * 청렴마일리지개인별 상세 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040102/mlgRegistListR.do") 
    public ModelAndView mlgRegistListR(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("청렴마일리지 상세 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(AUD040102Service, "mlgRegistListR", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }  
    
    /**
     * 청렴마일리지부서별 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040102/selectMlgRegistDeptList.do") 
    public ModelAndView selectMlgRegistDeptList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("청렴마일리지부서별 상세 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(AUD040102Service, "selectMlgRegistDeptList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   

    /**
     * 청렴마일리지부서별 목록 저장/수정
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040102/mlgRegistDeptCU.do")
    public ModelAndView mlgRegistDeptCU(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("청렴마일리지부서별 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
            execService(AUD040102Service, "mlgRegistDeptCU", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }

    /**
     * 청렴마일리지부서별 목록 삭제
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040102/mlgRegistDeptD.do")
    public ModelAndView mlgRegistDeptD(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("청렴마일리지부서별 삭제 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(AUD040102Service, "mlgRegistDeptD", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    /**
     * 청렴마일리지부서별 상세 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040102/mlgRegistDeptListR.do") 
    public ModelAndView mlgRegistDeptListR(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("청렴마일리지부서별 상세 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(AUD040102Service, "mlgRegistDeptListR", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;

    }

    /**
     * 부서 개인별 마일리지 점수 합계
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040102/getScoreIndvdl.do") 
    public ModelAndView getScoreIndvdl(NexacroMapDTO xpDto, Model model) throws Exception {
    	
    	log.debug("청렴마일리지부서별 상세 리스트 ----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(AUD040102Service, "getScoreIndvdl", xpDto, mav );
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    	
    	return mav;
    	
    }
    /**
     * 청렴마일리지 교육사항 일괄 등록
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040102/insertMlgRegistOfTraing.do")
    public ModelAndView insertMlgRegistOfTraing(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("청렴마일리지 교육사항 일괄 등록----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
            execService(AUD040102Service, "insertMlgRegistOfTraing", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    
    /**
     * 평가항목조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040102/selectMlgKnd.do") 
    public ModelAndView selectMlgKnd(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("평가항목 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(AUD040102Service, "selectMlgKnd", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;

    }

    /**
     * 기존 마일리지 점수의 합 조회(다건)
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040102/selectMlgScore.do") 
    public ModelAndView selectMlgScore(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(AUD040102Service, "selectMlgScore", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;

    }
    
   
    /**
     * 기존 마일리지 점수의 합 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040102/selectMlgScoreTot.do") 
    public ModelAndView selectMlgScoreTot(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(AUD040102Service, "selectMlgScoreTot", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;

    }
    
}
