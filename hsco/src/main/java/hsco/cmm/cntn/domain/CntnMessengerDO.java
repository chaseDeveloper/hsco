package hsco.cmm.cntn.domain;

import java.util.Map;

import hsco.HscoConstant;

public class CntnMessengerDO {
	public String getTitle() {
		return this.messageInfo.get("TITLE");
	}
	public String getFromEmpId() {
		return fromEmpId;
	}
	public void setFromEmpId(String fromEmpId) {
		this.fromEmpId = fromEmpId;
	}
	public String getFromEmpNm() {
		return fromEmpNm;
	}
	public void setFromEmpNm(String fromEmpNm) {
		this.fromEmpNm = fromEmpNm;
	}
	public String getToEmpNo() {
		return toEmpNo;
	}
	public void setToEmpNo(String toEmpNo) {
		this.toEmpNo = toEmpNo;
	}
	public String getToEmpNm() {
		return toEmpNm;
	}
	public void setToEmpNm(String toEmpNm) {
		this.toEmpNm = toEmpNm;
	}
	public String getUrl(){
		String mid = this.messageInfo.get("MENU_ID");
		String pid = this.messageInfo.get("PID");
		return HscoConstant.MAIN_DOMAIN + "/web/hsco/index.jsp?id="+this.toEmpNo+"&sid=PORTAL&mid="+mid+"&pid="+pid;
	}
	public void setChangeWordMap(Map<String, String> changeWordMap){
		this.changeWordMap = changeWordMap;
	}
	public String getContent(){
		String content = this.messageInfo.get("CONTENT");
		for(String s : this.changeWordMap.keySet()){
			content = content.replaceAll("%"+s+"%", this.changeWordMap.get(s));
		}
		return content;
	}
	
	public void setMessageCode(String messageCode) {
		this.messageCode = messageCode;
	}
	public String getMessageCode(){
		return this.messageCode;
	}
	public void setMessageInfo(Map<String, String> messageInfo){
		this.messageInfo = messageInfo;
	}
	
	private Map<String, String> changeWordMap;	//changeWordMap
	private Map<String, String> messageInfo;	//message content info (sql result)
	private String fromEmpNm;
	private String fromEmpId;
	private String toEmpNo;
	private String toEmpNm;
	private String messageCode;
}
