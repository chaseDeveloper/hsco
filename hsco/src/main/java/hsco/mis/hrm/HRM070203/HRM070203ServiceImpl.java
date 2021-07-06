package hsco.mis.hrm.HRM070203;

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

@Service("HRM070203Service")
public class HRM070203ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="FileUploadService")
	FileUploadServiceImpl FileUploadService;

	/**
	 * 개인별 출장내역 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBsrpIndvdl(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		List<Map> records = (List<Map>) baseDao.list("HRM070203DAO.selectBsrpIndvdl", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 출장비 상세내역, 첨부파일 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectIndvdlExpens(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		List<Map> records1 = (List<Map>) baseDao.list("HRM070203DAO.selectIndvdlExpens", inMap);	// 출장비 상세내역 조회
		List<Map> records2 = (List<Map>) baseDao.list("selectAtchmnFileList", inMap);				// 첨부파일 조회
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);

		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
	}
	/**
	 * 출장내역 저장
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveBsrpDtl(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int bsrpSeq = 0;	// 출장순번 저장 변수
		
		// 개인별 출장내역
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					bsrpSeq = (Integer)baseDao.select("HRM070203DAO.selectBsrpSeq", map);
					map.put("BSRP_SEQ", bsrpSeq);
					baseDao.insert("HRM070203DAO.tbhrmBsrpIndvdlC", map);	// 개인별출장내역 등록
					//baseDao.insert("HRM070203DAO.tbhrmWrkcpC", map);		// 근무상황부 등록
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM070203DAO.tbhrmBsrpIndvdlU", map);	// 개인별출장내역 수정
					//baseDao.update("HRM070203DAO.tbhrmWrkcpU", map);		// 근무상황부 수정
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM070203DAO.tbhrmIndvdlExpensD", map);		// 개인별 출장비용 상세내역 삭제
					//baseDao.delete("HRM070203DAO.tbhrmWrkcpD", map);			// 근무상황부 삭제
					
					// 관련 파일 삭제
					if (!StringUtil.isNull((String)map.get("FILE_SN"))) {
						FileUploadService.deleteFileAll((String)map.get("FILE_SN"));
	                }
					baseDao.delete("HRM070203DAO.tbhrmBsrpIndvdlD", map);		// 개인별 출장내역 삭제
					break;
			}
		}
		
		// 개인별 출장비용 상세내역
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					// 출장순번키 유무 체크
					if(StringUtil.isNull((String)map.get("BSRP_SEQ"))){
						map.put("BSRP_SEQ", bsrpSeq);
					}
					baseDao.insert("HRM070203DAO.tbhrmIndvdlExpensC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM070203DAO.tbhrmIndvdlExpensU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM070203DAO.tbhrmIndvdlExpensD", map);
					break;
			}
		}

	}

}
