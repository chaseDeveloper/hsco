package hsco.hpm.ctm.HPM070102;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HPM070102Controller.java
 * @Description  	: 대관(프로그램)관리
 * @author       	: 정 민
 * @since        	: 2017. 09. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2017. 09. 04.					정 민			최초생성
 * </pre>  
 */

@Service("HPM070102Service")
public class HPM070102ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(HPM070102ServiceImpl.class);
	
	
    /**
	 * 대관(프로그램)관리 목록 조회 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRentProgrmReqstManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM070102DAO.selectRentProgrmReqstManageList", inMap));
		
		outDataset.put("output1", outDsMap);		
	}
    
    
    /**
	 * 대관(프로그램)관리 목록 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void saveRentProgrmReqstManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();	
		
		for (int x = 0; x < listSize; x++) {				
			Map map = list.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HPM070102DAO.rentProgrmReqstManageC", map);	
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HPM070102DAO.rentProgrmReqstManageU", map);		
					break;
				case DataSet.ROW_TYPE_DELETED :
					map.put("DELETE_AT", "1");
					baseDao.update("HPM070102DAO.rentProgrmReqstManageU", map);		
					break;
			}				
		}				
	}
	
    /**
	 * 대사관리(입금내역) 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRcpmnyDtlsList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM070102DAO.selectRcpmnyDtlsList", inMap));
		
		outDataset.put("output1", outDsMap);		
	}
	
    /**
	 * 입금내역매핑
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void rcpmnyDtlsMapping( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
    	DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();	
		String rcpmnyDtlsSn = "";
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
				case DataSet.ROW_TYPE_UPDATED :
					// 입금내역관리 생성, 순번 get
					rcpmnyDtlsSn = (String) baseDao.insert("HPM070102DAO.rcpmnyDtlsManageC", map);	
					break;	
			}	
		}
		
    	DataSetMap list2 = (DataSetMap) inDataset.get("input2");

		int listSize2 = (list2 == null) ? 0 : list2.size();	
		
		for (int x = 0; x < listSize2; x++) {
			
			Map map = list2.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
				case DataSet.ROW_TYPE_UPDATED :
					// 신청내역관리 update
					map.put("RCPMNY_DTLS_SN", rcpmnyDtlsSn);
					baseDao.update("HPM070102DAO.rentProgrmReqstManageU", map);
					break;	
			}	
		}
	}
	
    /**
	 * 결제정보취소
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked"})
	public void cancelRcpmnyDtlsMapping( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		// 입금내역 삭제
		baseDao.delete("HPM070102DAO.rcpmnyDtlsManageD", inMap);	
		
		// 신청정보 수정
		inMap.put("RCPMNY_DTLS_SN", null);
		baseDao.update("HPM070102DAO.rentProgrmReqstManageU", inMap);
	}
    
    /**
	 * 수강대상 및 요금 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked"})
	public void selectUseChrgeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM070102DAO.selectUseChrgeList", inMap));
		
		outDataset.put("output1", outDsMap);		
	}

    /**
	 * 회원정보 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked"})
	public void selectMberInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)hscoHomePageDao.list("HomepageDAO.selectMberInfo", inMap));
		
		outDataset.put("output1", outDsMap);		
	}
}