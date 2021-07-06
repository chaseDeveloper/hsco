package hsco.cmm.download;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.util.FileCopyUtils;



public class FileHttpMessageConverter implements HttpMessageConverter<File>{
	/** Log 생성*/
    private static final Logger LOGGER = LoggerFactory.getLogger(FileHttpMessageConverter.class);
	
	private List<MediaType> supportedMediaTypes = new ArrayList<MediaType>();
	
	public FileHttpMessageConverter(){
		this.supportedMediaTypes.add(MediaType.APPLICATION_OCTET_STREAM);
	}
	
	public boolean canRead(Class<?> clazz, MediaType mediaType){
		return false;
	}
	
	public boolean canWrite(Class<?> clazz, MediaType mediaType){
		return File.class.equals(clazz);
	}
	
	public List<MediaType> getSupportedMediaTypes(){
		return supportedMediaTypes;
	}
	
	public File read(Class<? extends File> clazz, HttpInputMessage inputMessage) throws IOException, HttpMessageNotReadableException {
		return null;
	}
	
	public void write(File t, MediaType contentType, HttpOutputMessage outputMessage) throws IOException, HttpMessageNotWritableException {
		if(LOGGER.isInfoEnabled()){
    		LOGGER.info("write started!");
    	}
//		if(contentType == null){
//			contentType = MediaType.APPLICATION_OCTET_STREAM;
//		} 
		outputMessage.getHeaders().setContentType(MediaType.APPLICATION_OCTET_STREAM);
		FileInputStream fis = new FileInputStream(t);
		FileCopyUtils.copy(fis, outputMessage.getBody());
		fis.close();
	}
	
}