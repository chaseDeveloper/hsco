package hsco.pms.sls.lad.onb.SLS130201;

import java.io.File;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

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
 * @Class Name   	: SLS130201ServiceImpl.java
 * @Description  	: 온비드 물건정보등록
 * @author       	: 김지훈
 * @since        	: 2016. 05. 10.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 05. 10.					김지훈			최초생성
 * </pre>  
 */
@Service("SLS130201Service")
public class SLS130201ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;
    
	/**
	 * 물건정보 최종 trans_id 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCltrRlstRgstTransId( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SLS130201DAO.selectCltrRlstRgstTransId", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 물건정보 목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCltrRlstRgstList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		//물건정보 목록
		records = (List<Map>)baseDao.list("SLS130201DAO.selectCltrRlstRgstList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);	
	}
	
	/**
	 * 물건정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCltrRlstRgst( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		//물건정보
		records = (List<Map>)baseDao.list("SLS130201DAO.selectCltrRlstRgst", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		//첨부파일
		records = (List<Map>)baseDao.list("SLS130201DAO.selectOnbAtchFile", inMap);
	    outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output2", outDsMap);

		//온비드등록정보
		records = (List<Map>)baseDao.list("SLS130201DAO.selectLadDetailOnb", inMap);
	    outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output3", outDsMap);
	}
	
	/**
	 * 물건정보 상세조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCltrRlstDtRgstList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SLS130201DAO.selectCltrRlstDtRgstList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 온비드 카테고리정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOnbCltrCtrg( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SLS130201DAO.selectOnbCltrCtrg", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 온비드 담당자조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOnbUsrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SLS130201DAO.selectOnbUsrList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 온비드 물건정보 tran_id 채번
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectGetTransId( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SLS130201DAO.selectGetTransId", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 기관정보 및 대표자정보 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes" })
	
	public void saveOnbCltrRlstRgst(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");   // 물건정보
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");   // 상세정보
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");   // 첨부파일정보
		DataSetMap list4 = (DataSetMap) inDataset.get("input4");   // 온비드등록정보
		
		String cltrMnmtNo = "0";
		String trnsId = "";
		
		int nomalRow = 0;
		
		// 물건정보저장
		for (int x = 0; x < list1.size(); x++) {
			
			Map map = list1.get(x);
			    
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}
			catch( Exception e) {
				throw new NexaServiceException(e); 
			} 
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			cltrMnmtNo = (String)map.get("CLTR_MNMT_NO");
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				
				// 물건관리번호 채번
			    List <Map> records = (List<Map>)baseDao.list("SLS130201DAO.selectCltrMnmtNo", map);
			    
			    cltrMnmtNo = records.get(0).get("CLTR_MNMT_NO").toString();
			    
			    map.put("CLTR_MNMT_NO", cltrMnmtNo);
			    
			    //if(map.get("MAIN_ROW").equals("Y")) cltrMnmtNo = records.get(0).get("CLTR_MNMT_NO").toString();
				 
			    baseDao.insert("SLS130201DAO.insertOnbCltrRlstRgst", map);
				
			} else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				
				baseDao.update("SLS130201DAO.updateOnbCltrRlstRgst", map);
				
			} else if(rowType == DataSet.ROW_TYPE_DELETED ){
			    
				baseDao.delete("SLS130201DAO.deleteOnbCltrRlstRgst", map);
				
		    }
	    }
		
		// 0 : 변경무    1:추가    2:변경    3:삭제  inRow ROW_TYPE_NORMAL
	    
        for(int x = 0; x < list2.size(); x++){
	        Map map = list2.get(x);
	        int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
	        
	        map.put("CLTR_MNMT_NO", cltrMnmtNo);
	        
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				
				baseDao.insert("SLS130201DAO.insertOnbcltrRlstDtRgst", map);
				
			} else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				
				baseDao.delete("SLS130201DAO.updateOnbcltrRlstDtRgst", map);
				
			} else if(rowType == DataSet.ROW_TYPE_DELETED ){
				
				baseDao.delete("SLS130201DAO.deleteOnbcltrRlstDtRgst", map);
		    }	        
	     }
			
		//=[첨부파일]=====================================================================================================================
		// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	
    	int upFileCnt = 0;
    	List<Map<String, Object>> regFileList = null;
        //System.out.println("fileInfo ==================== " + fileInfo.toString());
    	if(fileInfo != null){
    		
    		NexacroMapDTO xpDto = getXpDto();
    		fileUploadService.setFileLocation(getFileLocation());

    		Map<String, Object> upFileResult = (Map<String, Object>)fileUploadService.uploadOnbidFile(xpDto);

    		if(upFileResult != null){
    			//System.out.println("upFileResult ==================== " + upFileResult.toString());
    			upFileCnt = Integer.parseInt((String.valueOf(upFileResult.get("UP_FILE_CNT"))));
    			regFileList = (List<Map<String, Object>>)upFileResult.get("UP_FILE_LIST");
    		}
    	}
    	//=[첨부파일]=====================================================================================================================

    	// 첨부파일 상세저장
		for (int x = 0; x < list3.size(); x++) {
			Map map = list3.get(x);			
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();			
            //map.put("JOB_SE", cltrMnmtNo);	
            
            System.out.println("########## 첨부파일 rowtype : " + rowType);
            
            if (rowType == DataSet.ROW_TYPE_INSERTED ) {
            	System.out.println("SLS130201DAO.updateOnbidFileRefn : " + map);
            	baseDao.update("SLS130201DAO.updateOnbidFileRefn",  map);
            }
            else if (rowType == DataSet.ROW_TYPE_UPDATED ) 
            {
            	baseDao.update("SLS130201DAO.updateOnbidFile", map);
            }   
            else if(rowType == DataSet.ROW_TYPE_DELETED )
            {			
            	String uniqueFileName = (String)map.get("PHYS_FILE_NM");    
            	String fullName = "/app_files/upload/ONB/SND/A_files/data/"+uniqueFileName;
        		File delFile = new File(fullName);
        		if(delFile.exists() && delFile.delete()){
        			//System.out.println("########## SLS130201DAO.deleteOnbidFile called ");
        			baseDao.delete("SLS130201DAO.deleteOnbidFile", map);	
        		}				
		    }	       
		}
    	
        for(int x = 0; x < list4.size(); x++){
	        Map map = list4.get(x);
			int cnt = baseDao.update("SLS130201DAO.updateLadDetailOnb", map);
			if (cnt == 0)
				baseDao.insert("SLS130201DAO.insertLadDetailOnb", map);				
	     }		
	}		

	/**
	 * 물건정보 전송
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes" })
	
	public void saveTxTrnsInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");   // 물건정보
				
		// 물건정보저장
		for (int x = 0; x < list1.size(); x++) {			
			Map map = list1.get(x);			    
		    baseDao.insert("SLS130201DAO.insertTxTrnsInfo", map);
	    }
	}
	
	/**
	 * 온비드 토지정보조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadDetailInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SLS130201DAO.selectLadDetailInfoList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}	
}




