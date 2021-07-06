package hsco.pms.sls.lad.onb.SLS130301;

import java.io.File;
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
 * @Class Name   	: SLS130301ServiceImpl.java
 * @Description  	: 온비드 공고정보 등록
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
@Service("SLS130301Service")
public class SLS130301ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;
    
	/**
	 * 공고정보 최종 trans_id 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPlnmRgstTransId( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		System.out.println("########## inDsMap.size() : " + inDsMap.size());
		
		if (inDsMap != null && inDsMap.size() > 0)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SLS130301DAO.selectPlnmRgstTransId", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		//첨부파일

		
	}
	
	/**
	 * 공고정보 최종 trans_id 채번
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
		
		if (inDsMap != null && inDsMap.size() > 0)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SLS130301DAO.selectGetTransId", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 공고정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPlnmRgst( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null && inDsMap.size() > 0)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		//공고정보
		records = (List<Map>)baseDao.list("SLS130301DAO.selectPlnmRgst", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	
		records = (List<Map>)baseDao.list("SLS130201DAO.selectOnbAtchFile", inMap);
	    outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output2", outDsMap);		
	}
	
	/**
	 * 공고정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPlnmRgstList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null && inDsMap.size() > 0)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		//공고정보
		records = (List<Map>)baseDao.list("SLS130301DAO.selectPlnmRgstList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);	
	}
	
	/**
	 * 공매정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPbctRgst( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null && inDsMap.size() > 0)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		//공매정보
		records = (List<Map>)baseDao.list("SLS130301DAO.selectPbctRgst", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		/*
		//집행권한
		records = (List<Map>)baseDao.list("SLS130301DAO.selectExctAuthRgst", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output2", outDsMap);
		
		//입찰조건
		records = (List<Map>)baseDao.list("SLS130301DAO.selectPbctCdtnRgst", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output3", outDsMap);
		*/
	}
	
	/**
	 * 공매목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPbctRgstList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null && inDsMap.size() > 0)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		//공매정보
		records = (List<Map>)baseDao.list("SLS130301DAO.selectPbctRgstList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 집행권한 / 공매조건 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectExctAuthRgst( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null && inDsMap.size() > 0)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		System.out.println("inMap :" + inMap);
		
		//집행권한
		records = (List<Map>)baseDao.list("SLS130301DAO.selectExctAuthRgst", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		
		//공매조건  
		records = (List<Map>)baseDao.list("SLS130301DAO.selectPbctCdtnRgst", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output2", outDsMap);
		
	}
	
	/**
	 * 입찰가능지역 / 입찰가능대상자 / 입찰참가조건 / 입찰참가제한자   조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPsblAreaRgst( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null && inDsMap.size() > 0)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		System.out.println("inMap :" + inMap);
		//입찰가능지역
		records = (List<Map>)baseDao.list("SLS130301DAO.selectPsblAreaRgst", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		//입찰가능대상자  
		records = (List<Map>)baseDao.list("SLS130301DAO.selectPsblRcpnRgs", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output2", outDsMap);
		
		//입찰참가조건  
		records = (List<Map>)baseDao.list("SLS130301DAO.selectBidPtctCdtnRgst", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output3", outDsMap);
		
		//입찰참가제한자 
		records = (List<Map>)baseDao.list("SLS130301DAO.selectPbctCltrLmtRgst", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output4", outDsMap);
		
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
	public void selectOnbCltrRlstRgst( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null && inDsMap.size() > 0)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		//물건정보
		records = (List<Map>)baseDao.list("SLS130301DAO.selectOnbCltrRlstRgst", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		//공매물건정보
		records = (List<Map>)baseDao.list("SLS130301DAO.selectPbctCltrRgst", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output2", outDsMap);
		
	}
	
	
	/**
	 * 공고정보저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes" })
	
	public void savePlnmRgst(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");   // 공고정보		
		DataSetMap list2 = (DataSetMap) inDataset.get("input3");
		
		// 공고정보저장
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
			
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				
			    // 공고회차
			    List <Map> recodes2 = (List<Map>)baseDao.list("SLS130301DAO.selectOrgPlnmSeq", map);
			    
			    map.put("PLNM_SEQ", recodes2.get(0).get("PLNM_SEQ").toString());
			    
				// 기관공고번호 채번
			    List <Map> records = (List<Map>)baseDao.list("SLS130301DAO.selectOrgPlnmNo", map);
		
			   
			    map.put("ORG_PLNM_NO", records.get(0).get("ORG_PLNM_NO").toString());
			    
				 
			    baseDao.insert("SLS130301DAO.insertPlnmRgst", map);
				
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				
				baseDao.update("SLS130301DAO.updatePlnmRgst", map);
				
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
			    
				baseDao.delete("SLS130301DAO.deletePlnmRgst", map);
				
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
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);			
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();			
            //map.put("JOB_SE", cltrMnmtNo);	
			
			if (rowType == DataSet.ROW_TYPE_INSERTED ) {
            	System.out.println("SLS130301DAO.updateOnbidFileRefn : " + map);
            	baseDao.update("SLS130301DAO.updateOnbidFileRefn",  map);
            }
            else if(rowType == DataSet.ROW_TYPE_UPDATED ) 
            {
            	baseDao.delete("SLS130201DAO.updateOnbidFile", map);
            }   
            else if(rowType == DataSet.ROW_TYPE_DELETED )
            {			
            	String fullName = "/app_files/upload/ONB/SND/A_files/data/"+(String)map.get("PHYS_FILE_NM");            	
        		File delFile = new File(fullName);
        		if(delFile.exists() && delFile.delete()){
        			System.out.println("########## SLS130201DAO.deleteOnbidFile called ");
        			baseDao.delete("SLS130201DAO.deleteOnbidFile", map);	
        		}				
		    }	       
		}		
	}
	
	/**
	 * 공매정보저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes" })
	
	public void savePbctRgst(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");   // 공매정보
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");   // 집행권한
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");   // 입찰조건
		
		String pbctSeq = "";  // 동매회차
		String pbctDgr = "";  // 동매차수
		
		// 공매정보저장
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
			
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				
			    pbctSeq = (String) map.get("PBCT_SEQ"); // 공매회차
			    System.out.println("============================================================");
			    System.out.println("pbctSeq = " + pbctSeq);
			    System.out.println("============================================================");
				
			    if("".equals(pbctSeq) || pbctSeq == null)
			    {
			    	List <Map> recodes = (List<Map>)baseDao.list("SLS130301DAO.selectPbctSeq", map); // 공매회차 신규부여 
			        
			    	pbctSeq = String.valueOf(recodes.get(0).get("PBCT_SEQ"));
			    	pbctDgr = String.valueOf(recodes.get(0).get("PBCT_DGR"));
			    	
			    	    System.out.println("============================================================");
					    System.out.println("pbctSeq = " + pbctSeq);
					    System.out.println("============================================================");
			    	map.put("PBCT_SEQ", pbctSeq);
			        map.put("PBCT_DGR", pbctDgr);
			        
			    }else{
			    	
			    	List <Map> recodes = (List<Map>)baseDao.list("SLS130301DAO.selectPbctDgr", map); // 공매차수 신규부여 
			    	
			    	pbctDgr = (String) recodes.get(0).get("PBCT_DGR");
			    	
			    	map.put("PBCT_DGR", pbctDgr);
			    }
				 
			    baseDao.insert("SLS130301DAO.insertPbctRgst", map);
				
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				
				baseDao.update("SLS130301DAO.updatePbctRgst", map);
				
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
			    
				baseDao.delete("SLS130301DAO.deletePbctRgst", map);
				
		    }
	    }
		
		// 집행권한저장
		for (int x = 0; x < list2.size(); x++) {
					
			Map map = list2.get(x);
			    
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}
			catch( Exception e) {
				throw new NexaServiceException(e); 
			} 
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED){
				
			    String pbctSeq_1 = (String) map.get("PBCT_SEQ"); // 공매회차
				
			    if("".equals(pbctSeq_1) ||pbctSeq_1 == null )
			    {
			        // 신규 공매
			    	map.put("PBCT_SEQ", pbctSeq); 
			        map.put("PBCT_DGR", pbctDgr);
			        
			    }
			    //else{			    	
			    	// 재 공매
			    //	map.put("PBCT_DGR", pbctDgr); 
			    //}
			    
			   
			   for(int i = 0 ; i < 3 ; i++){
			    	
			        Map<String,String> AuthMap = new HashMap<String,String>();	
			        
			        String usrNo = (String) map.get("USR_NO_" + String.valueOf(i + 1));
			        if("".equals(usrNo) ||usrNo == null )
			        	continue;
			        	
			        AuthMap.put("TRNS_ID",(String) map.get("TRNS_ID"));
			        AuthMap.put("STND_LNK_ORG_NO",(String) map.get("STND_LNK_ORG_NO"));
			        AuthMap.put("PBCT_YR",(String) map.get("PBCT_YR"));
			        AuthMap.put("PBCT_SEQ",(String) map.get("PBCT_SEQ"));
			        AuthMap.put("PBCT_DGR",(String) map.get("PBCT_DGR"));
			        AuthMap.put("AUTH_CD",(String) map.get("AUTH_CD_" + String.valueOf(i + 1)));
			        AuthMap.put("USR_NO", usrNo);
			        
			        baseDao.insert("SLS130301DAO.insertExctAuthRgst", AuthMap);
			        
			    }
			   
				
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				
				baseDao.delete("SLS130301DAO.deleteExctAuthRgst", map);
				
				for(int i = 0 ; i < 3 ; i++){
				    	
				        Map<String,String> AuthMap = new HashMap<String,String>();	
				        
				        String usrNo = (String) map.get("USR_NO_" + String.valueOf(i + 1));
				        if("".equals(usrNo) ||usrNo == null )
				        	continue;
				        
				        AuthMap.put("TRNS_ID",(String) map.get("TRNS_ID"));
				        AuthMap.put("STND_LNK_ORG_NO",String.valueOf(map.get("STND_LNK_ORG_NO")));
				        AuthMap.put("PBCT_YR",String.valueOf(map.get("PBCT_YR")));
				        AuthMap.put("PBCT_SEQ",String.valueOf(map.get("PBCT_SEQ")));
				        AuthMap.put("PBCT_DGR",String.valueOf(map.get("PBCT_DGR")));
				        AuthMap.put("AUTH_CD",(String) map.get("AUTH_CD_" + String.valueOf(i + 1)));
				        AuthMap.put("USR_NO",String.valueOf(map.get("USR_NO_" + String.valueOf(i + 1))));
				        
				        baseDao.insert("SLS130301DAO.insertExctAuthRgst", AuthMap);
				        
				    }
				
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
			    
				baseDao.delete("SLS130301DAO.deleteExctAuthRgst", map);
				
		    }
	    }
		
		// 공매조건등록정보 저장
		for (int x = 0; x < list3.size(); x++) {
					
			Map map = list3.get(x);
			    
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}
			catch( Exception e) {
				throw new NexaServiceException(e); 
			} 
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 			
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED){
				
			    String pbctSeq_1 = (String) map.get("PBCT_SEQ"); // 공매회차
				
			    if("".equals(pbctSeq_1) || pbctSeq_1 == null )
			    {
			        // 신규 공매
			    	map.put("PBCT_SEQ", pbctSeq); 
			        map.put("PBCT_DGR", pbctDgr);			       
			    }
			    //else{			    	
			    // 재 공매
			    // 	map.put("PBCT_DGR", pbctDgr); 
			    //}			    
			   
			    baseDao.insert("SLS130301DAO.insertPbctCdtnRgst", map);			        		   
				
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				
				baseDao.update("SLS130301DAO.updatePbctCdtnRgst", map);				
				
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
			    
				baseDao.delete("SLS130301DAO.deletePbctCdtnRgst", map);
				
		    }
	    }
		
	}
	
	/**
	 * 제약조건저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes" })
	
	public void savePsblAreaRgst(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");   // 입찰가능지역
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");   // 입찰가능대상자
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");   // 입찰참가조건
		DataSetMap list4 = (DataSetMap) inDataset.get("input4");   // 입찰참가제한자


		if(list1.size() > 0){
			Map map = list1.get(0);
			baseDao.delete("SLS130301DAO.deletePsblAreaRgst", map);
		}
		
		// 입찰가능지역
		for (int x = 0; x < list1.size(); x++) {
			
			Map map = list1.get(x);
			  
			System.out.println("==================11111111===============================================");
			System.out.println(map);
			System.out.println("====================111111111==============================================");
			
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}
			catch( Exception e) {
				throw new NexaServiceException(e); 
			} 
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			
			if ( rowType != DataSet.ROW_TYPE_DELETED){
				 
			    baseDao.insert("SLS130301DAO.insertPsblAreaRgst", map);
				
			}
	    }
		
		if(list2.size() > 0){
			Map map = list2.get(0);
			baseDao.delete("SLS130301DAO.deletePsblRcpnRgst", map);
		}
		
		// 입찰가능대상자
				for (int x = 0; x < list2.size(); x++) {
					
					Map map = list2.get(x);
					
					System.out.println("==================222222222222================================================");
					System.out.println(map);
					System.out.println("===================2222222222222===============================================");
					
					// 세션정보 설정
					try {
						ObjectUtil.setUserToMap(map);
					}
					catch( Exception e) {
						throw new NexaServiceException(e); 
					} 
								
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
					
					
					if ( rowType != DataSet.ROW_TYPE_DELETED ){
						 
					    baseDao.insert("SLS130301DAO.insertPsblRcpnRgst", map);
						
					}
			    }
		
				// 입찰참가조건
				for (int x = 0; x < list3.size(); x++) {
					
					Map map = list3.get(x);
					System.out.println("============3333333333333333======================================================");
					System.out.println(map);
					System.out.println("==============33333333333333====================================================");
					
					    
					// 세션정보 설정
					try {
						ObjectUtil.setUserToMap(map);
					}
					catch( Exception e) {
						throw new NexaServiceException(e); 
					} 
								
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
					
					
					if ( rowType == DataSet.ROW_TYPE_INSERTED ){
						 
					    baseDao.insert("SLS130301DAO.insertBidPtctCdtnRgst", map);
						
					}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
						
						baseDao.update("SLS130301DAO.updateBidPtctCdtnRgst", map);
						
					}else if(rowType == DataSet.ROW_TYPE_DELETED ){
					    
						baseDao.delete("SLS130301DAO.deleteBidPtctCdtnRgst", map);
						
				    }
			    }
				
				
				if(list4.size() > 0){
					Map map = list4.get(0);
					baseDao.delete("SLS130301DAO.deletePbctCltrLmtRgst", map);
				}
				// 입찰참가제한자
				for (int x = 0; x < list4.size(); x++) {
					
					Map map = list4.get(x);
					System.out.println("=============4444444444444=====================================================");
					System.out.println(map);
					System.out.println("==============44444444444====================================================");
					
					    
					// 세션정보 설정
					try {
						ObjectUtil.setUserToMap(map);
					}
					catch( Exception e) {
						throw new NexaServiceException(e); 
					} 
								
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
					
					
					if ( rowType != DataSet.ROW_TYPE_DELETED ){
						 
					    baseDao.insert("SLS130301DAO.insertPbctCltrLmtRgst", map);
						
					}
			   }
	     }
	
	/**
	 * 공매물건저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes" })
	
	public void savePbctCltrRgst(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");   // 공매물건
		
		
		// 공고정보저장
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
			
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){    
				 
			    baseDao.insert("SLS130301DAO.insertPbctCltrRgst", map);
				
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				
				baseDao.update("SLS130301DAO.updatePbctCltrRgst", map);
				
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
			    
				baseDao.delete("SLS130301DAO.deletePbctCltrRgst", map);
				
		    }
	    }
		
	}
}




