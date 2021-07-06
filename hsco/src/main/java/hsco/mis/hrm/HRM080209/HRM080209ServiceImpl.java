package hsco.mis.hrm.HRM080209;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HRM080209Service.java
 * @Description     : 인사교육관리 서비스임플 클래스
 * @author          : 김형태
 * @since           : 2017. 06. 13.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017.06.13.                     김형태              최초생성
 * </pre>  
 */

@Service("HRM080209Service")
public class HRM080209ServiceImpl extends BaseService implements HRM080209Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="FileUploadService")
	FileUploadServiceImpl FileUploadService;
	
	
	/**
	 * 위탁교육 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectTrueduList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080209DAO.selectTrueduList", inMap));
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 위탁교육 서브 조회(첨부파일, 교육만족도)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectTrueduSub( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		// 첨부파일
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
		outDataset.put("output1", outDsMap1);
		
		// 교육만족도
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM080209DAO.selectEdcStsfdgList", inMap));
		outDataset.put("output2", outDsMap2);
	}
	
	/**
	 * 첨부파일 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFileList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
		outDataset.put("output1", outDsMap1);
	}
	
	/**
	 * 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void save( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		// 위탁교육
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");	
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					DataSetMap outDsMap = new DataSetMap();
					outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080209DAO.selectEdcTargetRank", map));
					String edcPriort = outDsMap.get(0).get("EDC_REQST_RANK").toString();
					map.put("EDC_PRIORT", edcPriort);
					baseDao.insert("HRM080209DAO.insertTruedu", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HRM080209DAO.updateTruedu", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					// 첨부파일 삭제
					if (!StringUtil.isNull((String)map.get("FILE_SN"))) {
						FileUploadService.deleteFileAll((String)map.get("FILE_SN"));
					}
					baseDao.delete("HRM080209DAO.deleteEdcStsfdgAll", map);		// 교육만족도 삭제
					baseDao.delete("HRM080209DAO.deleteTruedu", map);			// 위탁교육 삭제
					break;
			}
		}
		
		// 교육만족도
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");	
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HRM080209DAO.updateEdcStsfdg", map);
					break;
			}	
		}
		
	}

}
