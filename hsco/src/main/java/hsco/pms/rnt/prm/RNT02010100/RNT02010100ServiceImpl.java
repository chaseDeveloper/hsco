package hsco.pms.rnt.prm.RNT02010100;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   		: RNT02010100ServiceImpl.java
 * @Description  		: 임대주택정보관리
 * @author       		: 변승우
 * @since        		: 2015. 10. 22.
 * @version      		: 1.0
 * @see          		: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 22.					변승우				최초생성
 * </pre>  
 */

@Service("RNT02010100Service")
public class RNT02010100ServiceImpl extends BaseService{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/**
	 * 매입임대 주택 정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void puchasHouseList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02010100DAO.puchasHouseList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	
	/**
	 * 매입임대 주택(동,호) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void puchasHouseDongList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02010100DAO.puchasHouseDongList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	
	/**
	 * 매입임대 주택정보 입력,수정,삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void puchasHouseCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		
		
		//임대주택정보 (입력,수정,삭제)
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}catch( Exception e) {
				throw new NexaServiceException(e); 
			}
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("RNT02010100DAO.puchasHouseD", map);
			}else if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				List <Map> records = (List<Map>)baseDao.list("RNT02010100DAO.puchasHouseList_2", map);
				if(records.size() > 0){
					throw new NexaServiceException("comm.데이터.기등록.존재", "해당주택코드");
				}
				
				baseDao.insert("RNT02010100DAO.puchasHouseC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT02010100DAO.puchasHouseU", map);
			}
		}
		
		//임대주택동정보 (입력,수정,삭제)
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}catch( Exception e) {
				throw new NexaServiceException(e); 
			}
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT02010100DAO.puchasHouseDongC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT02010100DAO.puchasHouseDongU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("RNT02010100DAO.puchasHouseDongD", map);
			}
		}
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			List <Map> records = (List<Map>)baseDao.list("RNT02010100DAO.puchasHouseDongList", map);
			
			// 임대주택 신규생성시 동 정보 없을경우 0001동 자동생성
			if(records.size() == 0){
				map.put("DONG", "0001");
				baseDao.insert("RNT02010100DAO.puchasHouseDongC", map);
			}
		}
		
	} 

	
	
	/**
	 * 매입임대 이율 정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void intrtInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02010100DAO.intrtInfoList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	
	/**
	 * 매입임대 이율 정보 저장,수정,삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void intrtInfoCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}
			catch( Exception e) {
				throw new NexaServiceException(e); 
			}
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT02010100DAO.intrtInfoC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT02010100DAO.intrtInfoU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("RNT02010100DAO.intrtInfoD", map);
			}
		}
	}	
	
	
	/**
	 * 매입임대 사업지역 코드 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBsnsCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02010100DAO.selectBsnsCodeList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 	
}
