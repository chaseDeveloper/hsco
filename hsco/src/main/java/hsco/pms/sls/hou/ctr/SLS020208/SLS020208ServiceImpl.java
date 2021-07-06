package hsco.pms.sls.hou.ctr.SLS020208;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.DateUtil;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS020208ServiceImpl.java
 * @Description  	: 
 * @author       	: 최승락
 * @since        	: 2015. 8.17.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 17.		 최승락			최초생성
 * </pre>
 */
@Service("SLS020208Service")
public class SLS020208ServiceImpl extends BaseService implements SLS020208Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;
		
    
	/**
	 * 주택코드조회 조회영역사용
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void houseCodeSh( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.houseCodeSh", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 평형코드 조회영역
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void pyeongSh( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.pyeongSh", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 계약목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHcntrctrList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List<Map>)baseDao.list("SLS020208DAO.selectHcntrctrList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 계약상세 정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHcntrctrInfo ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;		
		records = (List <Map>)baseDao.list("SLS020208DAO.selectHcntrctrInfo", inMap);		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		//압류/대출/국민주택기금 정보
		List <Map> records2;		
		records2 = (List <Map>)baseDao.list("SLS020208DAO.selectHcntrctrInfo2", inMap);		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap2);
	}

	
	/**
	 * 계약정보 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes", "unchecked" })	
	public int saveHcntrctrInfo ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		//=[첨부파일]=====================================================================================================================
		// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	
    	int upFileCnt = 0;
    	List<Map<String, Object>> regFileList = null;
//System.out.println("fileInfo ==================== " + fileInfo.toString());
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
    			//System.out.println("upFileResult ==================== " + upFileResult.toString());
    			upFileCnt = Integer.parseInt((String.valueOf(upFileResult.get("UP_FILE_CNT"))));
    			regFileList = (List<Map<String, Object>>)upFileResult.get("UP_FILE_LIST");
    		}
    	}
    	//=[첨부파일]=====================================================================================================================
    	
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			//=[첨부파일]=====================================================================================================================
			//System.out.println("upFileCnt ==================== " + upFileCnt);
			//System.out.println("regFileList =================== " + (regFileList == null ? 0 : regFileList.size()));
			
			if(upFileCnt > 0 && regFileList != null){
				
				String inAtchFlpth = (String)map.get("ORGINL_FILE_NM");
				String inFileSn = (String)map.get("FILE_SN");
				
				//System.out.println("target inAtchFlpth ================= " + inAtchFlpth);
				//System.out.println("target FileSn ============== " + inFileSn);
				
				if(inFileSn != null && inAtchFlpth != null){
					
					// 첨부파일 결과 목록에서 저장 데이터의 FILE_SN에 해당하는 정보를 추출한다.
					Map<String, Object> resfileItem = ObjectUtil.findRowItemInList(regFileList, "FILE_SN", inFileSn);
					
					String regFileSn = "";
					String regFileOrdr = "";
					if(resfileItem != null){
						regFileSn = String.valueOf(resfileItem.get("FILE_SN"));
						regFileOrdr = String.valueOf(resfileItem.get("FILE_ORDR"));
						
						map.put("CTRTC_FILE", regFileSn);
						map.put("CTRTC_FILE_COURS", regFileOrdr);
					}
					//System.out.println("regFileSn ====================" + regFileSn.toString());
					//System.out.println("regFileOrdr ====================" + regFileOrdr.toString());	
					
				}
				
			}
			//=[첨부파일]=====================================================================================================================
			System.out.println("rowType ====================" + rowType);
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					System.out.println("check1 ROW_TYPE_INSERTED ");
					// 계약번호 가져오기
					String cntrctrNo = selectCntrctrNo(map);					
					map.put("CNTRCTR_NO", cntrctrNo);
					
					// 계약정보 저장
					baseDao.insert("SLS020208DAO.insertHcntrctrInfo", map);
										
					// 최초분양금액은 동호 테이블에 UPDATE한다.
					baseDao.update("SLS020208DAO.updateDongHoInfo", map);
					
					// 주택입주대기자
					baseDao.update("SLS020208DAO.updateHouseMvnWaitrList", map);
					
					//임대계약 신규등록일 경우 주택임대료 테이블에 Insert 쳐준다.
					map.put("APPLC_DE", map.get("CNTRCT_DE"));
					map.put("RNTCHRG", map.get("BASS_RNTCHRG"));
					baseDao.insert("SLS020208DAO.insertHouseRntchng", map);
					
					
					// --------------------------------------------------------
					// 가상계좌 생성
					// --------------------------------------------------------
					Map<String, Object> paramMap = new HashMap<String, Object>();
					
			    	// 부서구분( SL:주택, LN:토지, RN:영구임대 관리비외, MA:영구임대 관리비)
			    	paramMap.put("IN_CRT_DIV", "SL");
					
			    	// 계약자번호
					Object cust_cd = map.get("CNTRCTR_NO").toString();
					paramMap.put("IN_CUST_ID", cust_cd);
					
					// 주택(토지)코드
					Object house_code = new String();
					paramMap.put("IN_HOUSE_CODE", house_code);
					
					// 은행코드
					Object bank_cd = new String();
					paramMap.put("IN_BANK_CD", bank_cd);
					
					// 대표계좌여부('1' - 임대료 전용계좌 )
					Object acct_div = "1";
					paramMap.put("IN_ACCT_DIV", acct_div);
					
					// 보증금전용계좌 등록 여부
					Object bj_yn = new String();
					paramMap.put("IN_BJ_YN", bj_yn);
					
			    	// 최초등록자
					Object first_entry = ObjectUtil.getSessionObj("S_USER_ID");
					paramMap.put("IN_FIRST_ENTRY", first_entry);
					
					//가상계좌 4개의 계좌 등록
					baseDao.update("COM000000DAO.SP_VA_MAST_U", paramMap);
					
					//보증금전용계좌 생성
					paramMap.put("IN_ACCT_DIV", "0");
					paramMap.put("IN_BJ_YN", "BJ");  
					baseDao.update("COM000000DAO.SP_VA_MAST_U", paramMap);
					
					break;
				case DataSet.ROW_TYPE_UPDATED :	
					System.out.println("check2 ROW_TYPE_INSERTED ");
					if(map.get("CNTRCTR_NO") == null){
						System.out.println("check3 ROW_TYPE_INSERTED ");
						// 계약번호 가져오기
						String cntrctrNoNew = selectCntrctrNo(map);					
						map.put("CNTRCTR_NO", cntrctrNoNew);
						
						// 계약정보 저장
						baseDao.insert("SLS020208DAO.insertHcntrctrInfo", map);
											
						// 최초분양금액은 동호 테이블에 UPDATE한다.
						baseDao.update("SLS020208DAO.updateDongHoInfo", map);
						
						// 주택입주대기자
						baseDao.update("SLS020208DAO.updateHouseMvnWaitrList", map);						
						// --------------------------------------------------------
						// 가상계좌 생성
						// --------------------------------------------------------
						Map<String, Object> paramMapNew = new HashMap<String, Object>();
						
				    	// 부서구분( SL:주택, LN:토지, RN:영구임대 관리비외, MA:영구임대 관리비)
						paramMapNew.put("IN_CRT_DIV", "SL");
						
				    	// 계약자번호
						Object cust_cd_new = map.get("CNTRCTR_NO").toString();
						paramMapNew.put("IN_CUST_ID", cust_cd_new);
						
						// 주택(토지)코드
						Object house_code_new = new String();
						paramMapNew.put("IN_HOUSE_CODE", house_code_new);
						
						// 은행코드
						Object bank_cd_new = new String();
						paramMapNew.put("IN_BANK_CD", bank_cd_new);
						
						// 대표계좌여부('1' - 임대료 전용계좌 )
						Object acct_div_new = "1";
						paramMapNew.put("IN_ACCT_DIV", acct_div_new);
						
						// 보증금전용계좌 등록 여부
						Object bj_yn_new = new String();
						paramMapNew.put("IN_BJ_YN", bj_yn_new);
						
				    	// 최초등록자
						Object first_entry_new = ObjectUtil.getSessionObj("S_USER_ID");
						paramMapNew.put("IN_FIRST_ENTRY", first_entry_new);
						
						baseDao.update("COM000000DAO.SP_VA_MAST_U", paramMapNew);
						
						break;
					}else{
						System.out.println("check4 ROW_TYPE_INSERTED ");
						iRow += baseDao.update("SLS020208DAO.updateHcntrctrInfo", map);
						iRow += baseDao.update("SLS020208DAO.updateHcntrctrInfo2", map);
						break;
					}

				case DataSet.ROW_TYPE_DELETED :
					System.out.println("check5 ROW_TYPE_INSERTED ");
					break;
			}
		}
		
		return iRow;
	}
			
			

	/**
	 * 계약번호 가져오기
	 */
	@SuppressWarnings("rawtypes")
	public String selectCntrctrNo(Map map) {
		String seq = (String)baseDao.select("SLS020208DAO.selectCntrctrNo", map);		
		
		return seq;
	}

	
	/**
	 * 수납정보 존재여부 체크(수납정보가 있으면 삭제 할 수 없다.)
	 */
	@SuppressWarnings("rawtypes")
	public String selectExistYn(Map map) {
		String existYn = (String)baseDao.select("SLS020208DAO.selectExistYn", map);
		
		return existYn;
	}


	/**
	 * 계약정보 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings("rawtypes")
	public void deleteHcntrctrInfo ( DataSetMap tranInfo, Map<String, Object> inVar,
					Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
					Map<String, DataSetMap> outDataset ) throws NexaServiceException {		
		log.debug("계약상세 삭제----------------------------------------------------!");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		
        
		if (inDsMap != null)
			inMap = inDsMap.get(0);
			
		inMap.put("IN_CNTRCTR_NO", inMap.get("CNTRCTR_NO"));	// 계약번호
		inMap.put("IN_REGISTER_ID", String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));		
		
		// 주택계약자 삭제		
		baseDao.update("SLS020101DAO.SPSLS_HOU_CTR_CANCEL", inMap);
		
		/*
	       int iRow = 0;
			
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			int size = (list==null) ? 0 : list.size();
			
			for (int x = 0; x < size; x++) {
				
				Map map = list.get(x);
				
				String inFileSn = (String)map.get("CTRTC_FILE");	// 파일일련번호
				// 납부정보생성 버튼 클릭시 어디까지 가는지 확인을 한다.(결의서생성까지 가면 망한다. 결의서까지 따라가며 지워야되는데...) 
				String existYn = (String)baseDao.select("SLS020208DAO.selectExistYn", map);
				if ("N".equals(existYn)) {
					
					// 주택분양납부 삭제
					iRow += baseDao.delete("SLS020208DAO.deleteHouseLttotPay", map);
					
					// 주택계약자공유자 삭제
					iRow += baseDao.delete("SLS020208DAO.deleteHcntrctrCocnr", map);
					
					// 주택계약자사업자 삭제
					iRow += baseDao.delete("SLS020208DAO.deleteHcntrctrBsnm", map);
					
					// 가상계좌  수정
					iRow += baseDao.update("SLS020208DAO.updateVaMast", map);
					
					// 주택계약자 삭제
					iRow += baseDao.delete("SLS020208DAO.deleteHcntrctr", map);
					
					//=[첨부파일]=====================================================================================================================
					// 파일정보 삭제
					boolean hasAtchFile = StringUtil.isNull(inFileSn) ? false : true;
					if(hasAtchFile){
						NexacroMapDTO xpDto = getXpDto();
						Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
						
						log.info("첨부파일 삭제 결과 = " + delResult.toString());
					}
					//=[첨부파일]=====================================================================================================================
					
				} else {
					String cntrctrNo = (String)map.get("CNTRCTR_NO");
					throw new NexaServiceException("fail.삭제.실패", "계약자번호 (" + cntrctrNo + ") ");
				}	
				
			}
			
			return iRow;
			*/	
	}
	
	//첨부파일 삭제
		@SuppressWarnings({"rawtypes"})	    
	    public void deleteFileInfo(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    	
	    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
	    	
	    	Map inMap = null;
	    	
	    	//System.out.println("inDsMap ====================" + inDsMap.toString());
	    	
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
				updateMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));	// 계약번호
	//System.out.println("CNTRCTR_NO ====================" + inMap.get("CNTRCTR_NO").toString());			
				updateMap.put("CTRTC_FILE_COURS", null);			// 첨부파일경로
				updateMap.put("CTRTC_FILE", null);					// 첨부파일명
				
				baseDao.update("SLS020208DAO.updateFileInfo", updateMap);
				
			}else{
				// 삭제할 데이터가 없습니다.
				throw new NexaServiceException("info.삭제.데이터.없음");
			}
	    }
		
	
	/**
	 * 납부코드 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHouPayCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectHouPayCodeList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 기준정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHouPayBaisList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectHouPayBaisList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 기준정보 생성
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCreatHouPayBaisList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;
		
		// 주택분양납부 삭제
		String selectHouseLttotPayExistYn = (String)baseDao.select("SLS020208DAO.selectHouseLttotPayExistYn", inMap);
		
		if ("Y".equals(selectHouseLttotPayExistYn)) {
			baseDao.delete("SLS020208DAO.deleteHouPayBaisList", inMap);
		}

		// 주택분양납부 생성
		records = (List<Map>)baseDao.list("SLS020208DAO.selectCreatHouPayBaisList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	

	/**
	 * 기준정보 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int saveHouPayBaisList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {

				case DataSet.ROW_TYPE_DELETED :
					
					iRow += baseDao.delete("SLS020208DAO.deleteHouPayBaisList", map);
					break;
				default :
					
					Object payNo = map.get("PAY_NO");
					if ( payNo != null ) {
						iRow += baseDao.update("SLS020208DAO.updateHouPayBaisList", map);				
					} else {
						// 납부번호 생성
						payNo = getPayNo(map);
						map.put("PAY_NO", payNo);
						
						// 분양임화성분
						map.put("LTTOT_RENT_SE", "S");
						
						// INSERT, UPDATE
						iRow += baseDao.update("SLS020208DAO.updateHouPayBaisList", map);
					}
					break;
			}
		}
		return iRow;
	}
	
	
	/**
	 * 분납정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectInspyIntrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectHouPayBaisList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	
	
	/**
	 * 분납정보 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int saveInspyIntrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {

				case DataSet.ROW_TYPE_INSERTED :					
					// 납부번호 생성
					Object payNo = getPayNo(map);
					map.put("PAY_NO", payNo);
					
					// 분양임화성분
					map.put("LTTOT_RENT_SE", "S");					
					
					iRow += baseDao.update("SLS020208DAO.updateHouPayBaisList", map);
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SLS020208DAO.updateHouPayBaisList", map);
					break;
				case DataSet.ROW_TYPE_DELETED :										
					iRow += baseDao.delete("SLS020208DAO.deleteHouPayBaisList", map);
					break;
				default :
					break;
			}
		}
		return iRow;
	}
	
	
	/**
	 * 납부번호 생성
	 */
	@SuppressWarnings("rawtypes")
	public String getPayNo(Map map) {
		
		String payNo = null;
		String paySe = String.valueOf(map.get("PAY_SE"));
		
		if ("0".equals(paySe)) {
			// 정상 납부번호
			String headPayNo = (String)baseDao.select("SLS020208DAO.selectHeadPayNo", map);	// 납부번호 첫자리
			String tailPayNo = (String)baseDao.select("SLS020208DAO.selectTailPayNo", map);	// 납부번호 뒤자리		
			payNo = headPayNo.concat(tailPayNo); // 납부번호 첫자리 + 납부번호 뒷자리			
			
		} else if ("2".equals(paySe)) {
			// 분납 납부번호
			payNo = (String)baseDao.select("SLS020208DAO.selectInspyPayNo", map);
		}

		return payNo;
	}
	
	/**
	 * 납부금액계산 및 적용
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectInspyIntrInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectInspyIntrInfo", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 임대료 약정사항(tabpage8) / 임대보증금(tabpage5)조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHcntrctrRentPay ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		//분양납부
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020208DAO.selectHcntrctrRentPay", inMap);		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	
	
	/**
	 * 분양납부 약정사항(tabpage1) / 임대보증금(tabpage5)조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHcntrctrPayList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		//분양납부
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020208DAO.selectHcntrctrPayList", inMap);		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 공유자(tabpage2) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHcntrctrCocnrList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020208DAO.selectHcntrctrCocnrList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 사업자(tabpage3) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseCstmrBsnmList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020208DAO.selectHouseCstmrBsnmList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 가상계좌(tabpage4) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectVirtlAcnutList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020208DAO.selectVirtlAcnutList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	// 임대보증금(tabpage5) 2016.03.08
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHcntrctrRentGtnPayList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020208DAO.selectHcntrctrPayList", inMap);		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//임대료내역(tabpage6) 2016.03.08
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHcntrctrRentPayList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020208DAO.selectHcntrctrRentPayList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//공급금액정보(tabpage7) 2016.03.09
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHcntrctrSuplyAmtList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020208DAO.selectHcntrctrSuplyAmtList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 잔금납부일 일괄등록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings("rawtypes")
	public int saveRemndrPayDe ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

	    if (inDsMap != null) {
	    	inMap = inDsMap.get(0);
	    }
	    	    	  						
		// 주택계약자 약정정보 삭제
		iRow += baseDao.delete("SLS020208DAO.updateRemndrPayDe", inMap);
			
		return iRow;
	}
	
	
	
	/**
	 * 연체/선납 계산
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings("rawtypes")
	public void LadCalList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020208DAO.LadCalList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 *전대목록
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHouseSublsList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("SLS020208DAO.selectHouseSublsList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 *전대CUD
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void houseSublsCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		      
			// 파일 첨부확인
	    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
	    	
	    	int upFileCnt = 0;
	    	List<Map<String, Object>> regFileList = null;
	         //System.out.println("fileInfo ==================== " + fileInfo.toString());
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
	    			//System.out.println("upFileResult ==================== " + upFileResult.toString());
	    			upFileCnt = Integer.parseInt((String.valueOf(upFileResult.get("UP_FILE_CNT"))));
	    			regFileList = (List<Map<String, Object>>)upFileResult.get("UP_FILE_LIST");
	    		}
	    	}
		    	
		    	
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}
			catch( Exception e) {
				throw new NexaServiceException(e); 
			}
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			System.out.println("rowType : " + rowType);
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("SLS020208DAO.houseSublsC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("SLS020208DAO.houseSublsU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("SLS020208DAO.houseSublsD", map);
			}
		}
	}	
	
	
	
	/**
	 *전대정보 모두삭제
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int deleteAllSublsList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int nRow = 0 ;
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		nRow = baseDao.delete("SLS020208DAO.deleteAllSublsList", inMap);
		
		return nRow;

	}
	
	
	/**
	 * 주택 코드 명의변경 신청서
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectNmchangeReqstdoc(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		
/*		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS020208DAO.selectNmchangeReqstdoc", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS020208DAO.selectNmchangeReqstdoc", inVar);
		}*/
		
		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS020208DAO.selectNmchangeReqstdoc", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS020208DAO.selectNmchangeReqstdoc", inVar);
		}		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	
	
	/**
	 * 주택 분양전환 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void changeHouseList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.changeHouseList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}  
	
	/**
	 * 타입코드 적용
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public int typeCodeUpdate(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");


		int listSize = (list==null) ? 0 : list.size(); 
		
		//log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
				
			iRow += baseDao.update("SLS020208DAO.typeCodeUpdate", map);
		}

		return iRow;
	}	
	
	/**
	 * 타입코드 복원
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public int typeCodeCancle(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");


		int listSize = (list==null) ? 0 : list.size(); 
		
		//log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
								
			iRow += baseDao.update("SLS020208DAO.typeCodeCancle", map);
		}

		return iRow;
	}		
	
	/**
	 * 임대주택 분양 프로시저
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void SPSLS_HOUSE_270_SR_CHANGE( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		
		for (int x = 0; x < list.size(); x++) {
			
			Map<String, Object> map = list.get(x);
			
			baseDao.list("SLS020208DAO.SPSLS_HOUSE_270_SR_CHANGE", map);
		
		}	
	}
	
	/**
	 * 임대주택 분양 취소 프로시저
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void SPSLS_HOUSE_270_SR_CANCEL( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		
		for (int x = 0; x < list.size(); x++) {
			
			Map<String, Object> map = list.get(x);
			
			baseDao.list("SLS020208DAO.SPSLS_HOUSE_270_SR_CANCEL", map);
		
		}	
	}

	/**
	 * 주택계약자 해약 리스트 조회(공통)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHouseCancelList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectHouseCancelList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}	
	
	/**
	 * 주택계약 해약(분양) 반환금 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHouseLttotCancelReturnAmtList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectHouseLttotCancelReturnAmtList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 주택계약자 압류정보 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHcntrctrSeizrInfo(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectHcntrctrSeizrInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 주택분양 이율정보조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectLttotRatioInfo(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectLttotRatioInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 주택 계약자 해약정보(분양) 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes"  })	
	public int saveHouseCancelInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list  = (DataSetMap) inDataset.get("input1"); //주택계약자해약
		DataSetMap list2 = (DataSetMap) inDataset.get("input2"); //주택분양해약


		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {

			Map map  = list.get(x);  //주택계약 해약정보
			Map map2 = list2.get(x);  //주택 분양 해약정보
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :
				
				//(1)해약정보 등록
				baseDao.insert("SLS020208DAO.insertHouseCancelInfo"          , map);  //입력
				
				//(1-1) 주택 분양 해약정보 등록
				baseDao.insert("SLS020208DAO.insertHouseLttotCancelInfo"      , map2);  //입력
				
				//(2)납부정보 해약 수정- 해지가 발생하며 입금되지 않은 납부정보에 대해서는 조회되지 않게 처리한다
				iRow += baseDao.update("SLS020208DAO. ", map); //수정
				
				//(3)주택계약정보 해약처리
				iRow += baseDao.update("SLS020208DAO.updateCancelHcntrctrInfo", map); //수정
				
				//(4-1)주택결제정보 해지등록(임대인경우,임대료 결제 정보수정)--삭제
				baseDao.insert("SLS020208DAO.insertHouseCancelSetleInfo"      , map);  //입력
				
				//(4-2)주택결제정보 해지처리(임대인경우,임대료 결제 정보수정)
				iRow += baseDao.update("SLS020208DAO.updateCancelSetleInfo"   , map); //수정
				
				//(5) 기타수입납부 등록 : 위약금 2016.03.29				
				baseDao.insert("SLS020208DAO.insertEtcIncmePay"      , map);  //입력
				
				break;
				
			case DataSet.ROW_TYPE_UPDATED :
				//업데이트는 임대해약시 유보금, 시설점검 내역만 업데이트 가능
				//iRow += baseDao.update("SLS020208DAO.updateHouseCancelInfo", map); //수정
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				//(1)주택계약정보 해약취소
				iRow += baseDao.update("SLS020208DAO.updateHcntrctrInfo"       , map); //수정

				//(2)납부정보 해약 취소
				iRow += baseDao.update("SLS020208DAO.updateLttotPayList"       , map); //수정
				
				//(3)주택 분양 해약정보 삭제
				iRow += baseDao.delete("SLS020208DAO.deleteHouseLttotCancelInfo" , map2); //삭제
				
				//(5)주택 해약정보삭제
				iRow += baseDao.delete("SLS020208DAO.deleteHcntrctrCancelInfo" , map); //삭제
				
				//(6)기타수입납부 삭제 2016.03.30 
				iRow += baseDao.delete("SLS020208DAO.deleteEtcIncmePay" , map); //삭제
				
				break;
		    }
			
		}

		return iRow;
		
	}

	/**
	 * 주택계약 해약 리스트 조회(임대)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHouseRentCancelList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectHouseRentCancelList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 주택임대 이율정보조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectRentRatioInfo(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectRentRatioInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 주택계약 해약(임대) 반환금 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHouseCancelRentReturnAmtList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectHouseCancelRentReturnAmtList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 주택계약 해약(임대) 임대 납부 보증금 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectRenLttotPayList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectRenLttotPayList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	//차액금액
  	@SuppressWarnings("rawtypes")
  	public String selectDfnntAmount(Map map) {
  		
  		String dfnntAmount = (String)baseDao.select("SLS020208DAO.selectDfnntAmount", map);		
  		
  		if(dfnntAmount == null){
  			dfnntAmount = "0";
  		}
  		return dfnntAmount;
  	}
		
		
	/**
	 * 주택 계약자 해약정보(임대) 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return 
	 * @throws NexaServiceException
	 * @throws ParseException 
	 */
		
	@SuppressWarnings({ "rawtypes", "unchecked"  })	
	public int saveHouseRentCancelInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException, ParseException {
				
		int iRow = 0;
		
		DataSetMap list  = (DataSetMap) inDataset.get("input1"); //주택계약자해약
		DataSetMap list2 = (DataSetMap) inDataset.get("input2"); //주택분양해약


		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {

			Map map  = list.get(x);  //주택계약 해약정보
			Map map2 = list2.get(x);  //주택 분양 해약정보
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :
				
				//(1)해약정보 등록
				baseDao.insert("SLS020208DAO.insertHouseCancelInfo"          , map);  //입력
				
				//(1-1) 주택 분양 해약정보 등록
				baseDao.insert("SLS020208DAO.insertHouseRentCancelInfo"      , map2);  //입력
				
				//(2)납부정보 해약 수정- 해지가 발생하며 입금되지 않은 납부정보에 대해서는 조회되지 않게 처리한다
				iRow += baseDao.update("SLS020208DAO.updateCancelLttotPayList", map); //수정
				
				//(3)주택계약정보 해약처리
				iRow += baseDao.update("SLS020208DAO.updateCancelHcntrctrInfo", map); //수정
				
				//(4-1)주택결제정보 해지등록(임대인경우,임대료 결제 정보수정)--삭제
				baseDao.insert("SLS020208DAO.insertHouseCancelSetleInfo"      , map);  //입력
				
				//(4-2)주택결제정보 해지처리(임대인경우,임대료 결제 정보수정)
				iRow += baseDao.update("SLS020208DAO.updateCancelSetleInfo"   , map); //수정
				
				//(5) 기타수입납부 등록 : 위약금 2016.03.29				
				baseDao.insert("SLS020208DAO.insertEtcIncmePay"      , map);  //입력
				
				//(6)해약처리/해약취소 시 월 임대료 조정 2016.03.31
				Map map4 = list.get(x);
				
				map4.put("IN_FLAG", 		"C");
				map4.put("IN_FLAG1", 		"");
				map4.put("IN_CNTRCTR_NO", 	map.get("CNTRCTR_NO").toString());//계약번호
				map4.put("IN_APPLY_DATE", 	map.get("CANCL_DE").toString());//해약일자
				map4.put("IN_MDAT_DE", 		map.get("CANCL_DE").toString());//해약일자
				map4.put("IN_REGISTER_ID", 	String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));//등록자ID
				map4.put("IN_HOUSE_CODE", 	map.get("HOUSE_CODE").toString());//주택코드
				map4.put("IN_CAL_DATE", 	map.get("REGIST_DT").toString());//접수일자
				
				map4.put("OUT_RESULT_CD", 	"0");
				map4.put("OUT_RESULT_MSG", 	"");
				
				baseDao.update("SLS020208DAO.SPSLS_HOUSE_RENT_PAY_CANCEL_UI", map4);
				
				if (!"0".equals(map4.get("OUT_RESULT_CD").toString())) {
					throw new NexaServiceException("info.메시지", map4.get("OUT_RESULT_MSG").toString());
				}
				
				break;
				
			case DataSet.ROW_TYPE_UPDATED :
				//업데이트는 임대해약시 유보금, 시설점검 내역만 업데이트 가능
				//iRow += baseDao.update("SLS020208DAO.updateHouseCancelInfo", map); //수정
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				//(1)주택계약정보 해약취소
				iRow += baseDao.update("SLS020208DAO.updateHcntrctrInfo"       , map); //수정

				//(2)납부정보 해약 취소
				iRow += baseDao.update("SLS020208DAO.updateLttotPayList"       , map); //수정
				
				//(3-A)주택 임대 점검의뢰 내용삭제
				iRow += baseDao.delete("SLS020208DAO.deleteHouseCheckReqest" , map); //삭제
				
				//(3-B)주택 임대 점검통보 내용삭제
				iRow += baseDao.delete("SLS020208DAO.deleteHouseCheckDspth" , map); //삭제
				
				//(3-C)주택 임대 해약 정보 삭제
				iRow += baseDao.delete("SLS020208DAO.deleteHouseRentCancelInfo" , map2); //삭제
				
				//(4)주택 해약정보삭제
				iRow += baseDao.delete("SLS020208DAO.deleteHcntrctrCancelInfo" , map); //삭제
				
				//(6)기타수입납부 삭제 2016.03.30 
				iRow += baseDao.delete("SLS020208DAO.deleteEtcIncmePay" , map); //삭제
				
				//(7)차액금액 가져오기 2016.04.01
				String dfnntAmount = selectDfnntAmount(map);
				
				//System.out.println("dfnntAmount============================> " + dfnntAmount);
				//감액조정이 된 경우 감액금액 및 감액결의서를 삭제한다.
				if(!"0".equals(dfnntAmount)){
					baseDao.update("SLS020208DAO.updateDfnntAmount"       , map); //차액금액 수정
					
					map.put("DECSN_SE", 	"4");
					baseDao.delete("SLS020208DAO.deleteHouseDecsn" , map); //주택결의 삭제
				}
				else{
					String canclDe = map.get("CANCL_DE").toString();//해약일자					
					String lastDay  = DateUtil.lastDayOfMonth(canclDe, "yyyyMMdd");
					//System.out.println("canclDe============================> " + canclDe);
					//System.out.println("lastDay============================> " + lastDay);
					//해약일자가 당월 말일인 경우 해당월의 임대료는 재조정되지않으므로 삭제하지않음.
					if(!canclDe.equals(lastDay)){
						baseDao.delete("SLS020208DAO.deleteHouseRentPay" , map); //당월임대료 삭제
						
						map.put("DECSN_SE", 	"1");
						baseDao.delete("SLS020208DAO.deleteHouseDecsn" , map); //주택결의 삭제
					}
				}				
				
				break;
		    }
			
		}

		return iRow;
		
	}
	/**
	 * 주택계약 해약정보(임대) -시설점검의뢰 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectRentCancelChckReqestInfo(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectRentCancelChckReqestInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	/**
	 * 주택계약 해약정보(임대) -시설점검의뢰 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return 
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes"  })	
	public int saveRentCancelChckReqestInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list  = (DataSetMap) inDataset.get("input1"); //주택계약자해약

		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {

			Map map  = list.get(x);  //주택계약 해약정보
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :
				
				//해약정보 등록
				baseDao.insert("SLS020208DAO.insertRentCancelReqestInfo"        , map);  //입력
				break;
				
			case DataSet.ROW_TYPE_UPDATED :
				//업데이트는 임대해약시 유보금, 시설점검 내역만 업데이트 가능
				iRow += baseDao.update("SLS020208DAO.updateRentCancelReqestInfo", map); //수정
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				//주택 해약정보삭제
				iRow += baseDao.delete("SLS020208DAO.deleteRentCancelReqestInfo" , map); //삭제
				break;
		    }
			
		}

		return iRow;
		
	}
	
	/**
	 * 주택계약 해약정보(임대) -시설점검 통보 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectRentCancelChckDspthInfo(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectRentCancelChckDspthInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 전자결제번호 입력
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void approveU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		//List <Map> records;
		Map map = list.get(0);
			
		baseDao.update("SLS020208DAO.approveU", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		
		outDataset.put("output1", outDsMap);
	}
	
	//시설점검의뢰
	@SuppressWarnings({ "rawtypes" })
	public void approveU2(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		//List <Map> records;
		Map map = list.get(0);
			
		baseDao.update("SLS020208DAO.approveU2", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		
		outDataset.put("output1", outDsMap);
	}	
	
	/**
	 * 납입기한날짜계산
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectCountDate ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List<Map>)baseDao.list("SLS020208DAO.selectCountDate", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 전세분양전환기본정보조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectChangeInfo ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List<Map>)baseDao.list("SLS020208DAO.selectChangeInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	

	/**
	 * 전세주택 분양 및 취소 프로시저
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void SPSLS_HOUSE_SR_CHANGE_JUN( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		
		for (int x = 0; x < list.size(); x++) {
			
			Map<String, Object> map = list.get(x);
			
			baseDao.list("SLS020208DAO.SPSLS_HOUSE_SR_CHANGE_JUN", map);
		
		}	
	}	
	
	
	/**
	 * 주택계약자변경 리스트
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHcntrctrChangeList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectHcntrctrChangeList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 주택계약자변경 신규
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHcntrctrChangeInsert(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020208DAO.selectHcntrctrChangeInsert", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 주택계약자 명의변경  신규,수정,삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public int saveHcntrctrChangeList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");


		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		
			//String lonRegist = (String) map.get("LON_REGIST");  
			
			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :
				
				//명의변경 신규고객 저장
//				if (map.get("NM2") != null && map.get("IHIDNUM2") != null) {					
//					Integer cstmrNo = selectCtmrNo();
//					map.put("HOUSE_CSTMR_NO", cstmrNo);										
//					baseDao.insert("SLS020208DAO.insertChouseCstmrInfo", map);						
//				}
				
				//명의변경저장
				baseDao.insert("SLS020208DAO.insertHcntrctrChange", map);
				baseDao.update("SLS020208DAO.updateHcntrctrAfter", map);
				break;
				
			case DataSet.ROW_TYPE_UPDATED :
//				baseDao.insert("SLS020208DAO.updateChouseCstmrInfo", map);	
				iRow += baseDao.update("SLS020208DAO.updateHcntrctrChange", map);
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("SLS020208DAO.deleteHcntrctrChange", map);
				baseDao.update("SLS020208DAO.updateHcntrctrBefore", map);
				break;
		    }
			
		}

		return iRow;
	}
	
	/**
	 * 공유자 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int saveHcntrctrCocnrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			
				case DataSet.ROW_TYPE_INSERTED :
					if(map.get("HOUSE_CSTMR_NO") != null){
						baseDao.insert("SLS020208DAO.insertHcntrctrCocnr", map);
					}
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SLS020208DAO.updateHcntrctrCocnr", map);
					break;
				case DataSet.ROW_TYPE_DELETED :										
					iRow += baseDao.delete("SLS020208DAO.deleteHcntrctrCocnr", map);
					break;
				default :
					break;
			}
		}
		return iRow;
	}
	
	

	/**
	 * 공유자(tabpage3) 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public int deleteOneHcntrctrCocnr ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

	    if (inDsMap != null) {
	    	inMap = inDsMap.get(0);
	    }
	    	    	  						
		// 주택계약자 약정정보 삭제
		iRow += baseDao.delete("SLS020208DAO.deleteOneHcntrctrCocnr", inMap);
			
		return iRow;
	}
	
	/**
	 * 주택계약자 압류 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectLcntrctrSeizrList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020208DAO.selectLcntrctrSeizrList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
		
	/**
	 * 주택계약자 대출 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectLcntrctrLonList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020208DAO.selectLcntrctrLonList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 가족사항(tabpage6) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHcntrctrFamilyList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		inMap.put("cntrctrCstmrNo", inMap.get("CNTRCTR_CSTMR_NO"));
		records = (List <Map>)baseDao.list("HouseCstmrDAO.hcntrctrFamilyList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	
	
	/**
	 * 가족사항 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int saveHcntrctrFamilyList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			
				case DataSet.ROW_TYPE_INSERTED :		
					if(map.get("HOUSE_CSTMR_NO") != null){
						baseDao.insert("HouseCstmrDAO.hcntrctrFamilyC", map);	
					}
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("HouseCstmrDAO.hcntrctrFamilyU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :										
					iRow += baseDao.delete("HouseCstmrDAO.hcntrctrFamilyD", map);
					break;
				default :
					break;
			}
		}
		return iRow;
	}
	
	/**
	 * 가족사항(tabpage6) 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public int delOnehcntrctrFamily ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

	    if (inDsMap != null) {
	    	inMap = inDsMap.get(0);
	    }
	    	    	  						
		// 주택계약자 약정정보 삭제
		iRow += baseDao.delete("HouseCstmrDAO.delOnehcntrctrFamily", inMap);
			
		return iRow;
	}	
	
	/**
	 * 연체/선납 계산
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings("rawtypes")
	public void houseCalList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020208DAO.houseCalList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 연체/선납 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings("rawtypes")
	public int saveHouseCalPay ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

	    if (inDsMap != null) {
	    	inMap = inDsMap.get(0);
	    }
	    	    	  						
		// 연체/선납 저장
		iRow += baseDao.delete("SLS020208DAO.saveHouseCalPay", inMap);
			
		return iRow;
	}
	
	// 부가세 계산
	@SuppressWarnings("rawtypes")
	public String selectPayVat(Map map) {
		String payVat = (String)baseDao.select("SLS080201DAO.selectPayVat", map);		
		
		return payVat;
	}		
	
	/**
	 * 분양약정 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked"})
	public int saveLcntrctrPayPopList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();
		log.debug("start :: size = " + size);	
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			log.debug("start :: rowType = " + rowType);	
			// ----------------------------------------------------------------
			// 부가세 계산
			// ----------------------------------------------------------------			
			String instlmtSe = String.valueOf(map.get("INSTLMT_SE"));
			log.debug("start :: INSTLMT_SE = " + String.valueOf(map.get("INSTLMT_SE")));	
			log.debug("start :: PAY_NO = " + String.valueOf(map.get("PAY_NO")));	
			log.debug("start :: CNTRCTR_NO = " + String.valueOf(map.get("CNTRCTR_NO")));	
			
											
			String payamt = null;			//납부금액
			String paySuplyAmount = null;	//공급가액
			String payVat = null;			//부가세
			
			if ("3".equals(instlmtSe)) { // 할부 이면 
									
					// 공급가액을 이용하여 부가세 납부금액을 계산한다.
					paySuplyAmount = String.valueOf(map.get("PAY_SUPLY_AMOUNT"));									//공급가액 					
					payVat = String.valueOf(((long)(Math.floor((Long.valueOf(paySuplyAmount) * 0.1) * 0.1) * 10)));	//부가세					
					payamt = String.valueOf(Long.valueOf(paySuplyAmount) + Long.valueOf(payVat));					//납부금액					
					
					map.put("PAYAMT", payamt);
					map.put("PAY_VAT", payVat);
					
			} else { // 할부 아니고 S1~S9 이면 계산한다.
				
					payVat = selectPayVat(map); //부가세
					paySuplyAmount = String.valueOf(Long.parseLong(String.valueOf(map.get("PAYAMT"))) - Long.parseLong(payVat)); //공급금액
					
					map.put("PAY_SUPLY_AMOUNT", paySuplyAmount);
					map.put("PAY_VAT", payVat);
			}
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :

					// 삭제하세요.
					log.debug("I_instlmtSe : " + instlmtSe);				
					log.debug("I_payamt = " + payamt);					
					log.debug("I_payVat = " + payVat);
					log.debug("I_paySuplyAmount = " + paySuplyAmount);		
					log.debug("1 PAY_NO = " + map.get("PAY_NO"));		
										
					// 납부번호 가져오기
					String payNo = getPayNo(map);					
					map.put("PAY_NO", payNo);	
					
					log.debug("2 PAY_NO = " + payNo);	
					
					baseDao.insert("SLS020208DAO.insertLcntrctrPayPopList", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					
					// 삭제하세요.
					log.debug("U_instlmtSe : " + instlmtSe);					
					log.debug("U_payamt = " + payamt);					
					log.debug("U_payVat = " + payVat);
					log.debug("U_paySuplyAmount = " + paySuplyAmount);
										
					iRow += baseDao.update("SLS020208DAO.updateLcntrctrPayPopList", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SLS020208DAO.deleteLcntrctrPayPopList", map);
					break;
			}
		}
		return iRow;
	}	
	
	/**
	 * 주택계약자 압류 단일 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectSeizeOne ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020208DAO.selectSeizeOne", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	
	
	/**
	 * 주택 계약자압류 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes", "unchecked" })	
	public int saveSeizeOne ( DataSetMap tranInfo, Map<String, Object> inVar,
									 Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									 Map<String, DataSetMap> outDataset) throws NexaServiceException {
		    	
		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list==null) ? 0 : list.size(); 
		
		for (int i = 0; i < listSize; i++) {
				
			Map map = list.get(i);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			

			switch(rowType) {
			
				case DataSet.ROW_TYPE_INSERTED :
					
					baseDao.insert("SLS020208DAO.insertHcntrctrSeizr", map);
					
					String seizr_sn = (String) baseDao.select("SLS020208DAO.selectMaxSeizrSn", map);
					
					map.put("SEIZR_SN", seizr_sn);
					
					List<Map> outList = new ArrayList<Map>(); 
					outList.add(map);

					DataSetMap outMap = new DataSetMap();
					outMap.setRowMaps(outList);
					outDataset.put("output1", outMap);
					
					
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
	
					iRow += baseDao.update("SLS020208DAO.updateHcntrctrSeizr", map);
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					
					iRow += baseDao.delete("SLS020208DAO.deleteHcntrctrSeizr", map);
					break;
		    }
			
			//대출정보등록 
			log.debug(" >>> LON_INFO_ADD = " + map.get("LON_INFO_ADD"));
			if("Y".equals(map.get("LON_INFO_ADD"))){
				baseDao.insert("SLS020208DAO.insertHcntrctrSeizrToLon", map);	
			}
			
			//대출정보해제
			log.debug(" >>> LON_INFO_DEL = " + map.get("LON_INFO_DEL"));
			if("Y".equals(map.get("LON_INFO_DEL"))){
				String lon_sn = (String) baseDao.select("SLS020208DAO.selectMaxLonSn", map);
				log.debug(" >>>>>> LON_SN = " + lon_sn);
				map.put("LON_SN", lon_sn);
				baseDao.update("SLS020208DAO.insertHcntrctrLonAddRelisDe", map);	
			}
			
			
			
		}	
		return iRow;
	}	
	
	/**
	 * 주택계약자 대출 단일 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectLonOne ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020208DAO.selectLonOne", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	

	
	  /**
		 * 주택 계약자대출 저장
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @return Integer
		 * @throws NexaServiceException
		 */
			
		@SuppressWarnings({ "rawtypes", "unchecked" })	
		public int saveLonOne ( DataSetMap tranInfo, Map<String, Object> inVar,
										 Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
										 Map<String, DataSetMap> outDataset) throws NexaServiceException {
			    	
			int iRow = 0;
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			int listSize = (list==null) ? 0 : list.size(); 
			
			for (int i = 0; i < listSize; i++) {
					
				Map map = list.get(i);
					
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				

				switch(rowType) {
				
					case DataSet.ROW_TYPE_INSERTED :
						
						baseDao.insert("SLS020208DAO.insertHcntrctrLon", map);
						
						String lon_sn = (String) baseDao.select("SLS020208DAO.selectMaxLonSn", map);
						
						map.put("LON_SN", lon_sn);
						
						List<Map> outList = new ArrayList<Map>(); 
						outList.add(map);

						DataSetMap outMap = new DataSetMap();
						outMap.setRowMaps(outList);
						outDataset.put("output1", outMap);
						
						break;
						
					case DataSet.ROW_TYPE_UPDATED :
		
						iRow += baseDao.update("SLS020208DAO.updateHcntrctrLon", map);
						break;
						
					case DataSet.ROW_TYPE_DELETED :
						
						iRow += baseDao.delete("SLS020208DAO.deleteHcntrctrLon", map);
						break;
			    }
				
			}	
			return iRow;
		}
		

		
		 /**
	     * 압류/대출 상세정보 첨부파일 정보 수정(삭제)
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
	    	Object seizrSn = targetMap.get("SEIZR_SN");
	    	Object lonSn = targetMap.get("LON_SN");
	    	
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
					if(seizrSn != null){
						baseDao.insert("SLS020208DAO.atchSeizrCUD", targetMap);
					}else if(lonSn != null){
						baseDao.insert("SLS020208DAO.atchLonCUD", targetMap);
					}
					
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
		 * 주택계약자사업자 조회
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 */
		@SuppressWarnings({ "unchecked", "rawtypes" })
		public void selectHouseLcntrctrBnsmList ( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset ) throws NexaServiceException {
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;
			
			records = (List <Map>)baseDao.list("SLS020208DAO.selectHouseLcntrctrBnsmList", inMap);
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
		}	    
	    	
		
		/**
		 * 주택계약자사업자 저장
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 */
		@SuppressWarnings({ "rawtypes" })
		
		public void saveHouseLcntrctrBsnmList(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) {
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			for (int x = 0; x < list.size(); x++) {
				Map map = list.get(x);
				
				// 세션정보 설정
				try {
					ObjectUtil.setUserToMap(map);
				}
				catch( Exception e) {
					throw new NexaServiceException(e); 
				}
				
				List <Map> records;
				records = (List<Map>)baseDao.list("SLS020208DAO.selectHouseCstmrbyIhidnum", map);
				
				String house_cstmr_no = records.size() > 0 ? String.valueOf(records.get(0).get("HOUSE_CSTMR_NO")) : "";
				if(house_cstmr_no != ""){
					map.put("HOUSE_CSTMR_NO", house_cstmr_no);
					baseDao.update("SLS020208DAO.updateHouseCstmr", map);
				}else{
					baseDao.insert("HouseCstmrDAO.houseCstmrC", map);
					records = (List<Map>)baseDao.list("SLS020208DAO.selectHouseCstmrbyIhidnum", map);
					house_cstmr_no = records.size() > 0 ? String.valueOf(records.get(0).get("HOUSE_CSTMR_NO")) : "";
				}
				
				map.put("HOUSE_CSTMR_NO", house_cstmr_no);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				if ( rowType == DataSet.ROW_TYPE_INSERTED ){
					baseDao.insert("HouseCstmrDAO.hcntrctrBsnmC", map);
				}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
					baseDao.update("HouseCstmrDAO.hcntrctrBsnmU", map);
				}else if(rowType == DataSet.ROW_TYPE_DELETED){
					baseDao.insert("HouseCstmrDAO.hcntrctrBsnmD", map);
				}
			}
		}
		
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void houseRntchrgList( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			List <Map> records = (List<Map>)baseDao.list("SLS020208DAO.houseRntchrgList", inMap);
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			outDataset.put("output1", outDsMap);
		} 		
		

		/**
		 * 국민주택기금 계좌 리스트
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "unchecked", "rawtypes" })
		public void selectKjfAcctList( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

			DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
			Map inMap = null;

			if (inDsMap != null)
				inMap = inDsMap.get(0);

			List <Map> records;

			records = (List<Map>)baseDao.list("SLS020208DAO.selectKjfAcctList", inMap);

			DataSetMap outDsMap = new DataSetMap();		
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
		}
		
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void selectTransfe( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			List <Map> records = (List<Map>)baseDao.list("SLS020208DAO.selectTransfe", inMap);
			DataSetMap outDsMap = new DataSetMap();
			System.out.println("records : " + records.size());
			outDsMap.setRowMaps(records);
			outDataset.put("output1", outDsMap);
		} 	
		
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void rentPosesnThingList( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			List <Map> records = (List<Map>)baseDao.list("SLS020208DAO.rentPosesnThingList", inMap);
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			outDataset.put("output1", outDsMap);
		} 
		
		/**
		 * 전출입정보 CUD
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 */
		@SuppressWarnings({ "rawtypes" })
		public void hcntrctrTransfeCUD(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) {
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			System.out.println("list.size : " + list.size());


			for (int x = 0; x < list.size(); x++) {
				Map map = list.get(x);

				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				System.out.println("rowType : " + rowType);
				if ( rowType == DataSet.ROW_TYPE_INSERTED ){
					baseDao.insert("SLS020208DAO.hcntrctrTransfeC", map);
				}
				else if(rowType == DataSet.ROW_TYPE_UPDATED ){
					baseDao.update("SLS020208DAO.hcntrctrTransfeU", map);
				}
				else if(rowType == DataSet.ROW_TYPE_DELETED ){
					baseDao.delete("SLS020208DAO.hcntrctrTransfeD", map);
				}

				// 전출입정보 수정(주태소유 유무) 0:무, 1:유
				baseDao.update("SLS020208DAO.transfeATU", map);
			}
		}		

		/**
		 * 소유물건정보 CUD
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 */
		@SuppressWarnings({ "rawtypes" })
		public void rentPosesnThingCUD(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) {
			DataSetMap list = (DataSetMap) inDataset.get("input1");

			for (int x = 0; x < list.size(); x++) {
				Map map = list.get(x);

				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

				if ( rowType == DataSet.ROW_TYPE_INSERTED ){
					baseDao.insert("SLS020208DAO.rentPosesnThingC", map);
				}
				else if(rowType == DataSet.ROW_TYPE_UPDATED ){
					baseDao.update("SLS020208DAO.rentPosesnThingU", map);
				}
				else if(rowType == DataSet.ROW_TYPE_DELETED ){
					baseDao.delete("SLS020208DAO.rentPosesnThingD", map);
				}

				// 소유물건정보 수정(주태소유 유무) 0:무, 1:유
				baseDao.update("SLS020208DAO.housePosesnAtU", map);
			}
		}	
		
		/**
		 * 주택 가족목록
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void selectRentCstmrFamilyList( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;

			if (inDsMap != null)
				inMap = inDsMap.get(0);

			List <Map> records = (List<Map>)baseDao.list("SLS020208DAO.selectRentCstmrFamilyList", inMap);		// 임대고객 가족목록
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			outDataset.put("output1", outDsMap);
		}		
		
		/**
		 * 파일 저장
		 */
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void atchCUD2( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

			// 파일 첨부확인
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

			try {
				if(upResult != null){
					String resFileSn = String.valueOf(upResult.get("FILE_SN"));
					targetMap.put("FILE_SN", resFileSn);
					baseDao.insert("SLS020208DAO.atchCUD2", targetMap);
				}
			}
			catch(Exception ex) {
				if(ex.getMessage().indexOf("ORA-00001") != -1){
					targetMap.put("EX_COUSE", "중복");
				}
				else{
					targetMap.put("EX_COUSE", ex.getMessage());
				}

				failList.add(targetMap);
			}

			DataSetMap failMap = new DataSetMap();
			failMap.setRowMaps(failList);

			outDataset.put("failList", failMap);
			outDataset.put("output1", targetInfo);
		}
		
		/**
		 * 파일 저장
		 */
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void atchCUD3( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

			// 파일 첨부확인
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

			try {
				if(upResult != null){
					String resFileSn = String.valueOf(upResult.get("FILE_SN"));
					targetMap.put("FILE_SN", resFileSn);
					baseDao.insert("SLS020208DAO.atchCUD3", targetMap);
				}
			}
			catch(Exception ex) {
				if(ex.getMessage().indexOf("ORA-00001") != -1){
					targetMap.put("EX_COUSE", "중복");
				}
				else{
					targetMap.put("EX_COUSE", ex.getMessage());
				}

				failList.add(targetMap);
			}

			DataSetMap failMap = new DataSetMap();
			failMap.setRowMaps(failList);

			outDataset.put("failList", failMap);
			outDataset.put("output1", targetInfo);
		}		


		/* 첨부파일 다운로드 목록 조회 */
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void ATCH_DOWN_LIST(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;

			if (inDsMap != null)
				inMap = inDsMap.get(0);

			List <Map> records;

			if (inMap != null) {
				records = (List<Map>)baseDao.list("SLS020208DAO.ATCH_DOWN_LIST", inMap);
			}
			else {
				records = (List<Map>)baseDao.list("SLS020208DAO.ATCH_DOWN_LIST", inVar);
			}

			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);

			outDataset.put("output1", outDsMap);
		}

		/* 첨부파일 삭제 */
		@SuppressWarnings({"unchecked"})
		public void ATCH_FILE_DEL(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

			DataSetMap list = (DataSetMap) inDataset.get("input1");

			int listSize = (list==null) ? 0 : list.size();

			if (list != null && listSize > 0){
				Map<String, Object> inMap = list.get(0);

				for (int x = 0; x < listSize; x++) {

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
				int fileCnt = (Integer)baseDao.select("SLS020208DAO.FILECNT", inMap);
				if(fileCnt == 0) {
					// 계약관리 FILE_SN NULL로 업데이트
					baseDao.delete("SLS020208DAO.ATCH_FILE_DEL", inMap);
				}
			}
			else{
				// 삭제할 데이터가 없습니다.
				throw new NexaServiceException("info.삭제.데이터.없음");
			}
		}		
		
		/* 첨부파일 삭제 */
		@SuppressWarnings({"unchecked"})
		public void ATCH_FILE_DEL3(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

			DataSetMap list = (DataSetMap) inDataset.get("input1");

			int listSize = (list==null) ? 0 : list.size();

			if (list != null && listSize > 0){
				Map<String, Object> inMap = list.get(0);

				for (int x = 0; x < listSize; x++) {

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
				int fileCnt = (Integer)baseDao.select("SLS020208DAO.FILECNT", inMap);
				if(fileCnt == 0) {
					// 계약관리 FILE_SN NULL로 업데이트
					baseDao.delete("SLS020208DAO.ATCH_FILE_DEL", inMap);
				}
			}
			else{
				// 삭제할 데이터가 없습니다.
				throw new NexaServiceException("info.삭제.데이터.없음");
			}
		}			
}
