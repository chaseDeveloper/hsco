package hsco.mis.sal.SAL010111;

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
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL010111ServiceImpl.java
 * @Description  	: 원천징수조정관리
 * @author          : 정  민
 * @since           : 2017. 4. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 4. 07.                    정  민                최초생성
 * </pre>  
 */

@Service("SAL010111Service")
public class SAL010111ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    
    /**
	 * 원천징수조정적용내역 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectWthtxMdatApplcList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("SAL010111DAO.selectWthtxMdatApplcList", inMap));
		
		outDataset.put("output1", outDsMap);
		
	}
	
    /**
	 * 원천징수조정상세정보 상세조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectWthtxMdatDetailInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("SAL010111DAO.selectWthtxMdatDetailInfoList", inMap));
		
		outDataset.put("output1", outDsMap);
		
	}
    
		
    /**
	 * 원천징수조정상세정보 등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int wthtxMdatDetailInfoCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("SAL010111DAO.wthtxMdatDetailInfoC", map);
					iRow ++;
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SAL010111DAO.wthtxMdatDetailInfoU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SAL010111DAO.wthtxMdatDetailInfoD", map);
					break;			
			}				
		}		
		return iRow;
	}
	
	
	/**
	 * 원천징수조정상세정보 일괄생성
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	
	public int wthtxMdatDetailInfoCre( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;
		DataSetMap list = inDataset.get("input1");
		@SuppressWarnings("unchecked")
		Map<String, Object> map = list.get(0);	
		
		// 원천징수조정상세정보 삭제
		baseDao.insert("SAL010111DAO.delWthtxMdatDetailInfo", map);
		
		// 원천징수조정상세정보 생성
		baseDao.insert("SAL010111DAO.wthtxMdatDetailInfoCre", map);
		
		return iRow;
	}
	
	/**
	 * 원천징수조정상세정보 일괄삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	
	public int delWthtxMdatDetailInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;
		DataSetMap list = inDataset.get("input1");
		@SuppressWarnings("unchecked")
		Map<String, Object> map = list.get(0);	
	
		// 원천징수조정 삭제
		baseDao.insert("SAL010111DAO.delWthtxMdatDetailInfo", map);
		
		return iRow;
	}
	
		
}
