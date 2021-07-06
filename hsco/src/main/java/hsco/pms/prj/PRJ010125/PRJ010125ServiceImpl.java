package hsco.pms.prj.PRJ010125;

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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ010125ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2017. 11. 08.
 * @version      	: 1.0
 * @see          	:
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 11. 08.                  김형태              최초생성
 * </pre>
 */

@Service("PRJ010125Service")
public class PRJ010125ServiceImpl extends BaseService implements PRJ010125Service {

	protected Logger	log	= LoggerFactory.getLogger(this.getClass());

	// 조회(비상연락망전화번호, 사업소전화번호마스터)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEmgncContactNtwk(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("PRJ010125DAO.selectEmgncContactNtwkTelno", inMap));
		outDataset.put("output1", outDsMap1);

		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("PRJ010125DAO.selectBizplcTelnoMastr", inMap));
		outDataset.put("output2", outDsMap2);
	}

	// 상세조회(사업소전화번호상세(사원, 외부업체)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBizplcTelnoDetail(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("PRJ010125DAO.selectBizplcTelnoDetail1", inMap));
		outDataset.put("output1", outDsMap1);

		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("PRJ010125DAO.selectBizplcTelnoDetail2", inMap));
		outDataset.put("output2", outDsMap2);
	}

	// 저장
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		// 비상연락망전화번호
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("PRJ010125DAO.insertEmgncContactNtwk", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("PRJ010125DAO.updateEmgncContactNtwk", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("PRJ010125DAO.deleteEmgncContactNtwk", map);
				break;
			}
		}
		
		// 사업소전화번호마스터
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		String nextBizplcSn = null;
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				nextBizplcSn = (String) baseDao.select("PRJ010125DAO.selectBizplcSn", map);
				map.put("BIZPLC_SN", nextBizplcSn);
				baseDao.insert("PRJ010125DAO.insertBizplcTelnoMastr", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("PRJ010125DAO.updateBizplcTelnoMastr", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("PRJ010125DAO.deleteBizplcTelnoDetailAll", map);
				baseDao.delete("PRJ010125DAO.deleteBizplcTelnoMastr", map);
				break;
			}
		}
		
		// 사업소전화번호상세(사원)
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < list3.size(); x++) {
			Map map = list3.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			String bizplcSn = (String) map.get("BIZPLC_SN");
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				// 사업소순번 값이 없고, 다음사업소순번 값이 있을 경우 해당 값으로 교체
				if("".equals(bizplcSn) || bizplcSn == null) {
					if(nextBizplcSn != null) {
						map.put("BIZPLC_SN", nextBizplcSn);
					}
				}
				baseDao.insert("PRJ010125DAO.insertBizplcTelnoDetail", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("PRJ010125DAO.updateBizplcTelnoDetail", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("PRJ010125DAO.deleteBizplcTelnoDetail", map);
				break;
			}
		}
		
		// 사업소전화번호상세(외부업체)
		DataSetMap list4 = (DataSetMap) inDataset.get("input4");
		for (int x = 0; x < list4.size(); x++) {
			Map map = list4.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			String bizplcSn = (String) map.get("BIZPLC_SN");
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				// 사업소순번 값이 없고, 다음사업소순번 값이 있을 경우 해당 값으로 교체
				if("".equals(bizplcSn) || bizplcSn == null) {
					if(nextBizplcSn != null) {
						map.put("BIZPLC_SN", nextBizplcSn);
					}
				}
				baseDao.insert("PRJ010125DAO.insertBizplcTelnoDetail", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("PRJ010125DAO.updateBizplcTelnoDetail", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("PRJ010125DAO.deleteBizplcTelnoDetail", map);
				break;
			}
		}
	}

}
