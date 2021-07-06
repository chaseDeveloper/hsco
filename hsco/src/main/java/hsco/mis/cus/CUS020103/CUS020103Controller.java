package hsco.mis.cus.CUS020103;

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
 * @Class Name   	: CUS020103Controller.java
 * @Description  	: 민원처리결과를 관리하는 컨트롤러 클래스
 * @author       	: 김병진
 * @since        	: 2015. 8. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 17.	     김병진		      최초생성
 * </pre>  
 */

@Controller
public class CUS020103Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="CUS020103Service")
	CUS020103ServiceImpl CUS020103Service;

    @Resource(name = "SancService")
    SancServiceImpl      sancService;   
    
	/**
	 * 민원처리결과관리 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/cus/CUS020103/selectCvplPrcResltmangList.do") 
	public ModelAndView selectCvplPrcResltmangList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("코드 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(CUS020103Service, "selectCvplPrcResltmangList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
		
	/**
	 * 민원처리결과관리 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/cus/CUS020103/cvplPrcResltmangListCUD.do")
	public ModelAndView cvplPrcResltmangListCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("민원처리결과관리 U 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

			execService(CUS020103Service, "cvplPrcResltmangListCUD", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}

	/**
	 * 개인별 접수반려 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/cus/CUS020103/returnCVPLU.do")
	public ModelAndView returnCVPLU(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("개인별 접수반려 U 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

			execService(CUS020103Service, "returnCVPLU", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	    * 내부결재레포트용데이터셋 목록 조회
	    * @param xpDto
	    * @param model
	    * @return 
	    * @throws Exception
	    */
	   @RequestMapping("hsco/mis/cus/CUS020103/innerSanctnUbiDataset.do") 
	   public ModelAndView innerSanctnUbiDataset(NexacroMapDTO xpDto, Model model) throws Exception {
	       
	       log.debug("내부결재레포트용데이터셋 목록 리스트 ----------------------------------------------------!");
	       ModelAndView mav = new ModelAndView("nexacroMapView");
	   
	       execService(CUS020103Service, "innerSanctnUbiDataset", xpDto, mav );

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
	   @RequestMapping("/hsco/mis/cus/CUS020103/selectInnerSanctnMasterCheck.do") 
	   public ModelAndView selectInnerSanctnMasterCheck(NexacroMapDTO xpDto, Model model) throws Exception {
	       
	       log.debug("내부결재 최초 진행여부체크 ----------------------------------------------------!");
	       ModelAndView mav = new ModelAndView("nexacroMapView");

	       execService(CUS020103Service, "selectInnerSanctnMasterCheck", xpDto, mav );

	       mav.addObject(NexacroConstant.ERROR_CODE, "0");
	       mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	       
	       return mav;
	       
	   }
	   
	   /**
	    * 메일발송 테스트
	    * @param xpDto
	    * @param model
	    * @return
	    * @throws Exception
	    */
	   @RequestMapping("/hsco/mis/cus/CUS020103/sendMail.do") 
	   public ModelAndView sendMail(NexacroMapDTO xpDto, Model model) throws Exception {
	       
	       log.debug("내부결재 최초 진행여부체크 ----------------------------------------------------!");
	       ModelAndView mav = new ModelAndView("nexacroMapView");

	       execService(CUS020103Service, "sendMail", xpDto, mav );

	       mav.addObject(NexacroConstant.ERROR_CODE, "0");
	       mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	       
	       return mav;
	       
	   }

	    
	    /**
	     * 오프라인민원 전자결재
	     * 
	     * @param xpDto
	     * @param model
	     * @return
	     * @throws Exception
	     */
	    @SuppressWarnings({ "unchecked", "rawtypes" })
	    @RequestMapping("/hsco/mis/cus/CUS020103/approve.do")
	    public ModelAndView approve(NexacroMapDTO xpDto, Model model) throws Exception {
	        ModelAndView mav = new ModelAndView("nexacroMapView");

	        Map map = null;
	        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
	        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
	        if (inDsMap != null) {
	            map = inDsMap.get(0);
	        }

	        map.put("DIV", "CUS5006"); //일반기안 001 -> 민원서식 CUS5001

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

	        String title = StringUtil.nvl((String) map.get("DATA_TITLE"));
	        String value = StringUtil.nvl((String) map.get("DATA_VALUE").toString().replaceAll("\n", "\r\n"));
	        String data_value = title + "|" + key + "|" + value;
	        map.put("DATA_VALUE", data_value);

	        Map resultMap = sancService.requestApproval(map);

	        System.out.println("resultMap : " + resultMap);

	        map.put("O_URL", resultMap.get("O_URL"));
	        Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
	        DataSetMap outDsMap = new DataSetMap();
	        outDsMap.add(map);
	        outDataset.put("output1", outDsMap);

	        execService(CUS020103Service, "approveCUD", xpDto, mav);

	        mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        return mav;
	    }
	    

	    /**
	     * 전자결재문서  조회
	     * @param xpDto
	     * @param model
	     * @return
	     * @throws Exception
	     */
	    @RequestMapping("hsco/mis/cus/CUS020103/viewSanction.do") 
	    public ModelAndView selectCompletedSanctionInfo(NexacroMapDTO xpDto, Model model) throws Exception {
	        
	        ModelAndView mav = new ModelAndView("nexacroMapView");
	    
	        execService(CUS020103Service, "viewSanction", xpDto, mav );

	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        
	        return mav;
	    }
	    
    	/**
	     * 내부결재문서번호 업데이트
	     * @param xpDto
	     * @param model
	     * @return
	     * @throws Exception
	     */
	    @RequestMapping("hsco/mis/cus/CUS020103/innerSanctU.do") 
	    public ModelAndView innerSanctU(NexacroMapDTO xpDto, Model model) throws Exception {
	        
	        ModelAndView mav = new ModelAndView("nexacroMapView");
	        execService(CUS020103Service, "innerSanctU", xpDto, mav );

	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        
	        return mav;
	    }

	    /**
	     * 문자 / 메일 발송 후 처리상태 업데이트
	     * @param xpDto
	     * @param model
	     * @return
	     * @throws Exception
	     */
	    @RequestMapping("hsco/mis/cus/CUS020103/cvplSttusU.do") 
	    public ModelAndView cvplSttusU(NexacroMapDTO xpDto, Model model) throws Exception {
	    	
	    	ModelAndView mav = new ModelAndView("nexacroMapView");
	    	execService(CUS020103Service, "cvplSttusU", xpDto, mav );
	    	
	    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    	mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    	
	    	return mav;
	    }

	    /**
	     * 민원 접수 처리
	     * @param xpDto
	     * @param model
	     * @return
	     * @throws Exception
	     */
	    @RequestMapping("hsco/mis/cus/CUS020103/rceptProcU.do") 
	    public ModelAndView rceptProcU(NexacroMapDTO xpDto, Model model) throws Exception {
	    	
	    	ModelAndView mav = new ModelAndView("nexacroMapView");
	    	execService(CUS020103Service, "rceptProcU", xpDto, mav );
	    	
	    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    	mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    	
	    	return mav;
	    }

	    /**
	     * 전자결재 처리완료
	     * @param xpDto
	     * @param model
	     * @return
	     * @throws Exception
	     */
	    @RequestMapping("hsco/mis/cus/CUS020103/sancComp.do") 
	    public ModelAndView sancComp(NexacroMapDTO xpDto, Model model) throws Exception {
	    	
	    	ModelAndView mav = new ModelAndView("nexacroMapView");
	    	execService(CUS020103Service, "sancComp", xpDto, mav );
	    	
	    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    	mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	    	
	    	return mav;
	    }
}
