package hsco.pms.rnt.lrm.RNT030411;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT030410ServiceImpl.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 10. 13.
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

@SuppressWarnings("unused")
@Service("RNT030411Service")
public class RNT030411ServiceImpl extends BaseService implements RNT030411Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

	@SuppressWarnings("rawtypes")
	public void getList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;	
		log.debug("사회보장정보 조회 ----------------------------------------------------!");			
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = null;

		
		if(inMap.get("CANCEL_SE").equals("1")){
			records = (List<Map>)baseDao.list("RNT030411DAO.getList", inMap);
		
		} 
		else{
			records = (List<Map>)baseDao.list("RNT030411DAO.getList1", inMap);		
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);	
		outDataset.put("output1", outDsMap);
	}
		
}