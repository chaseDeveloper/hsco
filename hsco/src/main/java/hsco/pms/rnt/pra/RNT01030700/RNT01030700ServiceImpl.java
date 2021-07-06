package hsco.pms.rnt.pra.RNT01030700;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("RNT01030700Service")
public class RNT01030700ServiceImpl extends BaseService{
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentHouseChangeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030700DAO.rentHouseChangeList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void rentHouseChangeCU( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap inDsMap2 = (DataSetMap) inDataset.get("input2");
		Map inMap2 = null;
		if (inDsMap2.size() > 0)
			inMap2 = inDsMap2.get(0);
		
		String Flag = (String)inMap.get("FLAG");
		
		if("C".equals(Flag) || Flag == "C"){
			// 동.호변경 자료 Insert
			baseDao.insert("RNT01030700DAO.rentHouseChangeC", inMap);
			// 계약정보 Update
			baseDao.update("RNT01030700DAO.rentCntrctU", inMap);
			// 재계약정보 Update
			baseDao.update("RNT01030700DAO.rentReCntrctU", inMap);
			// 변경전 건축물정보 Update
			baseDao.update("RNT01030700DAO.rentHouseBildBfU", inMap);
			// 변경후 건축물정보 Update
			baseDao.update("RNT01030700DAO.rentHouseBildAfU", inMap);
			
			if("1".equals(inMap.get("CHK")) || "1" == inMap.get("CHK")){
				baseDao.insert("RNT01030700DAO.SPRNT_RENT_CHGHOUSE_CAL", inMap);
			}
			
			int gtnDfnnt = Integer.parseInt((String)inMap.get("GTN_AFTCH")) - Integer.parseInt((String)inMap.get("GTN_BFCHG"));		// 보증금 차액
			
			//보증금 등록
			if(gtnDfnnt > 0){
				inMap.put("GTN_DFNNT", gtnDfnnt);
				baseDao.insert("RNT01030700DAO.rentGtnC", inMap);
			}
			
			String[] arrSqlId = {
					"RNT01030400DAO.unpaidMtRntchrgList", 	//임대료 미납내역
					"RNT01030700DAO.unpaidGtnList"};		//보증금 미납내역
			
			//미납내역 납부요청(임대료, 보증금)
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
					}
					
					//기존의 납부요청 내용 일괄 삭제
					rqestMap.put("IN_FLAG", "DELETE");											//작업구분
					rqestMap.put( "IN_BANK_CD", "%");											//은행코드
					rqestMap.put( "IN_ACCT_NO", "%");											//계좌번호
					rqestMap.put( "IN_TR_DATE", (String)inMap.get("CHANGE_DE"));				//거래일자
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
						rqestMap.put( "IN_BANK_CD", "");												//은행코드
						rqestMap.put( "IN_ACCT_NO", "");												//계좌번호
						rqestMap.put( "IN_TR_DATE", (String)inMap.get("CHANGE_DE"));					//거래일자
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
					rqestMap.put( "IN_TR_DATE", (String)inMap.get("CHANGE_DE"));				//거래일자
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
			
		}else if("C2".equals(Flag) || Flag == "C2"){
			baseDao.update("RNT01030700DAO.rentHouseChangeC2", inMap);
			
			String changeNo = (String)baseDao.select("RNT01030700DAO.selectChageNo", inMap);
			inMap2.put("CHANGE_NO", changeNo);
			
			baseDao.insert("RNT02000000DAO.saveDdcAmount", inMap2);
		}else {
			baseDao.update("RNT01030700DAO.rentHouseChangeU", inMap);
		}
		
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void rentHouseChangeD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap inDsMap2 = (DataSetMap) inDataset.get("input2");
		Map inMap2 = null;
		if (inDsMap2 != null)
			inMap2 = inDsMap2.get(0);
		
		Map tempMap = new HashMap<String, Object>();
		tempMap.put("CHANGE_DE", inMap.get("CHANGE_DE_BFCHG"));
		tempMap.put("RENT_HOUSE_CODE_AFTCH", inMap.get("RENT_HOUSE_CODE_AFTCH"));
		tempMap.put("RM", inMap.get("RM"));
		tempMap.put("RNTCHRG_AFTCH", inMap.get("RNTCHRG_AFTCH"));
		tempMap.put("GTN_AFTCH", inMap.get("GTN_AFTCH"));
		tempMap.put("DONG_AFTCH", inMap.get("DONG_AFTCH"));
		tempMap.put("HO_AFTCH", inMap.get("HO_AFTCH"));
		tempMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
		
		baseDao.update("RNT01030700DAO.rentCntrctU", tempMap);
		baseDao.update("RNT01030700DAO.rentHouseBildBfU", inMap);
		baseDao.update("RNT01030700DAO.rentHouseBildAfU", inMap);
		baseDao.insert("RNT02000000DAO.deleteDdcAmount", inMap2);
		
		int gtnDfnnt = Integer.parseInt((String)inMap.get("GTN_BFCHG")) - Integer.parseInt((String)inMap.get("GTN_AFTCH"));		// 보증금 차액
		inMap.put("GTN_DFNNT", gtnDfnnt);
		
		String gtnSn = (String) baseDao.select("RNT01030700DAO.selectGtnSn", inMap);
		inMap.put("GTN_SN", gtnSn);
		baseDao.insert("RNT01030700DAO.rentGtnD", inMap);
		
		//보증금 납부요청
		String[] arrSqlId = {
				"RNT01030700DAO.unpaidGtnList"};		//보증금 미납내역
		
		//미납내역 납부요청(보증금)
		for(int sqlIdx=0; sqlIdx<arrSqlId.length; sqlIdx++){
			List <Map> unpaidMap = (List<Map>)baseDao.list(arrSqlId[sqlIdx], inMap);
			Map<String, String> rqestMap = new HashMap<String, String>();
			if(unpaidMap != null && unpaidMap.size() > 0){
				
				//기존의 납부요청 내용 일괄 삭제
				/*
				rqestMap.put("IN_FLAG", "DELETE");											//작업구분
				rqestMap.put( "IN_BANK_CD", "%");											//은행코드
				rqestMap.put( "IN_ACCT_NO", "%");											//계좌번호
				rqestMap.put( "IN_TR_DATE", (String)inMap.get("CHANGE_DE"));				//거래일자
				rqestMap.put( "IN_TR_SDATE", (String)inMap.get("TR_SDATE"));				//거래시작일
				rqestMap.put( "IN_TR_EDATE", (String)inMap.get("TR_EDATE")); //2주 더...	//거래종료일
				rqestMap.put( "IN_CRT_DIV", "RN");											//계약구분
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
				rqestMap.put( "IN_BJ_YN", "B");												//보증금전용계좌 등록
				rqestMap.put( "S_USER_ID", (String)inMap.get("S_USER_ID"));
				
				baseDao.update("RNT01070500DAO.SP_VA_BILL_UID", rqestMap);
	    		
				//납부요청 내용 상세 등록
				
				for(int i=0; i<unpaidMap.size(); i++){
					rqestMap.clear();
					rqestMap.put("IN_FLAG", "DETAIL");												//작업구분
					rqestMap.put( "IN_BANK_CD", "");												//은행코드
					rqestMap.put( "IN_ACCT_NO", "");												//계좌번호
					rqestMap.put( "IN_TR_DATE", (String)inMap.get("CHANGE_DE"));					//거래일자
					rqestMap.put( "IN_TR_SDATE", (String)inMap.get("TR_SDATE"));					//거래시작일
					rqestMap.put( "IN_TR_EDATE", (String)inMap.get("TR_EDATE")); //2주 더...		//거래종료일
					rqestMap.put( "IN_CRT_DIV", "RN");												//계약구분
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
					rqestMap.put( "IN_BJ_YN", "B");													//보증금전용계좌 등록
					rqestMap.put( "S_USER_ID", (String)inMap.get("S_USER_ID"));
					baseDao.update("RNT01070500DAO.SP_VA_BILL_UID", rqestMap);
				}
				
				//납부요청 내용 총 합계 등록
				rqestMap.put("IN_FLAG", "MASTER");											//작업구분
				rqestMap.put( "IN_BANK_CD", (String)inMap.get("BANK_CODE"));				//은행코드
				rqestMap.put( "IN_ACCT_NO", (String)inMap.get("ACNUTNO"));					//계좌번호
				rqestMap.put( "IN_TR_DATE", (String)inMap.get("CHANGE_DE"));				//거래일자
				rqestMap.put( "IN_TR_SDATE", (String)inMap.get("TR_SDATE"));				//거래시작일
				rqestMap.put( "IN_TR_EDATE", (String)inMap.get("TR_EDATE")); //2주 더...	//거래종료일
				rqestMap.put( "IN_CRT_DIV", "RN");											//계약구분
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
				rqestMap.put( "IN_BJ_YN", "B");												//보증금전용계좌 등록
				rqestMap.put( "S_USER_ID", (String)inMap.get("S_USER_ID"));
				
				baseDao.update("RNT01070500DAO.SP_VA_BILL_UID", rqestMap);
				*/
			}else {
				//기존의 납부요청 내용 일괄 삭제
				rqestMap.put("IN_FLAG", "DELETE");											//작업구분
				rqestMap.put( "IN_BANK_CD", "%");											//은행코드
				rqestMap.put( "IN_ACCT_NO", "%");											//계좌번호
				rqestMap.put( "IN_TR_DATE", (String)inMap.get("CHANGE_DE"));				//거래일자
				rqestMap.put( "IN_TR_SDATE", (String)inMap.get("TR_SDATE"));				//거래시작일
				rqestMap.put( "IN_TR_EDATE", (String)inMap.get("TR_EDATE")); //2주 더...	//거래종료일
				rqestMap.put( "IN_CRT_DIV", "RN");											//계약구분
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
				rqestMap.put( "IN_BJ_YN", "B");												//보증금전용계좌 등록
				rqestMap.put( "S_USER_ID", (String)inMap.get("S_USER_ID"));
				
				baseDao.update("RNT01070500DAO.SP_VA_BILL_UID", rqestMap);
			}
		}
		
		
		Map tempMap2 = new HashMap<String, Object>();
		tempMap2.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
		tempMap2.put("CHANGE_DE", inMap.get("CHANGE_DE"));
		//복원 요청시 변경전임대료, 변경후임대료 동일하게 입력(동호변경 전 임대료로 미납금액 재조정)
		tempMap2.put("RNTCHRG_BFCHG", inMap.get("RNTCHRG_AFTCH"));
		tempMap2.put("RNTCHRG_AFTCH", inMap.get("RNTCHRG_AFTCH"));
		tempMap2.put("GTN_BFCHG", inMap.get("GTN_BFCHG"));
		tempMap2.put("GTN_AFTCH", inMap.get("GTN_AFTCH"));
		
		baseDao.insert("RNT01030700DAO.SPRNT_RENT_CHGHOUSE_CAL", tempMap2);
		
		baseDao.delete("RNT01030700DAO.rentHouseChangeD", inMap);
			
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentHouseBildList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030700DAO.rentHouseBildList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectNoticeSheetReport( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030700DAO.selectNoticeSheetReport", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		
		List <Map> records1 = (List<Map>)baseDao.list("RNT01030700DAO.selectBankList", inMap);
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDataset.put("output2", outDsMap1);
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
			
		baseDao.update("RNT01030700DAO.approveU", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		
		outDataset.put("output1", outDsMap);
	}    
}
