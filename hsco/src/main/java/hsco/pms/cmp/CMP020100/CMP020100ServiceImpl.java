package hsco.pms.cmp.CMP020100;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CMP020100ServiceImpl.java
 * @Description  	: 조서등록
 * @author       	: 지효정
 * @since        	: 2015. 6. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 20.					지효정				최초생성
 * </pre>  
 */
@Service("CMP020100Service")
public class CMP020100ServiceImpl extends BaseService{
	@Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService; 
	
	protected Logger log = LoggerFactory.getLogger(CMP020100ServiceImpl.class);
	
	//기본조서 목록
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void thingWtnncList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException {
		
		if(log.isInfoEnabled()) log.info("thingWtnncList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
        if(inMap != null){
        	String sParam = (String)inMap.get("THING_CL");
    		inMap.put("ARR_THING_CL", sParam.split(","));
        }

		records = (List<Map>)baseDao.list("CMP020100DAO.thingWtnncList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//기본조서 CUD
	@SuppressWarnings({"rawtypes", "unchecked" })
	
	public void thingWtnncCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int wtnncSn = -1;
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				wtnncSn = (Integer)baseDao.select("CmpCommonDAO.thingWtnncSn", map);
				map.put("THING_SN", wtnncSn);
				baseDao.insert("CMP020100DAO.thingWtnncC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP020100DAO.thingWtnncU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP020100DAO.thingWtnncD", map);
			}
		}
	}
	
	//소유자 목록
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void thingOwnerList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP020100DAO.thingOwnerList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	//소유자CUD
	@SuppressWarnings({"rawtypes", "unchecked" })
	
	public void thingOwnerCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		int ownerSn = -1;
		int ownerChangeSn = -1;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = null;
		
		for (int x = 0; x < list.size(); x++) {
			 map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				ownerSn = (Integer)baseDao.select("CmpCommonDAO.thingOwnerSn", map);
				map.put("OWNER_SN", ownerSn);
				baseDao.insert("CMP020100DAO.thingOwnerC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP020100DAO.thingOwnerU", map);
				String OWNER_NO = String.valueOf(map.get("OWNER_NO"));
				String BF_OWNER_NO = String.valueOf(map.get("BF_OWNER_NO"));
				
				//소유자가 바뀌는 경우 소유자 변경 테이블에 Insert
				if(null != OWNER_NO && null != BF_OWNER_NO){
					if(!OWNER_NO.equals(BF_OWNER_NO)){   // instance 비교 오류 수정(Code Inspection)
						ownerChangeSn = (Integer)baseDao.select("CmpCommonDAO.thingOwnerChangSn", map);
						map.put("CHANGE_SN", ownerChangeSn);
						baseDao.insert("CMP020100DAO.thingOwnerChangeC", map);
					}
				}
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP020100DAO.thingOwnerD", map);
			}
		}
		
		if(null != map) {
			List <Map> records;
			
			records = (List<Map>)baseDao.list("CMP020100DAO.thingOwnerList", map);
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
		}
	}
	
	//소유자 변경 목록
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void thingOwnerChangeList(DataSetMap tranInfo,
			Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaDaoException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP020100DAO.thingOwnerChangeList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//소유자 변경 CUD
	@SuppressWarnings({"rawtypes" })
	
	public void thingOwnerChangeCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP020100DAO.thingOwnerChangeC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP020100DAO.thingOwnerChangeU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP020100DAO.thingOwnerChangeD", map);
			}
		}
	}
		
	//관계인 목록
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void thingPartcpntList(DataSetMap tranInfo,
			Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaDaoException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP020100DAO.thingPartcpntList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//관계인 CUD
	@SuppressWarnings({"rawtypes", "unchecked" })
	
	public void thingPartcpntCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		int partcpntSn = -1;
		int partcpntChangeSn = -1;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = null;
		
		for (int x = 0; x < list.size(); x++) {
			map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				partcpntSn = (Integer)baseDao.select("CmpCommonDAO.thingPartcpntSn", map);
				map.put("PARTCPNT_SN", partcpntSn);
				baseDao.insert("CMP020100DAO.thingPartcpntC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP020100DAO.thingPartcpntU", map);
				String PARTCPNT_NO = String.valueOf(map.get("PARTCPNT_NO"));
				String BF_PARTCPNT_NO = String.valueOf(map.get("BF_PARTCPNT_NO"));
				if(null != PARTCPNT_NO && null != BF_PARTCPNT_NO){
					//관계인이 바뀌는 경우 관계인 변경 테이블에 Insert
					if(!PARTCPNT_NO.equals(BF_PARTCPNT_NO)){ // instance 비교 오류 수정(Code Inspection)
						partcpntChangeSn = (Integer)baseDao.select("CmpCommonDAO.thingPartcpntChangeSn", map);
						map.put("CHANGE_SN", partcpntChangeSn);
						baseDao.insert("CMP020100DAO.thingPartcpntChangeC", map);
					}
				}
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP020100DAO.thingPartcpntD", map);
			}
		}
		
		if(null != map) {
			List <Map> records;
			
			records = (List<Map>)baseDao.list("CMP020100DAO.thingPartcpntList", map);
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
		}
	}
		
	//관계인 변경 목록
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void thingPartcpntChangeList(DataSetMap tranInfo,
			Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaDaoException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP020100DAO.thingPartcpntChangeList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//관계인 변경 CUD
	@SuppressWarnings({"rawtypes" })
	
	public void thingPartcpntChangeCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP020100DAO.thingPartcpntChangeC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP020100DAO.thingPartcpntChangeU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP020100DAO.thingPartcpntChangeD", map);
			}
		}
	}
	
	//첨부파일 목록
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void thingWtnncPhotoList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP020100DAO.thingWtnncPhotoList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//첨부파일 생성
	
	public void thingWtnncPhotoC(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		// 파일 첨부확인
		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
		DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");

		Map targetMap = targetInfo.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
		Map fileInfoMap = fileInfo.get(0);  // 파일업로드 할 데이터 셋

		String fileSn = String.valueOf(targetMap.get("FILE_SN"));
		
		Map<String, Object> upResult = null;
		if(fileInfo != null){
			
    		// 물건조서테이블에 FILE_SN이 존재시 , inputFile 데이터셋에 FILE_SN을 설정
    		// FILE_SN 없으면 새로 생성
    		if(null != fileSn && !"".equals(fileSn)){			
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
				baseDao.insert("CMP020100DAO.thingWtnncFileSnU", targetMap);
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
		
	//첨부파일 삭제
	@SuppressWarnings("rawtypes")
	public void thingWtnncPhotoD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
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
	
			if(fileCnt == 0) {
				// 계약관리 FILE_SN NULL로 업데이트
				baseDao.delete("CMP020100DAO.thingWtnncFileSnD", inMap);
			}				

		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
	}
	
	//소유자 목록(팝업)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void ownerList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP020100DAO.ownerList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//소유자 CUD(팝업)
	@SuppressWarnings({ "rawtypes" })
	
	public void ownerCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP020100DAO.ownerC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP020100DAO.ownerU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				int useCnt = (Integer)baseDao.select("CmpCommonDAO.ownerUseCount", map);
  				if(useCnt > 0){
  					throw new NexaServiceException("fail.삭제.불가", "하위자료가 있는 소유자는 ");
  				}
				baseDao.delete("CMP020100DAO.ownerD", map);
			}
		}
	}
	
	//기본조서 CUD
	@SuppressWarnings({"rawtypes", "unchecked" })
	
	public void thingWtnncAllCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		int wtnncSn = -1;
		int ownerSn = -1;
		int ownerChangeSn = -1;
		int partcpntSn = -1;
		int partcpntChangeSn = -1;
		
		//물건CUD
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				wtnncSn = (Integer)baseDao.select("CmpCommonDAO.thingWtnncSn", map);
				map.put("THING_SN", wtnncSn);
				baseDao.insert("CMP020100DAO.thingWtnncC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP020100DAO.thingWtnncU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP020100DAO.thingWtnncD", map);
			}
		}
		
		//소유자CUD
		list = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				if(wtnncSn != -1){
					map.put("THING_SN", wtnncSn);
				}
				ownerSn = (Integer)baseDao.select("CmpCommonDAO.thingOwnerSn", map);
				map.put("OWNER_SN", ownerSn);
				baseDao.insert("CMP020100DAO.thingOwnerC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP020100DAO.thingOwnerU", map);
				String OWNER_NO = String.valueOf(map.get("OWNER_NO"));
				String BF_OWNER_NO = String.valueOf(map.get("BF_OWNER_NO"));
				
				//소유자가 바뀌는 경우 소유자 변경 테이블에 Insert
				if(null != OWNER_NO && null != BF_OWNER_NO){
					if(!OWNER_NO.equals(BF_OWNER_NO)){  // instance 비교 오류 수정(Code Inspection)
						ownerChangeSn = (Integer)baseDao.select("CmpCommonDAO.thingOwnerChangSn", map);
						map.put("CHANGE_SN", ownerChangeSn);
						baseDao.insert("CMP020100DAO.thingOwnerChangeC", map);
					}
				}
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				int useCnt = (Integer)baseDao.select("CmpCommonDAO.thingOwnerUseCount", map);
  				if(useCnt > 0){
  					throw new NexaServiceException("fail.삭제.불가", "하위자료가 있는 소유자는 ");
  				}
				baseDao.delete("CMP020100DAO.thingOwnerD", map);
			}
		}
		
		//소유자변경CUD
		list = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP020100DAO.thingOwnerChangeU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP020100DAO.thingOwnerChangeD", map);
			}
		}
				
		//관계인 CUD
		list = (DataSetMap) inDataset.get("input4");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				if(wtnncSn != -1){
					map.put("THING_SN", wtnncSn);
				}
				if(ownerSn != -1){
					map.put("OWNER_SN", ownerSn);
				}
				partcpntSn = (Integer)baseDao.select("CmpCommonDAO.thingPartcpntSn", map);
				map.put("PARTCPNT_SN", partcpntSn);
				baseDao.insert("CMP020100DAO.thingPartcpntC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP020100DAO.thingPartcpntU", map);
				String PARTCPNT_NO = String.valueOf(map.get("PARTCPNT_NO"));
				String BF_PARTCPNT_NO = String.valueOf(map.get("BF_PARTCPNT_NO"));
				if(null != PARTCPNT_NO && null != BF_PARTCPNT_NO){
					//관계인이 바뀌는 경우 관계인 변경 테이블에 Insert
					if(!PARTCPNT_NO.equals(BF_PARTCPNT_NO)){ // instance 비교 오류 수정(Code Inspection)
						partcpntChangeSn = (Integer)baseDao.select("CmpCommonDAO.thingPartcpntChangeSn", map);
						map.put("CHANGE_SN", partcpntChangeSn);
						baseDao.insert("CMP020100DAO.thingPartcpntChangeC", map);
					}
				}
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP020100DAO.thingPartcpntD", map);
			}
		}
		
		//관계인변경CUD
		list = (DataSetMap) inDataset.get("input5");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP020100DAO.thingPartcpntChangeU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP020100DAO.thingPartcpntChangeD", map);
			}
		}
		
		//관계인변경CUD
		list = (DataSetMap) inDataset.get("input6");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP020100DAO.thingWtnncPhotoD", map);
			}
		}
	}
	
	//소유자 조서 목록(팝업)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void ownerThingWtnncList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP020100DAO.ownerThingWtnncList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//소유자 일괄변경(팝업)
	@SuppressWarnings({"rawtypes" })
	
	public void ownerChange(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int ownerChangeSn = 0;
		
		for (int x = 0; x < list.size(); x++) {
			Map map   = list.get(x);

			//소유자 변경
			baseDao.update("CMP020100DAO.ownerChange", map);

			//소유자 변경이력 관련 등록
			String CHG_OWNER_NO = String.valueOf(map.get("CHG_OWNER_NO"));
			String BF_PARTCPNT_NO = String.valueOf(map.get("OWNER_NO"));
			if(!CHG_OWNER_NO.equals(BF_PARTCPNT_NO)){ // instance 비교 오류 수정(Code Inspection)
				ownerChangeSn = (Integer)baseDao.select("CmpCommonDAO.thingOwnerChangSn", map);
				map.put("CHANGE_SN", ownerChangeSn);
				map.put("BF_OWNER_NO", map.get("OWNER_NO"));
				baseDao.insert("CMP020100DAO.thingOwnerChangeC", map);
			}					
		}
	}
}