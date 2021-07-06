package hsco.pms.sls.hou.rci.SLS040301;

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
 * @Class Name   	: SLS040301ServiceImpl.java
 * @Description  	: 
 * @author       	: 최승락
 * @since        	: 2015. 11.14.
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
 *  2015. 11. 14.		 최승락			최초생성
 * </pre>
 */
@Service("SLS040301Service")
public class SLS040301ServiceImpl extends BaseService implements SLS040301Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
	
	/**
	 * 주택수납소인 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseRcivPstmrkList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		records = (List<Map>)baseDao.list("SLS040301DAO.selectHouseRcivPstmrkList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	
	/* 수납자료 조회 (수납자료 insert , 자료구분 update  */
	
    @SuppressWarnings({ "unchecked" })	
	public void selectHouseRcivPstmrk( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		inMap.put("IN_PAYMTHD", 		inMap.get("PAYMTHD"));//
		inMap.put("IN_RCIV_DE1", 		inMap.get("RCIV_DE1"));//
		inMap.put("IN_RCIV_DE2", 		inMap.get("RCIV_DE2"));//
		inMap.put("IN_HOUSE_CODE", 		inMap.get("HOUSE_CODE"));//
		inMap.put("IN_DONG", 			inMap.get("DONG"));//
		inMap.put("IN_HO", 				inMap.get("HO"));//
		inMap.put("IN_REGISTER_ID", 	String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));//		
		
		
		baseDao.update("SLS040301DAO.SPSLS_HOUSE_RCIV_PSTMRK_I", inMap);
		/*baseDao.update("SLS040301DAO.SPSLS_HOUSE_RCIV_PSTMRK_U", inMap); */

	}	
	
	
	
	//주택수납소인 처리
	
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public int saveHouseRcivPstmrkList( DataSetMap tranInfo, Map<String, Object> inVar,
										Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
										Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");//주택수납소인 정보
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input2"); //조회조건
		Map<String, String> inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}

		int listSize = (list==null) ? 0 : list.size(); //주택수납소인 정보
		System.out.println("========== listSize =========================> "+listSize);
			
		
		for (int x = 0; x < listSize; x++) {				
			Map<String, Object> map = list.get(x);
		
			String PSTMRK_AT = map.get("PSTMRK_AT").toString();
			String PSTMRK_OPERT_SE = map.get("PSTMRK_OPERT_SE").toString();
			String PAY_SE = map.get("PAY_SE").toString();
			String PAY_MTHD = map.get("PAYMTHD").toString();
			
			System.out.println("========== PSTMRK_AT ======================> [" + x + "] "+PSTMRK_AT);
			System.out.println("========== PSTMRK_OPERT_SE ================> [" + x + "] "+PSTMRK_OPERT_SE);
			System.out.println("========== PAY_SE =========================> [" + x + "] "+PAY_SE);
			System.out.println("========== PAYMTHD =========================> [" + x + "] "+PAY_MTHD);
			
			
			//1.미처리 자료만 처리			
			if("0".equals(PSTMRK_AT) || PSTMRK_AT == null){
				
				//2.작업구분 : 정상(J), 일부과오납(O)
				if("J".equals(PSTMRK_OPERT_SE) || "O".equals(PSTMRK_OPERT_SE)){
					
					//3.납부구분 : 분양금(1), 보증금(4)
					if("1".equals(PAY_SE) || "4".equals(PAY_SE)){
						
						map.put("OPETR_ID", 	String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));
						baseDao.update("SLS040301DAO.updateTBSLS_HOUSE_LTTOT_PAY", map);
						baseDao.update("SLS040301DAO.updateTBSLS_HOUSE_RCIV_PSTMRK", map);						
						
					}
					//3.납부구분 : 임대료(2)
					else if("2".equals(PAY_SE)){
						
						map.put("OPETR_ID", 	String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));
						if("02".equals(PAY_MTHD)){
							baseDao.update("SLS040301DAO.updateTBSLS_HOUSE_RENT_PAY2", map);
						}
						if("03".equals(PAY_MTHD)){
							 baseDao.update("SLS040301DAO.updateTBSLS_HOUSE_RENT_PAY", map);
						} 						
						baseDao.update("SLS040301DAO.updateTBSLS_HOUSE_RCIV_PSTMRK", map);
					}
					//3.납부구분 : 융자금(3)
					else if("3".equals(PAY_SE)){
						
						//4-0
						map.put("OPETR_ID", 	String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));//
						baseDao.update("SLS040301DAO.updateTBSLS_HOUSE_MT_LANMN", map);
						baseDao.update("SLS040301DAO.updateTBSLS_HOUSE_RCIV_PSTMRK", map);						

					}
					
					//3.납부구분 : 기타수입
					else if("0".equals(PAY_SE) || "6".equals(PAY_SE) || "6".equals(PAY_SE) || "7".equals(PAY_SE) || "8".equals(PAY_SE)  ){
						
						map.put("OPETR_ID", 	String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));						
						baseDao.update("SLS040301DAO.updateTBSLS_ETC_INCME_PAY", map);
						baseDao.update("SLS040301DAO.updateTBSLS_HOUSE_RCIV_PSTMRK", map);						

					}					
					
					if("O".equals(PSTMRK_OPERT_SE)){
							//PR_REPAYMENT_Update
						System.out.println("========== 과오처리 ================> [" + x + "] ");
							String RCIV_DE = map.get("RCIV_DE").toString();//조회조건
							
							map.put("CNTRCTR_NO", 		map.get("CNTRCTR_NO"));//주택수납소인 정보
							map.put("RCIV_DE", 			RCIV_DE);//수납일자
							map.put("RCIV_SN", 			map.get("RCIV_SN"));//수납일련번호
							map.put("OVERRPAY_AMOUNT", 	map.get("OVERRPAY_AMOUNT"));//과오납금액
					
							String PAYMTHD = map.get("PAYMTHD").toString();//주택수납소인 정보
							
							if("01".equals(PAYMTHD)){ //OCR 처리
								map.put("PAYMTHD", 		"01");//수납방법 : OCR
								map.put("BANK_CODE", 	"00");//은행코드 : 직접수납
								map.put("OCR_NO", 		"");//계좌번호
							}
							else{
								map.put("RCIV_MTH", 	"02");//수납방법 : 자동이체로 처리
								map.put("BANK_CODE", 	"01");//은행코드
								map.put("OCR_NO", 		"");//계좌번호
							}
				
							//5.
							baseDao.insert("SLS040301DAO.insertTBSLS_HOUSE_RCIV_FALT", map);
						}
						//PR_REC_DESC_Update;
						//6.
						//baseDao.update("SLS040301DAO.updateTBSLS_HOUSE_RCIV_PSTMRK", map);
					
				}
				//2.작업구분 :100% 과오납(R)
				else if("R".equals(PSTMRK_OPERT_SE)){
					
					//PR_REPAYMENT_Update;					
					String RCIV_DE = map.get("RCIV_DE").toString();//조회조건
					
					map.put("CNTRCTR_NO", 		map.get("CNTRCTR_NO"));//주택수납소인 정보
					map.put("RCIV_DE", 			RCIV_DE);//수납일자
					map.put("RCIV_SN", 			map.get("RCIV_SN"));//수납일련번호
					map.put("OVERRPAY_AMOUNT", 	map.get("OVERRPAY_AMOUNT"));//과오납금액
			
					String PAYMTHD = map.get("PAYMTHD").toString();//주택수납소인 정보
					
					if("01".equals(PAYMTHD)){ //OCR 처리
						map.put("PAYMTHD", 		"01");//수납방법 : OCR
						map.put("BANK_CODE", 	"00");//은행코드 : 직접수납
						map.put("OCR_NO", 		"");//계좌번호
					}
					else{
						map.put("RCIV_MTH", 	"02");//수납방법 : 자동이체로 처리
						map.put("BANK_CODE", 	"01");//은행코드
						map.put("OCR_NO", 		"");//계좌번호
					}
		
					
					//5.
					baseDao.insert("SLS040301DAO.insertTBSLS_HOUSE_RCIV_FALT", map);
					
			        //PR_REC_DESC_Update;
					//6.
					baseDao.update("SLS040301DAO.updateTBSLS_HOUSE_RCIV_PSTMRK", map);
				}
				else{
					
				}
			}
			
			
			//결의서 생성
			map.put("IN_CNTRCTR_NO", 	map.get("CNTRCTR_NO"));//
			map.put("IN_RCIV_DE", 		map.get("RCIV_DE"));//
			map.put("IN_PAY_SE", 		map.get("PAY_SE"));//
			map.put("IN_OPERT_SE", 		map.get("PSTMRK_OPERT_SE"));//
			map.put("IN_UPDUSR_ID", 	String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));
			
			map.put("IN_HOUSE_CODE", 	map.get("HOUSE_CODE"));//
			map.put("IN_DONG", 			map.get("DONG"));//
			map.put("IN_HO", 			map.get("HO"));//
			map.put("IN_RCIV_SE", 		map.get("RCIV_SE"));//
			map.put("IN_RCIV_CO", 		map.get("RCIV_CO"));//
			
			map.put("IN_PAY_CODE", 		map.get("PAY_CODE"));//
			map.put("IN_PAY_TMLMT", 	map.get("PAY_TMLMT"));//
			map.put("IN_PAYMTHD", 		map.get("PAYMTHD"));//
	
			//결의서 생성
			iRow = baseDao.update("SLS040301DAO.SPSLS_HOUSE_DECSN_DI", map);

			//System.out.println("OUT_RESULT_CD=결의서 생성 처리============================> " + map.get("OUT_RESULT_CD").toString());				
			//if (!"0".equals(map.get("OUT_RESULT_CD").toString())) {
			//	throw new NexaServiceException("info.메시지", map.get("OUT_RESULT_MSG").toString());
			//}
			
			String DONG = ""; 
			if( inMap.get("DONG") == null || "".equals(inMap.get("DONG")) ){
				DONG = "%";
			}
			String HO = ""; 
			if( inMap.get("HO") == null || "".equals(inMap.get("HO")) ){
				HO = "%";
			}		
			
			System.out.println("=========DONG =========================> "+DONG);
			System.out.println("=========HO =========================> "+HO);
			
			//상호전환 이율에 따라 임대료를 인하
			/*
			map.put("IN_RCIV_DE", 	map.get("RCIV_DE"));//
			map.put("IN_HOUSE_CODE", 	inMap.get("HOUSE_CODE"));//
			map.put("IN_DONG", 		DONG);//
			inMap.put("IN_HO", 			HO);//
			inMap.put("IN_PAYMTHD", 	inMap.get("PAYMTHD"));//
			inMap.put("IN_UPDUSR_ID", 	String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));
			*/
			//상호전환 이율에 따라 임대료를 인하
			iRow = baseDao.update("SLS040301DAO.SPSLS_HOUSE_RENT_DOWN", map);
			
		}
		/*
		String DONG = ""; 
		if( inMap.get("DONG") == null || "".equals(inMap.get("DONG")) ){
			DONG = "%";
		}
		String HO = ""; 
		if( inMap.get("HO") == null || "".equals(inMap.get("HO")) ){
			HO = "%";
		}		
		
		System.out.println("=========DONG =========================> "+DONG);
		System.out.println("=========HO =========================> "+HO);
		
		//상호전환 이율에 따라 임대료를 인하
		inMap.put("IN_RCIV_DE", 	inMap.get("RCIV_DE"));//
		inMap.put("IN_HOUSE_CODE", 	inMap.get("HOUSE_CODE"));//
		inMap.put("IN_DONG", 		DONG);//
		inMap.put("IN_HO", 			HO);//
		inMap.put("IN_PAYMTHD", 	inMap.get("PAYMTHD"));//
		inMap.put("IN_UPDUSR_ID", 	String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));
	
		//상호전환 이율에 따라 임대료를 인하
				iRow = baseDao.update("SLS040301DAO.SPSLS_HOUSE_RENT_DOWN", inMap);
		*/

		//System.out.println("OUT_RESULT_CD=상호전환 이율에 따라 임대료를 인하 처리============================> " + map2.get("OUT_RESULT_CD").toString());				
		//if (!"0".equals(inMap.get("OUT_RESULT_CD").toString())) {
		//	throw new NexaServiceException("info.메시지", inMap.get("OUT_RESULT_MSG").toString());
		//}

		return iRow;
    }
	
	//주택수납소인 취소 처리
	
    @SuppressWarnings({ "unchecked" })
	public int saveHouseRcivPstmrkListCancel( DataSetMap tranInfo, Map<String, Object> inVar,
										Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
										Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	int iRow = 0;
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1"); //조회조건
		Map<String, String> inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		/*
		String DONG = ""; 
		if( inMap.get("DONG") == null || "".equals(inMap.get("DONG")) ){
			DONG = "%";
		}
		String HO = ""; 
		if( inMap.get("HO") == null || "".equals(inMap.get("HO")) ){
			HO = "%";
		}
		*/
		System.out.println("=========DONG =========================> "+inMap.get("DONG"));
		System.out.println("=========HO =========================> "+inMap.get("HO"));
		
		
		inMap.put("IN_PAYMTHD", 		inMap.get("PAYMTHD"));//
		inMap.put("IN_RCIV_DE1", 		inMap.get("RCIV_DE1"));//
		inMap.put("IN_RCIV_DE2", 		inMap.get("RCIV_DE2"));//
		inMap.put("IN_HOUSE_CODE", 		inMap.get("HOUSE_CODE"));//
		inMap.put("IN_DONG", 			inMap.get("DONG"));//
		inMap.put("IN_HO", 				inMap.get("HO"));//
		inMap.put("IN_REGISTER_ID", 	String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));//
		
		//주택수납소인 취소 처리
		iRow = baseDao.update("SLS040301DAO.SPSLS_HOUSE_RCIV_PSTMRK_CANCEL", inMap);
		
		iRow = baseDao.update("SLS040301DAO.SPSLS_HOUSE_RCIV_PSTMRK_I", inMap);

		return iRow;
    }
	
	
	//주택수납과오 조회
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseRcivFaltList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;
		records = (List<Map>)baseDao.list("SLS040301DAO.selectHouseRcivFaltList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//주택수납과오 저장
		
	@SuppressWarnings({ "rawtypes"  })	
	public int saveHouseRcivFaltList(DataSetMap tranInfo, Map<String, Object> inVar,
									Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list  = (DataSetMap) inDataset.get("input1"); //주택계약자해약

		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {

			Map map  = list.get(x);  
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :
				break;
				
			case DataSet.ROW_TYPE_UPDATED :
				//업데이트
				iRow += baseDao.update("SLS040301DAO.updateHouseRcivFaltList", map); //수정
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				break;
		    }
			
		}

		return iRow;
		
	}
	
	
	//주택수납 수입관리 저장
	
	@SuppressWarnings({ "rawtypes", "unchecked"})	
	public int saveHouseRcivCUD(DataSetMap tranInfo, Map<String, Object> inVar,
									Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list  = (DataSetMap) inDataset.get("input1"); 

		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {

			Map map  = list.get(x);  
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :

				if ("T".equals(map.get("PAY_CODE").toString().substring(0,1))) {					
					// 기타납부번호 가져오기
					String ectPayNo = map.get("PAY_CODE").toString();
					
					if(ectPayNo == null){
						ectPayNo = getEtcPayNo(map);
					}	
					if(ectPayNo == null || ectPayNo.length() == 0) {
						ectPayNo = "없음";
					}
					map.put("PAY_NO", ectPayNo);										
				} else {
					//납부번호 가져오기 					
					String payNo = getPayNo(map);					
					if (payNo == null || payNo.length() == 0 ) {
						payNo = "없음";
					}
					map.put("PAY_NO", payNo);
				}				
				
				baseDao.insert("SLS040301DAO.saveHouseRcivC", map); //수정
				break;
				
			case DataSet.ROW_TYPE_UPDATED :
				//업데이트
				iRow += baseDao.update("SLS040301DAO.saveHouseRcivU", map); //수정
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				break;
		    }
			
		}

		return iRow;
		
	}	
	
	// 토지계약자납부 - 납부번호
	@SuppressWarnings("rawtypes")
	public String getPayNo (Map map) {
		String payNo = (String)baseDao.select("SLS040301DAO.selectPayNo", map);
		return payNo;
	}
	
	// 기타수입납부 -납부번호
	@SuppressWarnings("rawtypes")
	public String getEtcPayNo (Map map) {		
		String etcPayNo = (String)baseDao.select("SLS040301DAO.selectEtcPayNo", map);
		return etcPayNo;
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

		//List <Map> records;
		Map map = list.get(0);
			
		baseDao.update("SLS040301DAO.approveU", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		
		outDataset.put("output1", outDsMap);
	}
}
