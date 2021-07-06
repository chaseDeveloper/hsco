package hsco.pms.sls.lad.rqe.SLS090202;

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

@Service("SLS090202Service")
public class SLS090202ServiceImpl extends BaseService implements SLS090202Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    /**
	 * 토지납부 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadPayList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS090202DAO.selectLadPayList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	// 토지부가세 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadVatList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS090202DAO.selectLadVatList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	// 간주임대료 조회
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void selectRegardList( DataSetMap tranInfo, Map<String, Object> inVar,
										   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
										   Map<String, DataSetMap> outDataset) throws NexaServiceException {

			DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
			Map inMap = null;

			if (inDsMap != null)
				inMap = inDsMap.get(0);

			List <Map> records;

			records = (List<Map>)baseDao.list("SLS090202DAO.selectRegardList", inMap);

			DataSetMap outDsMap = new DataSetMap();		
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
		}
	
	
	
	// 토지부가세 기생성자료 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadVatExsitYn( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS090202DAO.selectLadVatExsitYn", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
		
		
	/**
	 * 토지부가세 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes" })	
	public int saveLadVat ( DataSetMap tranInfo, Map<String, Object> inVar,
									 Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									 Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		Map map = null;
		
		if (list != null)
			map = list.get(0);
		
		//기존자료 삭제
		iRow += baseDao.delete("SLS090202DAO.deleteLadVat", map);
		iRow += baseDao.delete("SLS090202DAO.deleteLadRegard", map);
		
		
		//자료생성(임대 부가세)
		baseDao.insert("SLS090202DAO.insertLadVat1", map);
		
		//자료생성(기타수입 부가세)
		baseDao.insert("SLS090202DAO.insertLadVat2", map);
		
		//자료생성(간주임대료)
		baseDao.insert("SLS090202DAO.insertLadVat3", map);
		
		return iRow;
	}
	
	
	// 토지부가세 매출조서 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadSellingWtnncList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS090202DAO.selectLadSellingWtnncList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	// 세금계산서_합계 출력 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadTaxbillSumList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS090202DAO.selectLadTaxbillSumList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	// 세금계산서_합계 출력 상세조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadTaxbillSumDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS090202DAO.selectLadTaxbillSumDetailList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	// 세금계산서_개별 출력 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadTaxbillIndvdlzList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS090202DAO.selectLadTaxbillIndvdlzList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	// 전자세금계산서 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadElecTaxbillList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS090202DAO.selectLadElecTaxbillList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	// 부동산임대공급가액 명세서 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLadRentSupplyBillList( DataSetMap tranInfo, Map<String, Object> inVar,
									   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									   Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS090202DAO.selectLadRentSupplyBillList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
}
