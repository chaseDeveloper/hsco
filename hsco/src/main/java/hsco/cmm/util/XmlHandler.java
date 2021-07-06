package hsco.cmm.util;


import java.util.ArrayList;

 

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.collections.MapUtils;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

 

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: XmlHandler.java
 * @Description  	: XML Parser 
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
public class XmlHandler extends DefaultHandler {

 

	private String categoryName = null;
    private String position = "";

    private Map<String, Object> commonMap;
    private Map<String, Object> itemMap;
    // 결과 맵
    private Map<String, Object> resultMap;

    private ArrayList<Map> list;

    public Map<String, Object> getParsedData() {

        return this.resultMap;

    }

    

    /**
     * Document 시작시
     */
    @Override
    public void startDocument() throws SAXException {

    	resultMap = new HashMap<String, Object>();
    	
    	this.list = new ArrayList<Map>();

    }

 

    /**
     * Document 종료시
     */
    @Override
    public void endDocument() throws SAXException {
    	
//    	for( int i=0; i < list.size(); i++ ) {
//    		MapUtils.debugPrint(System.out, "ADDR", list.get(i));
//    	}

    	resultMap.put("HEADER", commonMap);
    	resultMap.put("LIST", list);

    }

     

    /**
     * Element 하나씩 읽을때.. '<'만날때
     */
    @Override
    public void startElement(String namespaceURI, String localName, String qName, Attributes atts) 
    							throws SAXException {
    	

    	if("common".equals(qName) || "juso".equals(qName)) {
    		
    		categoryName = qName;
    		
    		if( "common".equals(qName) ) {
    			commonMap = new HashMap<String, Object>();
    		}
    		
    		if( "juso".equals(qName) ) {
    			itemMap = new HashMap<String, Object>();
    		}
    		
    	}
    	else
    	{
    		position = qName;
    	}    	
    	
    }

 

    /**
     * Eelement 끝날때 , '/>' 만날때
     */
    @Override
    public void endElement(String namespaceURI, String localName, String qName)
            					throws SAXException {

        if ("juso".equals(qName)) {
        	String total_cnt = (String)commonMap.get("TOTALCOUNT");
        	itemMap.put("TOT_CNT", total_cnt );
            list.add(itemMap);

        }

    }

 

     

    /**
     * value 값 읽을때
     */
    @Override
    public void characters(char ch[], int start, int length) {

    	
    	
    	
    	Map map = ("common".equals(categoryName)) ? commonMap : itemMap ;
    	
    	if( categoryName != null ) {
    		
    		String value = new String (ch, start, length).trim();
    		
        	map.put(position.toUpperCase(), value );

            position = "";
    	}
    }

}
