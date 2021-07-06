package hsco.pms.sls.hou.std.SLS010100;

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
 * @Class Name   	: SLS010100ServiceImpl.java
 * @Description  	: 
 * @author       	: 최승락
 * @since        	: 2015. 7.25.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 25.				   최승락				최초생성
 * </pre>
 */
@Service("SLS010100Service")
public class SLS010100ServiceImpl extends BaseService implements SLS010100Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

	/**
	 * 주택기본정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SLS010100DAO.selectHouseList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	}
		
	/**
	 * 증액이율정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectIntrtList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;

			
			records = (List<Map>)baseDao.list("SLS010100DAO.selectIntrtList", inMap);
			
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);		
	}
	
	//  저장
	
	public int save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		int iRow = 0;
		iRow += saveHouseList(tranInfo, inVar, inDataset, outVar, outDataset);
		iRow += saveIntrtList(tranInfo, inVar, inDataset, outVar, outDataset);
		return iRow;
	}	
	
	/**
	 * 주택기본정보 신규,수정,삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes" })	
	public int saveHouseList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					
					String houseCodeExistYn = (String)baseDao.select("SLS010100DAO.selectHouseCodeExistYn", map);
					if("N".equals(houseCodeExistYn)) {
						baseDao.insert("SLS010100DAO.insertHouseList", map);						
					} else {
						String houseCode = (String)map.get("HOUSE_CODE");
						throw new NexaServiceException("info.중복.재입력.요청", "주택코드(" + houseCode + ") ");						
					}
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SLS010100DAO.updateHouseList", map);
					break;
				case DataSet.ROW_TYPE_DELETED :

					String houseCodeCnt = (String)baseDao.select("SLS010100DAO.houseCodeCnt", map);
					if("N".equals(houseCodeCnt)) {
						baseDao.delete("SLS010100DAO.deleteIntrt", map);
						baseDao.delete("SLS010100DAO.deleteHouseList", map);						
					} else {
						//String houseCode = (String)map.get("HOUSE_CODE");
						throw new NexaServiceException("info.사용중");
						//throw new NexaServiceException("info.조회.데이터.없음", "");						
						//throw new NexaServiceException("info.중복.재입력.요청", "주택코드(" + houseCode + ") ");	
					}					

					break;
			}			
		}
		
		return iRow;
	}
	
	/**
	 * 증액이율정보 신규,수정,삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes" })	
	public int saveIntrtList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input2");
		
		int size = (list==null) ? 0 : list.size();		
		
		for (int x = 0; x < size; x++) {
						
			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("SLS010100DAO.insertIntrtList", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SLS010100DAO.updateIntrtList", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SLS010100DAO.deleteIntrtList", map);
					break;
			}
		}
		
		return iRow;
	}	
		
}
