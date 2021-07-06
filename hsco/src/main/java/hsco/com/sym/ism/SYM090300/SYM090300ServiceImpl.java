package hsco.com.sym.ism.SYM090300;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM090300ServiceImpl.java
 * @Description  	: 내부결재완료 첨부문서를 관리하는 서비스 구현체 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 9. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------

 * </pre>  
 */
@Service("SYM090300Service")
public class SYM090300ServiceImpl extends BaseService implements SYM090300Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM090300ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /**
	 * 사용자정보 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void SYM090300List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		StringBuffer sb = new StringBuffer();
		sb.append("[Attach]\n");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		if(log.isDebugEnabled()){
			log.debug("inMap.get(INNER_SANCTN_ID)====" + inMap.get("INNER_SANCTN_ID"));
		}

		records = (List<Map>)baseDao.list("selectCompletedSanctnFileList", inMap);	
		int lsize = 0;
		if(records == null){
			lsize = 0;
		} else {
			lsize = records.size();
			sb.append("Attach.cnt=" + lsize + "\n");
		}
		String sanctnSj = "";
		for(int i=0; i< lsize;i++){
			Map map = (Map)records.get(i);
			if(i == 0)
				sanctnSj = (String)map.get("SANCTN_SJ");
			sb.append("Attach." + i + "=C:\\HandySoft\\HANDYGroupware8\\bin\\" + (String)map.get("ORGINL_FILE_NM"));
		}
		Map map2 = new HashMap<String, String>();
		map2.put("SANCTN_SJ", sanctnSj);
		map2.put("ATCH_CN",sb.toString());
		List<Map> records2 = new ArrayList<Map>();
		records2.add(map2);
			
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap2);
		
	}
 

}
