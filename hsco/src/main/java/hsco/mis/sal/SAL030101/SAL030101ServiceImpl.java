package hsco.mis.sal.SAL030101;

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
 * @Class Name   	: SAL030101ServiceImpl.java
 * @Description  	: 월급여데이터생성관리
 * @author       	: 이상명
 * @since        	: 2015. 7. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 24.					이상명				최초생성
 * </pre>  
 */

@Service("SAL030101Service")
public class SAL030101ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSalaryCalList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
		}
		
		List <Map> records = (List<Map>)baseDao.list("SAL030101DAO.selectSalaryCalList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectJssfcSeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
		}
		
		List<Map> records  = (List<Map>)baseDao.list("SAL030101DAO.selectJssfcSeList", inMap);		
		inMap.put("PYMNT_DDC_SE", "0");
		List<Map> records2 = (List<Map>)baseDao.list("SAL030101DAO.selectSalaryIemList", inMap);
		inMap.put("PYMNT_DDC_SE", "1");
		List<Map> records3 = (List<Map>)baseDao.list("SAL030101DAO.selectSalaryIemList", inMap);
		List<Map> records4 = (List<Map>)baseDao.list("SAL030101DAO.selectSalaryRsltList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps(records3);
		
		DataSetMap outDsMap4 = new DataSetMap();
		outDsMap4.setRowMaps(records4);
		
		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
		outDataset.put("output4", outDsMap4);
	}
    
	@SuppressWarnings("rawtypes")
	public int saveMtSalaryIem( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap input1 = (DataSetMap) inDataset.get("input1");
		DataSetMap input2 = (DataSetMap) inDataset.get("input2");
		DataSetMap input3 = (DataSetMap) inDataset.get("input3");
		DataSetMap input4 = (DataSetMap) inDataset.get("input4");
		DataSetMap input5 = (DataSetMap) inDataset.get("input5");
		
		
		int listSize = (input1 == null) ? 0 : input1.size();
		for (int x = 0; x < listSize; x++) {
			Map map = input1.get(x);
			
			switch(((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue()) {
				case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("SAL030101DAO.insertSalaryCal", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
						iRow += baseDao.update("SAL030101DAO.updateSalaryCal", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
						iRow += baseDao.delete("SAL030101DAO.deleteSalaryCal", map);
					break;
			    default:
			    	break;
			}
		}
		
		int listSize2 = (input2 == null) ? 0 : input2.size();
		for (int x = 0; x < listSize2; x++) {
			Map map = input2.get(x);
			
			switch(((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue()) {
				case DataSet.ROW_TYPE_INSERTED :
					break;
				case DataSet.ROW_TYPE_UPDATED :
					if("1".equals(map.get("CHK"))) {
						baseDao.insert("SAL030101DAO.insertMtSalaryIem", map);
						iRow++;
					} else {
						iRow += baseDao.delete("SAL030101DAO.deleteMtSalaryIem", map);
					}
					break;
				case DataSet.ROW_TYPE_DELETED :
					break;
			    default:
			    	break;
			}
		}
		
		int listSize3 = (input3 == null) ? 0 : input3.size();
		for (int x = 0; x < listSize3; x++) {
			Map map = input3.get(x);
			
			switch(((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue()) {
				case DataSet.ROW_TYPE_INSERTED :
					break;
				case DataSet.ROW_TYPE_UPDATED :
					if("1".equals(map.get("CHK"))) {
						baseDao.insert("SAL030101DAO.insertMtSalaryIem", map);
						iRow++;
					} else {
						iRow += baseDao.delete("SAL030101DAO.deleteMtSalaryIem", map);
					}
					break;
				case DataSet.ROW_TYPE_DELETED :
					break;
			    default:
			    	break;
			}
		}
		
		int listSize4 = (input4 == null) ? 0 : input4.size();
		if(listSize4 > 0) {
			for (int x = 0; x < listSize4; x++) {
				Map map = input4.get(x);
				
				if("1".equals(map.get("CHK"))) {
					baseDao.update("SAL030101DAO.salaryCalc", map);
				}
				
			}
		}
		
		Map inMap = null;
		if (input5 != null && input5.size() > 0) {
			inMap = input5.get(0);
			List<Map> records = (List<Map>)baseDao.list("SAL030101DAO.selectSalaryRsltList", inMap);
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			outDataset.put("output1", outDsMap);
		}
		
		return iRow;
	}
	
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void deleteMtSalary( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
			baseDao.delete("SAL030101DAO.deleteMtSalaryDtls", inMap);
			baseDao.delete("SAL030101DAO.deleteMtSalaryPymnt", inMap);
			
			List<Map> records = (List<Map>)baseDao.list("SAL030101DAO.selectSalaryRsltList", inMap);
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			outDataset.put("output1", outDsMap);
		}
	}
    
    /**
	 * 월급여데이터생성 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMtSalaryCreatList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL030101DAO.selectMtSalaryCreatList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL030101DAO.selectMtSalaryCreatList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
   	}		

    /**
	 * 월급여데이터생성 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMtSalaryPymntList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL030101DAO.selectMtSalaryPymntList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL030101DAO.selectMtSalaryPymntList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
   	}		
	
 	/**
	 * 정규직 급여 생성-마스터, 지급내역, 공제내역
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void MtSalaryPymntC( DataSetMap tranInfo, Map<String, Object> inVar,
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
	        
	        // 급여마스터 생성
	        baseDao.insert("SAL030101DAO.MtSalaryPymntC", map);
	        
	        // 기본급 생성 - 통			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1010", map);
			
			// 건설수당 생성 - 통			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1050", map);

			// 직책보조비 생성 - 통			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1955", map);
			
			// 운전,위험, 특수업무 생성 - 통			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1090", map);
			
			// 기술수당 생성 - 통
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1070", map);
			
			// 통상임금			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_ODYGS", map);
			
			// 통상임금	연봉제 +건설수당	==> 의미없음, 건설수당을  0 으로 하기에 
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_ODYGS_ANSLRY", map);
			
			// 장기근속수당 생성			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1060", map);
			
			// 시간외수당 생성			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1910", map);
			
			// 급식보조비 생성			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1940", map);
			
			// 교통보조비 생성			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1960", map);
			
			// 장기교육자 급식보조비, 교통보조비 삭제 (필요없음. 급식보조비, 교통보조비 생성할때 장기교육자 제외 시켰음. 그리고 이거 쿼리가 잘못됨)			
			//baseDao.insert("SAL030101DAO.MtSalaryPymnt_P194060_D", map);
			
			// 특정업무수행비 생성			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1191", map);
			
			// 복리후생수당(현장체제비,업무추진여비, 감독수당)  생성			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1990", map);
			
			// 학자보조금 생성			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1140", map);
			
			// 연차수당 생성			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1110", map);
			
			// 대우수당 생성			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1220", map);
			
			// 성과급 생성			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1030", map);
			
			// 예산성과급 생성 (사용안함 : 20160820) 			
			//baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1150", map);
			
			// 가족수당대상자 생성
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_01", map);
			
			// 가족수당(처)
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_02", map);
	        
	        // 가족수당(남편)
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_07", map);
			
			// 가족수당(기타)
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_03", map);
			
			// 가족수당(3자녀)
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_04", map);
			
			// 가족수당(3자녀 2014년이후출생)
            baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_08", map);
			
			// 가족수당(20세이하자녀 0원) - 기타에서 나이제한을 처리 함
	        //baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_05", map);
	        
	        // 가족수당(6세이하자녀 비과세) - 20160827 : 비과세 아님
	        //baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_06", map);
			
			// 가족수당 합계(과세)
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080", map);
			
			// 가족수당 합계(비과세)
            baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_00", map);
			
			// 기준연봉 생성(사장: 연봉/12-직책보조비, 임원: 연봉/12-직책보조비-급식보조비			
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1015", map);
			
			// 기준연봉 생성(직원: 연봉/12-급식보조비
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1015_2", map);	
			
	        // [추가] 2016.08.05  ==> 연봉제일시 P1010 제거     
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_DELETE_ANSLRY_AT", map);
			
			// 0원삭제
            baseDao.insert("SAL030101DAO.MtSalaryPymnt_P_0_D", map);
			
			// 과세총액(호봉제/연봉제)
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_TAXT_AMOUNT", map);
			
			// 연말정산 환급액
            baseDao.insert("SAL030101DAO.MtSalaryPymnt_YND_BONUS", map);
			
			// 비과세총액
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_TAXXMPT_AMOUNT", map);
			
			// 기준연봉 - 임금피크제로 인해 필요
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_STDR_ANSLRY", map);
			
			// 공제 +++++++++++++++++++++++++++++++++++++++++++++++++++
			// 소득세
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2010", map);
			
			// 지방소득세
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2020", map);
			
			// 연말정산 소득세
            baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2210", map);
            
            // 연말정산 지방소득세
            baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2021", map);
			
			// 급여압류 
            // 급여 압류는 실지급 금액 계산 후
			//baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2280", map);
			
			// 건강보험
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2110", map);
			
			// 국민연금
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2120", map);
			
			// 고용보험
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2150", map);
			
			// 노동조합가입정보입력
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2250_1", map);
			
			// 노동조합비
            baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2250", map);
			
			// 식권구입공제
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2298", map);
			
			// 대상자정보
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2301_1", map);
			
			// 기금
            baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2301", map);
			
			// 기금원금, 원금상환, 이자상환 생성
			//baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2230_C", map);			
			
			// 기금원금
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2230", map);			
			
			// 기금이자
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2240", map);				
			
			// 학자금대부상환
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2260", map);
			
			// 임금피크제 감액(S2221)
			// 2016.01.01 부터 시행
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2221", map);
			
		    // 0원삭제
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_S_0_D", map);			
			
			// 급여생성내역
			baseDao.insert("SAL030101DAO.MtSalaryPymnt_CREAT", map);


	        //================================================================
			// 월급여 지급/공제 집계처리 프로시저 (전체)
	        //================================================================
			baseDao.insert("SAL030105DAO.SPSAL_MT_SALARY_PYMNT_ALL_U", map);
			if ("-1".equals(map.get("OUT_RESULT_CD").toString())) {
				throw new NexaServiceException("errors.항목.값.무효", map.get("OUT_RESULT_MSG").toString());
			}
			if ("-2".equals(map.get("OUT_RESULT_CD").toString())) {
				throw new NexaServiceException("err.예외상황.발생.SQL", map.get("OUT_RESULT_MSG").toString());
			}
	        //================================================================
	}
	        
	/**
	 * 계약직 급여 생성-마스터, 지급내역, 공제내역
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void MtSalaryPymntC_2( DataSetMap tranInfo, Map<String, Object> inVar,
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
	        
	        // 급여마스터 생성
	        baseDao.insert("SAL030101DAO.MtSalaryPymntC", map);
	        
	        // 기본급 생성 - 통
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1010", map);
	        
	        // 건설수당 생성 - 통
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1050", map);
	        
	        // 직무수당 생성 - 통
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1957", map);
	        
	        // 통상임금
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_ODYGS", map);
	        
	        // 시간외수당 생성 (계약직은 제외: 2016-08-18)
	        // baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1910", map);
	        
	        // 급식보조비 생성
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1940", map);
	        
	        // 교통보조비 생성
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1960", map);
	        
	        // 학자보조금 생성
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1140", map);
	        
	        // 연차수당 생성
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1110", map);
	        
	        // 가족수당대상자 생성
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_01", map);
	        
	        // 가족수당(처)
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_02", map);
	        
	        // 가족수당(남편)
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_07", map);
	        
	        // 가족수당(기타)
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_03", map);
	        
	        // 가족수당(3자녀)
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_04", map);
	        
	        // 가족수당(20세이상자녀 0원)
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_05", map);
	        
	        // 가족수당(6세이하자녀 비과세) - 20160827 : 비과세 아님
	        //baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_06", map);
	        
	        // 가족수당 합계
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080", map);
	        
	        // 0원삭제
            baseDao.insert("SAL030101DAO.MtSalaryPymnt_P_0_D", map);
	            
	        // 과세총액(호봉제)
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_TAXT_AMOUNT", map);
	        
	        // 비과세총액
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_TAXXMPT_AMOUNT", map);
	        
	        // 공제 +++++++++++++++++++++++++++++++++++++++++++++++++++
	        
	        // 소득세
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2010", map);
	        
	        // 지방소득세
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2020", map);
	        
	        // 건강보험
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2110", map);
	        
	        // 국민연금
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2120", map);
	        
	        // 고용보험
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_S2150", map);
	        
	        // 0원삭제
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_S_0_D", map);
	        
	        // 급여생성내역
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_CREAT", map);


	        //================================================================
			// 월급여 지급/공제 집계처리 프로시저 (전체)
	        //================================================================
			baseDao.insert("SAL030105DAO.SPSAL_MT_SALARY_PYMNT_ALL_U", map);
			if ("-1".equals(map.get("OUT_RESULT_CD").toString())) {
				throw new NexaServiceException("errors.항목.값.무효", map.get("OUT_RESULT_MSG").toString());
			}
			if ("-2".equals(map.get("OUT_RESULT_CD").toString())) {
				throw new NexaServiceException("err.예외상황.발생.SQL", map.get("OUT_RESULT_MSG").toString());
			}
	        //================================================================
	}

	/**
	 * 시간외 수당 급여 생성-마스터, 지급내역
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void MtSalaryPymntC_3( DataSetMap tranInfo, Map<String, Object> inVar,
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
	        
	        // 급여마스터 생성
	        baseDao.insert("SAL030101DAO.MtSalaryPymntC_P1910", map);
	        
	        // 시간외수당 생성
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1910", map);
	        
	        // 급여생성내역
	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_CREAT_P1910", map);


	        //================================================================
			// 월급여 지급/공제 집계처리 프로시저 (전체)
	        //================================================================
			baseDao.insert("SAL030105DAO.SPSAL_MT_SALARY_PYMNT_ALL_U", map);
			if ("-1".equals(map.get("OUT_RESULT_CD").toString())) {
				throw new NexaServiceException("errors.항목.값.무효", map.get("OUT_RESULT_MSG").toString());
			}
			if ("-2".equals(map.get("OUT_RESULT_CD").toString())) {
				throw new NexaServiceException("err.예외상황.발생.SQL", map.get("OUT_RESULT_MSG").toString());
			}
	        //================================================================	        
	}
	
	/**
	 * 계산항목별 생성
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void MtSalaryPymntC_4( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
	        DataSetMap list = (DataSetMap) inDataset.get("input3");     
	                            
	        Map map = list.get(0);          
	        // 세션정보 설정
	        try {
	            ObjectUtil.setUserToMap(map);
	        }
	        catch( Exception e) {
	            throw new NexaServiceException(e); 
	        }    
	        
	        if(map.get("PYMNT_DDC_CODE").toString() == null || "".equals(map.get("PYMNT_DDC_CODE").toString())){
	        	throw new NexaServiceException("comm.err", "계산항목이 선택되지 않았습니다.");
	        }
	        
	     	if("P1010".equals(map.get("PYMNT_DDC_CODE").toString())){	//기본급
	     		baseDao.delete("SAL030101DAO.MtSalaryPymntDtlsCodeD", map);
				baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1010", map);
			    
				if("2".equals(map.get("PYMNT_SE").toString())){
	     			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1015", map);	// 기준연봉 생성(사장: 연봉/12-직책보조비, 임원: 연봉/12-직책보조비-급식보조비
	     			baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1015_2", map);	// 기준연봉 생성(직원: 연봉/12-급식보조비
	     	        baseDao.insert("SAL030101DAO.MtSalaryPymnt_DELETE_ANSLRY_AT", map);		// [추가] 2016.08.05  ==> 연봉제일시 P1010 제거
				}
     	        
	     	}else if(
	        		"P1050".equals(map.get("PYMNT_DDC_CODE").toString())	//건설수당
	        	||  "P1955".equals(map.get("PYMNT_DDC_CODE").toString())	//직책보조비
	        	||  "P1070".equals(map.get("PYMNT_DDC_CODE").toString())	//기술수당
	        	||  "P1060".equals(map.get("PYMNT_DDC_CODE").toString())	//장기근속수당
	        	||  "P1110".equals(map.get("PYMNT_DDC_CODE").toString())	//연차수당
	        	||  "P1140".equals(map.get("PYMNT_DDC_CODE").toString())	//학자보조금
	        	||  "P1191".equals(map.get("PYMNT_DDC_CODE").toString())	//특정업무수행비
	        	||  "P1910".equals(map.get("PYMNT_DDC_CODE").toString())	//시간외수당
	        	||  "P1940".equals(map.get("PYMNT_DDC_CODE").toString())	//급식보조비
	        	||  "P1960".equals(map.get("PYMNT_DDC_CODE").toString())	//교통보조비
	        	||  "P1957".equals(map.get("PYMNT_DDC_CODE").toString())	//직무수당
	        	||  "P1960".equals(map.get("PYMNT_DDC_CODE").toString())	//교통보조비
	        		){
	        	baseDao.delete("SAL030101DAO.MtSalaryPymntDtlsCodeD", map);
				baseDao.insert("SAL030101DAO.MtSalaryPymnt_"+map.get("PYMNT_DDC_CODE").toString(), map);
				
	        }else if(		
	        		"P1090".equals(map.get("PYMNT_DDC_CODE").toString())	//기본급
	        	||  "P1091".equals(map.get("PYMNT_DDC_CODE").toString())	//건설수당
	        	||  "P1092".equals(map.get("PYMNT_DDC_CODE").toString())	//직책보조비
	        ){
	        	baseDao.delete("SAL030101DAO.MtSalaryPymntDtlsCodeD", map);
				// 운전,위험, 특수업무 생성 - 통			
				baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1090", map);
				
	        }else if(
	        	    "P1961".equals(map.get("PYMNT_DDC_CODE").toString())	//업무추진여비
	        	||  "P1991".equals(map.get("PYMNT_DDC_CODE").toString())	//현장체제비
	        	||  "P1992".equals(map.get("PYMNT_DDC_CODE").toString())	//감독수당
        	){
	        	baseDao.delete("SAL030101DAO.MtSalaryPymntDtlsCodeD", map);
	        	// 복리후생수당(현장체제비,업무추진여비, 감독수당)  생성			
				baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1990", map);
				
			}else if( "P1080".equals(map.get("PYMNT_DDC_CODE").toString()) ){
				baseDao.delete("SAL030101DAO.MtSalaryPymntDtlsCodeD", map);
				
				baseDao.delete("SAL030101DAO.MtSalaryPymnt_P1080_01D", map);	// 가족수당대상자 삭제
				baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_01", map);		// 가족수당대상자 생성
				baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_02", map);		// 가족수당(처)
				baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_07", map);		// 가족수당(남편)
				baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_03", map);		// 가족수당(기타)
				baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_04", map);		// 가족수당(3자녀)
				baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_08", map);		// 가족수당(3자녀 2014년이후출생)
				//baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_05", map);	// 가족수당(20세이하자녀 0원) - 기타에서 나이제한을 처리 함
				//baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_06", map);	// 가족수당(6세이하자녀 비과세) - 20160827 : 비과세 아님
				baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080", map);		// 가족수당 합계(과세)
				baseDao.insert("SAL030101DAO.MtSalaryPymnt_P1080_00", map);		// 가족수당 합계(비과세)
	        }
	        
	        // 0원삭제
            baseDao.insert("SAL030101DAO.MtSalaryPymnt_P_0_D", map);
            
	        //================================================================
			// 월급여 지급/공제 집계처리 프로시저 (전체)
	        //================================================================
			baseDao.insert("SAL030105DAO.SPSAL_MT_SALARY_PYMNT_ALL_U", map);
			if ("-1".equals(map.get("OUT_RESULT_CD").toString())) {
				throw new NexaServiceException("errors.항목.값.무효", map.get("OUT_RESULT_MSG").toString());
			}
			if ("-2".equals(map.get("OUT_RESULT_CD").toString())) {
				throw new NexaServiceException("err.예외상황.발생.SQL", map.get("OUT_RESULT_MSG").toString());
			}
	        //================================================================	        
	}
	
	/**
	 * 정규직 급여 삭제-마스터, 지급내역, 공제내역
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int MtSalaryPymntD( DataSetMap tranInfo, Map<String, Object> inVar,
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
	       
	        // 급여지급 상세 삭제
			baseDao.delete("SAL030101DAO.MtSalaryPymntDtlsD", map);
			
			// 급여공제 상세 삭제
			baseDao.delete("SAL030101DAO.MtSalaryDdcDtlsD", map);
			
			// 급여마스터 삭제
			baseDao.delete("SAL030101DAO.MtSalaryPymntD", map);
			
			// 가족수당대상자 삭제
			baseDao.delete("SAL030101DAO.MtSalaryPymnt_P1080_01D", map);
			
			// 노조원 삭제
            baseDao.delete("SAL030101DAO.MtSalaryPymnt_S2250_D", map);
            
            // 대상자
            baseDao.delete("SAL030101DAO.MtSalaryPymnt_S2301_D", map);
			
			// 급여생성내역 삭제
			baseDao.delete("SAL030101DAO.MtSalaryPymnt_CREATD", map);
			
			// 기금대부내역 삭제
	        //baseDao.delete("SAL030101DAO.MtSalaryPymnt_EndwD", map);
			
			return iRow;
	}
	
	/**
	 * 계약직 급여 삭제-마스터, 지급내역, 공제내역
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int MtSalaryPymntD_2( DataSetMap tranInfo, Map<String, Object> inVar,
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
	        
	        // 급여지급 상세 삭제
			baseDao.delete("SAL030101DAO.MtSalaryPymntDtlsD", map);
			
			// 급여공제 상세 삭제
			baseDao.delete("SAL030101DAO.MtSalaryDdcDtlsD", map);
			
			// 급여마스터 삭제
			baseDao.delete("SAL030101DAO.MtSalaryPymntD", map);
			
			// 가족수당대상자 삭제
			baseDao.delete("SAL030101DAO.MtSalaryPymnt_P1080_01D", map);
			
			// 급여생성내역 삭제
			baseDao.delete("SAL030101DAO.MtSalaryPymnt_CREATD", map);		
			
			return iRow;
	}

	/**
	 * 시간외 수당 급여 삭제-마스터, 지급내역
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int MtSalaryPymntD_3( DataSetMap tranInfo, Map<String, Object> inVar,
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
	        
	        // 급여지급 상세 삭제
			baseDao.delete("SAL030101DAO.MtSalaryPymntDtlsD", map);
			
			// 급여마스터 삭제
			baseDao.delete("SAL030101DAO.MtSalaryPymntD", map);
			
			// 급여생성내역 삭제
			baseDao.delete("SAL030101DAO.MtSalaryPymnt_CREATD", map);		
			
			return iRow;
	}
	
}
