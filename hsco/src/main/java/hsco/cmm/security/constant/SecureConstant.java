package hsco.cmm.security.constant;
/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SecureConstant.java
 * @Description  	: Spring Security 사용자 정의 상수
 * @author       	: 정윤원
 * @since        	: 2016. 3. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016.3.17.	       정윤원		   최초생성
 * </pre>  
 */
public class SecureConstant {
	public final static String DUCOS_LOGIN_PAGE_URI = "/index.jsp"; // 로그인 페이지
	public final static String DUCOS_LOGIN_SUCCESS_HANDLE_URI = "/loginSuccess.do"; // 로그인 성공 후처리 uri
	public final static String DUCOS_LOGOUT_HANDLE_URI = "/logout.do";  // 로그아웃 처리 uri
	
	public final static String DUCOS_SESSION_MAX_EXCEEDED_HANDLE_URI = "/loginDuplicate.do";  // 중복 로그인 라다이렉트 uri
	public final static String DUCOS_SESSION_TIEOUT_HANDLE_URI = "/sessionTimeout.do";  // 세션타임아웃 리아이렉트 uri
	public final static String DUCOS_LOGIN_USERID_FORM_NAME = "V_USER_ID";  // 로그인 화면 id form tag id
	public final static String DUCOS_SECURE_EXCEPTION_MSG_ATTR = "SPRING_SECURE_LAST_EXCEPTION_MESSAGE"; // 인증 결과 메시지 key
	
	// Message
	// idpassword 인증 필터링 메시지
	public final static String DUCOS_ACCESS_DENYED_INVALID_PWD = "비밀번호가 일치하지 않습니다.";
	public final static String DUCOS_ACCESS_DENYED_DUPLICATED_LOGIN = "중복 로그인은 허용되지 않습니다.";
	public final static String DUCOS_ACCESS_DENYED_USING_USERID = "이미 사용 중인 사용자 아이디입니다.";
	public final static String DUCOS_ACCESS_DENYED_MULTIUSER_LOGIN = "다중 사용자 로그인은 허용되지 않습니다.";
	// Session인증 필터링 메시지
	public final static String DUCOS_AUTH_SESSION_INVALID = "유효한 사용자 세션이 아닙니다. 세션인증이 실패하였습니다.";
	public final static String DUCOS_AUTH_SESSION_TIMEOUT = "사용자 세션 유효기간이 만료되었습니다.";

}