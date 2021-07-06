package hsco.cmm.util;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.nio.channels.FileChannel;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class FileUtils {
	
	private static Logger log = LoggerFactory.getLogger(FileUtils.class);
	
	public static void trsnferTo(String srcFileFullPath, String destFullPath) throws FileNotFoundException, IOException{
		FileInputStream inputStream = new FileInputStream(srcFileFullPath);         
        FileOutputStream outputStream = new FileOutputStream(destFullPath);
         
        FileChannel fcin =  inputStream.getChannel();
        FileChannel fcout = outputStream.getChannel();
		try {
            long size = fcin.size();
            fcin.transferTo(0, size, fcout);
		} catch(IOException ioe){
			ioe.printStackTrace(System.err);
		} finally {
			fcout.close();
	        fcin.close();
	         
	        outputStream.close();
	        inputStream.close();
		}
	}
	
	@SuppressWarnings("resource")
	public static void trsnferFileTo(File from,File to) throws IOException{
		FileChannel srcChannel=new FileInputStream(from).getChannel();
		FileChannel desChannel=new FileOutputStream(to).getChannel();
		srcChannel.transferTo(0,srcChannel.size(),desChannel);
		srcChannel.close();
		desChannel.close();
	}
	/* Java 6*/
//	public static byte[] fileToByteArray(File file) throws IOException{
//		byte[] fileInBytes = new byte[(int) file.length()];
//	    
//	    InputStream inputStream = null;
//	    try {
//	    
//	        inputStream = new FileInputStream(file);
//	        
//	        inputStream.read(fileInBytes);
//
//	    } catch (Exception e){
//	    	System.out.println(e.getStackTrace());
//	         e.printStackTrace();
//	    } finally {
//	        inputStream.close();
//	    }
//	    return fileInBytes;
//	    
//    }
	/* Java7 */
//	public static byte[] fileToByteArray7(File file) throws IOException{
//		Path path = Paths.get(file.toURI());
//	    
//	    byte[] fileBytes = java.nio.file.Files.readAllBytes(path);
//	    return fileBytes;
//	}
	
	/**
	  * 텍스트 파일의 내용을 읽음
	  * @param		fileName 파일 이름
	  * @returns	각 줄이 "\n"으로 구분된 문자열
	  */
	public static String readTextFile(String fileName)
	{
		StringBuffer buffer = new StringBuffer();
		BufferedReader reader = null;
		
		try
		{
			reader = new BufferedReader(
				new InputStreamReader(
					new FileInputStream(fileName), "UTF-8"));
			String line;
			while((line = reader.readLine()) != null)
			{
				buffer.append(line);
				buffer.append("\n");
			}
		} catch(UnsupportedEncodingException uee){
			uee.printStackTrace(System.err);
		} catch(IOException ioe) {
			ioe.printStackTrace(System.err);
		}
		finally
		{
			if( reader != null ) 
				try{ reader.close(); } catch(Exception e) {e.printStackTrace(System.err);}
			
		}
		return buffer.toString();
	}

	/**
	  * 문자열을 텍스트 파일에 기록
	  * @param		fileName 파일 이름
	  * @param		contents 기록할 내용
	  * @returns	성공 여부
	  */
	public static boolean writeTextFile(String fileName, String contents)
	{
		BufferedWriter writer = null;
		try
		{
			writer = new BufferedWriter(
				new OutputStreamWriter(
					new FileOutputStream(fileName), "UTF-8"));
			writer.write(contents);
			writer.flush();
		}
		catch(IOException ioe)
		{
			ioe.printStackTrace(System.err);
			return false;
		}
		finally
		{
			if( writer != null ) 
				try{ writer.close(); } catch(Exception e) {e.printStackTrace(System.err);}
		}
		return true;
	}

	/**
	  * 파일을 저장
	  * @param		fi InputStream
	  * @param		fo OutputStream
	  * @param		fnmsave 저장 파일 이름
	  * @returns	복사된 바이트 수, 실패하면 -1
	  */
	public static void saveFile(InputStream fi, OutputStream fo, String fnmsave) throws Exception
	{
		try
		{
			int read = 0;
	        byte[] bytes = new byte[10240];
	 
	        read = fi.read(bytes);
	        
	        while ( read  != -1)
	        {
	        	fo.write(bytes, 0, read);
	        	
	        	read = fi.read(bytes);
	        }
	        fo.flush();
		}
		catch(Exception ex)
		{
			log.error(StringUtil.getDecodedErrStack(ex));
			throw ex;
		}
		finally
		{
			try{ if(fi != null) fi.close(); } catch(Exception e){throw new Exception(e.getMessage());}
			try{ if(fo != null) fo.close(); } catch(Exception e){throw new Exception(e.getMessage());}
		}
	}
	
	/**
	  * 파일을 복사
	  * @param		srcFileName 원본 파일 이름
	  * @param		destFileName 대상 파일 이름
	  * @returns	복사된 바이트 수, 실패하면 -1
	  */
	public static int copyFile(String srcFileName, String destFileName) throws Exception
	{
		byte[] buf = new byte[8192];
		int readbytes;
		int filesize = 0;
		FileInputStream fis = null;
		FileOutputStream fos = null;
		
		try {
			fis = new FileInputStream(srcFileName);
			fos = new FileOutputStream(destFileName);
			
			readbytes = fis.read(buf, 0, buf.length);
			while( readbytes != -1)
			{
				filesize = filesize + readbytes;
				fos.write(buf, 0, readbytes);
				readbytes = fis.read(buf, 0, buf.length);
			}
			
			fis.close();
			fos.flush();
			fos.close();
			return filesize;
		}
		catch (IOException ioe)
		{
			ioe.printStackTrace(System.err);
			return -1;
		}
		finally{
			if( fis != null ) try { fis.close(); } catch(Exception e) {throw new Exception(e.getMessage());}
			if( fos != null ) try { fos.close(); } catch(Exception e) {throw new Exception(e.getMessage());}
		}
	}

	/**
	  * 파일 삭제
	  *
	  * @param     	filePath 지울 파일 이름 (파일경로 포함)
	  * @returns	성공 여부
	  */
	public static boolean removeFile(String filePath)
	{
		try
		{
			boolean result = false;
			File uploadedFile = new File(filePath);
			boolean isExists = uploadedFile.exists();
			if(isExists)
			{
				result = uploadedFile.delete();
			}
			else
			{
				result = false;
			}
			return result;
		}
		catch(Exception e)
		{
			e.printStackTrace(System.err);
			return false;
		}
	}

	/**
	  * 지정한 디렉토리에 파일 목록을 읽어 문자열 배열에 채움
	  *
	  * @param		pathName 디렉토리 경로
	  * @returns	성공시 문자열 배열, 실패시 null
	  */
	public static String[] fileList(String pathName)
	{
		try
		{
			File dir = new File(pathName);
			return dir.list();
		}
		catch(SecurityException se)
		{
			se.printStackTrace(System.err);
			return null;
		}
	}

	/**
	  * 파일 이동 또는 이름 변경
	  * @param		fromPath 원래 파일 이름 혹은 경로
	  * @param		toPath 새 파일 이름 혹은 경로
	  * @returns	성공 여부
	  */
	public static boolean moveFile(String fromPath, String toPath)
	{
		try
		{
			File fromFile = new File(fromPath);
			File toFile = new File(toPath);
			if(fromFile.renameTo(toFile)){
				return true;
			} else {
				return false;
			}
		}
		catch(SecurityException se)
		{
			se.printStackTrace(System.err);
			return false;
		}
		catch(NullPointerException npe)
		{
			npe.printStackTrace(System.err);
			return false;
		}
	}

	/**
	  * 새로운 파일(디렉토리 아님~) 생성
	  * @param		fileName
	  * @returns	true or false
	  */
	public static boolean createNewFile(String fileName)
	{
		try
		{
			File file = new File(fileName);
			if(file.createNewFile()){
				return true;
			} else {
				return false;
			}
		}
		catch(SecurityException se)
		{
			se.printStackTrace(System.err);
			return false;
		}
		catch(IOException ioe)
		{
			ioe.printStackTrace(System.err);
			return false;
		}
	}

	/**
	 * 디렉토리여부를 확인
	 * @param dirName
	 * @return Boolean
	 */
	public static boolean isDirectory(String dirName)
	{
		return (new File(dirName)).isDirectory();
	}

	/**
	  * 특정디렉토리를 생성함.
	  * @param		dirPath
	  * @return		디렉토리를 성공적으로 생성하면  true, 그렇지 않으면  false
	  */
	public static boolean makeDir(String dirPath)
	{
		try
		{
			File theDir = new File(dirPath);
			if(!theDir.exists()) return theDir.mkdirs();
			else return false;
		}
		catch(SecurityException se)
		{
			se.printStackTrace(System.err);
			return false;
		}
	}

	/**
	  * 특정디렉토리를 생성함.
	  * @param		parentPath, childPath
	  * @return		디렉토리를 성공적으로 생성하면  true, 그렇지 않으면  false
	  */
	public static boolean makeDir(String parentPath, String childPath)
	{
		try
		{
			File theDir = new File(parentPath, childPath);
			return theDir.mkdirs();
		}
		catch(SecurityException se)
		{
			se.printStackTrace(System.err);
			return false;
		}
	}

	/**
	  * 특정디렉토리를 복사함.
	  * @param		srcPath, destPath
	  * @return		디렉토리를 성공적으로 복사하면  true, 그렇지 않으면  false
	  */
	public static boolean copyDir(String srcPath, String destPath) throws IOException
	{
		File fp	= new File(srcPath);
		File[] lfile = fp.listFiles();
		int i = 0;
		makeDir(destPath);
		for (; ; )
		{
			try
			{
				if (lfile[i].isDirectory())
				{
					makeDir(destPath+lfile[i].getName());
					copyDir(lfile[i].getAbsolutePath()+"/", destPath+lfile[i].getName()+"/");
				}
				copyFile(lfile[i].getAbsolutePath(), destPath+lfile[i].getName());
				i++;
			}
			catch (Exception e)
			{
				break;
			}
		}
		
		try
		{
			fp.delete();
			return true;
		}
		catch(Exception e)
		{
			return false;
		}
	}

	/**
	  * 디렉토리 삭제
	  *
	  * @param     	filePath 지울 데렉토리 이름
	  * @returns	성공 여부
	  */
	public static boolean removeDir(String filePath) throws IOException
	{
		File fp	= new File(filePath);
		File[] lfile = fp.listFiles();
		
		if(lfile != null){
			for (int i = 0; i< lfile.length; i++){
				try {
					// 지우고자 하는게 다시 디렉토리라면, 자기
					// 자신을 다시 호출한다.
					if (lfile[i].isDirectory() && lfile[i].exists()) 
						removeDir(lfile[i].getAbsolutePath());
					if (lfile[i].isFile() && lfile[i].exists()) {
						if(lfile[i].delete()){
							return true;
						} else {
							return false;
						}
					}
				} catch(SecurityException se) {
					se.printStackTrace(System.err);
					return false;
				} catch (Exception e) {
					break;
				}
			}
		}
		

		try
		{
			if(fp.exists()) fp.delete();
			return true;
		}
		catch(Exception e)
		{
			return false;
		}
	}

	/**
	 * 해당 파일 및 빈 상위 디렉토리를 모두 삭제한다.
	 * @param uploadDir	Root Upload Directory
	 * @param filePath		Root Upload Directory 의 하위 Directory 및 File Name 을 포함한 File Path
	 * @param regex		구분자
	 * @return
	 * @throws IOException
	 */
	public static boolean removeFullFile(String uploadDir, String filePath, String regex) throws IOException
	{
		boolean isDelete = false;

		String[] arrPath = filePath.split(regex);
		int arrPathLen =  arrPath.length ;


		for(int i=0;i<arrPathLen;i++)
		{
			String fileName = "";
			StringBuffer sb = new StringBuffer();
			int arrLength = arrPath.length - i;
			for(int j=0;j<arrLength;j++){
				if(j < arrLength-1) 
					sb.append(arrPath[j] +"/");
				else 
					sb.append(arrPath[j]);
			}
			fileName = sb.toString();

			File targetFile = new File(uploadDir + fileName);

			// 해당 파일 또는 디렉토리가 존재하는지 판단한다.
			if(targetFile.exists())
			{
				// 파일일 경우 바로 삭제
				if(targetFile.isFile() && targetFile.canWrite())
				{
					isDelete = targetFile.delete();
				// 디렉토리일 경우 폴더내에 파일이 없을 경우에만 디렉토리 삭제
				}
				else
				{
					File[] files = targetFile.listFiles();
					if(files == null){
						isDelete = false;
					} else {
						if(files.length == 0){
							if(targetFile.canWrite())
								isDelete = targetFile.delete();
						}
							
					}
					
				}
			}
		}
		return isDelete;
	}
	
	/**
	 * 중복 된이름을 바꾼다
	 * @param filePath	 및 File Name 
	 * @param regex		구분자
	 * @return fileName
	 * @throws IOException
	 */
	public static String getUniqueFileName(String path, String file) 
	{
		  File tmp = new File(path + file.toLowerCase());
		  String fileName =  file.toLowerCase();
		  int i = 1;
		  boolean bExist = tmp.exists();
		  
		  if( bExist ) {
			  while( bExist ) {
				  if(fileName.indexOf(".") != -1)
				  {
					  String lcTemp = "(" + i + ").";
					  fileName = StringUtil.replace(file.toLowerCase(), ".", lcTemp);
				  }
				  else
				  {
					  fileName =  file.toLowerCase() + "(" + i + ")";
				  }
				  tmp = new File(path + fileName);
				  i++;
		        
				  bExist = tmp.exists();
			  }
		  }
		  return fileName;
	}

}