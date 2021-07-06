package hsco.pms.sls.hou.ctr.SLS020207;

import java.util.HashMap;
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
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS020101ServiceImpl.java
 * @Description  	: 
 * @author       	: 홍길동
 * @since        	: 2015. 12.16.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 16.		 홍길동			최초생성
 * </pre>
 */
@Service("SLS020207Service")
public class SLS020207ServiceImpl extends BaseService implements SLS020207Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
		
    
	/**
	 * 증감율 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void Intrt( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS020207DAO.Intrt", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	
	/**
	 * 보증금. 임대료 증액 조회 (처리대상자 조회)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void RntchrgChangeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		// 해당 재계약회차에 증액이 됐는지 확인
		String rntChrgChangeStr = (String)baseDao.select("SLS020207DAO.selectRntChrgChangeYn", inMap);
	
		List <Map> records;
		// 증액이 이미 되었다면, 증액된 내역을 가져온다
		if(Integer.parseInt(rntChrgChangeStr) > 0){
			records = (List<Map>)baseDao.list("SLS020207DAO.RntchrgAlreadyChangedList", inMap);
		}
		// 증액이 안되어있다면, 증액이 될 내역을 가져온다
		else{
			records = (List<Map>)baseDao.list("SLS020207DAO.RntchrgChangeList", inMap);
		}
		
		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	

    /**
     * 현금영수증 결과자료 입력 프로시저 호출
     * @param inMap
     * @return String
     * @throws Exception
     */    
	@SuppressWarnings("rawtypes")
	public void spsls_house_260c_raise(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);			
		List<Map> inMastList = (List<Map>)baseDao.list("SLS020207DAO.List", inMap);
		int inMastLeng = inMastList == null ? 0 : inMastList.size();
		if(inMastLeng > 0){

			Map<String, Object> inMastItem = inMastList.get(0);
			String CHANGE_SN = inMastItem.get("CHANGE_SN").toString();
			
			throw new NexaServiceException("info.항목.중복", "재계약" + CHANGE_SN + "회차 정보");
		}
				
		
		List <Map> records;
		for (int x = 0; x < inDsMap.size(); x++) {
		
		Map<String, Object> map = inDsMap.get(x);
		records = (List<Map>)baseDao.list("SLS020207DAO.SPSLS_HOUSE_260C_RAISE", map);		
		}
	}		

    /**
     * 증액취소
     * @param inMap
     * @return String
     * @throws Exception
     */    
	@SuppressWarnings("rawtypes")
	public void spsls_house_260c_raise_cancel(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
				
		
		for (int x = 0; x < inDsMap.size(); x++) {
		
			Map<String, Object> map = inDsMap.get(x);
			baseDao.list("SLS020207DAO.SPSLS_HOUSE_260C_RAISE_CANCEL", map);		
		}
	}	
	
	
	
	
	
	/**
     * 임대료,보증금 증액 프로시저
     * @param inMap
     * @return void
     * @throws Exception
     */    
	@SuppressWarnings("rawtypes")
	public void spsls_house_rentinfo_change(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list==null) ? 0 : list.size(); 

		Map inMap = null;
		
		List <Map> records;
		for (int x = 0; x < listSize; x++) {
			Map<String, Object> map = list.get(x);
			records = (List<Map>)baseDao.list("SLS020207DAO.SPSLS_HOUSE_RENTINFO_CHANGE", map);		
		}
	}		

    /**
     * 임대료,보증금 증액 취소 프로시저
     * @param inMap
     * @return String
     * @throws Exception
     */    
	@SuppressWarnings("rawtypes")
	public void spsls_house_rentinfo_change_d(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
				
		
		for (int x = 0; x < inDsMap.size(); x++) {
		
			Map<String, Object> map = inDsMap.get(x);
			baseDao.list("SLS020207DAO.SPSLS_HOUSE_RENTINFO_CHANGE_D", map);		
		}
	}	
	
	
	/**
	 * 재계약회차 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void reContractNum( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS020207DAO.reContractNum", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
}
