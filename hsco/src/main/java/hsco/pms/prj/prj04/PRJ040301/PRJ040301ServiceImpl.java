package hsco.pms.prj.prj04.PRJ040301;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;

@Service("PRJ040301Service")
public class PRJ040301ServiceImpl extends BaseService {

	@Resource(name = "FileUploadService")
	protected FileUploadServiceImpl fileUploadService;

	//  조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void mList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ040301.mList", inMap));

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
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ040301.rList", inMap));

		outDataset.put("output1", outDsMap);
	}

	//  저장
	
	public int save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		int iRow = 0;
		iRow += mSave(tranInfo, inVar, inDataset, outVar, outDataset);
		iRow += fSave(tranInfo, inVar, inDataset, outVar, outDataset);
		return iRow;
	}

	//  저장
	@SuppressWarnings({ "rawtypes", "unchecked" })
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
					baseDao.insert("PRJ040301.mC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("PRJ040301.mU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("PRJ040301.fD", map);
					iRow += baseDao.delete("PRJ040301.mD", map);

					deleteFiles(map);	// 첨부파일 삭제
					break;
			}
		}
		return iRow;
	}

	// 첨부파일 저장
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int fSave( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("inputF");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;

		// 첨부파일 확인
		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
		Map<String, Object> upResult = null;

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			if(fileInfo != null){
				NexacroMapDTO xpDto = getXpDto();
				deleteFiles(map);	// 첨부파일 삭제

				fileUploadService.setFileLocation(getFileLocation());
				upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
				if(upResult != null) {
					map.put("FILE_SN", upResult.get("FILE_SN"));
					map.put("FILE_ORDR", upResult.get("FILE_ORDR"));
				}
			}

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.insert("PRJ040301.fSave", map);
					break;
//				case DataSet.ROW_TYPE_DELETED :
//					break;
			}
		}
		return iRow;
	}

	//  첨부파일 삭제
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void deleteFiles(Map<String, Object> map) {

		String fileSn = (String) map.get("FILE_SN");
		if(fileSn == null || fileSn == "") {
			return;
		}

		List <Map> files = (List<Map>)baseDao.list("selectAtchmnFileList", map);
		int nSize = files == null ? 0 : files.size();
		if(nSize == 0) {
			return;
		}

		DataSetMap inDsMap = new DataSetMap();
		inDsMap.setRowMaps(files);

		Map<String, DataSetMap> fDataset = new HashMap<String, DataSetMap>();
		fDataset.put("input1", inDsMap);

		fileUploadService.deleteAtchmnMastFile(null, null, fDataset, null, null);
	}
}
