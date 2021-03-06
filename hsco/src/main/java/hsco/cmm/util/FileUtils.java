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
	  * ????????? ????????? ????????? ??????
	  * @param		fileName ?????? ??????
	  * @returns	??? ?????? "\n"?????? ????????? ?????????
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
	  * ???????????? ????????? ????????? ??????
	  * @param		fileName ?????? ??????
	  * @param		contents ????????? ??????
	  * @returns	?????? ??????
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
	  * ????????? ??????
	  * @param		fi InputStream
	  * @param		fo OutputStream
	  * @param		fnmsave ?????? ?????? ??????
	  * @returns	????????? ????????? ???, ???????????? -1
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
	  * ????????? ??????
	  * @param		srcFileName ?????? ?????? ??????
	  * @param		destFileName ?????? ?????? ??????
	  * @returns	????????? ????????? ???, ???????????? -1
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
	  * ?????? ??????
	  *
	  * @param     	filePath ?????? ?????? ?????? (???????????? ??????)
	  * @returns	?????? ??????
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
	  * ????????? ??????????????? ?????? ????????? ?????? ????????? ????????? ??????
	  *
	  * @param		pathName ???????????? ??????
	  * @returns	????????? ????????? ??????, ????????? null
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
	  * ?????? ?????? ?????? ?????? ??????
	  * @param		fromPath ?????? ?????? ?????? ?????? ??????
	  * @param		toPath ??? ?????? ?????? ?????? ??????
	  * @returns	?????? ??????
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
	  * ????????? ??????(???????????? ??????~) ??????
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
	 * ????????????????????? ??????
	 * @param dirName
	 * @return Boolean
	 */
	public static boolean isDirectory(String dirName)
	{
		return (new File(dirName)).isDirectory();
	}

	/**
	  * ????????????????????? ?????????.
	  * @param		dirPath
	  * @return		??????????????? ??????????????? ????????????  true, ????????? ?????????  false
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
	  * ????????????????????? ?????????.
	  * @param		parentPath, childPath
	  * @return		??????????????? ??????????????? ????????????  true, ????????? ?????????  false
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
	  * ????????????????????? ?????????.
	  * @param		srcPath, destPath
	  * @return		??????????????? ??????????????? ????????????  true, ????????? ?????????  false
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
	  * ???????????? ??????
	  *
	  * @param     	filePath ?????? ???????????? ??????
	  * @returns	?????? ??????
	  */
	public static boolean removeDir(String filePath) throws IOException
	{
		File fp	= new File(filePath);
		File[] lfile = fp.listFiles();
		
		if(lfile != null){
			for (int i = 0; i< lfile.length; i++){
				try {
					// ???????????? ????????? ?????? ??????????????????, ??????
					// ????????? ?????? ????????????.
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
	 * ?????? ?????? ??? ??? ?????? ??????????????? ?????? ????????????.
	 * @param uploadDir	Root Upload Directory
	 * @param filePath		Root Upload Directory ??? ?????? Directory ??? File Name ??? ????????? File Path
	 * @param regex		?????????
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

			// ?????? ?????? ?????? ??????????????? ??????????????? ????????????.
			if(targetFile.exists())
			{
				// ????????? ?????? ?????? ??????
				if(targetFile.isFile() && targetFile.canWrite())
				{
					isDelete = targetFile.delete();
				// ??????????????? ?????? ???????????? ????????? ?????? ???????????? ???????????? ??????
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
	 * ?????? ???????????? ?????????
	 * @param filePath	 ??? File Name 
	 * @param regex		?????????
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