package hsco.cmm.message;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: MessageMngServiceImpl.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 8. 7.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 7.					정윤원				최초생성
 * </pre>
 */

@Service("MessageMngService")
public class MessageMngServiceImpl implements MessageMngService {
	
	private final Map<String, Object> MessageMap = new HashMap<String, Object>();
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
	
    @Resource(name="MessageMngDao")
    private MessageMngDao MessageMngDao;

	@Override
	public String getMessage(String groupKey) {
		
		String result = null;
		
		if (MessageMap.isEmpty()) {
            synchronized (MessageMap) {
                if (MessageMap.isEmpty()) {
                	
                    List list = MessageMngDao.getList(null);
                    
                    int size = (list==null) ? 0 : list.size();
                    
                    if( size > 0 ) MessageMap.clear();
                    
                    for(int i=0; i<size; i++)
                    {
                    	HashMap<String, Object> map = (HashMap)list.get(i);
                    	
                    	String key = (String)map.get("MSSAGE_CODE");
                    	String value = (String)map.get("MSSAGE_NM");

                    	MessageMap.put(key, value);
                    	
                    }	// end for
                } // end of if (MessageMap.isEmpty())
            }	// end of synchronized
        }
		
		Object object = MessageMap.get(groupKey);
		
		if(object == null) {
			result = "[" + groupKey + "] 정의되지 않은 메세지형입니다.";
		}
		else {
			result = (String)object;
		}
 
        return result;

	}

	@Override
	public void invalidateMessageCache() {
		// map 초기화
		MessageMap.clear();

	}

}
