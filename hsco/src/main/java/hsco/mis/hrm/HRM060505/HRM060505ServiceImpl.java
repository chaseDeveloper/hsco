package hsco.mis.hrm.HRM060505;

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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM060505Controller.java
 * @Description  	: 다면평가등록기간관리
 * @author       	: 고태호
 * @since        	: 2019. 10. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2019. 10. 24.	 고태호		최초생성
 * </pre>  
 */
@Service("HRM060505Service")
public class HRM060505ServiceImpl extends BaseService implements HRM060505Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
     * 저장
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public void saveSeveralWorkEvl(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        // 탭1 : 기간설정 탭
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        if (list.size() > 0) {
            Map map = list.get(0);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
                case DataSet.ROW_TYPE_INSERTED:
                case DataSet.ROW_TYPE_UPDATED:
                    baseDao.insert("HRM060505DAO.saveSeveralWorkEvl", map);
                    break;
            }
        }
    }
    
    /**
     * 조회
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectSeveralWorkEvl(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        Map inMap = null;
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM060505DAO.selectSeveralWorkEvl", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
    }
    
}