package hsco.cmm.download;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.servlet.view.AbstractView;

import net.sf.jxls.transformer.XLSTransformer;

public class ExcelView extends AbstractView {

	public ExcelView() {
		setContentType("application/octet-stream;charset=UTF-8");
	}
	
	@Override
	protected void renderMergedOutputModel(Map<String, Object> model, HttpServletRequest request, HttpServletResponse response) throws Exception {

		String template = (String)model.get("__TEMPLATE");
		String filename = (String)model.get("__FILENAME");
		
		response.setHeader("Content-Disposition", "attachment; filename="+filename);

		OutputStream os = null; 
		InputStream is = null; 
		try {
			
			is = new ClassPathResource("/hsco/excel/"+template).getInputStream(); 
			os = response.getOutputStream();
			
			XLSTransformer transfomer = new XLSTransformer();
			Workbook excel = transfomer.transformXLS(is, model);
			excel.write(os);
			os.flush();
			
		} catch (IOException e) { 
			e.printStackTrace(); 
		} finally { 
			if(os != null) try { os.close(); } catch (IOException e) { } 
			if(is != null) try { is.close(); } catch (IOException e) { } 
		}
		

	}

}
