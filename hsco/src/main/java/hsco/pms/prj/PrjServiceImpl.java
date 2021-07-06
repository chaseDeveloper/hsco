package hsco.pms.prj;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;

@Service("PRJService")
public class PrjServiceImpl extends BaseService {

	@Resource(name = "FileUploadService")
	protected FileUploadServiceImpl fileUploadService;

	//  조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void list( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		String qryId = tranInfo.size() < 1 ? "" : tranInfo.get(0).get("strSvcID").toString();
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list(qryId, inMap));

		outDataset.put("output1", outDsMap);
	}

	// 사업코드 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void bsnsCdList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		//사업코드 테이블 변경으로 기존 쿼리 주석 2016-07-29 최현식
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ.bsnsCdList", inMap));
		//outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ.accnutCdList", inMap));
		

		outDataset.put("output1", outDsMap);
	}
	
	// 개인별사업코드 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void userBsnsCdList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ.userBsnsCdList", inMap));
		

		outDataset.put("output1", outDsMap);
	}

	// 계정과목 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void acntList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ.acntList", inMap));

		outDataset.put("output1", outDsMap);
	}

	// 사업공통코드 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cmmnCdList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ.cmmnCdList", inMap));

		outDataset.put("output1", outDsMap);
	}

	// 토지코드 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void ladCdList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ.ladCdList", inMap));

		outDataset.put("output1", outDsMap);
	}

	// 주택코드 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void houCdList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ.houCdList", inMap));

		outDataset.put("output1", outDsMap);
	}

	// 계약 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void ctrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ.ctrList", inMap));

		outDataset.put("output1", outDsMap);
	}

	// 계약 상세 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void ctrDtlList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ.ctrDtlList", inMap));

		outDataset.put("output1", outDsMap);
	}

	// 업무코드 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void jobList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ.jobList", inMap));

		outDataset.put("output1", outDsMap);
	}

	// 표준공종코드 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cnstList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ.cnstList", inMap));

		outDataset.put("output1", outDsMap);
	}

	// 추정원가 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void prcOdrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ.prcOdrList", inMap));

		outDataset.put("output1", outDsMap);
	}

	// 주택 세대수 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void houseCountList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ.houseCountList", inMap));

		outDataset.put("output1", outDsMap);
	}

	// 첨부파일 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void fileList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("inputF");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ.fileList", inMap));

		outDataset.put("outputF", outDsMap);
	}

	// 첨부파일 저장
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int fileSave( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset, NexacroMapDTO xpDto) throws NexaServiceException {

		// 파일 첨부확인
		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
//		Map<String, Object> upResult = null;
		if(fileInfo != null){
//			NexacroMapDTO xpDto = getXpDto();
//			fileUploadService.deleteFileInfo(xpDto);		// 첨부파일 삭제(수정인 경우도 삭제후 추가 처리)

			fileUploadService.setFileLocation(getFileLocation());
			/* upResult = (Map<String, Object>) */fileUploadService.uploadSingleFileWidthSn(xpDto);
//			fileUploadService.fileUpload(tranInfo, inVar, inDataset, outVar, outDataset);
		}

		DataSetMap list = (DataSetMap) inDataset.get("inputF");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("PRJ.fileSave", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					deleteFiles(map);	// 첨부파일 삭제
					break;
			}
		}
		return iRow;
	}

	//  첨부 파일 삭제
	@SuppressWarnings({ })
	public void deleteFiles(Map<String, Object> map) {
		String fileSn = (String)map.get("FILE_SN");
		String fileOrdr = (String)map.get("FILE_ORDR");
		if(fileOrdr == null || fileOrdr.length() == 0) {
			return;
		}

		fileUploadService.deleteFileInfo(fileSn, fileOrdr);
	}

	//  첨부 파일 삭제
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void deleteFiles2(Map<String, Object> map) {
		
		String fileSn = (String) map.get("FILE_SN");
		if(fileSn == null || fileSn.length() == 0) {
			return;
		}

		String fileOrdr = (String) map.get("FILE_ORDR");
		if(fileOrdr == null || fileOrdr.length() == 0) {
			return;
		}

		List <Map> files = (List<Map>)baseDao.list("selectAtchmnFileList", map);
		int nSize = (files == null) ? 0 : files.size();
		if(nSize == 0) {
			return;
		}

		DataSetMap inDsMap = new DataSetMap();
		inDsMap.setRowMaps(files);

		Map<String, DataSetMap> fDataset = new HashMap<String, DataSetMap>();
		fDataset.put("input1", inDsMap);

		fileUploadService.deleteAtchmnMastFile(null, null, fDataset, null, null);
	}
	
	//approveU
	/**
	 * 전자결제번호 입력
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void approveU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		List <Map> records;
		Map map = list.get(0);
			
		//baseDao.update("RNT01030500DAO.approveU", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		
		outDataset.put("output1", outDsMap);
	}   
}
