package hsco.mis.hrm.HRM070501;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM070501ServiceImpl.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2017. 05. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 05.24.	양성모			최초생성
 * </pre>  
 */

@Service("HRM070501Service")
public class HRM070501ServiceImpl extends BaseService implements HRM070501Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="FileUploadService")
	FileUploadServiceImpl FileUploadService;

    /** 현장체재비 등록현황조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSptScstList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1 = (List<Map>)baseDao.list("HRM070501DAO.selectSptScstList", inMap);		//현장체재비 현황 조회
		List <Map> records2 = (List<Map>)baseDao.list("HRM070501DAO.selectSptScstClose", inMap);	//현장체재비 마감일 기준 조회
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		
	}
    
	/** 현장체재비 등록현황 CUD */
	@SuppressWarnings({ "rawtypes" })
	public int saveSptScstCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HRM070501DAO.saveSptScstC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
                	iRow += baseDao.update("HRM070501DAO.saveSptScstU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("HRM070501DAO.saveSptScstD", map);
					break;
			}	
		}
		return iRow;
	
	}
	
	/** 사용자 월 근무일수 및 산출제외 연가현황 조회 */
	@SuppressWarnings({ "rawtypes" })
	public void selectYrycInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1 = (List<Map>)baseDao.list("HRM070501DAO.selectYrycInfo", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
	
	}
}