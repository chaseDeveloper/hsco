package hsco.pms.rnt.prm.RNT02040203;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
 * @Class Name   		: RNT02040203ServiceImpl.java
 * @Description  		: 월임대료 관리
 * @author     		  	: 변승우
 * @since       		 	: 2015. 11. 26.
 * @version    		  	: 1.0
 * @see          			: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 26.					변승우				최초생성
 * </pre>  
 */


@Service("RNT02040203Service")
public class RNT02040203ServiceImpl extends BaseService{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/**
	 * 매입임대 고객 세부사항 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPuchasRentCntrctDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02040203DAO.selectPuchasRentCntrctDetailList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);	
	}
	
	
	/**
	 * 매입임대 임대료 세부사항 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPuchasRntchrgList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02040203DAO.selectPuchasRntchrgList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);	
	}
	
	
	/**
	 * 매입임대 임대료 수납내역 조회 (팝업)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMtRntchrgPopList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02040203DAO.selectMtRntchrgPopList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);	
	}
	
	
	/**
	 * 매입임대 연체이자생성 (팝업)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void savePuchasRentMtRntchrgU(DataSetMap tranInfo, Map<String, Object> inVar,
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
						
			baseDao.update("RNT02040203DAO.savePuchasRentMtRntchrgU", map);
		}
	} 	
	
	/**
	 * 매입임대 연체이자생성 (팝업)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void savePuchasRentMtRntchrgChkU(DataSetMap tranInfo, Map<String, Object> inVar,
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
						
			baseDao.update("RNT02040203DAO.savePuchasRentMtRntchrgChkU", map);
		}
	}
	
	
	/**
	 * 매입임대 연체이자생성 (팝업)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void savePuchasRntchrgCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
				baseDao.insert("RNT02040203DAO.savePuchasRntchrgC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT02040203DAO.savePuchasRntchrgU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("RNT02040203DAO.savePuchasRntchrgD", map);
			}
		}
	} 
	
	
	/**
	 * 매입임대 text 파일저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void rentMtRntchrgU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01040203DAO.rentMtRntchrgU", map);
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
				buffer.append(inMap.get("PAY_TOTAL"));
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
}
