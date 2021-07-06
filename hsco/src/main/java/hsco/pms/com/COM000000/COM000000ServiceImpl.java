package hsco.pms.com.COM000000;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS020301ServiceImpl.java
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
 *  2015. 8.26.					   정윤원				작성자 변경
 * </pre>
 */
@Service("COM000000Service")
public class COM000000ServiceImpl extends BaseService implements COM000000Service {

	protected Logger log = LoggerFactory.getLogger(COM000000ServiceImpl.class);

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    @Resource(name = "FileUploadService")
    protected FileUploadServiceImpl fileUploadService;
    
    /* 파일 인코딩 */
    protected final static String FILE_ENCODING = "EUC-KR";

	/**
	 * 주택 코드 콤보 리스트.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectDeptCodeList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		if(log.isInfoEnabled()) log.info("selectDeptCodeList Started!");
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("COM000000DAO.selectDeptCodeList", inMap);
		} else {
			records = (List<Map>)baseDao.list("COM000000DAO.selectDeptCodeList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/* [BEGIN] 공통코드 관련 ======================================== */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectComCodeList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		for(int i = 0; i < listSize; i++) {
			
			Map codeItem = list.get(i);
			
			Map<String, Object> paramMap = new HashMap<String, Object>();
			
			String inGrpCode = (String)codeItem.get("GRP_CODE");
			String inUseAt = (String)codeItem.get("USE_AT");
			String inParamName = (String)codeItem.get("PARAM_NAME");
			String inParamValue = (String)codeItem.get("PARAM_VALUE");
			String outDSName = inGrpCode + "Code";
			
			// 조회 기본값 설정
			paramMap.put("GRP_CODE", inGrpCode);
			paramMap.put("USE_AT", inUseAt);
			
			// 기타 조회값 설정
			if(inParamName != null && inParamValue != null){
				String[] paramNmArr = inParamName.split(",");
				String[] paramVaArr = inParamValue.split(",");
				
				int paramNmArrLeng = paramNmArr.length;
				int paramVaArrLeng = paramVaArr.length;
				if(paramNmArrLeng != paramVaArrLeng){
					throw new NexaServiceException("조회조건명과 값의 수가 일치하지 않습니다.");
				}
				
				for(int j = 0; j < paramNmArrLeng; j++){
					paramMap.put(paramNmArr[j], paramVaArr[j]);
				}
			}
			
			// 데이터 조회
			List<Map> records = (List<Map>)baseDao.list("COM000000DAO.selectComCodeList", paramMap);
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put(outDSName, outDsMap);
		}
		
	}
	/* [ END ] 공통코드 관련 ======================================== */
	
	/* [BEGIN] 민원서류 관련 ======================================== */
	
	/**
	 * 민원서류 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectIssuFormatList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		resultList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("issuFormat", outDsMap);
	}
	
	/**
	 * 계약자별 서식 발급이력 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectIssuFormatLogList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		resultList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("issuFormatLog", outDsMap);
	}
	
	/**
	 * 계약자별 서식 발급이력 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void insertIssuFormatLog(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			
			inMap = inDsMap.get(0);
			
			try{
				
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
			
			}catch(Exception ex){
				
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				
				String exMsgId = null;
				String exMsgAdd = null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId = "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd = "서식 발급정보";
				}else{
					exMsgId = "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		
		}else{
			// {0} 없습니다.\\n{1} 확인 하시기 바랍니다.
			throw new NexaServiceException("errors.없음.요청","저장할 발급이력 정보가|발급서식 정보를");
		}
	}
	
	/* [ END ] 민원서류 관련 ======================================== */
	
	/* [BEGIN] 가상계좌 관리용 ======================================== */
	
	/**
	 * 사이버브랜치용 은행목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectCyberBankCodeList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("COM000000DAO.selectCyberBankCodeList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("cybBankCode", outDsMap);
	}
	
	/**
	 * 가상계좌 발급 및 상세내역 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectVaMastAllList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		// 가상계좌 발급 목록
		List<Map> vaMastList = (List<Map>)baseDao.list("COM000000DAO.selectVaMastList", inMap);
		
		// 가상계좌 입금내역 목록 조회
		List<Map> vaReceiptList = (List<Map>)baseDao.list("COM000000DAO.selectVaReceiptList", inMap);
		
		// 가상계좌 납부진행내역 목록 조회
		List<Map> vaBillList = (List<Map>)baseDao.list("COM000000DAO.selectVaBillList", inMap);
		
		// 가상계좌 납부진행상세내역 목록 조회
		List<Map> vaBillDetailList = (List<Map>)baseDao.list("COM000000DAO.selectVaBillDetailList", inMap);
		
		DataSetMap outVaMastDsMap = new DataSetMap();
		outVaMastDsMap.setRowMaps(vaMastList);
		outDataset.put("vaMast", outVaMastDsMap);
		
		DataSetMap outVaReceiptDsMap = new DataSetMap();
		outVaReceiptDsMap.setRowMaps(vaReceiptList);
		outDataset.put("vaReceipt", outVaReceiptDsMap);
		
		DataSetMap outVaBillDsMap = new DataSetMap();
		outVaBillDsMap.setRowMaps(vaBillList);
		outDataset.put("vaBill", outVaBillDsMap);
		
		DataSetMap outVaBillDetailDsMap = new DataSetMap();
		outVaBillDetailDsMap.setRowMaps(vaBillDetailList);
		outDataset.put("vaBillDetail", outVaBillDetailDsMap);
	}
	
	/**
	 * 가상계좌 발급 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectVaMastList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("COM000000DAO.selectVaMastList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("vaMast", outDsMap);
	}
	
	/**
	 * 가상계좌 입금내역 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectVaReceiptList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("COM000000DAO.selectVaReceiptList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("vaReceipt", outDsMap);
	}
	
	/**
	 * 가상계좌 납부진행내역 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectVaBillList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("COM000000DAO.selectVaBillList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("vaBill", outDsMap);
	}
	
	/**
	 * 가상계좌 납부진행상세내역 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectVaBillDetailList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("COM000000DAO.selectVaBillDetailList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("vaBillDetail", outDsMap);
	}
	
	/**
	 * 은행별 가상계좌 임대료 지정계좌 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectOptMastList(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}

		List<Map> resultList = null;
		
		resultList = (List<Map>)baseDao.list("COM000000DAO.selectOptMastList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("optMast", outDsMap);
		
	}
	
	/**
     * 가상계좌원장 옵션정보 변경
     *  - 가상계좌원장 옵션정보 변경(단건처리)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public int updateVaMastOptionInfo(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}
		
		// 동일은행에 임대료 지정계좌 목록 조회 
		List<Map> inMastList = (List<Map>)baseDao.list("COM000000DAO.selectOptMastList", inMap);
		int inMastLeng = inMastList == null ? 0 : inMastList.size();
		if(inMastLeng > 1){
			
			Map<String, Object> inMastItem = inMastList.get(0);
			String bankNm = (String)inMastItem.get("BANK_NM");
			
			throw new NexaServiceException("info.항목.중복", "해당은행(" + bankNm + ") 계좌 중 임대료지정계좌");
		}
		
		int iRow = baseDao.update("COM000000DAO.updateVaMastOptionInfo", inMap);
		
		return iRow;
	}
    
    /**
     * 데이터 파일(지정양식의 Text 파일)을 읽어 데이터 화 하여 반환한다.
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void getDataFromFile(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	NexacroMapDTO xpDto = getXpDto();
    	
    	Map<String, Object> readDataMap = getDataFromFile(xpDto);
    	boolean resultAt = Boolean.valueOf((String)readDataMap.get("RESULT_AT"));	// 처리 성공여부
    	
		if(resultAt){
			
			// header
			Map headerMap = (Map)readDataMap.get("DATA_HEADER");	// Header내용
			DataSetMap headDsMap = new DataSetMap();
			headDsMap.add(headerMap);
			
			// body
			List<Map> bodyList = (List<Map>)readDataMap.get("DATA_BODY");	// 데이터 목록
			DataSetMap bodyDsMap = new DataSetMap();
			bodyDsMap.setRowMaps(bodyList);
			
			// footer
			Map footerMap = (Map)readDataMap.get("DATA_FOOTER");	// Footer 내뇽
			DataSetMap footDsMap = new DataSetMap();
			footDsMap.add(footerMap);	
			
			outDataset.put("headInfo", headDsMap);
			outDataset.put("footInfo", footDsMap);
			outDataset.put("bodyList", bodyDsMap);
		
		}else{
			
			String resultMsg = (String)readDataMap.get("RESULT_MSG");
			// {0} 아닙니다. {1} 확인하세요
			throw new NexaServiceException("errors.값확인.요청", resultMsg + "|업로드 파일을");
			
		}   	
    }
    
    /**
     *  자동이체 데이터 파일(지정양식의 Text 파일)을 읽어 데이터 화 하여 반환한다.
     *  - Service to Service
     * @param xpDto
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public Map<String, Object> getDataFromFile(NexacroMapDTO xpDto) throws NexaServiceException {
    	
    	Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
    	
    	HttpServletRequest request = xpDto.getRequest();
    	
    	// 첨부파일 정보
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	
    	// 필드 매핑정보
    	DataSetMap fieldInfo = (DataSetMap)inDataset.get("inputField");
    	
    	// 조회 조건
    	DataSetMap inputInfo = (DataSetMap)inDataset.get("input1");
    	
    	String oriFileName = null;
		Map<String, Object> readDataMap = null;
    	if(fileInfo != null)
    	{
    		// 전달 데이터 파일 추출
    		MultipartHttpServletRequest mpRequest = (MultipartHttpServletRequest)request;
    		
    		// 업로드 파일 정보 추출
    		Iterator<String> iterFile = mpRequest.getFileNames();
    		
    		// [STEP 3] : 데이터 처리

    		// 파일의 내용을 데이터 화
			while(iterFile.hasNext())
			{
				String formName = (String)iterFile.next();
				
				MultipartFile multiFile = mpRequest.getFile(formName);
				oriFileName = multiFile.getOriginalFilename();
				
				// 파일 타입 구분
				String tmpFileName = oriFileName.toLowerCase();
				String fileType = "";
				if(tmpFileName.lastIndexOf(".txt") > -1) fileType = "txt";
				else fileType = null;
				
				if(fileType == null){
					// {0} 아닙니다. {1} 확인하세요
					throw new NexaServiceException("errors.값확인.요청", "허용된 파일형식(TXT)이|파일형식을");
				}
				
				/* TEXT 파일 처리  */
				if(fileType.equals("txt"))
				{
					try{
						
						if(fieldInfo == null){
							// {0} 아닙니다. {1} 확인하세요
							throw new NexaServiceException("errors.값확인.요청", "읽을 수 있는 파일이|매핑정보가 없습니다.매핑정보를");
						}else{
							Map inMap = inputInfo.get(0);
							readDataMap = getAtcngDataFromText(multiFile, fieldInfo, inMap);
						}
						
					}catch(Exception ex){
						throw new NexaServiceException("info.데이터.없음", ex);
					}
				}
			}
			
			if(readDataMap == null){
				throw new NexaServiceException("err.파일.업로드.정보없음");
			}
    	}else{
    		throw new NexaServiceException("err.파일.업로드.정보없음");
    	}
    	
    	return readDataMap;
    }

    /**
     *  현금영수증 데이터 파일(지정양식의 Text 파일)을 읽어 데이터 화 하여 반환한다.
     *  - Service to Service
     * @param xpDto
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ })
    public Map<String, Object> getCashDataFromFile(NexacroMapDTO xpDto) throws NexaServiceException {
    	
    	Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
    	
    	HttpServletRequest request = xpDto.getRequest();
    	
    	// 첨부파일 정보
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	
    	// 필드 매핑정보
    	DataSetMap fieldInfo = (DataSetMap)inDataset.get("inputField");
    	
    	// 기본 정보
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
    	
    	
    	String oriFileName = null;
		Map<String, Object> readDataMap = null;
    	if(fileInfo != null)
    	{
    		// 전달 데이터 파일 추출
    		MultipartHttpServletRequest mpRequest = (MultipartHttpServletRequest)request;
    		
    		// 업로드 파일 정보 추출
    		Iterator<String> iterFile = mpRequest.getFileNames();
    		
    		// [STEP 3] : 데이터 처리

    		// 파일의 내용을 데이터 화
			while(iterFile.hasNext())
			{
				String formName = (String)iterFile.next();
				
				MultipartFile multiFile = mpRequest.getFile(formName);
				oriFileName = multiFile.getOriginalFilename();
				
				// 파일 타입 구분
				String tmpFileName = oriFileName.toLowerCase();
				String fileType = "";
				
				String cutTmpFileName = tmpFileName.substring(4, tmpFileName.length());
				String creatDe = (String) inMap.get("CREAT_DE");
				String cutCreatDe = creatDe.substring(4, 8);
				
				if(tmpFileName.lastIndexOf(".") > -1) fileType = "txt";					// 현금영수증 파일 형식이 확장자가 없음
				else fileType = null;
				
				if(fileType != null){																							// 확장자 확인
					// {0} 아닙니다. {1} 확인하세요
					throw new NexaServiceException("errors.값확인.요청", "허용된 파일형식이|파일형식을");             
				} else if( ! cutTmpFileName.equals(cutCreatDe)){																// 생성일 / 사용자 화면일자 확인
					String subCreatDe = creatDe.substring(0,4) + "-" +creatDe.substring(4,6) +"-" +creatDe.substring(6,8);
					String resultMsg = "해당 생성일 [" +subCreatDe+ "] 과 일치하는 파일이";
					// {0} 아닙니다. {1} 확인하세요
					throw new NexaServiceException("errors.값확인.요청", resultMsg + "|업로드 파일을");
				} else if(multiFile.getSize() == 0){																			// 데이터가 없는 파일(오류항목이 없음) 반영시
					
					List<Map> bodyList = new ArrayList<Map>();
					Map<String, Object> bodyItem = new HashMap<String, Object>();
					
					bodyItem.put("DATA_YN","Y");					// 데이터 없는 파일(오류항목이 없음) 반영 여부
					bodyItem.put("CREAT_DE", creatDe);
					
					bodyList.add(bodyItem);
					
					// 처리결과 담기
					boolean isEntrpsCode = true;
					String resultMsg = isEntrpsCode ? "정상" : "해당 부서의 파일이";
					readDataMap = new HashMap<String, Object>();
					readDataMap.put("RESULT_AT", String.valueOf(isEntrpsCode));	// 데이터 처리 결과 구분
					readDataMap.put("RESULT_MSG", resultMsg);		// 처리 메시지
					
					// 처리 데이터 담기
					readDataMap.put("DATA_BODY", bodyList);
					
					return readDataMap;								// 데이터 파싱을 하지 않고 바로 return 을 함.
				}
				
				
				/* TEXT 파일 처리  */
				if(fileType == null || fileType.equals(""))
				{
					try{
						
						if(fieldInfo == null){
							// {0} 아닙니다. {1} 확인하세요
							throw new NexaServiceException("errors.값확인.요청", "읽을 수 있는 파일이|매핑정보가 없습니다.매핑정보를");
						}else{
							readDataMap = getCashDataFromText(multiFile, fieldInfo);
						}
						
					}catch(Exception ex){
						throw new NexaServiceException("info.데이터.없음", ex);
					}
				}
			}
			
			if(readDataMap == null){
				throw new NexaServiceException("err.파일.업로드.정보없음");
			}
    	}else{
    		throw new NexaServiceException("err.파일.업로드.정보없음");
    	}
    	
    	return readDataMap;
    }    
    
    /**
     * 데이터파일의 내용을 데이터화 하여 반환한다.
     *  - 매핑정보가 있을 경우 처리
     * @param file
     * @param fieldInfo
     * @param inputMap
     * @return
     * @throws Exception
     */
    @SuppressWarnings({"rawtypes" })
    public Map<String, Object> getAtcngDataFromText(MultipartFile file, DataSetMap fieldInfo, Map inputMap) throws NexaServiceException
	{
    	try{
	    	List<Map> fieldInfoList = fieldInfo.getRowMaps();
	    	
	    	Map<String, Object> resultMap = null;
			
			Map<String, Object> headerMap = null;	
			Map<String, Object> footerMap = null;
			List<Map> bodyList = null;
			
			InputStream is = file.getInputStream();
			InputStreamReader isr = new InputStreamReader(is, FILE_ENCODING);	// 파일 인코딩을 설정하여 로딩
			BufferedReader br = new BufferedReader(isr);
			
			String lineString;			// 라인 문자열
			String lnType = null;		// 라인구분 (S, D, E)
			
			boolean isEntrpsCode = true;
			byte[] lnStr;
			while((lineString = br.readLine()) != null)
			{
				lnStr = lineString.getBytes(FILE_ENCODING);		// 행데이너 바이트 변환
				
				lnType = new String(lnStr, 0, 1, FILE_ENCODING);				// 행 데이터 구분
				
				int i = 0;
				int fieldInfoListSize = fieldInfoList == null ? 0 : fieldInfoList.size();
				
				Map mItem = null;
				
				String mDataSe = null;		// 데이터구분 : 라인구분 (S, D, E)
				String mFieldName = null;	// 필드명
				int mStIdx = -1;			// 시작 인뎃스
				int mByteLeng = -1;			// 바이트 길이
				String mDataType = null;	// 데이터 타입
				
				String strValue = null;		// 추출값
				
				Map<String, Object> bodyItem = null;
				for(i = 0; i < fieldInfoListSize; i++)
				{
					mItem = (Map)fieldInfoList.get(i);
					
					mDataSe = (String)mItem.get("DATA_SE");
					mFieldName = (String)mItem.get("FIELD_NAME");
					mStIdx = Integer.parseInt((String)mItem.get("ST_IDX"));
					mByteLeng = Integer.parseInt((String)mItem.get("BT_LENGTH"));
					mDataType = ((String)mItem.get("DATA_TYPE")).toUpperCase();
					
					if(StringUtil.isNull(mDataType)){
						mDataType = "STRING";
					}
					
					if(lnType.equals(mDataSe)){
					
						if("INT".equals(mDataType)){
							// 숫자형의 데이터는 byte[] > String > long > String 으로 변환
							long longVlaue = Long.parseLong(new String(lnStr, mStIdx, mByteLeng, FILE_ENCODING).trim());
							
							strValue = String.valueOf(longVlaue);
						}else if("HAN".equals(mDataType)){
							strValue = new String(lnStr, mStIdx, mByteLeng, FILE_ENCODING).trim();
						}else{
							strValue = new String(lnStr, mStIdx, mByteLeng, "UTF-8").trim();
						}
						
						// HEADER 부분
						if("S".equals(lnType)){
							if(headerMap == null){
								headerMap = new HashMap<String, Object>();
							}
						
							headerMap.put(mFieldName, strValue);
						}
						
						// BODY 부분
				        if("D".equals(lnType)){
				        	
				        	if(bodyItem == null){
				        		bodyItem = new HashMap<String, Object>();
				        	}
				        	
				        	bodyItem.put(mFieldName, strValue);
				        }
						
						// FOOTER 부분
				        if("E".equals(lnType)){
				        	if(footerMap == null){
				    			footerMap = new HashMap<String, Object>();
							}
						
							footerMap.put(mFieldName, strValue);
				        }
						
					}
				}
				
				// 헤더부 업체코드 확인
				// 파라메터로 전달된 업체코드와 헤더부의 업체코드값이 동인한지 확인
				/**
				 	this.ds_cond00.setColumn(0, "INSTT_CODE", this.SAM_INSTT_CODE);					// 기관코드
					this.ds_cond00.setColumn(0, "ENTRPS_CODE", this.SAM_ENTRPS_CODE);				// 업체코드
					this.ds_cond00.setColumn(0, "INSTT_CODE_FIELD", this.SAM_INSTT_CODE_FIELD);		// 기관코드 필드명
					this.ds_cond00.setColumn(0, "ENTRPS_CODE_FIELD", this.SAM_ENTRPS_CODE_FIELD);	// 업체코드 필드명
				 */
				if("S".equals(lnType)){
					if(inputMap != null){
						
						String inEntrpsCode = (String)inputMap.get("ENTRPS_CODE");				// 조건 업체코드
						String inEntrpsCodeField = (String)inputMap.get("ENTRPS_CODE_FIELD");	// 조건 업체코드 필드명
						String outEntrpsCode = (String)headerMap.get(inEntrpsCodeField);		// 파일 업체코드
						
						if(!inEntrpsCode.equals(outEntrpsCode)){	
							isEntrpsCode = false;
							break;
						}
					}
				}
				
				if("D".equals(lnType) && bodyItem != null){
					
					if(bodyList == null){
						bodyList = new ArrayList<Map>();
					}
					
					bodyList.add(bodyItem);
				}
			}
			
			br.close();
			
			if(resultMap == null){
				resultMap = new HashMap<String, Object>();
			}
			
			// 처리결과 담기
			String resultMsg = isEntrpsCode ? "정상" : "해당 부서의 파일이";
			resultMap.put("RESULT_AT", String.valueOf(isEntrpsCode));	// 데이터 처리 결과 구분
			resultMap.put("RESULT_MSG", resultMsg);		// 처리 메시지
			
			// 처리 데이터 담기
			resultMap.put("DATA_HEADER", headerMap);
			resultMap.put("DATA_BODY", bodyList);
			resultMap.put("DATA_FOOTER", footerMap);
			
			return resultMap;
    	} catch(RuntimeException re){
    		throw new NexaServiceException("err.파일.업로드.실패", re);
    	} catch(Exception ex)
    	{
    		throw new NexaServiceException("err.파일.업로드.실패", ex);
    	}
	}

    /**
     * (현금영수증)데이터파일의 내용을 데이터화 하여 반환한다.
     *  - 매핑정보가 있을 경우 처리
     * @param file
     * @param fieldInfo
     * @param inputMap
     * @return
     * @throws Exception
     */
    @SuppressWarnings({"rawtypes" })
    public Map<String, Object> getCashDataFromText(MultipartFile file, DataSetMap fieldInfo) throws NexaServiceException
	{
    	try{
	    	List<Map> fieldInfoList = fieldInfo.getRowMaps();
	    	Map<String, Object> resultMap = null;
			
			List<Map> bodyList = null;
			
			
			InputStream is = file.getInputStream();
			InputStreamReader isr = new InputStreamReader(is, FILE_ENCODING);	// 파일 인코딩을 설정하여 로딩
			BufferedReader br = new BufferedReader(isr);
			
			String lineString;			// 라인 문자열
			String lnType = null;		// 라인구분 (S, D, E)
			
			
			
			boolean isEntrpsCode = true;
			byte[] lnStr;
			
			while((lineString = br.readLine()) != null)
			{
				lnStr = lineString.getBytes(FILE_ENCODING);		// 행데이터 바이트 변환
				
				int lnStrLength = lnStr.length;					// 1개의 행으로 이뤄진 파일
				int devLnStr = lnStrLength/150;					// 150byte 단위로 행을 구분
							
				
				for(int j =0; j< devLnStr;j++){
				
					lnType = new String(lnStr, (150*j), 1, FILE_ENCODING);				// 행 데이터 구분
					int i = 0;
					int fieldInfoListSize = fieldInfoList == null ? 0 : fieldInfoList.size();
					Map mItem = null;
					String mDataSe = null;		// 데이터구분 : 라인구분 (S, D, E)
					String mFieldName = null;	// 필드명
					int mStIdx = -1;			// 시작 인뎃스
					int mByteLeng = -1;			// 바이트 길이
					String mDataType = null;	// 데이터 타입
					
					String strValue = null;		// 추출값
					
								
					Map<String, Object> bodyItem = null;
				
				
					for(i = 0; i < fieldInfoListSize; i++)
					{
						mItem = (Map)fieldInfoList.get(i);
	
						mDataSe = (String)mItem.get("DATA_SE");
						mFieldName = (String)mItem.get("FIELD_NAME");
						mStIdx = (j*150) + Integer.parseInt((String)mItem.get("ST_IDX"));
						mByteLeng = Integer.parseInt((String)mItem.get("BT_LENGTH"));
						mDataType = ((String)mItem.get("DATA_TYPE")).toUpperCase();
						if(StringUtil.isNull(mDataType)){
							mDataType = "STRING";
						}
						if(lnType.equals(mDataSe)){
						//if("D".equals(mDataSe)){
							if("INT".equals(mDataType)){
								// 숫자형의 데이터는 byte[] > String > long > String 으로 변환
								long longVlaue = Long.parseLong(new String(lnStr, mStIdx, mByteLeng, FILE_ENCODING).trim());
								
								strValue = String.valueOf(longVlaue);
							}else if("HAN".equals(mDataType)){
								strValue = new String(lnStr, mStIdx, mByteLeng, FILE_ENCODING).trim();
							}else{
								strValue = new String(lnStr, mStIdx, mByteLeng, "UTF-8").trim(); // 디폴트 인코딩을 UTF-8로 설정함(Code Inspection 테스트 필요)
								
							}
							
							// BODY 부분
					        if("D".equals(lnType)){
							//if("D".equals(mDataSe)){
					        	if(bodyItem == null){
					        		bodyItem = new HashMap<String, Object>();
					        	}
					        	bodyItem.put(mFieldName, strValue);
					        	bodyItem.put("DATA_YN", "N");
					        }						
							
						}
					}
				
				
					if("D".equals(lnType) && bodyItem != null){
					//if("D".equals(mDataSe) && bodyItem != null){	
						if(bodyList == null){
							bodyList = new ArrayList<Map>();
						}
					
					System.out.println(j);	
						bodyList.add(bodyItem);
					}
				}
			}
			
			br.close();
			
			if(resultMap == null){
				resultMap = new HashMap<String, Object>();
			}
			
			// 처리결과 담기
			String resultMsg = isEntrpsCode ? "정상" : "해당 부서의 파일이";
			resultMap.put("RESULT_AT", String.valueOf(isEntrpsCode));	// 데이터 처리 결과 구분
			resultMap.put("RESULT_MSG", resultMsg);		// 처리 메시지
			
			// 처리 데이터 담기
			resultMap.put("DATA_BODY", bodyList);			// header, footer 데이터는 사용 안함. body 데이터만 return
			
			return resultMap;
    	} catch(RuntimeException re){
    		throw new NexaServiceException("err.파일.업로드.실패", re);
    	} catch(Exception ex)
    	{
    		throw new NexaServiceException("err.파일.업로드.실패", ex);
    	}
	}
    
    /**
     * 첨부파일을 업로드하고 공통 첨부파일정보에 저장한 정보를 반환한다.
     * @param file
     * @param fieldInfo
     * @param inputMap
     * @return
     * @throws Exception
     */
    @SuppressWarnings({"rawtypes", "unchecked" })
    public void uploadFile(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	// 파일 첨부확인
    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
    	Map<String, Object> upResult = null;
    	if(fileInfo != null){
    		
    		NexacroMapDTO xpDto = getXpDto();
    		fileUploadService.setFileLocation(getFileLocation());
    		
    		/**
    		  	resultMap.put("FILE_SN", strFileSn);			// 파일 일련번호
				resultMap.put("FILE_ORDR", fileOrdr);			// 상세 파일순차 번호(최종)
				resultMap.put("UP_FILE_CNT", upFileListSize);	// 파일 수
				resultMap.put("UP_FILE_LIST", resultFileList);	// 업로드 파일 정보
    		 */
    		upResult = (Map<String, Object>)fileUploadService.uploadSingleFileinfo(xpDto);
    		
    		List<Map> resultList = (List<Map>)upResult.get("UP_FILE_LIST");
    		
    		DataSetMap outDsMap = new DataSetMap();
    		outDsMap.setRowMaps(resultList);
    		outDataset.put("fileList", outDsMap);
    		
    	}else{
    		throw new NexaServiceException("err.파일.업로드.정보없음");
    	}
    }
    
    /**
     * 신규 가상계좌 등록
     * @param inMap
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public void insertVaMast(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    
    	// 전달값 확인
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}
    	
    	// 가상계좌 등록용 맵으로 변환
    	/*
    	 IN_CRT_DIV    		IN VA_MAST.CRT_DIV%TYPE,   					- 부서구분( SL:주택, LN:토지, RN:영구임대 관리비외, MA:영구임대 관리비)
	  	 IN_BANK_CD    		IN VA_MAST.BANK_CD%TYPE,   					- 은행코드
	  	 IN_CUST_ID    		IN TBSLS_HCNTRCTR.CNTRCTR_NO%TYPE, 			- 계약자정보( TBSLS_HCNTRCTR )
	  	 IN_HOUSE_CODE  	IN TBRNT_RENT_HOUSE.RENT_HOUSE_CODE%TYPE, 	- 영구임대주택마스터(TBRNT_RENT_HOUSE)
	  	 IN_ACCT_DIV   		IN VA_MAST.OPT1%TYPE,              			- 작업구분('1' - 임대료 전용계좌 )
	  	 IN_FIRST_ENTRY 	IN TBSLS_HCNTRCTR.REGISTER_ID%TYPE,  		- REGISTER_ID
	  	 IN_BJ_YN  VARCHAR2  := ' ' 									- 보증금전용계좌 등록
    	 */
		
		// 아래 Object 선언을 String으로 선언하는 것이 보다 타당한 것으로 판단됨(Code Inspection 결과).
    	Object crt_div = null;
    	Object bank_cd = null;
    	Object cust_cd = null;
    	Object house_code = null;
    	Object acct_div = null;
    	Object first_entry = null;
    	Object bj_yn = null;
    	
    	Map<String, Object> paramMap = new HashMap<String, Object>();
		
    	
    	// Code Inspection에 따른 조치( NullPointerException이 발생에 따른 리팩토링)
    	if(inMap == null){
    		throw new NexaServiceException("조회조건이 없습니다!");
    	} else {
			// 부서구분( SL:주택, LN:토지, RN:영구임대 관리비외, MA:영구임대 관리비)
			if(inMap.get("CRT_DIV") == null) throw new NexaServiceException("부서구분이 없습니다.");
			crt_div = inMap.get("CRT_DIV");
			paramMap.put("IN_CRT_DIV", crt_div);
			
			// 계약자번호
			if(inMap.get("CUST_CD") == null) throw new NexaServiceException("계약번호가 없습니다.");
			cust_cd = inMap.get("CUST_CD");
			paramMap.put("IN_CUST_ID", cust_cd);
			
			// 주택(토지)코드
			if(inMap.get("HOUSE_CODE") == null) {
				house_code = ""; // (Code Inspection)
			} else {
				house_code = inMap.get("HOUSE_CODE");
			}
			paramMap.put("IN_HOUSE_CODE", house_code);
			
			// 은행코드
			if(inMap.get("BANK_CD") == null) {
				bank_cd = "";
			} else {
				bank_cd = inMap.get("BANK_CD");
			}
			paramMap.put("IN_BANK_CD", bank_cd);
			
			// 대표계좌여부('1' - 임대료 전용계좌 )
			if(inMap.get("ACCT_DIV") == null){
				acct_div = "0";
			} else {
				acct_div = inMap.get("ACCT_DIV");
			}
			paramMap.put("IN_ACCT_DIV", acct_div);
			
			// 보증금전용계좌 등록 여부
			if(inMap.get("BJ_YN") == null){
				bj_yn = "0";
			} else {
				bj_yn = inMap.get("BJ_YN");
			}
			paramMap.put("IN_BJ_YN", bj_yn);
			
	    	// 최초등록자
			first_entry = ObjectUtil.getSessionObj("S_USER_ID");
			paramMap.put("IN_FIRST_ENTRY", first_entry);
		} 
		
		
		baseDao.insert("COM000000DAO.SP_VA_MAST_U", paramMap);
		
		List<Map> resultList = new ArrayList<Map>();	
		resultList.add(paramMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("output1", outDsMap);
    	
    }
    
    /* [ END ] 가상계좌 관리용 ======================================== */

    
    
    
    
	/* 각종현황 및 분석표 조회  결의번호 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectDecsn(DataSetMap tranInfo, Map<String, Object> inVar, 
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, 
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("COM000000DAO.selectDecsn", inMap);
		} else {
			records = (List<Map>)baseDao.list("COM000000DAO.selectDecsn", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}    
    
    /* 각종현황 및 분석표 조회  결의번호 등록 */
	@SuppressWarnings("rawtypes")
	public void insertDecsn(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		String sqlId = null;
		String forceFlag = null;
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);				
			baseDao.insert("COM000000DAO.insertDecsn", map);
		}
	}	    
    
}
