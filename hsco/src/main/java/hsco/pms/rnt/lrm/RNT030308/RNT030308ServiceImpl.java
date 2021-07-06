package hsco.pms.rnt.lrm.RNT030308;

import java.util.List;
import java.util.Map;

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
 * @Class Name   	: RNT030308ServiceImpl.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 6. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 06. 24.				       이광원		    	최초생성
 * </pre>  
 */


@Service("RNT030308Service")
public class RNT030308ServiceImpl extends BaseService implements RNT030308Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    /* 소유물건 조회 */
	@SuppressWarnings("rawtypes")
	public void getList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		String gubun = String.valueOf(inMap.get("gubun"));
		
		System.out.println("gubun =" + gubun);
		
		if( gubun.equals("1")){
			System.out.println("계약자");
			records = (List<Map>)baseDao.list("RNT030308DAO.getList", inMap);
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			outDataset.put("output1", outDsMap);			
		}	
				
		if( gubun.equals("2")){
			System.out.println("대기자");
			records = (List<Map>)baseDao.list("RNT030308DAO.getList2", inMap);
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			outDataset.put("output1", outDsMap);			
		}			
		

		
	}
	/* 출력물 조회 */
	@SuppressWarnings("rawtypes")
	public void Print(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		List <Map> records1;

		records = (List<Map>)baseDao.list("RNT030308DAO.PrintM", inMap);
		records1 = (List<Map>)baseDao.list("RNT030308DAO.PrintD", inMap);

						
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap1);
		
	}
	


}