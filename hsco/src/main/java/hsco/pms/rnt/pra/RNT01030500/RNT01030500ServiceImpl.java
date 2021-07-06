package hsco.pms.rnt.pra.RNT01030500;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT01030500ServiceImpl.java
 * @Description  	: 자격변경
 * @author       	: 지효정
 * @since        	: 2015. 12. 30.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * </pre>  
 */
@Service("RNT01030500Service")
public class RNT01030500ServiceImpl extends BaseService{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 계약자 상세정보 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRentInfoDetail( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030500DAO.selectRentInfoDetail", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 계약자 가족 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentCstmrFamilyList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030500DAO.rentCstmrFamilyList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 체납 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentNypmDtlsList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030500DAO.rentNypmDtlsList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 압류 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentGtnSeizrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030500DAO.rentGtnSeizrList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 명의변경 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentNmchangeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030500DAO.rentNmchangeList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 자격변경 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentQualfChangeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030500DAO.rentQualfChangeList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 해약 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentResciList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030500DAO.rentResciList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 자격변경 메인
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentQualfChangeMain( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030500DAO.rentQualfChangeMain", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 자격별 보증금/임대료 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAmount( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030500DAO.selectAmount", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 자격변경 처리
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void saveRentQualChg(DataSetMap tranInfo, Map<String, Object> inVar,
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
		
		int rowType = ((Integer) inMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

		if ( rowType == DataSet.ROW_TYPE_DELETED ){
			
			//자격변경시 생성된 보증금 순번 조회
			Map tempMap = new HashMap<String, Object>();
			
			int gtnDfnnt = Integer.parseInt((String)inMap.get("GTN_DFNNT"));
			
			tempMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			tempMap.put("CHANGE_DE", inMap.get("CHANGE_DE"));
			tempMap.put("GTN_DFNNT", Math.abs(gtnDfnnt));
			String gtnSn = (String) baseDao.select("RNT01030700DAO.selectGtnSn", tempMap);
			
			//자격변경시 생성된 보증금 삭제 
			inMap.put("GTN_SN", gtnSn);
			baseDao.delete("RNT01030700DAO.rentGtnD", inMap);
			
			//보증금 납부요청
			String[] arrSqlId = {
					"RNT01030700DAO.unpaidGtnList"};		//보증금 미납내역
			
			/*  
			  수정일 : 2016.11.23
			  수정자 : 손연옥
			  자격변경 복원일 경우 납부요청된 자료를 삭제처리만 하면 됨.
			 */
			Map<String, String> rqestMap = new HashMap<String, String>();
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
			//미납내역 납부요청(보증금)
			/*for(int sqlIdx=0; sqlIdx<arrSqlId.length; sqlIdx++){
				List <Map> unpaidMap = (List<Map>)baseDao.list(arrSqlId[sqlIdx], inMap);
				Map<String, String> rqestMap = new HashMap<String, String>();
				if(unpaidMap != null && unpaidMap.size() > 0){
					
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
			}*/
			
			
			baseDao.delete("RNT01030500DAO.deleteRentQualChg", inMap);
			
			Map tempMap2 = new HashMap<String, Object>();
			
			tempMap2.put("CNTRCTR_NO", 		inMap.get("CNTRCTR_NO"));
			tempMap2.put("CHANGE_DE", 		inMap.get("CHANGE_DE_BFCHG"));
			tempMap2.put("RM", 				"");
			tempMap2.put("QUALF_SE_AFTCH", 	inMap.get("QUALF_SE_BFCHG"));
			tempMap2.put("GTN_AFTCH", 		inMap.get("GTN_BFCHG"));
			tempMap2.put("RNTCHRG_AFTCH", 	inMap.get("RNTCHRG_BFCHG"));
			
			baseDao.update("RNT01030500DAO.updateRentContract", tempMap2); // 계약정보 업데이트
			
			inMap2.put("CHANGE_DE", inMap.get("CHANGE_DE"));
			inMap2.put("CHANGE_NO", inMap.get("CHANGE_NO"));
			
			baseDao.insert("RNT02000000DAO.deleteDdcAmount", inMap2);
		}else if( rowType == DataSet.ROW_TYPE_INSERTED ){
			baseDao.insert("RNT01030500DAO.saveRentQualChg", inMap);
			baseDao.update("RNT01030500DAO.updateRentContract", inMap); // 계약정보 업데이트
			
			String changeNo = (String)baseDao.select("RNT01030500DAO.selectChangeNo", inMap);
			inMap2.put("CHANGE_NO", changeNo);
			
			baseDao.insert("RNT02000000DAO.saveDdcAmount", inMap2);
			
			int gtnDfnnt = Integer.parseInt((String)inMap.get("GTN_AFTCH")) - Integer.parseInt((String)inMap.get("GTN_BFCHG"));		// 보증금 차액
			
			if(gtnDfnnt > 0){
				//증액보증금 등록
				inMap.put("GTN_DFNNT", gtnDfnnt);
				inMap.put("QUALF_SE", inMap.get("QUALF_SE_AFTCH"));
				baseDao.insert("RNT01030700DAO.rentGtnC", inMap);
			}
			
			//증액보증금 납부요청
			String[] arrSqlId = {
					"RNT01030700DAO.unpaidGtnList"};		//보증금 미납내역
			
			//미납내역 납부요청(보증금)
			for(int sqlIdx=0; sqlIdx<arrSqlId.length; sqlIdx++){
				List <Map> unpaidMap = (List<Map>)baseDao.list(arrSqlId[sqlIdx], inMap);
				Map<String, String> rqestMap = new HashMap<String, String>();
				if(unpaidMap != null && unpaidMap.size() > 0){
					
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
				}
			}
		}else{
			baseDao.update("RNT01030500DAO.updateRentQualChg", inMap);
		}
		
	    //baseDao.update("RNT01030500DAO.updateRentContract", inMap); // 계약정보 업데이트
	    //baseDao.update("RNT01030500DAO.updateRentContractCstmr", inMap); // 계약자정보 업데이트    
	} 
	
	/**
	 * 계약정보수정
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void procRentContractInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		Map schMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(inMap);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		}
		System.out.println("############################################################################3");
		System.out.println(inMap);
		System.out.println("############################################################################3");
		
		List <Map> records = (List<Map>)baseDao.list("RNT01030500DAO.selectRentContractInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		if (outDsMap != null)
			schMap = outDsMap.get(0);
		
		System.out.println("############################################################################3");
		System.out.println(schMap);
		System.out.println("############################################################################3");
		
		records = (List<Map>)baseDao.list("RNT01030500DAO.selectRentContractRenewQulf", schMap);
		
		
		if(records.size() > 0){
		
			outDsMap.setRowMaps(records);
		   
			schMap.put("IS_QUALF_SE1", outDsMap.get(0).get("IS_QUALF_SE1"));
		    schMap.put("IS_RENT_ENDDE_BFCHG", outDsMap.get(0).get("IS_RENT_ENDDE_BFCHG")); 
			schMap.put("IS_RENT_BGNDE_1", outDsMap.get(0).get("IS_RENT_BGNDE_1")); 
					
				
		System.out.println("############################################################################3");
		System.out.println(schMap);
		System.out.println("############################################################################3");
				
			records = (List<Map>)baseDao.list("RNT01030500DAO.selectRntchrgStdrInfo", schMap);
			
			outDsMap.setRowMaps(records);
			schMap.put("IS_MT_RNTCHRG1", outDsMap.get(0).get("IS_MT_RNTCHRG1"));
		    schMap.put("IS_RENT_GTN1", outDsMap.get(0).get("IS_RENT_GTN1")); 
			schMap.put("IS_SURLUS1", outDsMap.get(0).get("IS_SURLUS1")); 
			
	  System.out.println("############################################################################3");
	  System.out.println(schMap);
	  System.out.println("############################################################################3");	
	      
	        baseDao.update("RNT01030500DAO.updateRentContractRenew", schMap); // 재계약정보 업데이트	
		   
		}
	
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
		records = (List<Map>)baseDao.list("RNT01030500DAO.selectRentInfoDetail", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		//자격변경정보 상세
		records = (List<Map>)baseDao.list("RNT01030500DAO.rentQualfChangeList", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output2", outDsMap);
		
		//결제자 이름 목록
		records = (List<Map>)baseDao.list("RNT01030500DAO.sanctnerNmDetail", inMap);
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output3", outDsMap);
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

		records = (List<Map>)baseDao.list("RNT01030500DAO.sanctnerNmDetail", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "rawtypes" })
	
	public void rentQualfChangeU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		//결제번호 수정
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			baseDao.update("RNT01030500DAO.rentQualfChangeU", map);
		}
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
			
		baseDao.update("RNT01030500DAO.approveU", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		
		outDataset.put("output1", outDsMap);
	}   
}
