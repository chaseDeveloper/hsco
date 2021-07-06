package hsco.mis.sal.SAL030105;

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
 * @Class Name   	: SAL030105ServiceImpl.java
 * @Description  	: 월급여기본자료조회
 * @author       	: 이상명
 * @since        	: 2015. 9. 3.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 3.					이상명				최초생성
 * </pre>  
 */

@Service("SAL030105Service")
public class SAL030105ServiceImpl extends BaseService implements SAL030105Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    
    /**
	 * 월급여확정 내역조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMtSalaryDcsnList( DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) throws NexaServiceException {

		//====================================================================================
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL030105DAO.selectClosAtList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL030105DAO.selectClosAtList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
    }

	@SuppressWarnings("rawtypes")
	public void updateMtSalaryClosAt( DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) throws NexaServiceException {

		//====================================================================================
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		if (inMap != null) {
			baseDao.update("SAL030105DAO.updateMtSalaryClosAt", inMap);
		}
    }
    
    // 월급여 확정
	public void MtSalaryDcsnU( DataSetMap tranInfo, Map<String, Object> inVar,
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
		
		// 월급여 지급/공제 집계처리 프로시저 (전체)
		baseDao.insert("SAL030105DAO.SPSAL_MT_SALARY_PYMNT_ALL_U", map);
		if ("-1".equals(map.get("OUT_RESULT_CD").toString())) {
			throw new NexaServiceException("errors.항목.값.무효", map.get("OUT_RESULT_MSG").toString());
		}
		if ("-2".equals(map.get("OUT_RESULT_CD").toString())) {
			throw new NexaServiceException("err.예외상황.발생.SQL", map.get("OUT_RESULT_MSG").toString());
		}
		
        //======================================================================
        // 마감여부, 마감일자 - 수당내역47
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_CLOS_AT", map);
        
        // 마감여부, 마감일자 - 공제내역48
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_CLOS_AT2", map);
        
        // 마감여부, 마감일자 - 마스터49
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_CLOS_AT3", map);
        
        // 마감여부, 마감일자 - 생성내역50
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_CLOS_AT4", map);
        
        //======================================================================
        // 급여이체데이터생성51
        baseDao.insert("SAL030105DAO.MtSalary_Transfr", map);
        
        // 급여이체데이터생성(공제)52
        baseDao.insert("SAL030105DAO.MtSalary_Transfr_2", map);
        
        // 급여이체데이터(0원 삭제)53
        baseDao.delete("SAL030105DAO.MtSalary_Transfr_3", map);
        
        // 급여계좌정보 수정
        baseDao.delete("SAL030105DAO.MtSalaryBankUpdate", map); 

   	}
 
 	// 월급여 확정취소
	public int MtSalaryDcsn2U( DataSetMap tranInfo, Map<String, Object> inVar,
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
		baseDao.insert("SAL030105DAO.MtSalaryDcsn_CANCEL", map);
		
		// 취소 지급
		baseDao.insert("SAL030105DAO.MtSalaryDcsn_CANCEL2", map);
		
		// 취소 공제
		baseDao.insert("SAL030105DAO.MtSalaryDcsn_CANCEL3", map);
		
		// 취소 생성내역
		baseDao.insert("SAL030105DAO.MtSalaryDcsn_CANCEL4", map);
		
		// 취소 급여이체데이터
		baseDao.delete("SAL030105DAO.MtSalaryDcsn_CANCEL5", map);
		
		return iRow;
   	}

    // 월급여 확정
	public int MtSalaryDcsnU_old( DataSetMap tranInfo, Map<String, Object> inVar,
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
		// 기본급 1
		iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1010", map);
		
		// 건설수당 3
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1050", map);
		
        // 기술수당 4
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1070", map);
        
        // 직책보조비 5
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1955", map);
        
        // 특수업수수당 6
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1090", map);
        
        // 위험수당 7
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1091", map);
        
        // 운전수당 8
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1092", map);
        
        // 가족수당 9
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1080", map);
        
        // 장기근속수당 10
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1060", map);

        // 시간외수당 11
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1910", map);
        
        // 급식보조비  12
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1940", map);
        
        // 교통보조비 13
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1960", map);
        
        // 특정업무수행비 14
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1191", map);
        
        // 대우수당15
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1220", map);
        
        // 현장체제비16
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1991", map);
        
        // 감독수당17
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1992", map);
        
        // 업무추진여비18
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1961", map);
        
        // 학자보조금19
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1140", map);
        
        // 연차수당20
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1110", map);
        
        // 성과급21
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1030", map);
        
        // 인센티브 성과급22
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1150", map);
        
        // 직무수당23
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1957", map);
        
        // 연말정산 환급24
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_P1240", map);
        
        // 과세총액25
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_TAXT_AMOUNT", map);       
        
        // 비과세총액26      
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_TAXXMPT_AMOUNT", map);
        
        // 지급총액 총지급액
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_TOT_PYMNTAMT", map);   
        
        
        // 공제1 ++++++++++++++++++++++++++++++++++++++++++++++++
        // 연말정산 소득세 33 
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2210", map);
        
        // 연말정산 지방소득세 33 
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2021", map);
        
        // 건강보험 34      
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2110", map);
        
        // 국민연금     35  
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2120", map);
        
        // 고용보험     36  
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2150", map);
        
        // 노동조합비    37  
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2250", map);
        
        // 식권구입공제   38  
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2298", map);
        
        // 봉사단기금     39  
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2301", map);
        
        // 기금원금     40  
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2230", map);
        
        // 기금이자     41  
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2240", map);     
                
        // 급여압류     42
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2280", map);
        
        // 학자금대부상환  43  
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2260", map);
        
        // 임금피크공제 2016.02.19        44
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2221", map);
        

        //================================================================
        // 소득세, 지방소득세 재계산
        //================================================================
        // 소득세 재계산  29  
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2010_RE", map);
        
        // 지방소득세 재계산30      
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2020_RE", map);
        
        
        // 공제2 ++++++++++++++++++++++++++++++++++++++++++++++++
        // 소득세  32  
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2010", map);
        
        // 지방소득세 33 
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_S2020", map);

        // 공제총액         45
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_DDC_TOTAMT", map);
        
        // 실수령액 46
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_RL_RECPT_AMOUNT", map);
        
        
        //======================================================================
        // 마감여부, 마감일자 - 수당내역47
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_CLOS_AT", map);
        
        // 마감여부, 마감일자 - 공제내역48
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_CLOS_AT2", map);
        
        // 마감여부, 마감일자 - 마스터49
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_CLOS_AT3", map);
        
        // 마감여부, 마감일자 - 생성내역50
        iRow += baseDao.update("SAL030105DAO.MtSalaryDcsn_CLOS_AT4", map);
        
        //======================================================================
        // 급여이체데이터생성51
        baseDao.insert("SAL030105DAO.MtSalary_Transfr", map);
        
        // 급여이체데이터생성(공제)52
        baseDao.insert("SAL030105DAO.MtSalary_Transfr_2", map);
        
        // 급여이체데이터(0원 삭제)53
        baseDao.delete("SAL030105DAO.MtSalary_Transfr_3", map); 
		
        return iRow;
   	}
}
