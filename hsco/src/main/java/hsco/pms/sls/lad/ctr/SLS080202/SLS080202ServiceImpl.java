package hsco.pms.sls.lad.ctr.SLS080202;

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

@Service("SLS080202Service")
public class SLS080202ServiceImpl extends BaseService implements SLS080202Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
		
    
    /**
	 * 토지계약목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadLcntrctrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080202DAO.selectLadLcntrctrList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
    //토지계약자 해약정보조회
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadLcntrctrCancl( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080202DAO.selectLadLcntrctrCancl", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		//토지계약자 금액정보 조회
		records = (List<Map>)baseDao.list("SLS080202DAO.selectLadLcntrctrAmountInfo", inMap);

		DataSetMap outDsMap2 = new DataSetMap();		
		outDsMap2.setRowMaps(records);
		
		outDataset.put("output2", outDsMap2);

	}
    
    
    //토지계약자납부정보조회(분양,임대보증금)
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadLcntrctrPayInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080202DAO.selectLadLcntrctrPayInfo", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    //임대탭 : 임대료
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLcntrctrPayList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080202DAO.selectLcntrctrPayList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);

	}
    
    
    //토지 분양해약(대체) 취소 처리
    @SuppressWarnings({ "unchecked" })
    
	public int spslsLadLcntrctrCanclUiCancl( DataSetMap tranInfo, Map<String, Object> inVar,
										Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
										Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");//해약정보

		int listSize = (list==null) ? 0 : list.size(); //해약정보
		System.out.println("========== listSize =========================> "+listSize);
		
		
		for (int x = 0; x < list.size(); x++) {				
			Map<String, Object> map = list.get(x);
			
			//1. 블럭 롯트 상태체크
			String bltYn = selectBltYn(map);
			System.out.println("블럭 롯트 상태체크==bltYn====================================> " + bltYn);
			
			if("Y".equals(bltYn) ){
				throw new NexaServiceException("info.메시지", "해당 [블럭롯트]가 계약 상태입니다.\n상태를 확인하세요.");
			}
			else{
				
				//2. 소인처리 체크
				String pstmrkYn = selectPstmrkYn(map);
				System.out.println("소인처리 체크==pstmrkYn====================================> " + pstmrkYn);
				if( "Y".equals(pstmrkYn) ){
					throw new NexaServiceException("info.메시지", "소인취소후 해약취소 하시기 바랍니다.");
				}
				else{
					
					baseDao.delete("SLS080202DAO.deletePstmrk", map);
					
					iRow = baseDao.update("SLS080202DAO.SPSLS_LAD_LCNTRCTR_CANCL_UI2", map);
				}
			}
			
			//한번만 처리하면 된다.
			break;
		}

		return iRow;
    }
    
    
    //토지 분양해약(대체) 처리
    @SuppressWarnings({ "rawtypes", "unchecked" })
    
	public int spslsLadLcntrctrCanclUi( DataSetMap tranInfo, Map<String, Object> inVar,
										Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
										Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");//해약정보
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");//분양금액 / 임대보증금
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");//임대료

		int listSize = (list==null) ? 0 : list.size(); //해약정보
		int listSize2 = (list2==null) ? 0 : list2.size(); //분양금액 / 임대보증금
		int listSize3 = (list3==null) ? 0 : list3.size(); //임대료
		System.out.println("========== listSize =========================> "+listSize);
		System.out.println("========== listSize2 =========================> "+listSize2);
		System.out.println("========== listSize3 =========================> "+listSize3);
		
		int cnt = 0;
		for (int i = 0; i < listSize; i++) {
				
			Map map = list.get(i);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch(rowType) {
			
				case DataSet.ROW_TYPE_INSERTED :
					
					Map<String, Object> paramMap = new HashMap<String, Object>();
					
					//계약타입
					String CNTRCT_TY = map.get("CNTRCT_TY").toString();
					
					System.out.println("계약타입 : " + CNTRCT_TY);
					
					
					//1. 압류,대출이 있는지 확인
					String seizrYn = selectSeizrYn(map);
					System.out.println("해약시 압류,대출이 있는지 확인==seizrYn====================================> " + seizrYn);
					
					String lonYn = selectLonYn(map);
					System.out.println("해약시 압류,대출이 있는지 확인==lonYn====================================> " + lonYn);
					
					if( "Y".equals(seizrYn) ){
						throw new NexaServiceException("info.메시지", "해당 토지에 압류정보가 있어 해약이 불가능합니다.");
					}
					else if( "Y".equals(lonYn) ){
						throw new NexaServiceException("info.메시지", "해당 토지에 대출정보가 있어 해약이 불가능합니다.");
					}
					else{
						
						//2.해약처리
						//해약구분 : 대체처리
						String inputYn = "Y";
						if( "02".equals(map.get("RESCI_SE").toString()) ){
							//토지코드 입력가능여부
							inputYn = selectLadCodeInputYn(map);
							System.out.println("대체처리시 토지코드 입력가능여부 확인==inputYn====================================> " + inputYn);
						}	
						
						if( "N".equals(inputYn) ){
							throw new NexaServiceException("info.메시지", "입력된 블럭/롯트/타입코드는 사용할수 없습니다.");
						}
						else{
							
							if("RN".equals(CNTRCT_TY)){//임대
								
								//5-1.기초자료 조회
								for (int l = 0; l < listSize3; l++) {
									Map map4 = list3.get(l);
									
									map4.put("IN_CANCL_DE", 		map.get("CANCL_DE").toString());//해약일자
System.out.println("CANCL_DE============================> " + map.get("CANCL_DE").toString());
									map4.put("IN_UPDUSR_ID", 		map4.get(String.valueOf(ObjectUtil.getSessionObj("S_USER_ID"))));
									
									map4.put("IN_CNTRCTR_NO", 		map4.get("CNTRCTR_NO"));//계약자번호
									map4.put("IN_PAY_NO", 			map4.get("PAY_NO"));//납부번호
									
									map4.put("IN_RENT_BGNDE", 		map4.get("RENT_BGNDE"));//임대시작일자
									map4.put("IN_RENT_ENDDE", 		map4.get("RENT_ENDDE"));//임대종료일자
									map4.put("IN_CNTRCT_DE", 		map4.get("CNTRCT_DE"));//계약일자
									map4.put("IN_LAD_CODE", 		map4.get("LAD_CODE"));//토지코드
									map4.put("IN_PAY_CODE", 		"RN");//납부코드
									
									map4.put("IN_INSTLMT_SE", 		map4.get("INSTLMT_SE"));//할부구분
									map4.put("IN_LEV_DECSN_NO", 	map4.get("LEV_DECSN_NO"));//징수결의번호
									map4.put("IN_RCIV_DECSN_NO", 	map4.get("RCIV_DECSN_NO"));//수납결의번호
									map4.put("IN_PAYAMT", 			map4.get("PAYAMT_SM").toString());//납부금액
									map4.put("IN_INSTLMT_INTR", 	map4.get("INSTLMT_INTR").toString());//할부이자
									
									map4.put("IN_RDCAMT_AMOUNT", 	map4.get("CHA_AMT").toString());//감액금액
									map4.put("IN_INSTLMT_INTRT", 	map4.get("INSTLMT_INTRT").toString());//할부이율
									map4.put("IN_MISU_AMT", 		map4.get("UNCLAMT").toString());//미수금액
									
									//5-2. 납부금 처리
									
									System.out.print("임대 납부금 처리 : "+ l + " : " + map4.toString());
									
									baseDao.update("SLS080202DAO.SPSLS_LAD_RN_AMOUNT_UI", map4);
System.out.println("OUT_RESULT_CD=임대 납부금 처리============================> " + map4.get("OUT_RESULT_CD").toString());									
									if (!"0".equals(map4.get("OUT_RESULT_CD").toString())) {
										throw new NexaServiceException("info.메시지", map4.get("OUT_RESULT_MSG").toString());
									}
								}
								
							} 
						
							//해약처리 (*는 마무리처리에 쓰임)
							paramMap.put("IN_FG", "IR"); //구분 *
							paramMap.put("IN_LAD_CODE", 		map.get("LAD_CODE"));//토지코드 *
							paramMap.put("IN_CNTRCTR_NO", 		map.get("CNTRCTR_NO"));//계약자번호 *
							paramMap.put("IN_LTTOT_AMOUNT", 	map.get("LTTOT_AMOUNT").toString());//분양금액
							paramMap.put("IN_PAYAMT", 			map.get("PAYAMT").toString());//납부금액
							
							paramMap.put("IN_OVDINTR", 			map.get("OVDINTR").toString());//연체이자
							paramMap.put("IN_RETURN_INTR", 		map.get("RETURN_INTR").toString());//반환이자
							paramMap.put("IN_PENLTY", 			map.get("PENLTY").toString());//위약금 *
							paramMap.put("IN_INCMTAX", 			map.get("INCMTAX").toString());//소득세 *
							paramMap.put("IN_IHNTS", 			map.get("IHNTS").toString());//주민세 *
System.out.println("PENLTY=============================> " + map.get("PENLTY").toString());
System.out.println("INCMTAX=============================> " + map.get("INCMTAX").toString());
System.out.println("IHNTS=============================> " + map.get("IHNTS").toString());
							paramMap.put("IN_PYMNTAMT", 		map.get("PYMNTAMT").toString());//지급액 * (해약반환금액)
							paramMap.put("IN_RESCI_SE", 		map.get("RESCI_SE"));//해약구분 *
							//paramMap.put("IN_EXCCLC_DE", 		map.get("CANCL_DE"));//정산일자 *
							paramMap.put("IN_CANCL_DE", 		map.get("CANCL_DE").toString());//해약일자 *
							paramMap.put("IN_RESCI_RESN_CODE", 	map.get("RESCI_RESN_CODE"));//해약사유 *
							paramMap.put("IN_PENLTY_INTRT", 	map.get("PENLTY_INTRT"));//위약금이율
System.out.println("PENLTY_INTRT=============================> " + map.get("PENLTY_INTRT"));							
							paramMap.put("IN_RM", 				map.get("RM"));//비고
							paramMap.put("IN_PAY_TMLMT", 		map.get("PAY_TMLMT"));//납부기한
							paramMap.put("IN_PENLTY_APPLC_AT", 	map.get("PENLTY_APPLC_AT"));//위약금 여부
							paramMap.put("IN_NEW_LAD_CODE", 	map.get("ALTRTV_LAD_CODE"));
							paramMap.put("IN_NEW_BLCK", 		map.get("ALTRTV_BLCK"));
							
							paramMap.put("IN_NEW_LOT", 			map.get("ALTRTV_LOT"));
							paramMap.put("IN_NEW_LOT_TY", 		map.get("ALTRTV_LOT_TY"));
							paramMap.put("IN_BANK_CODE", 		map.get("BANK_CODE"));//은행
							paramMap.put("IN_DPSTR", 			map.get("DPSTR"));//예금주
							paramMap.put("IN_ACNUTNO", 			map.get("ACNUTNO"));//계좌
							
							paramMap.put("IN_DECSN_SE", 		map.get("DECSN_SE")); //결의구분
							paramMap.put("IN_UPDUSR_ID", 		String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));
						
System.out.println("IN_RESCI_SE=============================> " + paramMap.get("IN_RESCI_SE"));

							if( i == 0){
								baseDao.update("SLS080202DAO.SPSLS_LAD_LCNTRCTR_CANCL_UI", paramMap);
	System.out.println("IN_FG=============================> " + paramMap.get("IN_FG"));
								if (!"0".equals(paramMap.get("OUT_RESULT_CD").toString())) {
									//throw new NexaServiceException(paramMap.get("OUT_RESULT_MSG").toString());
									throw new NexaServiceException("info.메시지", paramMap.get("OUT_RESULT_MSG").toString());
								}
							}
							
							
							//3.토지계약자해약상세
							for (int j = 0; j < listSize2; j++) {
								Map map2 = list2.get(j);
								
								map2.put("RCIV_AMOUNT", 	map2.get("F_S1_SUMAMT").toString());//수납금액
								map2.put("OVDINTR", 		map2.get("ARRRG_AMOUNT").toString());//연체이자
								map2.put("IDRK_CO", 		map2.get("F_DAY").toString());//기산일수
								map2.put("COMPUT_AMOUNT", 	map2.get("F_INTR_AMT").toString());//산출금액
								map2.put("RETURN_INTR", 	map.get("RETURN_INTR").toString());//반환이자
								map2.put("INCMTAX", 		map2.get("F_INC_AMT"));//소득세
								map2.put("IHNTS", 			map2.get("F_INS_AMT"));//주민세
								map2.put("RETURN_INTRT", 	map2.get("F_R_RATIO").toString());//반환이자율
								
								iRow += baseDao.update("SLS080202DAO.insertLadLcntrctrCanclDetail", map2);
								cnt++;
							}
							
							System.out.println("cnt======listSize2=============================> " + cnt + "  == " + listSize2);
							
							//4.해약처리 마무리
							if( cnt == listSize2 ){ //한번만 실행.
								
								paramMap.put("IN_FG", "ED");
								
	System.out.println("IN_FG=============================> " + paramMap.get("IN_FG"));
	System.out.println("PENLTY=============================> " + paramMap.get("PENLTY"));
	System.out.println("INCMTAX=============================> " + paramMap.get("INCMTAX"));
	System.out.println("IHNTS=============================> " + paramMap.get("IHNTS"));
	
								baseDao.update("SLS080202DAO.SPSLS_LAD_LCNTRCTR_CANCL_UI", paramMap);
								
								if (!"0".equals(paramMap.get("OUT_RESULT_CD").toString())) {
									throw new NexaServiceException("info.메시지", paramMap.get("OUT_RESULT_MSG").toString());
								}
							}
							
							//5.계약자 납부내역 정산 처리
							//String CNTRCT_TY = map.get("CNTRCT_TY").toString();
							
							if("SL".equals(CNTRCT_TY)){//분양
								//5-1.기초자료 조회
								List <Map> records;
								records = (List<Map>)baseDao.list("SLS080202DAO.selectLadLcntrctrCancelPs", map);
								
								for (int k = 0; k < records.size(); k++) {
									Map map3 = records.get(k);
									
									map3.put("IN_CANCL_DE", 		map.get("CANCL_DE"));//해약일자
									map3.put("IN_UPDUSR_ID", 		map3.get(String.valueOf(ObjectUtil.getSessionObj("S_USER_ID"))));
									
									map3.put("IN_CNTRCTR_NO", 		map3.get("CNTRCTR_NO"));//계약자번호
									map3.put("IN_PAY_NO", 			map3.get("PAY_NO"));//납부번호
									
									map3.put("IN_RENT_BGNDE", 		map3.get("RENT_BGNDE"));//임대시작일자
									map3.put("IN_RENT_ENDDE", 		map3.get("RENT_ENDDE"));//임대종료일자
									map3.put("IN_CNTRCT_DE", 		map3.get("CNTRCT_DE"));//계약일자
									map3.put("IN_LAD_CODE", 		map3.get("LAD_CODE"));//토지코드
									map3.put("IN_PAY_CODE", 		map3.get("PAY_CODE"));//납부코드
									map3.put("IN_INSTLMT_SE", 		map3.get("INSTLMT_SE"));//할부구분
									map3.put("IN_LEV_DECSN_NO", 	map3.get("LEV_DECSN_NO"));//징수결의번호
									map3.put("IN_RCIV_DECSN_NO", 	map3.get("RCIV_DECSN_NO"));//수납결의번호
									map3.put("IN_PAYAMT", 			map3.get("PAYAMT").toString());//납부금액
									map3.put("IN_INSTLMT_INTR", 	map3.get("INSTLMT_INTR").toString());//할부이자
									map3.put("IN_RDCAMT_AMOUNT", 	map3.get("RDCAMT_AMOUNT").toString());//감액금액
									map3.put("IN_INSTLMT_INTRT", 	map3.get("INSTLMT_INTRT").toString());//할부이율
									
									
									//5-2. 납부금 처리
									baseDao.update("SLS080202DAO.SPSLS_LAD_SL_RN_CANCEL_PS", map3);
System.out.println("OUT_PRT_OK=납부서 발급처리============================> " + paramMap.get("OUT_PRT_OK").toString());
									if (!"0".equals(paramMap.get("OUT_RESULT_CD").toString())) {
										throw new NexaServiceException("info.메시지", paramMap.get("OUT_RESULT_MSG").toString());
									}
								}
					
							}
							else{//임대
								
								/*
								//5-1.기초자료 조회
								for (int l = 0; l < listSize3; l++) {
									Map map4 = list3.get(l);
									
									map4.put("IN_CANCL_DE", 		map.get("CANCL_DE"));//해약일자
									map4.put("IN_UPDUSR_ID", 		map4.get(String.valueOf(ObjectUtil.getSessionObj("S_USER_ID"))));
									
									map4.put("IN_CNTRCTR_NO", 		map4.get("CNTRCTR_NO"));//계약자번호
									map4.put("IN_PAY_NO", 			map4.get("PAY_NO"));//납부번호
									
									map4.put("IN_RENT_BGNDE", 		map4.get("RENT_BGNDE"));//임대시작일자
									map4.put("IN_RENT_ENDDE", 		map4.get("RENT_ENDDE"));//임대종료일자
									map4.put("IN_CNTRCT_DE", 		map4.get("CNTRCT_DE"));//계약일자
									map4.put("IN_LAD_CODE", 		map4.get("LAD_CODE"));//토지코드
									map4.put("IN_PAY_CODE", 		"RN");//납부코드
									map4.put("IN_INSTLMT_SE", 		map4.get("INSTLMT_SE"));//할부구분
									map4.put("IN_LEV_DECSN_NO", 	map4.get("LEV_DECSN_NO"));//징수결의번호
									map4.put("IN_RCIV_DECSN_NO", 	map4.get("RCIV_DECSN_NO"));//수납결의번호
									map4.put("IN_PAYAMT", 			map4.get("PAYAMT_SM").toString());//납부금액
									map4.put("IN_INSTLMT_INTR", 	map4.get("INSTLMT_INTR").toString());//할부이자
									map4.put("IN_RDCAMT_AMOUNT", 	map4.get("CHA_AMT").toString());//감액금액
									map4.put("IN_INSTLMT_INTRT", 	map4.get("INSTLMT_INTRT").toString());//할부이율
									map4.put("IN_MISU_AMT", 		map4.get("UNCLAMT").toString());//미수금액
									
									//5-2. 납부금 처리
									baseDao.update("SLS080202DAO.SPSLS_LAD_RN_AMOUNT_UI", map4);
System.out.println("OUT_RESULT_CD=임대 납부금 처리============================> " + map4.get("OUT_RESULT_CD").toString());									
									if (!"0".equals(map4.get("OUT_RESULT_CD").toString())) {
										throw new NexaServiceException("info.메시지", map4.get("OUT_RESULT_MSG").toString());
									}
									
									
								}
								*/
							}
							
							
						}
						
					}				

					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					break;
		    }
			
		}

		return iRow;
    }
    
    
    //토지코드 입력가능여부
  	@SuppressWarnings("rawtypes")
  	public String selectLadCodeInputYn(Map map) {
  		String inputYn = (String)baseDao.select("SLS080202DAO.selectLadCodeInputYn", map);		
  		
  		return inputYn;
  	}
  	
  	//블럭 롯트 상태체크
  	@SuppressWarnings("rawtypes")
  	public String selectBltYn(Map map) {
  		String bltYn = (String)baseDao.select("SLS080202DAO.selectBltYn", map);		
  		
  		return bltYn;
  	}
  	
  	//소인처리 체크
  	@SuppressWarnings("rawtypes")
  	public String selectPstmrkYn(Map map) {
  		String pstmrkYn = (String)baseDao.select("SLS080202DAO.selectPstmrkYn", map);		
  		
  		return pstmrkYn;
  	}
  	
    //압류여부
  	@SuppressWarnings("rawtypes")
  	public String selectSeizrYn(Map map) {
  		String seizrYn = (String)baseDao.select("SLS080301DAO.selectSeizrYn", map);		
  		
  		return seizrYn;
  	}
  	
  	//대출여부
  	@SuppressWarnings("rawtypes")
  	public String selectLonYn(Map map) {
  		String LonYn = (String)baseDao.select("SLS080301DAO.selectLonYn", map);		
  		
  		return LonYn;
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
			
		baseDao.update("SLS080202DAO.approveU", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		
		outDataset.put("output1", outDsMap);
	}
	
	

    // 결의번호 (원금) 업데이트
    @SuppressWarnings({ "unchecked" })
    
	public int updateExpndtrDecsnNo( DataSetMap tranInfo, Map<String, Object> inVar,
										Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
										Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	int iRow = 0;
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
    	Map map = list.get(0);
    	
    	iRow += baseDao.update("SLS080202DAO.updateExpndtrDecsnNoOnly", map);
    	
    	return iRow;
    }
    
    // 결의번호 (이자) 업데이트
    @SuppressWarnings({ "unchecked" })
    
	public int updateExpndtrDecsnNoIntr( DataSetMap tranInfo, Map<String, Object> inVar,
										Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
										Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	int iRow = 0;
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
    	Map map = list.get(0);
    	
    	iRow += baseDao.update("SLS080202DAO.updateExpndtrDecsnNoIntrOnly", map);
    	
    	return iRow;    	
    }
    
}
