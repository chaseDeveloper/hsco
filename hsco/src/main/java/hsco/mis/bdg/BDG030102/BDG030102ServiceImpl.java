package hsco.mis.bdg.BDG030102;

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
 * @Class Name   	: BDG030102ServiceImpl.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 07. 20.
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
 *  2015. 07. 20.                  정윤원                최초생성
 * </pre>
 */

@Service("BDG030102Service")
public class BDG030102ServiceImpl extends BaseService implements BDG030102Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/************************************
	 * BDG030102
	 *************************************/

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectStacntGrp(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("BDG030102DAO.selectStacntGrp", inMap)); // 예산결산(계정과목단위) 조회
		outDsMap2.setRowMaps((List<Map>) baseDao.list("BDG030102DAO.selectInpYn", inMap)); // 입력가능여부 조회
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectStacntDetail(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030102DAO.selectStacntDetail", inMap)); // 예산결산(상세) 조회
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "rawtypes" })
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("BDG030102DAO.insertCyfdBudget", map); // 이월예산 추가
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("BDG030102DAO.updateCyfdBudget", map); // 이월예산 수정
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("BDG030102DAO.deleteCyfdBudget", map); // 이월예산 삭제
					break;
			}
		}
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPrint(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030102DAO.selectPrint", inMap));
		outDataset.put("output1", outDsMap);
	}
}
