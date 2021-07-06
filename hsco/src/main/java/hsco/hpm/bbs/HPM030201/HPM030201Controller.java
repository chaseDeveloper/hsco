package hsco.hpm.bbs.HPM030201;

import java.io.File;
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
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.util.StringUtil;

@Controller
public class HPM030201Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(HPM030201Controller.class);
	@Resource(name="HPM030201Service")
	private HPM030201ServiceImpl HPM030201Service;

	/**
	 * 게시판ID 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/bbs/HPM030201/selBoard.do")
	public ModelAndView selectBbsId(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HPM030201Service, "selBoard", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 게시물구분 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/bbs/HPM030201/selBoardKind.do ")
	public ModelAndView selBoardKind(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HPM030201Service, "selBoardKind", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 게시물 삭제 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/bbs/HPM030201/saveBoardD.do ")
	public ModelAndView saveBoardD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HPM030201Service, "saveBoardD", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 게시물 정보 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/bbs/HPM030201/selBoardInfo.do ")
	public ModelAndView selBoardInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HPM030201Service, "selBoardInfo", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 게시판 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/bbs/HPM030201/saveBoard.do")
	public ModelAndView saveBoard(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HPM030201Service, "saveBoard", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 게시판 사용여부
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/bbs/HPM030201/updateConfirmYn.do")
	public ModelAndView updateConfirmYn(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HPM030201Service, "updateConfirmYn", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 게시판 파일조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/bbs/HPM030201/selAtchFile.do")
	public ModelAndView selAtchFile(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HPM030201Service, "selAtchFile", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 게시판 파일다운로드 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	@RequestMapping("/hsco/hpm/bbs/HPM030201/downloadFile.do")
	public ModelAndView downloadFile(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView();
		
		try {
			
			String savePath = getFileLocation()+File.separator+"ETC"+File.separator+"HPG"+File.separator+"boardfile";
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			for(Map map : list.getRowMaps()){
				//String addFileDir = (String)map.get("FILE_STRE_COURS");		//파일저장경로
				String saveFileName = (String)map.get("STRE_FILE_NM");		//저장파일명
//				if(!"".equals(StringUtil.nvl(addFileDir))){
//					saveFileName = addFileDir +File.separator+ saveFileName; 
//				}
				String orginlFileNm = (String)map.get("ORGINL_FILE_NM");	//원파일명
				String repoFilePath = savePath + File.separator + saveFileName;
				System.out.println("repoFilePath >>>> "+repoFilePath);
				File downFile = new File(repoFilePath);
				
				if(downFile.exists()){					
					xpDto.getRequest().setAttribute("downFileName", orginlFileNm);
					mav.setViewName("download");
					mav.addObject("downloadFile", downFile);
				} else {
					mav.setViewName("nexacroMapView");
					mav.addObject(NexacroConstant.ERROR_CODE, "-1");
					mav.addObject(NexacroConstant.ERROR_MSG, "err.파일.다운로드.실패");
				}
			}
			
		}catch(Exception e){
			e.printStackTrace();
			throw new NexaServiceException("err.파일.다운로드.실패");
		}

		return mav;
	}
	
	/**
	 * 게시판 파일삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/bbs/HPM030201/deleteFile.do")
	public ModelAndView deleteFile(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HPM030201Service, "deleteFile", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 게시판 파일등록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/bbs/HPM030201/uploadFile.do")
	public ModelAndView uploadFile(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HPM030201Service, "uploadFile", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		return mav;
	}
	
	/**
	 * 게시판 게시물 내부결재
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/hpm/bbs/HPM030201/innerSanctn.do")
	public ModelAndView innerSanctn(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HPM030201Service, "innerSanctn", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		return mav;
	}
}
