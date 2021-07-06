package hsco.mis.ach.ACH020301;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACH020301ServiceImpl.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 8. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 18.	박병일				최초생성
 * </pre>  
 */
@Service("ACH020301Service")
public class ACH020301ServiceImpl extends BaseService implements ACH020301Service {
	
	protected Logger log = LoggerFactory.getLogger(ACH020301ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    /**
	 * KPI 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectListMst( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("selectListMst Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ACH020301DAO.selectListMst", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    
    /**
	 * 기본구조 및 조직배정 정보를 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectListDtl( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		List <Map> records1;
		

		records = (List<Map>)baseDao.list("ACH020301DAO.selectListDtl01", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		
		records1 = (List<Map>)baseDao.list("ACH020301DAO.selectListDtl02", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output2", outDsMap1);		
		
	}    
	
	/**
	 * 지표 조직배정  등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public int mainCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;
		int iSize = 0;
        iSize = inDataset.size();
		log.debug("inDataset.size()=======" + iSize);

		//input1
		DataSetMap listKey = (DataSetMap) inDataset.get("input1");
		Map mapKey = null;
		if(listKey != null){
			mapKey = listKey.get(0);
		}
		
		String strViewPointSe = "";
		String strIxCode = "";
		if(mapKey != null){
			if(mapKey.get("VIEWPOINT_SE") != null)
				strViewPointSe = (String)mapKey.get("VIEWPOINT_SE");
		    if(mapKey.get("IX_CODE") != null)
		    	strIxCode = (String)mapKey.get("IX_CODE");	
		}
		
		//input2
		DataSetMap list = (DataSetMap) inDataset.get("input2");		
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();			
			String strAsignAt = "";
			if(map.get("ASIGN_AT") != null){
				strAsignAt = (String)map.get("ASIGN_AT");
			}
			    
			//if("1".equals(strAsignAt)){	
			//	iAsignCnt += 1;
			//}
			
			// 배정유무가 체크가 해제되었을 경우, 해당지표 해당조직의 기 입력된 가중치, 목표치, 실적치 삭제 처리 영역
			if(rowType == DataSet.ROW_TYPE_UPDATED && "0".equals(strAsignAt)){
				map.put("VIEWPOINT_SE",strViewPointSe);
				map.put("IX_CODE",strIxCode);
				iRow += baseDao.delete("ACH020301DAO.mainD", map);
			}
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					break;
				
				// 배정유무가 체크되었을 경우
				case DataSet.ROW_TYPE_UPDATED :	
					if ("1".equals(strAsignAt)){	
						map.put("VIEWPOINT_SE",strViewPointSe);
						map.put("IX_CODE",strIxCode);
						baseDao.delete("ACH020301DAO.mainD", map);	
						baseDao.insert("ACH020301DAO.mainC", map);	
					}
					break;
				case DataSet.ROW_TYPE_DELETED :			
					iRow += baseDao.delete("ACH020301DAO.mainD", map);
					break;	
				default:
					break;
			}				
		}
		// 가중치 재배정
		//if (listSize > 0 && iAsignCnt > 1){  
		//	mapKey.put("AsignCnt", iAsignCnt);
		//	baseDao.update("ACH020301DAO.mainU", mapKey);			
		//}
		
		return iRow;		
	}

}
