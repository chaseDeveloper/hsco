package hsco.mis.ass.ASS030100;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ASS030101ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 6. 30.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 30.	       이혜선		    최초생성
 * </pre>  
 */
@Service("ass030100Service")
public class ASS030100ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /**
	 * 불용품관리 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void atldManageList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null && inDsMap.size() > 0)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("ASS030100DAO.atldManageList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
    /**
	 * 불용품관리상세 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void atldManageDetail(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null && inDsMap.size() > 0)
			inMap = inDsMap.get(0);
		
		List <Map> records1 = (List<Map>)baseDao.list("ASS030100DAO.atldManageDetail", inMap);		
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
	}	
	
    /**
	 * 불용품관리상세 회계계정 리스트 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void atldAccnutAcnt(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null && inDsMap.size() > 0)
			inMap = inDsMap.get(0);	
		List <Map> records2 = (List<Map>)baseDao.list("ASS030100DAO.atldAccnutAcntList", inMap);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		outDataset.put("output2", outDsMap2);
	}		
	
	/**
	 *  불용품관리, 불용품관리상세 CUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void atldManageCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		// 불용디테일
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		// 회계계정과목 CUD
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
				
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("ASS030100DAO.atldManageDetailU", map);
					break;
			}	
		}	
		
		int listSize2 = (list2 == null) ? 0 : list2.size();
		
		for (int x = 0; x < listSize2; x++) {
				
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("ASS030100DAO.atldAccnutAcntD", map);
					break;	
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("ASS030100DAO.atldAccnutAcntC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("ASS030100DAO.atldAccnutAcntU", map);
					break;
			}	
		}	
	}
	
	/**
	 *  불용품관리 전표생성 CUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int disuseProcess(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		String chitNo = null;
		
		// 불용계획마스터 CUD
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
		
		
		// 대체전표 마스터 생성
		chitNo = (String) baseDao.select("ASS030100DAO.chitNo", map);
		map.put("CHIT_NO", chitNo);
		baseDao.insert("ASS030100DAO.chitMastrC", map);	
		
		baseDao.update("ASS030100DAO.atldManageDetailU", map);
	
		// 회계계정과목 CUD
		list = (DataSetMap) inDataset.get("input2");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("ASS030100DAO.atldAccnutAcntC", map);
					
					// 전표 상세 등록
					map.put("CHIT_NO", chitNo);
					baseDao.insert("ASS030100DAO.chitDetailC", map);
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("ASS030100DAO.atldAccnutAcntU", map);
					
					// 전표 상세 등록
					map.put("CHIT_NO", chitNo);
					baseDao.insert("ASS030100DAO.chitDetailC", map);
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("ASS030100DAO.atldAccnutAcntD", map);
					break;
					
				default :
					// 전표 상세 등록
					map.put("CHIT_NO", chitNo);
					baseDao.insert("ASS030100DAO.chitDetailC", map);
					break;
			}	
		}
		return iRow;
	
	}
	
	/**  불용품관리 처분 취소
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int disuseProcessCancel(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			map = list.get(x);
			
			baseDao.delete("ASS030100DAO.chitDetailD", map);
			baseDao.delete("ASS030100DAO.chitMastrD", map);
			
			map.put("CHIT_NO", "");
			baseDao.insert("ASS030100DAO.atldManageDetailU", map);
		}
		return iRow;
	}
}
