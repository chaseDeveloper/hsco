package hsco.mis.fun.FUN010103;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: FUN010103ServiceImpl.java
 * @Description  	: 브랜치계좌 테이블을 관리하는 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2015. 07. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 02.				   양성모				최초생성
 * </pre>  
 */

@Service("fun010103Service")
public class FUN010103ServiceImpl extends BaseService implements FUN010103Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /**
	 * 브랜치계좌 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBranchAcnutList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("FUN010103DAO.selectBranchAcnutList", inMap));
		
		outDataset.put("output1", outDsMap);	
		
	}
	

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void autosave(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		List <Map> records;

		records = (List<Map>)baseDao.list("FUN010103DAO.selectCb2AcctHisList");
		
		int listSize = (records == null) ? 0 : records.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = records.get(x);
			
			baseDao.insert("FUN010103DAO.BranchAcnutC", map);
		}
	}
	

	/**
	 * 브랜치계좌 CUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int saveBranchAcnutCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN010103DAO.BranchAcnutC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN010103DAO.BranchAcnutU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("FUN010103DAO.BranchAcnutD", map);
					break;
			}	
		}

		return iRow;
	
	}	
	
}
