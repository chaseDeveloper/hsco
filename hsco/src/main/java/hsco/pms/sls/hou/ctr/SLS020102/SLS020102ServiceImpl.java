package hsco.pms.sls.hou.ctr.SLS020102;

import java.text.ParseException;
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
import hsco.cmm.util.DateUtil;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS020102ServiceImpl.java
 * @Description  	: 주택계약 해약처리(분양) 관리 ServiceImpl
 * @author       	: 정윤원
 * @since        	: 2015. 10.26.
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
 *  
 * </pre>
 */
@Service("SLS020102Service")
public class SLS020102ServiceImpl extends BaseService implements SLS020102Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());	

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

	
    /**
	 * 주택계약자 해약 리스트 조회(공통)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHouseCancelList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020102DAO.selectHouseCancelList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 주택분양 해약 리스트 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHouseLttotCancelList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020102DAO.selectHouseLttotCancelList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 주택계약 해약 리스트 조회(임대)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHouseRentCancelList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020102DAO.selectHouseRentCancelList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 주택계약자 압류정보 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHcntrctrSeizrInfo(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020102DAO.selectHcntrctrSeizrInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 주택분양 이율정보조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectLttotRatioInfo(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020102DAO.selectLttotRatioInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 주택임대 이율정보조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectRentRatioInfo(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020102DAO.selectRentRatioInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	
	/**
	 * 주택계약 해약(분양) 반환금 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHouseLttotCancelReturnAmtList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020102DAO.selectHouseLttotCancelReturnAmtList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 주택 계약자 해약정보(분양) 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes"  })	
	public int saveHouseCancelInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list  = (DataSetMap) inDataset.get("input1"); //주택계약자해약
		DataSetMap list2 = (DataSetMap) inDataset.get("input2"); //주택분양해약


		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {

			Map map  = list.get(x);  //주택계약 해약정보
			Map map2 = list2.get(x);  //주택 분양 해약정보
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :
				
				//(1)해약정보 등록
				baseDao.insert("SLS020102DAO.insertHouseCancelInfo"          , map);  //입력
				
				//(1-1) 주택 분양 해약정보 등록
				baseDao.insert("SLS020102DAO.insertHouseLttotCancelInfo"      , map2);  //입력
				
				//(2)납부정보 해약 수정- 해지가 발생하며 입금되지 않은 납부정보에 대해서는 조회되지 않게 처리한다
				iRow += baseDao.update("SLS020102DAO.updateCancelLttotPayList", map); //수정
				
				//(3)주택계약정보 해약처리
				iRow += baseDao.update("SLS020102DAO.updateCancelHcntrctrInfo", map); //수정
				
				//(4-1)주택결제정보 해지등록(임대인경우,임대료 결제 정보수정)--삭제
				//baseDao.insert("SLS020102DAO.insertHouseCancelSetleInfo"      , map);  //입력
				
				//(4-2)주택결제정보 해지처리(임대인경우,임대료 결제 정보수정)
				iRow += baseDao.update("SLS020102DAO.updateCancelSetleInfo"   , map); //수정
				
				//(5) 기타수입납부 등록 : 위약금 2016.03.29				
				baseDao.insert("SLS020102DAO.insertEtcIncmePay"      , map);  //입력
				
				break;
				
			case DataSet.ROW_TYPE_UPDATED :
				//업데이트는 임대해약시 유보금, 시설점검 내역만 업데이트 가능
				iRow += baseDao.update("SLS020102DAO.updateHouseCancelInfo", map); //수정
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				//(1)주택계약정보 해약취소
				iRow += baseDao.update("SLS020102DAO.updateHcntrctrInfo"       , map); //수정

				//(2)납부정보 해약 취소
				iRow += baseDao.update("SLS020102DAO.updateLttotPayList"       , map); //수정
				
				//(3)주택 분양 해약정보 삭제
				iRow += baseDao.delete("SLS020102DAO.deleteHouseLttotCancelInfo" , map2); //삭제
				
				//(5)주택 해약정보삭제
				iRow += baseDao.delete("SLS020102DAO.deleteHcntrctrCancelInfo" , map); //삭제
				
				//(6)기타수입납부 삭제 2016.03.30 
				iRow += baseDao.delete("SLS020102DAO.deleteEtcIncmePay" , map); //삭제
				
				break;
		    }
			
		}

		return iRow;
		
	}

	
	/**
	 * 주택계약 해약(임대) 반환금 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHouseCancelRentReturnAmtList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020102DAO.selectHouseCancelRentReturnAmtList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	
	/**
	 * 주택계약 해약(임대) 임대 납부 보증금 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectRenLttotPayList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020102DAO.selectRenLttotPayList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	
	/**
	 * 주택 계약자 해약정보(임대) 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return 
	 * @throws NexaServiceException
	 * @throws ParseException 
	 */
		
	@SuppressWarnings({ "rawtypes", "unchecked"  })	
	public int saveHouseRentCancelInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException, ParseException {
				
		int iRow = 0;
		
		DataSetMap list  = (DataSetMap) inDataset.get("input1"); //주택계약자해약
		DataSetMap list2 = (DataSetMap) inDataset.get("input2"); //주택분양해약


		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {

			Map map  = list.get(x);  //주택계약 해약정보
			Map map2 = list2.get(x);  //주택 분양 해약정보
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			System.out.println("rowType : " + rowType);
			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :
				
				//(1)해약정보 등록
				baseDao.insert("SLS020102DAO.insertHouseCancelInfo"          , map);  //입력
				
				//(1-1) 주택 임대 해약정보 등록
				baseDao.insert("SLS020102DAO.insertHouseRentCancelInfo"      , map2);  //입력
				//(1-2) 주택 임대 시설물/시설물보수 부담액 등록
				//baseDao.insert("SLS020102DAO.insertRentCancelChckDspthInfo"      , map);  //입력
				

				//(2)납부정보 해약 수정- 해지가 발생하며 입금되지 않은 납부정보에 대해서는 조회되지 않게 처리한다
				iRow += baseDao.update("SLS020102DAO.updateCancelLttotPayList", map); //수정
				
				//(3)주택계약정보 해약처리
				iRow += baseDao.update("SLS020102DAO.updateCancelHcntrctrInfo", map); //수정
				
				//(4-1)주택결제정보 해지등록(임대인경우,임대료 결제 정보수정)--삭제
				//baseDao.insert("SLS020102DAO.insertHouseCancelSetleInfo"      , map);  //입력
				
				//(4-2)주택결제정보 해지처리(임대인경우,임대료 결제 정보수정)
				iRow += baseDao.update("SLS020102DAO.updateCancelSetleInfo"   , map); //수정
				
				//(5) 기타수입납부 등록 : 위약금 2016.03.29
				if ("1".equals(map.get("PENLTY_APPLC_AT").toString())) {
					baseDao.insert("SLS020102DAO.insertEtcIncmePay"      , map);  //입력	
				}								
				
				//(6)해약처리/해약취소 시 월 임대료 조정 2016.03.31
				Map map4 = list.get(x);
				
				map4.put("IN_FLAG", 		"C");
				map4.put("IN_FLAG1", 		"");
				map4.put("IN_CNTRCTR_NO", 	map.get("CNTRCTR_NO").toString());//계약번호
				map4.put("IN_APPLY_DATE", 	map.get("CANCL_DE").toString());//해약일자
				map4.put("IN_MDAT_DE", 		map.get("CANCL_DE").toString());//해약일자
				map4.put("IN_REGISTER_ID", 	String.valueOf(ObjectUtil.getSessionObj("S_USER_ID")));//등록자ID
				map4.put("IN_HOUSE_CODE", 	map.get("HOUSE_CODE").toString());//주택코드
				map4.put("IN_CAL_DATE", 	map.get("RCEPT_DE").toString());//접수일자
				 
				map4.put("OUT_RESULT_CD", 	"0");
				map4.put("OUT_RESULT_MSG", 	"");
				
				baseDao.update("SLS020102DAO.SPSLS_HOUSE_RENT_PAY_CANCEL_UI", map4);
				
				if (!"0".equals(map4.get("OUT_RESULT_CD").toString())) {
					throw new NexaServiceException("info.메시지", map4.get("OUT_RESULT_MSG").toString());
				}
				
				break;
				
			case DataSet.ROW_TYPE_UPDATED :
				//업데이트는 임대해약시 유보금, 시설점검 내역만 업데이트 가능
				//iRow += baseDao.update("SLS020102DAO.updateHouseCancelInfo", map); //수정
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				//(1)주택계약정보 해약취소
				iRow += baseDao.update("SLS020102DAO.updateHcntrctrInfo"       , map); //수정

				//(2)납부정보 해약 취소
				iRow += baseDao.update("SLS020102DAO.updateLttotPayList"       , map); //수정
				
				//(3-A)주택 임대 점검의뢰 내용삭제
				iRow += baseDao.delete("SLS020102DAO.deleteHouseCheckReqest" , map); //삭제
				
				//(3-B)주택 임대 점검통보 내용삭제
				iRow += baseDao.delete("SLS020102DAO.deleteHouseCheckDspth" , map); //삭제
				
				//(3-C)주택 임대 해약 정보 삭제
				iRow += baseDao.delete("SLS020102DAO.deleteHouseRentCancelInfo" , map2); //삭제
				
				//(4)주택 해약정보삭제
				iRow += baseDao.delete("SLS020102DAO.deleteHcntrctrCancelInfo" , map); //삭제
				
				//(6)기타수입납부 삭제 2016.03.30 
				iRow += baseDao.delete("SLS020102DAO.deleteEtcIncmePay" , map); //삭제
				
				//(7)차액금액 가져오기 2016.04.01
				String dfnntAmount = selectDfnntAmount(map);
				
				//System.out.println("dfnntAmount============================> " + dfnntAmount);
				//감액조정이 된 경우 감액금액 및 감액결의서를 삭제한다.
				if(!"0".equals(dfnntAmount)){
					baseDao.update("SLS020102DAO.updateDfnntAmount"       , map); //차액금액 수정
					
					map.put("DECSN_SE", 	"4");
					baseDao.delete("SLS020102DAO.deleteHouseDecsn" , map); //주택결의 삭제
				}
				else{
					String canclDe = map.get("CANCL_DE").toString();//해약일자					
					String lastDay  = DateUtil.lastDayOfMonth(canclDe, "yyyyMMdd");
					//System.out.println("canclDe============================> " + canclDe);
					//System.out.println("lastDay============================> " + lastDay);
					//해약일자가 당월 말일인 경우 해당월의 임대료는 재조정되지않으므로 삭제하지않음.
					if(!canclDe.equals(lastDay)){
						baseDao.delete("SLS020102DAO.deleteHouseRentPay" , map); //당월임대료 삭제
						
						map.put("DECSN_SE", 	"1");
						baseDao.delete("SLS020102DAO.deleteHouseDecsn" , map); //주택결의 삭제
					}
				}				
				
				break;
		    }
			
		}

		return iRow;
		
	}

	/**
	 * 주택 계약자 해약정보(임대) 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return 
	 * @throws NexaServiceException
	 * @throws ParseException 
	 */
		
	@SuppressWarnings({ "rawtypes", "unchecked"  })	
	public int deleteHouseRentCancelInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException, ParseException {
				
		int iRow = 0;
		
		DataSetMap list  = (DataSetMap) inDataset.get("input1"); //주택계약자해약
		//DataSetMap list2 = (DataSetMap) inDataset.get("input2"); //주택분양해약


		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		Map map  = list.get(0);  //주택계약 해약정보
		//Map map2 = list2.get(0);  //주택 분양 해약정보
			
		//(1)주택계약정보 해약취소
		iRow += baseDao.update("SLS020102DAO.updateHcntrctrInfo"       , map); //수정

		//(2)납부정보 해약 취소
		iRow += baseDao.update("SLS020102DAO.updateLttotPayList"       , map); //수정
		
		//(3-A)주택 임대 점검의뢰 내용삭제
		iRow += baseDao.delete("SLS020102DAO.deleteHouseCheckReqest" , map); //삭제
		
		//(3-B)주택 임대 점검통보 내용삭제
		iRow += baseDao.delete("SLS020102DAO.deleteHouseCheckDspth" , map); //삭제
		
		//(3-C)주택 임대 해약 정보 삭제
		iRow += baseDao.delete("SLS020102DAO.deleteHouseRentCancelInfo" , map); //삭제
		
		//(4)주택 해약정보삭제
		iRow += baseDao.delete("SLS020102DAO.deleteHcntrctrCancelInfo" , map); //삭제
		
		//(6)기타수입납부 삭제 2016.03.30 
		iRow += baseDao.delete("SLS020102DAO.deleteEtcIncmePay" , map); //삭제
		
		//(7)차액금액 가져오기 2016.04.01
		String dfnntAmount = selectDfnntAmount(map);
		
		//System.out.println("dfnntAmount============================> " + dfnntAmount);
		//감액조정이 된 경우 감액금액 및 감액결의서를 삭제한다.
		if(!"0".equals(dfnntAmount)){
			baseDao.update("SLS020102DAO.updateDfnntAmount"       , map); //차액금액 수정
			
			map.put("DECSN_SE", 	"4");
			baseDao.delete("SLS020102DAO.deleteHouseDecsn" , map); //주택결의 삭제
		}
		else{
			String canclDe = map.get("CANCL_DE").toString();//해약일자					
			String lastDay  = DateUtil.lastDayOfMonth(canclDe, "yyyyMMdd");
			//System.out.println("canclDe============================> " + canclDe);
			//System.out.println("lastDay============================> " + lastDay);
			//해약일자가 당월 말일인 경우 해당월의 임대료는 재조정되지않으므로 삭제하지않음.
			if(!canclDe.equals(lastDay)){
				baseDao.delete("SLS020102DAO.deleteHouseRentPay" , map); //당월임대료 삭제
				
				map.put("DECSN_SE", 	"1");
				baseDao.delete("SLS020102DAO.deleteHouseDecsn" , map); //주택결의 삭제
			}
		}											
		return iRow;
	}	
	
	//차액금액
  	@SuppressWarnings("rawtypes")
  	public String selectDfnntAmount(Map map) {
  		
  		String dfnntAmount = (String)baseDao.select("SLS020102DAO.selectDfnntAmount", map);		
  		
  		if(dfnntAmount == null){
  			dfnntAmount = "0";
  		}
  		return dfnntAmount;
  	}
	
	
	/**
	 * 주택계약 해약정보(임대) -시설점검의뢰 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectRentCancelChckReqestInfo(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020102DAO.selectRentCancelChckReqestInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 주택계약 해약정보(임대) -시설점검의뢰 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return 
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes"  })	
	public int saveRentCancelChckReqestInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list  = (DataSetMap) inDataset.get("input1"); //주택계약자해약

		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {

			Map map  = list.get(x);  //주택계약 해약정보
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			System.out.println("rowType :" + rowType);
				
			//해약정보 등록
			baseDao.insert("SLS020102DAO.insertRentCancelReqestInfo"        , map);  //입력
			
		}

		return iRow;		
	}

	/**
	 * 주택계약 해약정보(임대) -시설점검의뢰 수정
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return 
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes"  })	
	public int updateRentCancelChckReqestInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list  = (DataSetMap) inDataset.get("input1"); //주택계약자해약

		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);

		Map map  = list.get(0); 
			
		int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		System.out.println("rowType :" + rowType);
		
		//업데이트는 임대해약시 유보금, 시설점검 내역만 업데이트 가능
		iRow += baseDao.update("SLS020102DAO.updateRentCancelReqestInfo", map); //수정

		return iRow;		
	}
	
	/**
	 * 주택계약 해약정보(임대) -시설점검 통보 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectRentCancelChckDspthInfo(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020102DAO.selectRentCancelChckDspthInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 주택계약 해약정보(임대) -시설점검 통보 첨부파일 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectDspthFileList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020102DAO.selectDspthFileList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
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
			
		baseDao.update("SLS020102DAO.approveU", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		
		outDataset.put("output1", outDsMap);
	}
	
	//시설점검의뢰
	@SuppressWarnings({ "rawtypes" })
	public void approveU2(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		//List <Map> records;
		Map map = list.get(0);
			
		baseDao.update("SLS020102DAO.approveU2", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	//시설물전자결재
	@SuppressWarnings({ "rawtypes" })
	public void approveFclts(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		//List <Map> records;
		Map map = list.get(0);
			
		baseDao.update("SLS020102DAO.approveFclts", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		
		outDataset.put("output1", outDsMap);
	}
	
	//시설보수부담액 납부정보 업데이트
	@SuppressWarnings({ "rawtypes" })
	public void updateHouseRentCancelInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		//List <Map> records;
		Map map = list.get(0);
			
		baseDao.update("SLS020102DAO.updateHouseRentCancelInfo", map);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		
		outDataset.put("output1", outDsMap);
	}	
	
}
