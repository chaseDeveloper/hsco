package hsco.mis.hrm.HRM090304;

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
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM090304ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 11. 30.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11.30.   김형태		    최초생성
 * </pre>  
 */

@Service("HRM090304Service")
public class HRM090304ServiceImpl extends BaseService implements HRM090304Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** 계약정보 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getCntrctInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090304DAO.getCntrctInfo", inMap));
		
		outDataset.put("output1", outDsMap);
	}
    
    /** 관리비 정보 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectManageList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090304DAO.selectManageList", inMap));
		
		outDataset.put("output1", outDsMap);
	}
    
    /** 저장(CUD) */
    @SuppressWarnings({ "rawtypes" })
    
    public void saveManageCUD(DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("HRM090304DAO.insertManageChrg", map);
                baseDao.insert("HRM090302DAO.insertRntChrg", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM090304DAO.updateManageChrg", map);
                baseDao.update("HRM090302DAO.updateRntChrg", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM090304DAO.deleteManageChrg", map);
                baseDao.delete("HRM090302DAO.deleteRntChrg", map);
                break;
            }
            baseDao.update("HRM090304DAO.updateManageChrgSM", map);
            baseDao.update("HRM090302DAO.updateRntChrgSM", map);
        }
    }
    
    /** 청구자료생성 */
    @SuppressWarnings({ "rawtypes" })
	public void createData(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		int existAt = Integer.parseInt((String)baseDao.select("HRM090304DAO.chkData", inMap));
		if(existAt == 0) {
			int cnt = baseDao.update("HRM090304DAO.createData", inMap);
			if(cnt == 0) {
				throw new NexaServiceException("errors.없음.요청", "생성된 자료가|계약 정보를");
			}
			cnt = baseDao.update("HRM090302DAO.createData", inMap);
            if(cnt == 0) {
                throw new NexaServiceException("errors.없음.요청", "생성된 자료가|계약 정보를");
            }
        }
        else {
            String stdrYM = (String) inMap.get("STDR_YM");
            String stdrY = stdrYM.substring(0, 4);
            String stdrM = stdrYM.substring(4);
            String errMsg = stdrY + "년 " + stdrM + "월 자료가 이미 존재합니다. ";
            throw new NexaServiceException("fail.정보등록.실패", errMsg);
        }
	}
    
    /**
	 * 전자결재번호 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */	
	@SuppressWarnings({ "rawtypes" })
	
	public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
		
		// 전자결재번호 조회
		String sanctnNO= (String) baseDao.select("HRM090304DAO.selectSanctnNO", map);
		map.put("SANCTN_NO", sanctnNO);
		
		// 관리비관리 전자결재번호 업데이트
		baseDao.update("HRM090304DAO.approveU", map);
		
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
	}
}