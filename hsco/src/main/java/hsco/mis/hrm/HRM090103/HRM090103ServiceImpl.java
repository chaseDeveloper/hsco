package hsco.mis.hrm.HRM090103;

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
 * @Class Name      : HRM090103Service.java
 * @Description     : 인사총무관리 서비스임플 클래스
 * @author          : 김형태
 * @since           : 2017. 07. 27.
 * @version         : 1.0
 * @see             : 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017.07.27.                     김형태              최초생성
 * </pre>  
 */

@Service("HRM090103Service")
public class HRM090103ServiceImpl extends BaseService implements HRM090103Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="FileUploadService")
	FileUploadServiceImpl FileUploadService;
	
	
	/**
	 * 의안목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBiList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090103DAO.selectBiList", inMap));
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 서브조회(회의참석명부, 첨부파일)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMtgAtndncNmst( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		// 회의참석명부
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM090103DAO.selectMtgAtndncNmst", inMap));
		outDataset.put("output1", outDsMap1);
		
		// 첨부파일
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
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
		String sn = null;
		
		// 의안목록
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");	
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					sn = (String) baseDao.select("HRM090103DAO.selectSn", map);
					map.put("SN", sn);
					baseDao.insert("HRM090103DAO.insertBi", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HRM090103DAO.updateBi", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					// 첨부파일 삭제
					if (!StringUtil.isNull((String)map.get("FILE_SN"))) {
						FileUploadService.deleteFileAll((String)map.get("FILE_SN"));
					}
					baseDao.delete("HRM090103DAO.deleteNmstAll", map);	// 회의참석명부 모두 삭제
					baseDao.delete("HRM090103DAO.deleteBi", map);		// 의안목록 삭제
					break;
			}
		}
		
		// 회의참석명부
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");	
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			if("".equals(map.get("SN")) || map.get("SN") == null) {
				map.put("SN", sn);
			}
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("HRM090103DAO.insertNmst", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HRM090103DAO.updateNmst", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM090103DAO.deleteNmst", map);
					break;
			}	
		}
		
	}

}
