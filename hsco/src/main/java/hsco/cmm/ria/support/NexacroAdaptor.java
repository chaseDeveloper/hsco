package hsco.cmm.ria.support;


import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.tx.HttpPlatformRequest;


/**
 * X-Platform MiAdaptor 클래스
 * @author 개발팀 홍길동
 * @since 2010.01.01
 * @version 1.0
 * @see
 *
 * <pre>
 * << 개정이력(Modification Information) >>
 *   
 *   수정일      수정자           수정내용
 *  -------    --------    ---------------------------
 *   2010.01.01  홍길동          최초 생성
 *
 * </pre>
 */

public abstract class NexacroAdaptor implements UiAdaptor { 

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	public Object convert(HttpServletRequest request) throws Exception {
		
		HttpPlatformRequest httpPlatformRequest = null;

		try {
			
			/*
			 * client에서 요청한 data를 request객체를 이용하여 확인할 수 있는 예 
			 * 
			 * byte[] b = new byte[1024];
			 * InputStream is = request.getInputStream();
			 * BufferedInputStream bis = new BufferedInputStream(is);
			 * while( bis.read(b, 0, b.length) > -1) {
			 * 		System.out.println(new String(b));
			 * }
			 * 
			 */
			
			/**
			 * 요청구분에 따라 httpPlatformRequest 정보 구성처리
			 */
			//String requestMethod = request.getMethod();
			String contentType = request.getContentType();
			
			httpPlatformRequest = null;
			if(contentType != null && contentType.indexOf("multipart/form-data") > -1){
				
				String strInDataset = request.getParameter("inputDatasets");
				
				httpPlatformRequest = new HttpPlatformRequest(request);	
				PlatformData pdata = new PlatformData();
				pdata.loadXml(strInDataset);
				
				httpPlatformRequest.setData(pdata);
				
			}else{
				
				httpPlatformRequest = new HttpPlatformRequest(request);
				httpPlatformRequest.receiveData();
				
			}		
			
		} catch (Exception ex) {
			//ex.getStackTrace();
			throw new Exception("HttpPlatformRequest error");
		}

		/*
		 * HttpPlatformRequest 에서 VariableList 와 DatasetList 를 뽑아 결정된 Map
		 * 형태(example : ModelMap) 또는 VO 객체에 담아 return 한다.
		 */
				
		Object dto = converte4In(httpPlatformRequest, request);
		
		return dto;
	}

	public abstract Object converte4In(HttpPlatformRequest httpPlatformRequest, HttpServletRequest request);
	
	public abstract Class getModelName();
	
}
