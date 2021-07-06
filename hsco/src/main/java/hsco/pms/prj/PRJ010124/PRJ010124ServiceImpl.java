package hsco.pms.prj.PRJ010124;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ010124ServiceImpl.java
 * @Description  	: 
 * @author       	: 정  민
 * @since        	: 2017. 11. 08.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 11. 01.                  정  민                최초생성
 * </pre>
 */

@Service("PRJ010124Service")
public class PRJ010124ServiceImpl extends BaseService {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectStoneDtaList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        
    	if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
    	// [탭01] 토석자료 목록 조회
    	DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010124DAO.selectStoneDtaList", inMap));
        outDataset.put("output1", outDsMap);
        
        // [탭02] 토석등록 목록 조회
    	outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010124DAO.selectStoneDtaRegistList", inMap));
        outDataset.put("output2", outDsMap);
    }

    
    @SuppressWarnings({ "rawtypes"})
    @Transactional
    public void saveStoneDtaRegistList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();	
		
		for (int x = 0; x < listSize; x++) {				
			Map map = list.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("PRJ010124DAO.stoneDtaRegistC", map);	
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("PRJ010124DAO.stoneDtaRegistU", map);	
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.update("PRJ010124DAO.stoneDtaRegistD", map);		
					break;
			}				
		}		
    }
}
