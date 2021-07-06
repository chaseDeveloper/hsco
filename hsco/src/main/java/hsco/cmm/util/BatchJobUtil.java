package hsco.cmm.util;

import java.util.HashMap;
import java.util.Map;

public class BatchJobUtil {
	public static Map<String, Object> parseParameter(String paramtr){
		Map<String, Object> map;
		if(paramtr.contains(";")){
			map = new HashMap<String, Object>();
		    String[] paramArr = paramtr.split(";");
		    for(int i=0; i<paramArr.length; i++){
		    	if(paramArr[i] != null){
		    		String[] pArr = paramArr[i].split("=");
			        String key = pArr[0];
			        String val = pArr[1];
			        map.put(key, val);
		    	}
		    }
		} else {
			map = new HashMap<String, Object>();
			if(paramtr.contains("=")){
				String[] pArr = paramtr.split("=");
		        String key = pArr[0];
		        String val = pArr[1];
		        map.put(key, val);
			}
		}
		return map;
	}
	
}