package hsco.pms.sls.lad.ctr.SLS080301;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;

@Service("SLS080301Service")
public class SLS080301ServiceImpl extends BaseService implements SLS080301Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;
		
	
	/**
	 * 토지계약목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadLcntrctrList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080301DAO.selectLadLcntrctrList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	
	/**
	 * 토지명의변경 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadNmChangeList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		
		List <Map> records;
		records = (List<Map>)baseDao.list("SLS080301DAO.selectLadNmChangeList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		records = (List<Map>)baseDao.list("SLS080301DAO.selectLadNmChangeInfo", inMap);

		DataSetMap outDsMap2 = new DataSetMap();		
		outDsMap2.setRowMaps(records);
		
		outDataset.put("output2", outDsMap2);
		
	}
	
	/**
	 * 토지명의변경 인서트용 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadNmChangeInsert( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		
		// 압류,대출이 있는지 확인( 해지 일자가 없으면 명의변경이 안됨)
		String seizrYn = selectSeizrYn(inMap);
		log.debug("압류,대출이 있는지 확인==seizrYn====================================> " + seizrYn);
		
		String lonYn = selectLonYn(inMap);
		log.debug("압류,대출이 있는지 확인==lonYn====================================> " + lonYn);
		
		if( "Y".equals(seizrYn) ){
			throw new NexaServiceException("info.메시지", "해당 토지에 압류정보가 있어 명의변경이 불가능합니다.");
		}
		else if( "Y".equals(lonYn) ){
			throw new NexaServiceException("info.메시지", "해당 토지에 대출정보가 있어 명의변경이 불가능합니다.");
		}
		else{
				 
			List <Map> records;
			records = (List<Map>)baseDao.list("SLS080301DAO.selectLadNmChangeInsert", inMap);
			
			DataSetMap outDsMap = new DataSetMap();		
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
		}
	}
	

	/**
	 * 토지명의변경 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes", "unchecked" })	
	public int saveLadNmChangeList ( DataSetMap tranInfo, Map<String, Object> inVar,
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

		int listSize = (list==null) ? 0 : list.size(); 
		log.debug("========== listSize =========================> "+listSize);
		
		for (int i = 0; i < listSize; i++) {
				
			Map map = list.get(i);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			//=[첨부파일]=====================================================================================================================
			String delFileSn = (String)map.get("CHANGE_ATCHMNFL");	// 삭제시 파일일련번호
			//System.out.println("upFileCnt ==================== " + upFileCnt);
			//System.out.println("regFileList =================== " + (regFileList == null ? 0 : regFileList.size()));
			
			if(upFileCnt > 0 && regFileList != null){
				
				//화면에서 넘어온값
				String inAtchFlpth = (String)map.get("ORGINL_FILE_NM");
				String inFileSn = (String)map.get("CHANGE_ATCHMNFL");
				
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
						
						map.put("CHANGE_ATCHMNFL", regFileSn);
						map.put("CHANGE_ATCHMNFL_COURS", regFileOrdr);
					}
					//System.out.println("regFileSn ====================" + regFileSn.toString());
					//System.out.println("regFileOrdr ====================" + regFileOrdr.toString());	
					
				}
				
			}
			//=[첨부파일]=====================================================================================================================
			
			switch(rowType) {
			
				case DataSet.ROW_TYPE_INSERTED :
					
					//토지명의변경저장
					baseDao.insert("SLS080301DAO.insertLadNmChange", map);
					
					//토지계약자 수정
					iRow += baseDao.update("SLS080301DAO.updateLadLcntrctr", map);
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					
					// 압류,대출이 있는지 확인
					String seizrYn = selectSeizrYn(map);
					log.debug("수정시 압류,대출이 있는지 확인==seizrYn====================================> " + seizrYn);
					
					String lonYn = selectLonYn(map);
					log.debug("수정시 압류,대출이 있는지 확인==lonYn====================================> " + lonYn);
					
					if( "Y".equals(seizrYn) ){
						throw new NexaServiceException("info.메시지", "해당 토지에 압류정보가 있어 수정이 불가능합니다.");
					}
					else if( "Y".equals(lonYn) ){
						throw new NexaServiceException("info.메시지", "해당 토지에 대출정보가 있어 수정이 불가능합니다.");
					}
					else{
						iRow += baseDao.update("SLS080301DAO.updateLadNmChange", map);
					}
					
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					
					// 압류,대출이 있는지 확인
					String seizrYn2 = selectSeizrYn(map);
					log.debug("삭제시 압류,대출이 있는지 확인==seizrYn====================================> " + seizrYn2);
					
					String lonYn2 = selectLonYn(map);
					log.debug("삭제시 압류,대출이 있는지 확인==lonYn====================================> " + lonYn2);
					
					if( "Y".equals(seizrYn2) ){
						throw new NexaServiceException("info.메시지", "해당 토지에 압류정보가 있어 삭제가 불가능합니다.");
					}
					else if( "Y".equals(lonYn2) ){
						throw new NexaServiceException("info.메시지", "해당 토지에 대출정보가 있어 삭제가 불가능합니다.");
					}
					else{
						//토지계약자 수정
						iRow += baseDao.update("SLS080301DAO.updateLadLcntrctr2", map);
						
						iRow += baseDao.delete("SLS080301DAO.deleteLadNmChange", map);
						
						//=[첨부파일]=====================================================================================================================
						// 파일정보 삭제
						boolean hasAtchFile = StringUtil.isNull(delFileSn) ? false : true;
						if(hasAtchFile){
							NexacroMapDTO xpDto = getXpDto();
							Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
							
							log.info("첨부파일 삭제 결과 = " + delResult.toString());
						}
						//=[첨부파일]=====================================================================================================================
						
					}
					
					break;
		    }
			
		}

		return iRow;
	}
	
	
	//압류여부
	@SuppressWarnings("rawtypes")
	public String selectSeizrYn(Map map) {
		String seizrYn = (String)baseDao.select("SLS080301DAO.selectSeizrYn", map);		
		
		return seizrYn;
	}
	
	//대출여부
	@SuppressWarnings("rawtypes")
	public String selectLonYn(Map map) {
		String LonYn = (String)baseDao.select("SLS080301DAO.selectLonYn", map);		
		
		return LonYn;
	}
	
	/**
	 * 명의변경처리일자 가져오기
	 */
	@SuppressWarnings("rawtypes")
	public String selectChangProcessDe(Map map) {
		
		String changProcessDe = (String)baseDao.select("SLS080301DAO.selectChangProcessDe", map);		
		
		return changProcessDe;
	}
	
	
	//첨부파일 삭제
	@SuppressWarnings({"rawtypes"})
    
    public void deleteFileInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap list = (DataSetMap)inDataset.get("input1");
    	
    	int listSize = (list==null) ? 0 : list.size(); 
//System.out.println("========== listSize =========================> "+listSize);
		
		for (int i = 0; i < listSize; i++) {			
		
			Map inMap = list.get(i);
			
			String FILE_SN = inMap.get("FILE_SN").toString();
			String ORGINL_FILE_NM = inMap.get("ORGINL_FILE_NM").toString();
			String CHANGE_ATCHMNFL = inMap.get("CHANGE_ATCHMNFL").toString();
//System.out.println("FILE_SN ====================" + FILE_SN);
//System.out.println("ORGINL_FILE_NM ====================" + ORGINL_FILE_NM);	
//System.out.println("CHANGE_ATCHMNFL ====================" + CHANGE_ATCHMNFL);	
			if ( FILE_SN != null && ORGINL_FILE_NM != null && (("").equals(CHANGE_ATCHMNFL) || CHANGE_ATCHMNFL == null) ){	
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
				updateMap.put("CHANGE_SN", inMap.get("CHANGE_SN"));		// 변경순번
	//System.out.println("CNTRCTR_NO ====================" + inMap.get("CNTRCTR_NO").toString());			
				updateMap.put("CHANGE_ATCHMNFL_COURS", null);			// 첨부파일경로
				updateMap.put("CHANGE_ATCHMNFL", null);					// 첨부파일명
				
				baseDao.update("SLS080301DAO.updateFileInfo", updateMap);
				
			}else{
				// 삭제할 데이터가 없습니다.
				throw new NexaServiceException("info.삭제.데이터.없음");
			}
		}
    }
	
	
	
	
	//=======================================================================================
    // 내부결재
    //=======================================================================================
	
	/* 결제ID 저장 : 사용안함 -> 2016.04.15 postProcess 에서 처리*/
	@SuppressWarnings({ "rawtypes" })
	
	public void updateInnerSanctionNo(DataSetMap tranInfo, Map<String, Object> inVar,
										Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
										Map<String, DataSetMap> outDataset) {
		
		//결제번호 수정
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("SLS080301DAO.updateInnerSanctionNo", map);
		}
	}
	
	/* 결제자 목록 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void sanctnerNmDetail(DataSetMap tranInfo, Map<String, Object> inVar,
									Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080301DAO.sanctnerNmDetail", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/* 출력물  */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void innerSanctnUbiDataset(DataSetMap tranInfo, Map<String, Object> inVar,
										Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
										Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		records = (List<Map>)baseDao.list("SLS080301DAO.selectLadNmChangeList", inMap);
			
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		
		//결제자 이름 목록
		records = (List<Map>)baseDao.list("SLS080301DAO.sanctnerNmDetail", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output2", outDsMap);
	}	
	
	/**
	 * 내부결재 후처리 메소드 (결재상태 저장)
	 * @param (Map sanctnInfo) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void postProcess(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
							Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
							Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
		Map sanctnInfo = null; 
		DataSetMap dsSetMap = inDataset.get("input1");  
		List<Map> list = dsSetMap.getRowMaps();
         
		int lsize = (list == null) ? 0 : list.size();
		if(lsize > 0){
			sanctnInfo = (Map)list.get(0);
		}

//      String mdlId = (String)sanctnInfo.get("INNER_SANCTN_MDL_ID");       
//      String posProcClass = (String)sanctnInfo.get("POSPROC_CLASS");
//      String posProcMethod = (String)sanctnInfo.get("POSPROC_OPRTIN_NM");
//      String pageUrl = (String)sanctnInfo.get("REQUEST_SCRIN_URL");        
		String innerSantnId = (String)sanctnInfo.get("INNER_SANCTN_ID");
//      String userId = (String)sanctnInfo.get("USER_ID"); // 기안자 사번
//      String deptCode = (String)sanctnInfo.get("DEPT_CODE");  // 기안자 부서
//      String santnSj = (String)sanctnInfo.get("SANCTN_SJ"); // 내부결재제목
//		String currSanctionStep = (String)sanctnInfo.get("LAST_SANCTN_STEP"); // 최종결재단계
		String currSanctionSttus = (String)sanctnInfo.get("LAST_SANCTN_STTUS"); // 최종결재상태
//      String currSanctionerId = (String)sanctnInfo.get("LAST_SANCTNER_ID"); // 최종결재자ID
//      String sanctnDt = (String)sanctnInfo.get("LAST_SANCTN_DT"); // 최종결재일시
//      String nextSactionStep = (String)sanctnInfo.get("NEXT_SANCTN_STEP"); // 다음결재단계
//      String nextSactionerId = (String)sanctnInfo.get("NEXT_SANCTNER_ID"); // 다음결재자ID
//      String opinion = "";
//      String opinion2 = (String)sanctnInfo.get("OPINION"); // 다음결재자ID
         	
		Map recordMap = null; 
		
		StringTokenizer st = new StringTokenizer(sanctnInfo.get("JOB_KEY").toString(),"^");
      	
		if(st.hasMoreTokens()){
   			recordMap = new HashMap<String, Object>();
   			
   			recordMap.put("CNTRCTR_NO", st.nextToken());
   			recordMap.put("CHANGE_SN", st.nextToken());

   			recordMap.put("INNER_SANCTN_NO", innerSantnId);
   			
   			if("S01".equals(currSanctionSttus)){  // 기안중
   	   			System.out.println("[기안중(S01)] 후처리");
		
   	   			baseDao.update("SLS080301DAO.updateInnerSanctionNo", recordMap);

   	        } 
   	   		else if("S03".equals(currSanctionSttus)){  // 기안 완료
   	   			System.out.println("[기안 완료(S03)] 후처리");
   	   			
   	   			baseDao.update("SLS080301DAO.updateInnerSanctionNo", recordMap);
   	        } 
   	   		else if("T03".equals(currSanctionSttus)){ // 상신 완료
   	   			System.out.println("[상신 완료(T03)] 후처리");
   	   			baseDao.update("SLS080301DAO.updateInnerSanctionNo", recordMap);
   	        } 
   	   		else if("T04".equals(currSanctionSttus)){ // 중결재 대기
   	        	System.out.println("[중결재 대기(T04)] 후처리");
   	        	baseDao.update("SLS080301DAO.updateInnerSanctionNo", recordMap);
   	        } 
   	   		else if("T07".equals(currSanctionSttus)){ // 중결재 반려
   	        	  System.out.println("[중결재 반려(T07)] 후처리");
   	        } 
   	   		else if("T08".equals(currSanctionSttus)){ // 중결재 완료
   	        	  System.out.println("[중결재 완료(T08)] 후처리");
   	        } 
   	   		else if("T09".equals(currSanctionSttus)){ // 전결 대기
   	        	  System.out.println("[전결 대기(T09)] 후처리");
   	        } 
   	   		else if("T11".equals(currSanctionSttus)){ // 전결 반려
   	        	  System.out.println("[전결 반려(T11)] 후처리");
   	        } 
   	   		else if("T12".equals(currSanctionSttus)){ // 전결 완료        
   	      	  
   	        	  System.out.println("[전결 완료(T12)] 후처리");
   	        	  baseDao.update("SLS080301DAO.updateInnerSanctionDone", recordMap);
   	        	  
   	        } 
   	   		else if("T13".equals(currSanctionSttus)){ // 접수대기
   	        	  System.out.println("[접수대기(T13)] 후처리");
   	        } 
   	   		else if("T15".equals(currSanctionSttus)){ // 접수반려
   	        	  System.out.println("[접수반려(T15)] 후처리");
   	        } 
   	   		else if("T16".equals(currSanctionSttus)){ // 접수완료
   	        	  System.out.println("[접수반려(T16)] 접수완료");
   	        } 
   	   		else {
   	        	  System.out.println("후처리가 case가 아닙니다.");
   	        }
   		}
		else{
   			
			throw new NexaServiceException("info.메시지", "내부결재처리중 오류발생 : 업무키가 없습니다.");
   		}
   		
   		
	}
	
}
