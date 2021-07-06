package hsco.pms.sls.com.SLS000000;

//import java.io.File;
//import java.math.BigDecimal;
//import java.rmi.server.UID;
//import java.text.SimpleDateFormat;
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
//import javax.servlet.http.HttpServletRequest;



//import org.apache.commons.lang.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.transaction.annotation.Transactional;

//import hsco.cmm.util.FileUtils;
//import hsco.cmm.util.ObjectUtil;
//import hsco.cmm.util.StringUtil;
import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS000000ServiceImpl.java
 * @Description  	: 판매공통관련 Service
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
 *   작성일                        	작성자                	내용
 * ------------------------------------------------------------------
 *  2015. 6.11.		김시영			최초생성
 *  2015.08.26.		이상준			Re-Work
 * </pre>
 */
@Service("SLS000000Service")
public class SLS000000ServiceImpl extends BaseService implements SLS000000Service {

	@Autowired
	ServletContext servletcontext;
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
//    @Resource(name = "FileUploadService")
//    protected FileUploadServiceImpl FileUploadService;
	
    /**
	 * 주택코드 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void selectHouseCodeList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			
			inMap = inDsMap.get(0);
			
			// 주택구분(HOUSE_SE) 값 추출
			String inHouseSe = (String)inMap.get("HOUSE_SE");
			if(inHouseSe != null){
				String[] houseSeList = inHouseSe.split(",");
				inMap.put("HOUSE_SE_LIST", houseSeList);
			}
			
			// 분양전환구분(LTTOT_CNVRS_SE)확인
			String inLttotCnvrsSe = (String)inMap.get("LTTOT_CNVRS_SE");
			if(inLttotCnvrsSe == null){
				inMap.put("LTTOT_CNVRS_SE", "02");	// 분양전환구분 값이 null일 경우 02(분양전환)으로 설정
			}
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("SLS000000DAO.selectHouseCodeList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("houseCode", outDsMap);
	}
	

	/**
	 * 주택계약자 팝업 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void selectHOUcntrctr(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("SLS000000DAO.selectHOUcntrctr", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("output1", outDsMap);
	}	
	
	/**
	 * 토지계약자 팝업 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void selectLADcntrctr(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("SLS000000DAO.selectLADcntrctr", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("output1", outDsMap);
	}		


	/**
	 * 주택코드별 동 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void selectHouseDongList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("SLS000000DAO.selectHouseDongList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("dongCode", outDsMap);
	}
	
	/**
	 * 주택코드,동별 호 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void selectHouseHoList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("SLS000000DAO.selectHouseHoList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("hoCode", outDsMap);
	}
	
	/**
	 * 주택코드별 동-호 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void selectHouseDongHoList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("SLS000000DAO.selectHouseDongHoList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("dongHoCode", outDsMap);
	}
	
	/**
	 * 주택코드별 평 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void selectHouseAeaList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("SLS000000DAO.selectHouseAeaList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("aeaCode", outDsMap);
	}
	
	/**
	 * 주택코드별 타입평수 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void selectHouseTyAeaList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("SLS000000DAO.selectHouseTyAeaList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("tyAeaCode", outDsMap);
	}
	
	/**
	 * 주택 계약(해약) 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void selectHcntrctrList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			
			inMap = inDsMap.get(0);
			
			// 주택구분(HOUSE_SE) 값 추출
			String inHouseSe = (String)inMap.get("HOUSE_SE");
			
			if(inHouseSe != null){
				String[] houseSeList = inHouseSe.split(",");
				inMap.put("HOUSE_SE_LIST", houseSeList);
			}
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("SLS000000DAO.selectHcntrctrList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("hcntrctrList", outDsMap);
	}
	
	
	/**
	 * 토지코드 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void selectLadCodeList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("SLS000000DAO.selectLadCodeList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("ladCode", outDsMap);
	}
	
	/**
	 * 토지상세정보 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void selectLadDetailList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("SLS000000DAO.selectLadDetailList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("ladDetail", outDsMap);
	}
	
	/**
	 * 토지계약자 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void selectLcntrctrList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("SLS000000DAO.selectLcntrctrList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("lcntrctrList", outDsMap);
	}
	
	/**
	 * 토지계약자 기타정보(압류, 대출, 소유권) 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"rawtypes"})
	public void selectLcntrctrEtcInfo(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		Map resultInfo = null;
		
		// 토지계약자 기타정보(압류, 대출, 소유권) 조회 - CNTRCTR_NO
		resultInfo = (Map)baseDao.select("SLS000000DAO.selectLcntrctrEtcInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(resultInfo);
		outDataset.put("lcntrctrEtc", outDsMap);
	}

	/**
	 * 사업코드 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void selectBsnsCodeList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("SLS000000DAO.selectBsnsCodeList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("bsnsCode", outDsMap);
	}
	
	/**
	 * 사업코드 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void selectHouseInfo(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("SLS000000DAO.selectHouseInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("output1", outDsMap);
	}
	
	/* 체납 분양금,보증금,임대료,기타수입,융자금 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void P3(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS000000DAO.P3", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS000000DAO.P3", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}		
	
	/* 체납 분양금 ,임대료  조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void P05(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		
		if(inMap.get("HOUSE_CODE") != null){  //주택
			if (inMap != null) {
				records = (List<Map>)baseDao.list("SLS000000DAO.HouP05", inMap);
			} else {
				records = (List<Map>)baseDao.list("SLS000000DAO.HouP05", inVar);
			}

		}else{ //토지
			if (inMap != null) {
				records = (List<Map>)baseDao.list("SLS000000DAO.P05", inMap);
			} else {
				records = (List<Map>)baseDao.list("SLS000000DAO.P05", inVar);
			}
		
		}

				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}			
	
	
	/* 미납 기타수입  조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void P005(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
			if (inMap != null) {
				records = (List<Map>)baseDao.list("SLS000000DAO.P005", inMap);
			} else {
				records = (List<Map>)baseDao.list("SLS000000DAO.P005", inVar);
			}
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}			
	
	/* 납부요청 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void P5(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS000000DAO.P5", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS000000DAO.P5", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}			
	
	/* 납부요청2 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void P6(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

			
		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS000000DAO.P6", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS000000DAO.P6", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}		
	
	/** 납부요청 프로시저 호출 */
	@SuppressWarnings({ "unchecked", "unused" })
	
	public void P7(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {


		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			baseDao.insert("SLS000000DAO.SP_VA_BILL_UID", map);
		}

		list = (DataSetMap) inDataset.get("input2");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			baseDao.insert("SLS000000DAO.SP_VA_BILL_UID", map);	
		}
		
		list = (DataSetMap) inDataset.get("input3");		
		for (int x = 0; x < list.size(); x++) {
				
			Map<String, Object> map = list.get(x);
								
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			baseDao.insert("SLS000000DAO.SP_VA_BILL_UID", map);	
		}

	}			
	
	/* 은행콤보 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void P8(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS000000DAO.P8", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS000000DAO.P8", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}		
	
	/* 분납 선납할인 / 연체이자 계산 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void P4(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS000000DAO.P4", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS000000DAO.P4", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}
	
	/* 분납 선납할인 / 연체이자 계산 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void P09(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS000000DAO.P09", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS000000DAO.P09", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}		
	
	/* 사용자별 가상계좌 종류 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void P02(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		if (inMap != null) {
			if(inMap.get("HOUSE_CODE") != null){  // 주택	
				inMap.put("CRT_DIV", "SL");	
			}else{ //토지
				inMap.put("CRT_DIV", "LN");	
			}
			records = (List<Map>)baseDao.list("SLS000000DAO.P02", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS000000DAO.P02", inVar);
		}

				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}	
	

	/* 분납 선납할인 / 연체이자 계산 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void P06(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SLS000000DAO.P06", inMap);
		} else {
			records = (List<Map>)baseDao.list("SLS000000DAO.P06", inVar);
		}
		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
	}		
	
	/**
	 * 토지명의변경 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes" })	
	public int P06CUD ( DataSetMap tranInfo, Map<String, Object> inVar,
		   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  		   Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list==null) ? 0 : list.size(); 
		log.debug("========== listSize =========================> "+listSize);		
		for (int i = 0; i < listSize; i++) {
				
			Map map = list.get(i);
			baseDao.update("SLS080201DAO.updateLcntrctrPayPopList", map);	
		}	
		return iRow;
	}	
	
	/*
	public Map<String, Object> uploadFileinfo(NexacroMapDTO xpDto) throws NexaServiceException {
		
		Map<String, Object> resultMap = null;
		
//		DataSetMap tranInfo 				= xpDto.getTranInfoMap();
//		Map <String, Object> inVar 			= xpDto.getInVariableMap();
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
//		Map <String, Object> outVar 		= xpDto.getOutVariableMap();
//		Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
		HttpServletRequest request 			= xpDto.getRequest();
		
		// 첨부파일 정보
		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");	// List
    	
    	if(fileInfo != null){
    		
    		String uploadDir = null;		// 업로드 디렉토리
    		boolean saveFile = false;		// 파일 저장여부
    		
    		ArrayList<Map<String, Object>> fileList = new ArrayList<Map<String,Object>>();	// 업로드 파일 정보
    		
    		String oriFileName = null;		// 실제 파일명
    		String oriExtName = null;		// 실제 확장자
    		String uniqueFileName = null;	// 변경(유일) 파일명
    		try{
    			
    			// [STEP1] 파일저장
	    		MultipartHttpServletRequest mpRequest = (MultipartHttpServletRequest)request;
    			
    			int filInfoSize = fileInfo.size();
    			System.out.println("업로드 대상 파일정보 수 = " + filInfoSize);
    			
    			// 파일일련번호 조회
				BigDecimal filesSn = FileUploadService.selectFileSn();
				String strFileSn = String.valueOf(filesSn);
				
				System.out.println("selectFileSn = " + strFileSn);
				
				resultMap = new HashMap<String, Object>();
				resultMap.put("FILE_SN", strFileSn);
				
				// 파일 저장처리
				// 업로드 파일 정보 추출
				Iterator<String> iterFile = mpRequest.getFileNames();
				while(iterFile.hasNext())
				{
					String formName = (String)iterFile.next();	
					
		    		MultipartFile multiFile = mpRequest.getFile(formName);
					oriFileName = multiFile.getOriginalFilename();
					
					if(!StringUtil.isNull(oriFileName))
					{
						oriExtName = oriFileName.substring(oriFileName.lastIndexOf('.') + 1, oriFileName.length());
			    		
						// 전달 파일정보
						int inFileIdx = ObjectUtil.findRowIndexInDs(fileInfo, "ORGINL_FILE_NM", oriFileName);
						Map<String, Object> inFileItem = (Map<String, Object>)fileInfo.get(inFileIdx);
		    			
		    			String inSysSeCode = (String)inFileItem.get("SYS_SE_CODE");			// 전달 시스템 구분
		    			String inJobSeCode = (String)inFileItem.get("JOB_SE");				// 전달 업무구분
		    			
		    			String inOrginlFileNm = (String)inFileItem.get("ORGINL_FILE_NM");	// 전달 파일명
		    			String inFileExtsn = (String)inFileItem.get("FILE_EXTSN");			// 전달 파일 확장자
		    			String inFileId = (String)inFileItem.get("FILE_ID");				// 전달 파일 ID
		    			
			    		// 저장경로 설정
		    			String rootPath = null;
						String path = null;
						
						String fileLocation = "upload";
						
						// RootPath 구하기
						rootPath = servletcontext.getRealPath("upload");
						uploadDir = rootPath + File.separator + inSysSeCode + File.separator  + inJobSeCode + File.separator;
						path = fileLocation + File.separator;
						
						System.out.println("rootPath = " + rootPath);
						System.out.println("uploadDir = " + uploadDir);
						System.out.println("path = " + path);
						System.out.println("  {Upload Target Dir} 업로드 경로 = " + uploadDir);
						
						// 디렉토리생성 확인
						if(!FileUtils.isDirectory(uploadDir)){
							FileUtils.makeDir(uploadDir);
						}
					
						System.out.println("  {Upload 파일} 업로드 파일 = " + oriFileName + " :: " + multiFile.getBytes().length);
						
						uniqueFileName = ((new UID()).toString()).replaceAll(":", "");	// 임시 파일명생성
						uniqueFileName = strFileSn +  uniqueFileName;
						
						File uploadedFile = new File(uploadDir + uniqueFileName);		// 임시파일명으로 파일생성
						
						multiFile.transferTo(uploadedFile);								// 파일저장
						
						System.out.println("  {Upload 파일} 업로드 파일 저장완료");
						
						// 저장정보 구성
						Map<String, Object> fileItem = new HashMap<String, Object>();	// 업로드 파일정보
						
						// 저장 파일명 정보 설정(TBCOM_CMMN_ATCHMNFL 테이블 구조)
						// 파일 순차번호는 자동 채번
						fileItem.put("FILE_SN", strFileSn);							// 파일일련번호
						fileItem.put("FILE_STRE_COURS", uploadDir);					// 파일저장경로
						fileItem.put("STRE_FILE_NM", uniqueFileName);				// 저장파일명
						fileItem.put("ORGINL_FILE_NM", oriFileName);				// 원본파일명
						fileItem.put("FILE_EXTSN", oriExtName);						// 파일확장자
						fileItem.put("FILE_CN", inFileId);							// 파일내용(파일ID)
						fileItem.put("FILE_MG", new Long(multiFile.getSize()));		// 파일크기
						fileItem.put("USE_AT", "1");								// 사용여부
						
						System.out.println(fileItem.toString());
						
						fileList.add(fileItem);
					}
				}
				
				saveFile = true; // 파일 저장 완료 처리
				
				// 파일정보 DB 처리
				
				
				// 마스터 정보 처리
				
				
				// 디테일 정보 처리
				
    		}catch(Exception ex){
    			
    			log.error("!!ERROR {" + ex.getClass().getName() + "} 파일 업로드 중 오류발생 " + ExceptionUtils.getStackTrace(ex));
    			
    			// 저장된 파일은 삭제
    			log.error(" saveFile = " + saveFile);
    			
    			if(saveFile)
    			{
    				int fileListSize = (fileList == null) ? 0 : fileList.size();
    				log.error(" Delete File Count = " + fileListSize);
    				
    				for(int i = 0; i < fileListSize; i++)
    				{
    					Map<String, Object> item = (Map<String, Object>)fileList.get(i);
    					String delStrePath = (String)item.get("FILE_STRE_COURS");
    					String delFileName = (String)item.get("STRE_FILE_NM");
    					String delFilePath = delStrePath + delFileName;
    					FileUtils.removeFile(delFilePath);
    				}
    			}
    			
    		}
    		
    	}
    	
    	return resultMap;
	}*/

	/**
	 * 납부서 출력 (토지)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBillPrintList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("SLS000000DAO.selectBillPrintList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}

	
	/**
	 * 납부서 출력 (토지)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBillPrintListAll( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
        if(inMap != null){
        	String sParam = (String)inMap.get("CNTRCTR_NO");
    		inMap.put("ARR_CNTRCTR_NO", sParam.split(","));
        }		
        
		List <Map> records = (List<Map>)baseDao.list("SLS000000DAO.selectBillPrintListAll", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}	
	
	/**
	 * 납부서 출력 (주택: 분양, 임대)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBillPrintListHouse( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		if(inMap.get("LOAN_YN").equals("1")){  // 융자금
			  List <Map> records = (List<Map>)baseDao.list("SLS000000DAO.selectBillPrintListHouse_Loan", inMap);
			  DataSetMap outDsMap = new DataSetMap();
			  outDsMap.setRowMaps(records);
			  outDataset.put("output1", outDsMap);
		 } else {
			  List <Map> records = (List<Map>)baseDao.list("SLS000000DAO.selectBillPrintListHouse", inMap);
			  DataSetMap outDsMap = new DataSetMap();
			  outDsMap.setRowMaps(records);
			  outDataset.put("output1", outDsMap);
		 }		
	}
	
	/**
	 * 납부서 일괄 출력 (주택: 분양, 임대)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBillPrintListHouseALL( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
        if(inMap != null){
        	String sParam = (String)inMap.get("CNTRCTR_NO");
    		inMap.put("ARR_CNTRCTR_NO", sParam.split(","));
        }				
		
		List <Map> records = (List<Map>)baseDao.list("SLS000000DAO.selectBillPrintListHouseALL", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}	
}