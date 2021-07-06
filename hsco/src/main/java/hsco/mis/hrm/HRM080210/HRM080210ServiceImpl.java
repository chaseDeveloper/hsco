package hsco.mis.hrm.HRM080210;

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
 * @Class Name   	: HRM080210SeviceImpl.java
 * @Description  	: 교육이수시간조정관리 서비스 클래스
 * @author       	: 양성모
 * @since        	: 2017. 06. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 06. 14.				   양성모				최초생성
 * </pre>  
 */
@Service("HRM080210Service")
public class HRM080210ServiceImpl extends BaseService implements HRM080210Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**
	 * 교육이수시간조정 현황 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEdcComplChangeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List<Map>)baseDao.list("HRM080210DAO.selectEdcComplChangeList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	
	/**
	 * 교육이수시간조정CUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void saveEdcComplChangeCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
		
		
		// 교육 이수시간 조정 정보
		DataSetMap input1 = (DataSetMap) inDataset.get("input1");
		int listSize = (input1 == null) ? 0 : input1.size();
		for (int x = 0; x < listSize; x++) {
			Map map = input1.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HRM080210DAO.edcComplChangeC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HRM080210DAO.edcComplChangeU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HRM080210DAO.gnfdDtlsAllD", map);	// 발령정보삭제
					baseDao.delete("HRM080210DAO.edcComplChangeD", map); // 이수시간조정현황삭제
					break;
			}	
		}
		
		// 발령정보
		DataSetMap input2 = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < input2.size(); x++) {
			Map map = input2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("HRM080210DAO.gnfdDtlsC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM080210DAO.gnfdDtlsU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM080210DAO.gnfdDtlsD", map);
					break;
			}
		}
	}
	
	/**
	 * 발령정보를 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectGnfdDtlsList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List<Map>)baseDao.list("HRM080210DAO.selectGnfdDtlsList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
    
    /**
	 * 입력 사원 선택시 적용년도 기준 사원정보 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEmpnoInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List<Map>)baseDao.list("HRM080210DAO.selectEmpnoInfo", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
    
    /**
	 * 발령정보팝업을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectGnfdDtlsPopList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List<Map>)baseDao.list("HRM080210DAO.selectGnfdDtlsPopList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
}
