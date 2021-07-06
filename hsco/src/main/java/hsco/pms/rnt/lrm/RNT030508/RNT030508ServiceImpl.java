package hsco.pms.rnt.lrm.RNT030508;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT01060400ServiceImpl.java
 * @Description  	: 각종현황및분석표 출력조회
 * @author       	: 박병일
 * @since        	: 2016.03.02
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016.03.02.			    박병일			  최초생성
 * </pre>  
 */
@Service("RNT030508Service")
public class RNT030508ServiceImpl extends BaseService{
	
	/**
	 * 계약고객정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void lfstsCntrctCstmrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT030508DAO.lfstsCstmr", inMap);
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
		public void selectAnactList( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map<String, Object> inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			if(inMap != null){
				String sParam = (String)inMap.get("anact_chk");
				inMap.put("arr_anact_chk", sParam.split(","));
			}
			
			List <Map> records = (List<Map>)baseDao.list("RNT030508DAO.selectAnactList", inMap);
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
		
		public void saveAnactList(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) {
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			for (int x = 0; x < list.size(); x++) {
				Map map = list.get(x);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				if ( rowType == DataSet.ROW_TYPE_INSERTED ){
					baseDao.insert("RNT030508DAO.AnactListInsert", map);
				}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
					baseDao.update("RNT030508DAO.AnactListUpdate", map);
				}else if(rowType == DataSet.ROW_TYPE_DELETED ){
					baseDao.delete("RNT030508DAO.AnactListDelete", map);
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
		
		public void saveEtcAnactInfo(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) {
			    DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			//for (int x = 0; x < list.size(); x++) {
	  	      for (int x = 0; x < 1 ; x++) {		    
				Map map = list.get(x);
				 
				
				String flag1 = map.get("FLAG1").toString();
				String flag2 = map.get("FLAG2").toString();
				int cnt = 0;
				
				if(flag1.equals("true") && flag2.equals("true")) cnt = 2 ;
				
				if(cnt == 2){
				    for(int i = 0 ; i < 2 ; i++ ){
				    	 map.put("ANACT_SE",String.valueOf(i+1));
					     baseDao.insert("RNT030508DAO.AnactListInsert", map);
				    }
				}else{
					if(flag1.equals("true")){
						map.put("ANACT_SE","1"); 
					}else{
						map.put("ANACT_SE","2");
					}
					baseDao.insert("RNT030508DAO.AnactListInsert", map);
				}
				
			}
		} 		
	
	
}
