package hsco.cmm.cntn.impl;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.net.SocketAddress;
//import java.net.URL;
//import java.net.URLConnection;
//import java.net.URLEncoder;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.Vector;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
//import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import hsco.cmm.cntn.domain.CntnMessengerDO;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

@Service
public class CntnMessengerServiceImpl extends BaseService {
	
	private Logger log = LoggerFactory.getLogger(getClass());

	/*
	@SuppressWarnings("unchecked")
	@Async
	public void send(Map<String, Object> inVar, CntnMessengerDO domain) {
		
//		boolean bResult = true;
		String messangerUrl = (String)inVar.get("messangerUrl");
		Map<String, String> mapUserInfo = (Map<String, String>) inVar.get(NexacroConstant.SESSION_USER_MAP_NAME);
		String userNm = mapUserInfo.get("USER_NM");
		
		if(null==domain.getFromEmpNm()
			|| "".equals(domain.getFromEmpNm())){
			domain.setFromEmpNm(userNm);
		}
		
		if("".equals(StringUtil.parseNull(messangerUrl))){
			log.debug("메신저팝업 송신오류. 메신저 송신 URL 미지정");
//			return false;
		}
		
		if("".equals(StringUtil.parseNull(domain.getFromEmpNm()))){
			log.debug("메신저팝업 송신오류. 보내는사람 미지정");
//			return false;
		}
		
		if("".equals(StringUtil.parseNull(domain.getToEmpNo()))){
			log.debug("메신저팝업 송신오류. 받는사람 미지정");
//			return false;
		}else{
			domain.setToEmpNo((String)baseDao.select("MessengerDAO.selectUserId",domain.getToEmpNo()));
		}
		
		if("".equals(StringUtil.parseNull(domain.getTitle()))){
			log.debug("메신저팝업 송신오류. 타이틀 미입력");
//			return false;
		}
		
		if("".equals(StringUtil.parseNull(domain.getMessage()))){
			log.debug("메신저팝업 송신오류. 내용 미입력");
//			return false;
		}
		
		InputStream in = null;
		try{
			StringBuffer param = new StringBuffer();
			param.append("message1=").append(domain.getToEmpNo())
				 .append("&message2=").append(URLEncoder.encode(domain.getFromEmpNm(),"UTF-8"))
				 .append("&message3=").append(URLEncoder.encode(domain.getMessage(),"UTF-8"))
				 .append("&message4=").append(domain.getAttachUrl())
				 .append("&message5=").append(URLEncoder.encode(domain.getTitle(),"UTF-8"));

			String apiUrl = messangerUrl + "?" + param.toString();
			
			URL url = new URL(apiUrl);
			URLConnection connection = url.openConnection();
			connection.setReadTimeout(500);
			connection.setDoOutput(false);
			in = connection.getInputStream();
		}catch(Exception e){
//			bResult = false;
			//e.printStackTrace();
		}finally{
			if(in!=null) try{in.close();}catch(Exception e){e.printStackTrace();};
		}
//		return bResult;
	}
	*/
	
	private Socket sc;
	private InputStream is = null;
	private OutputStream os = null;
	
	private String serverIp;
	private int serverPort;
	
	private Vector<String> uidAr;
	private Vector<String> cntAr;
	private Vector<String> urlAr;
	
	private char DOMMI = 15;
	private String reserved = "Reserved";

	public CntnMessengerServiceImpl(){
		this.serverIp = "192.168.10.225";
		this.serverPort = 1234;
		
		uidAr = new Vector<String>();
		cntAr = new Vector<String>();
		urlAr = new Vector<String>();
	}
	
	@SuppressWarnings("unchecked")
	public boolean addMessage(Map<String, Object> inVar, CntnMessengerDO domain) {
		boolean bSuccess = true;
		Map<String, String> mapUserInfo = (Map<String, String>) inVar.get(NexacroConstant.SESSION_USER_MAP_NAME);
		String userNm = mapUserInfo.get("USER_NM");
		
		//Select Message Content
		String messageCode = StringUtil.parseNull(domain.getMessageCode());
		if("".equals(messageCode)){
			log.debug("Messenger ::: 메신저 코드 미지정");
			return false;
		}
		
		Map<String, String> messageInfo = (HashMap<String, String>)baseDao.select("MessengerDAO.selectMessengerContent",messageCode);
		if(messageInfo==null){
			log.debug("Messenger ::: 메신저 메시지정보 미등록");
			return false;
		}
		domain.setMessageInfo(messageInfo);
		
		if(null==domain.getFromEmpNm()
				|| "".equals(domain.getFromEmpNm())){
				domain.setFromEmpNm(userNm);
		}
		
		String fromEmpNm = StringUtil.parseNull(domain.getFromEmpNm());
		String toEmpNo = StringUtil.parseNull(domain.getToEmpNo());
		String toEmpNo_intra = "";
		String type = "ALERTMSG";
		String script = "SDS";
		
		if("".equals(fromEmpNm)){
			log.debug("Messenger ::: 메신저팝업 송신오류. 보내는사람 미지정");
			return false;
		}
		
		if("".equals(toEmpNo)){
			log.debug("Messenger ::: 메신저팝업 송신오류. 받는사람 미지정");
			return false;
		}else{
			toEmpNo_intra = (String)baseDao.select("MessengerDAO.selectUserId",domain.getToEmpNo());
		}
		
		StringBuffer msg = new StringBuffer();
		msg.append("0").append(DOMMI);
		msg.append("1").append(DOMMI);
		msg.append(type).append(DOMMI);
		msg.append(domain.getUrl()).append(DOMMI);
		msg.append(reserved).append(DOMMI);
		msg.append(toEmpNo_intra).append(DOMMI);
		msg.append(fromEmpNm).append(DOMMI);
		msg.append(reserved).append(DOMMI);
		msg.append(reserved).append(DOMMI);
		msg.append(reserved).append(DOMMI);
		msg.append("2").append(DOMMI);
		msg.append(getSendTime()).append(DOMMI);
		msg.append("0").append(DOMMI);
		msg.append(reserved).append(DOMMI);
		msg.append(domain.getContent()).append(DOMMI);
		msg.append(domain.getTitle());
		
		uidAr.add(toEmpNo_intra);
		cntAr.add(msg.toString());
		urlAr.add(script);
		
		Map<String, String> logMap = new HashMap<String, String>();
		logMap.put("RCVER_USER_ID", toEmpNo);
		logMap.put("RCVER_USER_NM", StringUtil.parseNull(domain.getToEmpNm()));
		logMap.put("SENDER_USER_ID", StringUtil.parseNull(domain.getFromEmpId()));
		logMap.put("SENDER_USER_NM", fromEmpNm);
		logMap.put("NTCN_SJ", domain.getTitle());
		logMap.put("LINK_ADRES", domain.getUrl());
		logMap.put("NTCN_CN", domain.getContent());
		logMap.put("REGISTER_ID", StringUtil.parseNull(domain.getFromEmpId()));
		logMap.put("UPDUSR_ID", StringUtil.parseNull(domain.getFromEmpId()));
		baseDao.insert("MessengerDAO.insertLog", logMap);
		
		return bSuccess;
	}
	
	public void send(Map<String, Object> inVar, CntnMessengerDO domain) {
		addMessage(inVar, domain);
		BufferedReader br = null;
		BufferedWriter bw = null;
		
		if (connect()) {
			try {
				br = new BufferedReader(new InputStreamReader(is));
				bw = new BufferedWriter(new OutputStreamWriter(os, "EUC-KR"));
				
				for (int i =uidAr.size()-1; i>=0 ; i--) {
					StringBuffer sb = new StringBuffer();
					sb.append("SYSMSG").append("\t");
					sb.append(uidAr.elementAt(i)).append("\t");
					sb.append(cntAr.elementAt(i)).append("\t");
					sb.append(urlAr.elementAt(i)).append("\f");
					
					bw.write(sb.toString());
					bw.flush();
					
					System.out.println("[INFO] " + sb.toString());
					
					if (!getMessage(br, "ok")){
						throw new Exception("Cannot send message");
					}else{
						uidAr.removeElementAt(i);
						cntAr.removeElementAt(i);
						urlAr.removeElementAt(i);
					}
				}
			} catch(Exception e) {
				e.printStackTrace();
			} finally {
				if (br != null) {try {br.close(); br = null;} catch(Exception ee) {}}
				if (bw != null) {try {bw.close(); bw = null;} catch(Exception ee) {}}
				if (sc != null) {try {sc.close(); sc = null;} catch(Exception ee) {}}
			}
		}
	}
	
	private boolean connect() {
		boolean isConnected = false;
		SocketAddress addr = new InetSocketAddress(serverIp, serverPort);
		StringBuffer msg = new StringBuffer();
		
		try {
			sc = new Socket();
			sc.connect(addr);
			
			is = sc.getInputStream();
			os = sc.getOutputStream();
			
			msg.append("Server [").append(serverIp).append("][").append(serverPort).append("] Connected...");
			System.out.println(msg.toString());
			
			isConnected = true;
		} catch(Exception e) {
			msg.append("[ERROR] connect: [").append(e.getMessage()).append("][").append(serverIp).append("][").append(serverPort).append("]");
			System.out.println(msg.toString());
		}
		
		return isConnected;
	}
	
	private boolean getMessage(BufferedReader br, String targetStr) throws Exception {
		char[] buf = new char[1024];
		int rcv = 0;
		
		boolean isSuccess = false;
		StringBuffer sb = new StringBuffer();
		while ((rcv = br.read(buf, 0, 1024)) >= 0) {
			sb.append(new String(buf, 0, rcv));
			
			if (sb.indexOf(targetStr) >= 0) {
				isSuccess = true;
				break;
			}
		}
		return isSuccess;
	}
	
	private String getSendTime() {
		Calendar cal = Calendar.getInstance();
		String indt = cal.getTimeInMillis() + "";
		
		if (indt.length() > 10) indt = indt.substring(0, 10);
		
		return indt;
	}
}
