package hsco.mis.ctr.CTR030100;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CTR030100ServiceImpl.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 10. 12.
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
 *  2015. 10. 12.                  정윤원                최초생성
 * </pre>
 */
@Service("CTR030100Service")
public class CTR030100ServiceImpl extends BaseService implements CTR030100Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCntrct(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR030100DAO.selectCntrct", inMap));
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectTab(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		// CTR030100_T01
		DataSetMap outDsMap1Tab1 = new DataSetMap();
		outDsMap1Tab1.setRowMaps((List<Map>) baseDao.list("CTR030100_T01DAO.selectCntrctJobProcessCrse", inMap));

		// CTR030100_T02
		DataSetMap outDsMap2Tab1 = new DataSetMap();
		DataSetMap outDsMap2Tab2 = new DataSetMap();
		outDsMap2Tab1.setRowMaps((List<Map>) baseDao.list("CTR030100_T02DAO.selectCurMangr", inMap)); // 현행감독관
		outDsMap2Tab2.setRowMaps((List<Map>) baseDao.list("CTR030100_T02DAO.selectMangrReqstDtls", inMap)); // 감독관신청내역

		// CTR030100_T03
		DataSetMap outDsMap3Tab1 = new DataSetMap();
		outDsMap3Tab1.setRowMaps((List<Map>) baseDao.list("CTR030100_T03DAO.selectCntrctBudget", inMap));

		// CTR030100_T04
		DataSetMap outDsMap4Tab1 = new DataSetMap();
		outDsMap4Tab1.setRowMaps((List<Map>) baseDao.list("CTR030100_T04DAO.selectBidDtls", inMap));

		// CTR030100_T05
		DataSetMap outDsMap5Tab1 = new DataSetMap();
		DataSetMap outDsMap5Tab2 = new DataSetMap();
		outDsMap5Tab1.setRowMaps((List<Map>) baseDao.list("CTR030100_T05DAO.selectEntrpsAcctoCntrctDtls", inMap));
		outDsMap5Tab2.setRowMaps((List<Map>) baseDao.list("CTR030100_T05DAO.selectInorgCtnuCntrwk", inMap));

		// CTR030100_T06
		DataSetMap outDsMap6Tab1 = new DataSetMap();
		outDsMap6Tab1.setRowMaps((List<Map>) baseDao.list("CTR030100_T06DAO.selectEntrpsAcctoSubcntrCnt", inMap));

		// CTR030100_T07
		DataSetMap outDsMap7Tab1 = new DataSetMap();
		DataSetMap outDsMap7Tab2 = new DataSetMap();
		DataSetMap outDsMap7Tab3 = new DataSetMap();
		outDsMap7Tab1.setRowMaps((List<Map>) baseDao.list("CTR030100_T07DAO.selectCntrctAssrncDtls", inMap));
		outDsMap7Tab2.setRowMaps((List<Map>) baseDao.list("CTR030100_T07DAO.selectFlawAssrncDtls", inMap));
		outDsMap7Tab3.setRowMaps((List<Map>) baseDao.list("CTR030100_T07DAO.selectEntrpsAcctoSldrtyAssr", inMap));

		// CTR030100_T08
		DataSetMap outDsMap8Tab1 = new DataSetMap();
		outDsMap8Tab1.setRowMaps((List<Map>) baseDao.list("CTR030100_T08DAO.selectCditPrsszr", inMap));

		// CTR030100_T09

		// CTR030100_T10
		DataSetMap outDsMap10Tab1 = new DataSetMap();
		DataSetMap outDsMap10Tab2 = new DataSetMap();
		DataSetMap outDsMap10Tab3 = new DataSetMap();
		outDsMap10Tab1.setRowMaps((List<Map>) baseDao.list("CTR030100_T10DAO.selectCntrctChange", inMap));
		outDsMap10Tab2.setRowMaps((List<Map>) baseDao.list("CTR030100_T10DAO.selectEntrpsAcctoCntrctChan", inMap));
		outDsMap10Tab3.setRowMaps((List<Map>) baseDao.list("CTR030100_T10DAO.selectEntrpsCntrctAssrncCha", inMap));

		// CTR030100_T11
		DataSetMap outDsMap11Tab1 = new DataSetMap();
		outDsMap11Tab1.setRowMaps((List<Map>) baseDao.list("CTR030100_T11DAO.selectCntrctThngDetail", inMap));

		// CTR030100_T12
		DataSetMap outDsMap12Tab1 = new DataSetMap();
		outDsMap12Tab1.setRowMaps((List<Map>) baseDao.list("CTR030100_T12DAO.selectDelayIndmnty", inMap));

		// CTR030100_T13
		DataSetMap outDsMap13Tab1 = new DataSetMap();
		outDsMap13Tab1.setRowMaps((List<Map>) baseDao.list("CTR030100_T13DAO.selectDsgnrSprvisor", inMap));

		outDataset.put("output1Tab1", outDsMap1Tab1);
		outDataset.put("output2Tab1", outDsMap2Tab1);
		outDataset.put("output2Tab2", outDsMap2Tab2);
		outDataset.put("output3Tab1", outDsMap3Tab1);
		outDataset.put("output4Tab1", outDsMap4Tab1);
		outDataset.put("output5Tab1", outDsMap5Tab1);
		outDataset.put("output5Tab2", outDsMap5Tab2);
		outDataset.put("output6Tab1", outDsMap6Tab1);
		outDataset.put("output7Tab1", outDsMap7Tab1);
		outDataset.put("output7Tab2", outDsMap7Tab2);
		outDataset.put("output7Tab3", outDsMap7Tab3);
		outDataset.put("output8Tab1", outDsMap8Tab1);
		outDataset.put("output10Tab1", outDsMap10Tab1);
		outDataset.put("output10Tab2", outDsMap10Tab2);
		outDataset.put("output10Tab3", outDsMap10Tab3);
		outDataset.put("output11Tab1", outDsMap11Tab1);
		outDataset.put("output12Tab1", outDsMap12Tab1);
		outDataset.put("output13Tab1", outDsMap13Tab1);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectTp6(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap6Tab1 = new DataSetMap();
		outDsMap6Tab1.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
		outDataset.put("output6Tab1", outDsMap6Tab1);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveCntrct(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		String cntrctNo = "";
		DataSetMap listSrch = (DataSetMap) inDataset.get("inputSrch");
		Map srchMap = listSrch.get(0);

		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			// 계약삭제의 경우 별도의 함수로 분리
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					cntrctNo = (String) baseDao.select("CTR030100DAO.selectCntrctNo", map); // 부모Key에 대하여 미리 get(list2와 동시에 insert 하는 경우)
					map.put("CNTRCT_NO", cntrctNo);
					baseDao.insert("CTR030100DAO.insertCntrct", map);

					srchMap.put("CNTRCT_NO", map.get("CNTRCT_NO"));
					srchMap.put("CNTRCT_NM", map.get("CNTRCT_NM"));
					DataSetMap outDsMap = new DataSetMap();
					outDsMap.setRowMaps((List<Map>) baseDao.list("CTR030100DAO.selectCntrct", srchMap));
					outDataset.put("outputSrch", outDsMap);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100DAO.updateCntrct", map);
					break;
			}
		}

		// [탭02] 감독관
		DataSetMap input2Tab1 = (DataSetMap) inDataset.get("input2Tab1");
		for (int x = 0; x < input2Tab1.size(); x++) {
			Map map = input2Tab1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T02DAO.CntrctMangrC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T02DAO.CntrctMangrU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("CTR030100_T02DAO.CntrctMangrD", map);
					break;
			}
		}

		// [탭03] 예산배정
		DataSetMap input3Tab1 = (DataSetMap) inDataset.get("input3Tab1");
		for (int x = 0; x < input3Tab1.size(); x++) {
			Map map = input3Tab1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T03DAO.CntrctBudgetC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T03DAO.CntrctBudgetU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("CTR030100_T03DAO.CntrctBudgetD", map);
					break;
			}
		}

		// [탭04] 입찰공고
		DataSetMap input4Tab1 = (DataSetMap) inDataset.get("input4Tab1");
		for (int x = 0; x < input4Tab1.size(); x++) {
			Map map = input4Tab1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T04DAO.insertBidDtls", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T04DAO.updateBidDtls", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					map.put("PARENT_LEVEL", "0"); // Level 0 : 자식이 존재하지 않는 Leaf Table
					baseDao.delete("CTR030100_T04DAO.deleteBidDtls", map);
					break;
			}
		}

		// [탭05] 계약업체
		DataSetMap input5Tab1 = (DataSetMap) inDataset.get("input5Tab1");
		for (int x = 0; x < input5Tab1.size(); x++) {
			Map map = input5Tab1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T05DAO.insertEntrpsAcctoCntrctDtls", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T05DAO.updateEntrpsAcctoCntrctDtls", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					// Parent Mode set
					map.put("PARENT_LEVEL", "2"); // Level 2 : 계약업체

					// delete Child Data
					baseDao.delete("CTR030100_T06DAO.deleteEntrpsAcctoSubcntrCnt", map);     // 하도급업체
					baseDao.delete("CTR030100_T07DAO.deleteCntrctAssrncDtls", map);          // 계약보증
					baseDao.delete("CTR030100_T07DAO.deleteFlawAssrncDtls", map);            // 하자보증
					baseDao.delete("CTR030100_T07DAO.deleteEntrpsAcctoSldrtyAssr", map);     // 업체별연대보증
					baseDao.delete("CTR030100_T10DAO.deleteEntrpsAcctoCntrctChan", map);     // 업체별계약변경
					baseDao.delete("CTR030100_T10DAO.deleteEntrpsCntrctAssrncCha", map);     // 업체별계약보증변경

					// delete Main Data
					baseDao.delete("CTR030100_T05DAO.deleteEntrpsAcctoCntrctDtls", map);
					break;
			}
		}

		// [탭01] 연부액
		DataSetMap input5Tab2 = (DataSetMap) inDataset.get("input5Tab2");
		for (int x = 0; x < input5Tab2.size(); x++) {
			Map map = input5Tab2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T05DAO.insertInorgCtnuCntrwk", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T05DAO.updateInorgCtnuCntrwk", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					map.put("PARENT_LEVEL", "0"); // Level 0 : 자식이 존재하지 않는 Leaf Table
					baseDao.delete("CTR030100_T05DAO.deleteInorgCtnuCntrwk", map);
					break;
			}
		}

		// [탭06] 하도급업체
		DataSetMap input6Tab1 = (DataSetMap) inDataset.get("input6Tab1");
		for (int x = 0; x < input6Tab1.size(); x++) {
			Map map = input6Tab1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T06DAO.insertEntrpsAcctoSubcntrCnt", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T06DAO.updateEntrpsAcctoSubcntrCnt", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					map.put("PARENT_LEVEL", "0"); // Level 0 : 자식이 존재하지 않는 Leaf Table
					baseDao.delete("CTR030100_T06DAO.deleteEntrpsAcctoSubcntrCnt", map);
					break;
			}
		}

		// [탭07] 보증
		DataSetMap input7Tab1 = (DataSetMap) inDataset.get("input7Tab1");
		for (int x = 0; x < input7Tab1.size(); x++) {
			Map map = input7Tab1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T07DAO.insertCntrctAssrncDtls", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T07DAO.updateCntrctAssrncDtls", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					map.put("PARENT_LEVEL", "0"); // Level 0 : 자식이 존재하지 않는 Leaf Table
					baseDao.delete("CTR030100_T07DAO.deleteCntrctAssrncDtls", map);
					break;
			}
		}

		// [탭07] 보증
		DataSetMap input7Tab2 = (DataSetMap) inDataset.get("input7Tab2");
		for (int x = 0; x < input7Tab2.size(); x++) {
			Map map = input7Tab2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T07DAO.insertFlawAssrncDtls", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T07DAO.updateFlawAssrncDtls", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					map.put("PARENT_LEVEL", "0"); // Level 0 : 자식이 존재하지 않는 Leaf Table
					baseDao.delete("CTR030100_T07DAO.deleteFlawAssrncDtls", map);
					break;
			}
		}

		// [탭07] 보증
		DataSetMap input7Tab3 = (DataSetMap) inDataset.get("input7Tab3");
		for (int x = 0; x < input7Tab3.size(); x++) {
			Map map = input7Tab3.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T07DAO.insertEntrpsAcctoSldrtyAssr", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T07DAO.updateEntrpsAcctoSldrtyAssr", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					map.put("PARENT_LEVEL", "0"); // Level 0 : 자식이 존재하지 않는 Leaf Table
					baseDao.delete("CTR030100_T07DAO.deleteEntrpsAcctoSldrtyAssr", map);
					break;
			}
		}

		// [탭08] 채권가압류
		DataSetMap input8Tab1 = (DataSetMap) inDataset.get("input8Tab1");
		for (int x = 0; x < input8Tab1.size(); x++) {
			Map map = input8Tab1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T08DAO.insertCditPrsszr", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T08DAO.updateCditPrsszr", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					map.put("PARENT_LEVEL", "0"); // Level 0 : 자식이 존재하지 않는 Leaf Table
					baseDao.delete("CTR030100_T08DAO.deleteCditPrsszr", map);
					break;
			}
		}

		// [탭10] 계약변경
		DataSetMap input10Tab1 = (DataSetMap) inDataset.get("input10Tab1");
		for (int x = 0; x < input10Tab1.size(); x++) {
			Map map = input10Tab1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T10DAO.insertCntrctChange", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T10DAO.updateCntrctChange", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					map.put("PARENT_LEVEL", "0"); // Level 0 : 자식이 존재하지 않는 Leaf Table
					baseDao.delete("CTR030100_T10DAO.deleteCntrctChange", map);
					break;
			}
		}

		// [탭10] 계약변경
		DataSetMap input10Tab2 = (DataSetMap) inDataset.get("input10Tab2");
		for (int x = 0; x < input10Tab2.size(); x++) {
			Map map = input10Tab2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T10DAO.insertEntrpsAcctoCntrctChan", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T10DAO.updateEntrpsAcctoCntrctChan", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					map.put("PARENT_LEVEL", "0"); // Level 0 : 자식이 존재하지 않는 Leaf Table
					baseDao.delete("CTR030100_T10DAO.deleteEntrpsAcctoCntrctChan", map);
					break;
			}
		}

		// [탭10] 계약변경
		DataSetMap input10Tab3 = (DataSetMap) inDataset.get("input10Tab3");
		for (int x = 0; x < input10Tab3.size(); x++) {
			Map map = input10Tab3.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T10DAO.insertEntrpsCntrctAssrncCha", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T10DAO.updateEntrpsCntrctAssrncCha", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					map.put("PARENT_LEVEL", "0"); // Level 0 : 자식이 존재하지 않는 Leaf Table
					baseDao.delete("CTR030100_T10DAO.deleteEntrpsCntrctAssrncCha", map);
					break;
			}
		}

		// [탭11] 물품
		DataSetMap input11Tab1 = (DataSetMap) inDataset.get("input11Tab1");
		for (int x = 0; x < input11Tab1.size(); x++) {
			Map map = input11Tab1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T11DAO.insertCntrctThngDetail", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T11DAO.updateCntrctThngDetail", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					map.put("PARENT_LEVEL", "0"); // Level 0 : 자식이 존재하지 않는 Leaf Table
					baseDao.delete("CTR030100_T11DAO.deleteCntrctThngDetail", map);
					break;
			}
		}

		// [탭12] 지체배상금
		DataSetMap input12Tab1 = (DataSetMap) inDataset.get("input12Tab1");
		for (int x = 0; x < input12Tab1.size(); x++) {
			Map map = input12Tab1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T12DAO.insertDelayIndmnty", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T12DAO.updateDelayIndmnty", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					map.put("PARENT_LEVEL", "0"); // Level 0 : 자식이 존재하지 않는 Leaf Table
					baseDao.delete("CTR030100_T12DAO.deleteDelayIndmnty", map);
					break;
			}
		}

		// [탭13] 미확정채권양도
		DataSetMap input13Tab3 = (DataSetMap) inDataset.get("input13Tab1");
		for (int x = 0; x < input13Tab3.size(); x++) {
			Map map = input13Tab3.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(cntrctNo)) {
						map.put("CNTRCT_NO", cntrctNo);
					}
					baseDao.insert("CTR030100_T13DAO.insertDsgnrSprvisor", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_T13DAO.updateDsgnrSprvisor", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					map.put("PARENT_LEVEL", "0"); // Level 0 : 자식이 존재하지 않는 Leaf Table
					baseDao.delete("CTR030100_T13DAO.deleteDsgnrSprvisor", map);
					break;
			}
		}
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void deleteCntrct(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_DELETED:
					map.put("PARENT_LEVEL", "9"); // Level 9 : 계약대장 하위정보 모두 제거

					baseDao.delete("CTR030100_T02DAO.CntrctMangrAllD", map);
					baseDao.delete("CTR030100_T03DAO.CntrctBudgetAllD", map);
					baseDao.delete("CTR030100_T04DAO.deleteBidDtls", map);
					baseDao.delete("CTR030100_T05DAO.deleteInorgCtnuCntrwk", map);
					baseDao.delete("CTR030100_T06DAO.deleteEntrpsAcctoSubcntrCnt", map);
					baseDao.delete("CTR030100_T07DAO.deleteCntrctAssrncDtls", map);
					baseDao.delete("CTR030100_T07DAO.deleteFlawAssrncDtls", map);
					baseDao.delete("CTR030100_T07DAO.deleteEntrpsAcctoSldrtyAssr", map);
					baseDao.delete("CTR030100_T08DAO.deleteCditPrsszr", map);
					baseDao.delete("CTR030100_T10DAO.deleteCntrctChange", map);
					baseDao.delete("CTR030100_T10DAO.deleteEntrpsAcctoCntrctChan", map);
					baseDao.delete("CTR030100_T10DAO.deleteEntrpsCntrctAssrncCha", map);
					baseDao.delete("CTR030100_T11DAO.deleteCntrctThngDetailAll", map);
					baseDao.delete("CTR030100_T12DAO.deleteDelayIndmnty", map);
					baseDao.delete("CTR030100_T13DAO.deleteDsgnrSprvisor", map);

					baseDao.delete("CTR030100_T05DAO.deleteEntrpsAcctoCntrctDtls", map);

					baseDao.delete("CTR030100DAO.deleteCntrct", map);
					break;
			}
		}
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveNewFileSn(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		// input Map get
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		Map map = list.get(0);

		// date get
		SimpleDateFormat sDateFormat = new SimpleDateFormat("yyyyMMdd");
		long curentTime = System.currentTimeMillis();

		// FileSn calculate
		String todayStr = sDateFormat.format(curentTime);
		BigDecimal seqFileSn = (BigDecimal) baseDao.select("selectFileSn");
		String strFileSn = todayStr + "" + seqFileSn;

		// input FileSn
		BigDecimal fileSn = new BigDecimal(strFileSn);
		map.put("FILE_SN", fileSn);

		// insert into File Master
		baseDao.insert("insertAtchmnFileMast", map);

		// update to Contract Master
		baseDao.update("CTR030100_T09DAO.updateNewFileSn", map);

		// return Result Data (with FileSn)
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		outDataset.put("output1", outDsMap);
	}

}