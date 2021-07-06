package hsco.cmm.util;

import java.beans.PropertyDescriptor;
import java.io.Reader;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.security.MessageDigest;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Map.Entry;

import hsco.cmm.exception.NexaServiceException;

import java.util.Set;
import java.util.Vector;

import oracle.sql.CLOB;
//import sun.misc.BASE64Encoder;

@SuppressWarnings("unchecked")
public class CommonUtil {
	
	/**
	 * Null -> Space 
	 * @param str
	 * @return
	 */
//	public static String Base64Encode(String str)
//    {
//        if (str == null)
//        {
//            return "";
//        }
//        else
//        {
//        	BASE64Encoder encoder = new BASE64Encoder();
//        	byte[] b1 = str.getBytes();
//            return encoder.encode(b1);
//        }
//    }
	
	public static String urlContent(String targetUrl, String user_id){
//		 StringBuffer param = new StringBuffer();
//		 param.append("user_no="+user_id);
//
//		 String returnStr = "";
//		 System.out.println(targetUrl+"?"+"user_no="+user_id);		 
//		 try{   
//			 URL url = new URL(targetUrl);
//
//			 HttpURLConnection http = (HttpURLConnection)url.openConnection();
//			 http.setRequestMethod("POST");
//			 http.setDoOutput(true);
//
//			 // POST sending
//			 PrintWriter pout = new PrintWriter(http.getOutputStream());
//			 pout.print(param.toString());
//			 pout.close();
//
//			 //receive return
//			 BufferedReader respRd = new BufferedReader(new InputStreamReader(http.getInputStream()));
//			 String tempStr = null;
//
//			 while (true) {
//				 tempStr = respRd.readLine();
//				 if (tempStr == null) break;
//				 returnStr += tempStr;
//			 }
//			 respRd.close();
//		}catch(Exception e){}
//		
//		
//		//content = <html><body>/ret1=0/ret2=1/ret3=1/ret4=0</body></html>
//		//ret1 : inbox(new), ret2 : inbox(total), ret3 : sent, ret4 : draft
//		String content = returnStr.trim();
//		System.out.println("messanger mail = "+content);
//		String cntStr = "0";
//		
//		
//		String[] mailContent = content.split("/");
//		//Check inbox count
//		for(int i=0;i<mailContent.length;i++){
//			String[] cntContent = mailContent[i].split("=");
//			if(cntContent[0].equals("ret1")){
//				cntStr = cntContent[1];
//				break;
//			}
//		}
//		System.out.println("inbox : "+cntStr);
//		return cntStr;
		return "";
	}
	
	@SuppressWarnings("deprecation")
	public static void sendActivityEmail(String targetUrl, Map<Object, Object> mail, String context)throws NexaServiceException{
		
//		// TODO: activity email Send
//		
//		StringBuffer param = new StringBuffer();
//		param.append("sender="+mail.get("SENDER"));
//		param.append("&senderName="+mail.get("SENDERNAME"));
//		param.append("&subject="+mail.get("SUBJECT"));
//		//param.append("&body="+ mail.get("BODY"));
//		param.append("&body="+ URLEncoder.encode(makeBodyContext(context, mail)));
//		param.append("&to="+mail.get("TO_RECEIVE"));
//		param.append("&send_type="+mail.get("SEND_TYPE"));
//		param.append("&x_priority="+mail.get("X_PRIORITY"));
////		param.append("&return_url="+mail.get("SENDER"));
//		 
//		try{   
//			URL url = new URL(targetUrl);
//			
//			HttpURLConnection http = (HttpURLConnection)url.openConnection();
//			http.setRequestMethod("POST");
//			http.setDoOutput(true);
//			
//			PrintWriter out = new PrintWriter(http.getOutputStream());
//			out.print(param.toString());
//			out.close();
//			
//			BufferedReader in = new BufferedReader(new InputStreamReader(http.getInputStream()));					
//			in.close();
//			
//		}catch(Exception e){
//			e.printStackTrace();
//		}
	}
	
	public static void urlSetting(String targetUrl, Map reqMap){
//		StringBuffer param = new StringBuffer();
//		param.append("cmd="+Base64Encode("ADD"));
//		param.append("&username="+Base64Encode(reqMap.get("first_nm").toString()+" "+reqMap.get("middle_nm").toString()+" "+reqMap.get("last_nm").toString()));
//		param.append("&user_no="+Base64Encode(reqMap.get("user_id").toString()));
//		param.append("&userpass="+Base64Encode(reqMap.get("user_pwd").toString()));
//		param.append("&email="+Base64Encode(reqMap.get("user_id").toString()+"@tobesoft.com"));
//		param.append("&ctm_dept="+Base64Encode(reqMap.get("dept_cd").toString()));
//		 
//		try{   
//			URL url = new URL(targetUrl);
//			
//			HttpURLConnection http = (HttpURLConnection)url.openConnection();
//			http.setDoOutput(true);
//			
//			PrintWriter out = new PrintWriter(http.getOutputStream());
//			out.print(param.toString());
//			out.close();
//			
//			BufferedReader in = new BufferedReader(new InputStreamReader(http.getInputStream()));					
//			in.close();
//			
//		}catch(Exception e){
//			e.printStackTrace();
//		}
	}
	
	public static String nullToSpace(String str)
	{
		if (str == null)
		{
			return "";
		}
		else
		{
			return str;
		}
	}
	
	public static String getValue(Object obj, String title) {
		String value = "";
		try {
			PropertyDescriptor propertyDesc;
			propertyDesc = org.springframework.beans.BeanUtils.getPropertyDescriptor(obj.getClass(), title);
			value = propertyDesc.getReadMethod().invoke(obj, new Object[0]).toString();
		} catch(Exception se) {
			value = "";
		}
		return value;
	}
	
	/**
	 * JQuery Tree getStringData
	 * @param Gubun
	 * @param list
	 * @return String
	 */
	public static String getTreeString(String Gubun, List<Object> list){
		StringBuffer sb = new StringBuffer("");

		int bfLevelCount = 1;
		int currLevelCount = 0;
		int iCount = 0;
		
		Iterator<Object> it = list.iterator();
		
		try{
			if(list.size() > 0 ){
				while(it.hasNext()){
					iCount++;
					
					Map bean = (HashMap)it.next();
					
					currLevelCount = ((BigDecimal)bean.get("LEVEL")).intValue();
					
					if(bfLevelCount == currLevelCount){
						if(iCount != 1) sb.append("}, \n ");
						sb.append(getTreeMenuString(Gubun, bean));
						
					}else if(bfLevelCount < currLevelCount){
						sb.append(", \n children: [ \n ");
						sb.append(getTreeMenuString(Gubun, bean));
						bfLevelCount = currLevelCount;
						
					}else if(bfLevelCount > currLevelCount){
						while(bfLevelCount != currLevelCount){
							sb.append("} \n ] ");
							bfLevelCount--;	 				
						}
						sb.append("}, \n ");
						sb.append(getTreeMenuString(Gubun, bean));
					}
				}
				while(1 != bfLevelCount){
					sb.append("} \n ] ");
					bfLevelCount--;
				}
				sb.append("} ");
			}
			return sb.toString();
		}catch(Exception e){
			e.printStackTrace();
			return "";
		}
	}
	
	// Create Zipcode Tree
	public static String getZipcodeTreeString(String Gubun, List<Object> list){
		StringBuffer sb = new StringBuffer("");
		
		Iterator<Object> it = list.iterator();
		
		int iCount = 0;
		
		try{
			if(list.size() > 0 ){
				while(it.hasNext()){				
					Map bean = (HashMap)it.next();
					
					if(iCount > 0){
						sb.append("},\n");
					}
					sb.append(getTreeZipcodeString(Gubun, bean));
					iCount++;
				}
				sb.append("} ");
			}
			return sb.toString();
		}catch(Exception e){
			e.printStackTrace();
			return "";
		}
	}
	
	public static String getTreeMenuString(String Gubun, Map bean){
		String tmp = "";
		tmp = "{parent_cd:'" + (String)bean.get("PARENT_CD")   
			+ "', parent_nm:'" + (String)bean.get("PARENT_NM")
			+ "', sort_cd:'" + (String)bean.get("SORT_CD")
			+ "', note:'" + (String)bean.get("NOTE")  
			+ "', use_yn:'" + (String)bean.get("USE_YN") + "'";
		if ("menu".equals(Gubun)) {
			tmp += ", menu_link:'" + (String)bean.get("MENU_LINK")  
				+ "', menu_image:'" + (String)bean.get("MENU_IMAGE")
				+ "', menu_note:'" + (String)bean.get("MENU_NOTE")
				+ "', title:'" + (String)bean.get("MENU_NM")
				+ "', key:'" + (String)bean.get("MENU_CD") + "'";
		}else{
			tmp = tmp + ", title:'" + (String)bean.get("CATEGORY_NM");
			if ( bean.get("MAIN_YN") != null && ((String)bean.get("MAIN_YN")).equals("1") ) {
				tmp = tmp + "[main]";
			}
			tmp = tmp +	"', related_category_cd:'" + (String)bean.get("RELATED_CATEGORY_CD")
				+ "', related_category_nm:'" + (String)bean.get("RELATED_CATEGORY_NM")
				+ "', category_sort_cd:'" + (String)bean.get("CATEGORY_SORT_CD")
				+ "', level:'" + bean.get("LEVEL")
				+ "', main_yn:'" + (String)bean.get("MAIN_YN")
				+ "', key:'" + (String)bean.get("CATEGORY_CD") + "'";
		}
		return tmp;
	}

	public static String getTreeZipcodeString(String Gubun, Map bean){
		String tmp = "";
		
		tmp = "{title:'" + (String)bean.get("TEXTNM") + "'," + "key:'" + (String)bean.get("VAL")+ "'"
			+ "," + "type:'" + Gubun + "', isFolder: true";
		
//		if ("city".equals(Gubun)) {
//			tmp += "," + "isLazy:false";
//		}else{
//			tmp += "," + "isLazy:true, isFolder: true";
//		}
		return tmp;
	}
	
	
	
	
	/**
	 * Jquery Tree getVectorData
	 * @param Gubun
	 * @param bean
	 * @return List
	 */
	public static List getTreeVector(String Gubun, List list, int beforeLevelCount, String start_cd, int rowNum) {
    	
		Vector result = new Vector(); 	
		
		Map currBean = new HashMap();
		boolean isChild = false;
		
		for(int i=rowNum;i<list.size();i++){
			Map tempBean = (Map)list.get(i);
			
			String parent_cd = (String)tempBean.get("PARENT_CD");  // iRowNum : start point
			int currLevelCount = ((BigDecimal)tempBean.get("LEVEL")).intValue();
			
//			System.out.println("start_cd[" + start_cd + "]parent_cd[" + parent_cd + "]current_cd[" + current_cd + "]");
//			System.out.println("beforeLevelCount[" + beforeLevelCount + "]currLevelCount[" + currLevelCount + "]");
//			System.out.println("menu[ " + tempBean.get("MENU_NM") + "]parnet[" + tempBean.get("PARENT_NM") + "]");

			
			if(start_cd.equals(parent_cd) && beforeLevelCount == currLevelCount){
				if(currBean.size() > 0){
					result.addElement(currBean);
					currBean = new HashMap();							
				}
				if(isChild) isChild = false;
				getTreeMenuMap(Gubun, tempBean, currBean);	
			}else{
				if(beforeLevelCount < currLevelCount && !isChild){
					currBean.put("children", (List)getTreeVector(Gubun, list, currLevelCount, parent_cd, i));
					isChild = true;
					if(currBean.size() > 0){
						result.addElement(currBean);
						currBean = new HashMap();							
					}							
				}else if(beforeLevelCount >= currLevelCount && !isChild){
					break;
				}
			}
		}
		if(currBean.size() > 0){
			result.addElement(currBean);
			//currBean = new HashMap();							
		}
		return result;
	}
	
	/**
	 * Jquery Tree getVectorData
	 * @param Gubun
	 * @param bean
	 * @return List
	 */
	public static List getTreeVector(String Gubun, List list,int iRowNum,int bfLevelCount) {
    	
		Iterator<Object> it = list.iterator();	 
			
		Vector result = new Vector(); 	
		
		Map currBean = new HashMap();
		
		while(it.hasNext()){
			
			Map bean = (HashMap)it.next();
			int tempRowNum = ((BigDecimal)bean.get("ROWNUM")).intValue();
			
			if(iRowNum <= tempRowNum){
				
				int currLevelCount = ((BigDecimal)bean.get("LEVEL")).intValue();
				
				if(bfLevelCount < currLevelCount && currBean.size() > 0){
					currBean.put("children", (List)getTreeVector(Gubun, list, tempRowNum, currLevelCount));
					result.addElement(currBean);
					currBean = new HashMap();			
				}else if(bfLevelCount > currLevelCount && currBean.size() > 0  && iRowNum != 1){
					result.addElement(currBean);
					//currBean = new HashMap();	
					return result;
				}else if(bfLevelCount == currLevelCount){
					if(currBean.size() > 0){
						result.addElement(currBean);
						//currBean = new HashMap();							
					}
					getTreeMenuMap(Gubun, bean, currBean);
				}
				if(!it.hasNext() && currBean.size() > 0){
					result.addElement(currBean);
				}
			}
		}
		return result;
    }
	
	public static String getUserZipCodeStatusTree(List list) {
    	
		Iterator<Object> it = list.iterator();	 
			
		StringBuffer result = new StringBuffer();
			
		while(it.hasNext()){
			
			Map bean = (HashMap)it.next();					
			result.append((String)bean.get("VAL") + "^");
		}
		return result.toString();
    }
	
	public static void getTreeMenuMap(String Gubun, Map bean, Map currBean){
		if("menu".equals(Gubun)){
			currBean.put("menu_link", (String)bean.get("MENU_LINK"));
			currBean.put("menu_image", (String)bean.get("MENU_IMAGE"));
			currBean.put("menu_note", (String)bean.get("MENU_NOTE"));
			currBean.put("title", (String)bean.get("MENU_NM"));
			currBean.put("key", (String)bean.get("MENU_CD"));
		}else{
			if ( bean.get("MAIN_YN") != null && ((String)bean.get("MAIN_YN")).equals("1") ) {
				currBean.put("title", (String)bean.get("CATEGORY_NM") + "[main]");
			} else {
				currBean.put("title", (String)bean.get("CATEGORY_NM"));
			}
			
			currBean.put("level", ((BigDecimal)bean.get("LEVEL")).toString());
			currBean.put("key", (String)bean.get("CATEGORY_CD"));
			currBean.put("note", (String)bean.get("NOTE"));
			currBean.put("related_category_cd", (String)bean.get("RELATED_CATEGORY_CD"));
			currBean.put("related_category_nm", (String)bean.get("RELATED_CATEGORY_NM"));
			currBean.put("category_sort_cd", (String)bean.get("CATEGORY_SORT_CD"));
			currBean.put("main_yn", (String)bean.get("MAIN_YN"));
		}
		currBean.put("parent_cd", (String)bean.get("PARENT_CD"));
		currBean.put("parent_nm", (String)bean.get("PARENT_NM"));
		currBean.put("sort_cd", (String)bean.get("SORT_CD"));
		currBean.put("use_yn", (String)bean.get("USE_YN"));
		if("true".equals((String)bean.get("CHECKED"))){
			currBean.put("select", true);
		}
	}
	
	public static String getStringToListCombo(List list, String textName, String valueName)throws NexaServiceException{
		
		StringBuffer sb = new StringBuffer();
		
		Object obj = null;
		String tName = "";
		String vName = "";
		
		int listSize = list.size();
		
		try{			
			
			if(list.get(0) instanceof Map){
				Iterator iterator = list.iterator();
				while(iterator.hasNext()){
					Map bean = (HashMap)iterator.next();
			        if(bean.get(textName) instanceof Integer || bean.get(textName) instanceof BigDecimal){
			        	tName = bean.get(textName).toString();
			        }else{
			        	tName = (String)bean.get(textName);
			        }
			        if(bean.get(valueName) instanceof Integer || bean.get(valueName) instanceof BigDecimal){
			        	vName = bean.get(valueName).toString();
			        }else{
			        	vName = (String)bean.get(valueName);
			        }
			        sb.append(tName + "|" + vName + "^");
				}
			}else{
				for (int i = 0; i < listSize; i++) {
					
					obj = list.get(i);				
					// 객체의 모든 메소드를 가지고 온다.
					Method[] methods = obj.getClass().getMethods();
					
					for (int j = 0; j < methods.length; j++) {
						String getText = "get" + textName;
						if(getText.equalsIgnoreCase(methods[j].getName().toLowerCase())){
							tName = (String)methods[j].invoke(obj, null);
						}
						String getValue = "get" + valueName;
						if(getValue.equalsIgnoreCase(methods[j].getName().toLowerCase())){
							vName = (String)methods[j].invoke(obj, null);
						}
					}
					sb.append(tName + "|" + vName + "^");
				}	
			}
		} catch(RuntimeException e){
			e.printStackTrace();
			throw new NexaServiceException("err.예외상황.발생", "\nCommonUtil.getStringToListCombo()");
			//throw new NexaServiceException("[RuntimeException] : CommonUtil.getStringToListCombo()" + e.getMessage());
		} catch(Exception e){
			e.printStackTrace();
			throw new NexaServiceException("err.예외상황.발생", "\nCommonUtil.getStringToListCombo()");
		}
		
		return sb.toString();
	}
	
	// clob -> string
	public static String getStringCLOB(CLOB clob) throws NexaServiceException{
		
		Reader reader = null;

		try {
			// oracle.sql.CLOB clob = (oracle.sql.CLOB) rs.getObject(column);
			//oracle.sql.CLOB clob = (oracle.sql.CLOB) resMap.get(arg0) .getObject(column);
			 //weblogic.jdbc.common.OracleClobImpl clob = (weblogic.jdbc.common.OracleClobImpl) rs.getObject(columnIndex) ;

			reader = clob.getCharacterStream();

			StringBuffer out = new StringBuffer();
			char[] buff = new char[1024];

			int nchars = 0;
			while((nchars = reader.read(buff)) > 0)
				out.append(buff, 0, nchars);

			return out.toString();
		}catch(Exception e) {
			e.printStackTrace();
			throw new NexaServiceException("err.예외상황.발생", "\n문자열을 CLOB로 변환 중 발생 : CommonUtil.getStringCLOB()");
		}finally {
			if(reader != null) {
				try {
					reader.close();
				}catch(Exception ee) {
					throw new NexaServiceException("err.예외상황.발생", "\nBuffredReader Gobbage Collection 실패");
				}
			}
		}
	}
	
	public static List getEbayMapToList(Map map)throws NexaServiceException{
		
		List list = new ArrayList();
    	Set entries = map.entrySet();
    	Iterator it = entries.iterator();
    	while (it.hasNext()){
    		Map bean = new HashMap();
    		Entry entry = (Entry) it.next();
    		Object key = entry.getKey();
    		Object value = entry.getValue();
    		bean.put("txt", key);
    		bean.put("val", value);
    		list.add(bean);
    	}
    	return list;
	}
	
	public static List getEbayStringsToList(String[] datas)throws NexaServiceException{
		
		List list = new ArrayList();
		
		if(datas == null)return list;
		
		for(int i=0;i<datas.length;i++){
			Map bean = new HashMap();
    		bean.put("txt", datas[i]);
    		bean.put("val", datas[i]);
    		list.add(bean);
		}
			
    	return list;
	}
	
	
	
	// Create Main Schedule
	public static String getMainSchedule(List<Object> list){
		
		StringBuffer sb = new StringBuffer("");
		Iterator<Object> it = list.iterator();
		
		int iCount = 0;
		
		try{
			if(list.size() > 0 ){
				while(it.hasNext()){				
					Map bean = (HashMap)it.next();
					
					if(iCount > 0){
						sb.append("},\n");
					}
					sb.append(getMainScheduleDetail(bean));
					iCount++;
				}
				sb.append("} ");
			}
			return sb.toString();
		}catch(Exception e){
			e.printStackTrace();
			return "";
		}
	}
	
	public static String getMainScheduleDetail(Map bean){
		String tmp = "";
		tmp = "{id:'" + bean.get("ACTIVITY_SEQ") + "'"
			+ ", title: '" + (String)bean.get("SUBJECT_TEXT") + "'"
			+ ", type: '" + (String)bean.get("ACTIVITY_TYPE") + "'"
			+ ", start:new Date(" + (String)bean.get("START_YYYY") + "," + (String)bean.get("START_DD") + "," + (String)bean.get("START_MM") + 
			"," + (String)bean.get("START_M") + "," + (String)bean.get("START_S") + ")";
		if (bean.get("END_YYYY") != null && !"".equals(bean.get("END_YYYY"))) {
			tmp += ", end: new Date(" + (String)bean.get("END_YYYY") + "," + (String)bean.get("END_DD") + "," + (String)bean.get("END_MM") +
			"," + (String)bean.get("END_M") + "," + (String)bean.get("END_S") + ")";
		}
		tmp += ", allDay: false ";
		return tmp;
	}
	

	public static List getScheduleVector(List list) {
    	
		Iterator<Object> it = list.iterator();	 
			
		List resultList = new ArrayList();
		
		while(it.hasNext()){
			
			Map bean = (HashMap)it.next();
			Map currBean = new HashMap();
						
			currBean.put("id", bean.get("ACTIVITY_SEQ"));
			currBean.put("title", (String)bean.get("SUBJECT_TEXT"));
			currBean.put("start", (String)bean.get("START_DT"));
			if (bean.get("END_DT") != null && !"".equals(bean.get("END_DT"))) {
				currBean.put("end", (String)bean.get("END_DT"));
			}
			currBean.put("allDay", false);			
			currBean.put("type", (String)bean.get("ACTIVITY_TYPE"));			
			resultList.add(currBean);
		}
		return resultList;
    }
		
	public static String getUSNumber(double price) throws NexaServiceException{
		NumberFormat nf = NumberFormat.getCurrencyInstance(Locale.US);
		nf.setMaximumFractionDigits(2);
		return nf.format(price);
	}
	
	private static String makeBodyContext(String context, Map fillData) throws NexaServiceException{
		
		Set entries = fillData.entrySet();
    	Iterator it = entries.iterator();
    	while (it.hasNext()){
    		Entry entry = (Entry) it.next();
    		String key = (String)entry.getKey();
    		String value = (String)entry.getValue();
    		context = StringUtil.replace(context, '#' + key + '#', value);
    	}
				
		return context;
	}
	
	public static String convertMd5(String str) throws Exception {
		byte[] digest = MessageDigest.getInstance("md5").digest(str.getBytes("UTF-8"));
		StringBuffer s = new StringBuffer();
		for (int i = 0; i < digest.length; i++) {
			s.append(Integer.toString((digest[i] & 0xf0) >> 4, 16));
			s.append(Integer.toString(digest[i] & 0x0f, 16));
		}
		return s.toString();
	}
	 
	/**
	 * 주민번호가 정상일 경우 true, 비정상일 경우 false를 출력한다.  
	 * @param input : 검증할 주민번호
	 * @param 
	 * @return boolean : true(정상), false(비정상) 
	 */	
    public static boolean isJuminNo(String regNo) {
		
        try { 
        	
            if("".equals(regNo)) return false;  

            regNo = regNo.trim(); // 문자열.trim() : 앞뒤공백을 제거해라
            regNo = regNo.replaceAll("-","");
      
            if(regNo.length()!=13){ // 문자열.length() : 문자열의 길이를 구한다.
              //System.out.println("주민번호는 13자리 이어야 합니다.");
              return false;
            }
            for(int i=0;i<regNo.length();i++){ // 문자열.charAt(index) : index위치의 1문자 얻기(index는 0부터)
              if(regNo.charAt(i)<'0' || regNo.charAt(i)>'9'){
                //System.out.println("주민번호는 반드시 숫자로만 이루어져 있어야 합니다.");
                return false;
              }
            }
      
            // 여기까지 내려오면 숫자로만 이루어진 13자리이다.
            int sum=0;
            // 1. 각각의 자리에 2 3 4 5 6 7 8 9 2 3 4 5를 곱한 합을 구한다.
            for(int i=0;i<regNo.length()-1;i++){
              // char형을 숫자로 바꾸는 방법 : '1' - '0' = 1, '5'-'0' = 5
              // 숫자를 char형으로 바꾸는 방법 : 1 + '0' = '1' , 7 + '0' = '7'
              sum += (regNo.charAt(i)-'0') * (i<8 ? i+2 : i-6); 
            }
            // 2. 합을 11로 나눈 나머지를 구한다.
            // 3. 11에서 나머지를 뺀다.
            // 4. 위의결과를 1으로 나눈 나머지를 구한다.
            sum = (11 - sum%11)%10;
            // 5. 위의 결과가 13번째 자리와 같다면 맞는 주민번호이다.
            // 문자열.substring(n,m) : n부터 m전까지 잘라내기, 문자열.substring(n) : n번째부터 끝까지
            //System.out.print(regNo.substring(0,6) + "-" + regNo.substring(6) + "은 ");
            if(regNo.charAt(12)-'0' == sum){
              //System.out.println("맞는 주민번호입니다.");
              return true;
            }else{
              //System.out.println("틀린 주민번호입니다.");
              return false;
            }
  		} catch (Exception e) { 
  			e.printStackTrace();
  			return false;
  		}
    }	
}