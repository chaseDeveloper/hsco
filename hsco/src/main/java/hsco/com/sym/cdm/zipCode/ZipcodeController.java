package hsco.com.sym.cdm.zipCode;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;

//import org.apache.commons.collections.MapUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.xml.sax.Attributes;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ZipcodeController.java
 * @Description  	: 우편번호 조회
 * @author       	: 정윤원
 * @since        	: 2015. 8. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 17.					정윤원				최초생성
 * </pre>
 */
@Controller
public class ZipcodeController {
	
	@SuppressWarnings("unused")
	private final Logger log = LoggerFactory.getLogger(ZipcodeController.class);
	
	@Value("#{extUrl['jusoUrl']}")
    private String jusoUrl;
    
    @Value("#{extUrl['jusoKey']}")
    private String jusoKey;
		
	
    /**
     * 우편번호 요청 ( HTTP GET )
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @SuppressWarnings("unchecked")
	@RequestMapping(value = "/hsco/com/ZipCode.do")
    public ModelAndView getAddrApi(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map<String, String> paramMap = null;
		if( inDsMap != null ) {
			paramMap = (Map<String, String>)inDsMap.get(0);
		}else {
			throw new NexaServiceException("comm.값.무효");
		}
		String currentPage = paramMap.get("PAGE_NO");		
		String countPerPage = paramMap.get("SHOW_CNT");
		String keyword = paramMap.get("KEYWORD");
		
		if(keyword == null || keyword.length() == 0 )
			throw new NexaServiceException("comm.항목.필수", "지번/도로명");

		String apiUrl = jusoUrl +"?currentPage="+currentPage
						+"&countPerPage="+countPerPage
						+"&keyword="+URLEncoder.encode(keyword,"UTF-8")
						+"&confmKey="+jusoKey;
		
		Map<String, Object> resultMap = null;
		BufferedReader br = null;
		
		try {
			URL url = new URL(apiUrl);
			
			br = new BufferedReader(new InputStreamReader(url.openStream(),"UTF-8"));
			
			ZipCodeXMLParser zipParser = new ZipCodeXMLParser();
			resultMap = zipParser.parseXml(br);
		}catch(Exception e){
			e.printStackTrace();
		}finally {
			if(br != null) br.close();
		}
		
		Map<String, DataSetMap> outMap = xpDto.getOutDataSetMap();
		DataSetMap output2 = new DataSetMap(); //result_header
		DataSetMap output1 = new DataSetMap(); //result_list
		
		if( resultMap != null ) {
			
			Map<String, String> headerMap = (Map<String, String>) resultMap.get("HEADER");
			
			// headerMap 의 값에 따라 성공여부 처리.
			/*
			 * 	<totalCount>110</totalCount>
			*	<currentPage>1</currentPage>
			*	<countPerPage>10</countPerPage>
			* 	<errorCode>0</errorCode>
			*	<errorMessage>정상</errorMessage>
			 */
			
			String errorCode =(String)headerMap.get("ERRORCODE");
			String errorMessage =(String)headerMap.get("ERRORMESSAGE");
			
			if( !"0".equals(errorCode)) {
				mav.addObject(NexacroConstant.ERROR_CODE, errorCode);
				mav.addObject(NexacroConstant.ERROR_MSG, errorMessage);
				
				return mav;				
			}
			
			@SuppressWarnings("rawtypes")
			List<Map> records = (List<Map>)resultMap.get("LIST");
			output1.setRowMaps(records);
			output2.add(headerMap);
			outMap.put("output2", output2);
			outMap.put("output1", output1);	
		}
		
		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, outMap);
		return mav;
    }
}

class ZipCodeXMLParser extends DefaultHandler{
	
	private Map<String, String> header = new HashMap<String, String>();
	private List<Map<String, String>> list = new ArrayList<Map<String, String>>();
	private Map<String, String> listItem = null;
	private boolean isList = false;
	private String rawName = null;
	private Map<String, Object> parsedData = new HashMap<String, Object>();
	
	public Map<String, String> getHeader(){
		return this.header;
	}
	
	public Map<String, Object> getParsedData(){
		return this.parsedData;
	}
	
	public List<Map<String, String>> getList(){
		return this.list;
	}
	
	private void setCurrentElement(String rawName){
		this.rawName = rawName.toUpperCase();
	}
	
	private String getCurrentElement(){
		return this.rawName;
	}
	
	public void startElement(String uri, String localpart, String rawname, Attributes attributes) throws SAXException {
		setCurrentElement(rawname);
		if("common".equals(rawname)){
			isList = false;
		}else if("juso".equals(rawname)){
			isList = true;
			listItem = new HashMap<String, String>();
		}
	}
	
	public void endElement(String uri, String localpart, String rawname) throws SAXException{
		if("juso".equals(rawname)){
			list.add(listItem);
		}
		
		if("results".equals(rawname)){
			parsedData.put("HEADER", header);
			parsedData.put("LIST", list);
		}
	}
	
	public void characters(char ch[], int offset, int length) throws SAXException{
		
		String value = new String(ch, offset, length);
		if(value.length() == 0) return;
		if(isList){
			StringBuffer sb = new StringBuffer(0);
			String str = listItem.get(getCurrentElement());
			if(str!=null && !"".equals(str)){
				sb.append(str).append(value);
			}else{
				sb.append(value);
			}
		
			listItem.put(getCurrentElement(), sb.toString().trim());
		}else{
			header.put(getCurrentElement(), value.trim());
		}
	}
	
	public Map<String, Object> parseXml(BufferedReader br) throws Exception {
		
		InputSource is = new InputSource(br);
		is.setEncoding("UTF-8");

		SAXParserFactory factory = SAXParserFactory.newInstance();
		factory.setNamespaceAware(true);
		factory.setValidating(true);
		
		SAXParser saxParser = factory.newSAXParser();
		ZipCodeXMLParser handler   = new ZipCodeXMLParser();
		saxParser.parse(is, handler);
		
		Map<String, Object> map = handler.getParsedData();
//		MapUtils.debugPrint(System.out, "Xml Result", map);
		return map;
	}
}
