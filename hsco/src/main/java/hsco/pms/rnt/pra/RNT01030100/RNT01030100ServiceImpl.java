package hsco.pms.rnt.pra.RNT01030100;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lowagie.text.pdf.PRAcroForm;
import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT01030100ServiceImpl.java
 * @Description  	: 주택계약 관리
 * @author       	: 지효정
 * @since        	: 2015. 10. 27.
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
@Service("RNT01030100Service")
public class RNT01030100ServiceImpl extends BaseService{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;     
	
	/**
	 * 임대료 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentMtRntchrgList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030100DAO.rentMtRntchrgList", inMap);
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
		List <Map> records = (List<Map>)baseDao.list("RNT01030100DAO.rentGtnSeizrList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 압류 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void rentGtnSeizrCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			//int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			String Flag = (String)map.get("FLAG");
			
			if ( Flag == "C" || Flag.equals("C")){
				System.out.println("Insert");
				baseDao.insert("RNT01040103DAO.rentGtnSeizrC", map);
			}else if( Flag == "U" || Flag.equals("U")){
				System.out.println("Update");
				baseDao.update("RNT01040103DAO.rentGtnSeizrU", map);
			}else if( Flag == "D" || Flag.equals("D")){
				System.out.println("Delete");
				baseDao.delete("RNT01040103DAO.rentGtnSeizrD", map);
			}
		}
	}  
	
	/**
	 * 변경 목록
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
		List <Map> records = (List<Map>)baseDao.list("RNT01030100DAO.rentNmchangeList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 자격 변경 목록
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
		List <Map> records = (List<Map>)baseDao.list("RNT01030100DAO.rentQualfChangeList", inMap);
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
		List <Map> records = (List<Map>)baseDao.list("RNT01030100DAO.rentResciList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 보증금 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentGtnList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030100DAO.rentGtnList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 자동이체 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void atcngList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030100DAO.atcngList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 소송 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentLwstList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030100DAO.rentLwstList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 소송 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void rentLwstCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT01030100DAO.rentLwstC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01030100DAO.rentLwstU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("RNT01030100DAO.rentLwstD", map);
			}
		}
	}  
	
	/**
	 * 지원금 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void gtnSportList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030100DAO.gtnSportList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 재계약 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentReCntrctList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030100DAO.rentReCntrctList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 소송 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void rentCntrctAllCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01030100DAO.rentCntrctU", map);
				baseDao.update("RNT01030100DAO.prmanentRentCstmrU", map);
			}
		}
		/*
		list = (DataSetMap) inDataset.get("input2");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT01030100DAO.rentLwstC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01030100DAO.rentLwstU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("RNT01030100DAO.rentLwstD", map);
			}
		}*/
	}  
	
	/**
	 * 임대고객가족 목록
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
		List <Map> records = (List<Map>)baseDao.list("RNT01030100DAO.rentCstmrFamilyList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 임대고객가족 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void rentCstmrFamilyCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}
			catch( Exception e) {
				throw new NexaServiceException(e); 
			}
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				//해당 데이터가 영구임대고객 테이블에 저장되어있는지 확인
				String prmanentCstmrNo = (String) baseDao.select("RNT01030100DAO.prmanentRentCstmr", map);
				//데이터 없을경우 영구임대고객 테이블에 insert
				if("".equals(prmanentCstmrNo) || null==prmanentCstmrNo){
					baseDao.insert("RNT01030100DAO.prmanentRentCstmrC", map);
					prmanentCstmrNo = (String) baseDao.select("RNT01030100DAO.prmanentRentCstmr", map);
					map.put("PRMANENT_CSTMR_NO", prmanentCstmrNo);
				}else{
					map.put("PRMANENT_CSTMR_NO", prmanentCstmrNo);
					baseDao.update("RNT01030100DAO.prmanentRentCstmrU", map);
				}
				
				baseDao.insert("RNT01030100DAO.rentCstmrFamilyC", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("rentCstmrDAO.rentCstmrFamilyD", map);
			}
		}
	}
	
	// 파일 저장
	@SuppressWarnings({ "rawtypes", "unchecked", "null" })
	
	public void atchCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		Map targetMap = targetInfo.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
		Map fileInfoMap = fileInfo.get(0);  // 파일업로드 할 데이터 셋
		
    	Object fileSn = targetMap.get("FILE_SN");
    	
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
		List<Map> successFileSn = new ArrayList<Map>();
		
		try
		{
			if(upResult != null){				

				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				baseDao.insert("RNT01030100DAO.atchCUD", targetMap);
				successFileSn.add(targetMap);
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
		
		DataSetMap successMap = new DataSetMap();
		successMap.setRowMaps(successFileSn);
		
		outDataset.put("failList", failMap);
		outDataset.put("successList", successMap);
	}
	
	/**
	 * 파일순번 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void fileSnU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("RNT01030100DAO.fileSnU", map);
			
		}
	}  
	
	/**
	 * 재계약 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void rentReCntrctCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap inDsMap2 = (DataSetMap) inDataset.get("input2");
		Map inMap2 = null;
		if (inDsMap2 != null)
			inMap2 = inDsMap2.get(0);
		
		if(inMap.get("CNTRCTR_NO_YN").equals("계약가능") || "계약가능" == inMap.get("CNTRCTR_NO_YN")){
			//저장되어 있는 임대재계약 정보 조회
			Map tempMap = new HashMap<String, Object>();
			tempMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			tempMap.put("RENT_ENDDE_BFCHG", inMap.get("RENT_ENDDE_BFCHG"));
			List <Map> records;
			records = (List<Map>)baseDao.list("RNT01030100DAO.rentReCntrctR2", tempMap);
			
			//재계약생성시 생성된 보증금 순번 조회
			String gtnSn = (String) baseDao.select("RNT01030700DAO.selectGtnSn", records.get(0));
			
			//재계약생성시 생성된 보증금 삭제 
			inMap.put("GTN_SN", gtnSn);
			baseDao.insert("RNT01030700DAO.rentGtnD", inMap);
			
			
			baseDao.update("RNT01030100DAO.rentCntrctDeU", inMap);
			baseDao.update("RNT01030100DAO.rentReCntrctU", inMap);
			
			String qualfSeBfchg = (String) inMap.get("QUALF_SE_BFCHG");
			String qualfSe = (String) inMap.get("QUALF_SE");
			
			if(!qualfSeBfchg.equals(qualfSe)){
				//자격변경 로직 추가
				inMap.put("CNTRCT_CHANGE_SE", "03");					//계약변경구분
				inMap.put("CHANGE_DE", inMap.get("CNTRCT_DE"));			//계약변경구분
				inMap.put("QUALF_SE_AFTCH", inMap.get("QUALF_SE"));		//자격구분_변경후
				inMap.put("GTN_AFTCH", inMap.get("SUM_AMOUNT"));		//보증금_변경후
				inMap.put("RNTCHRG_AFTCH", inMap.get("RNTCHRG"));		//임대료_변경후
				
				baseDao.insert("RNT01030500DAO.saveRentQualChg", inMap);
				
				String changeNo = (String)baseDao.select("RNT01030500DAO.selectChangeNo", inMap);
				inMap2.put("CHANGE_NO", changeNo);
				
				baseDao.insert("RNT02000000DAO.saveDdcAmount", inMap2);
			}
			
			int gtnDfnnt = Integer.parseInt((String)inMap.get("SUM_AMOUNT")) - Integer.parseInt((String)inMap.get("GTN_BFCHG"));		// 보증금 차액
			
			//증액보증금 등록
			if(gtnDfnnt > 0){
				Map tempMap2 = new HashMap<String, Object>();
				tempMap2.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
				tempMap2.put("GTN_SN", gtnSn);
				
				int chkGtn = Integer.parseInt((String) baseDao.select("RNT01030700DAO.checkGtn", tempMap2));
				
				if(chkGtn < 1){
					inMap.put("GTN_DFNNT", gtnDfnnt);
					inMap.put("CHANGE_DE", inMap.get("CNTRCT_DE"));
					baseDao.insert("RNT01030700DAO.rentGtnC", inMap);
				}
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
					rqestMap.put( "IN_TR_DATE", (String)inMap.get("CNTRCT_DE"));				//거래일자
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
						rqestMap.put( "IN_TR_DATE", (String)inMap.get("CNTRCT_DE"));					//거래일자
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
					rqestMap.put( "IN_TR_DATE", (String)inMap.get("CNTRCT_DE"));				//거래일자
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
		}else {
			Map tempMap = new HashMap<String, Object>();
			tempMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			tempMap.put("RENT_ENDDE_BFCHG", inMap.get("RENT_ENDDE_BFCHG"));
			tempMap.put("FILE_SN", inMap.get("FILE_SN"));
			
			baseDao.update("RNT01030100DAO.rentReCntrctU", tempMap);
		}
	}
	
	/**
	 * 재계약 복원
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void rentReCntrctRevert(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap inDsMap2 = (DataSetMap) inDataset.get("input2");
		Map inMap2 = null;
		if (inDsMap2.size() != 0)
			inMap2 = inDsMap2.get(0);
		
		
		//저장되어 있는 임대재계약 정보 조회
		Map tempMap = new HashMap<String, Object>();
		tempMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
		tempMap.put("RENT_ENDDE_BFCHG", inMap.get("RENT_ENDDE_BFCHG"));
		List <Map> records;
		records = (List<Map>)baseDao.list("RNT01030100DAO.rentReCntrctR2", tempMap);
		
		//재계약생성시 생성된 보증금 순번 조회
		String gtnSn = (String) baseDao.select("RNT01030700DAO.selectGtnSn", records.get(0));
		
		//재계약생성시 생성된 보증금 삭제 
		inMap.put("GTN_SN", gtnSn);
		baseDao.delete("RNT01030700DAO.rentGtnD", inMap);
		
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
				rqestMap.put( "IN_TR_DATE", (String)inMap.get("TR_SDATE"));					//거래일자
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
					rqestMap.put( "IN_TR_DATE", (String)inMap.get("TR_SDATE"));						//거래일자
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
				rqestMap.put( "IN_TR_DATE", (String)inMap.get("TR_SDATE"));					//거래일자
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
				rqestMap.put( "IN_TR_DATE", (String)inMap.get("TR_SDATE"));					//거래일자
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
		
		Map tempMap2 = new HashMap<String, Object>();
		
		tempMap2.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
		tempMap2.put("CNTRCT_DE", inMap.get("CNTRCT_DE_BFCHG"));
		tempMap2.put("QUALF_SE", inMap.get("QUALF_SE_BFCHG"));
		tempMap2.put("RENT_BGNDE", inMap.get("RENT_BGNDE_BFCHG"));
		tempMap2.put("RENT_ENDDE", inMap.get("RENT_ENDDE_BFCHG"));
		tempMap2.put("GTN", inMap.get("GTN_BFCHG"));
		tempMap2.put("RNTCHRG", inMap.get("RNTCHRG_BFCHG"));
		
		baseDao.update("RNT01030100DAO.rentCntrctDeU", tempMap2);
		
		
		baseDao.update("RNT01030100DAO.rentReCntrctU", inMap);
		
		baseDao.delete("RNT01030500DAO.deleteRentQualChg", inMap2);
		baseDao.insert("RNT02000000DAO.deleteDdcAmount", inMap2);
		
	}
	
	// 재계약 파일 저장
	@SuppressWarnings({ "rawtypes", "unchecked", "null" })
	public void reCntrctAtchCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		Map targetMap = targetInfo.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
		Map fileInfoMap = fileInfo.get(0);  // 파일업로드 할 데이터 셋
		
    	Object fileSn = targetMap.get("FILE_SN");
    	
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
		List<Map> successFileSn = new ArrayList<Map>();
		
		try
		{
			if(upResult != null){				

				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				baseDao.insert("RNT01030100DAO.reCntrctAtchCUD", targetMap);
				successFileSn.add(targetMap);
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
		
		DataSetMap successMap = new DataSetMap();
		successMap.setRowMaps(successFileSn);
		
		outDataset.put("failList", failMap);
		outDataset.put("successList", successMap);
	}
	
	/**
	 * 파일순번 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void reCntrctFileSnU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("RNT01030100DAO.reCntrctAtchCUD", map);
			
		}
	}  
	
	// 자격변경 파일 저장
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void qualfChangeAtchCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		Map targetMap = targetInfo.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
		Map fileInfoMap = fileInfo.get(0);  // 파일업로드 할 데이터 셋
		
    	Object fileSn = targetMap.get("FILE_SN");
    	
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
		List<Map> successFileSn = new ArrayList<Map>();
		
		try
		{
			if(upResult != null){				

				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				baseDao.insert("RNT01030100DAO.qualfChangeAtchCUD", targetMap);
				successFileSn.add(targetMap);
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
		
		DataSetMap successMap = new DataSetMap();
		successMap.setRowMaps(successFileSn);
		
		outDataset.put("failList", failMap);
		outDataset.put("successList", successMap);
	}
	
	/**
	 * 자격변경 파일순번 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void qualfChangeFileSnU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("RNT01030100DAO.qualfChangeAtchCUD", map);
			
		}
	}  
	
	// 명의변경 파일 저장
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void nmChangeAtchCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
    	// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		Map targetMap = targetInfo.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
		Map fileInfoMap = fileInfo.get(0);  // 파일업로드 할 데이터 셋
		
    	Object fileSn = targetMap.get("FILE_SN");
    	
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
		List<Map> successFileSn = new ArrayList<Map>();
		
		try
		{
			if(upResult != null){				

				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				baseDao.insert("RNT01030100DAO.nmChangeAtchCUD", targetMap);
				successFileSn.add(targetMap);
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
		
		DataSetMap successMap = new DataSetMap();
		successMap.setRowMaps(successFileSn);
		
		outDataset.put("failList", failMap);
		outDataset.put("successList", successMap);
	}
	
	/**
	 * 명의변경 파일순번 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void nmChangeFileSnU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("RNT01030100DAO.nmChangeAtchCUD", map);
			
		}
	}  
	
	// 동호변경 파일 저장
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void houseChangeAtchCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
    	// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		Map targetMap = targetInfo.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
		Map fileInfoMap = fileInfo.get(0);  // 파일업로드 할 데이터 셋
		
    	Object fileSn = targetMap.get("FILE_SN");
    	
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
		List<Map> successFileSn = new ArrayList<Map>();
		
		try
		{
			if(upResult != null){				

				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				baseDao.insert("RNT01030100DAO.houseChangeAtchCUD", targetMap);
				successFileSn.add(targetMap);
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
		
		DataSetMap successMap = new DataSetMap();
		successMap.setRowMaps(successFileSn);
		
		outDataset.put("failList", failMap);
		outDataset.put("successList", successMap);
	}
	
	
	/**
	 * 동호변경 파일순번 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void houseChangeFileSnU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("RNT01030100DAO.houseChangeAtchCUD", map);
			
		}
	}  
	
	// 해약처리 파일 저장
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void resciAtchCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
    	// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	DataSetMap targetInfo = (DataSetMap)inDataset.get("input1");
		Map targetMap = targetInfo.get(0);  // 계약관리 테이블 파일번호를 업데이트하기 위한 조건 데이터셋
		Map fileInfoMap = fileInfo.get(0);  // 파일업로드 할 데이터 셋
		
    	Object fileSn = targetMap.get("FILE_SN");
    	
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
		List<Map> successFileSn = new ArrayList<Map>();
		
		try
		{
			if(upResult != null){				

				String resFileSn = String.valueOf(upResult.get("FILE_SN"));
				targetMap.put("FILE_SN", resFileSn);
				baseDao.insert("RNT01030100DAO.resciAtchCUD", targetMap);
				successFileSn.add(targetMap);
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
		
		DataSetMap successMap = new DataSetMap();
		successMap.setRowMaps(successFileSn);
		
		outDataset.put("failList", failMap);
		outDataset.put("successList", successMap);
	}

	/**
	 * 동호변경 파일순번 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void resciFileSnU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("RNT01030100DAO.resciAtchCUD", map);
			
		}
	} 

	/**
	 * 임대고객가족 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentPosesnThingList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030100DAO.rentPosesnThingList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 미납금액 목록(공제액)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectNonPaymentList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030100DAO.selectNonPaymentList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 계약취소
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void rentCntrctCancel(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
		
		//지원금 삭제
		baseDao.delete("RNT01030100DAO.rentGtnSportD", map);
		//보증금 삭제
		baseDao.delete("RNT01030100DAO.rentGtnD", map);
		//건축물정보 변경(계약자번호, 공급가능여부)
		baseDao.update("RNT01030100DAO.rentHouseBildU", map);
		//가족정보 변경(계약자번호)
		baseDao.update("RNT01030100DAO.rentFamilyMatterU", map);
		//소유물건 정보 변경(계약자번호)TBRNT_RENT_POSESN_THING
		baseDao.update("RNT01030100DAO.rentPosesnThingU", map);
		//입주대기자정보 변경(동, 호, 계약자번호)
		baseDao.update("RNT01030100DAO.mvnWaitrU", map);
		//계약삭제
		baseDao.delete("RNT01030100DAO.rentCntrctD", map);
		//가상계좌 변경
		baseDao.update("RNT01030100DAO.vaMastU", map);
	}
	
	/**
	 * 계약취소 확인(수납건 확인)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentCntrctCancelCheck( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030100DAO.rentCntrctCancelCheck", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
}
