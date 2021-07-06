package hsco.mis.ctr.CTR030400;

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
 * @Class Name   	: CTR030400ServiceImpl.java
 * @Description  	: 실적증명대장관리
 * @author       	: 정 민
 * @since        	: 2017. 07. 07.
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
 *  2017. 07. 13.					정 민				최초생성
 * </pre>
 */
@Service("CTR030400Service")
public class CTR030400ServiceImpl extends BaseService implements CTR030400Service {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    
    /** 실적증명대장 목록 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAcmsltProofIssuList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	Map inMap = null;
        DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
        
        if (inDsMap1 != null) {
            inMap = inDsMap1.get(0);
        }

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR030400DAO.selectAcmsltProofIssuList", inMap));
		outDataset.put("output1", outDsMap);
    }

	/** 실적증명대장 목록 저장 */
    @SuppressWarnings({ "rawtypes" })
    public int saveAcmsltProofIssuList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");	 // 기준정보
		
		int iRow = 0;
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		    switch (rowType) {
			    case DataSet.ROW_TYPE_INSERTED:
			    	baseDao.insert("CTR030400DAO.acmsltProofIssuC", map);
			    	iRow ++;
				    break;
			    case DataSet.ROW_TYPE_UPDATED:
			    	iRow += baseDao.update("CTR030400DAO.acmsltProofIssuU", map);
				    break;
			    case DataSet.ROW_TYPE_DELETED:
			    	iRow += baseDao.delete("CTR030400DAO.acmsltProofIssuD", map);
			        break;
		    }
		}

		return iRow;
    }
 
}