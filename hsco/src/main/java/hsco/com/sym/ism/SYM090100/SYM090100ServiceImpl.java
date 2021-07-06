package hsco.com.sym.ism.SYM090100;

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
 * @Class Name   	: SYM090100ServiceImpl.java
 * @Description  	: 내부결재모형을 관리하는 서비스 구현체 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 9. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------

 * </pre>  
 */
@Service("SYM090100Service")
public class SYM090100ServiceImpl extends BaseService implements SYM090100Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM090100ServiceImpl.class);
	
	/**
	 * 내부결재양식 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void SYM090100List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		records = (List<Map>)baseDao.list("SYM090100DAO.selectInnerSanctnMdlList", inMap);		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("innerSanctnMdl", outDsMap);
	}
	
	/**
	 * 내부결재양식 등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	
	public void SYM090100SanctnMdlCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap dsMap = (DataSetMap) inDataset.get("input1");
		for(Map map : dsMap.getRowMaps()){
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("SYM090100DAO.insertInnerSanctnMdl", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("SYM090100DAO.updateInnerSanctnMdl", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("SYM090100DAO.deleteInnerSanctnMdl", map);
					break;
				default:
					break;
			}
		}
	}
}
