package hsco.mis.fun.FUN040402;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: FUN040402ServiceImpl.java
 * @Description  	: 수입/지출계획승인 현황을 관리하는 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2015. 07. 28.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 28.				   양성모				최초생성
 * </pre>  
 */

@Service("fun040402Service")
public class FUN040402ServiceImpl extends BaseService implements FUN040402Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    /**
	 * 년월별 주 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectWeekList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records   = (List<Map>)baseDao.list("FUN040402DAO.selectWeekList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}    
    
    /**
	 * 월간, 주간, 계획외지출 승인 현황 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectCptalPlanList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		
		records1   = (List<Map>)baseDao.list("FUN040402DAO.selectWikCptalPlanList", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
	}
	
	/**
	 * 수입/지출계획 CUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int cptalPlanCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		// 월간계획 저장
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN040402DAO.MnthngCptalPlanU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					break;
			}	
		}
		
		list = (DataSetMap) inDataset.get("input2");
		
		listSize = (list == null) ? 0 : list.size();
		
		// 주간, 계획외지출 저장
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN040402DAO.WikCptalPlanU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					break;
			}	
		}

		return iRow;
	
	}
}
