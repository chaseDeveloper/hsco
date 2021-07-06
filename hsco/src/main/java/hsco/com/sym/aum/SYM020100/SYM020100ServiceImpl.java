package hsco.com.sym.aum.SYM020100;

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
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM020100ServiceImpl.java
 * @Description  	: 권한그룹관리
 * @author       	: 정윤원
 * @since        	: 2015. 8. 22.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 22.					정윤원				최초생성
 * </pre>
 */
@Service("SYM020100Service")
public class SYM020100ServiceImpl extends BaseService implements SYM020100Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM020100ServiceImpl.class);
	
    /**
	 * 권한그룹 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void SYM020100List(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		
		List <Map> records;
		records = (List)baseDao.list("SYM020100DAO.SYM020100List", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}

    /**
	 * 권한그룹 저장, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public int SYM020100CUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED : 
					baseDao.insert("SYM020100DAO.SYM020100C", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SYM020100DAO.SYM020100U", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SYM020100DAO.SYM020100D", map);
					break;
					default :
			}				
		}  
		
		return iRow;
	}

}



