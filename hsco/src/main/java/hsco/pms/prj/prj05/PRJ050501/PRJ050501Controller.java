package hsco.pms.prj.prj05.PRJ050501;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import hsco.cmm.controller.BaseContoller;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ050501Controller.java
 * @Description  	: 주간감리보고 컨트롤러 클래스 
 * @author       	: 
 * @since        	: 
 * @version      	: 
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  
 * </pre>  
 */

@Controller
public class PRJ050501Controller extends BaseContoller {

	@Resource(name="PRJ050501Service")
	PRJ050501ServiceImpl svc;

	
}
