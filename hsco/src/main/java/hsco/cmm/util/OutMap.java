package hsco.cmm.util;

import java.io.InputStream;
import java.sql.Blob;
import java.sql.Clob;
import java.util.HashMap;


/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: OutMap.java
 * @Description  	: IBATIS LOB 처리를 위한 Map 
 * @author       	: 정윤원
 * @since        	: 2015. 9. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 14.					정윤원				최초생성
 * </pre>
 */
public class OutMap extends HashMap<Object, Object> {
	
	private static final long serialVersionUID = -1145629862310620749L;

	public Object put(Object key, Object value)
	{
		
		if(value instanceof Clob)
		{
			Clob c = (Clob)value;
			try
			{
				value = c.getSubString(1, (int)c.length());
			}
			catch (Exception e)
			{
				value = null;
			}
		} 
		
		if(value instanceof Blob)
		{
			Blob b = (Blob)value;
			try
			{
				byte[] bByte = new byte[(int)b.length()];
//				InputStream in = b.getBinaryStream();
//				in.read(bByte);
				
				value = bByte;
			}
			catch (Exception e)
			{
				value = null;
			}
		} 
		
		key = key.toString();
		
		return super.put(key, value);
	}
	

}
