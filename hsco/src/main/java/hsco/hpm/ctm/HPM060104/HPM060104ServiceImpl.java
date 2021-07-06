package hsco.hpm.ctm.HPM060104;

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
 * @Class Name   	: HPM060104Controller.java
 * @Description  	: 강사관리
 * @author       	: 정 민
 * @since        	: 2017. 08. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2017. 08. 07.					정 민			최초생성
 * </pre>  
 */

@Service("HPM060104Service")
public class HPM060104ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(HPM060104ServiceImpl.class);
	
	
    /**
	 * 강사관리 목록 조회 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectInstrctrManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM060104DAO.selectInstrctrManageList", inMap));
		
		outDataset.put("output1", outDsMap);		
	}
    
    
    /**
	 * 강사관리 목록 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public void saveInstrctrManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();	
		
		for (int x = 0; x < listSize; x++) {				
			Map map = list.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HPM060104DAO.instrctrManageC", map);	
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HPM060104DAO.instrctrManageU", map);		
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HPM060104DAO.instrctrManageD", map);
					break;	
			}				
		}				
	}
	
//    /**
//	 * 강사정보 이관
//	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
//	 * @return void
//	 * @throws NexaServiceException
//	 */
//	@SuppressWarnings({ "rawtypes"})
//	@Transactional
//	public void trnsferInstrctrInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
//			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
//			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
//		
//		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
//		
//		Map inMap = null;
//		
//		if (inDsMap != null)
//			inMap = inDsMap.get(0);
//			
//		// 기존정보 삭제
//		baseDao.delete("HPM060103DAO.rentProgrmManageAllD", inMap);	
//		
//		// 화성도시공사 홈페이지 시설 정보 조회
//		List<Map<String, Object>> homePageProgrmInfoList = (List<Map<String, Object>>) hscoHomePageDao.list("HomepageDAO.fcltsInfoList", inMap);	
//		
//		// 대관(프로그램)관리 테이블에 데이터 입력
//		for(Map<String, Object> homePageProgrmInfoMap : homePageProgrmInfoList) {
//			baseDao.insert("HPM060103DAO.rentProgrmManageC", homePageProgrmInfoMap);				
//		}
//		
//	}

	
}