package hsco.pms.prj.prj05.PRJ050301;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("PRJ050301Service")
public class PRJ050301ServiceImpl extends BaseService {

	/**
	 * 공정일지 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>)baseDao.list("PRJ050301.r1List", inMap));		// 공정일지 조회
		outDataset.put("output1", outDsMap1);

		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>)baseDao.list("PRJ050301.r2List", inMap));		// 투입인원 조회
		outDataset.put("output2", outDsMap2);

		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps((List<Map>)baseDao.list("PRJ050301.r3List", inMap));		// 자재입고 조회
		outDataset.put("output3", outDsMap3);

		DataSetMap outDsMap4 = new DataSetMap();
		outDsMap4.setRowMaps((List<Map>)baseDao.list("PRJ050301.r4List", inMap));		// 중기작업 조회
		outDataset.put("output4", outDsMap4);
	}


	/**
	 * 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	public int save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		int iRow = 0;
		iRow += rSave(tranInfo, inVar, inDataset, outVar, outDataset, 1);
		iRow += rSave(tranInfo, inVar, inDataset, outVar, outDataset, 2);
		iRow += rSave(tranInfo, inVar, inDataset, outVar, outDataset, 3);
		iRow += rSave(tranInfo, inVar, inDataset, outVar, outDataset, 4);
		return iRow;
	}


	/**
	 * 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @param n
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int rSave( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset, int n) throws NexaServiceException {

		String sId = Integer.toString(n);
		DataSetMap list = (DataSetMap) inDataset.get("input" + sId);
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("PRJ050301.r" + sId + "C", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("PRJ050301.r" + sId + "U", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("PRJ050301.r" + sId + "D", map);
					break;
			}
		}
		return iRow;
	}


	/**
	 * 전일자료 복사
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int copy( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);
			
			// 금일자료 삭제
			baseDao.delete("PRJ050301.r4D", map);
			baseDao.delete("PRJ050301.r3D", map);
			baseDao.delete("PRJ050301.r2D", map);
			baseDao.delete("PRJ050301.r1D", map);

			// 전일자료 복사
			baseDao.insert("PRJ050301.r1Copy", map);
			baseDao.insert("PRJ050301.r2Copy", map);
			baseDao.insert("PRJ050301.r3Copy", map);
			baseDao.insert("PRJ050301.r4Copy", map);
			iRow = 1;
		}
		return iRow;
	}
}