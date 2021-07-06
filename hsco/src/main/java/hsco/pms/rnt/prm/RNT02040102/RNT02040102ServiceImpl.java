package hsco.pms.rnt.prm.RNT02040102;

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
 * @Class Name   		: RNT02040102ServiceImpl.java
 * @Description  		: 매입임대 압류정보
 * @author       			: 변승우
 * @since        			: 2015. 11. 26.
 * @version    		  	: 1.0
 * @see         		 	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 26.					변승우				최초생성
 * </pre>  
 */


@Service("RNT02040102Service")
public class RNT02040102ServiceImpl extends BaseService{
	@Resource(name = "FileUploadService")
	protected FileUploadServiceImpl fileUploadService;
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	

	/**
	 * 매입임대 체납내역
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectNpymInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02040102DAO.selectNpymInfoList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);	
	}
	
	
	/**
	 * 매입임대 보증금 압류 정보
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSeizureInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02040102DAO.selectSeizureInfoList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);	
	}
	
	
	/**
	 * 매입임대 압류 정보 (저장,수정,삭제)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */	
	@SuppressWarnings({ "rawtypes" })
	
	public void saveSeizureInfoCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT02040102DAO.saveSeizureInfoC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT02040102DAO.saveSeizureInfoU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				List <Map> gtnSeizrAtchDetailList = (List<Map>)baseDao.list("RNT02040102DAO.selectGtnSeizrAtchList", map);
				if(gtnSeizrAtchDetailList != null && gtnSeizrAtchDetailList.size() > 0){
					Map gtnSeizrAtchDetail = gtnSeizrAtchDetailList.get(0);
					//deleteFiles(gtnSeizrAtchDetail);
				}				
				baseDao.delete("RNT02040102DAO.saveGtnSeizrAtchD", map);
				baseDao.update("RNT02040102DAO.saveSeizureInfoD", map);
			}
		}	
		
		list = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("RNT02040102DAO.saveGtnSeizrAtchD", map);
				//deleteFiles(map);
			}
		}
		
		list = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("RNT02040102DAO.saveGtnSeizrAtchD", map);
				//deleteFiles(map);
			}
		}
		
	}

	
	
	/**
	 * 매입임대 첨부파일 상세
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectGtnSeizrAtchDetail( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02040102DAO.selectGtnSeizrAtchDetail", inMap);
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
	
	public void saveGtnSeizrAtchCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
				List <Map> gtnSeizrAtchDetailList = (List<Map>)baseDao.list("RNT02040102DAO.selectGtnSeizrAtchDetail", map);
				if(gtnSeizrAtchDetailList != null && gtnSeizrAtchDetailList.size() > 0){
					Map gtnSeizrAtchDetail = gtnSeizrAtchDetailList.get(0);
					//deleteFiles(gtnSeizrAtchDetail);
					baseDao.delete("RNT02040102DAO.saveGtnSeizrAtchD", map);
				}
				
				//기존에 있는 파일중(접수, 해제 중)파일이 존재할경우 FILE_SN을 세팅한다.
				gtnSeizrAtchDetailList = (List<Map>)baseDao.list("RNT02040102DAO.selectGtnSeizrAtchList", map);
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
					baseDao.insert("RNT02040102DAO.saveGtnSeizrAtchC", map);
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
