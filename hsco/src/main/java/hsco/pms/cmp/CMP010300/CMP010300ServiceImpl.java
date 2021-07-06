package hsco.pms.cmp.CMP010300;

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
 * @Class Name   	: CMP010300ServiceImpl.java
 * @Description  	: 단가등록(감정평가비대상)을 관리하는 서비스 구현체 클래스
 * @author       	: 변승우
 * @since        	: 2015. 6. 26.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 26.					변승우				최초생성
 * </pre>  
 */

@Service("CMP010300Service")
public class CMP010300ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(CMP010300ServiceImpl.class);
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectBsnsbyUntpcList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		if(log.isInfoEnabled()) log.info("selectBsnsbyUntpcList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
	   
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP010300DAO.selectBsnsbyUntpcList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}

	@SuppressWarnings("rawtypes")
	public void bsnsbyUntpcCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP010300DAO.bsnsbyUntpcC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP010300DAO.bsnsbyUntpcU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("CMP010300DAO.bsnsbyUntpcD", map);
			}
		}
	}
}
