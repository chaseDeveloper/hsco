package hsco.mis.hrm.HRM070502;

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
 * @Class Name   	: HRM070502ServiceImpl.java
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

@Service("HRM070502Service")
public class HRM070502ServiceImpl extends BaseService implements HRM070502Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="FileUploadService")
	FileUploadServiceImpl FileUploadService;

    /** 현장체재비 마감일 기준 현황조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSptScstClosList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1 = (List<Map>)baseDao.list("HRM070502DAO.selectSptScstClosList", inMap);	//근무상황부 리스트 조회
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap1);
		
	}
    
	/** 현장체재비 마감일 기준 CUD */
	@SuppressWarnings({ "rawtypes" })
	public int saveSptScstClosCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
					break;
				case DataSet.ROW_TYPE_UPDATED :
                	iRow += baseDao.update("HRM070502DAO.tbhrmSptScstClosU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					break;
			}	
		}
		return iRow;
	
	}
	
	/** 현장체재비 마감일 기준 일괄생성 프로세스 */
	@SuppressWarnings({ "rawtypes" })
	public int insertNewCloseDe( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
				
		Map map = list.get(0);
			
		baseDao.insert("HRM070502DAO.newCloseDe", map);
		return iRow;
	
	}
}