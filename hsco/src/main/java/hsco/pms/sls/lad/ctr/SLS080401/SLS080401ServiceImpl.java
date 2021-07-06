package hsco.pms.sls.lad.ctr.SLS080401;

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

@Service("SLS080401Service")
public class SLS080401ServiceImpl extends BaseService implements SLS080401Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
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

		records = (List<Map>)baseDao.list("SLS080401DAO.selectLadLcntrctrList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 토지계약자압류 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLcntrctrSeizrList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080401DAO.selectLcntrctrSeizrList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 토지계약자압류 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes", "unchecked" })	
	public int saveLcntrctrSeizrList ( DataSetMap tranInfo, Map<String, Object> inVar,
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
				String inFileSn = (String)map.get("SEIZR_ATCHMNFL");
				
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
						
						map.put("SEIZR_ATCHMNFL", regFileSn);
						map.put("SEIZR_ATCHMNFL_COURS", regFileOrdr);
					}
					//System.out.println("regFileSn ====================" + regFileSn.toString());
					//System.out.println("regFileOrdr ====================" + regFileOrdr.toString());	
					
				}
				
			}
			//=[첨부파일]=====================================================================================================================
			
			
			switch(rowType) {
			
				case DataSet.ROW_TYPE_INSERTED :
					
					//토지계약자압류 저장
					baseDao.insert("SLS080401DAO.insertLcntrctrSeizr", map);
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
	
					iRow += baseDao.update("SLS080401DAO.updateLcntrctrSeizr", map);
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					
					iRow += baseDao.delete("SLS080401DAO.deleteLcntrctrSeizr", map);
					
					//=[첨부파일]=====================================================================================================================
					// 파일정보 삭제
					boolean hasAtchFile = StringUtil.isNull(delFileSn) ? false : true;
					if(hasAtchFile){
						NexacroMapDTO xpDto = getXpDto();
						Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
						
						log.info("첨부파일 삭제 결과 = " + delResult.toString());
					}
					//=[첨부파일]=====================================================================================================================
					
					
					break;
		    }
			
		}

		return iRow;
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
			String GBN = inMap.get("GBN").toString();
			
			//압류
			if("SEIZR".equals(GBN)){
				String FILE_SN = inMap.get("FILE_SN").toString();
				String ORGINL_FILE_NM = inMap.get("ORGINL_FILE_NM").toString();
				String SEIZR_ATCHMNFL = inMap.get("SEIZR_ATCHMNFL").toString();
	
				if ( FILE_SN != null && ORGINL_FILE_NM != null && (("").equals(SEIZR_ATCHMNFL) || SEIZR_ATCHMNFL == null) ){	
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
					updateMap.put("SEIZR_SN", inMap.get("SEIZR_SN"));		// 순번
		//System.out.println("CNTRCTR_NO ====================" + inMap.get("CNTRCTR_NO").toString());			
					updateMap.put("SEIZR_ATCHMNFL_COURS", null);			// 첨부파일경로
					updateMap.put("SEIZR_ATCHMNFL", null);					// 첨부파일명
					
					baseDao.update("SLS080401DAO.updateFileInfoSeizr", updateMap);
					
				}else{
					// 삭제할 데이터가 없습니다.
					throw new NexaServiceException("info.삭제.데이터.없음");
				}
			}
			
			//대출
			if("LON".equals(GBN)){
				String FILE_SN = inMap.get("FILE_SN").toString();
				String ORGINL_FILE_NM = inMap.get("ORGINL_FILE_NM").toString();
				String LON_ATCHMNFL = inMap.get("LON_ATCHMNFL").toString();
	
				if ( FILE_SN != null && ORGINL_FILE_NM != null && (("").equals(LON_ATCHMNFL) || LON_ATCHMNFL == null) ){	
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
					updateMap.put("LON_SN", inMap.get("LON_SN"));		// 순번
		//System.out.println("CNTRCTR_NO ====================" + inMap.get("CNTRCTR_NO").toString());			
					updateMap.put("LON_ATCHMNFL_COURS", null);			// 첨부파일경로
					updateMap.put("LON_ATCHMNFL", null);					// 첨부파일명
					
					baseDao.update("SLS080401DAO.updateFileInfoLon", updateMap);
					
				}else{
					// 삭제할 데이터가 없습니다.
					throw new NexaServiceException("info.삭제.데이터.없음");
				}
			}
		}
    }
	
	
	
	/**
	 * 토지계약자대출 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLcntrctrLonList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080401DAO.selectLcntrctrLonList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 토지계약자대출 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes", "unchecked" })	
	public int saveLcntrctrLonList ( DataSetMap tranInfo, Map<String, Object> inVar,
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
			String delFileSn = (String)map.get("LON_ATCHMNFL");	// 삭제시 파일일련번호
			//System.out.println("upFileCnt ==================== " + upFileCnt);
			//System.out.println("regFileList =================== " + (regFileList == null ? 0 : regFileList.size()));
			
			if(upFileCnt > 0 && regFileList != null){
				
				//화면에서 넘어온값
				String inAtchFlpth = (String)map.get("ORGINL_FILE_NM");
				String inFileSn = (String)map.get("LON_ATCHMNFL");
				
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
						
						map.put("LON_ATCHMNFL", regFileSn);
						map.put("LON_ATCHMNFL_COURS", regFileOrdr);
					}
					//System.out.println("regFileSn ====================" + regFileSn.toString());
					//System.out.println("regFileOrdr ====================" + regFileOrdr.toString());	
					
				}
				
			}
			//=[첨부파일]=====================================================================================================================
			
			
			switch(rowType) {
			
				case DataSet.ROW_TYPE_INSERTED :
					
					//토지계약자압류 저장
					baseDao.insert("SLS080401DAO.insertLcntrctrLon", map);
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
	
					iRow += baseDao.update("SLS080401DAO.updateLcntrctrLon", map);
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					
					iRow += baseDao.delete("SLS080401DAO.deleteLcntrctrLon", map);
					
					//=[첨부파일]=====================================================================================================================
					// 파일정보 삭제
					boolean hasAtchFile = StringUtil.isNull(delFileSn) ? false : true;
					if(hasAtchFile){
						NexacroMapDTO xpDto = getXpDto();
						Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
						
						log.info("첨부파일 삭제 결과 = " + delResult.toString());
					}
					//=[첨부파일]=====================================================================================================================
					
					break;
		    }
			
		}

		return iRow;
	}
	
	
	
	
}
