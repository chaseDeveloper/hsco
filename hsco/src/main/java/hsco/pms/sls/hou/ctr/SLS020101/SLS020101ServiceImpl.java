package hsco.pms.sls.hou.ctr.SLS020101;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
 * @Class Name   	: SLS020101ServiceImpl.java
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
@Service("SLS020101Service")
public class SLS020101ServiceImpl extends BaseService implements SLS020101Service {

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

		records = (List<Map>)baseDao.list("SLS020101DAO.houseCodeSh", inMap);

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

		records = (List<Map>)baseDao.list("SLS020101DAO.pyeongSh", inMap);

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
		
		records = (List<Map>)baseDao.list("SLS020101DAO.selectHcntrctrList", inMap);
		
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
		records = (List <Map>)baseDao.list("SLS020101DAO.selectHcntrctrInfo", inMap);		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		//압류/대출/국민주택기금 정보
		List <Map> records2;		
		records2 = (List <Map>)baseDao.list("SLS020101DAO.selectHcntrctrInfo2", inMap);		
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
		
		System.out.println("size====> : " + size);
		
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
			System.out.println("DataSet.ROW_TYPE_INSERTED : "  + DataSet.ROW_TYPE_INSERTED);
			System.out.println("DataSet.ROW_TYPE_UPDATED : "  + DataSet.ROW_TYPE_UPDATED);
			System.out.println("DataSet.ROW_TYPE_DELETED : "  + DataSet.ROW_TYPE_DELETED);
			System.out.println("rowType : "  + rowType);
			
			//주택고객 등록여부 체크
			boolean hclChk = StringUtil.isNull(houseCstmrList(map)) ? true : false;
			
			if(hclChk){
				//주택고객 생성
				baseDao.insert("SLS020101DAO.houseCstmrC", map);
				String housecstmrnoNew = String.valueOf(houseCstmrList(map));
				map.put("HOUSE_CSTMR_NO", housecstmrnoNew);
				map.put("CNTRCTR_CSTMR_NO", housecstmrnoNew);					
			}		
			else{
				//주택고객 update
				String housecstmrnoOrg = String.valueOf(houseCstmrList(map));
				map.put("HOUSE_CSTMR_NO", housecstmrnoOrg);
				map.put("CNTRCTR_CSTMR_NO", housecstmrnoOrg);				
				baseDao.update("SLS020101DAO.houseCstmrU", map);
			}
			
			//주택고객2 등록여부 체크
			boolean inSpouseIhidnum = StringUtil.isNull((String)map.get("SPOUSE_IHIDNUM")) ? false : true;
			
			System.out.println("inSpouseIhidnum ==>" + inSpouseIhidnum );
			
			
			if(inSpouseIhidnum){
				
				boolean hclSubChk = StringUtil.isNull(houseCstmrSubList(map)) ? true : false;
				System.out.println("hclSubChk ==>" + hclSubChk );
				
				if(hclSubChk){
					//주택고객 생성
					baseDao.insert("SLS020101DAO.houseSubCstmrC", map);
					String housecstmrnoSubNew = String.valueOf(houseCstmrSubList(map));
					System.out.println("housecstmrnoSubNew ==>" + housecstmrnoSubNew );
					map.put("SPOUSE_CSTMR_NO", housecstmrnoSubNew);				
				}else{
					String housecstmrnoSubNew = String.valueOf(houseCstmrSubList(map));
					System.out.println("housecstmrnoSubNew2 ==>" + housecstmrnoSubNew );
					map.put("SPOUSE_CSTMR_NO", housecstmrnoSubNew);	
				}
			}


			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					
					System.out.println("***1 ROW_TYPE_INSERTED****");
					// 계약번호 가져오기
					String cntrctrNo = selectCntrctrNo(map);					
					map.put("CNTRCTR_NO", cntrctrNo);
					
					// 계약정보 저장
					baseDao.insert("SLS020101DAO.insertHcntrctrInfo", map);
										
					// 최초분양금액은 동호 테이블에 UPDATE한다.
					baseDao.update("SLS020101DAO.updateDongHoInfo", map);
					
					
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
					
					baseDao.update("COM000000DAO.SP_VA_MAST_U", paramMap);
					
					break;
				case DataSet.ROW_TYPE_UPDATED :		
					
					System.out.println("***2 ROW_TYPE_UPDATED****");
					if(map.get("CNTRCTR_NO") == null){

						System.out.println("***3 CNTRCTR_NO****");
						// 계약번호 가져오기
						String cntrctrNoNew = selectCntrctrNo(map);					
						map.put("CNTRCTR_NO", cntrctrNoNew);
						
						// 계약정보 저장
						baseDao.insert("SLS020101DAO.insertHcntrctrInfo", map);
											
						// 최초분양금액은 동호 테이블에 UPDATE한다.
						baseDao.update("SLS020101DAO.updateDongHoInfo", map);
						
						
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
						System.out.println("***4 updateHcntrctrInfo****");
						iRow += baseDao.update("SLS020101DAO.updateHcntrctrInfo", map);
						iRow += baseDao.update("SLS020101DAO.updateHcntrctrInfo2", map);
						break;
					}

				case DataSet.ROW_TYPE_DELETED :
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
		String seq = (String)baseDao.select("SLS020101DAO.selectCntrctrNo", map);		
		
		return seq;
	}

	/**
	 * 주택고객1 리스트 체크
	 */
	@SuppressWarnings("rawtypes")
	public String houseCstmrList(Map map) {
		String seq = (String)baseDao.select("SLS020101DAO.houseCstmrListCount", map);	
		return seq;
	}
	
	/**
	 * 주택고객2 리스트 체크
	 */
	@SuppressWarnings("rawtypes")
	public String houseCstmrSubList(Map map) {
		String seq = (String)baseDao.select("SLS020101DAO.houseCstmrListSubCount", map);	
		return seq;
	}	
	
	/**
	 * 수납정보 존재여부 체크(수납정보가 있으면 삭제 할 수 없다.)
	 */
	@SuppressWarnings("rawtypes")
	public String selectExistYn(Map map) {
		String existYn = (String)baseDao.select("SLS020101DAO.selectExistYn", map);
		
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
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		
        
		if (inDsMap != null)
			inMap = inDsMap.get(0);
			
		inMap.put("IN_CNTRCTR_NO", inMap.get("CNTRCTR_NO"));	// 계약번호
		inMap.put("IN_REGISTER_ID", String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));		
		
		// 주택계약자 삭제		
		baseDao.update("SLS020101DAO.SPSLS_HOU_CTR_CANCEL", inMap);
		
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
			
			baseDao.update("SLS020101DAO.updateFileInfo", updateMap);
			
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

		records = (List<Map>)baseDao.list("SLS020101DAO.selectHouPayCodeList", inMap);

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

		records = (List<Map>)baseDao.list("SLS020101DAO.selectHouPayBaisList", inMap);

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
		String selectHouseLttotPayExistYn = (String)baseDao.select("SLS020101DAO.selectHouseLttotPayExistYn", inMap);
		
		if ("Y".equals(selectHouseLttotPayExistYn)) {
			baseDao.delete("SLS020101DAO.deleteHouPayBaisList", inMap);
		}

		// 주택분양납부 생성
		records = (List<Map>)baseDao.list("SLS020101DAO.selectCreatHouPayBaisList", inMap);

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
					if("R".equals(map.get("LTTOT_RENT_SE"))){ // 보증금 삭제
						iRow += baseDao.delete("SLS020101DAO.deleteHouDepositBaisList", map);
					}else{
						iRow += baseDao.delete("SLS020101DAO.deleteHouPayBaisList", map);
					}
					break;
				default :
					
					Object payNo = map.get("PAY_NO");
					if ( payNo != null ) {
						iRow += baseDao.update("SLS020101DAO.updateHouPayBaisList", map);				
					} else {
						// 납부번호 생성
						if("R".equals(map.get("LTTOT_RENT_SE"))){ // 보증금
							payNo = getRentPayNo(map);
						}else{
							payNo = getPayNo(map);
						}
	
						map.put("PAY_NO", payNo);
						
						// INSERT, UPDATE
						iRow += baseDao.update("SLS020101DAO.updateHouPayBaisList", map);
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

		records = (List<Map>)baseDao.list("SLS020101DAO.selectHouPayBaisList", inMap);

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
					
					iRow += baseDao.update("SLS020101DAO.updateHouPayBaisList", map);
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SLS020101DAO.updateHouPayBaisList", map);
					break;
				case DataSet.ROW_TYPE_DELETED :										
					iRow += baseDao.delete("SLS020101DAO.deleteHouPayBaisList", map);
					break;
				default :
					break;
			}
		}
		return iRow;
	}
	
	
	// 납부번호 생성
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public String getPayNo(Map map) {
			
			String payNo = null;
			String instlmtSe = String.valueOf(map.get("INSTLMT_SE"));
			
			if ("2".equals(instlmtSe)) { //분납 납부번호			
				payNo = (String)baseDao.select("SLS020101DAO.selectInspyPayNo", map);			
				
			} else  { //일반 납부번호
				String payNoHead = selectPayNumHead(map);  //납부번호 앞자리(1 자리 : OCR구분)
				map.put("PAY_NO_HEAD", payNoHead);
				
				String payNoTail = selectPayNumTail(map);	//납부번호 뒷자리(4 자리)					
				payNo = payNoHead.concat(payNoTail);		//납부번호 첫자리 + 납부번호 뒷자리
			}
 
			return payNo;
		}
		
		// 임대료 납부번호 생성
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public String getRentPayNo(Map map) {
					
			String payNo = null;
			
			String payNoHead = selectPayNumHead(map);  //납부번호 앞자리(1 자리 : OCR구분)
			map.put("PAY_NO_HEAD", payNoHead);
						
			String payNoTail = selectPayNumTail(map);	//납부번호 뒷자리(4 자리)					
			payNo = payNoHead.concat(payNoTail);		//납부번호 첫자리 + 납부번호 뒷자리
				
			return payNo;
		}		
		
		
		/**
		 * 납부번호 앞자리(1자리) 가져오기
		 */
		@SuppressWarnings("rawtypes")
		public String selectPayNumHead(Map map) {
			String payNumHead = (String)baseDao.select("SLS020101DAO.selectHeadPayNo", map);

			return payNumHead;
		}

		/**
		 * 납부번호 뒷자리(4자리) 가져오기
		 */
		@SuppressWarnings("rawtypes")
		public String selectPayNumTail(Map map) {
			String payNumTail = (String)baseDao.select("SLS020101DAO.selectTailPayNo", map);

			return payNumTail;
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

		records = (List<Map>)baseDao.list("SLS020101DAO.selectInspyIntrInfo", inMap);

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
		
		records = (List <Map>)baseDao.list("SLS020101DAO.selectHcntrctrPayList", inMap);		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 분양전환/취소 가능 여부 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectParcelCnt ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		//분양납부
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020101DAO.selectParcelCnt", inMap);		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
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
					
					baseDao.insert("SLS020101DAO.insertLcntrctrPayPopList", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					
					// 삭제하세요.
					log.debug("U_instlmtSe : " + instlmtSe);					
					log.debug("U_payamt = " + payamt);					
					log.debug("U_payVat = " + payVat);
					log.debug("U_paySuplyAmount = " + paySuplyAmount);
										
					iRow += baseDao.update("SLS020101DAO.updateLcntrctrPayPopList", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SLS020101DAO.deleteLcntrctrPayPopList", map);
					break;
			}
		}
		return iRow;
	}
	
	
	
/*
	
	@SuppressWarnings("rawtypes")
	public int saveHcntrctrRentPayPopList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
			Map map = list.get(x);
				
			// 임대료 저장
			iRow += baseDao.update("SLS020101DAO.saveHcntrctrRentPayPopList", map);
		}
			
		return iRow;
	}
*/
	/**
	 * 임대료 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked"})
	public int saveHcntrctrRentPayPopList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();
		log.debug("start :: size = " + size);	
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					// 납부번호 가져오기
					String payNo = getRentPayNo(map);					
					map.put("PAY_NO", payNo);	
					
					log.debug("saveHcntrctrRentPayPopList ::  = " + payNo);	
					
					baseDao.insert("SLS020101DAO.insertHcntrctrRentPayPopList", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SLS020101DAO.saveHcntrctrRentPayPopList", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SLS020101DAO.deleteHcntrctrRentPayPopList", map);
					break;
			}
		}
		return iRow;
	}
	
	
	
	
	// 부가세 계산
	@SuppressWarnings("rawtypes")
	public String selectPayVat(Map map) {
		String payVat = (String)baseDao.select("SLS080201DAO.selectPayVat", map);		
		
		return payVat;
	}	
	
	
	/**
	 * 공유자(tabpage3) 조회
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
		
		records = (List <Map>)baseDao.list("SLS020101DAO.selectHcntrctrCocnrList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
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
		iRow += baseDao.delete("SLS020101DAO.deleteOneHcntrctrCocnr", inMap);
			
		return iRow;
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
		
		records = (List <Map>)baseDao.list("SLS020101DAO.selectHouseCstmrBsnmList", inMap);
		
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
		
		records = (List <Map>)baseDao.list("SLS020101DAO.selectVirtlAcnutList", inMap);
		
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
		
		records = (List <Map>)baseDao.list("SLS020101DAO.selectHcntrctrPayList", inMap);		
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
		
		records = (List <Map>)baseDao.list("SLS020101DAO.selectHcntrctrRentPayList", inMap);
		
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
		
		records = (List <Map>)baseDao.list("SLS020101DAO.selectHcntrctrSuplyAmtList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	
	
	/**
	 * 납부일 일괄등록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectPayList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020101DAO.selectPayList", inMap);
		
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
		iRow += baseDao.delete("SLS020101DAO.updateRemndrPayDe", inMap);
			
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
		
		records = (List <Map>)baseDao.list("SLS020101DAO.houseCalList", inMap);
		
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
		
/*		int iRow = 0;
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

	    if (inDsMap != null) {
	    	inMap = inDsMap.get(0);
	    }
	    	    	  						
		// 연체/선납 저장
		iRow += baseDao.update("SLS020101DAO.saveHouseCalPay", inMap);
			
		return iRow;
		
		*/
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		
		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			iRow += baseDao.update("SLS020101DAO.saveHouseCalPay", map);
		}		
			
		return iRow;		
	}
	
	
	
	
	
	/**
	 * 임대료 연체/선납 계산
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings("rawtypes")
	public void houseRentCalList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List <Map>)baseDao.list("SLS020101DAO.houseRentCalList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	
	/**
	 * 임대료 연체/선납 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings("rawtypes")
	public int saveHouseRentCalPay ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
/*		int iRow = 0;
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

	    if (inDsMap != null) {
	    	inMap = inDsMap.get(0);
	    }
	    
		iRow += baseDao.update("SLS020101DAO.saveHouseRentCalPay", inMap);
		
*/
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		
		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			iRow += baseDao.update("SLS020101DAO.saveHouseRentCalPay", map);
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
						baseDao.insert("SLS020101DAO.insertHcntrctrCocnr", map);
					}
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SLS020101DAO.updateHcntrctrCocnr", map);
					break;
				case DataSet.ROW_TYPE_DELETED :										
					iRow += baseDao.delete("SLS020101DAO.deleteHcntrctrCocnr", map);
					break;
				default :
					break;
			}
		}
		return iRow;
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
			records = (List<Map>)baseDao.list("SLS020101DAO.selectHouseCstmrbyIhidnum", map);
			
			String house_cstmr_no = records.size() > 0 ? String.valueOf(records.get(0).get("HOUSE_CSTMR_NO")) : "";
			if(house_cstmr_no != ""){
				map.put("HOUSE_CSTMR_NO", house_cstmr_no);
				baseDao.update("SLS020101DAO.updateHouseCstmr", map);
			}else{
				baseDao.insert("HouseCstmrDAO.houseCstmrC", map);
				records = (List<Map>)baseDao.list("SLS020101DAO.selectHouseCstmrbyIhidnum", map);
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
		
		records = (List <Map>)baseDao.list("SLS020101DAO.selectHouseLcntrctrBnsmList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
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
		
		records = (List <Map>)baseDao.list("SLS020101DAO.selectLcntrctrSeizrList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
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
		
		records = (List <Map>)baseDao.list("SLS020101DAO.selectSeizeOne", inMap);
		
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
		
		records = (List <Map>)baseDao.list("SLS020101DAO.selectLcntrctrLonList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
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
		
		records = (List <Map>)baseDao.list("SLS020101DAO.selectLonOne", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
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
    	
    	System.out.println("fileSn : " + fileSn);
    	System.out.println("seizrSn : " + seizrSn);
    	System.out.println("lonSn : " + lonSn);
    	
    	Map<String, Object> upResult = null;  
    	if(fileInfo != null){
    		System.out.println("fileInfo2 : " + fileInfo);
    		// 계약관리테이블에 file_sn이 존재시 , inputFile 데이터셋에 file_sn을 설정
    		// file_sn 없으면 새로 생성
    		if(fileSn != null){	
    			System.out.println("fileSn3 : " + fileSn);
    			fileInfoMap.put("FILE_SN" , fileSn);
    		}
	    		NexacroMapDTO xpDto = getXpDto();
	    		fileUploadService.setFileLocation(getFileLocation());
	    		upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
	    		System.out.println("xpDto4 : " + xpDto);
    	}    	
    	
		List<Map> failList = new ArrayList<Map>(); 
		
		try
		{
			if(upResult != null){				
				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				System.out.println("seizrSn===> : " + seizrSn);
				if(seizrSn != null){
					baseDao.insert("SLS020101DAO.atchSeizrCUD", targetMap);
				}else if(lonSn != null){
					baseDao.insert("SLS020101DAO.atchLonCUD", targetMap);
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
    
    
    /* 첨부파일 삭제 */
    @SuppressWarnings({"rawtypes"})
    public void atchDelete(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Object seizrSn = null;  // 압류일련번호
    	Object lonSn = null;    // 대출일련번호 
		
		if (list != null){
			Map<String, Object> inMap = list.get(0);
			
			for (int x = 0; x < list.size(); x++) {
					
				Map<String, Object> map = list.get(x);
				
				String inFileSn = (String)map.get("FILE_SN");	// 파일일련번호
				seizrSn = (String)map.get("SEIZR_SN");	       
				lonSn = (String)map.get("LON_SN");           	
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
				if(seizrSn != null){
					baseDao.delete("SLS020101DAO.atchSeizrDelete", inMap);
				}else if(lonSn != null){
					baseDao.delete("SLS020101DAO.atchLonDelete", inMap);
				}
			}				

			}else{
				// 삭제할 데이터가 없습니다.
				throw new NexaServiceException("info.삭제.데이터.없음");
			}
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
					
					baseDao.insert("SLS020101DAO.insertHcntrctrSeizr", map);
					
					String seizr_sn = (String) baseDao.select("SLS020101DAO.selectMaxSeizrSn", map);
					
					map.put("SEIZR_SN", seizr_sn);
					
					List<Map> outList = new ArrayList<Map>(); 
					outList.add(map);

					DataSetMap outMap = new DataSetMap();
					outMap.setRowMaps(outList);
					outDataset.put("output1", outMap);
					
					
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
	
					iRow += baseDao.update("SLS020101DAO.updateHcntrctrSeizr", map);
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					
					iRow += baseDao.delete("SLS020101DAO.deleteHcntrctrSeizr", map);
					break;
		    }
			
			//대출정보등록 
			log.debug(" >>> LON_INFO_ADD = " + map.get("LON_INFO_ADD"));
			if("Y".equals(map.get("LON_INFO_ADD"))){
				baseDao.insert("SLS020101DAO.insertHcntrctrSeizrToLon", map);	
			}
			
			//대출정보해제
			log.debug(" >>> LON_INFO_DEL = " + map.get("LON_INFO_DEL"));
			if("Y".equals(map.get("LON_INFO_DEL"))){
				String lon_sn = (String) baseDao.select("SLS020101DAO.selectMaxLonSn", map);
				log.debug(" >>>>>> LON_SN = " + lon_sn);
				map.put("LON_SN", lon_sn);
				baseDao.update("SLS020101DAO.insertHcntrctrLonAddRelisDe", map);	
			}
			
			
			
		}	
		return iRow;
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
						
						baseDao.insert("SLS020101DAO.insertHcntrctrLon", map);
						
						String lon_sn = (String) baseDao.select("SLS020101DAO.selectMaxLonSn", map);
						
						map.put("LON_SN", lon_sn);
						
						List<Map> outList = new ArrayList<Map>(); 
						outList.add(map);

						DataSetMap outMap = new DataSetMap();
						outMap.setRowMaps(outList);
						outDataset.put("output1", outMap);
						
						break;
						
					case DataSet.ROW_TYPE_UPDATED :
		
						iRow += baseDao.update("SLS020101DAO.updateHcntrctrLon", map);
						break;
						
					case DataSet.ROW_TYPE_DELETED :
						
						iRow += baseDao.delete("SLS020101DAO.deleteHcntrctrLon", map);
						break;
			    }
				
			}	
			return iRow;
		}
		
		

		
		/**
		 * 주택 타입 당초금액 조회
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void selectHouseTySuplyAmount( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

			DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
			Map inMap = null;

			if (inDsMap != null)
				inMap = inDsMap.get(0);

			List <Map> records;

			records = (List<Map>)baseDao.list("SLS020101DAO.selectHouseTySuplyAmount", inMap);

			DataSetMap outDsMap = new DataSetMap();		
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
		}
		
		
		
		/**
		 * 주택 타입 상세정보
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void selectHouseTypeInfo( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

			DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
			Map inMap = null;

			if (inDsMap != null)
				inMap = inDsMap.get(0);

			List <Map> records;

			records = (List<Map>)baseDao.list("SLS020101DAO.selectHouseTypeInfo", inMap);

			DataSetMap outDsMap = new DataSetMap();		
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
		}
		
		/* 첨부파일 삭제 */
	    @SuppressWarnings({"rawtypes"})
	    public void ChangeFileDelete(DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.delete("SLS020101DAO.ChangeFileDelete", inMap);
					
				}				

				}else{
					// 삭제할 데이터가 없습니다.
					throw new NexaServiceException("info.삭제.데이터.없음");
				}
	    }
	    
	     // 우편물주소 저장
	  		@SuppressWarnings({ "rawtypes" })
	  		public void saveDM(DataSetMap tranInfo, Map<String, Object> inVar,
	  				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	  				Map<String, DataSetMap> outDataset) throws NexaServiceException {
	  					
	  			DataSetMap list = (DataSetMap) inDataset.get("input1");

	  			//List <Map> records;
	  			Map map = list.get(0);
	  				
	  			baseDao.update("SLS020101DAO.saveDM", map);
	  			DataSetMap outDsMap = new DataSetMap();
	  			outDsMap.add(map);
	  			
	  			outDataset.put("output1", outDsMap);
	  		}
}
