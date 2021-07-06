package hsco.pms.sls.hou.std.SLS010300;

import java.util.ArrayList;
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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS010300ServiceImpl.java
 * @Description  	: 
 * @author       	: 김시영
 * @since        	: 2015. 6.11.
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
 *  2015. 7.28.					   정윤원				작성자 변경
 * </pre>
 */
@Service("SLS010300Service")
public class SLS010300ServiceImpl extends BaseService implements SLS010300Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

	
	/**
	 * 분양타입,임대타입 콤보 리스트
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void cmbLttotTyCodeList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, 	Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS010300DAO.cmbLttotTyCodeList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 주택 타입 콤보 리스트
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void comboHouseTyCodeList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		
		records = (List<Map>)baseDao.list("SLS010300DAO.comboHouseTyCodeList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}	

	/**
	 * 주택 타입별 납부코드 콤보 리스트
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void comboHouseTyByPayList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		
		records = (List<Map>)baseDao.list("SLS010300DAO.comboHouseTyByPayList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}	
	
	/**
	 * 주택동호 정보 조회 리스트
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHouseDongHoList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS010300DAO.selectHouseDongHoList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 주택동호별 주택타입 상세 정보 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHouseDongHoTyByInfo(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

	
		records = (List<Map>)baseDao.list("SLS010300DAO.selectHouseDongHoTyByInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
 	* 주택동호 신규,수정,삭제
 	* @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
 	* @return int
 	* @throws NexaServiceException
 	*/
    @SuppressWarnings({ "rawtypes" })	
    
    public int saveHouseDongHoList(DataSetMap tranInfo, Map<String, Object> inVar,
	    	Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		    Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
			
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list==null) ? 0 : list.size(); 
			
		for (int x = 0; x < listSize; x++) {
					
			Map map = list.get(x);
				
			//DATA_SET ROW_TYPE 체크
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

			//주택타입별 납부상세에 해당 주택코드,동,호 정보가 등록되어있는지 체크
			//없는 경우 해당 정보를 등록 한다.
			String insertYn = (String) baseDao.select("SLS010300DAO.selectTybyPayDetailCnt" , map);
			
			switch(rowType) {

			case DataSet.ROW_TYPE_INSERTED :
				//주택동호 신규등록
				baseDao.insert("SLS010300DAO.insertHouseDongHoList", map);
				
				//주택타입별 납부상세 신규 등록
				if("Y".equals(insertYn) ){
					baseDao.insert("SLS010300DAO.insertTybyPayDetail", map);
				}
				
				break;
				
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("SLS010300DAO.updateHouseDongHoList", map);
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				
				iRow += baseDao.delete("SLS010300DAO.deleteHouseDongHoList", map);
				
				//주택타입별 납부상세 삭제
				if("N".equals(insertYn) ){
					iRow += baseDao.delete("SLS010300DAO.deleteTybyPayDetail", map);
				}

				break;
			}
		
		}
			
	       return iRow;
	}
    
    
    
    
    /**
	 * 주택정보 엑셀 자료 일괄업로드
	 *  - 일괄등록시 처리 프로세스
   	 *	- 동.호 정보 Insert
   	 *	- 타입정보 자동 생성
   	 *	- 타입별 납부정보 자동 생성
 	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
 	 * @return int
  	 * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })	
    
    public int saveHouseDongHoListProc(DataSetMap tranInfo, Map<String, Object> inVar,
	    	Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		    Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
			
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list==null) ? 0 : list.size(); 
			
		for (int x = 0; x < listSize; x++) {
					
			Map map = list.get(x);
				
			//DATA_SET ROW_TYPE 체크
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

			switch(rowType) {

			case DataSet.ROW_TYPE_INSERTED :
				//주택 타입이 있는지 확인(based on 주택타입, 전용면적,공용면적,대지면적,기타고용, 계약면적, 분양금액)
				String house_ty_code = (String) baseDao.select("SLS010300DAO.selectHouseDongHoType" , map);

				if(house_ty_code == null){ //주택 타입이 없으면...
			        //1. 주택타입(TBSLS_HOUSE_TY) Insert 
					map.put("SUPLY_AMOUNT", map.get("LTTOT_AMOUNT"));
					if((map.get("HOUSE_STLE_NM") == null ? "" : map.get("HOUSE_STLE_NM")).toString().indexOf("국민") > -1 ){  //주택형태명이 국민주택이면 01
						map.put("HOUSE_STLE", "01");
					}else if((map.get("HOUSE_STLE_NM") == null ? "" : map.get("HOUSE_STLE_NM")).toString().indexOf("민영") > -1 ){ //주택형태명이 민영주택이면 02
						map.put("HOUSE_STLE", "02");
					}
					
					String houseDrc = map.get("HOUSE_DRC") == null ? "" : map.get("HOUSE_DRC").toString(); //타입코드를 만들기 위해 주택방향의 한글을 제거한다
					houseDrc = houseDrc.replaceAll("[^a-zA-Z]", "");
					map.put("HOUSE_DRC_TEMP", houseDrc);
					baseDao.insert("SLS010300DAO.insertHouseTypeList", map);
					
					
			        //2. 주택 코드를 가져온다
					house_ty_code = (String) baseDao.select("SLS010300DAO.selectHouseDongHoTypeCode" , map);
					map.put("HOUSE_TY_CODE", house_ty_code);
					
					
					//3. 주택동호(TBSLS_HOUSE_DONG_HO) Insert  with  TBSLS_HOUSE_TY 테이블의 HOUSE_TY_CODE
					String floor = map.get("HO") == null ? "" : map.get("HO").toString().length() < 2 ? map.get("HO").toString() : map.get("HO").toString().substring(0, 2);
					map.put("FLOOR", floor);
					map.put("BASS_LTTOT_AMOUNT", map.get("LTTOT_AMOUNT"));
					map.put("BASS_RNTCHRG", map.get("RNTCHRG"));
					baseDao.insert("SLS010300DAO.insertHouseDongHoList", map);
					
					//4. HOUSE_CODE에 따라 주택구분을 가져온다.
					String houseSe = (String) baseDao.select("SLS010300DAO.selectHouseSeByCode", map);
					map.put("HOUSE_SE", houseSe);

			        //5. 납부정보(TBSLS_HOUSE_TYBY_PAY) Insert (It is Record)
					putHouseTybyPay(map);

					
				}else{ //주택 타입이 있으면...
					map.put("HOUSE_TY_CODE", house_ty_code);
					
					//1.주택타입 테이블(TBSLS_HOUSE_TY)에 조회된 해당 주택코드가 있는지 확인
					String houseTypeCnt = (String) baseDao.select("SLS010300DAO.selectCntHouseDongHoTyByInfo" , map);
					//없으면 insert
					if(Integer.parseInt(houseTypeCnt) == 0){
						map.put("SUPLY_AMOUNT", map.get("LTTOT_AMOUNT"));
						baseDao.insert("SLS010300DAO.insertHouseType", map);
					}
					
					//2. 주택동호(TBSLS_HOUSE_DONG_HO) Insert  with  TBSLS_HOUSE_TY 테이블의 HOUSE_TY_CODE
					String floor = map.get("HO") == null ? "" : map.get("HO").toString().length() < 2 ? map.get("HO").toString() : map.get("HO").toString().substring(0, 2);
					map.put("FLOOR", floor);
					map.put("BASS_LTTOT_AMOUNT", map.get("LTTOT_AMOUNT"));
					map.put("BASS_RNTCHRG", map.get("RNTCHRG"));
					
					//2-1. 이미 동호정보가 등록되어 있는지 확인한다.
					String dongHoCnt = (String) baseDao.select("SLS010300DAO.selectDongHoCnt" , map);
					if(Integer.parseInt(dongHoCnt) > 0){   //이미 동호가 있으면 Update
						baseDao.insert("SLS010300DAO.updateHouseDongHoList", map);
					}else{                                 //없으면 Insert
						baseDao.insert("SLS010300DAO.insertHouseDongHoList", map);
					}
					
					//3.주택타입별납부 확인
					String houseTybyPayListCnt = (String) baseDao.select("SLS010300DAO.selectCntHouseTybyPayList" , map);
					if(Integer.parseInt(houseTybyPayListCnt) == 0){ //없으면 Inser
						//4. HOUSE_CODE에 따라 주택구분을 가져온다.
						String houseSe = (String) baseDao.select("SLS010300DAO.selectHouseSeByCode", map);
						map.put("HOUSE_SE", houseSe);
							
						//5. 납부정보(TBSLS_HOUSE_TYBY_PAY) Insert (It is Record)
						putHouseTybyPay(map);
					}
				}
				
				break;
				
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("SLS010300DAO.updateHouseDongHoList", map);
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				
				//주택타입별 납부상세에 해당 주택코드,동,호 정보가 등록되어있는지 체크
				//없는 경우 해당 정보를 등록 한다.
				String houseTyCnt = (String) baseDao.select("SLS010300DAO.selectCntHouseDongHoTyByInfo" , map);
				
				iRow += baseDao.delete("SLS010300DAO.deleteHouseDongHoList", map);
				
				//주택타입별 납부상세 삭제
				if(!"0".equals(houseTyCnt) ){
					iRow += baseDao.delete("SLS010300DAO.deleteTybyPay", map);
				}

				break;
			}
		
		}
			
	       return iRow;
	}
    
    /**
   	 * 주택정보 엑셀 자료 일괄업로드 => 주택타입별 납부 등록
      	 *	- 납부정보 Insert
    	 * @param (Map) 
    	 * @return void
     	 * @throws NexaServiceException
      */
    public void putHouseTybyPay(Map map){
    	int tempSum     = 0; // 합계
		int nAmt     	= 0; // 금액 * 비율
		List<String> pay_code_no = null;
		
		for(int i=0; i<=9; i++){ //계약금 ~ 잔금
			if(map.get("PAY_RATE_S"+i) != null){
				pay_code_no = new ArrayList<String>();
				if(map.get("HOUSE_SE").equals("S2") || map.get("HOUSE_SE").equals("S4")){ //임대
					pay_code_no.add("R0");
					pay_code_no.add("R1");
					pay_code_no.add("R2");
					pay_code_no.add("R3");
					pay_code_no.add("R4");
					pay_code_no.add("R5");
					pay_code_no.add("R6");
					pay_code_no.add("R9");
					map.put("PAY_CODE_RANGE", pay_code_no);
					map.put("PAY_CODE", "R"+i);
				}else{ //분양
					pay_code_no.add("S0");
					pay_code_no.add("S1");
					pay_code_no.add("S2");
					pay_code_no.add("S3");
					pay_code_no.add("S4");
					pay_code_no.add("S5");
					pay_code_no.add("S6");
					pay_code_no.add("S9");
					map.put("PAY_CODE_RANGE", pay_code_no);
					map.put("PAY_CODE", "S"+i);
				}
				map.put("PAY_TMLMT", map.get("PAY_TMLMT_S"+i));
				map.put("PAY_RATE", map.get("PAY_RATE_S"+i));
				map.put("ENGG_SE", "01");
				if(i == 9){
					nAmt = Integer.parseInt(String.valueOf(map.get("LTTOT_AMOUNT"))) - tempSum;
				}else{
					nAmt = getPayAmt(String.valueOf(map.get("LTTOT_AMOUNT")), (String)map.get("PAY_RATE_S"+i));
					tempSum = tempSum + nAmt;
				}
				
				map.put("PAYAMT", String.valueOf(nAmt));
				
				baseDao.insert("SLS010300DAO.insertHouseTybyPay", map);
			}
		}
		pay_code_no = new ArrayList<String>();
		pay_code_no.add("SA");
		pay_code_no.add("SB");
		pay_code_no.add("SC");
		pay_code_no.add("SD");
		pay_code_no.add("SE");
		//확장계약_기본
		if(map.get("PAY_AMT_SB") != null){
			map.put("PAY_CODE_RANGE", pay_code_no);
			map.put("PAY_CODE", "SB");
			map.put("PAY_TMLMT", map.get("PAY_TMLMT_SB"));
			map.put("PAYAMT", map.get("PAY_AMT_SB"));
			map.put("ENGG_SE", "02");
			map.put("OPTN_IEM_AT", "1");
			
			baseDao.insert("SLS010300DAO.insertHouseTybyPay", map);
		}
		//확장잔금_기본
		if(map.get("PAY_AMT_SB_S9") != null){
			map.put("PAY_CODE_RANGE", pay_code_no);
			map.put("PAY_CODE", "SB");
			map.put("PAY_TMLMT", map.get("PAY_TMLMT_SB_S9"));
			map.put("PAYAMT", map.get("PAY_AMT_SB_S9"));
			map.put("ENGG_SE", "02");
			map.put("OPTN_IEM_AT", "1");
			
			baseDao.insert("SLS010300DAO.insertHouseTybyPay", map);
		}
		//확장계약_마이너스
		if(map.get("PAY_AMT_SC") != null){
			map.put("PAY_CODE_RANGE", pay_code_no);
			map.put("PAY_CODE", "SC");
			map.put("PAY_TMLMT", map.get("PAY_TMLMT_SC"));
			map.put("PAYAMT", map.get("PAY_AMT_SC"));
			map.put("ENGG_SE", "02");
			map.put("OPTN_IEM_AT", "1");
			
			baseDao.insert("SLS010300DAO.insertHouseTybyPay", map);
		}
		//확장잔금_마이너스
		if(map.get("PAY_AMT_SC_S9") != null){
			map.put("PAY_CODE_RANGE", pay_code_no);
			map.put("PAY_CODE", "SC");
			map.put("PAY_TMLMT", map.get("PAY_TMLMT_SC_S9"));
			map.put("PAYAMT", map.get("PAY_AMT_SC_S9"));
			map.put("ENGG_SE", "02");
			map.put("OPTN_IEM_AT", "1");
			
			baseDao.insert("SLS010300DAO.insertHouseTybyPay", map);
		}
		//납부금액_마이너스옵션
		if(map.get("PAY_AMT_SD") != null){
			map.put("PAY_CODE_RANGE", pay_code_no);
			map.put("PAY_CODE", "SD");
			map.put("PAY_TMLMT", map.get("PAY_TMLMT_SD"));
			map.put("PAYAMT", map.get("PAY_AMT_SD"));
			map.put("ENGG_SE", "02");
			map.put("OPTN_IEM_AT", "1");
			
			baseDao.insert("SLS010300DAO.insertHouseTybyPay", map);
		}
    }
    
        
    /**
   	 * 주택정보 엑셀 자료 일괄업로드 => 주택 납부 금액 계산
    	 * @param (String , String) 
    	 * @return int
     	 * @throws NexaServiceException
      */
    public int getPayAmt(String suplyAmountStr, String nRatioStr){
    	int suplyAmount = Integer.parseInt(suplyAmountStr); // 분양금액
    	int nRatio      = Integer.parseInt(nRatioStr);      // 납부비율
    	int nAmt        = 0;    						    // 분양금액 * 납부비율
    	
    	nAmt = (int) (((Math.floor(suplyAmount * (nRatio * 0.01))) / 10000) * 10000); //만단위 절사

    	return nAmt;
    }
    
    
		
	
	/**
	 * 납부정보(Tab00>tabpage1) 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHouseTybyPayList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
			
		if (inDsMap != null)
			inMap = inDsMap.get(0);
			
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS010300DAO.selectHouseTybyPayList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS010300DAO.selectHouseTybyPayList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
			
		outDataset.put("output1", outDsMap);		
	}

	
	/**
	 * 옵션정보(Tab00>tabpage2) 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseTybyPayOptnList(DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
				
		if (inDsMap != null)
			inMap = inDsMap.get(0);
				
		List <Map> records;
				
		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS010300DAO.selectHouseTybyPayOptnList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS010300DAO.selectHouseTybyPayOptnList", inVar);
		}
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
				
		outDataset.put("output1", outDsMap);		
	}
		
	
	/**
	 * 할인정보(Tab00>tabpage3) 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseTybyPayDscntList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
				
			if (inDsMap != null)
				inMap = inDsMap.get(0);
				
			List <Map> records;
				
			if (inMap != null) {
				records = (List<Map>)baseDao.list("SLS010300DAO.selectHouseTybyPayDscntList", inMap);
			} else {
				records = (List<Map>)baseDao.list("SLS010300DAO.selectHouseTybyPayDscntList", inVar);
			}
				
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
				
			outDataset.put("output1", outDsMap);		
	}
	
	
	/**
	 * 납부정보, 옵션정보, 할인정보 신규,수정,삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public int saveHouseTybyPayList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");


		int listSize = (list==null) ? 0 : list.size(); 
			
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("SLS010300DAO.insertHouseTypeList", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("SLS010300DAO.updateHouseTybyPayList", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("SLS010300DAO.deleteHouseTybyPayList", map);
				break;
		    }
			
			
		}

		return iRow;
	}
	
	
	
}
