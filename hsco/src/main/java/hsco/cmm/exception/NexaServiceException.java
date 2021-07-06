/**************************************************************************************
 * nexacro SAMPLE SYSTEM 
 * Copyright(c) 2009 nexacro ALLRIGHTS RESERVED.
 * 
 * 1.프로그램명  	: NexaServiceException
 * 2.파일명		: NexaServiceException.java
 * 3.개발자		: sian
 * 4.개발일자		: 2014.09.06 
 * 5.버젼		: 0.1
 * 6.설명		: NexaServiceException 발생시 공통 처리 부분
 * 7.이력		 
*************************************************************************************/
package hsco.cmm.exception;

import java.util.List;

public class NexaServiceException extends RuntimeException {

	private static final long serialVersionUID = 6557749074552618868L;
	
	public NexaServiceException() {
		super();		
	}

	public NexaServiceException(String message, Throwable cause) {
		super(message, cause);
	}

	public NexaServiceException(String message) {
		super(message);
	}

	public NexaServiceException(Throwable cause) {
		super(cause);
	}
	
	public NexaServiceException(String message, String userParam) {
		
		super(message + "®" + userParam);
		
	}
	

}