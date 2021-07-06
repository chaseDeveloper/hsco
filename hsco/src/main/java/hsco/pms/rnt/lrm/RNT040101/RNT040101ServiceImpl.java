package hsco.pms.rnt.lrm.RNT040101;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

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
 * @since        	: 2015.11. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * </pre>  
 */

@Service("RNT040101Service")
public class RNT040101ServiceImpl extends BaseService implements RNT040101Service {
	
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

		records = (List<Map>)baseDao.list("RNT040101DAO.getList", inMap);		
				
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

			records = (List<Map>)baseDao.list("RNT040101DAO.getList1", inMap);		
					
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
		}

		@SuppressWarnings("rawtypes")
		public void getList2(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			List <Map> records;

			records = (List<Map>)baseDao.list("RNT040101DAO.getList2");	
			//records = (List<Map>)baseDao.list("RNT040101DAO.cnt");
			
					
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

			records = (List<Map>)baseDao.list("RNT040101DAO.cnt", inMap);		
					
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
		}		
		
	
		//  저장
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void atchCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
					String resFileOrdr = String.valueOf(upResult.get("FILE_ORDR"));
					//String resFileOrdr = String.valueOf(map.get("FILE_SN"));  // 첨부파일 건수만큼 ORDR 번호생성
					map.put("FILE_SN", resFileSn);
					map.put("FILE_ORDR", resFileOrdr);
					
				}
					log.info("INSERT호출 = " + map.toString());
					baseDao.insert("RNT040101DAO.listU", map);
					log.info("INSERT완료 = " + map.toString());
		}
	}

	    /* 전세임대 계약서 첨부파일 삭제 */
	    @SuppressWarnings({"rawtypes"})
	    public void atchDelete(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    	
	    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
	    	
			if (inDsMap != null){
				int listSize = (inDsMap == null) ? 0 : inDsMap.size();		
				for (int x = 0; x < listSize; x++) {			
				
					Map map = inDsMap.get(x);  
					String inFileSn = (String)map.get("FILE_SN");	// 파일일련번호
					
						// 전세임대 첨부파일 삭제
						//baseDao.delete("RNT040102DAO.atchDelete", map);
						
						// 컬럼 수정 후 - 파일일련번호, 파일순차번호
						boolean hasAtchFile = StringUtil.isNull(inFileSn) ? false : true;
						if(hasAtchFile){
							NexacroMapDTO xpDto = getXpDto();
							Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
							
							log.info("첨부파일 삭제 결과 = " + delResult.toString());
						}
					}
			}else{
				// 삭제할 데이터가 없습니다.
				throw new NexaServiceException("info.삭제.데이터.없음");
			}
	    }				
		
		
	@SuppressWarnings("rawtypes")
	public void listCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		String sqlId = null;
		String forceFlag = null;
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);
				
			//DataSet에 Parameter를 추가
			Iterator<String> keys = inVar.keySet().iterator();
			while( keys.hasNext() ){
				String key = keys.next();
				map.put(key, inVar.get(key));
			}
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			forceFlag = null;
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT040101DAO.listC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT040101DAO.listU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT040101DAO.listD", map);
				break;
				
			}
		}
		
		list = (DataSetMap) inDataset.get("input2");
		
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);
				
			//DataSet에 Parameter를 추가
			Iterator<String> keys = inVar.keySet().iterator();
			while( keys.hasNext() ){
				String key = keys.next();
				map.put(key, inVar.get(key));
			}
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			forceFlag = null;
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT040101DAO.listC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT040101DAO.listU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT040101DAO.listD", map);
				break;
				
			}
		}
	}

}