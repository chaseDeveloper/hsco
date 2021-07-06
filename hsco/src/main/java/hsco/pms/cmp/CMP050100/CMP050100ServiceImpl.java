package hsco.pms.cmp.CMP050100;

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
 * @Class Name   	: CMP050100ServiceImpl.java
 * @Description  	: 수용재결 테이블을 관리하는 서비스 구현체 클래스
 * @author       	: 변승우
 * @since        	: 2015. 7. 2.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 2.					변승우				최초생성
 * </pre>  
 */

@Service("CMP050100Service")
public class CMP050100ServiceImpl extends BaseService{

	protected Logger log = LoggerFactory.getLogger(CMP050100ServiceImpl.class);
			
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void thingOwnerList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		if(log.isInfoEnabled()) log.info("thingOwnerList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if(inMap != null){ // null check (code inspection)
			String sParam = (String)inMap.get("THING_CL");  // Type casting 오류 수저(code inspection)
			inMap.put("ARR_THING_CL", sParam.split(","));
		}
		
		
		records = (List<Map>)baseDao.list("CMP050100DAO.thingOwnerList", inMap);
					
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void thingWtnncList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
        if(inMap != null){
        	String sParam = (String)inMap.get("THING_CL");
    		inMap.put("ARR_THING_CL", sParam.split(","));
        }
		

		records = (List<Map>)baseDao.list("CMP050100DAO.thingWtnncList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void ownerThingWithPartcpntList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		if(inMap != null){
			String sParam = (String)inMap.get("THING_CL");
			inMap.put("ARR_THING_CL", sParam.split(","));
		}
		

		records = (List<Map>)baseDao.list("CMP050100DAO.ownerThingWithPartcpntList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void ownerThingList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		if(inMap != null){
			String sParam = (String)inMap.get("THING_CL");
			inMap.put("ARR_THING_CL", sParam.split(","));
		}
		

		records = (List<Map>)baseDao.list("CMP050100DAO.ownerThingList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void ownerPartcpntList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		if(inMap != null){
			String sParam = (String)inMap.get("THING_CL");
			inMap.put("ARR_THING_CL", sParam.split(","));
		}
		

		records = (List<Map>)baseDao.list("CMP050100DAO.ownerPartcpntList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void dscssDocList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050100DAO.dscssDocList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	@SuppressWarnings({ "rawtypes" })
	public void thingWtnncCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP050100DAO.thingWtnncU", map);
			}
		}
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void ownerDetail(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050100DAO.ownerDetail", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void aceptncAdjdcDetail(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050100DAO.aceptncAdjdcDetail", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void thingOwnerExcelList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050100DAO.thingOwnerExcelList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void thingPartcpntExcelList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050100DAO.thingPartcpntExcelList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void printPopUp(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050100DAO.printPopUp", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void printDs1(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		if(inMap != null){ // null check (code inspection)
			String sParam = (String)inMap.get("OWNER_NO");  // Type casting 오류 수저(code inspection)
			inMap.put("ARR_OWNER_NO", sParam.split(","));

			sParam = (String)inMap.get("THING_CL");  // Type casting 오류 수저(code inspection)
			inMap.put("ARR_THING_CL", sParam.split(","));
		}
		
		List <Map> records;
		DataSetMap outDsMap;

		records = (List<Map>)baseDao.list("CMP050100DAO.printMain", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		records = (List<Map>)baseDao.list("CMP050100DAO.printWtnncList", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);
		
		records = (List<Map>)baseDao.list("CMP050100DAO.printPartcpntList", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output3", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void printDs3(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		if(inMap != null){ // null check (code inspection)
			String sParam = (String)inMap.get("OWNER_NO");  // Type casting 오류 수저(code inspection)
			inMap.put("ARR_OWNER_NO", sParam.split(","));

			sParam = (String)inMap.get("THING_CL");  // Type casting 오류 수저(code inspection)
			inMap.put("ARR_THING_CL", sParam.split(","));
		}
		
		
		List <Map> records;
		DataSetMap outDsMap;

		records = (List<Map>)baseDao.list("CMP050100DAO.printMain", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		records = (List<Map>)baseDao.list("CMP050100DAO.printWtnncDscssList", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);
		
		records = (List<Map>)baseDao.list("CMP050100DAO.dscssDocList", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output3", outDsMap);
		
		records = (List<Map>)baseDao.list("CMP050100DAO.printPartcpntList", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output4", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void printDs4(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		if(inMap != null){ // null check (code inspection)
			String sParam = (String)inMap.get("OWNER_NO");  // Type casting 오류 수저(code inspection)
			inMap.put("ARR_OWNER_NO", sParam.split(","));

			sParam = (String)inMap.get("THING_CL");  // Type casting 오류 수저(code inspection)
			inMap.put("ARR_THING_CL", sParam.split(","));
		}
		
		
		List <Map> records;
		DataSetMap outDsMap;

		records = (List<Map>)baseDao.list("CMP050100DAO.printMain", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		records = (List<Map>)baseDao.list("CMP050100DAO.dscssDocList", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void dscssDocCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				int sn = (Integer)baseDao.select("CMP040100DAO.dscssCrcmstncsSn", map);
				map.put("DSCSS_SN", sn);
				baseDao.insert("CMP050100DAO.dscssDocC", map);		
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP050100DAO.dscssDocU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP050100DAO.dscssDocD", map);		
			}
		}
		
		list = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP050100DAO.ownerU", map);
			}
		}
		
		list = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if (rowType == DataSet.ROW_TYPE_INSERTED) {
				int cnt = (Integer)baseDao.select("CMP050300DAO.aceptncAdjdcCnt", map);
				if(cnt >= 1){
					baseDao.update("CMP050100DAO.aceptncAdjdcU", map);
				}else{
					baseDao.insert("CMP050100DAO.aceptncAdjdcC", map);
				}
			} else if (rowType == DataSet.ROW_TYPE_UPDATED) {
				baseDao.update("CMP050100DAO.aceptncAdjdcU", map);
			}
			
			if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP050100DAO.aceptncAdjdcU", map);
			}
		}
	}
	
}
