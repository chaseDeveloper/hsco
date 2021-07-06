package hsco.pms.sls.com.SLS000100;

import java.util.ArrayList;
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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS000100ServiceImpl.java
 * @Description  	: 이율정보 관리를 위한 Service
 * @author       	: 이인성
 * @since        	: 2015. 6.11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6.11.					이인성				최초생성
 *  2015.08.13					이상준				Rework
 * </pre>  
 */
@Service("SLS000100Service")
public class SLS000100ServiceImpl extends BaseService implements SLS000100Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    /**
     * 업무구분에 따른 대상코드(주택코드, 토지코드 등)목록을 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void selectIntrtGB(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> resList = null;

		resList = (List<Map>)baseDao.list("SLS000100DAO.selectIntrtGB", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resList);
		
		outDataset.put("targetList", outDsMap);
	}
    
    /**
     * 적용일자 목록 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void selectApplcDeList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> resList = null;

		resList = (List<Map>)baseDao.list("SLS000100DAO.selectApplcDeList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resList);
		
		outDataset.put("applcDeList", outDsMap);
	}
    
    /**
     * 등록 이율정보 목록 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public void selectIntrtList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> resList = null;
		
		resList = (List<Map>)baseDao.list("SLS000100DAO.selectIntrtList", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(resList);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(resList);		
		
		outDataset.put("intrtList1", outDsMap1);
		outDataset.put("intrtList2", outDsMap2);
	}

    /**
     * 이율정보 등록,수정,삭제 처리
     *  - 대상 리스트의 행 데이터 타입에 따라 처리
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    
	@SuppressWarnings({ "unchecked","rawtypes" })	
	public void saveIntrtList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;	
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :				
			case DataSet.ROW_TYPE_UPDATED :
				baseDao.insert("SLS000100DAO.insertIntrtInfo", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				baseDao.delete("SLS0000100DAO.deleteIntrtInfo", map);
				break;		
			}		
		}
		
		list = (DataSetMap) inDataset.get("input2");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
				baseDao.insert("SLS000100DAO.insertIntrtInfo", map);
			
			}		
		}		

    
    /**
     * 이율정보 일자별 삭제 처리
     *  - 대상 리스트의 행 데이터 타입에 따라 처리
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    
	@SuppressWarnings({ "unchecked","rawtypes" })	
	public void deleteIntrtList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;	
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :		
				 break;
			case DataSet.ROW_TYPE_UPDATED :
				 break;
			case DataSet.ROW_TYPE_DELETED :
				baseDao.delete("SLS0000100DAO.deleteIntrt", map);
				break;		
			}		
		}
    }
}
