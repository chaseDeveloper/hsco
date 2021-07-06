package hsco.mis.acc.ACC060205;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC060205ServiceImpl.java
 * @Description  	: 배부실행을 서비스 구현체 클래스
 * @author       	: 이수지
 * @since        	: 2015.12. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 07.					이수지				최초생성
 * </pre>  
 */
@Service("ACC060205Service")
public class ACC060205ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC060205ServiceImpl.class);
    
    
    /**
     * 배부비율
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void dlryStdrRate( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("dlryStdrRate Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		//헤드 컬럼
		List<Map> records1;
		records1 = (List<Map>)baseDao.list("ACC060205DAO.dlryStdrIem", inMap);
		if(records1 != null)
		    inMap.put("list", records1);
		
		//바디 컬럼
		List <Map> records2;
		records2 = (List<Map>)baseDao.list("ACC060205DAO.dlryStdrRate", inMap);
		
		DataSetMap output1 = new DataSetMap();
		output1.setRowMaps(records1);
		outDataset.put("output1", output1); //헤드
		
		DataSetMap output2 = new DataSetMap();
		output2.setRowMaps(records2);
		outDataset.put("output2", output2); //바디
		
		/*
		//$ 제거 2016.08.11
		// 가로 출력을 위한 배부기준코드 목록 리스트 조회(그리드 헤더)
		List<Map> headList = (List<Map>) baseDao.list("ACC060205DAO.dlryStdrIem", inMap);
		List<Map> dlryStdrRateList = (List<Map>)baseDao.list("ACC060205DAO.dlryStdrRate", inMap); // 로우 조회용
		List<Map> records = new ArrayList<Map>();
		
		if(headList == null){
			throw new NexaServiceException("조회조건이 맞지 않습니다.");  
		}
		else{
			
			for(int i = 0 ; i < dlryStdrRateList.size() ; i++){
				
				Map rowMap = dlryStdrRateList.get(i);
				
				for(int z = 0 ; z < headList.size() ; z++ ){
					
					Map colMap = headList.get(z);
					
					String colName1 = colMap.get("DLRY_STDR_CODE") + "_RT"; // 컬럼 Alias
					String colName2 = colMap.get("DLRY_STDR_CODE") + "_AMT"; // 컬럼 Alias
					
					inMap.put("SE_ACCNUT_ACNT_CODE",  		colMap.get("SE_ACCNUT_ACNT_CODE"));	// cell 값 조회조건					
					Map rsltColMap = (Map)baseDao.select("ACC060205DAO.dlryStdrRate2", inMap); // cell 값 조회 
					
					// cell 값 설정
					if(rsltColMap == null){

						rowMap.put(colName1 , "");					
						rowMap.put(colName2 , ""); 
					}
					else{
					
						rowMap.put(colName1 , rsltColMap.get("RT"));					
						rowMap.put(colName2 , rsltColMap.get("AMT"));
					}
				}		
				records.add(rowMap); // 행추가
			}	
		}
		
		// 그리드 헤더
		DataSetMap outHeadDsMap = new DataSetMap();	
		outHeadDsMap.setRowMaps(headList);
		
		// 결과 값
		DataSetMap outBodyDsMap = new DataSetMap();		
		outBodyDsMap.setRowMaps(records);
				
		outDataset.put("output1", outHeadDsMap); // 그리드 헤드용
		outDataset.put("output2", outBodyDsMap); // 결과 값
		*/
	}

    /**
     * 배부계정
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void dlryStdrAccount( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records1 = (List<Map>)baseDao.list("ACC060205DAO.dlryStdrAccount", inMap);		
		DataSetMap output1 = new DataSetMap();
		output1.setRowMaps(records1);
		outDataset.put("output1", output1);
		
	}
    
    /**
     * 배부결과
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void dlryStdrResult( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records1 = (List<Map>)baseDao.list("ACC060205DAO.dlryStdrResult", inMap);		
		DataSetMap output1 = new DataSetMap();
		output1.setRowMaps(records1);
		outDataset.put("output1", output1);
		
	}
    
    /**
     * 배부저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return 
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public int dlryStdrSave( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	int iRow = 0;
		
    	DataSetMap input1 = inDataset.get("input1");
		// 배부비율 금액 저장
		for(Map map : input1.getRowMaps()) {
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED:
					Iterator iter = map.entrySet().iterator();
					while(iter.hasNext()) {
						Map.Entry entry = (Entry) iter.next();
						
						if(((String)entry.getKey()).startsWith("DS") && ((String)entry.getKey()).lastIndexOf("AMT") > -1) {
							// 배부기준별 금액 저장
							Map inMap = new HashMap();
							inMap.put("DLRY_STDR_CODE", ((String)entry.getKey()).substring(0, 4));
							inMap.put("DLRY_RATE_AMOUNT", entry.getValue());
							inMap.put("MAP", map);
							int cnt = baseDao.update("ACC060205DAO.dlryStdrSave", inMap);
							iRow += cnt;
						}
					}
					break;
				default:
					break;
			}
		}

		return iRow;
	}
    
    /**
     * 배부실행
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void dlryStdrProcedure( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		/*해당 월 배부내용 삭제*/
		baseDao.delete("ACC060205DAO.deleteDlryRate", inMap);
		
		/*배부순서를 기준으로 배부 실행*/
		List <Map> records1 = (List<Map>)baseDao.list("ACC060205DAO.selectDlryNo", inMap);
		int listSize = 0;
		
		
		
		for( int i=0; i<records1.size(); i++){
			if(records1.get(i).get("DLRY_STDR_CODE").equals("DS13") ) {
		
				/* 'DS13' 배부율, 사업부별 배부기준액, 배부실행액 계산*/
				inMap.put("DLRY_STDR_CODE","DS13");
				
				List <Map> records2 = (List<Map>)baseDao.list("ACC060205DAO.selectDs13", inMap);
				
				
				if( records2.size() > 0){ 
					listSize = records2.size();
				} else {
					listSize = 0;
				}
				for(int j = 0; j< listSize; j++ ){
				
					/* 해당 결과 등록 */
					records2.get(j).put("YYYYMM", inMap.get("YYYYMM"));
					records2.get(j).put("S_USER_ID", inMap.get("S_USER_ID"));
					records2.get(j).put("DLRY_STDR_CODE", "DS13");
					
					baseDao.insert("ACC060205DAO.insertDlryStdr", records2.get(j));
				}
				
			} else if(records1.get(i).get("DLRY_STDR_CODE").equals("DS03") ) {
				
				/* 'DS03' 배부율, 사업부별 배부기준액, 배부실행액 계산*/
				inMap.put("DLRY_STDR_CODE","DS03");
				List <Map> records2 = (List<Map>)baseDao.list("ACC060205DAO.selectDs03", inMap);
				
				
				if( records2.size() > 0){ 
					listSize = records2.size();
				} else {
					listSize = 0;
				}
				for(int j = 0; j< listSize; j++ ){
				
					/* 해당 결과 사업부별 등록 */
					records2.get(j).put("YYYYMM", inMap.get("YYYYMM"));
					records2.get(j).put("S_USER_ID", inMap.get("S_USER_ID"));
					records2.get(j).put("DLRY_STDR_CODE", "DS03");
					
					baseDao.insert("ACC060205DAO.insertDlryStdr", records2.get(j));
				}
			} else if(records1.get(i).get("DLRY_STDR_CODE").equals("DS06") || records1.get(i).get("DLRY_STDR_CODE").equals("DS09") || records1.get(i).get("DLRY_STDR_CODE").equals("DS12")) {
				
				/* 'DS06', 'DS09', 'DS12' 배부율, 사업부별 배부기준액, 배부실행액 계산*/
				inMap.put("DLRY_STDR_CODE",records1.get(i).get("DLRY_STDR_CODE"));
				List <Map> records2 = (List<Map>)baseDao.list("ACC060205DAO.selectDs06s", inMap);
				
				if( records2.size() > 0){ 
					listSize = records2.size();
				} else {
					listSize = 0;
				}
				for(int j = 0; j< listSize; j++ ){
					
					/* 해당 결과 사업부별 등록 */
					records2.get(j).put("YYYYMM", inMap.get("YYYYMM"));
					records2.get(j).put("S_USER_ID", inMap.get("S_USER_ID"));
					records2.get(j).put("DLRY_STDR_CODE", records1.get(i).get("DLRY_STDR_CODE"));
					
					baseDao.insert("ACC060205DAO.insertDlryStdr", records2.get(j));
				}
				
				
			} else if(records1.get(i).get("DLRY_STDR_CODE").equals("DS14") ) {
				
				/* 'DS14' 배부율, 사업부별 배부기준액, 배부실행액 계산*/
				inMap.put("DLRY_STDR_CODE","DS14");
				List <Map> records2 = (List<Map>)baseDao.list("ACC060205DAO.selectDs14", inMap);
				
				if( records2.size() > 0){ 
					listSize = records2.size();
				} else {
					listSize = 0;
				}
				for(int j = 0; j< listSize; j++ ){
					
					/* 해당 결과 사업부별 등록 */
					records2.get(j).put("YYYYMM", inMap.get("YYYYMM"));
					records2.get(j).put("S_USER_ID", inMap.get("S_USER_ID"));
					records2.get(j).put("DLRY_STDR_CODE", "DS14");
					
					baseDao.insert("ACC060205DAO.insertDlryStdr", records2.get(j));
				}
			} else if(records1.get(i).get("DLRY_STDR_CODE").equals("DS15") ) {
				
				/* 'DS15' 배부율, 사업부별 배부기준액, 배부실행액 계산*/
				inMap.put("DLRY_STDR_CODE","DS15");
				List <Map> records2 = (List<Map>)baseDao.list("ACC060205DAO.selectDs15", inMap);
				
				if( records2.size() > 0){ 
					listSize = records2.size();
				} else {
					listSize = 0;
				}
				for(int j = 0; j< listSize; j++ ){
					
					/* 해당 결과 사업부별 등록 */
					records2.get(j).put("YYYYMM", inMap.get("YYYYMM"));
					records2.get(j).put("S_USER_ID", inMap.get("S_USER_ID"));
					records2.get(j).put("DLRY_STDR_CODE", "DS15");
					
					baseDao.insert("ACC060205DAO.insertDlryStdr", records2.get(j));
				}
			} else {
				
				/* 'DS01','DS02','DS05','DS07','DS08','DS10','DS11','DS13','DS14','DS16','DS17' 배부율, 사업부별 배부기준액, 배부실행액 계산*/
				inMap.put("DLRY_STDR_CODE",records1.get(i).get("DLRY_STDR_CODE"));
				List <Map> records2 = (List<Map>)baseDao.list("ACC060205DAO.selectDs00", inMap);
				
				if( records2.size() > 0){ 
					listSize = records2.size();
				} else {
					listSize = 0;
				}
				for(int j = 0; j< listSize; j++ ){
					/* 해당 결과 사업부별 등록 */
					records2.get(j).put("YYYYMM", inMap.get("YYYYMM"));
					records2.get(j).put("S_USER_ID", inMap.get("S_USER_ID"));
					records2.get(j).put("DLRY_STDR_CODE", records1.get(i).get("DLRY_STDR_CODE"));
					baseDao.insert("ACC060205DAO.insertDlryStdr", records2.get(j));
				}
			}
		}
	// 배부실행
	//	baseDao.update("ACC060205DAO.dlryStdrProcedure", inMap);
		
		// 구분회계 현금흐름표 생성
	//	baseDao.update("ACC060206DAO.spaccStacntCashFlow", inMap);
	}
    
    /**
     * 배부전표생성
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" , "unchecked" })
	public void dlryStdrChitProcedure( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
	//	List <Map> records1;
		
		
		DataSetMap output1 = new DataSetMap();
	//	output1.setRowMaps(records1);
		outDataset.put("output1", output1);
		
		
		inMap.put("YEAR",((String)inMap.get("YYYYMM")).substring(0,4));
		inMap.put("MONTH",((String)inMap.get("YYYYMM")).substring(4,6));
		
		// 배부실행
		//inMap.put("OUT_SLIP_CNT","1");
		//inMap.put("OUT_RESULT_MSG","MSG");
		
		System.out.println(inMap);
		
		baseDao.update("ACC060205DAO.dlryStdrChitProcedure", inMap);
		
		
		
	}
    

    /**
     *구분회계 결산처리유무 확인
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void stacntYn( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records1 = (List<Map>)baseDao.list("ACC060205DAO.stacntYn", inMap);		
		DataSetMap output1 = new DataSetMap();
		output1.setRowMaps(records1);
		outDataset.put("output1", output1);
		
	}
}
