package hsco.mis.hrm.HRM030103;

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

@Service("HRM030103Service")
public class HRM030103ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 신규 사원번호 채번
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectNewEmpno(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map record = (Map) baseDao.select("HRM030103DAO.selectNewEmpno");

		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.add(record);
		outDataset.put("output1", outDsMap1);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHrMastr(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		List<Map> records1  = (List<Map>) baseDao.list("HRM030103DAO.selectHrMastr", inMap);  // 기본정보
		List<Map> records2  = (List<Map>) baseDao.list("HRM030103DAO.selectHrFamily", inMap); // 탭2  : 가족사항
		List<Map> records3  = (List<Map>) baseDao.list("HRM030103DAO.selectHrAcdmcr", inMap); // 탭3  : 학력사항
		List<Map> records4  = (List<Map>) baseDao.list("HRM030103DAO.selectHrQualf", inMap);  // 탭4  : 자격사항
		List<Map> records5  = (List<Map>) baseDao.list("HRM030103DAO.selectHrCareer", inMap); // 탭5  : 경력사항
		//List<Map> records7  = (List<Map>) baseDao.list("HRM030103DAO.selectHrBsrp", inMap);   // 탭7  : 국외출장현황사항
		List<Map> records8  = (List<Map>) baseDao.list("HRM030103DAO.selectHrGnfd", inMap);   // 탭8  : 발령사항
		List<Map> records9  = (List<Map>) baseDao.list("HRM030103DAO.selectRwardDtls", inMap);   // 탭9  : 포상내역
		List<Map> records10 = (List<Map>) baseDao.list("HRM030103DAO.selectDscplDsps", inMap);   // 탭10 : 징계내역
        List<Map> records11 = (List<Map>) baseDao.list("HRM030103DAO.selectHrFggg", inMap);   // 탭11 : 외국어


		DataSetMap outDsMap1  = new DataSetMap();
		DataSetMap outDsMap2  = new DataSetMap();
		DataSetMap outDsMap3  = new DataSetMap();
		DataSetMap outDsMap4  = new DataSetMap();
		DataSetMap outDsMap5  = new DataSetMap();
		//DataSetMap outDsMap7  = new DataSetMap();
		DataSetMap outDsMap8  = new DataSetMap();
		DataSetMap outDsMap9  = new DataSetMap();
		DataSetMap outDsMap10 = new DataSetMap();
        DataSetMap outDsMap11 = new DataSetMap();

		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		outDsMap3.setRowMaps(records3);
		outDsMap4.setRowMaps(records4);
		outDsMap5.setRowMaps(records5);
		//outDsMap7.setRowMaps(records7);
		outDsMap8.setRowMaps(records8);
		outDsMap9.setRowMaps(records9);
		outDsMap10.setRowMaps(records10);
        outDsMap11.setRowMaps(records11);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
		outDataset.put("output4", outDsMap4);
		outDataset.put("output5", outDsMap5);
		//outDataset.put("output7", outDsMap7);
		outDataset.put("output8", outDsMap8);
		outDataset.put("output9", outDsMap9);
		outDataset.put("output10", outDsMap10);
        outDataset.put("output11", outDsMap11);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectPhoto(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		List<Map> records1 = (List<Map>) baseDao.list("selectAtchmnFileList", inMap); // 첨부파일(사진)

		DataSetMap outDsMap1 = new DataSetMap();

		outDsMap1.setRowMaps(records1);

		outDataset.put("output1", outDsMap1);
	}

	@SuppressWarnings({ "rawtypes" })
	public void saveHrMastr(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		String empno = null;	// 신규등록시 사용될 사원번호 저장 변수
		
		// 인사기본정보
		DataSetMap input1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < input1.size(); x++) {
			Map map = input1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			int existAt = 0;
			
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					existAt = (int)baseDao.select("HRM030103DAO.chkEmpno", map);
					if(existAt == 0) {
						empno = (String) map.get("EMPNO");
						baseDao.insert("HRM030103DAO.insertHrMastr", map);
	                }
	                else {
	                	String errMsg = "사원번호";
	                    throw new NexaServiceException("info.항목.중복.재입력.요청", errMsg);
	                }
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM030103DAO.updateHrMastr", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM030103DAO.deleteHrFamily", map);	// 탭1 : 가족사항
					baseDao.delete("HRM030103DAO.deleteHrAcdmcr", map);	// 탭2 : 학력사항
					baseDao.delete("HRM030103DAO.deleteHrQualf",  map);	// 탭3 : 자격사항
					baseDao.delete("HRM030103DAO.deleteHrCareer", map);	// 탭4 : 경력사항
					
					baseDao.delete("HRM030103DAO.deleteHrMastr", map);
					break;
			}
		}
		
		// 탭2: 가족사항
		DataSetMap input2 = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < input2.size(); x++) {
			Map map = input2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if(empno != null){
						map.put("EMPNO", empno);
					}
					baseDao.insert("HRM030103DAO.insertHrFamily", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM030103DAO.updateHrFamily", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM030103DAO.deleteHrFamily", map);
					break;
			}
		}

		// 탭3: 학력사항
		DataSetMap input3 = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < input3.size(); x++) {
			Map map = input3.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if(empno != null){
						map.put("EMPNO", empno);
					}
					baseDao.insert("HRM030103DAO.insertHrAcdmcr", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM030103DAO.updateHrAcdmcr", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM030103DAO.deleteHrAcdmcr", map);
					break;
			}
		}
		
		// 탭4: 자격사항
		DataSetMap input4 = (DataSetMap) inDataset.get("input4");
		for (int x = 0; x < input4.size(); x++) {
			Map map = input4.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if(empno != null){
						map.put("EMPNO", empno);
					}
					baseDao.insert("HRM030103DAO.insertHrQualf", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM030103DAO.updateHrQualf", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM030103DAO.deleteHrQualf", map);
					break;
			}
		}

		// 탭5: 경력사항
		DataSetMap input5 = (DataSetMap) inDataset.get("input5");
		for (int x = 0; x < input5.size(); x++) {
			Map map = input5.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if(empno != null){
						map.put("EMPNO", empno);
					}
					baseDao.insert("HRM030103DAO.insertHrCareer", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM030103DAO.updateHrCareer", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM030103DAO.deleteHrCareer", map);
					break;
			}
		}

        
        // 탭11: 외국어
        DataSetMap input6 = (DataSetMap) inDataset.get("input6");
        for (int x = 0; x < input6.size(); x++) {
            Map map = input6.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
                case DataSet.ROW_TYPE_INSERTED:
                    if(empno != null){
                        map.put("EMPNO", empno);
                    }
                    baseDao.insert("HRM030103DAO.insertHrFggg", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED:
                    baseDao.update("HRM030103DAO.updateHrFggg", map);
                    break;
                case DataSet.ROW_TYPE_DELETED:
                    baseDao.delete("HRM030103DAO.deleteHrFggg", map);
                    break;
            }
        }
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