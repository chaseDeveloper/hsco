package hsco.pms.sls.com.LadCstmr;

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
 * @Class Name   	: HouseCstmrServiceImpl.java
 * @Description  	: 주택고객 관리 팝업
 * @author       	: 변승우
 * @since        	: 2015. 9. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 17.					정윤원				최초생성
 * </pre>  
 */
@Service("LadCstmrService")
public class LadCstmrServiceImpl extends BaseService{

	/**
	 * 주택고객 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadCstmrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("LadCstmrDAO.selectLadCstmrList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 토지고객 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void saveLadCstmrList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
									
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("LadCstmrDAO.insertLadCstmr", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("LadCstmrDAO.updateLadCstmr", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("LadCstmrDAO.deleteLadCstmr", map);
			}
		}
	}

	
	
	/**
	 * 토지계약자사업자 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadLcntrctrBnsmList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("LadCstmrDAO.selectLadLcntrctrBnsmList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	
	/**
	 * 토지계약자사업자 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void saveLadLcntrctrBsnmList(DataSetMap tranInfo, Map<String, Object> inVar,
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
			
			List <Map> records;
			records = (List<Map>)baseDao.list("LadCstmrDAO.selectLadCstmrbyIhidnum", map);
			
			String lad_cstmr_no = records.size() > 0 ? String.valueOf(records.get(0).get("LAD_CSTMR_NO")) : "";
			if(lad_cstmr_no != ""){
				baseDao.update("LadCstmrDAO.updateLadCstmr", map);
			}else{
				baseDao.insert("LadCstmrDAO.insertLadCstmr", map);
				records = (List<Map>)baseDao.list("LadCstmrDAO.selectLadCstmrbyIhidnum", map);
				lad_cstmr_no = records.size() > 0 ? String.valueOf(records.get(0).get("LAD_CSTMR_NO")) : "";
			}
			
			map.put("LAD_CSTMR_NO", lad_cstmr_no);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("LadCstmrDAO.insertLadLcntrctrBsnm", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("LadCstmrDAO.updateLadLcntrctrBsnm", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED){
				baseDao.insert("LadCstmrDAO.deleteLadLcntrctrBsnm", map);
			}
		}
	}
	
	
	
	
	/**
	 * 토지 공유자 매도자 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadCstmrCocnrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("LadCstmrDAO.selectLadCstmrCocnrList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	
	/**
	 * 토지 공유자 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void saveLadCstmrCocnrList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("LadCstmrDAO.insertLcntrctrCocnr", map);						
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("LadCstmrDAO.updateLcntrctrCocnr", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED){
				baseDao.insert("LadCstmrDAO.deleteLcntrctrCocnr", map);
			}	
		}
	}
	

}
