package hsco.pms.prj.prj05.PRJ050401;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.pms.prj.PrjServiceImpl;

@Service("PRJ050401Service")
public class PRJ050401ServiceImpl extends BaseService {

	@Resource(name = "PRJService")
	protected PrjServiceImpl prjSvc;

	private final static String sPAGE_ID = "PRJ050401.";

	// 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void listById(String qryId, String inputNo, String outputNo,
						Map<String, DataSetMap> inDataset,
						Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get(inputNo);
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list(qryId, inMap));

		outDataset.put(outputNo, outDsMap);
	}

	// 기성내역 조회
	public void mList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		listById(sPAGE_ID+"mList", "input1", "output1", inDataset, outDataset);
	}

	// 상세 조회 - 감독원, 기성양식구분
	public void rList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		listById(sPAGE_ID+"rList", "input1", "output1", inDataset, outDataset);		// 감독원 조회
	}

	//  저장
	
	public int save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		int iRow = 0;
		iRow += mSave(tranInfo, inVar, inDataset, outVar, outDataset);
		iRow += rSave(tranInfo, inVar, inDataset, outVar, outDataset);
		return iRow;
	}

	//  저장
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
					baseDao.insert("PRJ050401.mC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("PRJ050401.mU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("PRJ050401.rD", map);
					iRow += baseDao.delete("PRJ050401.mD", map);
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

		DataSetMap list = (DataSetMap) inDataset.get("input2");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("PRJ050401.rC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("PRJ050401.rU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("PRJ050401.rD", map);
					break;
			}
		}
		return iRow;
	}

	//  전자결재 반영
	@SuppressWarnings({ "rawtypes" })
	public int approve( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			iRow += baseDao.update("PRJ050401.approveU", map);	// 전자결재번호 저장
			baseDao.insert("PRJ050401.auditC", map);			// 일상감사 추가
		}
		return iRow;
	}
}
