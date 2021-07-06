package hsco.mis.sal.SAL030107;

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
 * @Class Name   	: SAL030107ServiceImpl.java
 * @Description  	: 급여인상관리
 * @author       	: 이상명
 * @since        	: 2015. 11. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 17.					이상명				최초생성
 * </pre>  
 */

@Service("SAL030107Service")
public class SAL030107ServiceImpl extends BaseService implements SAL030107Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /**
	 * 급여인상조회 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectUpSalaryCreatList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL030107DAO.selectUpSalaryCreatList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL030107DAO.selectUpSalaryCreatList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   	}
    
    /**
     * 급여인상조회2 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectUpSalaryPymntList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL030107DAO.selectUpSalaryPymntList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL030107DAO.selectUpSalaryPymntList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);    
    }
    
    /**
     * 인상기본급내역을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectUpSalaryTableList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input3");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL030107DAO.selectUpSalaryTableList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL030107DAO.selectUpSalaryTableList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output3", outDsMap);    
    }
    
    /**
     * 급여인상계산 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int UpSalaryPymntC( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input2");     
        Map map = list.get(0);
        // 세션정보 설정
        try {
            ObjectUtil.setUserToMap(map);
        }
        catch( Exception e) {
            throw new NexaServiceException(e); 
        }   

        // 인상봉급테이블 삭제
        baseDao.delete("SAL030107DAO.deleteUpIncrse_Salary_Table", map);
        
        // 인상연봉정보 삭제
        baseDao.delete("SAL030107DAO.deleteUpIncrse_Anslry_Info", map);
        
        // 인상봉급테이블 생성
        baseDao.insert("SAL030107DAO.insertUpIncrse_Salary_Table", map);
        
        // 인상연봉정보 생성
        baseDao.insert("SAL030107DAO.insertUpIncrse_Anslry_Info", map);
        
        // 마스터 삭제
        baseDao.delete("SAL030107DAO.deleteUpSalaryPymntD_1", map);
        
        // 지급내역 삭제
        baseDao.delete("SAL030107DAO.deleteUpSalaryPymntD_2", map);
        
        // 생성내역 삭제
        baseDao.delete("SAL030107DAO.deleteUpSalaryPymntD_3", map);
        
        /*
        // 인상 기본급 삭제
        baseDao.delete("SAL030107DAO.deleteUpSalaryPymntD", map);
        
        // 인상 기본급 입력
        baseDao.insert("SAL030107DAO.insertUpSalaryPymnt_1", map);        
        
        // 인상 지급마스터 생성
        baseDao.insert("SAL030107DAO.insertUpSalaryPymnt_2", map);
        */
        
        // 인상 지급마스터 생성
        baseDao.insert("SAL030107DAO.insertUpSalaryPymnt_2", map);
        
        // 기본급 차액
        baseDao.insert("SAL030107DAO.insertUpSalaryPymntC_1", map);
        
        // 건설수당 차액
        baseDao.insert("SAL030107DAO.insertUpSalaryPymntC_2", map);
        
        // 연차수당 차액
        baseDao.insert("SAL030107DAO.insertUpSalaryPymntC_3", map);
        
        // 시간외수당 차액
        baseDao.insert("SAL030107DAO.insertUpSalaryPymntC_4", map);
        
        // 휴일근무 차액
        baseDao.insert("SAL030107DAO.insertUpSalaryPymntC_4_1", map);
        
        // 대우수당 차액
        baseDao.insert("SAL030107DAO.insertUpSalaryPymntC_5", map);
        
        // 임금피크제 공제 생성
        baseDao.insert("SAL030107DAO.insertUpDdcPymntC_1", map);
        
        // 0원 삭제
        baseDao.insert("SAL030107DAO.deleteUpDdcPymntD_2_1", map);
        baseDao.insert("SAL030107DAO.deleteUpSalaryPymntD_2_2", map);
        
        // 월급여 지급/공제 집계처리 프로시저 (전체)
        baseDao.insert("SAL030107DAO.SPSAL_MT_SALARY_PYMNT_ALL_U2", map);
        if ("-1".equals(map.get("OUT_RESULT_CD").toString())) {
        	throw new NexaServiceException("errors.항목.값.무효", map.get("OUT_RESULT_MSG").toString());
        }
        if ("-2".equals(map.get("OUT_RESULT_CD").toString())) {
        	throw new NexaServiceException("err.예외상황.발생.SQL", map.get("OUT_RESULT_MSG").toString());
        }
        
        // 0원 삭제
        baseDao.insert("SAL030107DAO.deleteUpSalaryPymntD_2_1", map);
        
        // 급여인상 생성내역 생성
        baseDao.insert("SAL030107DAO.insertUpSalaryPymntC_6", map);
     		
        return iRow;
    }
    
    /**
     * 급여인상계산 차액계산
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int UpSalaryPymntC_2( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input2");     
             
        Map map = list.get(0);          
        // 세션정보 설정
        try {
            ObjectUtil.setUserToMap(map);
        }
        catch( Exception e) {
            throw new NexaServiceException(e); 
        }   
       
        // 기본급 차액
        baseDao.insert("SAL030107DAO.insertUpSalaryPymntC_1", map);
        
        // 건설수당 차액
        baseDao.insert("SAL030107DAO.insertUpSalaryPymntC_2", map);
        
        // 연차수당 차액
        baseDao.insert("SAL030107DAO.insertUpSalaryPymntC_3", map);
        
        // 시간외수당 차액
        baseDao.insert("SAL030107DAO.insertUpSalaryPymntC_4", map);
        
        // 대우수당 차액
        baseDao.insert("SAL030107DAO.insertUpSalaryPymntC_5", map); 
        
        return iRow;
    }
    
    /**
     * 급여인상계산 차액계산
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int UpSalaryPymntCre_2( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input2");     
                
        Map map = list.get(0);          
        // 세션정보 설정
        try {
            ObjectUtil.setUserToMap(map);
        }
        catch( Exception e) {
            throw new NexaServiceException(e); 
        }   
               
        // 급여인상 생성내역 생성
        baseDao.insert("SAL030107DAO.insertUpSalaryPymntC_6", map);
       
        return iRow;
    }
    
    /**
     * 급여인상 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int UpSalaryPymntD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input2");     
             
                
        Map map = list.get(0);          
        // 세션정보 설정
        try {
            ObjectUtil.setUserToMap(map);
        }
        catch( Exception e) {
            throw new NexaServiceException(e); 
        }   
       
        // 마스터 삭제
        baseDao.delete("SAL030107DAO.deleteUpSalaryPymntD_1", map);
        
        // 지급내역 삭제
        baseDao.delete("SAL030107DAO.deleteUpSalaryPymntD_2", map);
        
        // 생성내역 삭제
        baseDao.delete("SAL030107DAO.deleteUpSalaryPymntD_3", map);
        
        // 공제내역 삭제
        baseDao.delete("SAL030107DAO.deleteUpDdcPymntD_1", map);
        
        
        // 인상 기본급 삭제
        //baseDao.delete("SAL030107DAO.deleteUpSalaryPymntD", map);
        
        // 기본급테이블 적용내역 삭제
        //baseDao.delete("SAL030107DAO.deleteUpSalaryTableList", map);
             
        return iRow;
    }
    
    /**
     * 인상기본급 삭제후 입력
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int insertUpSalaryTableList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input4");     
   
        Map map = list.get(0);          
        // 세션정보 설정
        try {
            ObjectUtil.setUserToMap(map);
        }
        catch( Exception e) {
            throw new NexaServiceException(e); 
        }   
       
        // 인상 기본급 삭제
        baseDao.delete("SAL030107DAO.deleteUpSalaryTableList", map);
               
        // 인상 기본급 입력
        baseDao.insert("SAL030107DAO.insertUpSalaryTableList", map);        
             
        return iRow;
    }

    /**
	 * 직급별 평균 인상률
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void clsfAvgIncDtls( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	//====================================================================================
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		List <Map> records2;
		List <Map> records3;

		// 직급별 평균 인상율 계산
		records 	= (List<Map>)baseDao.list("SAL030107DAO.clsfAvgIncDtls", 		inMap);
		
		// 직급별 평균 인상율 계산 (과년도 직급별 임금, 6급직원 곱하기 2 처리)
		records2 	= (List<Map>)baseDao.list("SAL030107DAO.clsfAvgIncDtls2", 		inMap);
		
		// 직급별 평균 인상율 계산 (과년도 직급별 임금 상세)
		records3 	= (List<Map>)baseDao.list("SAL030107DAO.clsfAvgIncDtls2_DTL", 	inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		outDataset.put("output2", outDsMap2);

		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps(records3);
		outDataset.put("output3", outDsMap3);

   	}    
}
