package hsco.pms.rnt.pra.RNT01040103;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT01040103ServiceImpl.java
 * @Description  	: 보증금 압류 등록
 * @author       	: 지효정
 * @since        	: 2015. 11. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 16.					지효정				최초생성
 * </pre>  
 */
@Service("RNT01040103Service")
public class RNT01040103ServiceImpl extends BaseService{
	@Resource(name = "FileUploadService")
	protected FileUploadServiceImpl fileUploadService;
	
	/**
	 * 임대 계약자 상세
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentCntrctDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01040103DAO.rentCntrctDetailList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 압류 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentGtnSeizrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01040103DAO.rentGtnSeizrList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 압류 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void rentGtnSeizrCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT01040103DAO.rentGtnSeizrC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01040103DAO.rentGtnSeizrU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				List <Map> gtnSeizrAtchDetailList = (List<Map>)baseDao.list("RNT01040103DAO.gtnSeizrAtchList", map);
				if(gtnSeizrAtchDetailList != null && gtnSeizrAtchDetailList.size() > 0){
					Map gtnSeizrAtchDetail = gtnSeizrAtchDetailList.get(0);
					//deleteFiles(gtnSeizrAtchDetail);
				}
				baseDao.delete("RNT01040103DAO.gtnSeizrAtchD", map);
				baseDao.delete("RNT01040103DAO.rentGtnSeizrD", map);
			}
		}
		
		list = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("RNT01040103DAO.gtnSeizrAtchD", map);
				//deleteFiles(map);
			}
		}
		
		list = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("RNT01040103DAO.gtnSeizrAtchD", map);
				//deleteFiles(map);
			}
		}
	} 
	
	/**
	 * 첨부파일1 상세
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void gtnSeizrAtchDetail( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01040103DAO.gtnSeizrAtchDetail", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 첨부파일 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void gtnSeizrAtchCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();

		// 첨부파일 확인
		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
		Map<String, Object> upResult = null;

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			if(fileInfo != null){
				//기존에 있는 파일 삭제(현재 진행중인 접수, 해제 중 하나 삭제 됨) 
				List <Map> gtnSeizrAtchDetailList = (List<Map>)baseDao.list("RNT01040103DAO.gtnSeizrAtchDetail", map);
				if(gtnSeizrAtchDetailList != null && gtnSeizrAtchDetailList.size() > 0){
					Map gtnSeizrAtchDetail = gtnSeizrAtchDetailList.get(0);
					//deleteFiles(gtnSeizrAtchDetail);
					baseDao.delete("RNT01040103DAO.gtnSeizrAtchD", map);
				}
				
				//기존에 있는 파일중(접수, 해제 중)파일이 존재할경우 FILE_SN을 세팅한다.
				gtnSeizrAtchDetailList = (List<Map>)baseDao.list("RNT01040103DAO.gtnSeizrAtchList", map);
				String fileSn = null;
				if(gtnSeizrAtchDetailList != null && gtnSeizrAtchDetailList.size() > 0){
					Map gtnSeizrAtchDetail = gtnSeizrAtchDetailList.get(0);
					fileSn = (String)gtnSeizrAtchDetail.get("FILE_SN");
					fileInfo.get(0).put("FILE_SN", fileSn);
				}
				
				NexacroMapDTO xpDto = getXpDto();
				//deleteFiles(map);	// 첨부파일 삭제

				//파일 저장
				fileUploadService.setFileLocation(getFileLocation());
				upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
				if(upResult != null) {
					//저장후에 FILE_SN, FILE_ORDR를 받아온다.
					map.put("FILE_SN", upResult.get("FILE_SN"));
					map.put("FILE_ORDR", upResult.get("FILE_ORDR"));
				}
			}

			//보증금압류첨부 테이블에 저장
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.insert("RNT01040103DAO.gtnSeizrAtchC", map);
					break;
			}
		}
	}
	
//  첨부파일 삭제
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void deleteFiles(Map<String, Object> map) {

		String fileSn = (String) map.get("FILE_SN");
		if(fileSn == null || fileSn == "") {
			return;
		}

		List <Map> files = (List<Map>)baseDao.list("selectAtchmnFileList", map);
		int nSize = files == null ? 0 : files.size();
		if(nSize == 0) {
			return;
		}

		DataSetMap inDsMap = new DataSetMap();
		inDsMap.setRowMaps(files);

		Map<String, DataSetMap> fDataset = new HashMap<String, DataSetMap>();
		fDataset.put("input1", inDsMap);

		fileUploadService.deleteAtchmnMastFile(null, null, fDataset, null, null);
	}
}
