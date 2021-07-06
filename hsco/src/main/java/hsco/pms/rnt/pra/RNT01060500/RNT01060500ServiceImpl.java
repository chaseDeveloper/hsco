package hsco.pms.rnt.pra.RNT01060500;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT01060500ServiceImpl.java
 * @Description  	: 부가세내역조회
 * @author       	: 김지훈
 * @since        	: 2015. 12. 29.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 29.					김지훈			최초생성
 * </pre>  
 */
@Service("RNT01060500Service")
public class RNT01060500ServiceImpl extends BaseService{
	/**
	 * 부가세정보 확인
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectVatInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01060500DAO.selectVatInfoList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 기존부가세 정보 확인
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectVatInfoChk( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01060500DAO.selectVatInfoChk", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 부가세생성
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void saveVatInfoProc(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		// 기존 부가세정보 삭제
		baseDao.delete("RNT01060500DAO.deleteVatInfoProc", inMap);
		
		// 부가세 생성
		System.out.println(":::: RNT01060500ServiceImpl insert ::" + inMap);
		baseDao.insert("RNT01060500DAO.insertVatInfoProc", inMap);
		
	} 
	
	/**
	 * 부가세정보 수정
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void updateVatInfoList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			baseDao.update("RNT01060500DAO.updateVatInfoList", map);
		
		}
	} 
	
	//매출조서
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSaleReport( DataSetMap tranInfo, Map<String, Object> inVar,
									Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("RNT01060500DAO.selectSaleReport", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	//임대공급명세서
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRentSupplyBill( DataSetMap tranInfo, Map<String, Object> inVar,
									Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("RNT01060500DAO.selectRentSupplyBill", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	// 세금계산서_개별
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHouseTaxbillIndvdlzList( DataSetMap tranInfo, Map<String, Object> inVar,
									Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("RNT01060500DAO.selectHouseTaxbillIndvdlzList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	// 세금계산서_합계
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHouseTaxbillSumList( DataSetMap tranInfo, Map<String, Object> inVar,
									Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("RNT01060500DAO.selectHouseTaxbillSumList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		//세금계산서_합계 출력 상세조회
		List <Map> records2 = (List<Map>)baseDao.list("RNT01060500DAO.selectHouseTaxbillSumDetailList", inMap);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output2", outDsMap2);
	}
	
	// 전자세금계산서
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHouseElecTaxbillList( DataSetMap tranInfo, Map<String, Object> inVar,
									Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
									Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("RNT01060500DAO.selectHouseElecTaxbillList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
}
