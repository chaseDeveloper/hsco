package hsco.mis.hrm.HRM010408;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM010408ServiceImpl.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 6. 9.
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
 *  2015. 6. 9.		박병일			최초생성
 *  2015.10.28.     박병일                   표준적용
 * </pre>
 */
@Service("HRM010408Service")
public class HRM010408ServiceImpl extends BaseService implements HRM010408Service {

    protected Logger                  log = LoggerFactory.getLogger(this.getClass());

    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    /**
     * 부서장 직무지원 추천내역[1순위] 을 조회한다.
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void mainSearchList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        Map inMap = null;
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }

        List<Map> records0 = (List<Map>) baseDao.list("HRM010408DAO.cmmnCodeR", inVar);
        List<Map> records1 = (List<Map>) baseDao.list("HRM010408DAO.mainSearchList1", inMap);
        List<Map> records2 = (List<Map>) baseDao.list("HRM010408DAO.mainSearchList2", inMap);
        List<Map> records3 = (List<Map>) baseDao.list("HRM010408DAO.mainSearchList3", inMap);

        DataSetMap outDsMap0 = new DataSetMap();
        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        DataSetMap outDsMap3 = new DataSetMap();
        outDsMap0.setRowMaps(records0);
        outDsMap1.setRowMaps(records1);
        outDsMap2.setRowMaps(records2);
        outDsMap3.setRowMaps(records3);
        outDataset.put("output0", outDsMap0);
        outDataset.put("output1", outDsMap1);
        outDataset.put("output2", outDsMap2);
        outDataset.put("output3", outDsMap3);

    }
    
    /**
     * 부서장 직무지원 추천내역 / 직원 직무지원 내역
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void mainSearchList2(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        Map inMap = null;
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }

        List<Map> records1 = (List<Map>) baseDao.list("HRM010408DAO.mainSearchListRecom", inMap);
        List<Map> records2 = (List<Map>) baseDao.list("HRM010408DAO.mainSearchListApply", inMap);


        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();

        outDsMap1.setRowMaps(records1);
        outDsMap2.setRowMaps(records2);

        outDataset.put("output1", outDsMap1);
        outDataset.put("output2", outDsMap2);
    }

    /**
     * 부서장 직무지원 추천내역 수정
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public void mainCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        // 1지망
        DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_UPDATED:
                int    chkCnt      = Integer.parseInt((String)baseDao.select("HRM010408DAO.mainChkR", map));
                String dprlrAppnAt = map.get("DPRLR_APPN_AT")+"";
                String empnm       = map.get("EMPNM")+"";
                if(chkCnt > 0 && "1".equals(dprlrAppnAt)) {
                    String errMsg = "해당 사원(" + empnm + ")은 이미 선택되었습니다.\n(재조회 후, 다시 진행해주시기 바랍니다)";
                    throw new NexaServiceException("info.처리불가", errMsg);
                } else {
                    baseDao.update("HRM010408DAO.mainU", map);
                }
                break;
            }
        }

        // 2지망
        DataSetMap list2 = (DataSetMap) inDataset.get("input2");
        for (int x = 0; x < list2.size(); x++) {
            Map map = list2.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_UPDATED:
                int    chkCnt      = Integer.parseInt((String)baseDao.select("HRM010408DAO.mainChkR", map));
                String dprlrAppnAt = map.get("DPRLR_APPN_AT")+"";
                if(chkCnt > 0 && "1".equals(dprlrAppnAt)) {
                    String errMsg = "해당 사원은 이미 선택되었습니다.\n(재조회 후, 다시 진행해주시기 바랍니다)";
                    throw new NexaServiceException("info.처리불가", errMsg);
                } else {
                    baseDao.update("HRM010408DAO.mainU", map);
                }
                break;
            }
        }

        // 3지망
        DataSetMap list3 = (DataSetMap) inDataset.get("input3");
        for (int x = 0; x < list3.size(); x++) {
            Map map = list3.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_UPDATED:
                int    chkCnt      = Integer.parseInt((String)baseDao.select("HRM010408DAO.mainChkR", map));
                String dprlrAppnAt = map.get("DPRLR_APPN_AT")+"";
                if(chkCnt > 0 && "1".equals(dprlrAppnAt)) {
                    String errMsg = "해당 사원은 이미 선택되었습니다.\n(재조회 후, 다시 진행해주시기 바랍니다)";
                    throw new NexaServiceException("info.처리불가", errMsg);
                } else {
                    baseDao.update("HRM010408DAO.mainU", map);
                }
                break;
            }
        }
    }
    /**
     * 부서장 직무지원 추천내역 수정
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return int
     * @throws NexaServiceException
     */
    /**
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public void mainCUD2(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	// 부서장 추천내역
    	DataSetMap list1 = (DataSetMap) inDataset.get("input1");
    	for (int x = 0; x < list1.size(); x++) {
    		Map map = list1.get(x);
    		int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

    		switch (rowType) {
    		case DataSet.ROW_TYPE_INSERTED:
    			int    chkCnt      = Integer.parseInt((String)baseDao.select("HRM010408DAO.mainChkR", map));
    			//String dprlrAppnAt = map.get("DPRLR_APPN_AT")+"";
    			String empnm       = map.get("EMPNM")+"";
    			map.put("DPRLR_APPN_AT", "1");	//부서장 추천구분
    			
    			if(chkCnt > 0) {
    				String errMsg = "해당 사원(" + empnm + ")은 이미 선택되었습니다.\n(재조회 후, 다시 진행해주시기 바랍니다)";
    				throw new NexaServiceException("info.처리불가", errMsg);
    			} else {
    				baseDao.update("HRM010408DAO.mainU", map);
    			}
    			break;
    		case DataSet.ROW_TYPE_DELETED:
    			map.put("DPRLR_APPN_AT", "0");	//부서장 추천구분
    			map.put("REC_RANK", "0");	//부서장 추천 지망구분
    			baseDao.update("HRM010408DAO.mainU", map);
    			break;
    		}
    	}
    	/*
    	// 직원 직무지원내역
    	DataSetMap list2 = (DataSetMap) inDataset.get("input2");
    	for (int x = 0; x < list2.size(); x++) {
    		Map map = list2.get(x);
    		int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
    		switch (rowType) {
    		case DataSet.ROW_TYPE_UPDATED:
    			int    chkCnt      = Integer.parseInt((String)baseDao.select("HRM010408DAO.mainChkR", map));
    			String dprlrAppnAt = map.get("DPRLR_APPN_AT")+"";
    			if(chkCnt > 0 && "1".equals(dprlrAppnAt)) {
    				String errMsg = "해당 사원은 이미 선택되었습니다.\n(재조회 후, 다시 진행해주시기 바랍니다)";
    				throw new NexaServiceException("info.처리불가", errMsg);
    			} else {
    				baseDao.update("HRM010408DAO.mainU", map);
    			}
    			break;
    		}
    	}*/
    }

}