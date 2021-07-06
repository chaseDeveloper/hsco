package hsco.pms.rnt.lrm.RNT040305;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT040305ServiceImpl.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 8. 03.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  
 * </pre>  
 */

@Service("RNT040305Service")
public class RNT040305ServiceImpl extends BaseService implements RNT040305Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

	@SuppressWarnings("rawtypes")
	public void getList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT040305DAO.getList", inMap);		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

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
			records = (List<Map>)baseDao.list("RNT040305DAO.getListR1", inMap);
		} else {
			records = (List<Map>)baseDao.list("RNT040305DAO.getListR1", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);
		
	}
		
	@SuppressWarnings("rawtypes")
	public void listCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		String sqlId = null;
		String forceFlag = null;
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input3");
		
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);
				
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("rnt040305DAO.listU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("rnt040305DAO.listD", map);
				break;
			}
		
		
		}

		list = (DataSetMap) inDataset.get("input5");
		
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);

				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("rnt040305DAO.listC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("rnt040305DAO.listU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("rnt040305DAO.listD", map);
				break;
				
			}
		
		
		}		
	}


}