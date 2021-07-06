package hsco.pms.com.PMS000008;

import java.util.List;
import java.util.Map;

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
 * @Class Name   	: PMS000008ServiceImpl.java
 * @Description  	: 과년도미수금내역조회
 * @author       	: 김지훈
 * @since        	: 2015. 12. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 16.					김지훈			최초생성
 * </pre>  
 */
@Service("PMS000008Service")
public class PMS000008ServiceImpl extends BaseService{
	/**
	 * 과년도미수금내역조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPstyrAtmpAmountList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("PMS000008DAO.selectPstyrAtmpAmountList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 과년도미수금내역 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void savePstyrAtmpAmountList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("PMS000008DAO.InsertPstyrAtmpAmountList", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("PMS000008DAO.UpdatePstyrAtmpAmountList", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("PMS000008DAO.DeletePstyrAtmpAmountList", map);
			}
		}
	} 
	
	/**
	 * 과년도미수금내역 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void delePstyrAtmpAmountList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;	
		if (inDsMap != null)	
			inMap = inDsMap.get(0);
			System.out.println(inMap);
			baseDao.delete("PMS000008DAO.DeletePstyrAtmpAmountList", inMap);
		
	} 
	
	
	
	/**
	 * 과년도미수금내역 일괄저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void savePstyrAtmptAmountBatch(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			System.out.println(map);
				baseDao.delete("PMS000008DAO.deletetPstyrAtmptAmountBatch", map);
				baseDao.insert("PMS000008DAO.InsertPstyrAtmpAmountList", map);
		}
	} 
	
	
	/**
	 * 예산계정과목 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAcntCode(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("PMS000008DAO.selectAcntCode", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	/**
	 * 예산계정세목 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectExpndtrUnitCode(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("PMS000008DAO.selectExpndtrUnitCode", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 주택코드목록조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void selectHouseCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		List <Map> records = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		if( inMap.get("JOB_SE").equals("RN1")){
			records = (List<Map>)baseDao.list("PMS000008DAO.selectHoseNmListRN1", inMap);
		} else if( inMap.get("JOB_SE").equals("RN2")){
			records = (List<Map>)baseDao.list("PMS000008DAO.selectHoseNmListRN2", inMap);
		} else if( inMap.get("JOB_SE").equals("RN3")){
			records = (List<Map>)baseDao.list("PMS000008DAO.selectHoseNmListRN3", inMap);
		} else if( inMap.get("JOB_SE").equals("HOU")){
			records = (List<Map>)baseDao.list("PMS000008DAO.selectHoseNmListHOU", inMap);
		} else if( inMap.get("JOB_SE").equals("LAD")){
			records = (List<Map>)baseDao.list("PMS000008DAO.selectHoseNmListLAD", inMap);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 계정과목 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void selectPstyrAtmptAmountInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		List <Map> records = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		System.out.println(inMap);
		if( inMap.get("JOB_SE").equals("RN1")){
			records = (List<Map>)baseDao.list("PMS000008DAO.selectPstyrAtmptAmountInfoRN1", inMap);
		} else if( inMap.get("JOB_SE").equals("RN2")){
			records = (List<Map>)baseDao.list("PMS000008DAO.selectPstyrAtmptAmountInfoRN2", inMap);
		} else if( inMap.get("JOB_SE").equals("RN3")){
			records = (List<Map>)baseDao.list("PMS000008DAO.selectPstyrAtmptAmountInfoRN3", inMap);
		} else if( inMap.get("JOB_SE").equals("HOU")){
			records = (List<Map>)baseDao.list("PMS000008DAO.selectPstyrAtmptAmountInfoHOU", inMap);
		} else if( inMap.get("JOB_SE").equals("LAD")){
			records = (List<Map>)baseDao.list("PMS000008DAO.selectPstyrAtmptAmountInfoLAD", inMap);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 과년도미수금 일괄등록 자료 기등록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void selectPstyrAtmptAmountChk( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		List <Map> records = null;
		
		int inDsMapSize = inDsMap.size() == 0 ? 0 : inDsMap.size();
		
		for(int i =0; i<inDsMapSize; i++){
		if (inDsMap != null)
			inMap = inDsMap.get(0);
			records = (List<Map>)baseDao.list("PMS000008DAO.selectPstyrAtmptAmountChk", inMap);
			
	
			if(Integer.parseInt(records.get(0).get("COUNT").toString()) > 0){
				break;
			}
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
}
