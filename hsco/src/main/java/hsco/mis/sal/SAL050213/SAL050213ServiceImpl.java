package hsco.mis.sal.SAL050213;

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
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL050213ServiceImpl.java
 * @Description  	: 복지포인트금액관리
 * @author       	: 정윤원
 * @since        	: 2018. 01. 03.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2018 NANUMICT, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2018. 01. 03.					정윤원				최초생성
 * </pre>
 */

@Service("SAL050213Service")
public class SAL050213ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /**
     * 사원조회
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectEmpno(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        Map inMap = null;
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        } else {
            inMap = inVar;
        }

        List<Map> records = (List<Map>) baseDao.list("SAL050213DAO.selectEmpno", inMap);

        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);

        outDataset.put("output1", outDsMap);
    }
    
	/**
	 * 년도별 복지포인트 금액을 조회한다
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void wlfarePointAmountList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		} else {
			inMap = inVar;
		}

		List<Map> records = (List<Map>) baseDao.list("SAL050213DAO.selectWlfarePointAmount", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}
    /**
     * 년도별 복지포인트 금액을 저장한다
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public void wlfarePointAmountSave(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");     
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
            Map map = list.get(x);          
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch(rowType) {
                case DataSet.ROW_TYPE_DELETED :
                    baseDao.delete("SAL050213DAO.deleteWlfarePointAmount", map);
                    break;          
            }               
        }
        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);          
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED :
                    baseDao.insert("SAL050213DAO.insertWlfarePointAmount", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    baseDao.update("SAL050213DAO.updateWlfarePointAmount", map);
                    break;
            }               
        }
    }
}
