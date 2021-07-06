package hsco.mis.hrm.HRM050303;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM050303ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 10. 13.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10.13.   김형태		최초생성
 * </pre>  
 */

@Service("HRM050303Service")
public class HRM050303ServiceImpl extends BaseService implements HRM050303Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /** 승진대상자 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmPrmotPrsList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM050303DAO.tbhrmPrmotPrsList", inMap));
		
		outDataset.put("output1", outDsMap);
	}
    
    /** 근속승진대상자 생성 */
    @SuppressWarnings({ "rawtypes" })
    
    public void tbhrmTrgterCreat(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		int existAt = Integer.parseInt((String)baseDao.select("HRM050303DAO.chkData", inMap));
        if(existAt == 0) {
            int cnt = baseDao.update("HRM050303DAO.tbhrmTrgterCreat", inMap);
            if(cnt == 0) {
                throw new NexaServiceException("errors.없음.요청", "생성된 자료가|대상자 생성 정보를");
            }
        }
        else {
            String applcDe = (String) inMap.get("APPLC_DE");
            String stdrY = applcDe.substring(0, 4);
            String stdrM = applcDe.substring(4, 6);
            String stdrD = applcDe.substring(6);
            String errMsg = stdrY + "년 " + stdrM + "월 " + stdrD + "일 자료가 이미 존재합니다. ";
            throw new NexaServiceException("fail.정보등록.실패", errMsg);
        }
    }
    
    /** 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    
    public void tbhrmPrmotSave(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
            	baseDao.update("HRM050303DAO.insertPrmot", map);
            	break;
            case DataSet.ROW_TYPE_UPDATED:
            	baseDao.update("HRM050303DAO.updatePrmotAt", map);
            	baseDao.insert("HRM050303DAO.insertPrmotGNFD", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
            	baseDao.update("HRM050303DAO.deletePrmot", map);
            	break;
            }
        }
    }
    
    /** 승진확정 */
    @SuppressWarnings({ "rawtypes" })
    
    public void updatePrmotAt(DataSetMap tranInfo, Map<String, Object> inVar,
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
                baseDao.update("HRM050303DAO.updatePrmotAt", map);
                baseDao.insert("HRM050303DAO.insertPrmotGNFD", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                break;
            }
        }
    }
    
    /** 근속기간 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void getCNWKYM(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM050303DAO.getCNWKYM", inMap));
        
        outDataset.put("output1", outDsMap);
    }
}