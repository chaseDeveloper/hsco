package hsco.mis.bdg.BDG020101;

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
 * @Class Name   	: BDG020101ServiceImpl.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 07. 15.
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
 *  2015. 07. 15.                  정윤원                최초생성
 * </pre>
 */

@Service("BDG020101Service")
public class BDG020101ServiceImpl extends BaseService implements BDG020101Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectMvmnBudget(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG020101DAO.selectMvmnBudget", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectMvmnDetail(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("BDG020101DAO.selectMvmnDetail", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes" })
    
    public void saveMvmnBudget(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED :
                    baseDao.insert("BDG020101DAO.insertMvmnBudget", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    baseDao.update("BDG020101DAO.updateMvmnBudget", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    baseDao.delete("BDG020101DAO.deleteMvmnBudget", map);
                    break;
            }
        }
    }

    @SuppressWarnings({ "rawtypes" })
    
    public void saveMvmnMaster(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch(rowType) {
                case DataSet.ROW_TYPE_DELETED :
                    baseDao.delete("BDG020101DAO.deleteMvmnBudget", map);
                    break;
            }
        }

        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input2");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        baseDao.update("BDG020101DAO.updateMvmnExecut", inMap);   // 확정여부를 가진 금액 일괄합산갱신
    }

    @SuppressWarnings({ "rawtypes" })
    
    public void saveExecutBudget(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            if(rowType == DataSet.ROW_TYPE_UPDATED) {
                baseDao.update("BDG020101DAO.updateDscnAt", map);       // 확정여부 갱신
            }
        }

        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input2");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        baseDao.update("BDG020101DAO.updateMvmnExecut", inMap);   // 확정여부를 가진 금액 일괄합산갱신
    }

    @SuppressWarnings({ "rawtypes" })
    
    public void saveSanc(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        baseDao.update("BDG020101DAO.updateSanctnNo", inMap);
    }
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAcntCode(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>)baseDao.list("BDG020101DAO.selectAcntCode", inMap));
        outDataset.put("output1", outDsMap);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectExpndtrUnitCode(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        int year = Integer.parseInt((String) inMap.get("YEAR"));
        DataSetMap outDsMap = new DataSetMap();
        String detailBsnsCode = (String) inMap.get("DETAIL_BSNS_CODE");
        
        if(year < 2018) {	// 2018년 이전
            if(!"".equals(detailBsnsCode) && detailBsnsCode != null) {
            	outDsMap.setRowMaps((List<Map>)baseDao.list("BDG020101DAO.selectExpndtrUnitCodeOld2", inMap));
            }
            else {
            	outDsMap.setRowMaps((List<Map>)baseDao.list("BDG020101DAO.selectExpndtrUnitCodeOld", inMap));
            }
        }
        else {
        	if(!"".equals(detailBsnsCode) && detailBsnsCode != null) {
        		outDsMap.setRowMaps((List<Map>)baseDao.list("BDG020101DAO.selectExpndtrUnitCode2", inMap));
        	}
        	else {
        		outDsMap.setRowMaps((List<Map>)baseDao.list("BDG020101DAO.selectExpndtrUnitCode", inMap));
        	}
        }
        outDataset.put("output1", outDsMap);
    }
   
}
