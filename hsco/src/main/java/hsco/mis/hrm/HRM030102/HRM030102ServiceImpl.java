package hsco.mis.hrm.HRM030102;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

@Service("HRM030102Service")
public class HRM030102ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHrMastr(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		List<Map> records = (List<Map>) baseDao.list("HRM030102DAO.selectHrMastr", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectTab(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		List<Map> records1 = (List<Map>) baseDao.list("selectAtchmnFileList", inMap); // 첨부파일(사진)
		List<Map> records2 = (List<Map>) baseDao.list("HRM030102DAO.selectHrFamily", inMap); // 탭2 : 가족사항
		List<Map> records3 = (List<Map>) baseDao.list("HRM030102DAO.selectHrAcdmcr", inMap); // 탭3 : 학력사항
		List<Map> records4 = (List<Map>) baseDao.list("HRM030102DAO.selectHrQualf", inMap);  // 탭4 : 자격사항
		List<Map> records5 = (List<Map>) baseDao.list("HRM030102DAO.selectHrCareer", inMap); // 탭5 : 경력사항

		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		DataSetMap outDsMap4 = new DataSetMap();
		DataSetMap outDsMap5 = new DataSetMap();

		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		outDsMap3.setRowMaps(records3);
		outDsMap4.setRowMaps(records4);
		outDsMap5.setRowMaps(records5);

		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
		outDataset.put("output4", outDsMap4);
		outDataset.put("output5", outDsMap5);
	}

	@SuppressWarnings("rawtypes")
	public void saveHrMastr(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap input1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < input1.size(); x++) {
			Map map = input1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("HRM030102DAO.insertHrMastr", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM030102DAO.updateHrMastr", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM030102DAO.deleteHrFamily", map);	// 탭1 : 가족사항
					baseDao.delete("HRM030102DAO.deleteHrAcdmcr", map);	// 탭2 : 학력사항
					baseDao.delete("HRM030102DAO.deleteHrQualf",  map);	// 탭3 : 자격사항
					baseDao.delete("HRM030102DAO.deleteHrCareer", map);	// 탭4 : 경력사항
					
					baseDao.delete("HRM030102DAO.deleteHrMastr", map);
					break;
			}
		}

		DataSetMap input2 = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < input2.size(); x++) {
			Map map = input2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("HRM030102DAO.insertHrFamily", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM030102DAO.updateHrFamily", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM030102DAO.deleteHrFamily", map);
					break;
			}
		}

		DataSetMap input3 = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < input3.size(); x++) {
			Map map = input3.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("HRM030102DAO.insertHrAcdmcr", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM030102DAO.updateHrAcdmcr", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM030102DAO.deleteHrAcdmcr", map);
					break;
			}
		}

		DataSetMap input4 = (DataSetMap) inDataset.get("input4");
		for (int x = 0; x < input4.size(); x++) {
			Map map = input4.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("HRM030102DAO.insertHrQualf", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM030102DAO.updateHrQualf", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM030102DAO.deleteHrQualf", map);
					break;
			}
		}

		DataSetMap input5 = (DataSetMap) inDataset.get("input5");
		for (int x = 0; x < input5.size(); x++) {
			Map map = input5.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("HRM030102DAO.insertHrCareer", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM030102DAO.updateHrCareer", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM030102DAO.deleteHrCareer", map);
					break;
			}
		}

	}

	/**
	 * 사진정보 출력
	 * 
	 * @param empno
	 * @return
	 * @throws NexaServiceException
	 */
	public byte[] htmHrPhotoR(String empno) throws NexaServiceException {
		EmpPhoto photo = (EmpPhoto) baseDao.select("HRM030102DAO.htmHrPhotoR", empno);
		return photo.getPhoto();
	}
	
	/**
	 * 금융기관코드 정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void selectFnncInsttCode( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		List<Map> records = (List<Map>) baseDao.list("ACC020102DAO.fnncInsttCodeList");
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
		
	}

}