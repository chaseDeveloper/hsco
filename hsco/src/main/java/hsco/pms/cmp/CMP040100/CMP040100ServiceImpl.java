package hsco.pms.cmp.CMP040100;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("CMP040100Service")
public class CMP040100ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(CMP040100ServiceImpl.class);

	//공문목록 조회
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbcmpOfldcInfoList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		if(log.isInfoEnabled()) log.info("tbcmpOfldcInfoList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040100DAO.selectTbcmpOfldcInfoList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	//공문대상자 조회
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbcmpOfldcTrgterList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		if(log.isInfoEnabled()) log.info("tbcmpOfldcTrgterList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040100DAO.selectTbcmpOfldcTrgterList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	//소유자목록 조회
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbcmpThingOwnerList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		if(log.isInfoEnabled()) log.info("tbcmpThingOwnerList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040100DAO.selectTbcmpThingOwnerList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	//합의목록 조회
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbcmpDscssDocList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		if(log.isInfoEnabled()) log.info("tbcmpDscssDocList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040100DAO.selectTbcmpDscssDocList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//공문대상자(팝업) 조회
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbcmpThingWtnncListPop(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		if(log.isInfoEnabled()) log.info("tbcmpThingWtnncListPop Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040100DAO.selectTbcmpThingWtnncListPop", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//협의대상자(팝업) 조회
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbcmpThingWtnncListPop2(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		if(log.isInfoEnabled()) log.info("tbcmpThingWtnncListPop2 Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040100DAO.selectTbcmpThingWtnncListPop2", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//공문정보(팝업) 조회
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbcmpOfldcInfoListPop(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		if(log.isInfoEnabled()) log.info("tbcmpOfldcInfoListPop Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040100DAO.selectTbcmpOfldcInfoListPop", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//공문 등록, 수정, 삭제
	@SuppressWarnings({ "rawtypes" })
	
	public void tbcmpOfldcInfoCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP040100DAO.tbcmpOfldcInfoD", map); //공문 삭제
			}
			else if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP040100DAO.tbcmpOfldcInfoC", map); //공문 생성
			}
			else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP040100DAO.tbcmpOfldcInfoU", map); //공문 수정
			}
		}

		list = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP040100DAO.tbcmpOfldcTrgterD", map); //공문대상자 삭제
			}
			else if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP040100DAO.tbcmpOfldcTrgterC", map); //공문대상자 생성
			}
			else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP040100DAO.tbcmpOfldcTrgterU", map); //공문대상자 수정
			}
		}
	}
	
	//협의문서 등록, 수정, 삭제
	@SuppressWarnings({ "rawtypes" })
	
	public void tbcmpDscssDocCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP040100DAO.tbcmpDscssDocD", map); //공문 삭제
			}
			else if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP040100DAO.tbcmpDscssDocC", map); //공문 생성
			}
			else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP040100DAO.tbcmpDscssDocU", map); //공문 수정
			}
		}
	}
	
	//협의문서 엑셀 등록
	@SuppressWarnings({ "rawtypes" })
	
	public void tbcmpDscssDocExcelC(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				
				if(null == map) {
					continue;
				}
				
				baseDao.insert("CMP040100DAO.tbcmpDscssDocExcelC", map); //공문 생성
			}
		}
	}
	
	//공문대상자 등록, 수정, 삭제
	@SuppressWarnings({ "rawtypes" })
	
	public void tbcmpOfldcTrgterCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP040100DAO.tbcmpOfldcTrgterD", map); //공문대상자 삭제
			}
			else if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP040100DAO.tbcmpOfldcTrgterC", map); //공문대상자 생성
			}
			else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP040100DAO.tbcmpOfldcTrgterU", map); //공문대상자 수정
			}
		}
	}
	
	
	//소유자 목록(기존)
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void dscssOwnerList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		if(log.isInfoEnabled()) log.info("dscssOwnerList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040100DAO.dscssOwnerList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//공문 목록(기존)
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void dscssCrcmstncsList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040100DAO.dscssCrcmstncsList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//공문 목록(소유자 정보 포함)(기존)
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void dscssCrcmstncsWithOwnerList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040100DAO.dscssCrcmstncsWithOwnerList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//공문 생성(기존)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void dscssCrcmstncsCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				DataSetMap ownerlist = (DataSetMap) inDataset.get("input2");
				for (int i=0; i<ownerlist.size(); i++) {
					Map ownerMap = ownerlist.get(i);
					int sn = (Integer)baseDao.select("CMP040100DAO.dscssCrcmstncsSn", map);
					map.put("DSCSS_SN", sn);
					map.put("OWNER_NO", ownerMap.get("OWNER_NO"));
					map.put("ACEPTNC_ADJDC_ODR", 1); 
					map.put("APPLC_AT", "1");
					baseDao.insert("CMP040100DAO.dscssCrcmstncsC", map);	//공문 생성
					baseDao.insert("CMP040100DAO.dscssDocC", map);		//협의 내역 생성
				}
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP040100DAO.dscssCrcmstncsU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP040100DAO.dscssCrcmstncsD", map);	//공문 삭제
				baseDao.delete("CMP040100DAO.dscssDocD", map);		//협의 내역 삭제
			}
		}
	}
		
	//소유자 목록(기존)
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void thingOwnerList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040100DAO.thingOwnerList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//(기존)
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void dscssDocList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP040100DAO.dscssDocList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//(기존)
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
				baseDao.insert("CMP040100DAO.dscssDocC", map);		
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP040100DAO.dscssDocU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("CMP040100DAO.dscssDocD", map);		
			}
		}
	}
}
