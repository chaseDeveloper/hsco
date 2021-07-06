package hsco.pms.sls.lad.std.SLS070102;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS070102ServiceImpl.java
 * @Description  	: 토지상세정보 관리를 위한 Service
 * @author       	: 이인성
 * @since        	: 2015. 6.11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        	작성자                	내용
 * ------------------------------------------------------------------
 *  2015. 6.11.		이인성			최초생성
 *  2015.09.17		이상준			Rework
 * </pre>  
 */
@Service("SLS070102Service")
public class SLS070102ServiceImpl extends BaseService implements SLS070102Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;
		
    /**
     * 토지 상세정보 전체 조회(납부정보, 할인정보 포함)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void selectLadDetailAllInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		
		// 토지납부정보
		List<Map> payInfoList = (List<Map>)baseDao.list("SLS070102DAO.selectLadPayInfoList", inMap);
		DataSetMap outPayInfoMap = new DataSetMap();
		outPayInfoMap.setRowMaps(payInfoList);

		outDataset.put("ladPayInfoList", outPayInfoMap);
	}
    
    /**
     * 토지 상세정보 주소(소재지, 소재지지번)조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void selectLadDetailAddrList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		
		// 토지상세정보 주소목록
		List<Map> ladDetAddrList = (List<Map>)baseDao.list("SLS070102DAO.selectLadDetailAddrList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(ladDetAddrList);
		
		outDataset.put("ladDetailAddrList", outDsMap);
	}
    
    /**
     * 토지 상세정보 저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    
    @SuppressWarnings({"unchecked","rawtypes"})
    public void saveLadDetailInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	
    	int upFileCnt = 0;
    	List<Map<String, Object>> regFileList = null;
    	if(fileInfo != null){
    		
    		NexacroMapDTO xpDto = getXpDto();
    		fileUploadService.setFileLocation(getFileLocation());
    	
    		/**
    		 * uploadOnlySingleFileinfo : 마스터당 1개의 파일만 소유
        	 * resultMap.put("UP_FILE_CNT", upFileListSize);	// 파일 수
    		 * resultMap.put("UP_FILE_LIST", fileList);			// 업로드 파일 정보
        	 */
    		Map<String, Object> upFileResult = (Map<String, Object>)fileUploadService.uploadSingleFileWidthSn(xpDto);
    		
    		if(upFileResult != null){
    			upFileCnt = Integer.parseInt((String.valueOf(upFileResult.get("UP_FILE_CNT"))));
    			regFileList = (List<Map<String, Object>>)upFileResult.get("UP_FILE_LIST");
    		}
    	}
	    
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		
		int infoSize = (targetInfo == null) ? 0 : targetInfo.size();
    	
		List<Map> failList = new ArrayList<Map>();

		for(int i = 0; i < infoSize; i++) {
			
			Map targetMap = targetInfo.get(i);

			int rowType = ((Integer)targetMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			try
			{
				//System.out.println("upFileCnt = " + upFileCnt);
				//System.out.println("regFileList = " + (regFileList == null ? 0 : regFileList.size()));
				
				if(upFileCnt > 0 && regFileList != null){
					
					String inAtchFlpth = (String)targetMap.get("ATCH_FLPTH");
					String inFileSn = (String)targetMap.get("FILE_SN");
					
					//System.out.println("target inAtchFlpth = " + inAtchFlpth);
					//System.out.println("target FileSn = " + inFileSn);
					
					if(inFileSn != null && inAtchFlpth == null){
						
						// 첨부파일 결과 목록에서 저장 데이터의 FILE_SN에 해당하는 정보를 추출한다.
						Map<String, Object> resfileItem = ObjectUtil.findRowItemInList(regFileList, "FILE_SN", inFileSn);
						
						//System.out.println(resfileItem.toString());
						
						if(resfileItem != null){
							String regFileSn = String.valueOf(resfileItem.get("FILE_SN"));
							String regFileOrdr = String.valueOf(resfileItem.get("FILE_ORDR"));
											
							targetMap.put("ATCH_FLPTH", regFileSn + "|" + regFileOrdr);
						}
					}
					
				}
				
				//System.out.println(targetMap.toString());

				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("SLS070102DAO.insertLadDetailInfo", targetMap);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("SLS070102DAO.updateLadDetailInfo", targetMap);
						break;
						
					// 삭제는 별도 처리
					// 통합처리시 해야할 일이 많음 
					//case DataSet.ROW_TYPE_DELETED :
					//	baseDao.delete("SLS070102DAO.deleteLadDetailInfo", targetMap);
					//	break;
						
					default :
						break;
				}
			}
			catch(Exception ex)
			{
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				//System.out.println("ex Message = " + exMessage);
				
				if(exMessage.indexOf("ORA-00001") != -1){
					targetMap.put("EX_COUSE", "중복");
				}else{
					targetMap.put("EX_COUSE", exMessage);
				}
				
				failList.add(targetMap);
			}
		}
		
		DataSetMap failMap = new DataSetMap();
		failMap.setRowMaps(failList);
		
		outDataset.put("failLadList", failMap);
	}
    
    /**
     * 토지 상세정보 저장 - 토지정보, 납부정보
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    
    @SuppressWarnings({"unchecked","rawtypes"})
    public void saveLadDetailAllInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	// [STEP 1] 첨부파일 확인 및 처리
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	
    	int upFileCnt = 0;
    	List<Map<String, Object>> regFileList = null;
    	if(fileInfo != null){
    		
    		NexacroMapDTO xpDto = getXpDto();
    		fileUploadService.setFileLocation(getFileLocation());
    	
    		/**
    		 * uploadOnlySingleFileinfo : 마스터당 1개의 파일만 소유
        	 * resultMap.put("UP_FILE_CNT", upFileListSize);	// 파일 수
    		 * resultMap.put("UP_FILE_LIST", fileList);			// 업로드 파일 정보
        	 */
    		Map<String, Object> upFileResult = (Map<String, Object>)fileUploadService.uploadSingleFileWidthSn(xpDto);
    		
    		if(upFileResult != null){
    			upFileCnt = Integer.parseInt((String.valueOf(upFileResult.get("UP_FILE_CNT"))));
    			regFileList = (List<Map<String, Object>>)upFileResult.get("UP_FILE_LIST");
    		}
    	}
    	
    	// [Step 2] 토지정보 저장
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		
		int infoSize = (targetInfo == null) ? 0 : targetInfo.size();
    	
		List<Map> failLadList = new ArrayList<Map>();
		
		for(int i = 0; i < infoSize; i++) {
			
			Map targetMap = targetInfo.get(i);

			int rowType = ((Integer)targetMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			try
			{
				//System.out.println("upFileCnt = " + upFileCnt);
				//System.out.println("regFileList = " + (regFileList == null ? 0 : regFileList.size()));
				
				if(upFileCnt > 0 && regFileList != null){
					
					String inAtchFlpth = (String)targetMap.get("ATCH_FLPTH");
					String inFileSn = (String)targetMap.get("FILE_SN");
					
					//System.out.println("target inAtchFlpth = " + inAtchFlpth);
					//System.out.println("target FileSn = " + inFileSn);
					
					if(inFileSn != null && inAtchFlpth == null){
						
						// 첨부파일 결과 목록에서 저장 데이터의 FILE_SN에 해당하는 정보를 추출한다.
						Map<String, Object> resfileItem = ObjectUtil.findRowItemInList(regFileList, "FILE_SN", inFileSn);
						
						//System.out.println(resfileItem.toString());
						
						if(resfileItem != null){
							String regFileSn = String.valueOf(resfileItem.get("FILE_SN"));
							String regFileOrdr = String.valueOf(resfileItem.get("FILE_ORDR"));
											
							targetMap.put("ATCH_FLPTH", regFileSn + "|" + regFileOrdr);
						}
					}
					
				}
				
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("SLS070102DAO.insertLadDetailInfo", targetMap);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("SLS070102DAO.updateLadDetailInfo", targetMap);
						break;
						
					// 삭제는 별도 처리
					// 통합처리시 해야할 일이 많음 
					/*
					case DataSet.ROW_TYPE_DELETED :
					//	baseDao.delete("SLS070102DAO.deleteLadDetailInfo", targetMap);
						
						// 대상 토지코드별 토지계약자수, 정산건수 조회
						String inLadCode = (String)targetMap.get("LAD_CODE");	// 토지코드
						String inBlck = (String)targetMap.get("BLCK");			// 블록
						String inLot = (String)targetMap.get("LOT");			// 롯트
						String inLotTy = (String)targetMap.get("LOT_TY");		// 롯트구분
						String inFileSn = (String)targetMap.get("ATCH_FLPTH");	// 파일일련번호
						Map cntMap = (Map)baseDao.select("SLS070102DAO.selectLcntrctrExcclcCnt", targetMap);
						int lcntrctrCnt = Integer.parseInt(String.valueOf(cntMap.get("LCNTRCTR_CNT")));	// 계약자수
						int excclcCnt = Integer.parseInt(String.valueOf(cntMap.get("EXCCLC_CNT")));		// 정산건수
						
						if(lcntrctrCnt > 0 || excclcCnt > 0){
							// 토지 계약자 정보, 정산정보가 있어 삭제할 수 없습니다.
							String targetLadInfo = inLadCode + " (" + inBlck + "-" + inLot + "-" + inLotTy + ")";
							String infoMsg = "해당 토지(" + targetLadInfo + ")에 계약자 정보, 정산정보가 있어"; 
							//throw new NexaServiceException("fail.삭제.실패", infoMsg);
						
							targetMap.put("EX_COUSE", infoMsg + "삭제할 수 없습니다.");
							
							continue;
							
						}else{
						
							// 토지납부정보 일괄 삭제
							baseDao.delete("SLS070102DAO.deleteLadPayAllInfo", targetMap);

							// 토지상세 파일정보 삭제
							// 컬럼 수정 후 - 파일일련번호, 파일순차번호
							boolean hasAtchFile = StringUtil.isNull(inFileSn) ? false : true;
							if(hasAtchFile){
								NexacroMapDTO xpDto = getXpDto();
								Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
								
								log.info("첨부파일 삭제 결과 = " + delResult.toString());
							}
							
							// 토지상세정보 삭제
							baseDao.delete("SLS070102DAO.deleteLadDetailInfo", targetMap);
						}
						
						break;
						*/
						
					default :
						break;
				}
			}
			catch(Exception ex)
			{
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				//System.out.println("ex Message = " + exMessage);
				
				if(exMessage.indexOf("ORA-00001") != -1){
					targetMap.put("EX_COUSE", "중복");
				}else{
					targetMap.put("EX_COUSE", exMessage);
				}
				
				failLadList.add(targetMap);
			}
		}
		
		// [Step 3] 납부정보 저장
		DataSetMap payInfoList = (DataSetMap)inDataset.get("input2");
		
		int payInfoSize = (payInfoList == null) ? 0 : payInfoList.size();
		
		//System.out.println("payInfoSize = " + payInfoSize);
		
		List<Map> failPayList = new ArrayList<Map>();
		for(int j = 0; j < payInfoSize; j++){
			
			Map payInfoMap = payInfoList.get(j);

			int rowType = ((Integer)payInfoMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			try
			{
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("SLS070102DAO.insertLadPayInfo", payInfoMap);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("SLS070102DAO.updateLadPayInfo", payInfoMap);
						break;
					case DataSet.ROW_TYPE_DELETED :
						baseDao.delete("SLS070102DAO.deleteLadPayInfo", payInfoMap);
						break;
				}
			}
			catch(Exception ex)
			{
				if(ex.getMessage().indexOf("ORA-00001") != -1){
					payInfoMap.put("EX_COUSE", "중복");
				}else{
					payInfoMap.put("EX_COUSE", ex.getMessage());
				}

				failPayList.add(payInfoMap);
			}
			
		}
		
		DataSetMap failLadMap = new DataSetMap();
		failLadMap.setRowMaps(failLadList);
		
		DataSetMap failPayMap = new DataSetMap();
		failPayMap.setRowMaps(failPayList);
		
		outDataset.put("failLadList", failLadMap);
		outDataset.put("failPayList", failPayMap);
	}
    
    /**
     * 토지 상세정보 일괄저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    
    @SuppressWarnings({"unchecked","rawtypes"})
    public void saveLadDetailInfoBatch(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		
		int infoSize = (targetInfo == null) ? 0 : targetInfo.size();
    	
		List<Map> failList = new ArrayList<Map>();
		for(int i = 0; i < infoSize; i++) {
			
			Map targetMap = targetInfo.get(i);

			// 기 등록건 확인
			int regCnt = (Integer)baseDao.select("SLS070102DAO.selectLadDetailInfoCnt", targetMap);
			System.out.println("regCnt => : "+ regCnt);
			try
			{
				if(regCnt == 1){
					baseDao.insert("SLS070102DAO.insertLadDetailInfo", targetMap);
					
				}else if(regCnt == 2){
					baseDao.update("SLS070102DAO.updateLadDetailInfo", targetMap);
				}
			}
			catch(Exception ex)
			{
				if(ex.getMessage().indexOf("ORA-00001") != -1){
					targetMap.put("EX_COUSE", "중복");
				}else{
					targetMap.put("EX_COUSE", ex.getMessage());
				}
				
				failList.add(targetMap);
			}
		}
		
		DataSetMap failMap = new DataSetMap();
		failMap.setRowMaps(failList);
		
		outDataset.put("failLadList", failMap);
	}
    
//    
//    @SuppressWarnings({"unchecked","rawtypes"})
//    public void saveLadDetailInfoBatch(DataSetMap tranInfo, Map<String, Object> inVar,
//			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
//			Map<String, DataSetMap> outDataset) throws NexaServiceException {
//		
//    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
//		List<Map> failList = new ArrayList<Map>();
//		
//		int infoSize = (targetInfo == null) ? 0 : targetInfo.size();
//    	
//
//		for(int i = 0; i < infoSize; i++) {
//			
//			Map targetMap = targetInfo.get(i);
//
//			try
//			{
//				System.out.println("targetMap ==> : " + targetMap);
//				baseDao.update("SLS070102DAO.updateLadDetailInfo", targetMap);
//			}
//			catch(Exception ex)
//			{
//				if(ex.getMessage().indexOf("ORA-00001") != -1){
//					targetMap.put("EX_COUSE", "중복");
//				}else{
//					targetMap.put("EX_COUSE", ex.getMessage());
//				}
//				
//				failList.add(targetMap);
//			}
//		}
//		
//		DataSetMap failMap = new DataSetMap();
//		failMap.setRowMaps(failList);
//		
//		outDataset.put("failLadList", failMap);
//	}    
    
    /**
     * 토지상세정보 삭제
     *  - 해당 토지코드의 상세정보를 삭제
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({"rawtypes"})
    public void deleteLadDetailInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
			
			// 대상 토지코드별 토지계약자수, 정산건수 조회
			String inLadCode = (String)inMap.get("LAD_CODE");	// 토지코드
			String inBlck = (String)inMap.get("BLCK");			// 블록
			String inLot = (String)inMap.get("LOT");			// 롯트
			String inLotTy = (String)inMap.get("LOT_TY");		// 롯트구분
			String inFileSn = (String)inMap.get("ATCH_FLPTH");	// 파일일련번호
			Map cntMap = (Map)baseDao.select("SLS070102DAO.selectLcntrctrExcclcCnt", inMap);
			int lcntrctrCnt = Integer.parseInt(String.valueOf(cntMap.get("LCNTRCTR_CNT")));	// 계약자수
			int excclcCnt = Integer.parseInt(String.valueOf(cntMap.get("EXCCLC_CNT")));		// 정산건수
			
			if(lcntrctrCnt > 0 || excclcCnt > 0){
				// 토지 계약자 정보, 정산정보가 있어 삭제할 수 없습니다.
				String targetLadInfo = inLadCode + " (" + inBlck + "-" + inLot + "-" + inLotTy + ")";
				String infoMsg = "해당 토지(" + targetLadInfo + ")에 계약자 정보, 정산정보가 있어"; 
				throw new NexaServiceException("fail.삭제.실패", infoMsg);
			}else{
			
				// 토지납부정보 일괄 삭제
				baseDao.delete("SLS070102DAO.deleteLadPayAllInfo", inMap);

				// 토지상세 파일정보 삭제
				// 컬럼 수정 후 - 파일일련번호, 파일순차번호
				boolean hasAtchFile = StringUtil.isNull(inFileSn) ? false : true;
				if(hasAtchFile){
					NexacroMapDTO xpDto = getXpDto();
					Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
					
					log.info("첨부파일 삭제 결과 = " + delResult.toString());
				}
				
				// 토지상세정보 삭제
				baseDao.delete("SLS070102DAO.deleteLadDetailInfo", inMap);
			}
			
		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
    }
    
    /**
     * 토지 상세정보 주소(소재지, 소재지 지번) 일괄저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    
    @SuppressWarnings({"unchecked","rawtypes"})
    public void saveLadDetailAddrInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		
		int infoSize = (targetInfo == null) ? 0 : targetInfo.size();
    	
		List<Map> failList = new ArrayList<Map>();
		for(int i = 0; i < infoSize; i++) {
			
			Map targetMap = targetInfo.get(i);

			// 기 등록건 확인
			int regCnt = (Integer)baseDao.select("SLS070102DAO.selectLadDetailInfoCnt", targetMap);
						
			try
			{
				// 등록된 토지에 대해 주소 정보 업데이트
				// 미 등록 토지의 경우 실패목록에 추가하고 다음으로 진행
				if(regCnt > 0){
					baseDao.update("SLS070102DAO.updateLadDetailAddrInfo", targetMap);
				}else{
					targetMap.put("EX_COUSE", "토지없음");
					failList.add(targetMap);
					continue;
				}
			}
			catch(Exception ex)
			{
				if(ex.getMessage().indexOf("ORA-00001") != -1){
					targetMap.put("EX_COUSE", "중복");
				}else{
					targetMap.put("EX_COUSE", ex.getMessage());
				}
				
				failList.add(targetMap);
			}
		}
		
		DataSetMap failMap = new DataSetMap();
		failMap.setRowMaps(failList);
		
		outDataset.put("failList", failMap);
	}
    
    /**
     * 토지상세정보 일괄 삭제
     *  - 해당 토지코드(LAD_CODE)의 전체 상세정보를 삭제
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    
    public void deleteLadDetailAllInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
			
			// [STEP 1] 해당 토지코드의 상세정보 목록을 조회한다. - LAD_CODE
			List<Map> ladDetList = (List<Map>)baseDao.list("SLS070102DAO.selectLadDetailBatchList", inMap);
			
			int ladDetListSize = ladDetList == null ? 0 : ladDetList.size();
			
//			System.out.println("[STEP 1] 삭제대상 목록 = " + ladDetListSize + " 건");
			
			List<Map> failList = new ArrayList<Map>();
			for(int i = 0; i < ladDetListSize; i++){
				
				Map<String, Object> ladDetItem = ladDetList.get(i);
				
				String tgLadCode = (String)ladDetItem.get("LAD_CODE");		// 토지코드
				String tgBlck = (String)ladDetItem.get("BLCK");				// 블록
				String tgLot = (String)ladDetItem.get("LOT");				// 롯트
				String tgLotTy = (String)ladDetItem.get("LOT_TY");			// 롯트구분
				String tgAtchFpath = (String)ladDetItem.get("ATCH_FLPTH");	// 파일경로
				String tgFileSn = (String)ladDetItem.get("FILE_SN");		// 파일일련번호
				String tgFileOrdr = (String)ladDetItem.get("FILE_ORDR");	// 파일순차번호
				int tgLcntrctrCnt = Integer.parseInt(String.valueOf(ladDetItem.get("LCNTRCTR_CNT")));	// 계약자수
				int tgExcclcCnt = Integer.parseInt(String.valueOf(ladDetItem.get("EXCCLC_CNT")));		// 정산건수
				
//				System.out.println("[STEP 2] 계약자수 = " + tgLcntrctrCnt + " : 정산건수 = " + tgExcclcCnt);
				
				// [STEP 2] 해당 토지의 계약자정보, 정산정보가 있을 경우 삭제 불가
				if(tgLcntrctrCnt > 0 || tgExcclcCnt > 0){
					
					String targetLadInfo = tgLadCode + " (" + tgBlck + "-" + tgLot + "-" + tgLotTy + ")";
					String couseMsg = "해당 토지(" + targetLadInfo + ")에 계약자 정보, 정산정보가 있어 삭제할 수 없습니다."; 
					ladDetItem.put("EX_COUSE", couseMsg);
					
//					System.out.println("[STEP 2] " + couseMsg);
					
					failList.add(ladDetItem);
					
//					System.out.println("[STEP 2] 삭제대상 아님 continue!!");
					
					continue;
					
				}else{
				
//					String delLadInfo = tgLadCode + " (" + tgBlck + "-" + tgLot + "-" + tgLotTy + ")";
					
					// [STEP 3] 토지납부정보 일괄 삭제
//					System.out.println("[STEP 3]  토지납부정보 일괄 삭제");
					baseDao.delete("SLS070102DAO.deleteLadPayAllInfo", inMap);
					
					// [STEP 4] 첨부파일 삭제				
					boolean hasAtchFile = StringUtil.isNull(tgAtchFpath) ? false : true;
//					System.out.println("[STEP 4] 토지납부정보 첨부파일 삭제 : " + (hasAtchFile ? "있음" : "없음"));
					if(hasAtchFile){
				
//						System.out.println("[STEP 4] 토지납부정보 첨부파일 삭제 : FILE_SN = " + tgFileSn + " , FILE_ORDR = " + tgFileOrdr);
						
						// 파일일련번호, 파일순차번호에 해당하는 파일 삭제
						Map<String, Object> delResult = fileUploadService.deleteFileInfo(tgFileSn, tgFileOrdr);
						
						log.debug("첨부파일 삭제 결과 = " + delResult.toString());
					}
					
					// [STEP 5] 토지상세정보 삭제
//					System.out.println("[STEP 5] 토지상세정보 삭제 : " + delLadInfo);
					baseDao.delete("SLS070102DAO.deleteLadDetailInfo", ladDetItem);
					
				}
				
			}
			
			DataSetMap failMap = new DataSetMap();
			failMap.setRowMaps(failList);
			
			outDataset.put("failLadList", failMap);
			
		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
    }
    
    /**
     * 토지상세정보 일괄 삭제
     *  - 해당 토지코드(LAD_CODE)의 전체 상세정보를 삭제
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    
    public void deleteLadDetailCheckedInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		int infoSize = (inDsMap == null) ? 0 : inDsMap.size();
    	
		if(infoSize > 0){
			
			List<Map> failLadList = new ArrayList<Map>();
			
			for(int i = 0; i < infoSize; i++)
			{
				Map inMap = inDsMap.get(i);
	
				// [STEP 1] 삭제대상 확인
				int rowType = ((Integer)inMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				String inChk = (String)inMap.get("CHK");
				
//				System.out.println("[STEP 1] rowType = " + rowType + " : CHK = " + inChk);
				
				if("1".equals(inChk)){
					
//					System.out.println("[STEP 1] 삭제대상");
					
					String inLadCode = (String)inMap.get("LAD_CODE");		// 토지코드
					String inBlck = (String)inMap.get("BLCK");				// 블록
					String inLot = (String)inMap.get("LOT");				// 롯트
					String inLotTy = (String)inMap.get("LOT_TY");			// 롯트구분
					String inAtchFpath = (String)inMap.get("ATCH_FLPTH");	// 파일경로
					String inFileSn = (String)inMap.get("FILE_SN");			// 파일일련번호
					String inFileOrdr = (String)inMap.get("FILE_ORDR");		// 파일순차번호
					
					// [STEP 2] 대상 토지코드별 토지계약자수, 정산건수 조회
					Map cntMap = (Map)baseDao.select("SLS070102DAO.selectLcntrctrExcclcCnt", inMap);
					int lcntrctrCnt = Integer.parseInt(String.valueOf(cntMap.get("LCNTRCTR_CNT")));	// 계약자수
					int excclcCnt = Integer.parseInt(String.valueOf(cntMap.get("EXCCLC_CNT")));		// 정산건수
					
//					System.out.println("[STEP 2] 계약자수 = " + lcntrctrCnt + " : 정산건수 = " + excclcCnt);
					
					if(lcntrctrCnt > 0 || excclcCnt > 0){

						String inLadInfo = inLadCode + " (" + inBlck + "-" + inLot + "-" + inLotTy + ")";
						String couseMsg = "해당 토지(" + inLadInfo + ")에 계약자 정보, 정산정보가 있어 삭제할 수 없습니다."; 
						inMap.put("EX_COUSE", couseMsg);
						
//						System.out.println("[STEP 2] " + couseMsg);
						
						failLadList.add(inMap);
						
//						System.out.println("[STEP 2] 삭제대상 아님 continue!!");
						
						continue;
						
					}else{

//						String delLadInfo = inLadCode + " (" + inBlck + "-" + inLot + "-" + inLotTy + ")";
						
						// [STEP 3] 토지납부정보 일괄 삭제
//						System.out.println("[STEP 3] 토지납부정보 일괄 삭제 : " + delLadInfo);
						baseDao.delete("SLS070102DAO.deleteLadPayAllInfo", inMap);
						
						// [STEP 4] 첨부파일 삭제				
						boolean hasAtchFile = StringUtil.isNull(inAtchFpath) ? false : true;
//						System.out.println("[STEP 4] 토지납부정보 첨부파일 삭제 : " + (hasAtchFile ? "있음" : "없음"));
						if(hasAtchFile){
//							System.out.println("[STEP 4] 토지납부정보 첨부파일 삭제 : FILE_SN = " + inFileSn + " , FILE_ORDR = " + inFileOrdr);
							
							// 파일일련번호, 파일순차번호에 해당하는 파일 삭제
							Map<String, Object> delResult = fileUploadService.deleteFileInfo(inFileSn, inFileOrdr);
							
							log.debug("첨부파일 삭제 결과 = " + delResult.toString());
						}
						
						// [STEP 5] 토지상세정보 삭제
//						System.out.println("[STEP 5] 토지상세정보 삭제 : " + delLadInfo);
						baseDao.delete("SLS070102DAO.deleteLadDetailInfo", inMap);
					}
					
				}else{
//					System.out.println("[STEP 1] 삭제대상 아님 continue!!");
					continue;
				}
			}
			
			DataSetMap failLadMap = new DataSetMap();
			failLadMap.setRowMaps(failLadList);
			
			outDataset.put("failLadList", failLadMap);
			
		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
    }
    
    /**
     * 토지상세정보 첨부파일 정보 수정(삭제)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"rawtypes"})
    
    public void deleteLadDetailFileInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
			
			// 공통파일정보 삭제
			NexacroMapDTO xpDto = getXpDto();
			Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
			
			if(delResult == null){
				// 삭제할 데이터가 없습니다.
				throw new NexaServiceException("info.삭제.데이터.없음");
			}
			
			// 업데이트 데이터 구성
			Map<String, Object> updateMap = new HashMap<String, Object>();
			updateMap.put("LAD_CODE", inMap.get("LAD_CODE"));	// 토지코드
			updateMap.put("BLCK", inMap.get("BLCK"));			// 블록
			updateMap.put("LOT", inMap.get("LOT"));				// 롯트
			updateMap.put("LOT_TY", inMap.get("LOT_TY"));		// 롯트구분
			updateMap.put("ATCH_FLPTH", null);					// 첨부파일경로
			updateMap.put("ATCH_FILE", null);					// 첨부파일명
			
			baseDao.update("SLS070102DAO.updateLadDetailFileInfo", updateMap);
			
		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
    }
    
    /**
     * 토지상세정보 첨부파일 정보 수정(삭제)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void atchCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		Map targetMap = targetInfo.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
		Map fileInfoMap = fileInfo.get(0);  // 파일업로드 할 데이터 셋    
		
    	Object fileSn = targetMap.get("FILE_SN");
    	
    	Map<String, Object> upResult = null;  
    	if(fileInfo != null){
    		
    		// 계약관리테이블에 file_sn이 존재시 , inputFile 데이터셋에 file_sn을 설정
    		// file_sn 없으면 새로 생성
    		if(fileSn != null){			
    			fileInfoMap.put("FILE_SN" , fileSn);
    		}
	    		NexacroMapDTO xpDto = getXpDto();
	    		fileUploadService.setFileLocation(getFileLocation());
	    		upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
    	}    	
    	
		List<Map> failList = new ArrayList<Map>(); 
		
		try
		{
			if(upResult != null){				

				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				baseDao.insert("SLS070102DAO.atchCUD", targetMap);
			}

		}
		catch(Exception ex)
		{
			if(ex.getMessage().indexOf("ORA-00001") != -1){
				targetMap.put("EX_COUSE", "중복");
			}else{
				targetMap.put("EX_COUSE", ex.getMessage());
			}
			
			failList.add(targetMap);
		}		
    	
		DataSetMap failMap = new DataSetMap();
		failMap.setRowMaps(failList);
		outDataset.put("failList", failMap);
    }    
    
    
    /**
     * 토지 납부정보 목록 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void getMultiFileList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    		
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
    	
    	Map targetMap = null;
    	        
		if (targetInfo != null){
			targetMap = targetInfo.get(0);
		}
		
		// 토지상세정보 - 납부정보 목록
		List<Map> payInfoList = (List<Map>)baseDao.list("SLS070102DAO.getMultiFileList", targetMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(payInfoList);
		
		outDataset.put("multifileList", outDsMap);
	}
    
    /* 첨부파일 삭제 */
    @SuppressWarnings({"rawtypes"})
    public void atchDelete(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		if (list != null){
			Map<String, Object> inMap = list.get(0);
			
			for (int x = 0; x < list.size(); x++) {
					
				Map<String, Object> map = list.get(x);
				
				String inFileSn = (String)map.get("FILE_SN");	// 파일일련번호
					
					// 컬럼 수정 후 - 파일일련번호, 파일순차번호
					boolean hasAtchFile = StringUtil.isNull(inFileSn) ? false : true;
					if(hasAtchFile){
						NexacroMapDTO xpDto = getXpDto();
						Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
													
						log.info("첨부파일 삭제 결과 = " + delResult.toString());
					}
				}
			
			// 상세 목록카은트
			// 공통첨부 디테일 조회후 파일이 존재 하지 않으면 계약관리 테이블 file_sn 값을 null로 변경
			int fileCnt = (Integer)baseDao.select("RNT030301DAO.FILECNT", inMap);
			if(fileCnt == 0)
			{
				// 계약관리 FILE_SN NULL로 업데이트
				baseDao.delete("SLS070102DAO.atchDelete", inMap);
			}				

			}else{
				// 삭제할 데이터가 없습니다.
				throw new NexaServiceException("info.삭제.데이터.없음");
			}
    }    
    
    /**
     * 토지 납부정보 목록 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void selectLadPayInfoList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		
		// 토지상세정보 - 납부정보 목록
		List<Map> payInfoList = (List<Map>)baseDao.list("SLS070102DAO.selectLadPayInfoList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(payInfoList);
		
		outDataset.put("ladPayInfoList", outDsMap);
	}
    
    /**
     * 토지 납부정보 급지적용 처리
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void createLadPayInfoClass(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		
			String inLadCode = (String)inMap.get("LAD_CODE");
			
			// 토지상세정보 금액정보 조히
			Map<String, Object> ladAmtInfo = (Map<String, Object>)baseDao.select("SLS070102DAO.selectLadAmtInfo", inMap);
			
			// 토지납부비율 정보 조회
			List<Map> payRateInfoList = (List<Map>)baseDao.list("SLS070102DAO.selectLadPayRateInfoList", inMap);
			int payRateInfoSize = payRateInfoList == null ? 0 : payRateInfoList.size();
			if(payRateInfoSize == 0){
				// 토지 계약자 정보, 정산정보가 있어 삭제할 수 없습니다.
				String infoMsg = "해당 토지코드(" + inLadCode + ")의 용도구분, 공급구분에 대한 납부금액비율 정보가 없어"; 
				throw new NexaServiceException("fail.정보등록.실패", infoMsg);
			}else{
				
				String deleteAt = (String)inMap.get("DELETE_AT");
				if("Y".equals(deleteAt)){
					// 고지내역 또는 수납내역이 있으면 삭제 불가처리 해야
					
					// 기존 (기준)납부정보 삭제처리
					baseDao.delete("SLS070102DAO.deleteLadPayAllInfo", inMap);
				}
				
				List<Map> savePayInfo = getLadPayInfoByRatio(ladAmtInfo, payRateInfoList);
				int savePayInfoSize = savePayInfo.size();
				for(int i = 0; i < savePayInfoSize; i++){
					Map<String, Object> savePayInfoItem = savePayInfo.get(i);
					baseDao.insert("SLS070102DAO.insertLadPayInfo", savePayInfoItem);
				}
				
			}
		}
		
		// 토지상세정보 - 납부정보
		List<Map> payInfoList = (List<Map>)baseDao.list("SLS070102DAO.selectLadPayInfoList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(payInfoList);
		
		outDataset.put("ladPayInfoList", outDsMap);
	}
    
    /**
     * 토지 납부정보 급지적용용 목록 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void selectLadPayInfoClass(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	List<Map> createPayInfoList = new ArrayList();
    	
    	Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		
			String inLadCode = (String)inMap.get("LAD_CODE");
			
			// 토지납부비율 정보 조회
			List<Map> payRateInfoList = (List<Map>)baseDao.list("SLS070102DAO.selectLadPayRateInfoList", inMap);
			int payRateInfoSize = payRateInfoList == null ? 0 : payRateInfoList.size();
			if(payRateInfoSize == 0){
				// 토지 계약자 정보, 정산정보가 있어 삭제할 수 없습니다.
				String infoMsg = "해당 토지코드(" + inLadCode + ")의 용도구분, 공급구분에 대한 납부금액비율 정보가 없습니다."; 
				throw new NexaServiceException("info.조회.데이터.없음", infoMsg);
			}else{
				createPayInfoList = getLadPayInfoByRatio(inMap, payRateInfoList);
				int createPayInfoSize = createPayInfoList.size();
				for(int i = 0; i < createPayInfoSize; i++){
					Map<String, Object> savePayInfoItem = createPayInfoList.get(i);
					savePayInfoItem.put("CHK", "0");
				}
			}
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(createPayInfoList);
		
		outDataset.put("ladPayInfoList", outDsMap);
	}
    
    /**
     * 토지 납부정보 저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void saveLadPayInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		
		int infoSize = (targetInfo == null) ? 0 : targetInfo.size();
    	
		List<Map> failList = new ArrayList<Map>();
		for(int i = 0; i < infoSize; i++) {
			
			Map targetMap = targetInfo.get(i);

			int rowType = ((Integer)targetMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			try
			{
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("SLS070102DAO.insertLadPayInfo", targetMap);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("SLS070102DAO.updateLadPayInfo", targetMap);
						break;
					case DataSet.ROW_TYPE_DELETED :
						baseDao.delete("SLS070102DAO.deleteLadPayInfo", targetMap);
						break;
				}
			}
			catch(Exception ex)
			{
				if(ex.getMessage().indexOf("ORA-00001") != -1){
					targetMap.put("EX_COUSE", "중복");
				}else{
					targetMap.put("EX_COUSE", ex.getMessage());
				}

				failList.add(targetMap);
			}
		}
		
		DataSetMap failMap = new DataSetMap();
		failMap.setRowMaps(failList);
		
		outDataset.put("failPayList", failMap);
	}
    
    /**
     * 납부 비율을 적용한 납부정보를 생성하여 반환한다. 
     * @param ladAmtInfo
     * @param payRateInfoList
     * @return
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    private List<Map> getLadPayInfoByRatio(Map<String, Object> ladAmtInfo, List<Map> payRateInfoList){
    	
    	List<Map> resultList = new ArrayList<Map>();
    	
    	String inBgnnAmount = String.valueOf(ladAmtInfo.get("BGNN_AMOUNT") == null ? 0 : ladAmtInfo.get("BGNN_AMOUNT"));
    	long dcsnAmount = inBgnnAmount == null ? 0 :Long.parseLong(String.valueOf(inBgnnAmount)); // 당초금액
		
		long setSumAmt = 0;
		int payRateInfoSize = payRateInfoList == null ? 0 : payRateInfoList.size();
		for(int i = 0; i < payRateInfoSize; i++){
			Map<String, Object> ratioMap = payRateInfoList.get(i);	// 대상 목록
			
			double tgRatio = Double.parseDouble(String.valueOf(ratioMap.get("PAY_RATE"))) * 0.01;	// 비율계상
			long tgAmt = (long)Math.floor(dcsnAmount * tgRatio * 0.1) * 10;	// 비율에 따른 금액
			
			long payamt = 0;
			if(tgRatio > 0){
				
				long tempSumAmt = setSumAmt + tgAmt;
				if(tempSumAmt < dcsnAmount){
					payamt = tgAmt;
					setSumAmt = tempSumAmt;
				}else{
					payamt = dcsnAmount - setSumAmt;
					setSumAmt = setSumAmt + (dcsnAmount - setSumAmt);
				}
				
			}
			
			ratioMap.put("PAYAMT", payamt);

			resultList.add(ratioMap);
		}
		
		// 잔금처리 - 2009.07.30 박선영씨 요청으로 남는금액은 계약금에 합산함.
		if(setSumAmt < dcsnAmount){
			long blce = dcsnAmount - setSumAmt;
			
			int resultSize = resultList == null ? 0 : resultList.size();
			for(int j = 0; j < resultSize; j++){
				
				Map<String, Object> resultItem = resultList.get(j);	// 대상 목록
				String payCode = (String)resultItem.get("PAY_CODE");
				
				// 계약금(S0)의 경우 처리
				if("S0".equals(payCode)){
					long inPayAmt = Long.parseLong(String.valueOf(resultItem.get("PAYAMT"))); // 납부금액
					long newPayAmt = inPayAmt + blce;
					
					resultItem.put("PAYAMT", newPayAmt);
					break;
				}
			}
			
		}
		
    	return resultList;
    }
}
