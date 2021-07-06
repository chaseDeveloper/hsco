package hsco.pms.rnt.lrm.RNT040304;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
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
 * @Class Name   	: RNT040301ServiceImpl.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 8. 09.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  
 * </pre>  
 */

@Service("RNT040304Service")
public class RNT040304ServiceImpl extends BaseService implements RNT040304Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService; 
    
    
    // 시행문 조회
	@SuppressWarnings("rawtypes")
	public void getList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT040304DAO.getList", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT040304DAO.getList", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

    // 요청 조회	
	@SuppressWarnings("rawtypes")
	public void getList1(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT040304DAO.getList1", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT040304DAO.getList1", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    

    // 요청 조회	
	@SuppressWarnings("rawtypes")
	public void getList2(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT040304DAO.getList2", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT040304DAO.getList2", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}   	
	
    // 내부결재 출력물 조회	
	@SuppressWarnings("rawtypes")
	public void prt(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		List <Map> records2;

		records1 = (List<Map>)baseDao.list("RNT040304DAO.getList", inMap);
		records2 = (List<Map>)baseDao.list("RNT040304DAO.getList1", inMap);

		
				
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);		
		outDataset.put("output1", outDsMap1);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		outDataset.put("output2", outDsMap2);		
		
	}    	
    
	@SuppressWarnings("rawtypes")
	public void listCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
					
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT040304DAO.listC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT040304DAO.listU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT040304DAO.listD", map);
				break;
				
			}		
		}
		
		list = (DataSetMap) inDataset.get("input2");		
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);				
			baseDao.insert("RNT040304DAO.listR1U", map);
			
		}	
		
		list = (DataSetMap) inDataset.get("input3");
		
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
					
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT040304DAO.listC2", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT040304DAO.listU2", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT040304DAO.listD2", map);
				break;
				
			}		
		}		
	}

	/** 첨부파일 신규 */
		
    @SuppressWarnings({"unchecked","rawtypes"})
    public void atchCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
		
		try
		{
			if(upResult != null){				

				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				baseDao.insert("RNT040304DAO.atchCUD", targetMap);
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

    /* 전세임대 계약서 첨부파일 삭제 */
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
					baseDao.delete("RNT040304DAO.atchDelete", inMap);
				}				
	
		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
    }		

    
    
	/* 내부결제 번호 등록  */
	@SuppressWarnings({ "rawtypes" })
	public void sanctnUpdate(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("RNT040304DAO.sanctnUpdate", map);
		}
	} 	
	
	/* 내부결제 번호 변경
	@SuppressWarnings({ "rawtypes" })
	public void rwmnyPymntU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		//보상금 지급 CUD
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("RNT040304DAO.listU", map);
		}
	} 	    
	 */
	
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

		List <Map> records;
		Map map = list.get(0);
			
		baseDao.update("RNT040304DAO.approveU", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		
		outDataset.put("output1", outDsMap);
	} 	
	
}