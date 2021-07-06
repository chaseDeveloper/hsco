package hsco.mis.sup.SUP020208;

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
 * @Class Name   	: SUP020208ServiceImpl.java
 * @Description  	: 제안자료 검토부서지정 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2015. 10. 27.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 27.				   양성모				최초생성
 * </pre>  
 */

@Service("sup020208Service")
public class SUP020208ServiceImpl extends BaseService implements SUP020208Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    /**
	 * 제안목록조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectPropseMastrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SUP020208DAO.selectPropseMastrList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
    /**
	 * 제안자, 검토부서 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectPropseSubList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);		
		
		List <Map> records1;
		List <Map> records2;
		List <Map> records3;

		records1 = (List<Map>)baseDao.list("SUP020208DAO.selectPropsePropsrList", inMap);
		records2 = (List<Map>)baseDao.list("SUP020208DAO.selectPropseExmntDeptList", inMap);
		records3 = (List<Map>)baseDao.list("SUP020208DAO.selectPropseJdgmnMfcmmList", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		outDsMap3.setRowMaps(records3);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
	}
	

	/**
	 * 제안자료 검토부서 수정, 삭제, 등록 처리
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	

	public int savePropseExmntDept( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					break;
				case DataSet.ROW_TYPE_UPDATED :
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("SUP020208DAO.savePropseExmntDeptD00", map);
					iRow += baseDao.delete("SUP020208DAO.savePropseExmntDeptD01", map);
					break;
			}	
		}		
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("SUP020208DAO.savePropseExmntDeptC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					break;
				case DataSet.ROW_TYPE_DELETED :
					break;
			}	
		}
		
		list = (DataSetMap) inDataset.get("input2");
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					break;
				case DataSet.ROW_TYPE_UPDATED :
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("SUP020208DAO.savePropseJdgmnResultD", map);			// 삭제 심사위원 관련 심사결과 삭제
					iRow += baseDao.delete("SUP020208DAO.savePropseJdgmnMfcmmD", map);	// 대상 심사위원 삭제
					break;
			}	
		}		
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("SUP020208DAO.savePropseJdgmnMfcmmC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					break;
				case DataSet.ROW_TYPE_DELETED :
					break;
			}	
		}		

		return iRow;
	
	}
	
	/**
	 * 첨부파일 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectFileList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
        outDataset.put("output1", outDsMap);
    }
    

	/**
	 * 전자결재번호 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */	
	@SuppressWarnings({ "rawtypes" })
	
	public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 					
	
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
		
		// 전자결재번호 조회
		String sanctnNO= (String) baseDao.select("SUP020208DAO.selectSanctnNO", map);			
		map.put("SANCTN_NO", sanctnNO);
		
		// 물품수급계획 전자결재번호 업데이트
		baseDao.update("SUP020208DAO.approveU", map);
		
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);       
	}   
	
	
}
