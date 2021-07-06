package hsco.hpm.ctm.HPM060101;

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
 * @Class Name   	: HPM060101Controller.java
 * @Description  	: 대관시설관리
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

@Service("HPM060101Service")
public class HPM060101ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(HPM060101ServiceImpl.class);
	
	
    /**
	 * 대관시설관리 목록 조회 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRentFcltsManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM060101DAO.selectRentFcltsManageList", inMap));
		
		outDataset.put("output1", outDsMap);		
	}
    
    
    /**
	 * 대관시설관리 목록 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public void saveRentFcltsManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();	
		
		for (int x = 0; x < listSize; x++) {				
			Map map = list.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HPM060101DAO.rentFcltsManageC", map);	
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HPM060101DAO.rentFcltsManageU", map);		
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HPM060101DAO.rentFcltsManageD", map);
					break;	
			}				
		}				
	}
	
    /**
	 * 시설정보 이관
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked"})
	@Transactional
	public void trnsferFcltsInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
			
		// 기존정보 삭제
		baseDao.delete("HPM060101DAO.rentFcltsManageAllD", inMap);	
		
		// 화성도시공사 홈페이지 시설 정보 조회
		List<Map<String, Object>> homePageFcltsInfoList = (List<Map<String, Object>>) hscoHomePageDao.list("HomepageDAO.fcltsInfoList", inMap);	
		
		// 대관시설관리 테이블에 데이터 입력
		for(Map<String, Object> homePageFcltsInfoMap : homePageFcltsInfoList) {
			baseDao.insert("HPM060101DAO.rentFcltsManageC", homePageFcltsInfoMap);				
		}
		
	}
	
    /**
	 * 대관시설 목록 조회(콤보성 데이터) 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRentFcltsList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM060101DAO.selectRentFcltsList", inMap));
		
		outDataset.put("output1", outDsMap);		
	}
    
    /**
	 * 게시글 목록 조회 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBoardList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM060101DAO.selectBoardList", inMap));
		
		outDataset.put("output1", outDsMap);		
	}
    

	
}