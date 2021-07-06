package hsco.pms.cmp.CMP010700;

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
 * @Class Name   	: CMP010700ServiceImpl.java
 * @Description  	: 법정동코드를 관리하는 서비스 구현체 클래스
 * @author       	: 변승우
 * @since        	: 2015. 6. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 16.					변승우				최초생성
 * </pre>  
 */

@Service("CMP010700Service")
public class CMP010700ServiceImpl  extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(CMP010700ServiceImpl.class);
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void signguNmList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		if(log.isInfoEnabled()) log.info("signguNmList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		   
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP010700DAO.signguNmList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectLegaldongCodeList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		   
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP010700DAO.selectLegaldongCodeList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}
	
	@SuppressWarnings("rawtypes")
	public void legaldongCodeCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap   = (DataSetMap) inDataset.get("input1");
		DataSetMap inDsExMap = (DataSetMap) inDataset.get("input2");

		if(inDsExMap != null) {
			if(inDsExMap.size() > 0 ) {
				Map dummy = null;
				
				baseDao.update("CMP010700DAO.legaldongCodeDAll", dummy);
				
				for (int x = 1; x < inDsExMap.size(); x++) {
					Map map = inDsExMap.get(x);
					map.put("LEGALDONG_CODE", map.get("Column0"));
					map.put("LOCPLC_NM", map.get("Column1"));
					
					baseDao.insert("CMP010700DAO.legaldongCodeC", map);
				}
			}
		}
		
		for (int x = 0; x < inDsMap.size(); x++) {
			Map map = inDsMap.get(x);
			
			if(("Y").equals(map.get("EXCELGBN").toString())) continue;
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("CMP010700DAO.legaldongCodeC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("CMP010700DAO.legaldongCodeU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("CMP010700DAO.legaldongCodeD", map);
			}
		}
	}
}