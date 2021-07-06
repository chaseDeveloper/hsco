package hsco.hpm.ctm.HPM060103;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HPM060103Controller.java
 * @Description  	: 대관(프로그램)관리
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

@Service("HPM060103Service")
public class HPM060103ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(HPM060103ServiceImpl.class);
	
	
    /**
	 * 대관(프로그램)관리 목록 조회 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRentProgrmManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM060103DAO.selectRentProgrmManageList", inMap));
		outDataset.put("output1", outDsMap);	
	}
    
    /**
	 * 사용요금 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectUseChrgeManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM060103DAO.selectUseChrgeManageList", inMap));
		outDataset.put("output1", outDsMap);	
	}
    
    
    /**
	 * 대관(프로그램)관리 목록 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void saveRentProgrmManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");

		int listSize = (list == null) ? 0 : list.size();	
		int key = 0;
		
		for (int x = 0; x < listSize; x++) {				
			Map map = list.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					key =  (int) baseDao.insert("HPM060103DAO.rentProgrmManageC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HPM060103DAO.rentProgrmManageU", map);		
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HPM060103DAO.useChrgeManageAllD", map);
					baseDao.delete("HPM060103DAO.rentProgrmManageD", map);
					break;	
			}				
		}	
		

		int listSize2 = (list2 == null) ? 0 : list2.size();
			
		
		for (int x = 0; x < listSize2; x++) {				
			Map map = list2.get(x);	
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					if(map.get("PROGRM_SN") == null) {
						map.put("PROGRM_SN", key);
					}
					baseDao.insert("HPM060103DAO.useChrgeManageC", map);	
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HPM060103DAO.useChrgeManageU", map);		
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HPM060103DAO.useChrgeManageD", map);
					break;	
			}				
		}
	}
	
//    /**
//	 * 대관(프로그램)정보 이관
//	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
//	 * @return void
//	 * @throws NexaServiceException
//	 */
//	@SuppressWarnings({ "rawtypes"})
//	@Transactional
//	public void trnsferProgrmInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
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
	
	
    /**
	 * 대관(프로그램) 목록 조회(콤보성 데이터) 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRentProgrmList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM060103DAO.selectRentProgrmList", inMap));
		outDataset.put("output1", outDsMap);	
	}

	/**
	 * 프로그램 목록 조회(콤보성 데이터)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectProgrmList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM060103DAO.selectProgrmList", inMap));
		outDataset.put("output1", outDsMap);	
	}
    
	/**
	 * 프로그램 목록 조회(콤보성 데이터)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectClassList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM060103DAO.selectClassList", inMap));
		outDataset.put("output1", outDsMap);	
	}
	
}