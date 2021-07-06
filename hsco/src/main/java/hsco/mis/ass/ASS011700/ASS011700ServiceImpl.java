package hsco.mis.ass.ASS011700;

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
 * @Class Name   	: ASS011700ServiceImpl.java
 * @Description  	: 
 * @author       	: 정 민
 * @since        	: 2018. 05. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2018. 05. 16.	               정 민		         최초생성
 * </pre>  
 */
@Service("ASS011700Service")
public class ASS011700ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 재물조정관리 목록 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectPrptyMdatManageList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null && inDsMap.size() > 0)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("ASS011700DAO.selectPrptyMdatManageList", inMap));
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 재물조정관리 목록 저장, 자산마스터 수정
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void prptyMdatManageCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("ASS011700DAO.prptyMdatManageC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("ASS011700DAO.prptyMdatManageU", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("ASS011700DAO.prptyMdatManageD", map);
				break;
			}
		}
	}
	
	/**
	 * 재물조정관리 승인
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void prptyMdatConfm(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			String histSn = (String) baseDao.select("ASS011700DAO.selectAssetsMastrHistSn", map);
			map.put("HIST_SN", histSn);	// 자산마스터이력번호
			baseDao.update("ASS011700DAO.prptyMdatConfm", map);
			baseDao.update("ASS011700DAO.assetsMastrU", map);	// 자산마스터 수정
		}
	}
	
	/**
	 * 재물조정관리 승인취소
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void prptyMdatConfmCancel(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			String recoverhistSn = (String) baseDao.select("ASS011700DAO.selectRecoverHistSn", map);
			map.put("RECOVER_HIST_SN", recoverhistSn);	// 원복할 자산마스터이력번호
			baseDao.update("ASS011700DAO.assetsMastrRecover", map);	// 자산마스터 원복
			map.put("HIST_SN", "");				// 자산마스터이력번호
			baseDao.update("ASS011700DAO.prptyMdatConfm", map);
		}
	}
}
