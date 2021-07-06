package hsco.cmm.Runner;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FilenameFilter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

import egovframework.rte.psl.orm.ibatis.support.SqlMapClientDaoSupport;
import hsco.cmm.service.BaseService;
import hsco.cmm.service.impl.LogServiceImpl;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: LogRunner.java
 * @Description  	: 로그 서비스 데몬 서비스 
 * @author       	: 정윤원
 * @since        	: 2015. 9. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 14.					정윤원				최초생성
 * </pre>
 */
public class LogRunner extends BaseService implements Runnable {
	
	
	protected Logger log = LoggerFactory.getLogger(LogRunner.class);

	@Value("#{fileStore['logStoreLoc']}")
	public String logStoreLoc;
	
	LogServiceImpl logService;	
	private	BzQueue queue			= new BzQueue();	
	public boolean isRunning = false;		
	
	
	public static final Object logSync = new Object();
	public static final Object dbSync = new Object();
	
//	private static LogRunner _instance = new LogRunner();
//	/**
//	 * 싱글톤 생성
//	 * @return
//	 * 2015. 9. 11.
//	 * <pre> </pre>
//	 */
//	public static LogRunner getInstance() {
//		
//		if(_instance == null) {
//			
//			synchronized (LogRunner.class) {
//				if( _instance == null ) {
//					_instance = new LogRunner();			
//				}
//			}
//		}
//		
//		return _instance;
//	}
	// 클래스변수들이 final이 아니므로 volatile을 추가하였음. by jdkim
	private static volatile LogRunner _instance = null;
	/**
	 * 싱글톤 생성
	 * @return
	 * 2015. 9. 11.
	 * <pre> </pre>
	 */
	public static LogRunner getInstance() {
		
		if(_instance == null) {
			
			synchronized (LogRunner.class) {
				if( _instance == null ) {
					_instance = new LogRunner();			
				}
			}
		}
		
		return _instance;
	}
	
	public LogRunner() { }
	
	
	/**
	 * 프로세스 큐
	 * @param entry
	 * 2015. 9. 11.
	 * <pre> </pre>
	 */
	public void log(LogEntry entry) {
		
		synchronized(queue) {
			this.queue.enqueue(entry);
			this.queue.notify();			
		}
	}
	
	/**
	 * 프로세스 큐
	 * @param entry
	 * 2015. 9. 11.
	 * <pre> </pre>
	 */
	public void log(String msg) {
		
		log.info(msg);
	}

	
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:로그 서비스 스타트
	 * 2015. 9. 15.
	 * </pre>
	 */
	public void startSvc() {
		
		if(!isRunning) {			
			Thread worker = new Thread(this);
			worker.setDaemon(true);
			worker.start();
		}
	}
		

	/**
	 * 실행부
	 */
	public void run() {
		
		LOOP:
		while (true)
		{
			
			isRunning = true;
			
			LogEntry entries[] = null;
			
			synchronized(queue)
			{
				try{
					if(queue.size() < 1) {
						queue.wait();
					}
				} catch(InterruptedException ignore){
				
					continue;
				}
				
				entries = new LogEntry[queue.size()];
				
				for(int i=0; i < entries.length; i++)
					entries[i] = (LogEntry)queue.dequeue();
			}  // end of synchronized(queue)
			
			if (entries.length == 0)
			{
				continue;
			}
			
			for(int i=0; i < entries.length; i++)
			{
				
				LogEntry entry = entries[i];
				
				if( entry.getMsgType() == LogEntry.EXIT_TYPE ) {
					break LOOP;
				}
					
					
				try
				{
					
					process(entry);
				}
				catch (Exception e)
				{
					log.error(ExceptionUtils.getStackTrace(e));
				}
			}
			
		} // end while
		
		isRunning = false;

	}
	
	/**
	 * 로그 분리 처리
	 * @param entry
	 * 2015. 9. 11.
	 * <pre> </pre>
	 */
	private void process(LogEntry entry) throws Exception {
		
		int msgType = entry.getMsgType();
		
		// 파일 로그
		if( (msgType & LogEntry.FILE_TYPE) == LogEntry.FILE_TYPE) {
			file_log(entry);
		}	
		
		// DB 로그		
		if( (msgType & LogEntry.DB_TYPE) == LogEntry.DB_TYPE) {
			database_log(entry);
		}
		
	}
	
	
	
	/**
	 * DB에 남기는 경우
	 * @param entry
	 * 2015. 9. 11.
	 * <pre> </pre>
	 */
	private void database_log(LogEntry entry) {
		
		Map map = (Map)entry.getParam();
		int logFormat = entry.getFormat();

		SqlMapClientDaoSupport dao = entry.getDao();
		String msg = entry.getMessage();
		synchronized (dbSync) {
		
			logService = LogServiceImpl.getInstance();
			
			switch( logFormat ) {
				case LogEntry.SYSTEM_FORMAT :
					logService.insertSysLog(dao, map);
					break;
					
				case LogEntry.DATABASE_FORMAT :
					
					if("MENU_USE".equals(msg)){
						logService.insertMenuUseLog(dao, map);
//					} else if("INDIVIDUAL_AUTH".equals(msg)) {
//						logService.insertindvlLog(dao, map);
					}	else {
						logService.insertDbLog(dao, map);
					}
					
					
					break;
					
//				case LogEntry.INFO_FORMAT :
//					logService.insertindvlLog(dao, map);
//					break;
				default:
					break;					
			}
		} // end of synchronized
	}
	
	
	
	/**
	 * 파일에 로그 남기는 경우
	 * @param entry
	 * 2015. 9. 11.
	 * <pre> </pre>
	 */
	private void file_log(LogEntry entry) throws IOException,FileNotFoundException {
		
		OutputStream ost = null;
		PrintWriter logPrinter = null;
		
		StringBuffer logBuf = getLogMsg(entry);
		
		String contextPath = entry.getWebContextPath();
        if(contextPath == null) {
        	super.setLogStoreLoc(logStoreLoc);
        	contextPath = super.getLogStoreLoc();
        	if(contextPath != null) {
        	    entry.setWebContextPath(contextPath);
        	    log.debug("LogRunner2:::" + contextPath);
        	} else {
        		log.debug("LogRunner2::: contextPath is null");
        	}
        	
        } 
        
        if(contextPath != null){
        	synchronized (logSync)
    		{
    			ost = new FileOutputStream( contextPath, true);
    			
    			logPrinter = new PrintWriter(new OutputStreamWriter(ost, "UTF-8"));

    			logPrinter.print(logBuf.toString());
    			logPrinter.flush();

    			logPrinter.close();
    			ost.close();
    		}
        }
		
		
	}
	
	/**
	 * 로그 남기기 위한 디렉토리 및 파일 정리
	 * @param logPath
	 * @return
	 * 2015. 9. 11.
	 * <pre> </pre>
	 */
	private String createLogEnv(String logPath) {
		
		Date now = new java.util.Date();
		String date = new SimpleDateFormat("yyyy-MM-dd").format(now);
		
		File log_dir = createDirectory(logPath);
		
		String log_file = log_dir.getAbsolutePath() + File.separatorChar + date + ".log" ;
		
		createLogFile(log_file, log_dir);
		
		return log_file;
	}
	
	
	private File createDirectory( String logPath) {
		File dirFile = null;
		if(logPath.lastIndexOf(File.separatorChar) != logPath.length() - 1)
		{
			logPath += File.separatorChar;
		}		
		String log_dir = logPath + "logs";
				
		File dir = new File(log_dir);
		if(!dir.exists()) {
			if(dir.canWrite()){
				try {
				    if(dir.mkdirs()){
				    	dirFile = dir;
				    } else {
				    	throw new SecurityException("로그파일의 디렉토리 생성에  실패하였습니다!");
				    }
				} catch(SecurityException  se){
					se.printStackTrace(System.err);
				}
			}
		}
		
		return dirFile;
		
	}
	
	
	private void createLogFile(String log_file, File dir) {
		
		Date now = new java.util.Date();
		String date = new SimpleDateFormat("yyyy-MM-dd").format(now);
		
		File file = new File(log_file);
		if(file.exists() && file.isFile() ) {
			
			FilenameFilter filter = new LogFileFilter();
			
			// 10 MB 이상일때는 다른 파일로 변경
			if( file.length() >= 10000000L) {
				
				File fileList[] = dir.listFiles(filter);
				
				int max = 0 ;
				int fileListCnt = 0;
				if(fileList == null){
					fileListCnt = 0;
				} else {
					fileListCnt = fileList.length;
					for(int i=0; i<fileListCnt; i++) {
						File f = fileList[i];
						String fileName = f.getName().split("\\.")[0];
						String fname[] = fileName.split("_");
						
						int fileCnt = ( fname.length < 2 ) ? 0 : Integer.parseInt(fname[1]);
						
						if( max < fileCnt ) max = fileCnt;
					}
				}
				
				
				// 파일 카피 max+1
				String fileOrd = String.valueOf(max + 1); 
				File newFile = new File( dir.getAbsolutePath() + File.separatorChar + date +"_" + fileOrd + ".log");
				
				//System.out.println("newFile.getName() :::::" + newFile.getAbsolutePath());
				if(newFile.exists()){
					try{
						file.renameTo(newFile);
					} catch(SecurityException se){
						se.printStackTrace(System.err);
					} catch(Exception e){
						e.printStackTrace(System.err);
					}
				}
				    
			}
		}	// end of if(file.exists() && ...
		
		// 6 개월지난 파일 정리
		File fileList[] = dir.listFiles();
		if( fileList != null ) {
			
			for( int i=0; i<fileList.length; i++) {
				
				File f = fileList[i];
				String fileName = f.getName().split("\\.")[0];
				
				Date d = new Date(
							Integer.parseInt( fileName.split("-")[0]), 
							Integer.parseInt( fileName.split("-")[1] + 6), 
							Integer.parseInt( fileName.split("-")[2].substring(0,2)) );
				
				if(d.before(now)) {
					if(file.exists()){
						try{
							file.delete();
						} catch(SecurityException se){
							se.printStackTrace(System.err);
						} catch(Exception e){
							e.printStackTrace(System.err);
						}
					}
					    
				}
			}
		} // end of if( fileList != null )
	}
	
	/**
	 * 포맷에 맞게 로그 String 생성
	 * @param entry
	 * @return
	 * 2015. 9. 11.
	 * <pre> </pre>
	 */
	@SuppressWarnings("rawtypes")
	private StringBuffer getLogMsg( LogEntry entry ) {
		
		StringBuffer logBuf = new StringBuffer();
		
		String date = new SimpleDateFormat ("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());
		
		String message = entry.getMessage();
		Map map = entry.getParam();
		
		
		// 메시지 부터 한줄 남기고 시작.
		if( message != null && message.length() > 0 ) {
			logBuf.append("[ " + date +" ] : "+ message +"\r\n");
		}
		
		// 파라미터 정보 있으면 파라미터 남김.
		if( map != null ) {
			
			logBuf.append("[ " + date +" ] : * PARAMETER INFO = { ");
						
			
			Iterator entries = map.entrySet().iterator();
			while(entries.hasNext()){
				Map.Entry entry2 = (Map.Entry)entries.next();
				Object key = entry2.getKey();
				Object value = entry2.getValue();
				logBuf.append( " ["+key + "=" + value + "] "  );
			}

			
			logBuf.append(" } \r\n");
		}
		
		
		return logBuf;
	}
	

}
