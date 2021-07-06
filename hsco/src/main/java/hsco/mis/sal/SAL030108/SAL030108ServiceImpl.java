package hsco.mis.sal.SAL030108;

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
 * @Class Name   	: SAL030108ServiceImpl.java
 * @Description  	: 급여인상확정관리
 * @author       	: 이상명
 * @since        	: 2015. 11. 19.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 19.					이상명				최초생성
 * </pre>  
 */

@Service("SAL030108Service")
public class SAL030108ServiceImpl extends BaseService implements SAL030108Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /**
	 * 월급여기본자료 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectUpSalaryDcsnList( DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL030108DAO.selectUpSalaryDcsnList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL030108DAO.selectUpSalaryDcsnList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		
		DataSetMap inDsMap2 = (DataSetMap)inDataset.get("input2");
		
		Map inMap2 = null;
		
		if (inDsMap2 != null)
			inMap2 = inDsMap2.get(0);
		
	
		List <Map> records2;
		if (inMap2 != null) {
			records2 = (List<Map>)baseDao.list("SAL030108DAO.selectUpSalaryDcsnList", inMap2);
		} else {
			records2 = (List<Map>)baseDao.list("SAL030108DAO.selectUpSalaryDcsnList", inVar);
		}
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output2", outDsMap2);
		
	}
	
   	
	public int UpSalaryDcsnU( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {	
		
		int iRow = 0;
		DataSetMap list = inDataset.get("input3");
		@SuppressWarnings("unchecked")
		Map<String, Object> map = list.get(0);	
		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(map);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		}
		
		// 지급  ++++++++++++++++++++++++++++++++++++++++++++++
		/*
		// 기본급
		baseDao.insert("SAL030108DAO.UpSalaryDcsn_P1010", map);	
		
		// 건설수당
        baseDao.insert("SAL030108DAO.UpSalaryDcsn_P1050", map);
        
        // 시간외수당
        baseDao.insert("SAL030108DAO.UpSalaryDcsn_P1910", map);
        
        // 대우수당
        baseDao.insert("SAL030108DAO.UpSalaryDcsn_P1220", map);
        
        // 연차수당
        baseDao.insert("SAL030108DAO.UpSalaryDcsn_P1110", map);
          
        // 과세총액
        baseDao.insert("SAL030108DAO.UpSalaryDcsn_TAXT_AMOUNT", map);  	
 		
 		// 비과세총액 		
 		baseDao.insert("SAL030108DAO.UpSalaryDcsn_TAXXMPT_AMOUNT", map);
 	 	
        // 급여지급총액     
        baseDao.insert("SAL030108DAO.UpSalaryDcsn_SALARY_PYMNT_TOTAMT", map);
      
        // 수당지급총액       
        baseDao.insert("SAL030108DAO.UpSalaryDcsn_ALLWNC_PYMNT_TOTAMT", map);
        
        // 지급총액
        baseDao.insert("SAL030108DAO.UpSalaryDcsn_TOT_PYMNTAMT", map);
 	   		
 		
 		// 공제 ++++++++++++++++++++++++++++++++++++++++++++++++
 	 	
 	 		
		// 공제총액 		
 		baseDao.insert("SAL030108DAO.UpSalaryDcsn_DDC_TOTAMT", map);
 		
 		// 실수령액
 		baseDao.insert("SAL030108DAO.UpSalaryDcsn_RL_RECPT_AMOUNT", map);
 		*/
 		// 마감여부, 마감일자 - 수당내역
 		baseDao.insert("SAL030108DAO.UpSalaryDcsn_CLOS_AT", map);
 		
 	    // 마감여부, 마감일자 - 공제내역
 	 	baseDao.insert("SAL030108DAO.UpSalaryDcsn_CLOS_AT2", map);
 	 	
 	    // 마감여부, 마감일자 - 마스터
 	 	baseDao.insert("SAL030108DAO.UpSalaryDcsn_CLOS_AT3", map);
 	 	
 	    // 마감여부, 마감일자 - 생성내역
 	 	baseDao.insert("SAL030108DAO.UpSalaryDcsn_CLOS_AT4", map);
 	 	
 	    // 급여이체데이터생성
 	 	//baseDao.insert("SAL030108DAO.UpSalary_Transfr", map); 	 	
		
	    return iRow;
	
   	}
	
	
	public int UpSalaryDcsn2U( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {	
		
		int iRow = 0;
		DataSetMap list = inDataset.get("input3");
		@SuppressWarnings("unchecked")
		Map<String, Object> map = list.get(0);	
		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(map);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		}
		
		// 취소 마스터
		baseDao.insert("SAL030108DAO.UpSalaryDcsn_CANCEL", map);
		
		// 취소 수당
		baseDao.insert("SAL030108DAO.UpSalaryDcsn_CANCEL2", map);
		
		// 취소 공제
		baseDao.insert("SAL030108DAO.UpSalaryDcsn_CANCEL3", map);
		
		// 취소 생성내역
		baseDao.insert("SAL030108DAO.UpSalaryDcsn_CANCEL4", map);
		
		// 취소 급여이체데이터
		//baseDao.delete("SAL030108DAO.UpSalaryDcsn_CANCEL5", map);
		
		
		return iRow;
		
   	}
		
	
}
