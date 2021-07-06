package hsco.cmm.download;

import java.io.IOException;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

@Controller
public class DownloadExcelController extends BaseContoller {
	

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@RequestMapping("/hsco/cmm/download/excel.do")
	public ModelAndView excel(NexacroMapDTO xpDto, Model model) throws IOException {
		
		ModelAndView mav = new ModelAndView();
		
		mav.setViewName("excel");
		
		mav.addAllObjects(xpDto.getInVariableMap());
		
		Map<String, DataSetMap> inDs = xpDto.getInDataSetMap();
		
		Map infoMap = ((DataSetMap)inDs.get("__DS_JXLS_INFO__")).get(0);
		mav.addAllObjects(infoMap);
		
		for(Map.Entry<String,DataSetMap> entry : inDs.entrySet()) {
			if(!"__DS_JXLS_INFO__".equals(entry.getKey())) {
				mav.addObject(entry.getKey(), entry.getValue().getRowMaps());
			}
		}
		
		return mav;
		
	}
}
