package hsco.hpm.bbs.HPM030101;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HPM030101ServiceImpl.java
 * @Description  	: 게시판생성및조회
 * @author       	: 김지훈
 * @since        	: 2016. 04. 19.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 04. 19.					김지훈			최초생성
 * </pre>  
 */
@Service("HPM030101Service")
public class HPM030101ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(HPM030101ServiceImpl.class);
	
	/**
	 * 게시판ID 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBbsId( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("HPM030101DAO.selectBbsId", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 게시판마스터 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBbsMaster( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("HPM030101DAO.selectBbsMaster", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 게시판마스터 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes" })
	public void saveBbsMaster(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for(Map map : list.getRowMaps()){
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("HPM030101DAO.insertBbsMaster", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("HPM030101DAO.updateBbsMaster", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				//baseDao.delete("HPM030101DAO.deleteBbsMaster", map);	
			}
		}
	}
}