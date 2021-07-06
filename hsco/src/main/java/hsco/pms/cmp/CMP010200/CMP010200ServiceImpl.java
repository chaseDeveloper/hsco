package hsco.pms.cmp.CMP010200;

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
 * @Class Name   	: CMP010200ServiceImpl.java
 * @Description  	: 사용자별 사업지구를 관리하는 서비스 구현체 클래스
 * @author       	: 변승우
 * @since        	: 2015. 6. 30.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 30.					변승우				최초생성
 * </pre>  
 */

@Service("CMP010200Service")
public class CMP010200ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(CMP010200ServiceImpl.class);
	
	//전체 보상사업지구
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRewardBsnsDstrcList(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		if(log.isInfoEnabled()) log.info("selectRewardBsnsDstrcList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = (Map<String, Object>) inDsMap.get(0).get("USER");
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP010200DAO.selectRewardBsnsDstrcList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
		
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectUserBsnsList(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;

		if (inDsMap != null) {
			inMap = (Map<String, Object>) inDsMap.get(0);
		}
		
		List <Map> records = (List<Map>)baseDao.list("CMP010200DAO.selectUserBsnsList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings("rawtypes")
	public void userBsnsCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP010200DAO.userBsnsC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP010200DAO.userBsnsU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("CMP010200DAO.userBsnsD", map);
			}
		}
	}
}