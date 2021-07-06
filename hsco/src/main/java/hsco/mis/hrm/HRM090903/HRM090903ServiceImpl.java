package hsco.mis.hrm.HRM090903;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM090903ServiceImpl.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2019. 10. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 WebCash, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                        내용
 * ------------------------------------------------------------------
 *  2019. 10. 18.			  양성모			최초생성
 * </pre>
 */

@Service("HRM090903Service")
public class HRM090903ServiceImpl extends BaseService implements HRM090903Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService; 
    
    /**
     * 회의자료관리 기준 정보 조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectMstInfo( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
    	
    	if (inDsMap != null)
    		inMap = inDsMap.get(0);
    	
    	List <Map> result1;
    	List <Map> result2;
    
    	result1 = (List<Map>)baseDao.list("HRM090903DAO.selectMtgDtaChargerList", null);		// 부서별 담당자 조회
    	
    	DataSetMap outDsMap = new DataSetMap();
    	outDsMap.setRowMaps(result1);
    	
    	result2 = (List<Map>)baseDao.list("HRM090903DAO.selectMtgDe", inMap);		// 마감설정 정보 조회
    	
    	DataSetMap outDsMap2 = new DataSetMap();
    	outDsMap2.setRowMaps(result2);
    	
    	outDataset.put("output1", outDsMap);
    	outDataset.put("output2", outDsMap2);
    }
    
    /**
     * 기준일자별 회의자료 조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectMtgDtaList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
    	
    	if (inDsMap != null)
    		inMap = inDsMap.get(0);
    	
    	List <Map> result1;
    
    	result1 = (List<Map>)baseDao.list("HRM090903DAO.selectMtgDtaList", inMap);		// 부서별 담당자 조회
    	
    	DataSetMap outDsMap = new DataSetMap();
    	outDsMap.setRowMaps(result1);
    	
    	outDataset.put("output1", outDsMap);
    }
    
    /**
     * 등록 / 수정 / 삭제
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public void saveMstInfo(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        // 마감설정 저장(CUD)
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            
            String stdrDeApplcAt = (String)map.get("STDR_DE_APPLC_AT");
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
                Integer chkCnt = (Integer)baseDao.select("HRM090903DAO.checkMtgDe", map);
                
                if(chkCnt == 0){
                    baseDao.insert("HRM090903DAO.insertMtgDe", map);
                    
                    if("1".equals(stdrDeApplcAt)){	// 기준일자적용여부가 1일때, 나머지 마감설정 데이터의 기준일자적용여부는 0으로 업데이트 처리.(기준일자적용여부가 1인 데이터는 1개를 유지하기 위함.)
                	baseDao.update("HRM090903DAO.updateStdrDeApplcAt", map);
                    }
                } else {
                    String errMsg = "기준일자";
                    throw new NexaServiceException("info.항목.중복.재입력.요청", errMsg);
                }
                break;
            case DataSet.ROW_TYPE_UPDATED:
                baseDao.update("HRM090903DAO.updateMtgDe", map);
                
                if("1".equals(stdrDeApplcAt)){	// 기준일자적용여부가 1일때, 나머지 마감설정 데이터의 기준일자적용여부는 0으로 업데이트 처리.(기준일자적용여부가 1인 데이터는 1개를 유지하기 위함.)
            		baseDao.update("HRM090903DAO.updateStdrDeApplcAt", map);
                }
                break;
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM090903DAO.deleteMtgDe", map);
                break;
            }
        }
        
        // 부서별담당자 저장(CUD)
        list = (DataSetMap) inDataset.get("input2");
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_DELETED:
                baseDao.delete("HRM090903DAO.deleteMtgDtaCharger", map);
                break;
            }
        }
        
        for (int x = 0; x < list.size(); x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            Integer chkCnt = 0;
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED:
        	chkCnt = (Integer)baseDao.select("HRM090903DAO.checkMtgDtaCharger", map);
                
                if(chkCnt == 0){
                    baseDao.insert("HRM090903DAO.insertMtgDtaCharger", map);
                } else {
                    String errMsg = "담당자";
                    throw new NexaServiceException("info.항목.중복.재입력.요청", errMsg);
                }
                break;
            case DataSet.ROW_TYPE_UPDATED:
        	chkCnt = (Integer)baseDao.select("HRM090903DAO.checkMtgDtaCharger", map);
                
                if(chkCnt == 0){
                    baseDao.update("HRM090903DAO.updateMtgDtaCharger", map);
                } else {
                    String errMsg = "담당자";
                    throw new NexaServiceException("info.항목.중복.재입력.요청", errMsg);
                }
                break;
            }
        }
    }
    
    /**
     * 첨부파일 조회
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectFileList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	Map inMap = null;
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
    
    	if (inDsMap != null) {
    		inMap = inDsMap.get(0);
    	}
    
    	DataSetMap outDsMap1 = new DataSetMap();
    	outDsMap1.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
    	outDataset.put("output1", outDsMap1);
    }
}
