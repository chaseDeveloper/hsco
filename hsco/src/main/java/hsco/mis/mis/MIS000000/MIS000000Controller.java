package hsco.mis.mis.MIS000000;

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
 * 
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : MIS000000Controller.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 9. 17.
 * @version         : 1.0
 * @see             :
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 17.                  정윤원                최초생성
 * </pre>
 */
@Controller
public class MIS000000Controller extends BaseContoller {
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "MIS000000Service")
	MIS000000ServiceImpl MIS000000Service;

	/**
	 * 파일일련번호 자동채번 및 갱신
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/mis/MIS000000/saveAutoFileSn.do")
	public ModelAndView saveAutoFileSn(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(MIS000000Service, "saveAutoFileSn", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/**
	 * 첨부한 파일을 업로드하고 공통 첨부파일 정보를 저장한다.
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/mis/MIS000000/fileUpload.do")
	public ModelAndView fileUpload(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(MIS000000Service, "fileUpload", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/**
	 * 파일 삭제
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/mis/MIS000000/deleteFile.do")
	public ModelAndView deleteFile(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(MIS000000Service, "AtchmnFileD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/**
	 * 사업코드 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/mis/MIS000000/bsnsAreaList.do")
	public ModelAndView bsnsAreaList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(MIS000000Service, "bsnsAreaList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/**
	 * 사업코드 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/mis/MIS000000/getAuthGrp.do")
	public ModelAndView getAuthGrp(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(MIS000000Service, "getAuthGrp", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/**
	 * 최종 내부결재 상태 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/mis/MIS000000/selectLastSanctnSttus.do")
	public ModelAndView selectLastSanctnSttus(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(MIS000000Service, "selectLastSanctnSttus", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/**
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/mis/MIS000000/empPicMig.do")
	public ModelAndView empPicMig(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		MIS000000Service.empPicMig(super.getFileLocation());

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/**
	 * 이메일 전송
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/mis/MIS000000/sendEmail.do")
	public ModelAndView sendEmail(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(MIS000000Service, "sendEmail", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/**
	 * 이메일 대량발송
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/mis/MIS000000/sendMultiEmail.do")
	public ModelAndView sendMultiEmail(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(MIS000000Service, "sendMultiEmail", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/**
	 * 메신저 알림발송 등록, 수정, 삭제
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/mis/MIS000000/NtcnSndngCUD.do")
	public ModelAndView ntcnSndngCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(MIS000000Service, "ntcnSndngCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}
}
