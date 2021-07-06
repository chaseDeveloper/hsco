package hsco.pms.rnt.pra.RNT01031000;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT01031000ServiceImpl.java
 * @Description  	: 주택소유조회
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
@Service("RNT01031000Service")
public class RNT01031000ServiceImpl extends BaseService{
	/**
	 * 소유물건정보 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentPosesnThingPopList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		String get_gubun = (String)inMap.get("gubun");
		List <Map> records = null;
		
		if ("1".equals(get_gubun)) {
			// 전체 계약자 조회
			records = (List<Map>)baseDao.list("RNT01031000DAO.rentPosesnThingPopList", inMap);
		}else if ("2".equals(get_gubun)) {
			// 재계약자 조회
			records = (List<Map>)baseDao.list("RNT01031000DAO.rentPosesnThingPopList2", inMap);
		}else if ("3".equals(get_gubun)) {
			// 입주대기자 조회
			records = (List<Map>)baseDao.list("RNT01031000DAO.rentPosesnThingPopList3", inMap);
		}
		
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
				buffer.append(inMap.get("DIV1"));
				buffer.append(inMap.get("DIV2"));
				buffer.append(inMap.get("IHIDNUM"));
				buffer.append(inMap.get("NM"));
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
