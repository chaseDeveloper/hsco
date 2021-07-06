package hsco.pms.prj.PRJ010102;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ010102ServiceImpl.java
 * @Description  	: 
 * @author       	: 이수지
 * @since        	: 2017. 10. 31.
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
 *  2017. 10. 31.                  이수지                최초생성
 * </pre>
 */

@Service("PRJ010102Service")
public class PRJ010102ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDsMain(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010102DAO.selectDs_Main", inMap));
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveDsMain(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		String actvCsSn = null;
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					actvCsSn = (String)baseDao.select("PRJ010102DAO.getactvCsSn");
					map.put("ACTV_CS_SN", actvCsSn);
					baseDao.insert("PRJ010102DAO.insertDs_Main", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("PRJ010102DAO.updateDs_Main", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("PRJ010102DAO.deleteDs_Sub", map);
					baseDao.delete("PRJ010102DAO.deleteDs_Main", map);
					break;
			}
		}

		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if(!StringUtils.isEmpty(actvCsSn)) {
						map.put("ACTV_CS_SN", actvCsSn);
					}
					baseDao.insert("PRJ010102DAO.insertDs_Sub", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("PRJ010102DAO.updateDs_Sub", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("PRJ010102DAO.deleteDs_Sub", map);
					break;
			}
		}
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDsSub(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010102DAO.selectDs_Sub", inMap));
		outDataset.put("output1", outDsMap);
	}

}
