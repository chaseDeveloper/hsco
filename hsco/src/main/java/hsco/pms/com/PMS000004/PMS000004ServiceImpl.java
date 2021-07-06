package hsco.pms.com.PMS000004;

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
 * @Class Name   	: RNT01060300ServiceImpl.java
 * @Description  	: 계좌이체정보조회
 * @author       	: 김지훈
 * @since        	: 2015. 12. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 17.					김지훈			최초생성
 * </pre>  
 */
@Service("PMS000004Service")
public class PMS000004ServiceImpl extends BaseService{
	/**
	 * 자동이체 주택정보조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRentCntrctList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = null;
		System.out.println("::::::::::::JOB_SE :: " + inMap.get("JOB_SE"));
		
		
		if(inMap.get("JOB_SE").equals("RN1")){
			records = (List<Map>)baseDao.list("PMS000004DAO.selectRentCntrctListRN1", inMap);
		} else if(inMap.get("JOB_SE").equals("RN2")){
			records = (List<Map>)baseDao.list("PMS000004DAO.selectRentCntrctListRN2", inMap);
		} else if(inMap.get("JOB_SE").equals("RN3")){
			records = (List<Map>)baseDao.list("PMS000004DAO.selectRentCntrctListRN3", inMap);
		} else if(inMap.get("JOB_SE").equals("HOU")){
			records = (List<Map>)baseDao.list("PMS000004DAO.selectRentCntrctListHOU", inMap);
		} 
		
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 자동이체 정보내역 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAtcngInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("PMS000004DAO.selectAtcngInfoList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 자동이체 출금결과 정보조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAtcngRqestRcivInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		System.out.println("::::::::::::DEFRAY_DE :: " + inMap.get("DEFRAY_DE"));
		
		List <Map> records = (List<Map>)baseDao.list("PMS000004DAO.selectAtcngRqestRcivInfoList", inMap);
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
	
	public void saveAtcngInfoList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("PMS000004DAO.InsertAtcngInfoList", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("PMS000004DAO.UpdateAtcngInfoList", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("PMS000004DAO.DeleteAtcngInfoList", map);
			}
		}
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
				records = (List<Map>)baseDao.list("PMS000004DAO.selectHoseNmListRN1", inMap);
			} else if( inMap.get("JOB_SE").equals("RN2")){
				records = (List<Map>)baseDao.list("PMS000004DAO.selectHoseNmListRN2", inMap);
			} else if( inMap.get("JOB_SE").equals("RN3")){
				records = (List<Map>)baseDao.list("PMS000004DAO.selectHoseNmListRN3", inMap);
			} else if( inMap.get("JOB_SE").equals("HOU")){
				records = (List<Map>)baseDao.list("PMS000004DAO.selectHoseNmListHOU", inMap);
			}
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			outDataset.put("output1", outDsMap);
		} 
	
	
}
