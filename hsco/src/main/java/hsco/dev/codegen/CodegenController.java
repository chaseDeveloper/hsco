package hsco.dev.codegen;

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
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

@Controller
public class CodegenController extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());	

	@Resource(name="CodegenService")
	CodegenServiceImpl CodegenService;

	@RequestMapping("/hsco/dev/codegen/listTbl.do") 
	public ModelAndView listTbl(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled())
		    log.info("listTbl called");
		ModelAndView mav = new ModelAndView("nexacroMapView");
			execService(CodegenService, "listTBL", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
	
		return mav;
	}
	
	@RequestMapping("/hsco/dev/codegen/listCols.do") 
	public ModelAndView listCols(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
			execService(CodegenService, "listColums", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
	
		return mav;
	}
	
	@RequestMapping("/hsco/dev/codegen/listTblGb.do") 
	public ModelAndView listTblGb(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
			execService(CodegenService, "listTBLPrefix", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
	
		return mav;
	}

//	@RequestMapping
//	public ModelAndView save(final NexacroMapDTO xpDto, Model model) throws Exception {
//
//		ModelAndView mav = new ModelAndView("nexacroMapView");
//
//		try
//		{
//			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
//			Map <String, Object> inVar 			= xpDto.getInVariableMap();
//			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
//			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
//			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
//
//			String qryId = tranInfo.size() < 1 ? "" : tranInfo.get(0).get("strSvcID").toString();
//			log.debug(">> " + qryId + " 조회 ----------------------------------------------------!");
//
//			svc.save(tranInfo, inVar, inDataset, outVar, outDataset, qryId);
//		
//		} catch ( Exception e )
//		{
//			e.printStackTrace();
//			mav.addObject(NexacroConstant.ERROR_CODE, "-1");
//			mav.addObject(NexacroConstant.ERROR_MSG, e.toString());
//		}
//		return mav;
//	}
}
