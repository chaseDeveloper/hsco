package hsco.mis.hrm.HRM060128;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HRM060128ServiceImpl.java
 * @Description     : 근무성적평가지표를 관리하는 서비스 구현체 클래스
 * @author          : 양성모
 * @since           : 2017. 06. 16.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 06. 16.      양성모              최초생성
 * </pre>  
 */
@Service("HRM060128Service")
public class HRM060128ServiceImpl extends BaseService implements HRM060128Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
     * 근무성적평가지표 현황을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectHrmEvlScreEvlIxList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM060128DAO.selectHrmEvlScreEvlIxList", inMap));
        outDataset.put("output1", outDsMap);
    }
    
    /**
     * 근무성적평가지표 수정, 삭제, 등록 처리
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes"})
    public int saveHrmEvlScreEvlIxCUD(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        int iRow = 0;
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        int listSize = (list == null) ? 0 : list.size();
        
        // 중복 데이터 방지를 위하여 삭제 후 등록, 수정을 진행
        for (int x = 0; x < listSize; x++) {
            Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

			switch(rowType) {
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("HRM060128DAO.saveHrmEvlScreEvlIxD", map);
					break;
			}	
        }
        
        for (int x = 0; x < listSize; x++) {
            Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HRM060128DAO.saveHrmEvlScreEvlIxC", map);
	                break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("HRM060128DAO.saveHrmEvlScreEvlIxU", map);
					break;
			}	
        }
        return iRow;
    }
    
    /** 근무성적평가지표 직전차수 복사 처리 */
    @SuppressWarnings({ "rawtypes" })
    public void saveHrmEvlScreEvlIxCopy(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        int existAt = 0;
        
        existAt = (int)baseDao.select("HRM060128DAO.chkCopyList", inMap);
        if(existAt > 0) {
        	baseDao.delete("HRM060128DAO.saveHrmEvlScreEvlIxCopyD", inMap);
        	baseDao.insert("HRM060128DAO.saveHrmEvlScreEvlIxCopyC", inMap);
        }
        else {
            String errMsg = "직전차수";
            throw new NexaServiceException("info.정보.없음", errMsg);
        }
    }
}
