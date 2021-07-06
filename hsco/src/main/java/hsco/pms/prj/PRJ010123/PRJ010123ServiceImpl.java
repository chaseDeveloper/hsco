package hsco.pms.prj.PRJ010123;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ010123ServiceImpl.java
 * @Description  	: 
 * @author       	: 정  민
 * @since        	: 2017. 11. 09.
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
 *  2017. 11. 09.                  정  민                최초생성
 * </pre>
 */

@Service("PRJ010123Service")
public class PRJ010123ServiceImpl extends BaseService {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    /**
	 * 공사자료 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDtaList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        
    	if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
    	DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010123DAO.selectDtaList", inMap));
        outDataset.put("output1", outDsMap);
        
    }
    

    
    /**
	 * 공사자료 목록 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes"})
    @Transactional
    public void saveDtaList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();	
		
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("PRJ010123DAO.dtaU", map);	
					break;
			}
		}	
    }

    /**
     * 파일 조회
     * 
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCtgryFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010123DAO.selectCtgryFile", inMap));
        outDataset.put("output1", outDsMap);
    }

    /**
     * 첨부파일 수정사항 저장
     * 
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void saveCtgryFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        List<Map> resultList = new ArrayList<Map>();
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
                case DataSet.ROW_TYPE_INSERTED:
                case DataSet.ROW_TYPE_UPDATED:
                    String ctgryFileId = (String) map.get("CTGRY_FILE_ID");
                    if (StringUtils.isEmpty(ctgryFileId) || "".equals(ctgryFileId)) {
                        ctgryFileId = (String) baseDao.select("PRJ010123DAO.getCtgryFileId", map);
                        map.put("CTGRY_FILE_ID", ctgryFileId);
                        baseDao.insert("PRJ010123DAO.insertCtgryFile", map);
                        baseDao.insert("PRJ010123DAO.insertDocRgs", map);       // 문서 등록 추가
                    }

                    
                    break;
                case DataSet.ROW_TYPE_DELETED:
                    baseDao.delete("PRJ010123DAO.deleteCtgryFile", map);
                    baseDao.delete("PRJ010123DAO.deleteDocRgs", map);
                    break;
            }
            resultList.add(map);
        }

        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(resultList);
        outDataset.put("output1", outDsMap);
    }
}
