package hsco.pms.rnt.pra.RNT01030400;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("RNT01030400Service")
public class RNT01030400ServiceImpl extends BaseService{
	//해약처리
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void rentResciCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap inDsMap2 = (DataSetMap) inDataset.get("input2");
		Map inMap2 = null;
		if (inDsMap2.size() > 0)
			inMap2 = inDsMap2.get(0);
		
		if(inMap.get("FLAG") == "C" || "C".equals(inMap.get("FLAG"))){
			//미납내역을 조회할 sql id를 배열로 관리..
			String[] arrSqlId = {
						"RNT01030400DAO.unpaidMtRntchrgList", 	//임대료 미납내역
						"RNT01030400DAO.unpaidLwstList", 		//소송비 미납내역
						"RNT01030400DAO.unpaidGtnSportList"};	//지원금 미납내역
			
			//int checkMtRntchrg = (Integer)baseDao.select("RNT01030400DAO.checkMtRntchrg", inMap); // 기준일자 납부 내역 체크

			//해약자 월 임대료 정산
			if("1".equals(inMap.get("CHK")) || inMap.get("CHK") == "1"){
				baseDao.insert("RNT01030400DAO.SPRNT_RENT_VALUE_ANNUL_ID", inMap);
			}
			
			//계약정보 해약일자 Update
			baseDao.update("RNT01030400DAO.updaterentCntrct", inMap);
			
			//임대해약 등록
			baseDao.insert("RNT01030400DAO.rentResciC", inMap);
			
			//임대주택정보를 공급가능으로 수정
			inMap.put("SUPLY_SE", "0"); // 16.07.16_공급불가(공가관리에서 가능으로 수정)
			baseDao.update("RNT01030400DAO.rentHouseBildU", inMap);
			
			//미납내역 납부요청(임대료, 소송비, 지원금)
			for(int sqlIdx=0; sqlIdx<arrSqlId.length; sqlIdx++){
				List <Map> unpaidMap = (List<Map>)baseDao.list(arrSqlId[sqlIdx], inMap);
				Map<String, String> rqestMap = new HashMap<String, String>();
				if(unpaidMap != null && unpaidMap.size() > 0){
					String inBjYn = "";
					String inCrtDiv = "";
					
					if(sqlIdx == 0){
						inBjYn = "R";
						inCrtDiv = "RN";
					}else if(sqlIdx == 1){
						inBjYn = "B";
						inCrtDiv = "RN";
					}else {
						inBjYn = "";
						inCrtDiv = "BS";
					}
					
					//기존의 납부요청 내용 일괄 삭제
					rqestMap.put("IN_FLAG", "DELETE");											//작업구분
					rqestMap.put( "IN_BANK_CD", "%");											//은행코드
					rqestMap.put( "IN_ACCT_NO", "%");											//계좌번호
					rqestMap.put( "IN_TR_DATE", (String)inMap.get("RCEPT_DE"));					//거래일자
					rqestMap.put( "IN_TR_SDATE", (String)inMap.get("TR_SDATE"));				//거래시작일
					rqestMap.put( "IN_TR_EDATE", (String)inMap.get("TR_EDATE")); //2주 더...	//거래종료일
					rqestMap.put( "IN_CRT_DIV", inCrtDiv);										//계약구분
					rqestMap.put( "IN_CRT_ID", (String)inMap.get("CNTRCTR_NO"));				//계약자
					rqestMap.put( "IN_BILL_SEQ", "");											//청구순번
					rqestMap.put( "IN_CORT_CODE", "");											//납부코드
					rqestMap.put( "IN_PAY_NUM", "");											//납부번호
					rqestMap.put( "IN_REC_CLASS", "");											//납부구분
					rqestMap.put( "IN_REC_SEQ", "");											//납부순번
					rqestMap.put( "IN_PAYEND_DATE", "");										//납입기한
					rqestMap.put( "IN_BILL_AMT", "0");											//결제금액
					rqestMap.put( "IN_PAY_AMT", "0");											//납부대상금액
					rqestMap.put( "IN_SALE_AMT", "0");											//차감금액
					rqestMap.put( "IN_INT_AMT", "0");											//연체금액
					rqestMap.put( "IN_BILL_DIV", "A");											//납부구분(A-일괄,B-개별)
					rqestMap.put( "IN_BJ_YN", inBjYn);											//보증금전용계좌 등록
					rqestMap.put( "S_USER_ID", (String)inMap.get("S_USER_ID"));
					
					baseDao.update("RNT01070500DAO.SP_VA_BILL_UID", rqestMap);
				
					//납부요청 내용 상세 등록
					for(int i=0; i<unpaidMap.size(); i++){
						rqestMap.clear();
						rqestMap.put("IN_FLAG", "DETAIL");												//작업구분
						rqestMap.put( "IN_BANK_CD", (String)inMap.get("BANK_CODE"));					//은행코드
						rqestMap.put( "IN_ACCT_NO", (String)inMap.get("ACNUTNO"));						//계좌번호
						rqestMap.put( "IN_TR_DATE", (String)inMap.get("RCEPT_DE"));						//거래일자
						rqestMap.put( "IN_TR_SDATE", (String)inMap.get("TR_SDATE"));					//거래시작일
						rqestMap.put( "IN_TR_EDATE", (String)inMap.get("TR_EDATE")); //2주 더...		//거래종료일
						rqestMap.put( "IN_CRT_DIV", inCrtDiv);											//계약구분
						rqestMap.put( "IN_CRT_ID", (String)inMap.get("CNTRCTR_NO"));					//계약자
						rqestMap.put( "IN_BILL_SEQ", String.valueOf(i+1));								//청구순번
						rqestMap.put( "IN_CORT_CODE", (String)unpaidMap.get(i).get("CORT_CODE"));		//납부코드
						rqestMap.put( "IN_PAY_NUM", "0");												//납부번호
						rqestMap.put( "IN_REC_CLASS", "0");												//납부구분
						rqestMap.put( "IN_REC_SEQ", "0");												//납부순번
						rqestMap.put( "IN_PAYEND_DATE", (String)unpaidMap.get(i).get("PAYEND_DATE"));	//납입기한
						rqestMap.put( "IN_BILL_AMT", String.valueOf(unpaidMap.get(i).get("TOT_AMT")));	//결제금액
						rqestMap.put( "IN_PAY_AMT", String.valueOf(unpaidMap.get(i).get("TOT_AMT")));	//납부대상금액
						rqestMap.put( "IN_SALE_AMT", String.valueOf(unpaidMap.get(i).get("APPAY_AMT")));//차감금액
						rqestMap.put( "IN_INT_AMT", String.valueOf(unpaidMap.get(i).get("CHA_AMT")));	//연체금액
						rqestMap.put( "IN_BILL_DIV", "A");												//납부구분(A-일괄,B-개별)
						rqestMap.put( "IN_BJ_YN", inBjYn);												//보증금전용계좌 등록
						rqestMap.put( "S_USER_ID", (String)inMap.get("S_USER_ID"));
						baseDao.update("RNT01070500DAO.SP_VA_BILL_UID", rqestMap);
					}
					
					//납부요청 내용 총 합계 등록
					rqestMap.put("IN_FLAG", "MASTER");											//작업구분
					rqestMap.put( "IN_BANK_CD", (String)inMap.get("BANK_CODE"));				//은행코드
					rqestMap.put( "IN_ACCT_NO", (String)inMap.get("ACNUTNO"));					//계좌번호
					rqestMap.put( "IN_TR_DATE", (String)inMap.get("RCEPT_DE"));					//거래일자
					rqestMap.put( "IN_TR_SDATE", (String)inMap.get("TR_SDATE"));				//거래시작일
					rqestMap.put( "IN_TR_EDATE", (String)inMap.get("TR_EDATE")); //2주 더...	//거래종료일
					rqestMap.put( "IN_CRT_DIV", inCrtDiv);										//계약구분
					rqestMap.put( "IN_CRT_ID", (String)inMap.get("CNTRCTR_NO"));				//계약자
					rqestMap.put( "IN_BILL_SEQ", "");											//청구순번
					rqestMap.put( "IN_CORT_CODE", "");											//납부코드
					rqestMap.put( "IN_PAY_NUM", "");											//납부번호
					rqestMap.put( "IN_REC_CLASS", "");											//납부구분
					rqestMap.put( "IN_REC_SEQ", "");											//납부순번
					rqestMap.put( "IN_PAYEND_DATE", "");										//납입기한
					rqestMap.put( "IN_BILL_AMT", "0");											//결제금액
					rqestMap.put( "IN_PAY_AMT", "0");											//납부대상금액
					rqestMap.put( "IN_SALE_AMT", "0");											//차감금액
					rqestMap.put( "IN_INT_AMT", "0");											//연체금액
					rqestMap.put( "IN_BILL_DIV", "A");											//납부구분(A-일괄,B-개별)
					rqestMap.put( "IN_BJ_YN", inBjYn);											//보증금전용계좌 등록
					rqestMap.put( "S_USER_ID", (String)inMap.get("S_USER_ID"));
					
					baseDao.update("RNT01070500DAO.SP_VA_BILL_UID", rqestMap);
				}
			}
			
			baseDao.update("RNT01030400DAO.UpdateAtcngInfoList", inMap);
			
			
		}else if(inMap.get("FLAG") == "C2" || "C2".equals(inMap.get("FLAG"))){
			baseDao.update("RNT01030400DAO.rentResciC2", inMap);
			baseDao.insert("RNT02000000DAO.saveDdcAmount", inMap2);
		}else if(inMap.get("FLAG") == "U" || "U".equals(inMap.get("FLAG"))){
			baseDao.update("RNT01030400DAO.rentResciU", inMap);
		}
	}
	
	@SuppressWarnings({ "rawtypes" })
	
	public void rentResciU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		//결제번호 수정
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("RNT01030400DAO.rentResciU", map);
		}
	} 
	
	/**
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void sprntRentAnnulCancel(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
		
		DataSetMap inDsMap2 = (DataSetMap) inDataset.get("input2");
		Map inMap2 = null;
		if (inDsMap2 != null)
			inMap2 = inDsMap2.get(0);
		
		int unpaidMtCnt = (Integer)baseDao.select("RNT01030400DAO.checkUnpaidMtRntchrg", map);
		if(unpaidMtCnt <= 0){
			//해당 주택 동호수 계약자 존재여부 확인
			int rentHouseBildCnt = (Integer)baseDao.select("RNT01030400DAO.checkRentHouseBild", map);
			if(rentHouseBildCnt <= 0){
				baseDao.list("RNT01030400DAO.SPRNT_RENT_ANNUL_CANCEL", map);
				
				inMap2.put("CHANGE_DE", map.get("CANCL_DE"));
				inMap2.put("CHANGE_NO", "0");
				
				baseDao.insert("RNT02000000DAO.deleteDdcAmount", inMap2);
				
				//임대주택정보를 공급불가로 수정
				map.put("CNTRCTR_NO", map.get("CNTRCTR_NO"));
				map.put("SUPLY_SE", "0");
				baseDao.update("RNT01030400DAO.rentHouseBildU2", map);
				
				
				Map tempMap = new HashMap<String, Object>();
				tempMap.put("CNTRCTR_NO", map.get("CNTRCTR_NO"));
				tempMap.put("CANCL_DE", "");
				//계약정보 해약일자 Update
				baseDao.update("RNT01030400DAO.updaterentCntrct", tempMap);
			}else {
				throw new NexaServiceException("comm.데이터.기등록.존재", "해당 주택");
			}
		}else {
			throw new NexaServiceException("comm.데이터.기등록.존재", "해약자의 임대료 정산");	
		}
	} 
	
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void unpaidList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030400DAO.unpaidList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	//첨부파일 목록
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void resciAtchList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT01030400DAO.resciAtchList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//첨부파일 CUD
	@SuppressWarnings({ "rawtypes" })
	
	public void resciAtchCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		// 1. 첨부 삭제
		baseDao.delete("RNT01030400DAO.resciAtchD", inMap); 
		
		// 2. 공통첨부파일의 정보로 첨부 등록
		baseDao.insert("RNT01030400DAO.resciAtchC", inMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void innerSanctnUbiDataset(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		//계약정보 상세
		records = (List<Map>)baseDao.list("RNT00000000DAO.rentCntrctDetail", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		//해약정보 상세
		records = (List<Map>)baseDao.list("RNT00000000DAO.rentResciDetail", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output2", outDsMap);
		
		//미납금목
		records = (List<Map>)baseDao.list("RNT01030400DAO.unpaidList2", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output3", outDsMap);
		
		//결제자 이름 목록
		records = (List<Map>)baseDao.list("RNT01030400DAO.sanctnerNmDetail", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output4", outDsMap);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void sanctnerNmDetail(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT01030400DAO.sanctnerNmDetail", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 내부결재 후처리 메소드 (결재상태 저장)
	 * @param (Map sanctnInfo) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void postProcess(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
         Map sanctnInfo = null; 
         DataSetMap dsSetMap = inDataset.get("input1");  
         List<Map> list = dsSetMap.getRowMaps();
         
         int lsize = (list == null) ? 0 : list.size();
         if(lsize > 0){
           	  sanctnInfo = (Map)list.get(0);
         }

          String currSanctionSttus = (String)sanctnInfo.get("LAST_SANCTN_STTUS"); // 최종결재상태
         	
         	Map recordMap = null; 
         	
         	StringTokenizer st = new StringTokenizer(sanctnInfo.get("JOB_KEY").toString(),"^");
         	
   		if(st.hasMoreTokens()){
   			recordMap = new HashMap<String, String>();
   			recordMap.put("ACCNUT_YEAR", st.nextToken());
   			recordMap.put("ENDW_INCME_DECSN_NO", st.nextToken());
   		}
	}
	
	/**
	 * 전자결제번호 입력
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void approveU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		List <Map> records;
		Map map = list.get(0);
			
		baseDao.update("RNT01030400DAO.approveU", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		
		outDataset.put("output1", outDsMap);
	}   
}
