package hsco.pms.sls.lad.std.SLS070101;

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
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("SLS070101Service")
public class SLS070101ServiceImpl extends BaseService implements SLS070101Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
		
	/**
	 * 토지정보목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectLandList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> landList = (List<Map>)baseDao.list("SLS070101DAO.selectLandList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(landList);
		
		outDataset.put("landList", outDsMap);
	}
	
	/**
	 * 토지별 기타정보(토지납부비율, 토지급지단가)목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectLandEtcList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		// 토지납부비율
		List<Map> payRateList = (List<Map>)baseDao.list("SLS070101DAO.selectLandPayRateList", inMap);
		
		// 토지급지단가
		List<Map> clUntpcList = (List<Map>)baseDao.list("SLS070101DAO.selectLandClUntpcList", inMap);
		
		DataSetMap outRateDsMap = new DataSetMap();
		outRateDsMap.setRowMaps(payRateList);
		
		DataSetMap outUntpcDsMap = new DataSetMap();
		outUntpcDsMap.setRowMaps(clUntpcList);
		
		outDataset.put("payRateList", outRateDsMap);
		outDataset.put("clUntpcList", outUntpcDsMap);
	}
	
	/**
	 * 토지정보 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings("rawtypes")
	public void saveLandList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		DataSetMap landList = (DataSetMap) inDataset.get("input1");		// 토지정보 목록
		DataSetMap payList = (DataSetMap) inDataset.get("input2");		// 토지납부비율 목록
		DataSetMap untpcList = (DataSetMap) inDataset.get("input3");	// 토지급지단가 목록
		
		int landListSize = (landList == null) ? 0 : landList.size();
		int payListSize = (payList == null) ? 0 : payList.size();
		int untpcListSize = (untpcList == null) ? 0 : untpcList.size();
		
		int i = 0;
		
		// [STEP 1] 토지정보 저장
		if(landListSize > 0){
		
			//System.out.println("[BEGIN] 토지 목록 저장");
			
			for (i = 0; i < landListSize; i++) {
					
				Map inLandMap = landList.get(i);
				
				int rowType = ((Integer)inLandMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				switch(rowType) {
					
					// 신규 등록 건
					case DataSet.ROW_TYPE_INSERTED :
						
						// 등록 토지코드 확인
						String ladCodeExistYn = (String)baseDao.select("SLS070101DAO.selectLadCodeExistYn", inLandMap);
						if ("N".equals(ladCodeExistYn)) {
							
							baseDao.insert("SLS070101DAO.insertLandList", inLandMap);
							
						} else {
							String ladCode = (String)inLandMap.get("LAD_CODE");
							
							//System.out.println("[ END ] 토지목록 저장 오류 - 중복 : " + ladCode);
							
							throw new NexaServiceException("info.중복.재입력.요청", "토지코드(" + ladCode + ") ");
						}
						break;
					
					// 수정건
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("SLS070101DAO.updateLandList", inLandMap);
						break;
						
					// 삭제는 건별 처리
//					case DataSet.ROW_TYPE_DELETED :
//						baseDao.delete("SLS070101DAO.deleteLandList", inLandMap);
//						break;
				}
			}
			
			//System.out.println("[ END ] 토지목록 저장");
		}
		
		// [STEP 2] 토지납부비율 목록 저장
		if(payListSize > 0){
			
			//System.out.println("[BEGIN] 토지납부비율 목록 저장");
			
			for (i = 0; i < payListSize; i++) {
				
				Map inPayMap = payList.get(i);
				
				int rowType = ((Integer) inPayMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("SLS070101DAO.insertLandPayRateList", inPayMap);
					break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("SLS070101DAO.updateLandPayRateList", inPayMap);
						break;
					case DataSet.ROW_TYPE_DELETED :
						baseDao.delete("SLS070101DAO.deleteLandPayRateList", inPayMap);
						break;
				}
			}
			
			//System.out.println("[ END ] 토지납부비율 목록 저장");
		}
		
		// [STEP 3] 토지급지단가 목록 저장
		if(untpcListSize > 0){
			
			//System.out.println("[BEGIN] 토지급지단가 목록 저장");
			
			for (i = 0; i < untpcListSize; i++) {
				
				Map inUntpcMap = untpcList.get(i);
				
				int rowType = ((Integer)inUntpcMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("SLS070101DAO.insertLandClUntpcList", inUntpcMap);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("SLS070101DAO.updateLandClUntpcList", inUntpcMap);
						break;
					case DataSet.ROW_TYPE_DELETED :
						baseDao.delete("SLS070101DAO.deleteLandClUntpcList", inUntpcMap);
						break;
				}
			}
			
			//System.out.println("[ END ] 토지급지단가 목록 저장");
		}
	}
	/**
	 * 토지비율정보 중복조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings("rawtypes")
	public void selectLandPayRateExist( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap payList = (DataSetMap) inDataset.get("input2");		// 토지납부비율 목록
		int payListSize = (payList == null) ? 0 : payList.size();
		int i = 0;
		if(payListSize > 0){
			for (i = 0; i < payListSize; i++) {
				
				Map inPayMap = payList.get(i);
				int landPayRateExist =	(Integer)baseDao.select("SLS070101DAO.selectLandPayRateExist", inPayMap);
				
				if( landPayRateExist == 0 ){
						baseDao.insert("SLS070101DAO.insertLandPayRateList", inPayMap);
				} else {
						String ladCode = (String)inPayMap.get("LAD_CODE");
						String prposSe = (String)inPayMap.get("PRPOS_SE");
						String suplySe = (String)inPayMap.get("SUPLY_SE");
						String payCode = (String)inPayMap.get("PAY_CODE");
							throw new NexaServiceException("info.중복.재입력.요청", 
														"토지(" + ladCode + ") :: " 
													  + "용도(" + prposSe + ") :: "
						 						      + "공급(" + suplySe + ") :: "
												      + "납부(" + payCode + ")\n"
														);
				}
			}
		}
	}
	
	/**
	 * 토지기초정보 삭제 - 토지정보 와 해당 토지코드의 토지납부비율, 토지급지단가 동시 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void deleteLandInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null){
			// LAD_CODE
			inMap = inDsMap.get(0);
		
			// [STEP 1] 해당 토지코드에 토지 상세목록이 있는지 확인
			String landDetailExistYn = (String)(String)baseDao.select("SLS070101DAO.selectLadDetailExistYn", inMap);
			if("Y".equals(landDetailExistYn)){
				String ladCode = (String)inMap.get("LAD_CODE");
				
				//System.out.println("[ END ] 토지목록 삭제 오류 - 토지상세정보 존재 : " + ladCode);
				
				// fail.삭제.불가 : {0} 삭제할 수 없습니다.
				throw new NexaServiceException("fail.삭제.불가", "토지코드(" + ladCode + ")에 해당하는 토지상세정보가 존재하여");
			}else{
				// [STEP 2] 해당 토지코드의 토지급지단가 삭제
				baseDao.delete("SLS070101DAO.deleteLandClUntpcList", inMap);
				
				// [STEP 3] 해당 토지코드의 토지납부비율 삭제
				baseDao.delete("SLS070101DAO.deleteLandPayRateList", inMap);
				
				// [STEP 4] 해당 토지코드정보 삭제
				baseDao.delete("SLS070101DAO.deleteLandList", inMap);
			}
		}
	}
	
	//------------------------------------------------------------------------------
	
	/**
	 * 토지납부비율 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectLandPayRateList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SLS070101DAO.selectLandPayRateList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	}
	
	
	/**
	 * 토지급지단가 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectLandClUntpcList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SLS070101DAO.selectLandClUntpcList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	}
	
	/**
	 * 토지납부비율 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings("rawtypes")
	public int saveLandPayRateList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					log.debug("map = " + map);
					baseDao.insert("SLS070101DAO.insertLandPayRateList", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SLS070101DAO.updateLandPayRateList", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SLS070101DAO.deleteLandPayRateList", map);
					break;
			}
		}		
		return iRow;
	}
	
	/**
	 * 토지납부비율 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings("rawtypes")
	public int saveLandClUntpcList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("SLS070101DAO.insertLandClUntpcList", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SLS070101DAO.updateLandClUntpcList", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SLS070101DAO.deleteLandClUntpcList", map);
					break;
			}
		}		
		return iRow;
	}
	
	/**
	 * 토지납부코드 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectPayCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SLS070101DAO.selectPayCodeList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	}
}
