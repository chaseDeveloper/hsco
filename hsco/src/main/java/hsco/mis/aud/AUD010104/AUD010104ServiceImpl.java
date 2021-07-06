package hsco.mis.aud.AUD010104;

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

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;


/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD010104ServiceImpl.java
 * @Description     : 내외부감사진행관리를 관리하는 서비스 구현체 클래스  
 * @author          : 김병진
 * @since           : 2015. 06. 18.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 06. 18.      김병진             최초생성
 * </pre>  
 */
@Service("AUD010104Service")
public class AUD010104ServiceImpl extends BaseService implements AUD010104Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="FileUploadService")
	FileUploadServiceImpl FileUploadService;
	
	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;    
	
	/**
	 * 내외부 감사관리 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectInExAdList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("AUD010104DAO.selectInExAdList", inMap));
		outDataset.put("output01", outDsMap);
	}
	
	/**
	 * 탭 조회(감사일지, 감사자료, 확인서, 현지조치요구서)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAuditProgrsManage( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map inMap1 = null;
		Map inMap2 = null;
		DataSetMap inDsMap1 = (DataSetMap)inDataset.get("input1");
		DataSetMap inDsMap2 = (DataSetMap)inDataset.get("input2");
		
		if (inDsMap1 != null) {
			inMap1 = inDsMap1.get(0);
		}
		if (inDsMap2 != null) {
			inMap2 = inDsMap2.get(0);
		}
		
		// 감사일지
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("AUD010104DAO.selectDiaryList", inMap1));
		outDataset.put("output1", outDsMap1);
		
		// 감사자료
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("AUD010104DAO.selectDtaList", inMap1));
		outDataset.put("output2", outDsMap2);
		
		// 확인서
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap2));
		outDataset.put("output3", outDsMap3);
		
		// 현지조치요구서
		DataSetMap outDsMap4 = new DataSetMap();
		outDsMap4.setRowMaps((List<Map>) baseDao.list("AUD010104DAO.selectAMDList", inMap1));
		outDataset.put("output4", outDsMap4);
		
		// 감사대상부서
		DataSetMap outDsMap5 = new DataSetMap();
		outDsMap5.setRowMaps((List<Map>) baseDao.list("AUD010104DAO.selectAuditDept", inMap1));
		outDataset.put("output5", outDsMap5);
		
		// 감사인
		DataSetMap outDsMap6 = new DataSetMap();
		outDsMap6.setRowMaps((List<Map>) baseDao.list("AUD010104DAO.selectAuditComposi", inMap1));
		outDataset.put("output6", outDsMap6);
	}
	
	/**
	 * 첨부파일 조회(감사자료)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFileList1( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
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
	 * 첨부파일 조회(확인서)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFileList2( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
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
	 * 첨부파일 조회(현지조치요구서)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFileList3( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
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
	@SuppressWarnings({ "rawtypes" })
	public void save( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		// 감사일지
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");	
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("AUD010104DAO.DiaryListC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				baseDao.update("AUD010104DAO.DiaryListU", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("AUD010104DAO.DiaryListD", map);
				break;
			}
		}
		
		// 감사자료
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");	
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("AUD010104DAO.DtaListC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				baseDao.update("AUD010104DAO.DtaListU", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				// 첨부파일 삭제
				if (!StringUtil.isNull((String)map.get("FILE_SN"))) {
					FileUploadService.deleteFileAll((String)map.get("FILE_SN"));
				}
				baseDao.delete("AUD010104DAO.DtaListD", map);
				break;
			}
		}
		
		// 현지조치요구서
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");	
		for (int x = 0; x < list3.size(); x++) {
			Map map = list3.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("AUD010104DAO.AMDListC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				baseDao.update("AUD010104DAO.AMDListU", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				// 첨부파일 삭제
				if (!StringUtil.isNull((String)map.get("FILE_SN"))) {
					FileUploadService.deleteFileAll((String)map.get("FILE_SN"));
				}
				baseDao.delete("AUD010104DAO.AMDListD", map);
				break;
			}
		}
		
	}

}
