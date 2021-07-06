package hsco.cmm.ria.nexacro.vo;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.tx.HttpPlatformRequest;

import hsco.cmm.ria.support.NexacroAdaptor;
/**
 * 
 * @author 이근태(yimoc@tobesoft.com)
 *
 */
public class NexacroAdaptorVOImp extends NexacroAdaptor {
	protected Logger logger = LoggerFactory.getLogger(NexacroAdaptorVOImp.class);
	
	public Object converte4In(HttpPlatformRequest HttpPlatformRequest,
			HttpServletRequest request) {
		logger.debug("1.XPlatformAdaptorVOImp() start");
		NexacroObjectDTO dto = new NexacroObjectDTO();
		PlatformData pfd = HttpPlatformRequest.getData();
		logger.debug("    Request Variable & DataSet debug");
		logger.debug(pfd.saveXml());
		
		dto.setVariableMap(pfd.getVariableList());
		dto.setTranInfoMap(pfd.getDataSetList());
		dto.setInDataSetMap(pfd.getDataSetList());
						
		return dto;
	}
	@Override
	public Class getModelName() {
		return (new NexacroObjectDTO().getClass());
	}

}
