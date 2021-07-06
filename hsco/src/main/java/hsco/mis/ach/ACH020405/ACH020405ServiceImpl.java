package hsco.mis.ach.ACH020405;

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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACH020405ServiceImpl.java
 * @Description  	: 청렴마일리지
 * @author       	: 정 민
 * @since        	: 2017. 08. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 08. 02.					정 민				최초생성
 * </pre>  
 */
@Service("ACH020405Service")
public class ACH020405ServiceImpl extends BaseService implements ACH020405Service {
	
	protected Logger log = LoggerFactory.getLogger(ACH020405ServiceImpl.class);

    /**
	 * 대상 계량지표 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectKPIInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("ACH020405DAO.selectKPIInfo", inMap));
		
		outDataset.put("output1", outDsMap);	

	} 
    
    /**
	 * 실적집계내역 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRefrnList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("ACH020405DAO.selectRefrnList", inMap));
		
		outDataset.put("output1", outDsMap);	

	} 
	

    /**
	 * 평가사원목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEvlEmpList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("ACH020405DAO.selectEvlEmpList", inMap));
		
		outDataset.put("output1", outDsMap);	
	}  
    
	/**
	 * 실적집계내역 저장(계량지표 월별실적 & 첨부실적 정보를  저장, 수정, 삭제 한다.) &  평가사원목록 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public void saveEmpTlphonKdDgree(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");

		// 실적집계내역
		int listSize = (list == null) ? 0 : list.size();
				
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
							
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED :  
					baseDao.update("ACH030202DAO.dtlU", map); 		// 계량지표배정실적 update
					baseDao.update("ACH030202DAO.resultU", map);    // 계량지표결과 - 합계(최종)실적치 update
					baseDao.update("ACH030202DAO.resultWithU", map);// 계량지표결과 - 최종결과점수 및 누적달성율 update					
					break;
			}
		
		}
		
	    // 평가사원목록
		listSize = (list2 == null) ? 0 : list2.size();
		boolean delFlag = false;
		
		for (int x = 0; x < listSize; x++) {
		    Map map = list2.get(x);
		    int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		    switch (rowType) {
		    case DataSet.ROW_TYPE_INSERTED:
		    case DataSet.ROW_TYPE_UPDATED:
		    	baseDao.insert("ACH020405DAO.evlEmpCU", map);
		        break;
		    case DataSet.ROW_TYPE_DELETED:
		        baseDao.delete("ACH020405DAO.evlEmpD", map);
		        delFlag = true;
		        break;
		    }
		}	
		
		// 계량지표배정실적 삭제
		if(listSize > 0 && delFlag) {
			baseDao.delete("ACH020402DAO.qyevalDstbAcmsltD", list2.get(0));
		}
		
	}
	
    /**
	 * 마일리지 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMlgInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("ACH020405DAO.selectMlgInfo", inMap));
		
		outDataset.put("output1", outDsMap);	
	}  
    
    /**
	 * 평가사원목록 기초자료생성
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEmpnoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("ACH020405DAO.selectEmpnoList", inMap));
		
		outDataset.put("output1", outDsMap);	

	}
  

}
