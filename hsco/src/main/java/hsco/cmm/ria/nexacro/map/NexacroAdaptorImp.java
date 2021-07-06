package hsco.cmm.ria.nexacro.map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.tx.HttpPlatformRequest;

import hsco.cmm.ria.nexacro.vo.NexacroAdaptorVOImp;
import hsco.cmm.ria.support.NexacroAdaptor;
/**
 * 
 * @author yimoc@tobesoft.com
 *
 */
public class NexacroAdaptorImp extends NexacroAdaptor {
	protected Logger logger = LoggerFactory.getLogger(NexacroAdaptorImp.class);
	@Override
	public Object converte4In(HttpPlatformRequest httpPlatformRequest, HttpServletRequest request) {
		
		log.debug("1.XPlatformAdaptorImp.convert4In() start");
		NexacroMapDTO dto = new NexacroMapDTO();
		PlatformData pfd = httpPlatformRequest.getData();
		log.debug("    Request Variable & DataSet debug");
		log.debug(pfd.saveXml());
		
		dto.setVariableMap(pfd.getVariableList(), pfd.getDataSetList());
		dto.setTranInfoMap(pfd.getDataSetList());
		dto.setInDataSetMap(pfd.getDataSetList());
		
		dto.setRequest(request);	// 파일업로드등 Request 정보를 이용할 경우를 대비하여 추가
		
		String server_name = request.getServerName();
		
		//NexacroAdaptorImp, ObjectUtil
		if("localhost".equals(server_name)){// localhost
			dto.setInVariableMap("serverType", "local");			
		}else{
			dto.setInVariableMap("serverType", "");
		}
		
		return dto;
	}

	@Override
	public Class getModelName() {
		return (new NexacroMapDTO().getClass());
	}

}