package hsco.cmm.jsch;

import org.springframework.beans.factory.annotation.Value;

public class DucosJschHost {
	
	
	@Value("#{properties['hscos.ServerAddress']}")
	private String hscosServerAddress;
	@Value("#{properties['hscos.SftpPort']}")
	private String hscosSftpPort;
	@Value("#{properties['hscos.UserId']}")
	private String hscosUserId;
	@Value("#{properties['hscos.Password']}")
	private String hscosPassword;
	@Value("#{properties['hscos.app_files']}")
	private String hscosSftRoot;
	
	@Value("#{properties['cntc.ServerAddress']}")
	private String cntcServerAddress;
	@Value("#{properties['cntc.SftpPort']}")
	private String cntcSftpPort;
	@Value("#{properties['cntc.UserId']}")
	private String cntcUserId;
	@Value("#{properties['cntc.Password']}")
	private String cntcPassword;
	@Value("#{properties['cntc.app_files']}")
	private String cntcSftRoot;
	
	@Value("#{properties['hpg.ServerAddress']}")
	private String hpgServerAddress;
	@Value("#{properties['hpg.SftpPort']}")
	private String hpgSftpPort;
	@Value("#{properties['hpg.UserId']}")
	private String hpgUserId;
	@Value("#{properties['hpg.Password']}")
	private String hpgPassword;
	@Value("#{properties['hpg.app_files']}")
	private String hpgSftRoot;
	
	private String hostName;
	protected final static String SFTP_DUCOS = "DUCOS";
	protected final static String SFTP_CNTC = "CNTC";
	protected final static String SFTP_HPG = "HPG";
	
	private String serverAddress;
	private int sftpPort;
	private String userId;
	private String password;
	private String sftpRoot;
	
	
	protected DucosJschHost(String hostName){
		setHostName(hostName);
	}
	
	
    

	/**
	 * @param hostName the hostName to set
	 */
	public void setHostName(String hostName) {
		this.hostName = hostName;
		setServerInfo(hostName);
	}
	
	private void setServerInfo(String hostName){
		if(SFTP_DUCOS.equals(hostName)){
			setServerAddress(getDucosServerAddress());
			String sport = getDucosSftpPort();
			if(sport != null && !"".equals(sport)){
			    setSftpPort(Integer.parseInt(sport));
			} else {
				setSftpPort(22);
			}
			setUserId(getDucosUserId());
			setPassword(getDucosPassword());
			setSftpRoot(getDucosSftRoot());
		} else if(SFTP_CNTC.equals(hostName)){
			setServerAddress(getCntcServerAddress());
			String sport = getCntcSftpPort();
			if(sport != null && !"".equals(sport)){
			    setSftpPort(Integer.parseInt(sport));
			} else {
				setSftpPort(22);
			}
			setUserId(getCntcUserId());
			setPassword(getCntcPassword());
			setSftpRoot(getCntcSftRoot());
		} else if (SFTP_HPG.equals(hostName)){
			setServerAddress(getHpgServerAddress());
			String sport = getHpgSftpPort();
			if(sport != null && !"".equals(sport)){				
				setSftpPort(Integer.parseInt(sport));
			} else {
				setSftpPort(22);
			}
			setUserId(getHpgUserId());
			setPassword(getHpgPassword());
			setSftpRoot(getHpgSftRoot());
		}
	}


	/**
	 * @return the hscosServerAddress
	 */
	protected String getDucosServerAddress() {
		return hscosServerAddress;
	}
	
	
   

	/**
	 * @return the hscosSftpPort
	 */
	protected String getDucosSftpPort() {
		return hscosSftpPort;
	}



	/**
	 * @param hscosSftpPort the hscosSftpPort to set
	 */
	protected void setDucosSftpPort(String hscosSftpPort) {
		this.hscosSftpPort = hscosSftpPort;
	}



	/**
	 * @return the hscosUserId
	 */
	protected String getDucosUserId() {
		return hscosUserId;
	}


	/**
	 * @return the hscosPassword
	 */
	protected String getDucosPassword() {
		return hscosPassword;
	}


	/**
	 * @return the hscosSftRoot
	 */
	protected String getDucosSftRoot() {
		return hscosSftRoot;
	}


	/**
	 * @return the cntcServerAddress
	 */
	protected String getCntcServerAddress() {
		return cntcServerAddress;
	}

	/**
	 * @return the cntcSftpPort
	 */
	protected String getCntcSftpPort() {
		return cntcSftpPort;
	}

	
	/**
	 * @param cntcSftpPort the cntcSftpPort to set
	 */
	protected void setCntcSftpPort(String cntcSftpPort) {
		this.cntcSftpPort = cntcSftpPort;
	}



	/**
	 * @return the cntcUserId
	 */
	protected String getCntcUserId() {
		return cntcUserId;
	}


	/**
	 * @return the cntcPassword
	 */
	protected String getCntcPassword() {
		return cntcPassword;
	}


	/**
	 * @return the cntcSftRoot
	 */
	protected String getCntcSftRoot() {
		return cntcSftRoot;
	}


	/**
	 * @return the hpgServerAddress
	 */
	protected String getHpgServerAddress() {
		return hpgServerAddress;
	}
	
	/**
	 * @return the hpgSftpPort
	 */
	protected String getHpgSftpPort() {
		return hpgSftpPort;
	}


	/**
	 * @param hpgSftpPort the hpgSftpPort to set
	 */
	protected void setHpgSftpPort(String hpgSftpPort) {
		this.hpgSftpPort = hpgSftpPort;
	}

	/**
	 * @return the hpgUserId
	 */
	protected String getHpgUserId() {
		return hpgUserId;
	}


	/**
	 * @return the hpgPassword
	 */
	protected String getHpgPassword() {
		return hpgPassword;
	}


	/**
	 * @return the hpgSftRoot
	 */
	protected String getHpgSftRoot() {
		return hpgSftRoot;
	}


	/**
	 * @return the hostName
	 */
	protected String getHostName() {
		return hostName;
	}


	/**
	 * @return the serverAddress
	 */
	protected String getServerAddress() {
		return serverAddress;
	}


	/**
	 * @return the userId
	 */
	protected String getUserId() {
		return userId;
	}


	/**
	 * @return the password
	 */
	protected String getPassword() {
		return password;
	}


	/**
	 * @return the sftpRoot
	 */
	protected String getSftpRoot() {
		return sftpRoot;
	}

	/**
	 * @return the sftpPort
	 */
	protected int getSftpPort() {
		return sftpPort;
	}


	/**
	 * @param serverAddress the serverAddress to set
	 */
	protected void setServerAddress(String serverAddress) {
		this.serverAddress = serverAddress;
	}

    
	/**
	 * @param sftpPort the sftpPort to set
	 */
	protected void setSftpPort(int sftpPort) {
		this.sftpPort = sftpPort;
	}




	/**
	 * @param userId the userId to set
	 */
	protected void setUserId(String userId) {
		this.userId = userId;
	}




	/**
	 * @param password the password to set
	 */
	protected void setPassword(String password) {
		this.password = password;
	}




	/**
	 * @param sftpRoot the sftpRoot to set
	 */
	protected void setSftpRoot(String sftpRoot) {
		this.sftpRoot = sftpRoot;
	}
	
	
	
	
}