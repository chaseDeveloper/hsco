package hsco.pms.sls.lad.ctr.SLS080304;

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

@Service("SLS080304Service")
public class SLS080304ServiceImpl extends BaseService implements SLS080304Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    /**
	 * 토지계약자 계약목록 조회
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

		records = (List<Map>)baseDao.list("SLS080304DAO.selectLadLcntrctrList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 토지계약자 재계약목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLcntrctrReCntrctList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS080304DAO.selectLcntrctrReCntrctList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	// 토지계약자 재계약목록 저장
		
	@SuppressWarnings({ "rawtypes", "unchecked" })	
	public int saveLcntrctrReCntrctList ( DataSetMap tranInfo, Map<String, Object> inVar,
									 Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									 Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");//재계약정보
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");//납부정보

		int listSize = (list==null) ? 0 : list.size();
		int listSize2 = (list2==null) ? 0 : list2.size(); 
		log.debug("========== listSize =========================> "+listSize);
		
		String reCntrctSn = "0";
		
		for (int i = 0; i < listSize; i++) {
				
			Map map = list.get(i);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch(rowType) {
			
				case DataSet.ROW_TYPE_INSERTED :
					//1. 압류,대출이 있는지 확인
					String seizrYn = selectSeizrYn(map);
					System.out.println("해약시 압류,대출이 있는지 확인==seizrYn====================================> " + seizrYn);
					
					String lonYn = selectLonYn(map);
					System.out.println("해약시 압류,대출이 있는지 확인==lonYn====================================> " + lonYn);
					
					if( "Y".equals(seizrYn) ){
						throw new NexaServiceException("info.메시지", "해당 토지에 압류정보가 있어 재계약이 불가능합니다.");
					}
					else if( "Y".equals(lonYn) ){
						throw new NexaServiceException("info.메시지", "해당 토지에 대출정보가 있어 재계약이 불가능합니다.");
					}
					else{
						
						// 재계약차수  가져오기
						reCntrctSn = selectReCntrctSn(map);
						map.put("RE_CNTRCT_SN", reCntrctSn);
						
						//토지계약자 재계약저장
						baseDao.insert("SLS080304DAO.insertLcntrctrReCntrctList", map);
						//토지계약자 임대기간 수정
						iRow += baseDao.update("SLS080304DAO.updateLcntrctrRentDe", map);
					}

					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					// 승인여부 확인
					String confmAt = selectConfmAt(map);
					log.debug("승인여부==confmAt====================================> " + confmAt);
					if( "Y".equals(confmAt) ){
						throw new NexaServiceException("info.메시지", "승인된 재계약건은 수정이 불가능합니다.");
					}					
					else{
						
						// 재계약차수  가져오기
						reCntrctSn = map.get("RE_CNTRCT_SN").toString();
						
						iRow += baseDao.update("SLS080304DAO.updateLcntrctrReCntrctList", map);
						//토지계약자 임대기간 수정
						baseDao.update("SLS080304DAO.updateLcntrctrRentDe", map);
					}
					
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					// 승인여부 확인
					String confmAt2 = selectConfmAt(map);
					log.debug("승인여부==confmAt2====================================> " + confmAt2);
					
					if( "Y".equals(confmAt2) ){
						throw new NexaServiceException("info.메시지", "승인된 재계약건은 삭제가 불가능합니다.");
					}					
					else{
						//0.재계약 삭제
						iRow += baseDao.delete("SLS080304DAO.deleteLcntrctrReCntrctList", map);
						
						//1.삭제이전 임대기간을 구함
						String maxRentDe = selectMaxRentDe(map);
						System.out.println("삭제이전 임대기간을 구함==maxRentDe====================================> " + maxRentDe);
						if("/".equals(maxRentDe)){
							map.put("RENT_BGNDE", null);
							map.put("RENT_ENDDE", null);
						}
						else{
							String[] RENT_DE = maxRentDe.split("/");
							map.put("RENT_BGNDE", RENT_DE[0]);
							map.put("RENT_ENDDE", RENT_DE[1]);
						}
						
						//2.토지계약자 임대기간 수정
						baseDao.update("SLS080304DAO.updateLcntrctrRentDe", map);
						
						//3.임대료 납부정보 삭제
						iRow += baseDao.delete("SLS080304DAO.deleteAllLcntrctrPayList", map);
					}
					
					break;
		    }
			
		}
		
		//임대료 납부정보		
		for (int x = 0; x < listSize2; x++) {
			
			Map map2 = list2.get(x);
			
			int rowType = ((Integer) map2.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

			// ----------------------------------------------------------------
			// 부가세 계산
			// ----------------------------------------------------------------			
			String paySe = String.valueOf(map2.get("PAY_SE"));//납부구분
									
			String payamt = null;			//납부금액
			String paySuplyAmount = null;	//공급가액
			String payVat = null;			//부가세
			
			if ("3".equals(paySe)) { // 할부 이면 
				
					// 공급가액을 이용하여 부가세 납부금액을 계산한다.
					paySuplyAmount = String.valueOf(map2.get("PAY_SUPLY_AMOUNT"));									//공급가액 					
					payVat = String.valueOf(((long)(Math.floor((Long.valueOf(paySuplyAmount) * 0.1) * 0.1) * 10)));	//부가세					
					payamt = String.valueOf(Long.valueOf(paySuplyAmount) + Long.valueOf(payVat));					//납부금액					
					
					map2.put("PAYAMT", payamt);
					map2.put("PAY_VAT", payVat);
					
			} 
			else { // 할부 아니고 R1~R9 , RR 이면 계산하지 않는다.				
					map2.put("PAY_SUPLY_AMOUNT", 0);
					map2.put("PAY_VAT", 0);
			}
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
										
					// 납부번호 가져오기
					String payNo = getPayNo(map2);					
					map2.put("PAY_NO", payNo);					
					
					// 재계약차수
					map2.put("RENT_ODR", reCntrctSn);
System.out.println("재계약차수==reCntrctSn====================================> " + reCntrctSn);					
					baseDao.insert("SLS080201DAO.insertLcntrctrPayPopList", map2);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					
					iRow += baseDao.update("SLS080201DAO.updateLcntrctrPayPopList", map2);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SLS080201DAO.deleteLcntrctrPayPopList", map2);
					break;
			}
		}

		return iRow;
	}
	
	
	//승인여부
	@SuppressWarnings("rawtypes")
	public String selectConfmAt(Map map) {
		String confmAt = (String)baseDao.select("SLS080304DAO.selectConfmAt", map);		
		
		return confmAt;
	}
	
	//토지계약자 최근임대기간
	@SuppressWarnings("rawtypes")
	public String selectMaxRentDe(Map map) {
		String maxRentDe = (String)baseDao.select("SLS080304DAO.selectMaxRentDe", map);		
		
		return maxRentDe;
	}
	
	//재계약차수  가져오기
	@SuppressWarnings("rawtypes")
	public String selectReCntrctSn(Map map) {
		String reCntrctSn = (String)baseDao.select("SLS080304DAO.selectReCntrctSn", map);		
		
		return reCntrctSn;
	}
	
	//============================================================================================
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
	
	//============================================================================================
	// 납부번호 생성
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public String getPayNo(Map map) {
		
		String payNo = null;
		String instlmtSe = String.valueOf(map.get("INSTLMT_SE"));
		
		if ("2".equals(instlmtSe)) { //분납 납부번호			
			payNo = (String)baseDao.select("SLS080201DAO.selectInspyPayNo", map);			
			
		} 
		else  { //일반 납부번호
			String payNoHead = selectPayNumHead(map);  //납부번호 앞자리(1 자리 : OCR구분)
			map.put("PAY_NO_HEAD", payNoHead);
			String payNoTail = selectPayNumTail(map);	//납부번호 뒷자리(4 자리)
			payNo = payNoHead.concat(payNoTail);		//납부번호 첫자리 + 납부번호 뒷자리
		}

		return payNo;
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
	
	
}
