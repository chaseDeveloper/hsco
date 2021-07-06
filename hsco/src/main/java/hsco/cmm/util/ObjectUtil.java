package hsco.cmm.util;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.MutablePropertyValues;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.support.RequestContextUtils;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;


/**
 * Object Utils
 * @author eniac
 */
@SuppressWarnings("unchecked")
public class ObjectUtil {

	public ObjectUtil() {
		super();
	}

	public static Map getParameterMap(HttpServletRequest request)throws Exception {
		return getParameterMap(request, null, true);
	}

	/**
	 * OBJ <-- session (User)
	 * @param request
	 * @param obj
	 * @return
	 */
	public static Map getParameterMap(HttpServletRequest request, Object obj) throws Exception{
		return getParameterMap(request, obj, true);
	}
	
	/**
	 * Request 의 세션값을 가져온다.
	 * 스프링 AOP내에서 가져오기 위해 Holder 사용.
	 * @param sessionName
	 * @return
	 */
	public static Object getSessionObj(String sessionName) throws NexaServiceException
	{
		
		Object resultObj = null;

			ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
            HttpServletRequest request = attr.getRequest();
			
			if( request != null) {
			
				HttpSession sessionInfo = request.getSession();
				
				resultObj = (Object)sessionInfo.getAttribute(sessionName);			
			}
			else {
				throw new NexaServiceException("err.서비스요청.무효");			
			}			
		
		return resultObj;
	}
	
	
	/**
	 * 개발시 공통으로 들어가는 수정자 부분 값을 맵에 넣어준다.
	 * LoginVO 내에 Login정보가 세션에 존재하므로 이를 사용.
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public static void setUserToMap( Object object) 
	{
		if(object == null) return; 
		
		HashMap<String, Object> resultMap = (HashMap<String, Object>)object;
		
		String userId = null;
		String userNm = null;
		String deptCd = null;
		String ipAddr = null;
		
		try {
			// Batch 실행시 세션 확보 불가능한 경우
			userId = (String)ObjectUtil.getSessionObj("S_USER_ID");
			userNm = (String)ObjectUtil.getSessionObj("S_USER_NM");
			deptCd = (String)ObjectUtil.getSessionObj("S_DEPT_CODE");
			ipAddr = (String)ObjectUtil.getSessionObj("S_USER_IP");
		} catch  (IllegalStateException e) {
			userId = (String)resultMap.get("S_USER_ID");
			userNm = (String)resultMap.get("S_USER_NM");
			deptCd = (String)resultMap.get("S_DEPT_CODE");
			ipAddr = (String)resultMap.get("S_USER_IP");		}
		
		resultMap.put("S_USER_ID", userId == null ? "SYSTEM": userId);
		resultMap.put("S_USER_NM", userNm == null ? "시스템" : userNm);
		resultMap.put("S_DEPT_CODE", deptCd == null ? "999999" : deptCd);
		resultMap.put("S_USER_IP", ipAddr == null ? "unknown host" : ipAddr);
	}
	
	/**
	 * 개발시 공통으로 들어가는 수정자 부분 값을 맵에 넣어준다.
	 * LoginVO 내에 Login정보가 세션에 존재하므로 이를 사용.
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public static void setBatchUserToMap(Object object) 
	{
		
		HashMap<String, Object> resultMap = (HashMap<String, Object>)object;
	
		
		resultMap.put("S_USER_ID", "SYSTEM");
		resultMap.put("S_USER_NM", "배치시스템");
		resultMap.put("S_DEPT_CODE", "000000");
		resultMap.put("S_USER_IP", "192.168.10.223");
	}
	

	@SuppressWarnings("deprecation")
	public static Map getParameterMap(HttpServletRequest request, Object obj, boolean containAttribute)throws Exception {

		Map paramMap = new HashMap();
		WebApplicationContext context = null;

		Enumeration e = request.getSession().getAttributeNames();
		while (e.hasMoreElements()) {
			try{
				String key = (String) e.nextElement();
				if("User".equals(key) || "categoryListingType".equalsIgnoreCase(key)
						|| "store_category".equalsIgnoreCase(key)|| "Config".equalsIgnoreCase(key)){
					if(obj != null){
						DomainBinderUtil binder = new DomainBinderUtil(obj);
						MutablePropertyValues mpvs = new MutablePropertyValues();
						mpvs.addPropertyValue(key.toLowerCase(), request.getSession().getValue(key));
						binder.doBind(mpvs);
					}
					paramMap.put(key, request.getSession().getValue(key));
				}
			}catch(Exception ei){
				ei.printStackTrace();
			}
		}

		// Grid Used according to the presence or absence of branching
		//if(null != request.getParameter("mode")){
		

			e = request.getParameterNames();
			while (e.hasMoreElements()) {
				String key = (String) e.nextElement();
				String[] values = request.getParameterValues(key);
				if (values.length == 1) {
					paramMap.put(key, values[0].trim());
				} else {
					paramMap.put(key, values);
				}
			}

			if (containAttribute) {
				e = request.getAttributeNames();
				while (e.hasMoreElements()) {
					String key = (String) e.nextElement();
					paramMap.put(key, request.getAttribute(key));
				}
			}

			MultipartHttpServletRequest mpRequest = null;
			if (request instanceof MultipartHttpServletRequest) {
				mpRequest = (MultipartHttpServletRequest) request;
				Iterator iter = mpRequest.getFileNames();
				while (iter.hasNext()) {
					String key = (String) iter.next();
					MultipartFile file = mpRequest.getFile(key);
					if (file.getSize() > 0) {
						paramMap.put(key, file);
					}
				}
			}


		//Top title, Left menu setting
//		if(paramMap.get("cur_parent_cd") != null && paramMap.get("cur_menu_cd") != null){
//			request.getSession().setAttribute("cur_menu_cd", paramMap.get("cur_menu_cd"));
//			request.getSession().setAttribute("cur_parent_cd", paramMap.get("cur_parent_cd"));
//			request.getSession().setAttribute("cur_parent_nm", MenuUtil.getParent_nm((List)request.getSession().getAttribute("MenuList"), (String)paramMap.get("cur_parent_cd")));
//			request.getSession().setAttribute("cur_menu_nm", MenuUtil.getMenu_nm((List)request.getSession().getAttribute("MenuList"), (String)paramMap.get("cur_menu_cd")));
//			request.getSession().setAttribute("cur_menu_navi", MenuUtil.getMenu_navi((List)request.getSession().getAttribute("MenuList"), (String)paramMap.get("cur_menu_cd")));
//		}

		// required setting
		if(paramMap.get("currPage") == null || paramMap.get("currPage").equals("") || paramMap.get("currPage").equals("undefined"))
			paramMap.put("currPage", "1");
		if(paramMap.get("pageLine") == null || paramMap.get("pageLine").equals("") || paramMap.get("pageLine").equals("undefined"))
			paramMap.put("pageLine", "10");

		// Local Vs Server
		context = RequestContextUtils.getWebApplicationContext(request);
		String realPath = context.getServletContext().getRealPath("");
		paramMap.put("realPath", realPath);
		String server_name = request.getServerName();

//		System.out.println("realPath=[" + realPath + "]");

		if("hscos.hsco.kr.kr".equals(server_name)){
			paramMap.put("serverType", "real");
		}

		return paramMap;
	}

	public static String toStrTrim(Object obj) {
		if (obj == null) {
			return "";
		}

		return String.valueOf(obj).trim();
	}

	/**
	 * request ---> file list
	 * @param request
	 * @return
	 */
	public static Map getFileList(HttpServletRequest request){

		MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;

		Map<String, MultipartFile> files = multiRequest.getFileMap();

		return files;

	}
	
	/**
	 * Convert Object to Map
	 * @param fromObj
	 * @param sUpperDiv
	 * @return
	 */
	public static Map<String, Object> getObjectToMap(Object obj, String sUpperDiv){
		
		java.lang.reflect.Field[] fields = obj.getClass().getDeclaredFields();
		Map<String, Object> map = new HashMap<String, Object>();
		for(int i=0 ; i < fields.length ; i++ ) {
			// private 변수에 접근 허용
			fields[i].setAccessible(true);
			try {
				// 변수 명을 key로 value 저장.
				String sKey = fields[i].getName();
				if(sUpperDiv != null)
					sKey = (fields[i].getName()).toUpperCase();
				
				map.put(sKey, fields[i].get(obj));
			} catch (IllegalArgumentException e) {
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			}
		}
		
		return map;
	}
	
	/**
	 * Convert Object to List<Map>
	 * @param fromObj
	 * @param sUpperDiv
	 * @return
	 */
	public static List<Map> getObjectToList(Object obj, String sUpperDiv){
		
		
		List<Map> resultList = new ArrayList<Map>();
		Map<String, Object> map = new HashMap<String, Object>();
		
		java.lang.reflect.Field[] fields = obj.getClass().getDeclaredFields();
		
		for(int i=0 ; i < fields.length ; i++ ) {
			// private 변수에 접근 허용
			fields[i].setAccessible(true);
			try {
				// 변수 명을 key로 value 저장.
				String sKey = fields[i].getName();
				if(sUpperDiv != null)
					sKey = (fields[i].getName()).toUpperCase();
				
				map.put(sKey, fields[i].get(obj));
			} catch (IllegalArgumentException e) {
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			}
		}
		resultList.add(map);
		
		return resultList;
	}
	
	/**
	 * DataSet 에서 특정컬럼의 특정값을 가지는 Row Index를 반환한다.
	 * @param ds
	 * @param keyName
	 * @param value
	 * @return
	 */
	public static int findRowIndexInDs(DataSetMap ds, String keyName, String value){
		int findRow = -1;
		int dsSize = ds.size();
		for(int i = 0; i < dsSize; i++){
			String findKeyValue = (String)ds.getMapValue(i, keyName);
			
			if(value.equals(findKeyValue)){
				findRow = i;
				break;
			}
		}
		return findRow;
	}
	
	/**
	 * List에서 특정컬럼의 특정값을 가지는 Row Item(Map)을 반환한다.
	 * @param list
	 * @param keyName
	 * @param value
	 * @return Map
	 */
	public static Map<String, Object> findRowItemInList(List<Map<String, Object>> list, String keyName, String value){
	
		Map<String, Object> findRowItem = null;
		for(Map<String, Object> listItem : list){
			String findKeyValue = (String)listItem.get(keyName);
			
			if(value.equals(findKeyValue)){
				findRowItem = listItem;
				break;
			}
		}
		
		return findRowItem;
	}
	
	/**
	 * List에서 특정컬럼의 특정값을 가지는 Row Item(Map)의 목록을 반환한다.
	 * @param list
	 * @param keyName
	 * @param value
	 * @return List
	 */
	public static List<Map<String, Object>> findRowsItemInList(List<Map<String, Object>> list, String keyName, String value){
	
		List<Map<String, Object>> resultList = null;
		
		Map<String, Object> findRowItem = null;
		for(Map<String, Object> listItem : list){
			String findKeyValue = (String)listItem.get(keyName);
			
			if(value.equals(findKeyValue)){
				findRowItem = listItem;
				if(resultList == null){
					resultList = new ArrayList<Map<String,Object>>();
				}
				
				resultList.add(findRowItem);
			}
		}
		
		return resultList;
	}
	
	public static  ArrayList cvtDataSetMapToArrayList(DataSetMap list, String key){
        ArrayList<Object> arrList = new ArrayList<Object>();
		int listSize = list.size();
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			arrList.add(map.get(key));
		}
		return arrList;
	}
	
	public static  ArrayList cvtMapListToArrayList(List<Map> list, String key){
	        ArrayList<Object> arrList = new ArrayList<Object>();
			int listSize = list.size();
			for (int x = 0; x < listSize; x++) {
				
				Map map = list.get(x);
				arrList.add(map.get(key));
			}
			return arrList;
		}
	
}