package hsco.cmm;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

import javax.servlet.http.HttpServletResponse;

import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformResponse;
import com.nexacro.xapi.tx.PlatformType;
import com.nexacro.xeni.util.CommUtil;
import com.nexacro.xeni.util.XeniExtendBase;

public class XeniDRM implements XeniExtendBase {

	@Override
	public InputStream loadTargetStream(String filepath) throws Exception {
		File file = new File(filepath);		
		return new FileInputStream(file);
	}

	@Override
	public int saveExportStream(VariableList varlist, 
								DataSet dscmd,
								ByteArrayOutputStream out, 
								String filepath, String fileurl,
								HttpServletResponse response) throws Exception {

		int nIdx = filepath.lastIndexOf("/");
		String sPath = filepath.substring(0, nIdx);

		File file = new File(sPath);
		if (file.exists() == false) { 
			file.mkdirs();
		}
		
		FileOutputStream fout = new FileOutputStream(filepath);
		fout.write(out.toByteArray());
		
		fout.close();
		out.close();
		
		DataSet dsRes = CommUtil.getDatasetExportResponse(dscmd);

		PlatformData resData = new PlatformData();
		VariableList varList = resData.getVariableList();
		
		varList.add("ErrorCode", 0);
		varList.add("ErrorMsg", "SUCCESS");
		if("Y".equals(varlist.get("cntn_file").getString())){
			String svcUrl = varlist.get("svcurl").getString();
			svcUrl = svcUrl.replace("http://","");
			String cntnFileUrl = svcUrl+"export"+sPath.substring(sPath.lastIndexOf("/"))+filepath.substring(filepath.lastIndexOf("/"));
			String extrSantn = varlist.get("extrSantn").getString().replaceAll("&", "%26");
			fileurl = "/web/hsco/cntn/cntn_file.jsp?fileurl="+cntnFileUrl+"&extrSantn="+extrSantn;
		}

		dsRes.set(0, "url", fileurl);
		resData.addDataSet(dsRes);
		
		HttpPlatformResponse platformRes = new HttpPlatformResponse(
							response, PlatformType.CONTENT_TYPE_SSV, "UTF-8");
		platformRes.setData(resData);
		platformRes.sendData();
		
		return 0;
	}

	@Override
	public String saveImportStream(VariableList varlist, 
									InputStream in, 
									String filepath) throws Exception {
		int nIdx = filepath.lastIndexOf("/");
		String sPath = filepath.substring(0, nIdx);
		
		File file = new File(sPath);
		if (file.exists() == false) {
			file.mkdirs();
		}
		
		OutputStream out = new FileOutputStream(filepath);

		byte[] buf = new byte[1024];
		int length = 0;
		while ((length = in.read(buf)) > 0) {
			out.write(buf, 0, length);
		}
		
		out.flush(); 
		out.close(); 
		in.close();

		return null;
	}

	public int getExportFile( String filepath, HttpServletResponse response ) throws Exception {
		return 0;
	}
}
