package hsco.mis.ach.ACH010302;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACH010302Controller.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 11. 03.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 03.	박병일			최초생성
 * </pre>  
 */

@Controller
public class ACH010302Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
//	@Resource(name="ACH010302Service")
//	ACH010302ServiceImpl ACH010302Service;
	
	
	/**
	 * 
	 * @param xpDto
	 * @param model
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH010302/selectList.do")
	public void selectList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("selectList Started!");
	}
}
