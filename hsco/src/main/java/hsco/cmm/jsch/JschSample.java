package hsco.cmm.jsch;

import java.io.File;
import java.io.IOException;
import java.net.SocketException;
import java.util.ArrayList;
import java.util.List;

import com.jcraft.jsch.ChannelSftp;
/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: JschSample.java
 * @Description  	: DUCOS 시스템의 홈페이지관리자에서 원격 홈페이지 서버 상으로 또는 홈페이지 서버로부터 DUCOS 시스템으로 보안 ftp로 파일을 송수신하는 예제.
 *                    hsco.cmm.jsch.* 를 사용하는 방법에 대한 샘플임.
 * @author       	: 정윤원
 * @since        	: 2016. 3. 29.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 3. 29.					정윤원			최초생성
 * </pre>
 */
public class JschSample {
	private static String localFilePath1 = "/app_files/upload/SYS/COM/20151005100034-67dfdf31151f09f98c6-7ff3";
    private static String remotePath1 = "/app_files/upload/HPG";
    private static String remotePath2 = "/app_files/upload/HPG";
    
    private static String remotePath3 = "/app_files/upload/HPG";
    private static String localFilePath3 = "/app_files/upload/TEST";
    private static String remotePath4 = "/app_files/upload/HPG";
    private static String localFilePath4 = "/app_files/upload/TEST";
    private static String fname = "/app_files/upload/SYS/COM/201512221011271.xlsx";
    
    private static String fname1 = "/app_files/upload/SYS/COM/201512221011271.xlsx";
    private static String fname2 = "/app_files/upload/SYS/COM/201512221011271.xlsx";
	
	public static void main(String[] args){
		// 아래의 파일들을 홈페이지서버로 업로드하고 다운로드하는 것을 테스트한다.
		// 단건 2건
		// 
		// /app_files/upload/SYS/COM/201512221011271.xlsx
		
		// 다건 
		// /app_files/upload/SYS/COM/201512221011001.xlsx
		// /app_files/upload/SYS/COM/201512231011683.jpg 
		// 업로드(개발서버 --> 홈페이지 HPG )
		final String hostAlias = "HPG";
		
		List<String> uploadFiles = new ArrayList<String>();
		uploadFiles.add(0, fname1);
		uploadFiles.add(1, fname2);
		
		// 멀티건
		uploadFiles(hostAlias, uploadFiles);
		    
		    
		// 다운로드 
		// 단건
		download(hostAlias);
		// 멀티건
		List<String> downFiles = new ArrayList<String>();
		downFiles.add(0, "201512221011001.xlsx");
		downFiles.add(1, "201512231011683.jpg");
		downloadFiles(hostAlias, downFiles);
		downloadFiles(hostAlias, uploadFiles);
		// 삭제는 생략.
		
	}
	
	private static void upload(String hostAlias) throws SocketException, IOException{
		// 단건
	    
	    DucosJschFileManager.upload(hostAlias, remotePath1, localFilePath1);
	    File file = new File(fname);
	    DucosJschFileManager.upload(hostAlias, remotePath1, file);
	}
	
    private static void uploadFiles(String hostAlias, List<String> files){
    	ChannelSftp channelSftp = DucosJschMultiFileManager.connect(hostAlias);
    	
    	try {
    		for(int i=0; i<files.size(); i++){
        		DucosJschMultiFileManager.upload(channelSftp, hostAlias, remotePath2, files.get(i));
        	}
        	
		} catch (SocketException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			channelSftp.exit();
		}
    	DucosJschMultiFileManager.disconnection(channelSftp);
	}
    
    private static void download(String hostAlias){
    	
    	DucosJschFileManager.download(hostAlias, remotePath3, "20151005100034-67dfdf31151f09f98c6-7ff3", localFilePath3);
    	DucosJschFileManager.download(hostAlias, remotePath3, "201512221011271.xlsx", localFilePath3);
    }
    
    private static void downloadFiles(String hostAlias, List<String> files){
    	ChannelSftp channelSftp = DucosJschMultiFileManager.connect(hostAlias);
    	
    	for(int i=0; i<files.size(); i++){
    	    DucosJschMultiFileManager.download(channelSftp, hostAlias, remotePath4, files.get(i), localFilePath4);
    	}
    	DucosJschMultiFileManager.disconnection(channelSftp);
    }
	
}