package hsco.pms.rnt.pra.RNT01040203;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT01040203ServiceImpl.java
 * @Description  	: 월임대료관리
 * @author       	: 지효정
 * @since        	: 2015. 11. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 16.					지효정				최초생성
 * </pre>  
 */
@Service("RNT01040203Service")
public class RNT01040203ServiceImpl extends BaseService{
	
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
		List <Map> records = (List<Map>)baseDao.list("RNT01040203DAO.rentMtRntchrgList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 임대료 수납 목록 (팝업)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentMtRntchrgPopList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01040203DAO.rentMtRntchrgPopList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 임대료 연체이자 생성
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void rentMtRntchrgU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			//if ( rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01040203DAO.rentMtRntchrgU", map);
			//}
		}
	}
	
	/**
	 * 임대료 연체이자 생성(CHK)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void rentMtRntchrgChkU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			//if ( rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01040203DAO.rentMtRntchrgChkU", map);
			//}
		}
	}
	
	/**
	 * 보증금 연체이자 생성
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void rentGtnMtRntchrgU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			//if ( rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01040203DAO.rentGtnMtRntchrgU", map);
			//}
		}
	}
	
	/**
	 * 고지서내역조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentMtRntNhtSheetInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01040203DAO.rentMtRntNhtSheetInfo", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 	
	
	
	/**
	 * 영구임대 월임대료 신규,추가,삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void saveRentRntchrgCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
				baseDao.insert("RNT01040203DAO.saveRentRntchrgC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01040203DAO.saveRentRntchrgU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("RNT01040203DAO.saveRentRntchrgD", map);
			}
		}
	} 	
	
	//텍스트파일다운로드
	@SuppressWarnings({ "rawtypes" })
	public File getDownloadFile( NexacroMapDTO xpDto) throws Exception {
		
		File downloadFile = null;
    	
    	Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
    	StringBuffer buffer = new StringBuffer();
    	String CRLF = "\r\n";
    	//SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    	String contents = "";    	
    	String downFileName = "";
    	
    	if (inDsMap != null){
			int size = inDsMap.size();
			
			for(int i=0; i<size; i++){
				inMap = inDsMap.get(i);
				
				buffer.append(inMap.get("TITLE"));
				buffer.append(CRLF);
				buffer.append(CRLF);
				buffer.append(inMap.get("CSTMR_NM"));
				buffer.append(CRLF);
				buffer.append(CRLF);
				buffer.append(inMap.get("PAY_TMLMT"));
				buffer.append(CRLF);
				buffer.append(CRLF);
				buffer.append(inMap.get("TOTAL_AMOUNT_SUM"));
				buffer.append(CRLF);
				buffer.append(CRLF);
				buffer.append(inMap.get("RNTCHRG"));
				buffer.append(CRLF);
				buffer.append(CRLF);
				buffer.append(inMap.get("TOTAL_AMOUNT"));
				buffer.append(CRLF);
				buffer.append(CRLF);
				buffer.append(inMap.get("OVDINTR_SUM"));
				buffer.append(CRLF);
				buffer.append(CRLF);
				buffer.append(inMap.get("ETC1"));
				buffer.append(CRLF);
				buffer.append(CRLF);
				buffer.append(inMap.get("ETC2"));
				buffer.append(CRLF);
				buffer.append(CRLF);
				buffer.append(inMap.get("ETC3"));
				buffer.append(CRLF);
				
				downFileName = inMap.get("FILE_NM").toString();
			}
		
			contents = buffer.toString();
			//String downFileName = "임대료 납부.txt";
			
			downloadFile = new File(downFileName);
			
			OutputStreamWriter ow = new OutputStreamWriter(new FileOutputStream(downloadFile), "EUC-KR");
			BufferedWriter bw = new BufferedWriter(ow);

			bw.write(contents, 0, contents.length());
			
			bw.close();
		}
    	
    	return downloadFile;
	}
	
	/**
	 * 사용자 고지서 내역조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectUserNoticeSheetReportList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		
        if(inMap != null){
        	String sParam = (String)inMap.get("NHT_SN");
    		inMap.put("ARR_NHT_SN", sParam.split(","));
        }		
		
		List <Map> records = (List<Map>)baseDao.list("RNT01040203DAO.selectUserNoticeSheetReportList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 		
}
