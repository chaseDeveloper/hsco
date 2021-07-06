package hsco.mis.acc.ACC010301;

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
 * @Class Name   	: ACC010301Service.java
 * @Description  	: 주택예산계정과목맵핑을 조회하는 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 11. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 24.	이수지		최초생성
 * </pre>  
 */
@Service("ACC010301Service")
public class ACC010301ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC010301ServiceImpl.class);
	
	
	
	/**
	 * 계정과목 리스트 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void fnnrTblatManagelist(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
		if(log.isInfoEnabled()) log.info("fnnrTblatManagelist Started!");
		
		Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC010301DAO.fnnrTblatManagelist", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 상세계정과목 리스트 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void fnnrTblatIEMManagelist(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC010301DAO.fnnrTblatIEMManagelist", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 계정과목 리스트 등록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void fnnrTblatManageCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap list1 = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list1.size(); x++) {
            Map map = list1.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                baseDao.insert("ACC010301DAO.fnnrTblatManageC", map);
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("ACC010301DAO.fnnrTblatManageU", map);
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("ACC010301DAO.fnnrTblatIEMManageD", map);
                baseDao.delete("ACC010301DAO.fnnrTblatManageD", map);
                break;
		    default:
		    	break;
            }
        }
        
        DataSetMap list2 = (DataSetMap) inDataset.get("input2");
        for (int x = 0; x < list2.size(); x++) {
            Map map = list2.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
                case DataSet.ROW_TYPE_INSERTED:
                    baseDao.insert("ACC010301DAO.fnnrTblatIEMManageC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED:
                    baseDao.update("ACC010301DAO.fnnrTblatIEMManageU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED:
                    baseDao.delete("ACC010301DAO.fnnrTblatIEMManageD", map);
                    break;
                default:
                	break;
            }
        }
	}
	
	/**
	 * 전년도 복사
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
    
    public void saveCopyPrvYear(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        Map map = list.get(0);
        baseDao.delete("ACC010301DAO.deleteCopyPrvYearIEM", map);
        baseDao.delete("ACC010301DAO.deleteCopyPrvYear", map);
        baseDao.insert("ACC010301DAO.insertCopyPrvYear", map);
        baseDao.insert("ACC010301DAO.insertCopyPrvYearIEM", map);
    }
}