package hsco.cmm.jsch;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.SocketException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.SftpException;

public class DucosJschMultiFileManager {
	
	protected static final Logger log = LoggerFactory.getLogger(DucosJschMultiFileManager.class);
			
	@Value("#{properties['this.host.app_files']}")
	private static String localRoot;
	
	
	
	/**
     * JSch 접속한다.
     *
     * @param hostAlias String 호스트Alias (DUCOS, CNTC, HPG)
     * @return ChannelSftp
     * @throws JSchException
     */
	public static ChannelSftp connect(String hostAlias) {
		
		DucosJschHost remoteDsh = new DucosJschHost(hostAlias);
        String host = remoteDsh.getServerAddress();
        int port = remoteDsh.getSftpPort();
        String userId = remoteDsh.getUserId();
        String password = remoteDsh.getPassword();
        
        log.debug("==> Connecting to :" + host);
	    Session session = null;
		Channel channel = null;
		ChannelSftp channelSftp = null;
		
        
		// 1. JSch 객체를 생성한다.
		JSch jsch = new JSch();
		 
		try {
   
            // 2. 세션 객체를 생성한다(사용자 이름, 접속할 호스트, 포트를 인자로 전달한다.)
            session = jsch.getSession(userId, host, port);
            session.setTimeout(15000);
            // 3. 패스워드를 설정한다.
            session.setPassword(password);
            
            // 4. 세션과 관련된 정보를 설정한다.
            java.util.Properties config = new java.util.Properties();
            // 4-1. 호스트 정보를 검사하지 않는다.
            config.put("StrictHostKeyChecking", "no");
            session.setConfig(config);
            
            // 5. 접속한다.
            session.connect();
            
            
            // 6. sftp 채널을 연다.
            channel = session.openChannel("sftp");
            
            // 7. 채널에 연결한다.
            channel.connect();
        } catch (JSchException e) {
            e.printStackTrace();
        }
            
        // 8. channel FTP용 ChannelSftp 객체로 캐스팅한다.
        channelSftp = (ChannelSftp) channel;
        log.debug("==> Connected to " + host);
        return channelSftp;
	}
	
	
	/**
	 * ChannelSftp 접속을 해제한다
	 * @param N/A
	 * @return N/A
	 */
	public static void disconnection(ChannelSftp channelSftp) {
        channelSftp.quit();
    }
	
	/**
     * 하나의 파일을 업로드 한다(멀티 파일 업로드용).
     * @param channelSftp ChannelSftp
     * @param hostAlias String 업로드 서버 호스트 alias ( DUCOS, CNTC, HPG)
     * @param remotePath String 원격 서버 상의 업로드 디렉토리 경로(파일명 제외)
     * @param localRelPath String 업로드할 파일경로(파일명 포함)
     * @return N/A
     * @throws SocketException
     * @throws FileNotFoundException
     * @throws IOException
     */
	public static void upload(ChannelSftp channelSftp, String hostAlias, String remotePath, String localFilePath) throws SocketException, IOException {
		DucosJschHost remoteDsh = new DucosJschHost(hostAlias);
		String remoteDirectory = remoteDsh.getSftpRoot();
		String host = remoteDsh.getServerAddress();
		
	    String filePath = localFilePath;
	    if(!localFilePath.startsWith(localRoot))
	        filePath = localRoot + localFilePath;
	    log.debug("==> Uploading: " + filePath + " at " + host);
	    FileInputStream in = null;
	    try {
	    	
	    	File file = new File(filePath);
	    	
	    	if(!file.exists())
	    		throw new RuntimeException("[오류]업로드 요청한 파일이 파일시스템에 존재하지 않습니다!");
	        // 입력 파일을 가져온다.
	        in = new FileInputStream(file);
	 
	        if(!remotePath.startsWith(remoteDirectory)) {
	        	remotePath = remoteDirectory + remotePath; // 상대경로를 절대경로로 변환  
	        } 
	        channelSftp.mkdir(remotePath);
	        // 업로드하려는 위치르 디렉토리를 변경한다.
	        channelSftp.cd(remotePath);  
	 
	        // 파일을 업로드한다.
	        channelSftp.put(in, file.getName());

	    } catch (SftpException e) {
	        e.printStackTrace();
	    } catch (FileNotFoundException e) {
	        e.printStackTrace();
	    } finally {
	        try {
	            // 업로드된 파일을 닫는다.
	        	if(in != null)
	                in.close();
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	        channelSftp.quit();
	    }
	    log.debug("==> Uploaded: " + filePath + " at " + host);
	}
	/**
     * 하나의 파일을 업로드 한다(멀티 파일 업로드용).
     * @param channelSftp ChannelSftp
     * @param hostAlias String 업로드 서버 호스트 alias ( DUCOS, CNTC, HPG)
     * @param remotePath String 원격 서버 상의 업로드 디렉토리 경로(파일명 제외)
     * @param file File 업로드할 파일 객체
     * @return N/A
     * @throws SocketException
     * @throws FileNotFoundException
     * @throws IOException
     */
	public static void upload(ChannelSftp channelSftp, String hostAlias, String remotePath, File file) throws SocketException, IOException {
		DucosJschHost remoteDsh = new DucosJschHost(hostAlias);
		String remoteDirectory = remoteDsh.getSftpRoot();
		String host = remoteDsh.getServerAddress();
		
	    log.debug("==> Uploading: " + file.getPath() + " at " + host);
	    FileInputStream in = null;
	    try {
	    	
	    	
	    	if(!file.exists())
	    		throw new RuntimeException("[오류]업로드 요청한 파일이 파일시스템에 존재하지 않습니다!");
	        // 입력 파일을 가져온다.
	        in = new FileInputStream(file);
	 
	        if(!remotePath.startsWith(remoteDirectory)) {
	        	remotePath = remoteDirectory + remotePath; // 상대경로를 절대경로로 변환  
	        } 
	        channelSftp.mkdir(remotePath);
	        // 업로드하려는 위치르 디렉토리를 변경한다.
	        channelSftp.cd(remotePath);  
	 
	        // 파일을 업로드한다.
	        channelSftp.put(in, file.getName());

	    } catch (SftpException e) {
	        e.printStackTrace();
	    } catch (FileNotFoundException e) {
	        e.printStackTrace();
	    } finally {
	        try {
	            // 업로드된 파일을 닫는다.
	        	if(in != null)
	                in.close();
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	        channelSftp.quit();
	    }
	    log.debug("==> Uploaded: " + file.getPath() + " at " + host);
	}
    /**
     * 파일을 다운로드 한다(다중 파일 다운로드용)
     * @param channelSftp ChannelSftp
     * @param hostAlias String 다운로드 서버 호스트 alias ( DUCOS, CNTC, HPG)
     * @param remotePath String 원격 다운로듯 서버 상의 다운로드 파일의 디렉토리 경로 (파일명 제외)
     * @param remoteFileName String 다운로드할 파일명 
     * @param localPath String 로컬에 저장할 파일 경로(파일명 포함)
     * @return N/A
     * @throws SftpException
     * @throws IOException
     */
    public static void download(ChannelSftp channelSftp, String hostAlias, String remotePath, String remoteFileName, String localFilePath) {
        
    	DucosJschHost remoteDsh = new DucosJschHost(hostAlias);
		String remoteDirectory = remoteDsh.getSftpRoot();

    	if(!remotePath.startsWith(remoteDirectory)) {
	    	remotePath = remoteDirectory + remotePath;
	    } 	    
        
    	InputStream in = null;
        FileOutputStream out = null;
        try {
            channelSftp.cd(remotePath);
            in = channelSftp.get(remoteFileName);
        } catch (SftpException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        try {
        	
        	if(!localFilePath.startsWith(localRoot)) 
        		localFilePath = localRoot + localFilePath;
            out = new FileOutputStream(new File(localFilePath));
            int i;
            if(in != null)
                while ((i = in.read()) != -1) {
                    out.write(i);
                }
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            try {
            	if(out != null)
            	    out.close();
                if(in != null)
	                in.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            channelSftp.quit();
        }
    }
    
    /**
     * 원격 서버의 지정된 파일을 삭제한다(다중 파일 삭제용)
     * @param channelSftp ChannelSftp
     * @param hostAlias String 다운로드 서버 호스트 alias ( DUCOS, CNTC, HPG)
     * @param remotePath String 원격 다운로듯 서버 상의 다운로드 파일의 디렉토리 경로 (파일명 제외)
     * @param remoteFileName String 다운로드할 파일명 
     * @param localPath String 로컬에 저장할 파일 경로(파일명 포함)
     * @return N/A
     * @throws SftpException
     * @throws IOException
     */
	public static void delete(ChannelSftp channelSftp, String hostAlias, String remotePath, String remoteFileName) throws IOException {
        
    	DucosJschHost remoteDsh = new DucosJschHost(hostAlias);
		String remoteDirectory = remoteDsh.getSftpRoot();
		if(remoteDirectory.equals(remotePath))
			throw new RuntimeException("[실행권한 오류]삭제권한이 허용되지 않습니다!");

    	if(!remotePath.startsWith(remoteDirectory)) {
	    	remotePath = remoteDirectory + remotePath;
	    } 	    
        
        try {
            channelSftp.rm(remotePath +File.separator+ remoteFileName);
        } catch (SftpException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            channelSftp.quit();
        }
    }
    
    /**
     * 원격서버 상의 디렉토리를 삭제한다(다중 디렉토리 삭제용)
     * @param channelSftp ChannelSftp
     * @param hostAlias String 다운로드 서버 호스트 alias ( DUCOS, CNTC, HPG)
     * @param remotePath String 원격 다운로듯 서버 상의 다운로드 파일의 디렉토리 경로 (파일명 제외)
     * @return N/A
     * @throws SftpException
     * @throws IOException
     */
    public static void rmdir(ChannelSftp channelSftp, String hostAlias, String remotePath) {
        
    	DucosJschHost remoteDsh = new DucosJschHost(hostAlias);
		String remoteDirectory = remoteDsh.getSftpRoot();
		if(remoteDirectory.equals(remotePath))
			throw new RuntimeException("[실행권한 오류]삭제권한이 허용되지 않습니다!");

    	if(!remotePath.startsWith(remoteDirectory)) {
	    	remotePath = remoteDirectory + remotePath;
	    } 
        try {
            channelSftp.rmdir(remotePath);
        } catch (SftpException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            channelSftp.quit();
        }
    }
    
}