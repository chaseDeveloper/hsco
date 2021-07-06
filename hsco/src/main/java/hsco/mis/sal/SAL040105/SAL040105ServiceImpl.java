package hsco.mis.sal.SAL040105;

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
import hsco.cmm.util.ObjectUtil;



/**
 * <pre>
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL040105ServiceImpl.java
 * @Description  	: 퇴직금계산관리
 * @author       	: 이상명
 * @since        	: 2017. 9. 22.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 9. 22.					이상명				최초생성
 * </pre>  
 */

@Service("SAL040105Service")
public class SAL040105ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /**
	 * 퇴직금계산 목록
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRetireSalaryList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SAL040105DAO.selectRetireSalaryList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	
   		
   	}
    
    /**
     * 퇴직금계산 상세정보
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRetireSalary( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> records = (List<Map>)baseDao.list("SAL040105DAO.selectRetireSalary", inMap);
		List<Map> records2 = (List<Map>)baseDao.list("SAL040105DAO.selectRetireAvrgwageList", inMap);
		List<Map> records3 = (List<Map>)baseDao.list("SAL040105DAO.selectMidRetireSalaryList", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		
		outDsMap1.setRowMaps(records);
		outDsMap2.setRowMaps(records2);
		outDsMap3.setRowMaps(records3);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
   	}
    
    
    /**
   	 * 퇴직대상자관리 등록, 수정, 삭제
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public int retireSalaryCUD( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
   		
   		int iRow = 0;
   		
   		DataSetMap list = (DataSetMap) inDataset.get("input8");		
   		int listSize = (list == null) ? 0 : list.size();		
   		for (int x = 0; x < listSize; x++) {
   				
   			Map map = list.get(x);			
   			// 세션정보 설정
   			try {
   				ObjectUtil.setUserToMap(map);
   			}
   			catch( Exception e) {
   				throw new NexaServiceException(e); 
   			}	
   			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 			
   			switch(rowType) {
   				case DataSet.ROW_TYPE_INSERTED :
   					break;
   				case DataSet.ROW_TYPE_UPDATED :
   					iRow += baseDao.update("SAL040105DAO.RetireSalaryU", map);
   					baseDao.update("SAL040104DAO.procRtrpayAvrgwage", map);
   					break;
   				case DataSet.ROW_TYPE_DELETED :
   					baseDao.delete("SAL040104DAO.deleteRtrpayAvrgwage", map);
   					iRow += baseDao.delete("SAL040104DAO.RetireTrgterD", map);
   					break;			
   			}				
   		}		
   		return iRow;
   	}
   
    
   	
}
