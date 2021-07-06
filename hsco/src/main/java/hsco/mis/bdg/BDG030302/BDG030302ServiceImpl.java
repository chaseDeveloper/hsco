package hsco.mis.bdg.BDG030302;

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
 * @Class Name   	: BDG030302ServiceImpl.java
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

@Service("BDG030302Service")
public class BDG030302ServiceImpl extends BaseService implements BDG030302Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/************************************
	 * BDG030302
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
		outDsMap1.setRowMaps((List<Map>) baseDao.list("BDG030302DAO.selectStacntGrp", inMap)); // 예산결산(계정과목단위) 조회
		outDsMap2.setRowMaps((List<Map>) baseDao.list("BDG030302DAO.selectInpYn", inMap)); // 입력가능여부 조회
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
		outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030302DAO.selectStacntDetail", inMap)); // 예산결산(상세) 조회
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "rawtypes" })
	public void saveExecutCyfd(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		Map inMap2 = null;
		DataSetMap inDsMap2 = (DataSetMap) inDataset.get("input2");
		if (inDsMap2 != null) {
			inMap2 = inDsMap2.get(0);
		}
		
		String yearSe = (String) inMap.get("YEAR_SE");
		if("1".equals(yearSe)) {	// 2017년 이하
			DataSetMap list = (DataSetMap) inDataset.get("input3");
			for (int x = 0; x < list.size(); x++) {
				Map map = list.get(x);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				switch (rowType) {
					case DataSet.ROW_TYPE_UPDATED:
						baseDao.update("BDG030302DAO.updateCyfdDcsnAt", map); // 이월확정여부 갱신
						break;
				}
			}
			baseDao.update("BDG030302DAO.updateExecutCyfd", inMap2); // 실행예산 이월금액 갱신
		}
		else {						// 2018년 이상
			DataSetMap list = (DataSetMap) inDataset.get("input4");
			for (int x = 0; x < list.size(); x++) {
				Map map = list.get(x);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				switch (rowType) {
					case DataSet.ROW_TYPE_UPDATED:
						baseDao.update("BDG030302DAO.updateCyfdDcsnAtAll", map); // 이월확정여부 갱신
						break;
				}
			}
			baseDao.update("BDG030302DAO.updateExecutCyfd", inMap2); // 실행예산 이월금액 갱신
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
		outDsMap.setRowMaps((List<Map>) baseDao.list("BDG030302DAO.selectPrint", inMap));
		outDataset.put("output1", outDsMap);
	}

}
