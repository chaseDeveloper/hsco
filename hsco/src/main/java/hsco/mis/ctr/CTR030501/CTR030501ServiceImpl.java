package hsco.mis.ctr.CTR030501;

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
 * @Class Name   	: CTR030501ServiceImpl.java
 * @Description  	: 계약심의결과
 * @author       	: 정 민
 * @since        	: 2017. 07. 19.
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
 *  2017. 07. 19.					정 민				최초생성
 * </pre>
 */
@Service("CTR030501Service")
public class CTR030501ServiceImpl extends BaseService implements CTR030501Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    
    /** 계약심의결과(계약심의 개최정보, 계약심의 의결결과) 목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCntrctDlbrtResultList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
        DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
        
        if (inDsMap1 != null) {
            inMap = inDsMap1.get(0);
        }

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR030501DAO.selectCntrctDlbrtCmitDspthList", inMap));
		outDataset.put("output1", outDsMap);

		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR030501DAO.selectCntrctDlbrtCmitList", inMap));
		outDataset.put("output2", outDsMap);
    }

  
	/** 계약심의결과(계약심의 개최정보, 계약심의 의결결과) 저장 */
    @SuppressWarnings({ "rawtypes" })
    @Transactional
    public void saveCntrctDlbrtResultList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");

		System.out.println(inDsMap.size());
        
        if(inDsMap.size() > 0) {
        	Map map = inDsMap.get(0);
        	int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_UPDATED:
				 baseDao.update("CTR030501DAO.cntrctDlbrtCmitDspthCU", map);
				 baseDao.update("CTR030501DAO.cntrctDlbrtCmitDspthD", map);
                break;
            }
        }
		
		for (int x = 0; x < list2.size(); x++) {
            Map map = list2.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("CTR030501DAO.cntrctDlbrtCmitU", map);
                break;
            }

        }
    }
 
}