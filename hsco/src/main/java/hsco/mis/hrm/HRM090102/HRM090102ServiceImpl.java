package hsco.mis.hrm.HRM090102;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM090102ServiceImpl.java
 * @Description  	: 
 * @author       	: 이수지
 * @since        	: 2015. 11. 10.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11.10.   이수지		최초생성
 * </pre>  
 */

@Service("HRM090102Service")
public class HRM090102ServiceImpl extends BaseService implements HRM090102Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /** 예약접수및처리내역 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectResveList(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090102DAO.selectResveList", inMap));
        
        outDataset.put("output1", outDsMap);
    }
    
    /** 콘도예약신청 상세 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectResveDtlList(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090102DAO.selectResveDtlList", inMap));
        
        outDataset.put("output1", outDsMap);
    }
    
    /** 예약접수및처리내역 & 예약신청상세 저장(U) */
    @SuppressWarnings({ "rawtypes" })
    
    public void saveReqstNDtlU(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM090102DAO.updateResve", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                break;
            }
        }
        
        list = (DataSetMap) inDataset.get("input2");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM090102DAO.updateResveDtl", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                break;
            }
        }
    }
	
}