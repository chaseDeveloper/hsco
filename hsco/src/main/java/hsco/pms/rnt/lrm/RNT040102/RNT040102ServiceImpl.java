package hsco.pms.rnt.lrm.RNT040102;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

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
 * @Class Name   	: RNT040102ServiceImpl.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 6. 9.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.				       이광원		    	최초생성
 * </pre>  
 */

@Service("RNT040102Service")
public class RNT040102ServiceImpl extends BaseService implements RNT040102Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;     

	@SuppressWarnings("rawtypes")
	public void getList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT040102DAO.getList", inMap);		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	
	
	@SuppressWarnings("rawtypes")
	public void getListM(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT040102DAO.getListM", inMap);		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	
	@SuppressWarnings("rawtypes")
	public void cnt(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT040102DAO.cnt", inMap);		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	
	
	
	@SuppressWarnings("rawtypes")
	public void getList1(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT040102DAO.getList1", inMap);		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
//	// 파일 저장
//	@SuppressWarnings({ "rawtypes", "unchecked" })
//	public void atchCUD( DataSetMap tranInfo, Map<String, Object> inVar,
//			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
//			Map<String, DataSetMap> outDataset) throws NexaServiceException {
//		
//    	// 파일 첨부확인
//    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
//    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
//		Map targetMap = targetInfo.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
//		Map fileInfoMap = fileInfo.get(0);  // 파일업로드 할 데이터 셋
//		
//    	Object fileSn = targetMap.get("FILE_SN");
//    	
//    	Map<String, Object> upResult = null;
//    	if(fileInfo != null){
//    		
//    		// 계약관리테이블에 file_sn이 존재시 , inputFile 데이터셋에 file_sn을 설정
//    		// file_sn 없으면 새로 생성
//    		if(fileSn != null){			
//    			fileInfoMap.put("FILE_SN" , fileSn);
//    		}
//	    		NexacroMapDTO xpDto = getXpDto();
//	    		fileUploadService.setFileLocation(getFileLocation());
//	    		upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
//    		
//    	}
//    	
//		List<Map> failList = new ArrayList<Map>();
//		
//		try
//		{
//			if(upResult != null){				
//
//				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
//				targetMap.put("FILE_SN", resFileSn);
//				baseDao.insert("RNT040102DAO.atchCUD", targetMap);
//			}
//
//		}
//		catch(Exception ex)
//		{
//			if(ex.getMessage().indexOf("ORA-00001") != -1){
//				targetMap.put("EX_COUSE", "중복");
//			}else{
//				targetMap.put("EX_COUSE", ex.getMessage());
//			}
//			
//			failList.add(targetMap);
//		}
//
//		DataSetMap failMap = new DataSetMap();
//		failMap.setRowMaps(failList);
//		
//		outDataset.put("failList", failMap);
//}
//
//    /* 첨부파일 삭제 */
//    @SuppressWarnings({"rawtypes"})
//    public void atchDelete(DataSetMap tranInfo, Map<String, Object> inVar,
//			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
//			Map<String, DataSetMap> outDataset) throws NexaServiceException {
//    	
//		DataSetMap list = (DataSetMap) inDataset.get("input1");
//		
//		if (list != null){
//			Map<String, Object> inMap = list.get(0);
//			
//			for (int x = 0; x < list.size(); x++) {
//					
//				Map<String, Object> map = list.get(x);
//				
//				String inFileSn = (String)map.get("FILE_SN");	// 파일일련번호
//					
//					// 컬럼 수정 후 - 파일일련번호, 파일순차번호
//					boolean hasAtchFile = StringUtil.isNull(inFileSn) ? false : true;
//					if(hasAtchFile){
//						NexacroMapDTO xpDto = getXpDto();
//						Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
//													
//						log.info("첨부파일 삭제 결과 = " + delResult.toString());
//					}
//				}
//			
//			// 상세 목록카은트
//			// 공통첨부 디테일 조회후 파일이 존재 하지 않으면 계약관리 테이블 file_sn 값을 null로 변경
//			int fileCnt = (Integer)baseDao.select("RNT030301DAO.FILECNT", inMap);
//			if(fileCnt == 0)
//			{
//				// 계약관리 FILE_SN NULL로 업데이트
//				baseDao.delete("RNT040102DAO.atchDelete", inMap);
//			}				
//
//			}else{
//				// 삭제할 데이터가 없습니다.
//				throw new NexaServiceException("info.삭제.데이터.없음");
//			}
//    }		
	
	@SuppressWarnings("rawtypes")
	public void getList2(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT040102DAO.getList2", inMap);
										   
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}		
	
//	@SuppressWarnings("rawtypes")
//	public void listCUD(DataSetMap tranInfo, Map<String, Object> inVar,
//			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
//			Map<String, DataSetMap> outDataset) throws NexaServiceException {
//		String sqlId = null;
//		String forceFlag = null;
//		
//		
//		int iRow = 0;
//		
//		DataSetMap list = (DataSetMap) inDataset.get("input1");
//		
//		for (int x = 0; x < list.size(); x++) {
//				
//			Map map = list.get(x);
//				
//			//DataSet에 Parameter를 추가
//			Iterator<String> keys = inVar.keySet().iterator();
//			while( keys.hasNext() ){
//				String key = keys.next();
//				map.put(key, inVar.get(key));
//			}
//				
//			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
//			forceFlag = null;
//					
//			//if ( rowType == DataSet.ROW_TYPE_INSERTED ){
//				//authorGroupMngDAO.authorGroupMngU(map);
//			//}
//			
//			switch(rowType) {
//			case DataSet.ROW_TYPE_INSERTED :
//				baseDao.insert("RNT040102DAO.listC", map);
//				break;
//			case DataSet.ROW_TYPE_UPDATED :
//				iRow += baseDao.update("RNT040102DAO.listU", map);
//				break;
//			case DataSet.ROW_TYPE_DELETED :
//				iRow += baseDao.delete("RNT040102DAO.listD", map);
//				break;
//				
//			}
//		}	
//	}
	
	/** 장기수선관리를 신규,수정,삭제 */
	@SuppressWarnings({ "rawtypes" })
	public int listCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("RNT040102DAO.listC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("RNT040102DAO.listU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("RNT040102DAO.listD", map);
					break;
			    default:
			    	break;
				}	
			
			}
		
		list = (DataSetMap) inDataset.get("input2");
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("RNT040102DAO.stndrdC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("RNT040102DAO.stndrdU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("RNT040102DAO.stndrdD", map);
					break;
			    default:
			    	break;
				}		
			
			}
		
			return iRow;
	}
	
	@SuppressWarnings("rawtypes")
	public void stndrdlist(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT040102DAO.stndrdlist", inMap);
										   
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}		
	
	
	/**
     * 첨부파일 정보 수정(저장)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void fileCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
		// 파일 첨부확인
		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
		Map<String, Object> upResult = null;
		if(fileInfo != null){
		log.info("serivceimple 호출~ = ");	
			NexacroMapDTO xpDto = getXpDto();
			fileUploadService.setFileLocation(getFileLocation());
			upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
		}

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();		
		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			if(upResult != null){
				// 업로드 첨부파일의 수가 1건일 경우 파일 순차번호 포함
				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				//String resFileOrdr = String.valueOf(map.get("FILE_SN"));  // 첨부파일 건수만큼 ORDR 번호생성
				map.put("FILE_SN", resFileSn);
				
			}
				log.info("INSERT호출 = " + map.toString());
				baseDao.insert("RNT040102DAO.fileCUD", map);
				log.info("INSERT완료 = " + map.toString());
		}
	}
	
	/**
     * 첨부파일 정보 수정(삭제)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	/* 첨부파일 삭제 */
    @SuppressWarnings({"rawtypes"})
    public void fileD(DataSetMap tranInfo, Map<String, Object> inVar,
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
			baseDao.delete("RNT040102DAO.fileD", inMap);
		}				
		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
    }

}