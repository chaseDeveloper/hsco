package hsco.mis.hrm.HRM050401;

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
 * @Class Name   	: HRM050401ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 09. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 09.25.   김형태		최초생성
 * </pre>  
 */

@Service("HRM050401Service")
public class HRM050401ServiceImpl extends BaseService implements HRM050401Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /** 대우임용대상자 생성 */
    @SuppressWarnings({ "rawtypes" })
    
	public void tbhrmTrgterCreat(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    
	    DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        int existAt = Integer.parseInt((String)baseDao.select("HRM050401DAO.chkData", inMap));
        if(existAt == 0) {
            int cnt = baseDao.update("HRM050401DAO.tbhrmTrgterCreat", inMap);
            if(cnt == 0) {
                throw new NexaServiceException("errors.없음.요청", "생성된 자료가|대상자 생성 정보를");
            }
        }
        else {
            String stdrDe = (String) inMap.get("STDR_DE");
            String stdrY = stdrDe.substring(0, 4);
            String stdrM = stdrDe.substring(4, 6);
            String stdrD = stdrDe.substring(6);
            String errMsg = stdrY + "년 " + stdrM + "월 " + stdrD + "일 자료가 이미 존재합니다. ";
            throw new NexaServiceException("fail.정보등록.실패", errMsg);
        }
	}
    
    /** 대우임용대상자 선발 확정 & 발령 기초정보 생성 */
    @SuppressWarnings({ "rawtypes"})
	public void tbhrmTrgterDcsn(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM050401DAO.tbhrmTrgterDcsn", map);
                baseDao.insert("HRM050401DAO.tbhrmGnfdBasis", map);
                break;
            }
        }
	}
    
    /** 확정 취소 */
    @SuppressWarnings({ "rawtypes"})
    public void tbhrmDcsnC(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM050401DAO.tbhrmDcsnC", map);
                break;
            }
        }
    }
    
    /** 대우임용대상자 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmTrtmtList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM050401DAO.tbhrmTrtmtList", inMap));
		
		outDataset.put("output1", outDsMap);
	}
    
    /** 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    
    public void tbhrmTrtmtSave(DataSetMap tranInfo, Map<String, Object> inVar,
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
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM050401DAO.deleteTrtmt", map);
                break;
            }
        }
    }
	
}