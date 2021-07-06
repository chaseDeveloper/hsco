package hsco.pms.prj;

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

@Controller
public class PrjController extends BaseContoller {
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="SancService")
	SancServiceImpl sancService;

	@Resource(name="PRJService")
	PrjServiceImpl svc;

	//  조회
	@RequestMapping("hsco/pms/prj/svcList.do")
	public ModelAndView svcList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "list", xpDto, mav);
		return mav;
	}

	// 사업코드 조회
	@RequestMapping("hsco/pms/prj/bsnsCdList.do")
	public ModelAndView bsnsCdList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "bsnsCdList", xpDto, mav);
		return mav;
	}
	
	// 개인별사업코드 조회
	@RequestMapping("hsco/pms/prj/userBsnsCdList.do")
	public ModelAndView userBsnsCdList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "userBsnsCdList", xpDto, mav);
		return mav;
	}

	// 계정과목 조회
	@RequestMapping("hsco/pms/prj/acntList.do")
	public ModelAndView acntList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "acntList", xpDto, mav);
		return mav;
	}

	// 사업공통코드 조회
	@RequestMapping("hsco/pms/prj/cmmnCdList.do")
	public ModelAndView cmmnCdList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "cmmnCdList", xpDto, mav);
		return mav;
	}

	// 토지코드 조회
	@RequestMapping("hsco/pms/prj/ladCdList.do")
	public ModelAndView ladCdList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "ladCdList", xpDto, mav);
		return mav;
	}

	// 주택코드 조회
	@RequestMapping("hsco/pms/prj/houCdList.do")
	public ModelAndView houCdList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "houCdList", xpDto, mav);
		return mav;
	}

	// 계약 조회
	@RequestMapping("hsco/pms/prj/ctrList.do")
	public ModelAndView ctrList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "ctrList", xpDto, mav);
		return mav;
	}

	// 계약 상세 조회
	@RequestMapping("hsco/pms/prj/ctrDtlList.do")
	public ModelAndView ctrDtlList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "ctrDtlList", xpDto, mav);
		return mav;
	}

	// 업무코드 조회
	@RequestMapping("hsco/pms/prj/jobList.do")
	public ModelAndView jobList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "jobList", xpDto, mav);
		return mav;
	}

	// 표준공종코드 조회
	@RequestMapping("hsco/pms/prj/cnstList.do")
	public ModelAndView cnstList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "cnstList", xpDto, mav);
		return mav;
	}

	// 추정원가 조회
	@RequestMapping("hsco/pms/prj/prcOdrList.do")
	public ModelAndView prcOdrList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "prcOdrList", xpDto, mav);
		return mav;
	}

	// 주택 세대수 조회
	@RequestMapping("hsco/pms/prj/houseCountList.do")
	public ModelAndView houseCountList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "houseCountList", xpDto, mav);
		return mav;
	}

	// 첨부파일 조회
	@RequestMapping("hsco/pms/prj/fileList.do")
	public ModelAndView fileList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "fileList", xpDto, mav);
		return mav;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@RequestMapping("/hsco/pms/prj/approveU.do")
	public ModelAndView approveU(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("전자결제번호 입력  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

        Map map = null;
        Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            map = inDsMap.get(0);
        }

        map.put("DIV",     map.get("SANCTION_DIV"));

        // 자동 데이터 세팅(Key 채번)
        StringBuffer buffer = new StringBuffer();
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy");
        String yyyy = dayTime.format(new Date(time));
        Integer keySeq = sancService.selectSeqKey();
        buffer.append("PRJ");
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
        
		execService(svc, "approveU", xpDto, mav);

		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}

}
