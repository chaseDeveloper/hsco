package hsco.pms.sls.lad.rci.SLS100201;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.hamcrest.core.IsEqual;
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


@Service("SLS100201Service")
public class SLS100201ServiceImpl extends BaseService implements SLS100201Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
		
	/**
	 * 영수필통지서입력 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadRcivPstmrkList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		// --------------------------------------------------------------------------		
		// 토지수납소인 자료생성 프로시저 호출
		// --------------------------------------------------------------------------		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		
    	// 최초등록자
		Object first_entry = ObjectUtil.getSessionObj("S_USER_ID");
		paramMap.put("IN_FIRST_ENTRY", first_entry);		
		
		baseDao.update("SLS100201DAO.SPSLS_LAD_RCIV_PSTMRK_I", paramMap);
		
		if (!"0".equals(paramMap.get("OUT_RESULT_CD").toString())) {
			throw new NexaServiceException(paramMap.get("OUT_RESULT_MSG").toString());
		}
		
		// --------------------------------------------------------------------------
		// -- 조회
		// --------------------------------------------------------------------------		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS100201DAO.selectLadRcivPstmrkList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 영수필통지서입력 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked"})	
	public int saveLadRcivPstmrkList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();		
		
		for (int x = 0; x < size; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			System.out.println("저장시작!");
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :

					if ("T".equals(map.get("PAY_CODE").toString().substring(0,1))) {
						// 기타납부번호 가져오기
						String ectPayNo = getEtcPayNo(map);
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
					
					baseDao.insert("SLS100201DAO.insertLadRcivPstmrkList", map);
					
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.delete("SLS100201DAO.deleteLadRcivFalt", map);       // 토지수납과오 삭제
					iRow += baseDao.delete("SLS100201DAO.deleteLadRcivPstmrkList", map); //영수필통지서입력 삭제					
					baseDao.insert("SLS100201DAO.insertLadRcivPstmrkList", map);	
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SLS100201DAO.deleteLadRcivFalt", map);       // 토지수납과오 삭제
					iRow += baseDao.delete("SLS100201DAO.deleteLadRcivPstmrkList", map); //영수필통지서입력 삭제
					break;
			}	
		}		
		return iRow;
	}
	
	// 계약자번호 가져오기
	@SuppressWarnings("rawtypes")
	public String getCntrctrNno(Map map) {		
		String cntrctrNno = (String)baseDao.select("SLS100201DAO.selectCntrctrNo", map);			
		return cntrctrNno;
	}
	
	// 해약자번호 가져오기
	@SuppressWarnings("rawtypes")
	public String getCanclCntrctrNno(Map map) {
		String canclCntrctrNno = (String)baseDao.select("SLS100201DAO.selectCanclCntrctrNo", map);			
		return canclCntrctrNno;		
	}
	
	// 토지계약자납부 - 납부번호
	@SuppressWarnings("rawtypes")
	public String getPayNo (Map map) {
		String payNo = (String)baseDao.select("SLS100201DAO.selectPayNo", map);
		return payNo;
	}
	
	// 기타수입납부 -납부번호
	@SuppressWarnings("rawtypes")
	public String getEtcPayNo (Map map) {		
		String etcPayNo = (String)baseDao.select("SLS100201DAO.selectEtcPayNo", map);
		return etcPayNo;
	}
	
	
	/**
	 * 수납처리 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadRcivList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
						
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		// --------------------------------------------------------------------------		
		// 토지수납소인 상태처리 프로시저 호출
		// --------------------------------------------------------------------------		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		
    	// 수납일자
		Object rcivDe1 = inMap.get("RCIV_DE1");
		Object rcivDe2 = inMap.get("RCIV_DE2");
		paramMap.put("IN_RCIV_DE1", rcivDe1);		
		paramMap.put("IN_RCIV_DE2", rcivDe2);
		
		baseDao.update("SLS100201DAO.SPSLS_LAD_RCIV_PSTMRK_I", paramMap);		
		baseDao.update("SLS100201DAO.SPSLS_LAD_RCIV_PSTMRK_U", paramMap);
		
		if (!"0".equals(paramMap.get("OUT_RESULT_CD").toString())) {
			throw new NexaServiceException(paramMap.get("OUT_RESULT_MSG").toString());
		}
		
		// --------------------------------------------------------------------------
		// -- 조회
		// --------------------------------------------------------------------------
		List <Map> records;

		records = (List<Map>)baseDao.list("SLS100201DAO.selectLadRcivList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 수납소인처리 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes"})
	public int saveLadRcivList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;

		// 소인처리, 소인취소 목록
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		// 작업구분
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input2");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
				
		
		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
			
			Map map = list.get(x);
			
			
			// 자료의 상태가 기타면 소인처리 하지 않음 
			if ("3".equals(map.get("PROCESS_STTUS_SE").toString())) {
				continue;
			}
			
			// --------------------------------------------------------------------------		
			// 토지수납소인 상태처리 프로시저 호출
			// --------------------------------------------------------------------------		
			Map<String, Object> paramMap = new HashMap<String, Object>();
			
			// 처리구분				
			Object inSe = String.valueOf(inMap.get("SE"));
			paramMap.put("IN_SE", inSe);
			
			// 수납일자1
			Object inRcivDe = String.valueOf(map.get("RCIV_DE"));
			paramMap.put("IN_RCIV_DE", inRcivDe);	
			
			// 계약자번호
			Object inCntrctrNo = String.valueOf(map.get("CNTRCTR_NO"));
			paramMap.put("IN_CNTRCTR_NO", inCntrctrNo);
			
			// 납부코드
			Object inPayCode = String.valueOf(map.get("PAY_CODE"));
			paramMap.put("IN_PAY_CODE", inPayCode);
			
			// 납부번호
			Object inPayNo = String.valueOf(map.get("PAY_NO"));
			paramMap.put("IN_PAY_NO", inPayNo);
			
			// 납부일련번호
			Object inRcivSn = String.valueOf(map.get("RCIV_SN"));
			paramMap.put("IN_RCIV_SN", inRcivSn);
			
			// 납부방법 
			Object inPaymthd = String.valueOf(map.get("PAYMTHD"));
			paramMap.put("IN_PAYMTHD", inPaymthd);
			
			// 은행코드
			Object inBankCode = String.valueOf(map.get("BANK_CODE"));
			paramMap.put("IN_BANK_CODE", inBankCode);
			
			// OCR번호
			Object inOcrNo = String.valueOf(map.get("OCR_NO"));
			paramMap.put("IN_OCR_NO", inOcrNo);
			
			// 수납금액
			Object inRcivAmount = String.valueOf(map.get("RCIV_AMOUNT"));
			paramMap.put("IN_RCIV_AMOUNT", inRcivAmount);
			
			// 납부기한일
			Object inPayTmlmt = String.valueOf(map.get("PAY_TMLMT"));
			paramMap.put("IN_PAY_TMLMT", inPayTmlmt);
			
			// 토지코드
			Object inLadCode = String.valueOf(map.get("LAD_CODE"));
			paramMap.put("IN_LAD_CODE", inLadCode);
			
			// 블록
			Object inBlck = String.valueOf(map.get("BLCK"));
			paramMap.put("IN_BLCK", inBlck);
			
			// 롯트
			Object inLot = String.valueOf(map.get("LOT"));
			paramMap.put("IN_LOT", inLot);
			
			// 롯트타입
			Object inLotTy = String.valueOf(map.get("LOT_TY"));
			paramMap.put("IN_LOT_TY", inLotTy);
			
			// 처리자ID
			Object inOpetrId = String.valueOf(ObjectUtil.getSessionObj("S_USER_ID"));
			paramMap.put("IN_OPETR_ID", inOpetrId);
			
			// 처리상태구분
			Object inProcessSttusSe = String.valueOf(map.get("PROCESS_STTUS_SE"));
			paramMap.put("IN_PROCESS_STTUS_SE", inProcessSttusSe);

			Object dept_Code = String.valueOf(inMap.get("DEPT_CODE"));
			paramMap.put("IN_DEPT_CODE", dept_Code);			
			
			iRow += baseDao.update("SLS100201DAO.SPSLS_LAD_RCIV_UI", paramMap);
			
			if ("-1".equals(paramMap.get("OUT_RESULT_CD").toString())) {
				throw new NexaServiceException(paramMap.get("OUT_RESULT_MSG").toString());
			}			

		}	
		return iRow;
	}
	
	
	/**
	 * 과오납 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadRcivFaltList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
						
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;
		records = (List<Map>)baseDao.list("SLS100201DAO.selectLadRcivFaltList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 과오납 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes"})
	public int saveLadRcivFaltList ( DataSetMap tranInfo, Map<String, Object> inVar,
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
					iRow += baseDao.update("SLS100201DAO.updateLadRcivFaltList", map);					
					break;
				case DataSet.ROW_TYPE_DELETED :
					break;					
			}
		}	
		return iRow;
	}
	
}
