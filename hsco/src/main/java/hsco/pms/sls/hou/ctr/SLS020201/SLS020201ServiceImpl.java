package hsco.pms.sls.hou.ctr.SLS020201;

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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS020201ServiceImpl.java
 * @Description  	: 주택계약자 명의 변경 ServiceImpl
 * @author       	: 정윤원
 * @since        	: 2015. 9.2.
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
 *  
 * </pre>
 */
@Service("SLS020201Service")
public class SLS020201ServiceImpl extends BaseService implements SLS020201Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;
    
	/**
	 * 주택 코드 콤보 리스트: 해당내용 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void cmbHouseCodeList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		
		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS020201DAO.cmbHouseCodeList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS020201DAO.cmbHouseCodeList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
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

		records = (List<Map>)baseDao.list("SLS020201DAO.selectHcntrctrChangeList", inMap);
		
		
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

		records = (List<Map>)baseDao.list("SLS020201DAO.selectHcntrctrChangeInsert", inMap);
		
		
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
				
		//=[첨부파일]=====================================================================================================================
		// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	
    	int upFileCnt = 0;
    	List<Map<String, Object>> regFileList = null;
   
    	
    	if(fileInfo != null){
    		
    		System.out.println("fileInfo ==================== " + fileInfo.toString());
    		
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
//					baseDao.insert("SLS020201DAO.insertChouseCstmrInfo", map);						
//				}
				
				//명의변경저장
				baseDao.insert("SLS020201DAO.insertHcntrctrChange", map);
				
				// 업데이트는 결재완료후 처리로 변경
				//baseDao.update("SLS020201DAO.updateHcntrctrAfter", map);
				break;
				
			case DataSet.ROW_TYPE_UPDATED :
//				baseDao.insert("SLS020201DAO.updateChouseCstmrInfo", map);	
				iRow += baseDao.update("SLS020201DAO.updateHcntrctrChange", map);
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("SLS020201DAO.deleteHcntrctrChange", map);
				baseDao.update("SLS020201DAO.updateHcntrctrBefore", map);
				break;
		    }
			
		}

		return iRow;
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

		
		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS020201DAO.selectNmchangeReqstdoc", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS020201DAO.selectNmchangeReqstdoc", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);

		if (inDataset.containsKey("input2")) {
			DataSetMap inDsMap2 = (DataSetMap) inDataset.get("input2");		
			outDataset.put("output2", inDsMap2);
		}
	}

	/**
	 * 주택계약자 명의변경  신규,수정,삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public int deleteHcntrctrChangeRollback(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
				
		iRow += baseDao.delete("SLS020201DAO.deleteHcntrctrChangeRollback", map);

		return iRow;
	}
	
	/**
	 * 주택계약자 명의변경  결재번호 업데이트
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public int updateSanctnNo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
				
		iRow += baseDao.delete("SLS020201DAO.updateSanctnNo", map);

		return iRow;
	}	

	
	/**
	 * 주택계약자 명의변경  결재 상태조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void SANCTNKND(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		
		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS020201DAO.innerSanctnKnd", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS020201DAO.innerSanctnKnd", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}		
		
	
	/**
	 * 주택계약자 명의변경 업데이트
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public int updateHcntrctrChangeAll(DataSetMap tranInfo, Map<String, Object> inVar,
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
		
		Map map = list.get(0);
				
		iRow += baseDao.delete("SLS020201DAO.updateHcntrctrChangeAll", map);

		return iRow;
	}	
}
