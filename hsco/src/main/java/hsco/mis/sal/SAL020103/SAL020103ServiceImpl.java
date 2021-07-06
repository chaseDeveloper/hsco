package hsco.mis.sal.SAL020103;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;



/**
 * <pre>
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL020103ServiceImpl.java
 * @Description  	: 가족수당신청관리
 * @author       	: 이상명
 * @since        	: 2015. 7. 2.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 2.					이상명				최초생성
 * </pre>  
 */

@Service("SAL020103Service")
public class SAL020103ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /**
	 * 가족수당신청정보 목록조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFamilyAllwncReqstInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("SAL020103DAO.selectFamilyAllwncReqstInfoList", inMap));

		outDataset.put("output1", outDsMap);	
   		
   	}	
	
    /**
	 * 가족수당신청정보 팝업 승인정보, 신청인정보 조회
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return void
   	 * @throws NexaServiceException
   	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
   	public void selectFamilyAllwncReqstInfo_P( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {
   		
   		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
   		Map inMap = null;
   		
   		if (inDsMap != null)
   			inMap = inDsMap.get(0);
   		
   		DataSetMap outDsMap = new DataSetMap();
   		
   		// 가족수당신청정보 팝업 승인정보, 신청인정보(기본정보) 조회
   		outDsMap.setRowMaps((List<Map>)baseDao.list("SAL020103DAO.selectConfmInfoApplcntInfo", inMap));
   		
   		outDataset.put("output1", outDsMap);	
   		
   		outDsMap = new DataSetMap();
   		
   		// 가족수당신청정보 팝업 신청인정보(가족정보) 조회
   		outDsMap.setRowMaps((List<Map>)baseDao.list("SAL020103DAO.selectApplcntFamilyInfo", inMap));
   		
   		outDataset.put("output2", outDsMap);	
      		
      	}
    
    
    /**
	 * 가족수당신청정보팝업 가족수당신청정보, 가족수당대상자 신규 등록
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return void
   	 * @throws NexaServiceException
   	 */
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void familyAllwncReqstInfoC( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
   		DataSetMap familyAllwncReqstInfo = (DataSetMap)inDataset.get("input1"); // 가족수당신청정보 승인정보, 신청인정보
   		DataSetMap familyAllwncTrgterList    = (DataSetMap)inDataset.get("input2"); // 가족수당신청정보 가족수당대상자
		
   		int reqstSn = 0;
   		
   		//가족수당신청정보
   		Map map = familyAllwncReqstInfo.get(0);
		
		reqstSn = (int) baseDao.insert("SAL020103DAO.familyAllwncReqstInfoC", map);

		Map totMap = new HashMap();
		totMap.putAll(map);
	
		// 가족수당대상자
		int listSize = (familyAllwncTrgterList == null) ? 0 : familyAllwncTrgterList.size();	
		for (int i=0; i<listSize; i++) {
	        
			map = familyAllwncTrgterList.get(i);
			totMap.putAll(map);
			
			int rowType = ((Integer) (Object) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					if (map.get("REQST_SN") == null)
						map.put("REQST_SN", reqstSn);
					// 기존가족수당대상자 등록(취득, 변경, 상실)
					baseDao.insert("SAL020103DAO.familyAllwncTrgterC", totMap);
					break;
				/*
				    case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("SAL020103DAO.familyAllwncTrgterU", map);
					break;
				*/
			}				
		}		
   	}	
   		
    
    /**
	 * 가족수당신청정보 팝업 가족수당신청정보, 가족수당대상자 수정
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void familyAllwncReqstInfoU( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
   		DataSetMap familyAllwncReqstInfoList = (DataSetMap)inDataset.get("input1"); // 가족수당신청정보 승인정보, 신청인정보
   		DataSetMap familyAllwncTrgterList    = (DataSetMap)inDataset.get("input2"); // 가족수당신청정보 가족수당대상자
		   		
   		//가족수당신청정보
		Map map = familyAllwncReqstInfoList.get(0);   			

		// 승인여부 및 반려내용 변경
		baseDao.update("SAL020103DAO.familyAllwncReqstInfoU", map);
		
		Map totMap = new HashMap();
		totMap.putAll(map);
		
		// 승인상태가 미승인일 때, 가족수당대상자 변경
		if ("1".equals(map.get("SALARY_CONFM_AT"))) { 
			int listSize = (familyAllwncTrgterList == null) ? 0 : familyAllwncTrgterList.size();	
	   		for (int i=0; i<listSize; i++) {

	   			Map paramMap = familyAllwncTrgterList.get(i);			
	   			totMap.putAll(paramMap);
	   			
	   			int rowType = ((Integer) (Object) paramMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
	   			
	   			switch(rowType) {
	   				case DataSet.ROW_TYPE_INSERTED :
	   					baseDao.insert("SAL020103DAO.familyAllwncTrgterC", totMap);
	   					break;
	   				case DataSet.ROW_TYPE_UPDATED:
	   					baseDao.update("SAL020103DAO.familyAllwncTrgterU", totMap);
	   					break;
	   				case DataSet.ROW_TYPE_DELETED:
	   					baseDao.update("SAL020103DAO.familyAllwncTrgterD", totMap);
	   					break;
	   			}				
	   		}
	   		
	   	// 승인상태가 승인일 때, 승인정보 수정 및 인사가족테이블에 해당 가족수당대상자 적용
		}else if ("2".equals(map.get("SALARY_CONFM_AT"))) { 
			
			int listSize = (familyAllwncTrgterList == null) ? 0 : familyAllwncTrgterList.size();	
	   		for (int i=0; i<listSize; i++) {

	   			Map paramMap = familyAllwncTrgterList.get(i);			
	   			totMap.putAll(paramMap); 	
	   			
				if("2".equals(paramMap.get("REQST_SE"))) {	// 2: 상실
					baseDao.delete("SAL020103DAO.hrmFamilyInfoD", totMap);	   						
				}else {
					baseDao.insert("SAL020103DAO.hrmFamilyInfoCU", totMap);	   						
				}
					
	   		}
		}			
   	}
   	
    /**
	 * 가족수당신청정보 수정 삭제
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
    
	@SuppressWarnings({ "rawtypes" })
	public void familyAllwncReqstInfoCD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap familyAllwncReqstInfoList = (DataSetMap) inDataset.get("input1");

		Map map = null;

		int listSize = (familyAllwncReqstInfoList == null) ? 0 : familyAllwncReqstInfoList.size();

		for (int i = 0; i < listSize; i++) {
			map = familyAllwncReqstInfoList.get(i);
			int rowType = ((Integer) (Object) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("SAL020103DAO.familyAllwncReqstInfoU", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("SAL020103DAO.familyAllwncTrgterAllD", map);
				baseDao.delete("SAL020103DAO.familyAllwncReqstInfoD", map);
				break;
			}
		}
	}

   	
    /**
	 * 가족수당신청정보 팝업 가족수당대상자 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFamilyAllwncTrgterList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("SAL020103DAO.selectFamilyAllwncTrgterList", inMap));

		outDataset.put("output1", outDsMap);
	}
}
