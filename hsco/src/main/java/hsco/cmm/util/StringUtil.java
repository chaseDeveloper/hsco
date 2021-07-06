package hsco.cmm.util;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.net.URLEncoder;
import java.io.UnsupportedEncodingException;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SuppressWarnings({"unchecked","rawtypes"})
public class StringUtil {
	
	public static List getIbatisIterate(String context, String name, String delim){
		List templist = new ArrayList();
		String[] tempLine = context.split(delim);
		for(int j=0;j<tempLine.length;j++){
			templist.add(tempLine[j]);
		}
		return templist;
	}
	 
    /**
     * @param value
     * @return ' ==> ''
     *
     */
    public static String escape(String value)
    {
        value = replace(value, "'", "''");

        return value;
    }
    
    public static String replace(String str, String pattern, String replace)
    {
        int s = 0;
        int e = 0;
        int patternLength = pattern.length();
        StringBuffer buf = new StringBuffer();

        while ((e = str.indexOf(pattern, s)) >= 0)
        {
            buf.append(str.substring(s, e));
            buf.append(replace);
            s = e + patternLength;
        }

        buf.append(str.substring(s));
        return buf.toString();
    }

    /**
     * Number Comma Replace
     * @param str
     * @return 
     */
    public static String getComma(String str) {
		String sj = str;

		try {
			if (str == null)
				return null;
			if (str.trim().equals(""))
				return "";
			if (str.indexOf(",") != -1)
				return str;
			if (sj.startsWith("0")) {
				for (int i = 0; i < str.length(); i++) {
					sj = str.substring(i);
					if (!sj.startsWith("0"))
						break;
				}
			}
			if ("0".equals(str))
				return "0";
			else {
				double nu = Double.parseDouble(sj);
				NumberFormat nf = NumberFormat.getInstance();
				String no = nf.format(nu);
				return no;
			}
		}
		catch (Exception e) {
			e.printStackTrace();
			return str;
		}
	}
    
    public static String convertHtmlBr(String comments) {
    	StringBuffer buffer = new StringBuffer();
    	
    	if (comments != null) {
			int lg = comments.length();
	
			for (int i = 0; i < lg; ++i) {
				String temp = comments.substring(i, i + 1);
	
				if ("\r".equals(temp)) {
					temp = comments.substring(++i, i + 1);
	
					if ("\n".equals(temp))
						buffer.append("<br>\r");
					else
						buffer.append("\r");
				}
	
				buffer.append(temp);
			}
    	}
		return buffer.toString();
	}
    
	public static String nvl(String value) {
		return (value == null ? "" : value.trim());
	}
	
	/**
	 * org.apache.commons.lang.StringUtils.leftPad 와 동일
	 * 대상문자열(s)에 특정길이(length)만큼 왼쪽부터 특정문자(c)를 채워서 반환한다.
	 * 
	 * @param s
	 * @param c
	 * @param length
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	public static String lpad(String s, char c, int length) throws UnsupportedEncodingException
	{
		if(s == null)
			s = "";
		
		int sLeng = s.length();
		if(s.length() > length){
			int strtIdx = sLeng - length;
			return s.substring(strtIdx, sLeng);
		}
		
		int count = length - s.getBytes("UTF-8").length;
		while (--count >= 0) 
			s = c + s;
		
		return s;
	}	
	
	public static byte[] lpad(byte[] s, byte b, int length)
	{
		byte[] result = new byte[length];
		int slen = (s == null) ? 0 : s.length;
		int count = length - slen;
		
		for( int i=length; i > 0; i--)
		{
			result[i -1] = (i <= count) ? b: s[slen -(length-i) -1];
		}		
		
		return result;
	}
	
	public static byte[] lpad(String s, char c, int length, String encoding) throws Exception
	{
		byte[] result;
		if(s == null){
			result = new byte[length];
		} else if("".equals(s)){
			result = new byte[length];
		} else {
			result = new byte[length];
			byte[] src = null;
			if(encoding == null)
				encoding = "UTF-8";
			if("".equals(encoding)) {
				encoding = "UTF-8";
			} else if( "KSC_5601_F".equals(encoding)) {
				encoding = "KSC_5601";
			} 
			src = s.getBytes(encoding);
			
			int slen = src.length;
			int count = length - slen;
			
			for( int i=length; i > 0; i--)
			{
				result[i -1] = (i <= count) ? (byte)c: src[slen -(length-i) -1];
			}		
		}
		return result;
	}

	/**
	 * org.apache.commons.lang.StringUtils.rightPad 와 동일
	 * 대상문자열(s)에 특정길이(length)만큼 오른쪽으로 특정문자(c)를 채워서 반환한다.
	 * 
	 * @param s
	 * @param c
	 * @param length
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	public static String rpad(String s, char c, int length) throws UnsupportedEncodingException
	{
		StringBuffer buf = new StringBuffer();		
		if(s == null)
			s = "";
		
		if(s.length() > length)
			return s.substring(0, length);

		int count = length - s.getBytes("UTF-8").length;
		while(--count >= 0)
		   buf.append(c);
		
		s = s + buf.toString();
		

		return s;
	}
	
	public static byte[] rpad(byte[] s, byte b, int length)
	{
		byte[] result = new byte[length];
		int slen = (s == null) ? 0 : s.length;
		//int count = length - slen;
		
		for( int i=0; i<length; i++)
		{
			result[i] = ( i < slen) ? s[i] : b;
		}
		
		return result;
	}
	
	public static byte[] rpad(String s, char c, int length, String encoding) throws Exception
	{
		
		byte[] src = null;
		
		if( "KSC-5601".equals(encoding)) 
		{
			src = s.getBytes("EUC-KR");
		}
		else
		{
			src = s.getBytes(encoding);
		}
		
		
		if( encoding == null ) return rpad( src, (byte)c, length);
		
		if( "KSC-5601".equals(encoding)) 
			return rpadKSC(src, (byte)c, length);
		
		return rpad( src, (byte)c, length);
	}
	
	/**
	 * KSC_5601 전각의 공백(0xA1 0xA1) 패딩처리
	 * 만약 현재 문자열이 UTF 면  UTF->Unicode->KSC5601로 변환
	 * 1. 사이즈에 먼저 0xA1을 다 채운후에 byte 복사
	 * @param src
	 * @param size
	 * @return
	 * @throws Exception
	 */
	public static byte[] rpadKSC(byte[] src, byte b, int size) throws Exception
	{
		byte[] result = new byte[size];
		byte padding = b;//(b == (byte)0x20) ? (byte)0xA1: b;
		
		Arrays.fill(result, padding);
		
		byte[] enc = encodeKsc(src);
		
		System.arraycopy(enc, 0, result, 0, ( enc.length > size) ? size : enc.length);
		
		return result;
	}
	
	/**
	 * ASCII를 KSC5601전각 으로 변환하여 리턴
	 * 전각문자/기호/자소/선문자 0xA180 ~ 0xAFFF 
	 * 한글영역 0xB0A1 ~ 0xC9FF
	 * 한자영역 0xCA80 ~ 0xFDFF
	 * @param src
	 * @return
	 */
	public static byte[] encodeKsc(byte[] src) throws Exception
	{
		/*
		 * 아스키 0x20 미만은 0xA3 0x00
		 * 0x20 은 0xA1 0xA1
		 * 아스키 0x21 ~ 0x7D 는 0xA3 0xFD(0x?? | 0x80 )
		 */
		byte BIT_MASK = (byte)0x80;
		
//		byte[] ksc = src.getBytes("KSC_5601");
		int length = (src == null) ? 0 : src.length;
		
		byte[] buffer = new byte[length * 2];
		
		int index = 0;
		for(int i=0; i<length; i++, index++)
		{
			// 한글
			if( (src[i] & BIT_MASK) == BIT_MASK)
			{
				buffer[index] = src[i];
				buffer[++index] = src[++i];
			}
			else
			{
				buffer[index] = (byte)0xA3;
				if( src[i] < (byte)0x20) {
					// 0xA3, 0x00
					buffer[++index] = (byte)0x00;
				}
				else if (src[i] == (byte)0x20) {
					// 0xA1 0xA1
					buffer[index] = (byte)0xA1;
					buffer[++index] = (byte)0xA1;
				}
				else {
					buffer[++index] =  (byte)(src[i] | (byte)0x80);
				}
			}
			
		}
		
		byte[] result = new byte[index];
		
		System.arraycopy(buffer, 0, result, 0, index);
		
		return result;
	}
	
	// Byte수 만큼 잘라내기
	public static String rpadByte(String src, char c, int maxlength) throws UnsupportedEncodingException 
	{
		String returnStr = "";	
		  
		byte[] buffer = new byte[maxlength];
		
		for(int i = 0; i < buffer.length; i++)
		{
			buffer[i] = (byte)c;
		}
		  
		byte[] strByte = src.getBytes("UTF-8");
		
		int loopCnt = (buffer.length > strByte.length ? strByte.length : buffer.length);
		  
		for(int i = 0; i < loopCnt; i++)
		{
			buffer[i] = strByte[i];
		}

		returnStr = new String(buffer, 0, maxlength, "UTF-8");
		
		return returnStr;
	}
	
	/**
	 * value가 null인지 확인한다.
	 * null일 경우 true, 아니면 false를 반환한다.
	 * @param value
	 * @return
	 */
	public static boolean isNull(String value)
	{
		if(value == null) return true;
		
		String str = value.trim();
		if("null".equals(str) || "".equals(str)) return true;
		
		return false;
	}
	
	/**
	 * value값이 null 일 경우 공백("")을 반환하며,
	 * 아닐경우 trim하여 반환한다.
	 * @param value
	 * @param defaultValue
	 * @return
	 */
	public static String parseNull(String value)
	{
		return parseNull(value, "");
	}
	
	/**
	 * value값이 null 일 경우 주어진 값으로 변경하여 반환하며,
	 * null이 아닐경우 trim하여 반환한다.
	 * @param value
	 * @param defaultValue
	 * @return
	 */
	public static String parseNull(String value, String defaultValue)
	{
		if(isNull(value)) return defaultValue;
		return value.trim();
	}
	
	public static String getDecodedErrStack(Throwable e) throws UnsupportedEncodingException{

		ByteArrayOutputStream resultLog = new ByteArrayOutputStream();
		e.printStackTrace(new PrintStream(resultLog, true, "UTF-8"));

		return resultLog.toString("UTF-8");
	}
	
	public static String encodeToUtf8(String str) {
		String utf8Str = "";
		try{		     
		    utf8Str = URLEncoder.encode(str,"UTF-8");
		    
		} catch (Exception e) {
		    e.printStackTrace();
		}
		return utf8Str;
	}
    
}