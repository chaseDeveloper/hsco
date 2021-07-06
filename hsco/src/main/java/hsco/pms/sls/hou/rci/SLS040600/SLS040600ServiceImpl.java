package hsco.pms.sls.hou.rci.SLS040600;

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
 * @Class Name   	: SLS040600ServiceImpl.java
 * @Description  	: 세입관리 결의서조회
 * @author       	: 김지훈
 * @since        	: 2015. 12. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 04.					김지훈			최초생성
 * </pre>  
 */
@Service("SLS040600Service")
public class SLS040600ServiceImpl extends BaseService{
	
	/**
	 * 주택코드 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHouseCodeSh( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SLS040600DAO.selectHouseCodeSh", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	
	/**
	 * 건세입관리 결의서조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDecsnList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		if(inMap != null){
			String sParam = (String)inMap.get("decsn_chk");
			inMap.put("arr_decsn_chk", sParam.split(","));
		}
		
		List <Map> records = (List<Map>)baseDao.list("SLS040600DAO.selectDecsnList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 세입관리 결의서저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void saveDecsnList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			System.out.println("::::::::::::::::::::::::::::::::::: rowType ::: " + rowType);
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("SLS040600DAO.DecsnListInsert", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("SLS040600DAO.DecsnListUpdate", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("SLS040600DAO.DecsnListDelete", map);
			}
		}
	} 
	
	/**
	 * 세입관리 결의서저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void saveEtcDecsnInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		    DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			//int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			System.out.println("::::::::::::::::::::::::::::::::::: map ::: " + map);
			String flag1 = map.get("FLAG1").toString();
			String flag2 = map.get("FLAG2").toString();
			int cnt = 0;
			
			if(flag1.equals("true") && flag2.equals("true")) cnt = 2 ;
			
			if(cnt == 2){
			    for(int i = 0 ; i < 2 ; i++ ){
			    	 map.put("DECSN_SE",String.valueOf(i+1));
				     baseDao.insert("SLS040600DAO.DecsnListInsert", map);
			    }
			}else{
				if(flag1.equals("true")){
					map.put("DECSN_SE","1"); 
				}else{
					map.put("DECSN_SE","2");
				}
				baseDao.insert("SLS040600DAO.DecsnListInsert", map);
			}
			
		}
	} 

/* ***************************************************** 신규 팝업 SQL SLS040600_P01.xfdl ****************************************************** */	
	/**
	 * 주택 고객목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void houseCntrctCstmrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SLS040600DAO.houseCntrctCstmrList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
/* ***************************************************** 계정과목 팝업 SQL SLS040600_P02.xfdl ****************************************************** */	
	/**
	 * 계정과목 목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void budgetAcntRentMapngList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SLS040600DAO.budgetAcntRentMapngList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
}
