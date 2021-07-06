package hsco.mis.sal.SAL050201;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;



/**
 * <pre>
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL050201ServiceImpl.java
 * @Description  	: 연말정산기본생성관리
 * @author       	: 이상명
 * @since        	: 2015. 10. 12.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 12.					이상명				최초생성
 * </pre>  
 */

@Service("SAL050201Service")
public class SAL050201ServiceImpl extends BaseService implements SAL050201Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**
	 * 연말정산기본생성관리조회 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectYndExcclcCreatList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL050201DAO.selectYndExcclcCreatList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL050201DAO.selectYndExcclcCreatList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
   	}
    
    /**
	 * 연말정산기본생성관리조회2 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectYndExcclcBsisList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL050201DAO.selectYndExcclcBsisList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL050201DAO.selectYndExcclcBsisList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
   	}
    
    @SuppressWarnings({ "rawtypes" })
   	
   	public int YndExcclcCreatC( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
   		
   		int iRow = 0;
   		
   		DataSetMap list = (DataSetMap) inDataset.get("input3");		
   	   		  				
   		Map map = list.get(0);			
		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(map);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		}		
		
		baseDao.insert("SAL050201DAO.YndExcclcCreatC", map);
		
		// 근로소득공제금
		baseDao.update("SAL050201DAO.YndExcclcCreatU", map);
		
		
		// 노조회비 기부금
		baseDao.insert("SAL050201DAO.YndExcclcCtbnyC", map);
		
		// 인적공제 본인
        baseDao.insert("SAL050201DAO.YndExcclcHnddcC", map);
        
        // 인적공제 공제가족
        baseDao.insert("SAL050201DAO.YndExcclcHnddc2C", map);
        
        // 비과세소득
        baseDao.insert("SAL050201DAO.YndExcclcTaxxC", map);
		
   			
   		return iRow;
   	}
    
    @SuppressWarnings({ "rawtypes" })
   	
   	public int YndExcclcCreatD( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
   		
   		int iRow = 0;
   		
   		DataSetMap list = (DataSetMap) inDataset.get("input3");		
   	   		  				
   		Map map = list.get(0);			
		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(map);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		}		
		
		// 연말정산 계산정보
		baseDao.insert("SAL050201DAO.YndExcclcCalD", map);
		
		// 연말정산 내역정보
		baseDao.insert("SAL050201DAO.YndExcclcCreatD", map);	
		
		// 연말정산 국제청자료
		baseDao.insert("SAL050201DAO.YndExcclcNtsD", map);
		
		// 노조회비 기부금
		baseDao.insert("SAL050201DAO.YndExcclcCtbnyD", map);
		
		// 인적공제 삭제
        baseDao.insert("SAL050201DAO.YndExcclcHnddcD", map);
        
        // 비과세소득 삭제
        baseDao.insert("SAL050201DAO.YndExcclcTaxxD", map);
		
		
   			
   		return iRow;
   	}
    
}
