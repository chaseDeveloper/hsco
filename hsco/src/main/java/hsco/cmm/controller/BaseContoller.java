package hsco.cmm.controller;

import java.lang.reflect.Method;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;




import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;

public class BaseContoller  {

	@Value("#{fileStore['logStoreLoc']}")
    private String logStoreLoc;
	
	@Value("#{fileStore['fileStoreLoc']}")
	private String fileLocation;
	
	@Value("#{fileStore['fileSanctnLoc']}")
	private String fileSanctnLocation;
	
    @Value("#{extUrl['messangerUrl']}")
    private String messangerUrl;
    
    @Value("#{extUrl['portalLoginUrl']}")
    private String portalLoginUrl;
    
    @Value("#{extUrl['eSanctionUrl']}")
    private String eSanctionUrl;
    
    @Value("#{extUrl['portalLogoutUrl']}")
    private String portalLogoutUrl;
    
    
    @Value("#{extUrl['localLoginUrl']}")
    private String localLoginUrl;
    
    @Value("#{properties['g2b.url']}")
    private String g2bUrl;

    @Value("#{properties['g2b.svcKey']}")
    private String g2bSvcKey;

    @Value("#{properties['g2b.insttNm']}")
    private String g2bInsttNm;
    
    @Value("#{extUrl['jusoUrl']}")
    private String jusoUrl;
    
    @Value("#{extUrl['jusoKey']}")
    private String jusoKey;
	
	private Logger log = LoggerFactory.getLogger(getClass());
	
	//============================================
	// ServletContext 정보 관련
	//============================================
	
	/**
	 * 요청의 ServletContext 정보를 가지고 있는
	 * servletContext 프로퍼티의 스토리지 변수입니다.
	 */
	protected ServletContext servletContext;

	/**
	 * OnlineContext 정보를 설정합니다.
	 * RoleProcessAspect에서 설정합니다.
	 * @private
	 * @param context
	 */
	public void setOnlieContext(ServletContext context)
	{
		if(context != null) this.servletContext = context;
		
	}
	
	/**
	 * @return the servletContext
	 */
	protected ServletContext getServletContext() {
		return servletContext;
	}
	
    
	public HttpServletRequest getRequest() {
		ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
		HttpServletRequest request = attr.getRequest();
		
		return request;
	}
	
	@SuppressWarnings("unchecked")
	public ModelAndView execService(BaseService serviceClass, String serviceName, 
			NexacroMapDTO xpDto, ModelAndView mav)
		throws Exception
	{
		if(log.isInfoEnabled())
		    log.info("execService started!");
		Class<BaseService> serviceImpl = (Class<BaseService>)serviceClass.getClass();
		
		DataSetMap tranInfo 				= xpDto.getTranInfoMap();
		Map <String, Object> inVar 			= xpDto.getInVariableMap();
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
		Map <String, Object> outVar 		= xpDto.getOutVariableMap();
		Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
		
		HttpServletRequest request 			= xpDto.getRequest();

		//BaseService baseService = serviceImpl.cast(serviceClass);
		serviceClass.setXpDto(xpDto);
		serviceClass.setRequest(request);
		serviceClass.setLogStoreLoc(logStoreLoc);
		serviceClass.setFileLocation(fileLocation);
		serviceClass.setFileSanctnLocation(fileSanctnLocation);
		serviceClass.setMessangerUrl(messangerUrl);
		serviceClass.setPortalLoginUrl(portalLoginUrl);
		serviceClass.setESanctionUrl(eSanctionUrl);
		serviceClass.setLocalLoginUrl(g2bUrl);
		serviceClass.setLocalLoginUrl(g2bSvcKey);
		serviceClass.setLocalLoginUrl(g2bInsttNm);
		serviceClass.setPortalLogoutUrl(portalLogoutUrl);
		serviceClass.setLocalLoginUrl(localLoginUrl);
		serviceClass.setJusoUrl(jusoUrl);
		serviceClass.setJusoKey(jusoKey);
		
		xpDto.getInVariableMap().put("logStoreLoc", logStoreLoc);	// Service to Service 대비
		xpDto.getInVariableMap().put("fileLocation", fileLocation);	// Service to Service 대비
		xpDto.getInVariableMap().put("fileSanctnLocation", fileSanctnLocation);	// Service to Service 대비
		xpDto.getInVariableMap().put("messangerUrl", messangerUrl);	// Service to Service 대비
		xpDto.getInVariableMap().put("portalLoginUrl", portalLoginUrl);	// Service to Service 대비
		xpDto.getInVariableMap().put("eSanctionUrl", eSanctionUrl);	// Service to Service 대비
		xpDto.getInVariableMap().put("g2bUrl",         g2bUrl);    	// Service to Service 대비
		xpDto.getInVariableMap().put("g2bSvcKey",      g2bSvcKey);	// Service to Service 대비
		xpDto.getInVariableMap().put("g2bInsttNm",     g2bInsttNm);	// Service to Service 대비
		xpDto.getInVariableMap().put("portalLogoutUrl", portalLogoutUrl); 
		xpDto.getInVariableMap().put("localLoginUrl", localLoginUrl); 
		xpDto.getInVariableMap().put("jusoUrl", jusoUrl); 
		xpDto.getInVariableMap().put("jusoKey", jusoKey); 
		
		Method method = serviceImpl.getMethod(serviceName, 
					new Class[]{DataSetMap.class, Map.class, Map.class, Map.class, Map.class});
		
		method.invoke(serviceClass, new Object[]{tranInfo, inVar, inDataset, outVar, outDataset});
		
		mav.addObject(NexacroConstant.OUT_VARIABLES_ATT_NAME, xpDto.getOutVariableMap());
		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, 	xpDto.getOutDataSetMap());
		
		return mav;		
	}
	
	public HttpServletResponse getResponse() {
		HttpServletRequest request = this.getRequest();
		ServletWebRequest servletWebRequest=new ServletWebRequest(request);

		HttpServletResponse response=servletWebRequest.getResponse();
		return response;
	}
	
	public String getPortalLoginUrl(){
		return portalLoginUrl;
	}
	
	public String getPortalLogoutUrl(){
		return portalLogoutUrl;
	}
	
	public String getLocalLoginUrl() {
		return localLoginUrl;
	}
	
	public String getMessangerUrl(){
		return messangerUrl;
	}
	
	public String getFileLocation(){
		return fileLocation;
	}
	
	public String getFileSanctnLocation(){
		return fileSanctnLocation;
	}


	/**
	 * @return the jusoUrl
	 */
	public String getJusoUrl() {
		return jusoUrl;
	}


	/**
	 * @param jusoUrl the jusoUrl to set
	 */
	public void setJusoUrl(String jusoUrl) {
		this.jusoUrl = jusoUrl;
	}


	/**
	 * @return the jusoKey
	 */
	public String getJusoKey() {
		return jusoKey;
	}


	/**
	 * @param jusoKey the jusoKey to set
	 */
	public void setJusoKey(String jusoKey) {
		this.jusoKey = jusoKey;
	}
	
    
}
