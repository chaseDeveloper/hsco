package hsco.pms.cmp.CMP050300;

import java.text.DateFormat;
import java.util.List;
import java.util.Map;
import java.io.File;
import java.io.FileOutputStream;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.DateUtil;

@Service("CMP050300Service")
public class CMP050300ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(CMP050300ServiceImpl.class);

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectDetailDataList(DataSetMap tranInfo,
			Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset)throws NexaServiceException {
		
		if(log.isInfoEnabled()) log.info("selectDetailDataList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050300DAO.selectDetailDataList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	
	public void aceptncAdjdcCU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		for (int x = 0; x < list.size(); x++) {

			@SuppressWarnings("unchecked")
			Map<String, Object> map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			if (rowType == DataSet.ROW_TYPE_INSERTED) {
				int cnt = (Integer)baseDao.select("CMP050300DAO.aceptncAdjdcCnt", map);
				if(cnt == 1){
					baseDao.update("CMP050300DAO.aceptncAdjdcU", map);
				}else{
					baseDao.insert("CMP050300DAO.aceptncAdjdcC", map);
				}
			} else if (rowType == DataSet.ROW_TYPE_UPDATED) {
				baseDao.update("CMP050300DAO.aceptncAdjdcU", map);
			}
		}
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tab01List(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050300DAO.tab01List", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tab02List(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050300DAO.tab02List", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tab03List(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050300DAO.tab03List", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tab04List(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050300DAO.tab04List", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tab05List(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050300DAO.tab05List", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tab06List(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050300DAO.tab06List", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tab07List(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050300DAO.tab07List", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tab08List(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050300DAO.tab08List", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tab09List(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050300DAO.tab09List", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tab10List(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CMP050300DAO.tab10List", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//텍스트파일다운로드
	@SuppressWarnings({ "rawtypes" })
	public File getDownloadFile( NexacroMapDTO xpDto) throws Exception { 
		File downloadFile = null;
    	 
    	Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	DataSetMap inDsMap2 = (DataSetMap)inDataset.get("input2");
    	
    	Map inMap = null;
    	Map inMap2 = null;
    	
    	StringBuffer buffer = new StringBuffer();
    	String CRLF = "\r\n";
    	String savedt = DateUtil.getFormatString("yyyyMMddHHmmss");//   
    	String contents = "";    	
    	String downFileName = "";
    			 
    	if (inDsMap != null){
			int size = inDsMap.size();
		
			inMap2 = inDsMap2.get(0);
			String tabNm = (String)inMap2.get("tabname");
  		 			 
		 	if(tabNm.equals("접수메인")){
				buffer.append("SEQ^인증번호^사업시행자Key^사업명^재결구분^사업유형코드^사업유형명^시도구분^사업인정일^사업시작일^사업종료일^사업시행자명^사업시행자문서번호^담당자명^담당자전화번호^담당자핸드폰번호^담당자이메일^사업시행자금액^필지수^면적^소유자수^관계인수^토지금액^비고");				
				for(int i=0; i<size; i++){
					inMap = inDsMap.get(i);				
					String tmpStr = inMap.get("SEQ")+"^"+inMap.get("CERTNO")+"^"+inMap.get("CUSTKEY")+"^"+inMap.get("TITLE")+"^"+inMap.get("CATEGORY")+"^"+inMap.get("WORKINFO")+"^"+inMap.get("MATERIAL")+"^"+inMap.get("REGION")+"^"+inMap.get("APPROVAL")+"^"+inMap.get("APPROVALBEGIN")+"^"+inMap.get("APPROVALEND")+"^"+inMap.get("CUSTNAME")+"^"+inMap.get("CUSTDOCID")+"^"+inMap.get("CHARGENAME")+"^"+inMap.get("CHARGETEL")+"^"+inMap.get("CHARGEHP")+"^"+inMap.get("CHARGEEMAIL")+"^"+inMap.get("CUSTPRICE")+"^"+inMap.get("LANDCOUNT")+"^"+inMap.get("LANDAREA")+"^"+inMap.get("LANDOWNERS")+"^"+inMap.get("LANDRIGHTS")+"^"+inMap.get("LANDPRICE")+"^"+inMap.get("BIGO");
					buffer.append(CRLF);
					buffer.append(tmpStr);
					downFileName = tabNm;
				}
		 	}else if(tabNm.equals("소유자")){
		 		buffer.append("ID^MASTER_SEQ^사업시행자키^성명^우편번호^주소^주소상세^실제우편번호^실제주소^상세실제주소^비고");		 		
				for(int i=0; i<size; i++){ 
					inMap = inDsMap.get(i);
					String tmpStr = inMap.get("ID")+"^"+inMap.get("MASTERID")+"^"+inMap.get("CUSTKEY")+"^"+inMap.get("NAME")+"^"+inMap.get("ZIPCODE")+"^"+inMap.get("ADDR1")+"^"+inMap.get("ADDR2")+"^"+inMap.get("SILZIPCODE")+"^"+inMap.get("SILADDR1")+"^"+inMap.get("SILADDR2")+"^"+inMap.get("BIGO");					
					buffer.append(CRLF);
					buffer.append(tmpStr);					
					downFileName = tabNm;
				}		 		
		 	}else if(tabNm.equals("관계인")){
		 		buffer.append("ID^MASTER_SEQ^사업시행자키^성명^권리의종류^우편번호^주소^주소상세^실제우편번호^실제주소^상세실제주소^비고");
				for(int i=0; i<size; i++){
					inMap = inDsMap.get(i);
					String tmpStr = inMap.get("ID")+"^"+inMap.get("MASTERID")+"^"+inMap.get("CUSTKEY")+"^"+inMap.get("NAME")+"^"+inMap.get("GKR")+"^"+inMap.get("ZIPCODE")+"^"+inMap.get("ADDR1")+"^"+inMap.get("ADDR2")+"^"+inMap.get("SILZIPCODE")+"^"+inMap.get("SILADDR1")+"^"+inMap.get("SILADDR2")+"^"+inMap.get("BIGO");					
					buffer.append(CRLF);
					buffer.append(tmpStr);					
					downFileName = tabNm;
				}		 		
		 	}else if(tabNm.equals("토지")){
		 		buffer.append("ID^MASTER_SEQ^일련번호^사업시행자키^시군구코드^읍면동코드^산^본번^부번^번외^소재지^공부지목명^현황지목명^면적^사업시행자단가");
				for(int i=0; i<size; i++){
					inMap = inDsMap.get(i);
					String tmpStr = inMap.get("ID")+"^"+inMap.get("MASTERID")+"^"+inMap.get("SEQ")+"^"+inMap.get("CUSTKEY")+"^"+inMap.get("REG")+"^"+inMap.get("EUB")+"^"+inMap.get("SAN")+"^"+inMap.get("BUN1")+"^"+inMap.get("BUN2")+"^"+inMap.get("BUN3")+"^"+inMap.get("ADDR")+"^"+inMap.get("GM1")+"^"+inMap.get("GM2")+"^"+inMap.get("AREA")+"^"+inMap.get("PRICEK");					
					buffer.append(CRLF);
					buffer.append(tmpStr);										
					downFileName = tabNm;
				}		 		
		 	}else if(tabNm.equals("토지소유자&관계인관계")){
		 		buffer.append("ID^MASTERID^토지ID^구분^사업시행자키^소유자ID^소유자명^관계인ID^관계인명^권리종류^지분^사업시행자금액^법인A명^법인A사업자번호^법인A단가^법인A금액^법인B명^법인B사업자번호^법인B단가^법인B금액^평균단가^평균금액");
				for(int i=0; i<size; i++){
					inMap = inDsMap.get(i);
					String tmpStr = inMap.get("ID")+"^"+inMap.get("MASTERID")+"^"+inMap.get("LANDID")+"^"+inMap.get("GUBUN")+"^"+inMap.get("CUSTKEY")+"^"+inMap.get("PID")+"^"+inMap.get("PNAME")+"^"+inMap.get("RID")+"^"+inMap.get("RNAME")+"^"+inMap.get("RIGHTS")+"^"+inMap.get("INTERESTS")+"^"+inMap.get("KUMK")+"^"+inMap.get("BUBINANAME")+"^"+inMap.get("BUBINACODE")+"^"+inMap.get("PRICEA")+"^"+inMap.get("KUMA")+"^"+inMap.get("BUBINBANAME")+"^"+inMap.get("BUBUNBCODE")+"^"+inMap.get("PRICEB")+"^"+inMap.get("KUMB")+"^"+inMap.get("PRICEM")+"^"+inMap.get("KUMM");					
					buffer.append(CRLF);
					buffer.append(tmpStr);					
					downFileName = tabNm;
				}		 		
		 	}else if(tabNm.equals("지장물")){
		 		buffer.append("ID^MASTERID^SEQ^CUSTKEY^REG^EUB^SAN^BUN1^BUN2^BUN3^ADDR^AREA1^KIND^GUJO^CODEK^UNITK^PRICEK");
				for(int i=0; i<size; i++){
					inMap = inDsMap.get(i);
					String tmpStr = inMap.get("ID")+"^"+inMap.get("MASTERID")+"^"+inMap.get("SEQ")+"^"+inMap.get("CUSTKEY")+"^"+inMap.get("REG")+"^"+inMap.get("EUB")+"^"+inMap.get("SAN")+"^"+inMap.get("BUN1")+"^"+inMap.get("BUN2")+"^"+inMap.get("BUN3")+"^"+inMap.get("ADDR")+"^"+inMap.get("AREA1")+"^"+inMap.get("KIND")+"^"+inMap.get("GUJO")+"^"+inMap.get("CODEK")+"^"+inMap.get("UNITK")+"^"+inMap.get("PRICEK");//+"^"+inMap.get("IMSI"));				
					buffer.append(CRLF);
					buffer.append(tmpStr);					
					downFileName = tabNm;
				}		 		       
		 	}else if(tabNm.equals("지장물소유자&관계인관계")){
		 		
		 		buffer.append("ID^MASTERID^OBJECTID^GUBUN^CUSTKEY^PID^PNAME^RID^RNAME^RIGHTS^INTERESTS^KUMK^BUBINANAME^BUBINACODE^PRICEA^KUMA^BUBINBNAME^BUBINBCODE^PRICEB^KUMB^PRICEM^KUMM");
				for(int i=0; i<size; i++){
					inMap = inDsMap.get(i);									
					String tmpStr = inMap.get("ID")+"^"+inMap.get("MASTERID")+"^"+inMap.get("OBJECTID")+"^"+inMap.get("GUBUN")+"^"+inMap.get("CUSTKEY")+"^"+inMap.get("PID")+"^"+inMap.get("PNAME")+"^"+inMap.get("RID")+"^"+inMap.get("RNAME")+"^"+inMap.get("RIGHTS")+"^"+inMap.get("INTERESTS")+"^"+inMap.get("KUMK")+"^"+inMap.get("BUBINANAME")+"^"+inMap.get("BUBINACODE")+"^"+inMap.get("PRICEA")+"^"+inMap.get("KUMA")+"^"+inMap.get("BUBINBNAME")+"^"+inMap.get("BUBINBCODE")+"^"+inMap.get("PRICEB")+"^"+inMap.get("KUMB")+"^"+inMap.get("PRICEM")+"^"+inMap.get("KUMM");					
					buffer.append(CRLF);
					buffer.append(tmpStr);					
					downFileName = tabNm;
				} 
		 	}else if(tabNm.equals("소유권이외의권리")){
		 		buffer.append("ID^MASTERID^SEQ^CUSTKEY^REG^EUB^SAN^BUN1^BUN2^ADDR^KIND^GUJO^AREA1^PRICEK^PRICEA^PRICEB^PRICEM");
				for(int i=0; i<size; i++){
					inMap = inDsMap.get(i);
					String tmpStr = inMap.get("ID")+"^"+inMap.get("MASTERID")+"^"+inMap.get("SEQ")+"^"+inMap.get("CUSTKEY")+"^"+inMap.get("REG")+"^"+inMap.get("EUB")+"^"+inMap.get("SAN")+"^"+inMap.get("BUN1")+"^"+inMap.get("BUN2")+"^"+inMap.get("ADDR")+"^"+inMap.get("KIND")+"^"+inMap.get("GUJO")+"^"+inMap.get("AREA1")+"^"+inMap.get("PRICEK")+"^"+inMap.get("PRICEA")+"^"+inMap.get("PRICEB")+"^"+inMap.get("PRICEM");					
					buffer.append(CRLF);
					buffer.append(tmpStr);					
					downFileName = tabNm;
				}		 		
		 	}else if(tabNm.equals("소유권이외의 권리소유자&관계인관계")){ 
		 		buffer.append("ID^MASTERID^BEYONDRIGHTID^GUBUN^CUSTKEY^PID^PNAME^RID^RNAME^RIGHTS^INTERESTS^KUMK^BUBINANAME^BUBINACODE^PRICEA^KUMA^BUBINBNAME^BUBINBCODE^PRICEB^KUMB^PRICEM^KUMM");
				for(int i=0; i<size; i++){
					inMap = inDsMap.get(i);
					String tmpStr = inMap.get("ID")+"^"+inMap.get("MASTERID")+"^"+inMap.get("BEYONDRIGHTID")+"^"+inMap.get("GUBUN")+"^"+inMap.get("CUSTKEY")+"^"+inMap.get("PID")+"^"+inMap.get("PNAME")+"^"+inMap.get("RID")+"^"+inMap.get("RNAME")+"^"+inMap.get("RIGHTS")+"^"+inMap.get("INTERESTS")+"^"+inMap.get("KUMK")+"^"+inMap.get("BUBINANAME")+"^"+inMap.get("BUBINACODE")+"^"+inMap.get("PRICEA")+"^"+inMap.get("KUMA")+"^"+inMap.get("BUBINBNAME")+"^"+inMap.get("BUBINBCODE")+"^"+inMap.get("PRICEB")+"^"+inMap.get("KUMB")+"^"+inMap.get("PRICEM")+"^"+inMap.get("KUMM");					
					buffer.append(CRLF);
					buffer.append(tmpStr);					
					downFileName = tabNm;
				}		 		
		 	}else if(tabNm.equals("지상권")){
		 		buffer.append("ID^MASTERID^LANDID^CUSTKEY^S_AREA^S_PRICEK^S_KUMK^RID^RNAME^USEFLAG^BUBINANAME^BUBINACODE^S_PRICEA^S_KUMA^BUBINBNAME^BUBINBCODE^S_PRICEB^S_KUMB^S_PRICEM^S_KUMM");
				for(int i=0; i<size; i++){
					inMap = inDsMap.get(i);
					String tmpStr = inMap.get("ID")+"^"+inMap.get("MASTERID")+"^"+inMap.get("LANDID")+"^"+inMap.get("CUSTKEY")+"^"+inMap.get("S_AREA")+"^"+inMap.get("S_PRICEK")+"^"+inMap.get("S_KUMK")+"^"+inMap.get("RID")+"^"+inMap.get("RNAME")+"^"+inMap.get("USEFLAG")+"^"+inMap.get("BUBINANAME")+"^"+inMap.get("BUBINACODE")+"^"+inMap.get("S_PRICEA")+"^"+inMap.get("S_KUMA")+"^"+inMap.get("BUBINBNAME")+"^"+inMap.get("BUBINBCODE")+"^"+inMap.get("S_PRICEB")+"^"+inMap.get("S_KUMB")+"^"+inMap.get("S_PRICEM")+"^"+inMap.get("S_KUMB")+"^"+inMap.get("S_PRICEM")+"^"+inMap.get("S_KUMM");					
					buffer.append(CRLF);
					buffer.append(tmpStr);					
					downFileName = tabNm; 
				}		 		 
		 	} 
			contents = buffer.toString(); 			
			contents = contents.replaceAll(",","|");//조회된 값중에 콤마가 들어가 있는 경우가 있어 문자열 변환 처리 함.
			contents = contents.replaceAll("\\^",",");
			contents = contents.replaceAll("null","");
			     	
			downFileName = downFileName+"_("+savedt+").csv";
			
			downloadFile = new File(downFileName);
			
			OutputStreamWriter ow = new OutputStreamWriter(new FileOutputStream(downloadFile), "EUC-KR");
			BufferedWriter bw = new BufferedWriter(ow);

			bw.write(contents, 0, contents.length());
			
			bw.close(); 
		}
    	
    	return downloadFile;
	}	
	 
	
}
