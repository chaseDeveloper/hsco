package hsco.pms.sls.lad.rsl.SLS120000;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS120000ServiceImpl.java
 * @Description  	: 이율정보 관리를 위한 Service
 * @author       	: 변승우
 * @since        	: 22015.10.14
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015.10.14					변승우				최초생성
 *  2016.01.15					이상준				Rework
 * </pre>  
 */
@Service("SLS120000Service")
public class SLS120000ServiceImpl extends BaseService implements SLS120000Service{

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService; 
    
    /**
	 * 읍면동코드 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEmdList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS120000DAO.selectEmdList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("emdList", outDsMap);
	}
    
    /**
	 * 지목목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLndcgrCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS120000DAO.selectLndcgrCodeList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("lndcgrCode", outDsMap);
	}
	
    /**
	 * 잔여지 목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRemndrLadList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS120000DAO.selectRemndrLadList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("remndrLadList", outDsMap);
	}
	
	/**
	 * 토지 잔여지 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "unchecked" , "rawtypes" })
	
	public void saveRemndrLadList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		List<Map> failList = new ArrayList<Map>();
		
		int listSize = list == null ? 0 : list.size();
		for (int i = 0; i < listSize; i++)
		{
			Map targetMap = list.get(i);
			
			int rowType = ((Integer) targetMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			try
			{
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("SLS120000DAO.insertRemndrLad", targetMap);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("SLS120000DAO.updateRemndrLad", targetMap);
						break;
					case DataSet.ROW_TYPE_DELETED :
						baseDao.delete("SLS120000DAO.deleteRemndrLadAtch", targetMap);
						baseDao.delete("SLS120000DAO.deleteRemndrLad", targetMap);
						break;
				}
			}
			catch(Exception ex)
			{
				if(ex.getMessage().indexOf("ORA-00001") != -1){
					targetMap.put("EX_COUSE", "중복");
				}else{
					targetMap.put("EX_COUSE", ex.getMessage());
				}
				failList.add(targetMap);
			}
		}
		
		DataSetMap failMap = new DataSetMap();
		failMap.setRowMaps(failList);
		
		outDataset.put("failList", failMap);
	}
	
	/**
	 * 첨부파일 관련
	 */
	
	/**
	 * 잔여지 첨부 목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRemndrLadAtchList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS120000DAO.selectRemndrLadAtchList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("remndrLadAtchList", outDsMap);
	}
	
	/**
	 * 잔여지 첨부내역 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "unchecked" , "rawtypes" })
	
	public void saveRemndrLadAtch(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		// 파일 첨부확인
		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
		Map<String, Object> upResult = null;
		if(fileInfo != null){
		log.info("serivceimple 호출~ = ");	
			NexacroMapDTO xpDto = getXpDto();
			fileUploadService.setFileLocation(getFileLocation());
			upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
		}

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();		
		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			if(upResult != null){
				// 업로드 첨부파일의 수가 1건일 경우 파일 순차번호 포함
				String resFileSn = String.valueOf(upResult.get("FILE_SN"));

				//String resFileOrdr = String.valueOf(upResult.get("FILE_ORDR"));
				String resFileOrdr = String.valueOf(map.get("FILE_NO"));  // 첨부파일 건수만큼 ORDR 번호생성 
				map.put("COURS_NM", resFileSn + "|" + resFileOrdr);
			}
				log.info("INSERT호출 = " + map.toString());
				baseDao.insert("SLS120000DAO.insertRemndrLadAtch", map);
				log.info("INSERT완료 = " + map.toString());
		}
	}	
		
	/*	// 1. 잔여지 등록 내역 삭제
		baseDao.delete("SLS120000DAO.deleteRemndrLadAtch", inMap); 
		
		// 2. 공통첨부팡리의 정보로 잔여지 첨부 등록
		baseDao.insert("SLS120000DAO.insertRemndrLadAtch", inMap);
	*/	
	
}
