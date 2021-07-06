package hsco.mis.fun.FUN010301;

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
 * @Class Name   	: FUN010301ServiceImpl.java
 * @Description  	: 자금코드 관리하는 ServiceImpl 클래스 
 * @author       	: 이상명
 * @since        	: 2015. 07. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 20.	이상명		최초생성
 * </pre>  
 */
@Service("fun010301Service")
public class FUN010301ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 자금코드 목록조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cptalCodeList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN010301DAO.cptalCodeList", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 자금상세코드 목록조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cptalCodeDetailList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN010301DAO.cptalCodeDetailList", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 자금코드 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked"})
	public int cptalCodeCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		// 코드 저장
        DataSetMap input1 = (DataSetMap) inDataset.get("input1");
        for (Map<String, Object> map : input1.getRowMaps()) {
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            	case  DataSet.ROW_TYPE_INSERTED:
            		baseDao.insert("FUN010301DAO.cptalCodeC", map);
            		break;
	            case DataSet.ROW_TYPE_UPDATED:
	            	iRow += baseDao.update("FUN010301DAO.cptalCodeU", map);
	                break;
	            case DataSet.ROW_TYPE_DELETED:
	            	iRow += baseDao.delete("FUN010301DAO.cptalCodeD", map);
	                break;
            }
        }
        
        // 상세코드 저장
        DataSetMap input2 = (DataSetMap) inDataset.get("input2");
        for (Map<String, Object> map : input2.getRowMaps()) {
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
	            case DataSet.ROW_TYPE_DELETED:
	            	iRow += baseDao.delete("FUN010301DAO.cptalCodeDetailD", map);
	                break;
            }
        }
        for (Map<String, Object> map : input2.getRowMaps()) {
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            	case  DataSet.ROW_TYPE_INSERTED:
            		baseDao.insert("FUN010301DAO.cptalCodeDetailC", map);
            		break;
	            case DataSet.ROW_TYPE_UPDATED:
	            	iRow += baseDao.update("FUN010301DAO.cptalCodeDetailU", map);
	                break;
            }
        }
        
        return iRow;
	}
	
}