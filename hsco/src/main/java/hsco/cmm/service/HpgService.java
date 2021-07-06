package hsco.cmm.service;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import egovframework.rte.psl.orm.ibatis.support.SqlMapClientDaoSupport;
import hsco.cmm.dao.HpgDao;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HpgService.java
 * @Description  	: 홈페이지 관리자용 Service 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 9. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 16.	정윤원			최초생성
 * </pre>
 */
public class HpgService  {
	
	@Resource(name="HpgDao")
	protected HpgDao hpgDao;
	
	private String logStoreLoc;
	
	private HttpServletRequest request;
	
	public void setRequest(HttpServletRequest request){
		this.request = request;
	}
	
	public HttpServletRequest getRequest(){
		return this.request;
	}
	
	private NexacroMapDTO xpDto;
	public void setXpDto(NexacroMapDTO xpDto){
		this.xpDto = xpDto;
	}
	
	public NexacroMapDTO getXpDto(){
		return xpDto;
	}
	
	public String getLogStoreLoc(){
		return this.logStoreLoc;
	}
	
	public void setLogStoreLoc(String logStoreLoc){
		this.logStoreLoc = logStoreLoc;
	}
	
	private String fileLocation;
	public void setFileLocation(String fileLocation){
		this.fileLocation = fileLocation;
	}
	
	public String getFileLocation(){
		return this.fileLocation;
	}
	
	private String messangerUrl;
	public void setMessangerUrl(String messangerUrl){
		this.messangerUrl = messangerUrl;
	}
	
	public String getMessangerUrl(){
		return this.messangerUrl;
	}
		
	private String portalLoginUrl;
	public String getPortalLoginUrl(){
		return this.portalLoginUrl;
	}
	public void setPortalLoginUrl(String portalLoginUrl){
		this.portalLoginUrl = portalLoginUrl;
	}
	
	private String eSanctionUrl;
	public void setESanctionUrl(String eSanctionUrl){
		this.eSanctionUrl = eSanctionUrl;
	}
	private String portalLogoutUrl;
	public String getPortalLogoutUrl(){
		return this.portalLogoutUrl;
	}
	
	public void setPortalLogoutUrl(String portalLogoutUrl){
		this.portalLogoutUrl = portalLogoutUrl;
	}
	
	public String getESanctionUrl(){
		return this.eSanctionUrl;
	}
	
	private String localLoginUrl;
	public String getLocalLoginUrl(){
		return this.localLoginUrl;
	}
	
	public void setLocalLoginUrl(String localLoginUrl){
		this.localLoginUrl = localLoginUrl;
	}
	
	private String g2bUrl;
	public void setG2bUrl(String g2bUrl){
		this.g2bUrl = g2bUrl;
	}
	public String getG2bUrl(){
		return this.g2bUrl;
	}
	
	private String g2bSvcKey;
	public void setG2bSvcKey(String g2bSvcKey){
		this.g2bSvcKey = g2bSvcKey;
	}
	public String getG2bSvcKey(){
		return this.g2bSvcKey;
	}
	
	private String g2bInsttNm;
	public void setG2bInsttNm(String g2bInsttNm){
		this.g2bInsttNm = g2bInsttNm;
	}
	public String getG2bInsttNm(){
		return this.g2bInsttNm;
	}
	
    private String jusoUrl;
    
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

	private String jusoKey;
	
	
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

	/**
	 * Client IP 가져오기.
	 * WebServer에 따라 IP 를 가져 올수 있게 설정
	 * @return
	 */
	public String getRemoteAddr() {
		
		String ipAddr = null;		
		ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
		HttpServletRequest request = attr.getRequest();
		
		ipAddr = request.getHeader("X-Forwarded-For") ;
		if( ipAddr == null || ipAddr.length() == 0 || "unknown".equalsIgnoreCase(ipAddr) )
			ipAddr = request.getHeader("Proxy-Client-IP");
		
		if( ipAddr == null || ipAddr.length() == 0 || "unknown".equalsIgnoreCase(ipAddr) )
			ipAddr = request.getHeader("WL-Proxy-Client-IP");
		
		if( ipAddr == null || ipAddr.length() == 0 || "unknown".equalsIgnoreCase(ipAddr) )
			ipAddr = request.getHeader("HTTP_CLIENT_IP");
		
		if( ipAddr == null || ipAddr.length() == 0 || "unknown".equalsIgnoreCase(ipAddr) )
			ipAddr = request.getHeader("HTTP_X_FORWARDED_FOR");
		
		if( ipAddr == null || ipAddr.length() == 0 || "unknown".equalsIgnoreCase(ipAddr) )
			ipAddr = request.getRemoteAddr();
		
		return ipAddr;
	}
	
	public SqlMapClientDaoSupport getDao() {
		return hpgDao.getDao();
	}

}
