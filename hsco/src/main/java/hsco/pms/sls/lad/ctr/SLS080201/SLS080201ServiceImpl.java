package hsco.pms.sls.lad.ctr.SLS080201;

import java.util.ArrayList;
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
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS080201ServiceImpl.java
 * @Description  	: 
 * @author       	: 최승락
 * @since        	: 2015. 10.06.
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
 *   2015. 10. 06.		  최승락			최초생성
 * </pre>
 */
@Service("SLS080201Service")
public class SLS080201ServiceImpl extends BaseService implements SLS080201Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
		
    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;       

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

		records = (List<Map>)baseDao.list("SLS080201DAO.selectLadLcntrctrList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 토지계약상세 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadLcntrctrInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectLadLcntrctrInfo", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	

	/**
	 * 토지계약상세 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes", "unchecked" })	
	public int saveLadLcntrctrInfo ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null && inDsMap.size() > 0) {	
			inMap = inDsMap.get(0);
		
				
			int rowType = ((Integer) inMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :					
					
					// 계약정보 저장
					String cntrctrNo = selectCntrctrNo(inMap);					
					inMap.put("CNTRCTR_NO", cntrctrNo);	
					
					baseDao.insert("SLS080201DAO.insertLadLcntrctrInfo", inMap);
					
					// 토지상세 정보 수정
					baseDao.update("SLS080201DAO.updateLadDetailInfo", inMap);
					
					// 신규 가상계좌 등록
					Map<String, Object> paramMap = new HashMap<String, Object>();
					
			    	// 부서구분( SL:주택, LN:토지, RN:영구임대 관리비외, MA:영구임대 관리비)
			    	paramMap.put("IN_CRT_DIV", "LN");
					
			    	// 계약자번호
					Object cust_cd = inMap.get("CNTRCTR_NO").toString();
					paramMap.put("IN_CUST_ID", cust_cd);
					
					// 주택(토지)코드
					Object house_code = new String();
					paramMap.put("IN_HOUSE_CODE", house_code);
					
					// 은행코드
					Object bank_cd = new String();
					paramMap.put("IN_BANK_CD", bank_cd);
					
					// 대표계좌여부('1' - 임대료 전용계좌 )
					Object acct_div = "1";
					paramMap.put("IN_ACCT_DIV", acct_div);
					
					// 보증금전용계좌 등록 여부
					Object bj_yn = new String();
					paramMap.put("IN_BJ_YN", bj_yn);
					
			    	// 최초등록자
					Object first_entry = ObjectUtil.getSessionObj("S_USER_ID");
					paramMap.put("IN_FIRST_ENTRY", first_entry);
					
					baseDao.update("COM000000DAO.SP_VA_MAST_U", paramMap);
					
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					// 토지계약상세 수정(토지계약자 정보 수정)
					
					iRow += baseDao.update("SLS080201DAO.updateLadLcntrctrInfo", inMap);
					
					// 토지계약상세 수정(토지고객 정보 수정)
					iRow += baseDao.update("SLS080201DAO.updateLadCstmr", inMap);
					break;
				case DataSet.ROW_TYPE_DELETED :
					break;
			}
		}	
			return iRow;
	}
	
	/**
	 * 토지계약번호 시퀀스 가져오기
	 */
	@SuppressWarnings("rawtypes")
	public String selectCntrctrNo(Map map) {
		String seq = (String)baseDao.select("SLS080201DAO.selectCntrctrNo", map);		
		
		return seq;
	}
		
	/**
	 * 토지상세정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectLadInfo", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	
	/**
	 * 약정사항(tabpage1) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLcntrctrPayList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectLcntrctrPayList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
		

	/**
	 * 공유자(tabpage2) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCstmrConrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectCstmrConrList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	
	/**
	 * 사업자(tabpage3) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLcntrctrBsnmList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectLcntrctrBsnmList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 기타정보(tabpage4) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLcntrctrEtcInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectLcntrctrEtcInfo", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 가상계좌(tabpage5) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectVirtlAcnutList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectVirtlAcnutList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 분양약정 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLcntrctrPayPopList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectLcntrctrPayPopList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 분양약정 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked"})
	public int saveLcntrctrPayPopList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

			// ----------------------------------------------------------------
			// 부가세 계산
			// ----------------------------------------------------------------			
			String instlmtSe = String.valueOf(map.get("INSTLMT_SE"));
											
			String payamt = null;			//납부금액
			String paySuplyAmount = null;	//공급가액
			String payVat = null;			//부가세
			
			if ("3".equals(instlmtSe)) { // 할부 이면 
									
					// 공급가액을 이용하여 부가세 납부금액을 계산한다.
				    /*
					paySuplyAmount = String.valueOf(map.get("PAY_SUPLY_AMOUNT"));									//공급가액 					
					payVat = String.valueOf(((long)(Math.floor((Long.valueOf(paySuplyAmount) * 0.1) * 0.1) * 10)));	//부가세					
					payamt = String.valueOf(Long.valueOf(paySuplyAmount) + Long.valueOf(payVat));					//납부금액					
					
					map.put("PAYAMT", payamt);
					map.put("PAY_VAT", payVat);
					*/
			} else { // 할부 아니고 S1~S9 이면 계산한다.
				
					payVat = selectPayVat(map); //부가세
					paySuplyAmount = String.valueOf(Long.parseLong(String.valueOf(map.get("PAYAMT"))) - Long.parseLong(payVat)); //공급금액
					
					map.put("PAY_SUPLY_AMOUNT", paySuplyAmount);
					map.put("PAY_VAT", payVat);
			}
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :

					// 삭제하세요.
					log.debug("I_instlmtSe : " + instlmtSe);				
					log.debug("I_payamt = " + payamt);					
					log.debug("I_payVat = " + payVat);
					log.debug("I_paySuplyAmount = " + paySuplyAmount);					
										
					// 납부번호 가져오기
					String payNo = getPayNo(map);					
					map.put("PAY_NO", payNo);	
					
					baseDao.insert("SLS080201DAO.insertLcntrctrPayPopList", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					
					// 삭제하세요.
					log.debug("U_instlmtSe : " + instlmtSe);					
					log.debug("U_payamt = " + payamt);					
					log.debug("U_payVat = " + payVat);
					log.debug("U_paySuplyAmount = " + paySuplyAmount);
										
					iRow += baseDao.update("SLS080201DAO.updateLcntrctrPayPopList", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SLS080201DAO.deleteLcntrctrPayPopList", map);
					break;
			}
		}
		return iRow;
	}
	

	/**
	 * 임대약정 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLcntrctrRentPayPopList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectLcntrctrPayPopList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 임대약정 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked"})
	public int saveLcntrctrRentPayPopList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

			// ----------------------------------------------------------------
			// 부가세 계산
			// ----------------------------------------------------------------			
			String paySe = String.valueOf(map.get("PAY_SE"));//납부구분
									
			String payamt = null;			//납부금액
			String paySuplyAmount = null;	//공급가액
			String payVat = null;			//부가세
			
			if ("3".equals(paySe)) { // 할부 이면 
				
					// 공급가액을 이용하여 부가세 납부금액을 계산한다.
					paySuplyAmount = String.valueOf(map.get("PAY_SUPLY_AMOUNT"));									//공급가액 					
					payVat = String.valueOf(((long)(Math.floor((Long.valueOf(paySuplyAmount) * 0.1) * 0.1) * 10)));	//부가세					
					payamt = String.valueOf(Long.valueOf(paySuplyAmount) + Long.valueOf(payVat));					//납부금액					
					
					map.put("PAYAMT", payamt);
					map.put("PAY_VAT", payVat);
					
			} else { // 할부 아니고 R1~R9 , RR 이면 계산하지 않는다.				
					map.put("PAY_SUPLY_AMOUNT", 0);
					map.put("PAY_VAT", 0);
			}
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :

					// 삭제하세요.
//					log.debug("I_instlmtSe : " + instlmtSe);					
//					log.debug("I_payamt = " + payamt);					
//					log.debug("I_payVat = " + payVat);
//					log.debug("I_paySuplyAmount = " + paySuplyAmount);					
										
					// 납부번호 가져오기
					String payNo = getPayNo(map);					
					map.put("PAY_NO", payNo);					
					
					baseDao.insert("SLS080201DAO.insertLcntrctrPayPopList", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					
					// 삭제하세요.
//					log.debug("U_instlmtSe : " + instlmtSe);					
//					log.debug("U_payamt = " + payamt);					
//					log.debug("U_payVat = " + payVat);
//					log.debug("U_paySuplyAmount = " + paySuplyAmount);					
					
					iRow += baseDao.update("SLS080201DAO.updateLcntrctrPayPopList", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SLS080201DAO.deleteLcntrctrPayPopList", map);
					break;
			}
		}
		return iRow;
	}	
		
	
	/**
	 * 납부코드 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadPayCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		// 분양금, 보증금일 경우 S,R 로 조회
		String chrctr_div = (String)inMap.get("CHRCTR_PREPAR_VALUE_1");
		if(chrctr_div != null){
			String[] chrctr_divList = chrctr_div.split(",");
			inMap.put("CHRCTR_PREPAR_VALUE_1", chrctr_divList);
		}

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectLadPayCodeList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 당초금액 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadDetailInfoForBgnnAmount( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectLadDetailInfoForBgnnAmount", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 납부비율 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadPayStdrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectLadPayStdrList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}


	// 부가세 계산
	@SuppressWarnings("rawtypes")
	public String selectPayVat(Map map) {
		String payVat = (String)baseDao.select("SLS080201DAO.selectPayVat", map);		
		
		return payVat;
	}	
	
	/**
	 * 납부번호 앞자리(1자리) 가져오기
	 */
	@SuppressWarnings("rawtypes")
	public String selectPayNumHead(Map map) {
		String payNumHead = (String)baseDao.select("SLS080201DAO.selectPayNumHead", map);

		return payNumHead;
	}

	/**
	 * 납부번호 뒷자리(4자리) 가져오기
	 */
	@SuppressWarnings("rawtypes")
	public String selectPayNumTail(Map map) {
		String payNumTail = (String)baseDao.select("SLS080201DAO.selectPayNumTail", map);

		return payNumTail;
	}
	
	// 납부번호 생성
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public String getPayNo(Map map) {
		
		String payNo = null;
		String instlmtSe = String.valueOf(map.get("INSTLMT_SE"));
		
		if ("2".equals(instlmtSe)) { //분납 납부번호			
			payNo = (String)baseDao.select("SLS080201DAO.selectInspyPayNo", map);			
			
		} else  { //일반 납부번호
			String payNoHead = selectPayNumHead(map);  //납부번호 앞자리(1 자리 : OCR구분)
			map.put("PAY_NO_HEAD", payNoHead);
			
			String payNoTail = selectPayNumTail(map);	//납부번호 뒷자리(4 자리)					
			payNo = payNoHead.concat(payNoTail);		//납부번호 첫자리 + 납부번호 뒷자리
		}

		return payNo;
	}
	
	/**
	 * 분양약정 납부금액계산 및 적용
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLttotInspyIntrInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectLttotInspyIntrInfo", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 임대약정 납부금액계산 및 적용
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRentInspyIntrInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectLttotInspyIntrInfo", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	

	//  저장
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void atchCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		// 파일 첨부확인
		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
/*		System.out.println("fileInfo :" + fileInfo);*/
		Map<String, Object> upResult = null;
		if(fileInfo != null){
		log.info("serivceimple 호출~ = ");	
			NexacroMapDTO xpDto = getXpDto();
			fileUploadService.setFileLocation(getFileLocation());
			upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
		}

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();	
		System.out.println("listSize : " + listSize);
		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			if(upResult != null){
				// 업로드 첨부파일의 수가 1건일 경우 파일 순차번호 포함
				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				String resFileOrdr = String.valueOf(upResult.get("FILE_ORDR"));
				String resFileOrdr2 = String.valueOf(upResult.get("ORGINL_FILE_NM"));
				String resFileOrdr3 = String.valueOf(upResult.get("FILE_NM"));
/*				System.out.println("resFileOrdr2 :" + resFileOrdr2); 
				System.out.println("resFileOrdr3 :" + resFileOrdr3);*/
				//String resFileOrdr = String.valueOf(map.get("FILE_SN"));  // 첨부파일 건수만큼 ORDR 번호생성
/*				map.put("CTRTC_FILE", resFileOrdr);
				map.put("CTRTC_FILE_COURS", resFileSn);*/
				
				map.put("CTRTC_FILE_COURS", resFileSn);
				map.put("FILE_SN", resFileSn);
/*				map.put("CTRTC_FILE", resFileSn);*/
				
			}
				log.info("INSERT호출 = " + map.toString());
				baseDao.insert("SLS080201DAO.updateLadLcntrctrInfo", map);
				log.info("INSERT완료 = " + map.toString());
	}
}	
	
	
    /* 전세임대 계약서 첨부파일 삭제 */
    @SuppressWarnings({"rawtypes"})
    public void atchDelete(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
		if (inDsMap != null){
				Map map = inDsMap.get(0);  
				String inFileSn = (String)map.get("CTRTC_FILE_COURS");	// 파일일련번호
				
					// 첨부파일 삭제
					baseDao.insert("SLS080201DAO.updateLadLcntrctrInfo", map);
					
					// 컬럼 수정 후 - 파일일련번호, 파일순차번호
					boolean hasAtchFile = StringUtil.isNull(inFileSn) ? false : true;
					if(hasAtchFile){
						NexacroMapDTO xpDto = getXpDto();
						Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
						
						log.info("첨부파일 삭제 결과 = " + delResult.toString());
					}
		}else{
			// 삭제할 데이터가 없습니다.
			throw new NexaServiceException("info.삭제.데이터.없음");
		}
    }		
    
    
    /* 기타정보 등록 */
    	
	@SuppressWarnings({ "rawtypes", "unchecked" })	
	public int saveEtcInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;
		
		log.debug("inDsMap.size()-----------------------------------" + inDsMap.size());
		
		if (inDsMap != null && inDsMap.size() > 0) {	
			inMap = inDsMap.get(0);
			log.debug("1-----------------------------------" );
			int rowType = ((Integer) inMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			log.debug("rowType-----------------------------------" +rowType);
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :		
					log.debug("2----------ROW_TYPE_INSERTED------------------------" );
					// 최초등록자
					Object first_entry = ObjectUtil.getSessionObj("S_USER_ID");
					inMap.put("IN_FIRST_ENTRY", first_entry);
					
					// 기타정보 등록
					baseDao.insert("SLS080201DAO.insertEtcInfo", inMap);
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					log.debug("2----------ROW_TYPE_UPDATED------------------------" );
					// 기타정보 수정
					iRow += baseDao.update("SLS080201DAO.updateEtcInfo", inMap);
					break;
				case DataSet.ROW_TYPE_DELETED :
					break;
			}
		}	
	return iRow;
    }
    
	/**
	 * 공유자 저장 ( 수정 )
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int saveCocnr( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int inRow = 0; 
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
			DataSetMap outDsMap = new DataSetMap();		
			List <Map> records;
			String lad_cstr_no_cocnr = (String)inMap.get("LAD_CSTMR_NO_COCNR");	// 토지고객번호_공유자
			
			// 토지고객번호_공유자 여부
			boolean isUpdate1 = StringUtil.isNull(lad_cstr_no_cocnr) ? false : true;
			
			System.out.println("isUpdate1 : " + isUpdate1);
			 
			if(isUpdate1){
				System.out.println("isUpdate2 : " + isUpdate1);
				inMap.put("LAD_CSTMR_NO", lad_cstr_no_cocnr);
				inRow += baseDao.update("SLS080201DAO.saveCocnr", inMap);
				inRow += baseDao.update("SLS080201DAO.saveCocnr2", inMap);
			}else{
				System.out.println("isUpdate3 : " + isUpdate1);
				String ihidnum = (String)inMap.get("IHIDNUM");	// 토지고객번호_공유자 주민번호
				String CSTMRNM = (String)inMap.get("CSTMR_NM");	// 토지고객번호_공유자 주민번호
				if(ihidnum != null){
					System.out.println("ihidnum4 : " + ihidnum);
					System.out.println("CSTMR_NM : " +  CSTMRNM );

					//TODO : 주민번호로 토지고객원장을 찾아서 LAD_CSTMR_NO 를 가져온다
					records = (List<Map>)baseDao.list("LadCstmrDAO.selectLadCstmrbyIhidnum", inMap);
					
					if(records.size() > 0){
						System.out.println("records5 : " + records.size());
						Map map2 = records.get(0);
						
						String lad_cstmr_no = String.valueOf(map2.get("LAD_CSTMR_NO"));
						inMap.put("LAD_CSTMR_NO_COCNR", lad_cstmr_no);
						//만약, 주민번호가 있다면... 토지고객번호를 가지고 와서 inMap의 컬럼 LAD_CSTMR_NO_COCNR 에 넣어준다.
						String cocnr_sn = (String)inMap.get("COCNR_SN");	
						if(cocnr_sn != null){
							inRow += baseDao.update("SLS080201DAO.saveCocnr", inMap);
						}else{
							baseDao.insert("LadCstmrDAO.insertLcntrctrCocnr", inMap);
						}

			
					}else{
						System.out.println("records6");
						//만약, 없다면 insertLadCstmr 고객원장에 insert 치고 
						baseDao.insert("LadCstmrDAO.insertLadCstmr", inMap);
						//insert 쳐진 토지고객번호를 가지고 와서 inMap의 컬럼 LAD_CSTMR_NO_COCNR 에 넣어준다.
						String max_cstmr_no = (String)baseDao.select("SLS080201DAO.selectMaxCstmrNo", inMap);
						inMap.put("LAD_CSTMR_NO_COCNR", max_cstmr_no);
						
						String cocnr_sn = (String)inMap.get("COCNR_SN");	
						if(cocnr_sn != null){
							inRow += baseDao.update("SLS080201DAO.saveCocnr", inMap);
						}else{
							baseDao.insert("LadCstmrDAO.insertLcntrctrCocnr", inMap);
						}
					}
				}
			}

			return inRow;
	}
	
	
	/**
	 * 매도자 저장 ( 수정 )
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int saveCocnrSler( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int inRow = 0; 
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
			DataSetMap outDsMap = new DataSetMap();		
			List <Map> records;
			String lad_cstr_no_sler = (String)inMap.get("LAD_CSTMR_NO_SLER");	// 토지고객번호_매도자
			
			// 토지고객번호_매도자 여부
			boolean isUpdate2 = StringUtil.isNull(lad_cstr_no_sler) ? false : true;
			
			if(isUpdate2){
				inMap.put("LAD_CSTMR_NO", lad_cstr_no_sler);
				inRow += baseDao.update("SLS080201DAO.saveCocnrSler", inMap);
				inRow += baseDao.update("SLS080201DAO.saveCocnrSler2", inMap);
			}else{
				String sler_ihidnum = (String)inMap.get("SLER_IHIDNUM");	// 토지고객번호_공유자 주민번호
				if(sler_ihidnum != null){
					//TODO : 주민번호로 토지고객원장을 찾아서 LAD_CSTMR_NO 를 가져온다
					inMap.put("IHIDNUM", sler_ihidnum);
					records = (List<Map>)baseDao.list("LadCstmrDAO.selectLadCstmrbyIhidnum", inMap);
					
					if(records.size() > 0){
						Map map2 = records.get(0);
						
						String lad_cstmr_no = String.valueOf(map2.get("LAD_CSTMR_NO"));
						inMap.put("LAD_CSTMR_NO_SLER", lad_cstmr_no);
						
						//만약, 주민번호가 있다면... 토지고객번호를 가지고 와서 inMap의 컬럼 LAD_CSTMR_NO_SLER 에 넣어준다.
						
						String cocnr_sn = (String)inMap.get("COCNR_SN");	
						if(cocnr_sn != null){
							inRow += baseDao.update("SLS080201DAO.saveCocnrSler", inMap);
						}else{
							//Cocnr_sn 을 가져온다
							cocnr_sn = (String)baseDao.select("SLS080201DAO.selectMaxCocnrSnNo", inMap);
							
							inMap.put("COCNR_SN", cocnr_sn);
							inRow += baseDao.update("SLS080201DAO.saveCocnrSler", inMap);
							//baseDao.insert("LadCstmrDAO.insertLcntrctrCocnr", inMap);
						}
			
					}else{
						//만약, 없다면 insertLadCstmr 고객원장에 insert 치고 
						inMap.put("CSTMR_NM", inMap.get("SLER_NM"));
						inMap.put("ZIP", inMap.get("SLER_ZIP"));
						inMap.put("ADRES", inMap.get("SLER_ADRES"));
						inMap.put("ADRES_DETAIL", inMap.get("SLER_ADRES_DETAIL"));
						inMap.put("TELNO", inMap.get("SLER_TELNO"));
						inMap.put("MBTLNO", inMap.get("SLER_MBTLNO"));
						inMap.put("EMAIL", inMap.get("SLER_EMAIL"));
						
						baseDao.insert("LadCstmrDAO.insertLadCstmr", inMap);
						//insert 쳐진 토지고객번호를 가지고 와서 inMap의 컬럼 LAD_CSTMR_NO_SLER 에 넣어준다.
						String max_cstmr_no = (String)baseDao.select("SLS080201DAO.selectMaxCstmrNo", inMap);
						inMap.put("LAD_CSTMR_NO_SLER", max_cstmr_no);
						
						
						String cocnr_sn = (String)inMap.get("COCNR_SN");	
						if(cocnr_sn != null){
							inRow += baseDao.update("SLS080201DAO.saveCocnrSler", inMap);
						}else{
							//Cocnr_sn 을 가져온다
							cocnr_sn = (String)baseDao.select("SLS080201DAO.selectMaxCocnrSnNo", inMap);
							
							inMap.put("COCNR_SN", cocnr_sn);
							inRow += baseDao.update("SLS080201DAO.saveCocnrSler", inMap);
							//baseDao.insert("LadCstmrDAO.insertLcntrctrCocnr", inMap);
						}
					}
				}
			}
			
			return inRow;
	}
	
	
	
	
	
	
	/**
	 * 공유자/매도자 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked"})
	public int removeCocnr( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		iRow = baseDao.delete("SLS080201DAO.removeCocnr", inMap);
		
		return iRow;
	}
	
	
	
	/**
	 * 토지계약자압류 단건 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLcntrctrSeizr( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectLcntrctrSeizr", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 토지계약자대출 단건 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLcntrctrLon( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080201DAO.selectLcntrctrLon", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	
  
    
    /**
	 * 토지계약자압류 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes", "unchecked" })	
	public int saveLcntrctrSeizrList ( DataSetMap tranInfo, Map<String, Object> inVar,
									 Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									 Map<String, DataSetMap> outDataset) throws NexaServiceException {
		    	
		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list==null) ? 0 : list.size(); 
		log.debug("========== listSize =========================> "+listSize);
		
		for (int i = 0; i < listSize; i++) {
				
			Map map = list.get(i);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch(rowType) {
			
				case DataSet.ROW_TYPE_INSERTED :
					
					//토지계약자압류 저장
					baseDao.insert("SLS080401DAO.insertLcntrctrSeizr", map);
					
					String seizr_sn = (String) baseDao.select("SLS080201DAO.selectMaxSeizrSn", map);
					
					map.put("SEIZR_SN", seizr_sn);
					
					List<Map> outList = new ArrayList<Map>(); 
					outList.add(map);

					DataSetMap outMap = new DataSetMap();
					outMap.setRowMaps(outList);
					outDataset.put("output1", outMap);
					
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
	
					iRow += baseDao.update("SLS080401DAO.updateLcntrctrSeizr", map);
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					
					iRow += baseDao.delete("SLS080401DAO.deleteLcntrctrSeizr", map);
					
					break;
		    }
			
		}

		return iRow;
	}
	
	
	
	/**
	 * 토지계약자대출 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes", "unchecked" })	
	public int saveLcntrctrLonList ( DataSetMap tranInfo, Map<String, Object> inVar,
									 Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									 Map<String, DataSetMap> outDataset) throws NexaServiceException {
		    	
		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list==null) ? 0 : list.size(); 
		log.debug("========== listSize =========================> "+listSize);
		
		for (int i = 0; i < listSize; i++) {
				
			Map map = list.get(i);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch(rowType) {
			
				case DataSet.ROW_TYPE_INSERTED :
					
					//토지계약자대출 저장
					baseDao.insert("SLS080401DAO.insertLcntrctrLon", map);
					
					String lon_sn = (String) baseDao.select("SLS080201DAO.selectMaxLonSn", map);
					
					map.put("LON_SN", lon_sn);
					
					List<Map> outList = new ArrayList<Map>(); 
					outList.add(map);

					DataSetMap outMap = new DataSetMap();
					outMap.setRowMaps(outList);
					outDataset.put("output1", outMap);
					
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
	
					iRow += baseDao.update("SLS080401DAO.updateLcntrctrLon", map);
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					
					iRow += baseDao.delete("SLS080401DAO.deleteLcntrctrLon", map);

					break;
		    }
			
		}

		return iRow;
	}
	
	
	/**
	 * 압류 첨부파일 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({"rawtypes"})
    public void atchSeizeDelete(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Object seizrSn = null;  // 압류일련번호
		
		if (list != null){
			Map<String, Object> inMap = list.get(0);
			
			for (int x = 0; x < list.size(); x++) {
					
				Map<String, Object> map = list.get(x);
				
				String inFileSn = (String)map.get("FILE_SN");	// 파일일련번호
				seizrSn = (String)map.get("SEIZR_SN");	       
					// 컬럼 수정 후 - 파일일련번호, 파일순차번호
					boolean hasAtchFile = StringUtil.isNull(inFileSn) ? false : true;
					if(hasAtchFile){
						NexacroMapDTO xpDto = getXpDto();
						Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
													
						log.info("첨부파일 삭제 결과 = " + delResult.toString());
					}
				}
			
			// 상세 목록카은트
			// 공통첨부 디테일 조회후 파일이 존재 하지 않으면 계약관리 테이블 file_sn 값을 null로 변경
			int fileCnt = (Integer)baseDao.select("RNT030301DAO.FILECNT", inMap);
			if(fileCnt == 0)
			{
				// 계약관리 FILE_SN NULL로 업데이트
				baseDao.delete("SLS080201DAO.atchSeizrDelete", inMap);

			}				

			}else{
				// 삭제할 데이터가 없습니다.
				throw new NexaServiceException("info.삭제.데이터.없음");
			}
    }
    
    
    
    /**
	 * 대출 첨부파일 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({"rawtypes"})
    public void atchLonDelete(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
    	Object lonSn = null;    // 대출일련번호 
		
		if (list != null){
			Map<String, Object> inMap = list.get(0);
			
			for (int x = 0; x < list.size(); x++) {
					
				Map<String, Object> map = list.get(x);
				
				String inFileSn = (String)map.get("FILE_SN");	// 파일일련번호
				lonSn = (String)map.get("LON_SN");           	
					// 컬럼 수정 후 - 파일일련번호, 파일순차번호
					boolean hasAtchFile = StringUtil.isNull(inFileSn) ? false : true;
					if(hasAtchFile){
						NexacroMapDTO xpDto = getXpDto();
						Map<String, Object> delResult = fileUploadService.deleteFileInfo(xpDto);
													
						log.info("첨부파일 삭제 결과 = " + delResult.toString());
					}
				}
			
			// 상세 목록카은트
			// 공통첨부 디테일 조회후 파일이 존재 하지 않으면 계약관리 테이블 file_sn 값을 null로 변경
			int fileCnt = (Integer)baseDao.select("RNT030301DAO.FILECNT", inMap);
			if(fileCnt == 0)
			{
				// 계약관리 FILE_SN NULL로 업데이트
				baseDao.delete("SLS080201DAO.atchLonDelete", inMap);
			}				

			}else{
				// 삭제할 데이터가 없습니다.
				throw new NexaServiceException("info.삭제.데이터.없음");
			}
    }
    
    
    
    
    /**
     * 압류 상세정보 첨부파일 정보 수정(삭제)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void atchSeizeCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		Map targetMap = targetInfo.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
		Map fileInfoMap = fileInfo.get(0);  // 파일업로드 할 데이터 셋    
			
    	Object fileSn = targetMap.get("FILE_SN");
    	Object seizrSn = targetMap.get("SEIZR_SN");

    	Map<String, Object> upResult = null;  
    	if(fileInfo != null){
    		
    		// 계약관리테이블에 file_sn이 존재시 , inputFile 데이터셋에 file_sn을 설정
    		// file_sn 없으면 새로 생성
    		if(fileSn != null){			
    			fileInfoMap.put("FILE_SN" , fileSn);
    		}
	    		NexacroMapDTO xpDto = getXpDto();
	    		fileUploadService.setFileLocation(getFileLocation());
	    		upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
    	}    	
    	
		List<Map> failList = new ArrayList<Map>(); 
		
		try
		{
			if(upResult != null){				
				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				if(seizrSn != null){
					baseDao.insert("SLS080201DAO.atchSeizrCUD", targetMap);
				}
			}

		}
		catch(Exception ex)
		{
			if(ex.getMessage().indexOf("ORA-00001") != -1){
				targetMap.put("EX_COUSE", "중복");
			}else{
				targetMap.put("EX_COUSE", ex.getMessage());
			}
			
			failList.add(targetMap);
		}		
    	
		DataSetMap failMap = new DataSetMap();
		failMap.setRowMaps(failList);
		outDataset.put("failList", failMap);
    }
	
    
    
    /**
     * 대출 상세정보 첨부파일 정보 수정(삭제)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void atchLonCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		Map targetMap = targetInfo.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
		Map fileInfoMap = fileInfo.get(0);  // 파일업로드 할 데이터 셋    
			
    	Object fileSn = targetMap.get("FILE_SN");
    	Object lonSn = targetMap.get("LON_SN");
    	
    	Map<String, Object> upResult = null;  
    	if(fileInfo != null){
    		
    		// 계약관리테이블에 file_sn이 존재시 , inputFile 데이터셋에 file_sn을 설정
    		// file_sn 없으면 새로 생성
    		if(fileSn != null){			
    			fileInfoMap.put("FILE_SN" , fileSn);
    		}
	    		NexacroMapDTO xpDto = getXpDto();
	    		fileUploadService.setFileLocation(getFileLocation());
	    		upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
    	}    	
    	
		List<Map> failList = new ArrayList<Map>(); 
		
		try
		{
			if(upResult != null){				
				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				
				baseDao.insert("SLS080201DAO.atchLonCUD", targetMap);
			}

		}
		catch(Exception ex)
		{
			if(ex.getMessage().indexOf("ORA-00001") != -1){
				targetMap.put("EX_COUSE", "중복");
			}else{
				targetMap.put("EX_COUSE", ex.getMessage());
			}
			
			failList.add(targetMap);
		}		
    	
		DataSetMap failMap = new DataSetMap();
		failMap.setRowMaps(failList);
		outDataset.put("failList", failMap);
    }
}
