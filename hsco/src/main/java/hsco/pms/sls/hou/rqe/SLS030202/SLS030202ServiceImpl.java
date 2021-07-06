package hsco.pms.sls.hou.rqe.SLS030202;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS030202ServiceImpl.java
 * @Description  	: 
 * @author       	: 홍길동
 * @since        	: 2015. 8.17.
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
 *  2015. 8. 17.		 홍길동			최초생성
 * </pre>
 */
@Service("SLS030202Service")
public class SLS030202ServiceImpl extends BaseService implements SLS030202Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
		
    
    /**
	 * 주택납부 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHousePayList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS030202DAO.selectHousePayList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	// 주택부가세 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHouseVatList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS030202DAO.selectHouseVatList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	
	// 주택부가세 기생성자료 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHouseVatExsitYn( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS030202DAO.selectHouseVatExsitYn", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
		
		
	/**
	 * 주택부가세 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes" })	
	public int saveHouseVat ( DataSetMap tranInfo, Map<String, Object> inVar,
									 Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									 Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		Map map = null;
		
		if (list != null)
			map = list.get(0);
		
		//기존자료 삭제
		iRow += baseDao.delete("SLS030202DAO.deleteHouseVat", map);
		
		//자료생성 주택분양납부
		//map.put("BILL_SE", "1"); //계산서구분; 1:세금계산서 , 2:계산서 
		baseDao.insert("SLS030202DAO.insertHouseVat1", map);
		
		//자료생성 주택임대납부
		//map.put("BILL_SE", "1");
		baseDao.insert("SLS030202DAO.insertHouseVat2", map);
		
		//자료생성 해약자 분양금 (-)부가세 생성
		//map.put("BILL_SE", "1");
		baseDao.insert("SLS030202DAO.insertHouseVat3", map);
		
		//자료생성 해약자 임대 (-)부가세 생성
		//map.put("BILL_SE", "1");
		baseDao.insert("SLS030202DAO.insertHouseVat4", map);
		
		//자료생성 간주임대료 생성
		//map.put("BILL_SE", "");
		baseDao.insert("SLS030202DAO.insertHouseVat5", map);
		
		//자료생성 간주임대료 생성
		//map.put("BILL_SE", "");
		baseDao.insert("SLS030202DAO.insertHouseVat6", map);

		return iRow;
	}
	
	
	// 주택부가세 매출조서 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHouseSellingWtnncList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS030202DAO.selectHouseSellingWtnncList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	// 세금계산서_합계 출력 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHouseTaxbillSumList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS030202DAO.selectHouseTaxbillSumList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	// 세금계산서_합계 출력 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHouseTaxbillSumDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS030202DAO.selectHouseTaxbillSumDetailList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	// 세금계산서_개별 출력 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHouseTaxbillIndvdlzList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS030202DAO.selectHouseTaxbillIndvdlzList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	// 전자세금계산서 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHouseElecTaxbillList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS030202DAO.selectHouseElecTaxbillList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
}
