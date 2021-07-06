package hsco.mis.hrm.HRM080204;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM030201SeviceImpl.java
 * @Description  	: 교육/훈련 이수내역 서비스 구현체
 * @author       	: 최인석
 * @since        	: 2016. 09. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 09. 24.				   최인석				최초생성
 * </pre>  
 */


@Service("HRM080204Service")
public class HRM080204ServiceImpl extends BaseService implements HRM080204Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /**
	 * 원격교육학습현황 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRemoteEdcLrnSttusList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		
		outDsMap1.setRowMaps((List<Map>)baseDao.list("HRM080204DAO.selectRemoteEdcLrnSttusList", inMap));
		outDsMap2.setRowMaps((List<Map>)baseDao.list("HRM080204DAO.selectEmpList", inMap));
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		
	}
	 
	/**
	 * 원격교육학습현황 수정
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void saveRemoteEdcLrnSttus(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    
		DataSetMap list  = (DataSetMap) inDataset.get("input1");
		DataSetMap ymSeDsMap  = (DataSetMap) inDataset.get("input2");
		
	    boolean flag = false;
		
		for (int x = 0; x < list.size(); x++) {
	        Map map = list.get(x);
	        int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
	        switch (rowType) {
	        	case DataSet.ROW_TYPE_INSERTED:
	        	if(!flag) {
	        		List<String> ymSeList = new ArrayList<String>();
	        		Map<String, Object> ymSeMap = new HashMap<String, Object>();

	        		for(int i=0; i<ymSeDsMap.size(); i++) {
	        			ymSeDsMap.get(i);
	        			ymSeList.add((String) ymSeDsMap.get(i).get("YM"));
	        		}
	        		ymSeMap.put("ymSeList", ymSeList);
	        		baseDao.delete("HRM080204DAO.remoteEdcLrnSttusD", ymSeMap);
	        		flag = true;
	        	}
		        baseDao.insert("HRM080204DAO.remoteEdcLrnSttusC", map);
		        break;    
	        	case DataSet.ROW_TYPE_UPDATED:
		        baseDao.update("HRM080204DAO.remoteEdcLrnSttusU", map);
		        break;
	        }
	    }
	}

    /**
	 * 교육관리 이관처리
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	 @SuppressWarnings({ "rawtypes"})
	public void edcManageProcess( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		// 기존 교육관리에 있는 해당 월 데이터 삭제
		baseDao.delete("HRM080204DAO.edcManageD", inMap);
		
		// 교육관리 이관처리
		baseDao.insert("HRM080204DAO.edcManageC", inMap);
	}
	 
}
