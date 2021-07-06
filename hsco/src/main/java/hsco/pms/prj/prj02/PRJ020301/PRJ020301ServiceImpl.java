package hsco.pms.prj.prj02.PRJ020301;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("PRJ020301Service")
public class PRJ020301ServiceImpl extends BaseService {

	// 원가코드 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void prccdList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ020301.prccdList", inMap));

		outDataset.put("output1", outDsMap);
	}

	// 추정원가 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cdList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ020301.cdList", inMap));

		outDataset.put("output1", outDsMap);
	}

	//  조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void mList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ020301.mList", inMap));

		outDataset.put("output1", outDsMap);
	}

	//  조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ020301.rList", inMap));

		outDataset.put("output1", outDsMap);
	}

	//  조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void xlsList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ020301.xlsList", inMap));

		outDataset.put("output1", outDsMap);
	}

	//  저장
	
	public int save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		int iRow = 0;
		iRow += cdSave(tranInfo, inVar, inDataset, outVar, outDataset);
		iRow += mSave(tranInfo, inVar, inDataset, outVar, outDataset);
		iRow += rSave(tranInfo, inVar, inDataset, outVar, outDataset);
		return iRow;
	}

	//  저장
	@SuppressWarnings({ "rawtypes" })
	public int cdSave( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("PRJ020301.cdC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("PRJ020301.cdU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("PRJ020301.rD", map);
					baseDao.delete("PRJ020301.mD", map);
					iRow += baseDao.delete("PRJ020301.cdD", map);
					break;
			}
		}
		return iRow;
	}

	//  저장
	@SuppressWarnings({ "rawtypes" })
	public int mSave( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("PRJ020301.mC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("PRJ020301.mU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("PRJ020301.rD", map);
					iRow += baseDao.delete("PRJ020301.mD", map);
					break;
			}
		}
		return iRow;
	}

	//  저장
	@SuppressWarnings({ "rawtypes" })
	public int rSave( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("PRJ020301.rC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("PRJ020301.rU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("PRJ020301.rD", map);
					break;
			}
		}
		return iRow;
	}

	// 전주자료 복사
	@SuppressWarnings({ "rawtypes" })
	public int copy( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			baseDao.delete("PRJ020301.rD", map);
			baseDao.delete("PRJ020301.mD", map);
			baseDao.delete("PRJ020301.cdD", map);

			baseDao.insert("PRJ020301.copy1", map);
			baseDao.insert("PRJ020301.copy2", map);
			baseDao.insert("PRJ020301.copy3", map);
			iRow = 1;
		}
		return iRow;
	}

	// 엑셀 저장
	
	public int xSave( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		String exMsgAdd = null;

		try{
			exMsgAdd = "사업단계, 차수";
			iRow += xDelete(tranInfo, inVar, inDataset, outVar, outDataset);
			iRow += cdSave(tranInfo, inVar, inDataset, outVar, outDataset);
			exMsgAdd = "원가코드";
			iRow += mSave(tranInfo, inVar, inDataset, outVar, outDataset);
		}catch(Exception ex){
			String exMessage = ExceptionUtils.getRootCauseMessage(ex);
			String exMsgId = null;
			if(exMessage.indexOf("ORA-00001") != -1){
				exMsgId = "info.항목.중복";	// {0}가 중복되었습니다.
//				exMsgAdd = "사업단계, 차수";
			}else if(exMessage.indexOf("ORA-02291") != -1){
				exMsgId = "info.데이터.없음";	// {0}
//				exMsgAdd = "부모키가 없습니다.";
			}else{
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

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			iRow += baseDao.delete("PRJ020301.rD", map);
			iRow += baseDao.delete("PRJ020301.mD", map);
			iRow += baseDao.delete("PRJ020301.cdD", map);
		}
		return iRow;
	}
}
