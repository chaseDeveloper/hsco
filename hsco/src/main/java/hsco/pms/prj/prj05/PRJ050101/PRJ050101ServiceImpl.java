package hsco.pms.prj.prj05.PRJ050101;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("PRJ050101Service")
public class PRJ050101ServiceImpl extends BaseService {

	/**
	 * 사업공종코드 조회
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
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ050101.mList", inMap));

		outDataset.put("output1", outDsMap);
	}


	/**
	 * 공사구역, 공정코드 조회
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
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ050101.rList", inMap));

		outDataset.put("output1", outDsMap);

		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>)baseDao.list("PRJ050101.r2List", inMap));

		outDataset.put("output2", outDsMap2);
	}


	/**
	 * 공사순번 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void r3List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ050101.r3List", inMap));

		outDataset.put("output1", outDsMap);
	}


	/**
	 * 엑셀다운로드 자료 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void xlsList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ050101.xlsList", inMap));

		outDataset.put("output1", outDsMap);
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
		iRow += mSave(tranInfo, inVar, inDataset, outVar, outDataset);
		iRow += rSave(tranInfo, inVar, inDataset, outVar, outDataset);
		iRow += r2Save(tranInfo, inVar, inDataset, outVar, outDataset);
		iRow += r3Save(tranInfo, inVar, inDataset, outVar, outDataset);
		return iRow;
	}


	/**
	 * 사업공종코드 저장
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
				baseDao.insert("PRJ050101.mC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("PRJ050101.mU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				baseDao.delete("PRJ050101.r3D", map);
				baseDao.delete("PRJ050101.r2D", map);
				baseDao.delete("PRJ050101.rD", map);
				iRow += baseDao.delete("PRJ050101.mD", map);
				break;
			}
		}
		return iRow;
	}


	/**
	 * 공사구역 저장
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
				baseDao.insert("PRJ050101.rC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("PRJ050101.rU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				baseDao.delete("PRJ050101.r3D", map);
				baseDao.delete("PRJ050101.r2D", map);
				iRow += baseDao.delete("PRJ050101.rD", map);
				break;
			}
		}
		return iRow;
	}


	/**
	 * 공정코드 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int r2Save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input3");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("PRJ050101.r2C", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("PRJ050101.r2U", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				baseDao.delete("PRJ050101.r3D", map);
				iRow += baseDao.delete("PRJ050101.r2D", map);
				break;
			}
		}
		return iRow;
	}


	/**
	 * 공정순번 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int r3Save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input4");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("PRJ050101.r3C", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("PRJ050101.r3U", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("PRJ050101.r3D", map);
				break;
			}
		}
		return iRow;
	}


	/**
	 * 엑셀 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	public int xSave( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		String exMsgAdd = null;

		try{
			exMsgAdd = "공종코드";
			iRow += xDelete(tranInfo, inVar, inDataset, outVar, outDataset);
			iRow += mSave(tranInfo, inVar, inDataset, outVar, outDataset);
			exMsgAdd = "공사구역";
			iRow += rSave(tranInfo, inVar, inDataset, outVar, outDataset);
			exMsgAdd = "공정코드";
			iRow += r2Save(tranInfo, inVar, inDataset, outVar, outDataset);
			exMsgAdd = "공정순번";
			iRow += r3Save(tranInfo, inVar, inDataset, outVar, outDataset);
		}
		catch(Exception ex){
			String exMessage = ExceptionUtils.getRootCauseMessage(ex);
			String exMsgId = null;
			if(exMessage.indexOf("ORA-00001") != -1){
				exMsgId = "info.항목.중복";		// {0}가 중복되었습니다.
				//				exMsgAdd = "공종코드";
			}
			else if(exMessage.indexOf("ORA-02291") != -1){
				exMsgId = "info.데이터.없음";	// {0}
				exMsgAdd = "부모키가 없습니다.";
			}
			else{
				exMsgId = "fail.정보등록.실패";	// {0} 등록을 실패하였습니다.
				exMsgAdd = "엑셀자료";
			}
			throw new NexaServiceException(exMsgId, exMsgAdd);
		}

		return iRow;
	}

	//  삭제
	@SuppressWarnings({ "rawtypes" })
	public int xDelete( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input0");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);

			iRow += baseDao.delete("PRJ050101.r3D", map);
			iRow += baseDao.delete("PRJ050101.r2D", map);
			iRow += baseDao.delete("PRJ050101.rD", map);
			iRow += baseDao.delete("PRJ050101.mD", map);
		}
		return iRow;
	}
}
