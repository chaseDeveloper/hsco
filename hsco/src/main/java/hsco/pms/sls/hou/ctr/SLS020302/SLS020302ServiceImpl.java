package hsco.pms.sls.hou.ctr.SLS020302;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS020302ServiceImpl.java
 * @Description  	: 
 * @author       	: 변승우
 * @since        	: 2015. 8. 28.
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
 *  2015. 8. 28.					변승우				최초생성
 * </pre>
 */
@Service("SLS020302Service")
public class SLS020302ServiceImpl extends BaseService implements SLS020302Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	//@Resource(name = "SLS020302DAO")
	//private SLS020302DAO SLS020302DAO;
		
	/**
	 * 주택코드조회 조회영역사용
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void houseCodeSh( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS020302DAO.houseCodeSh", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	
	/**
	 * 자격구분 조회 조회영역사용
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void qualfDivList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS020302DAO.qualfDivList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	
	
	/**
	 * 자격구분 조회 조회영역사용
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void houseMvnWaitrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS020302DAO.houseMvnWaitrList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 자격구분 조회 조회영역사용
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void houseHcntrctrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS020302DAO.houseHcntrctrList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "rawtypes" })
	public File getDownloadFile( NexacroMapDTO xpDto) throws Exception {
		File downloadFile = null;
    	
    	Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
    	StringBuffer buffer = new StringBuffer();
    	String CRLF = "\r\n";
    	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    	String contents = "";
    	buffer.append("화성광역시 화성도시공사 주택전산자료 검색의뢰  의뢰일자 :" + sdf.format(new Date()));
    	buffer.append(CRLF);
		if (inDsMap != null){
			int size = inDsMap.size();
			for(int i=0; i<size; i++){
				inMap = inDsMap.get(i);
				buffer.append(inMap.get("DIV0"));
				buffer.append(inMap.get("DIV1"));
				buffer.append(String.format("%1$-13s", inMap.get("JUMIN_NO")));
				buffer.append(inMap.get("CSTMR_NM"));
				buffer.append(CRLF);
			}
		
			contents = buffer.toString();
			String downFileName = "주택소유조회결과.txt";
			
			downloadFile = new File(downFileName);
			
			OutputStreamWriter ow = new OutputStreamWriter(new FileOutputStream(downloadFile), "EUC-KR");
			BufferedWriter bw = new BufferedWriter(ow);

			bw.write(contents, 0, contents.length());
			
			bw.close();
		}
    	
    	return downloadFile;
	}	
}
