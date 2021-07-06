package hsco.mis.ctr.CTR060100;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CTR060100Service.java
 * @Description  	: 공사대장을 조회하는 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 10. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 07.	이수지		최초생성
 * </pre>  
 */
@Service("CTR060100Service")
public class CTR060100ServiceImpl extends BaseService implements CTR060100Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/**
	 * 공사대장조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void constRuctList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("CTR060100DAO.constRuctList", inMap));
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 공사대장 출력 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntRuctPrint(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        // 출력물 : 조건
        DataSetMap output_print = new DataSetMap();
        output_print.setRowMaps((List<Map>) baseDao.list("CTR060100DAO.constRuctPrint", inMap));
        outDataset.put("output_print", output_print);
        
        // 출력물 : 리스트1
        DataSetMap output_list1 = new DataSetMap();
        output_list1.setRowMaps((List<Map>) baseDao.list("CTR060100DAO.constRuctPrintList1", inMap));
        outDataset.put("output_list1", output_list1);
        
        // 출력물 : 리스트2
        DataSetMap output_list2 = new DataSetMap();
        output_list2.setRowMaps((List<Map>) baseDao.list("CTR060100DAO.constRuctPrintList2", inMap));
        outDataset.put("output_list2", output_list2);       
       
        // 출력물 : 리스트3
        DataSetMap output_list3 = new DataSetMap();
        output_list3.setRowMaps((List<Map>) baseDao.list("CTR060100DAO.constRuctPrintList3", inMap));
        outDataset.put("output_list3", output_list3);    
        
        // 출력물 : 리스트4
        DataSetMap output_list4 = new DataSetMap();
        output_list4.setRowMaps((List<Map>) baseDao.list("CTR060100DAO.constRuctPrintList4", inMap));
        outDataset.put("output_list4", output_list4);    
        
	}
	
}