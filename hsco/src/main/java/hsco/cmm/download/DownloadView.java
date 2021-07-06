package hsco.cmm.download;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.util.Map;
 


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.view.AbstractView;
 
public class DownloadView extends AbstractView {
 
	public DownloadView() {
		setContentType("application/octet-stream;charset=UTF-8");
	}
 
	@Override
	protected void renderMergedOutputModel(Map<String, Object> model, HttpServletRequest request, HttpServletResponse response) throws Exception {

		File file = (File) model.get("downloadFile");
		String contentType = (String)request.getAttribute("contentType");
		if(contentType==null || contentType==""){
			contentType = getContentType();
		}

		String isRuntime = "N";
		String userAgent = request.getHeader("User-Agent");
		String filename = "";
		if(request.getAttribute("downFileName") == null){
			if(file.exists())
				filename = file.getName();
		} else {
			filename = (String)request.getAttribute("downFileName");
			if("noname".equals(filename)){

			if(file.exists())
				filename = file.getName();
			} 

		}
		
		if (userAgent.indexOf("nexacroplatform14") > -1) {
			isRuntime = "Y";
		}

		response.reset();
		response.setContentType(contentType);
		response.setContentLength((int)file.length());
		if(isRuntime != null && isRuntime.equals("N")) {
			
			if (userAgent.indexOf("MSIE") > -1) {
				String encodeFileName = java.net.URLEncoder.encode(filename, "utf-8").replaceAll("\\+", "\\ ");
				response.setHeader("Content-Disposition", "attachment; filename = \"" + new String(encodeFileName.getBytes("utf-8"), "ISO8859_1") + "\"");
				response.setHeader("Content-Transper-Encoding", "binary");
			} else {
				response.setHeader("Content-Disposition", "attachment; filename = \"" + new String(filename.getBytes("utf-8"), "ISO8859_1") + "\"");
			}
			
			response.setHeader("Content-Transper-Encoding", "binary");
			response.setHeader("Content-Length", "" + String.valueOf((int) file.length()));
			response.setHeader("Pargma", "no-cache");
			response.setHeader("Expires", "-1");
			
		} else {
			response.setHeader("Content-Disposition", "attachment; filename = \"" + new String(filename.getBytes("utf-8"), "ISO8859_1") + "\"");
			response.setHeader("Content-Transper-Encoding", "binary");
			response.setHeader("Content-Length", "" + String.valueOf(file.length()));				
			
		}
		BufferedInputStream input = null;
		BufferedOutputStream output = null;
		
		try{
			input = new BufferedInputStream(new FileInputStream(file));
			byte buffer[] = new byte[1024];
			int len = 0;

			output = new BufferedOutputStream(response.getOutputStream());
			
			len = input.read(buffer);
			while(len > 0 ){
				output.write(buffer,0,len);
				len = input.read(buffer);
			}
			
			output.flush();
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			try{ if(input != null) input.close(); } catch(Exception e){e.printStackTrace(System.err);}
			try{ if(output != null) output.close(); } catch(Exception e){e.printStackTrace(System.err);}
		}
		
	}
}