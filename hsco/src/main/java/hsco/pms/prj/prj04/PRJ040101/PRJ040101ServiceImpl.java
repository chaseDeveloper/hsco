package hsco.pms.prj.prj04.PRJ040101;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("PRJ040101Service")
public class PRJ040101ServiceImpl extends BaseService {


	/**
	 * 표준업무분류코드 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void mList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ040101.mList", inMap));		// 표준업무분류코드 조회

		outDataset.put("output1", outDsMap);
	}


	/**
	 * 표준업무분류제출서류 조회
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

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ040101.rList", inMap));		// 표준업무분류제출서류 조회

		outDataset.put("output1", outDsMap);
	}


	/**
	 * 저장[CUD]
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
		iRow += mSave(tranInfo, inVar, inDataset, outVar, outDataset);				// 표준업무분류코드 저장[CUD]
		iRow += rSave(tranInfo, inVar, inDataset, outVar, outDataset);				// 표준업무분류제출서류 저장[CUD]
		return iRow;
	}


	/**
	 * 표준업무분류코드 저장[CUD]
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int mSave( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("PRJ040101.mC", map);				// 표준업무분류코드 추가
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("PRJ040101.mU", map);		// 표준업무분류코드 수정
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("PRJ040101.rD", map);				// 표준업무분류제출서류 삭제
					iRow += baseDao.delete("PRJ040101.mD", map);		// 표준업무분류코드 삭제
					break;
			}
		}
		return iRow;
	}


	/**
	 * 표준업무분류제출서류 저장[CUD]
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int rSave( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input2");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("PRJ040101.rC", map);				// 표준업무분류제출서류 추가
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("PRJ040101.rU", map);		// 표준업무분류제출서류 수정
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("PRJ040101.rD", map);		// 표준업무분류제출서류 삭제
					break;
			}
		}
		return iRow;
	}


	/**
	 * 코드 복사
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

			baseDao.delete("PRJ040101.rD", map);				// 표준업무분류제출서류 삭제
			baseDao.delete("PRJ040101.mD", map);		// 표준업무분류코드 삭제
			
			baseDao.insert("PRJ040101.copy1", map);
			baseDao.insert("PRJ040101.copy2", map);
			iRow = 1;
		}
		return iRow;
	}
}
