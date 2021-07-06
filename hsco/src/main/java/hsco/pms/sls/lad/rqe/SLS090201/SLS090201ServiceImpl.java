package hsco.pms.sls.lad.rqe.SLS090201;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS090201ServiceImpl.java
 * @Description  	: 
 * @author       	: 최승락
 * @since        	: 2015. 10.19.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *   2015. 10. 19.		  최승락		      최초생성
 * </pre>
 */
@Service("SLS090201Service")
public class SLS090201ServiceImpl extends BaseService implements SLS090201Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
		

	/**
	 * 수납조정목록(분양) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLttotRcivMdatList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS090201DAO.selectLttotRcivMdatList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 수납조정목록(분양) 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes"})
	public int saveLttotRcivMdatList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SLS090201DAO.updateLttotRcivMdatList", map);					
					break;
				case DataSet.ROW_TYPE_DELETED :
					break;					
			}
		}	
		return iRow;
	}	
	

	/**
	 * 결의서 생성
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void saveLadaActVote(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			baseDao.list("SLS090201DAO.SPSLS_LAD_ACTVOTE", map);		
		}

	}		
	
	
	
	
	//
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int saveLttotRcivMdatVaBill ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
					    
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;		
		records = (List<Map>)baseDao.list("SLS090201DAO.selectLttotRcivMdatMaster", inMap);
		
		int size = (records == null) ? 0 : records.size();
		for (int x = 0; x < size; x++) {
			
			Map map = records.get(x);
			Map map2 = null;
			
			int miCnt = Integer.parseInt(String.valueOf(map.get("MI_CNT")));
			Map<String, Object> paramMap = null;
			if(miCnt == 0)
			{
				map.put("PAY_TMLMT_FR", inMap.get("PAY_TMLMT_FR"));
				map.put("PAY_TMLMT_TO", inMap.get("PAY_TMLMT_TO"));
				map.put("PROCESS_SE", inMap.get("PROCESS_SE"));
				map.put("LAD_CODE", inMap.get("LAD_CODE"));
				map.put("DTA_SE", inMap.get("DTA_SE"));
				
				List <Map> records2;	
				records2 = (List<Map>)baseDao.list("SLS090201DAO.selectLttotRcivMdatDetail", map);
				
				int size2 = (records2 == null) ? 0 : records2.size();
				
				for (int y = 0; y < size2; y ++) {
					map2 = records2.get(y);
					map2.put("BILL_SEQ", y + 1);  //청구순번					
					if(y == 0){
												
						// 마스터 디테일 삭제
						paramMap = callVaBillUID("DELETE", miCnt, map2);
						baseDao.update("SLS090201DAO.SP_VA_BILL_UID", paramMap);
						
						// 
						paramMap = callVaBillUID("MASTER", miCnt, map2);
						baseDao.update("SLS090201DAO.SP_VA_BILL_UID", paramMap);						
						
					}										
					// 디테일 생성
					String f_crtname = (String)map2.get("F_CRTNAME");
					if (!"할부이자".equals(f_crtname)) {
						paramMap = callVaBillUID("DETAIL", miCnt, map2);
						baseDao.update("SLS090201DAO.SP_VA_BILL_UID", paramMap);
					}					
				}
				
				// 마스터 생성
				paramMap = callVaBillUID("MASTER", miCnt, map2);
				baseDao.update("SLS090201DAO.SP_VA_BILL_UID", paramMap);		
			}
			
		}		
		return iRow;
	}
	
	@SuppressWarnings("rawtypes")
	public Map<String, Object> callVaBillUID(String type, int miCnt, Map map) {
		
	    // 파라미터 변수 초기화 
	    Object in_bank_cd = null;       //은행코드     
	    Object in_acct_no = null;		//계좌번호
	    Object in_tr_date = null;		//거래일자
	    Object in_tr_sdate = null;		//거래시작일
	    Object in_tr_edate = null;		//거래종료일
	    Object in_crt_div = null;		//계약구분
	    Object in_crt_id = null;	    //계약자
	    Object in_bill_seq = null;		//청구순번
	    Object in_cort_code = null;		//납부코드
	    Object in_pay_num = null;		//납부번호
	    Object in_rec_class = null;		//납부구분
	    Object in_rec_seq = null;		//납부순번
	    Object in_payend_date = null;	//납입기한
	    Object in_bill_amt = 0;		//결제금액
	    Object in_pay_amt = 0;		//납부대상금액
	    Object in_sale_amt = 0;		//차감금액
	    Object in_int_amt = 0;		//연체금액
	    Object in_bill_div = null;		//납부구분
	    Object in_first_entry = null;	//등록자ID
	    Object in_bj_yn = null;	    	//보증금전용계좌 등록
	    
	    Map<String, Object> paramMap = new HashMap<String, Object>();
	    
		//작업구분
		paramMap.put("IN_FLAG", type);
		
		//은행구분
		paramMap.put("IN_BANK_CD", in_bank_cd);		
		
		//계좌번호
		paramMap.put("IN_ACCT_NO", in_acct_no);	
				
		//거래일자
		in_tr_date = map.get("LS_TR_DATE");
		paramMap.put("IN_TR_DATE", in_tr_date);
		
		//거래시작일
		in_tr_sdate = map.get("LS_TR_SDATE");
		paramMap.put("IN_TR_SDATE", in_tr_sdate);
		
		
		//거래종료일
		if("DELETE".equals(type) && miCnt == 0) {
			paramMap.put("IN_TR_EDATE", in_tr_edate);
		} else {
			in_tr_edate = map.get("LS_TR_EDATE");
			paramMap.put("IN_TR_EDATE", in_tr_edate);						
		}
		
		//계약구분
		in_crt_div = "LN";
		paramMap.put("IN_CRT_DIV", in_crt_div);
		
		//계약자
		in_crt_id = map.get("CRT_ID");
		paramMap.put("IN_CRT_ID", in_crt_id);		
		
		//청구순번
		if ("DELETE".equals(type)) {
			paramMap.put("IN_BILL_SEQ", in_bill_seq);
		} else if ("MASTER".equals(type)) {
			in_bill_seq = String.valueOf(0);
			paramMap.put("IN_BILL_SEQ", in_bill_seq);			
		} else if ("DETAIL".equals(type)) {
			in_bill_seq = String.valueOf(map.get("BILL_SEQ"));
			paramMap.put("IN_BILL_SEQ", in_bill_seq);			
		}
		
		//납부코드
		if ("DETAIL".equals(type) && miCnt == 0) {
			in_cort_code = map.get("F_CORT_CODE");
			paramMap.put("IN_CORT_CODE", in_cort_code);			
		} else {
			paramMap.put("IN_CORT_CODE", in_cort_code);			
		}
			
		//납부번호
		if ("DETAIL".equals(type) && miCnt == 0) {
			in_pay_num = map.get("F_PAY_NUM");
			paramMap.put("IN_PAY_NUM", in_pay_num);
		} else {
			paramMap.put("IN_PAY_NUM", in_pay_num);			
		}
		
		//납부구분
		if ("DETAIL".equals(type) && miCnt == 0) {
			in_rec_class = map.get("REC_CLASS");
			paramMap.put("IN_REC_CLASS", in_rec_class);
		} else {
			paramMap.put("IN_REC_CLASS", in_rec_class);			
		}
		
		//납부순번
		if ("DETAIL".equals(type) && miCnt == 0) {
			in_rec_seq = map.get("REC_SEQ");
			paramMap.put("IN_REC_CLASS", in_rec_seq);
		} else {
			paramMap.put("IN_REC_CLASS", in_rec_seq);			
		}
		
		//납부기한
		if ("DETAIL".equals(type) && miCnt == 0) {
			in_payend_date = map.get("PAYEND_DATE");
			paramMap.put("IN_PAYEND_DATE", in_payend_date);
		} else {
			paramMap.put("IN_PAYEND_DATE", in_payend_date);			
		}

		//결제금액
		if ("DETAIL".equals(type) && miCnt == 0) {
			in_bill_amt = String.valueOf(map.get("TOT_AMT"));
			paramMap.put("IN_BILL_AMT", in_bill_amt);			
		} else {
			in_bill_amt = String.valueOf(0);
			paramMap.put("IN_BILL_AMT", in_bill_amt);			
		}

		//납부대상금액
		if ("DETAIL".equals(type) && miCnt == 0) {
			in_pay_amt = String.valueOf(map.get("CORT_AMT"));
			paramMap.put("IN_PAY_AMT", in_pay_amt);			
		} else {
			in_pay_amt = String.valueOf(0);
			paramMap.put("IN_PAY_AMT", in_pay_amt);			
		}
		
		//차감금액
		if ("DETAIL".equals(type) && miCnt == 0) {
			in_sale_amt = String.valueOf(map.get("CHA_AMT"));
			paramMap.put("IN_SALE_AMT", in_sale_amt);			
		} else {
			in_sale_amt = String.valueOf(0);
			paramMap.put("IN_SALE_AMT", in_sale_amt);			
		}
				
		//연체금액
		if ("DETAIL".equals(type) && miCnt == 0) {
			in_int_amt = String.valueOf(map.get("APPAY_AMT"));
			paramMap.put("IN_INT_AMT", in_int_amt);			
		} else {
			in_int_amt = String.valueOf(0);
			paramMap.put("IN_INT_AMT", in_int_amt);			
		}
					
		//납부구분
		in_bill_div = "A";
		paramMap.put("IN_BILL_DIV", in_bill_div);
		
		//등록자ID
		in_first_entry = ObjectUtil.getSessionObj("S_USER_ID");
		paramMap.put("IN_FIRST_ENTRY", in_first_entry);
		
		//보증금전용계좌 등록
		paramMap.put("IN_BJ_YN", in_bj_yn);

		return paramMap;
	}
	
	
	
}
