package hsco.pms.prj.PRJ010115;

import hsco.cmm.exception.NexaServiceException;

import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ010115ServiceImpl.java
 * @Description  	: 
 * @author       	: 정  민
 * @since        	: 2017. 11. 09.
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
 *  2017. 11. 09.                  정  민                최초생성
 * </pre>
 */

@Service("PRJ010115Service")
public class PRJ010115ServiceImpl extends BaseService {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    /**
	 * 안전점검 및 이력관리 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSftMntList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        
    	if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
    	DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010115DAO.selectSftMntList", inMap));
        outDataset.put("output1", outDsMap);
        
    }
    

    
    /**
	 * 안전점검 및 이력관리 목록 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes"})
    @Transactional
    public void saveSftMntList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();	
		
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("PRJ010115DAO.sftMntC", map);	
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("PRJ010115DAO.sftMntU", map);	
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.update("PRJ010115DAO.sftMntD", map);		
					break;
			}
		}	
    }

	/**
	 * 파일 조회(지적사항)
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCtgryFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		// 안전점검지적
		inMap.put("ACTV_CS_SN", 63);
		outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010115DAO.selectCtgryFile", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 첨부파일 수정사항 저장(지적사항)
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveCtgryFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		List<Map> resultList = new ArrayList<Map>();
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			// 안전점검지적
			map.put("ACTV_CS_SN", 63);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
				case DataSet.ROW_TYPE_UPDATED:
					String ctgryFileId = (String) map.get("CTGRY_FILE_ID");
					if (StringUtils.isEmpty(ctgryFileId) || "".equals(ctgryFileId)) {
						ctgryFileId = (String) baseDao.select("PRJ010115DAO.getCtgryFileId", map);
						map.put("CTGRY_FILE_ID", ctgryFileId);
						baseDao.insert("PRJ010115DAO.insertCtgryFile", map);
						
						String docSn = (String) map.get("DOC_SN");
						if (StringUtils.isEmpty(docSn) || "".equals(docSn)) {
							docSn = (String) baseDao.select("PRJ010115DAO.getDocSn", map);
							map.put("DOC_SN", docSn);
							baseDao.update("PRJ010115DAO.updateDocSn", map);		// 문서번호 갱신(부모테이블)
						}
						baseDao.insert("PRJ010115DAO.insertDocRgs", map);		// 문서 등록 추가
					}

					
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("PRJ010115DAO.deleteCtgryFile", map);
					baseDao.delete("PRJ010115DAO.deleteDocRgs", map);
					/*

					map.put("DOC_SN", "");

					// 문서번호 갱신(부모테이블)
					baseDao.update("PRJ010115DAO.updateDocSn", map);
					*/
					break;
			}
			resultList.add(map);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 파일 조회(조치사항)
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCtgryFile2(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		// 안전점검조치
		inMap.put("ACTV_CS_SN", 64);
		outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010115DAO.selectCtgryFile", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 첨부파일 수정사항 저장(조치사항)
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveCtgryFile2(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		List<Map> resultList = new ArrayList<Map>();
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			// 안전점검조치
			map.put("ACTV_CS_SN", 64);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
				case DataSet.ROW_TYPE_UPDATED:
					String ctgryFileId = (String) map.get("CTGRY_FILE_ID");
					if (StringUtils.isEmpty(ctgryFileId) || "".equals(ctgryFileId)) {
						ctgryFileId = (String) baseDao.select("PRJ010115DAO.getCtgryFileId", map);
						map.put("CTGRY_FILE_ID", ctgryFileId);
						baseDao.insert("PRJ010115DAO.insertCtgryFile", map);
						
						String docSn = (String) map.get("DOC_SN");
						if (StringUtils.isEmpty(docSn) || "".equals(docSn)) {
							docSn = (String) baseDao.select("PRJ010115DAO.getDocSn", map);
							map.put("DOC_SN", docSn);
							baseDao.update("PRJ010115DAO.updateDocSn", map);		// 문서번호 갱신(부모테이블)
						}
						baseDao.insert("PRJ010115DAO.insertDocRgs", map);		// 문서 등록 추가
					}

					
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("PRJ010115DAO.deleteCtgryFile", map);
					baseDao.delete("PRJ010115DAO.deleteDocRgs", map);
					/*

					map.put("DOC_SN", "");

					// 문서번호 갱신(부모테이블)
					baseDao.update("PRJ010115DAO.updateDocSn", map);
					*/
					break;
			}
			resultList.add(map);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("output1", outDsMap);
	}
	
	
}
