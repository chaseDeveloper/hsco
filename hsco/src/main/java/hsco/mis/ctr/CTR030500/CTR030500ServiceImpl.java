package hsco.mis.ctr.CTR030500;

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
 * @Class Name   	: CTR030500ServiceImpl.java
 * @Description  	: 계약심의요청
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
@Service("CTR030500Service")
public class CTR030500ServiceImpl extends BaseService implements CTR030500Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    
    /** 계약심의요청 목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCntrctDlbrtCmitList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
        DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
        
        if (inDsMap1 != null) {
            inMap = inDsMap1.get(0);
        }

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR030500DAO.selectCntrctDlbrtCmitList", inMap));
		outDataset.put("output1", outDsMap);
    }

	/** 계약심의요청 목록 저장 */
    @SuppressWarnings({ "rawtypes" })
    @Transactional
    public void saveCntrctDlbrtCmitList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR030500DAO.cntrctDlbrtCmitC", map);
				    break;
			    case DataSet.ROW_TYPE_UPDATED:
			    	baseDao.update("CTR030500DAO.cntrctDlbrtCmitU", map);
				    break;
			    case DataSet.ROW_TYPE_DELETED:
			    	baseDao.delete("CTR030500DAO.cntrctDlbrtCmitD", map);
			        break;
		    }
		}

    }
 
}