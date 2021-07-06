package hsco.pms.rnt.lrm.RNT030305;

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
 * @Class Name   	: RNT030103ServiceImpl.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 6. 9.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.				       이광원		    	최초생성
 * </pre>  
 */

@SuppressWarnings("unused")
@Service("RNT030305Service")
public class RNT030305ServiceImpl extends BaseService implements RNT030305Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

	@SuppressWarnings("rawtypes")
	public void getList1(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		List <Map> records2;

		records1 = (List<Map>)baseDao.list("RNT030305DAO.getList1", inMap);		
		records2 = (List<Map>)baseDao.list("RNT030301DAO.INTRT", inMap);
				
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);		
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);		
		
	}
	

	/* 임대인 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR1(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR1", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR1", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);
		
	}
	
	/* 공유자 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR2(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input3");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR2", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR2", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output3", outDsMap);
		
	}
	
	/* 보증보험 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR3(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input4");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR3", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR3", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output4", outDsMap);
		
	}
	
	/* 화재보험 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR4(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input5");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR4", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR4", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output5", outDsMap);
		
		
	}

	/* 법무사 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR5(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input6");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR5", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR5", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output6", outDsMap);
		
	}
	
	/* 부동산 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR6(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input7");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR6", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR6", inVar);
		}
					
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output7", outDsMap);
		
	}
	
	/* 세대원 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR7(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input8");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR7", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR7", inVar);
		}
					
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output8", outDsMap);
		
	}
	
	/* 지원내역 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR8(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input9");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR8", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR8", inVar);
		}
					
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output9", outDsMap);
		
	}

    /* 권리분석 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR9(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input10");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030305DAO.getList3", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030305DAO.getList3", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output10", outDsMap);
		
	}		
	
	/* 지원금반환 조회 */
	@SuppressWarnings("rawtypes")
	public void getListR10(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input11");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		
		if (inMap != null) {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR10", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT030305DAO.getListR10", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output11", outDsMap);
	}			
		
	/** 신규,수정,삭제 */
	@SuppressWarnings({ "unchecked" })
	
	public void listCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030305DAO.list1C", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030305DAO.list1U", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030305DAO.list1D", map);
				break;	
		
			}		
		}
		
		list = (DataSetMap) inDataset.get("input2");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			baseDao.insert("RNT030305DAO.listC3", map);		
		}		
		
		list = (DataSetMap) inDataset.get("input9");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030301DAO.listCR1", map);				                
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030301DAO.listUR1", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030301DAO.listDR1", map);
				break;			
			}		
		}
		
		list = (DataSetMap) inDataset.get("input3");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030305DAO.listCR2", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030305DAO.listUR2", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030305DAO.listDR2", map);
				break;			
			}		
		}
		
		list = (DataSetMap) inDataset.get("input4");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030305DAO.listCR3", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030305DAO.listUR3", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030305DAO.listDR3", map);
				break;			
			}		
		}
		
		list = (DataSetMap) inDataset.get("input5");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030305DAO.listCR4", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030305DAO.listUR4", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030305DAO.listDR4", map);
				break;				
			}		
		}
		
		list = (DataSetMap) inDataset.get("input6");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030305DAO.listCR5", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030305DAO.listUR5", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030305DAO.listDR5", map);
				break;			
			}		
		}
		
		list = (DataSetMap) inDataset.get("input7");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030301DAO.listCR6", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030301DAO.listUR6", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030301DAO.listDR6", map);
				break;		
			}		
		}
		
		list = (DataSetMap) inDataset.get("input8");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("RNT030305DAO.listCR7", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030305DAO.listUR7", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030305DAO.listDR7", map);
				break;				
			}		
		}
	
		
		
		list = (DataSetMap) inDataset.get("input10");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("RNT030201DAO.listCR6", map);			
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("RNT030201DAO.listUR6", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("RNT030201DAO.listDR6", map);
				break;		
			}		
		}		
	}
}