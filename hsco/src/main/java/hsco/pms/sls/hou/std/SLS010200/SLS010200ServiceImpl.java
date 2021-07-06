package hsco.pms.sls.hou.std.SLS010200;

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
 * @Class Name   	: SLS010200ServiceImpl.java
 * @Description  	: 
 * @author       	: 최승락
 * @since        	: 2015. 7.29.
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
 *  2015. 7. 29.		 최승락			최초생성
 * </pre>
 */
/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS010200ServiceImpl.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 11. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 25.					정윤원				최초생성
 * </pre>  
 */
@Service("SLS010200Service")
public class SLS010200ServiceImpl extends BaseService implements SLS010200Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
	
	/**
	 * 주택타입정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseTypeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;

			records = (List<Map>)baseDao.list("SLS010200DAO.selectHouseTypeList", inMap);
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);		
	}
		
	
	/**
	 * 주택타입정보 신규,수정,삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes" })	
	public int saveHouseTypeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int size = (list==null) ? 0 : list.size();
						
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					
					String houseTyCodeExistYn = (String)baseDao.select("SLS010200DAO.selectHouseTyCodeExistYn", map);
					if("N".equals(houseTyCodeExistYn)) {
						baseDao.insert("SLS010200DAO.insertHouseTypeList", map);						
					} else {
						String houseTyCode = (String)map.get("HOUSE_TY_CODE");
						throw new NexaServiceException("info.중복.재입력.요청", "주택타입코드(" + houseTyCode + ") ");
					}
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SLS010200DAO.updateHouseTypeList", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SLS010200DAO.deleteHouseTypeList", map);
					break;
			}
		}
		
		return iRow;
	}
	
	/**
	 * 납부정보(tabpage1) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseTybyPayPayList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;
			
			records = (List<Map>)baseDao.list("SLS010200DAO.selectHouseTybyPayPayList", inMap);

			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);		
	}
	
	/**
	 * 옵션정보(tabpage2) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseTybyPayOptnList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;

			records = (List<Map>)baseDao.list("SLS010200DAO.selectHouseTybyPayOptnList", inMap);
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);

			outDataset.put("output1", outDsMap);		
	}
	
	/**
	 * 할인정보(tabpage3) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseTybyPayDscntList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;
			
			records = (List<Map>)baseDao.list("SLS010200DAO.selectHouseTybyPayDscntList", inMap);

			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);		
	}
	
	/**
	 * 납부정보, 옵션정보, 할인정보 신규,수정,삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "rawtypes", "unchecked" })	
	public int saveHouseTybyPayList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int size = (list==null) ? 0 : list.size();
		
		for (int x = 0; x < size; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			String dscntApplcSe = null;
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					
					//납부번호 생성
					Integer payNo = selectPayNo(map);
					map.put("PAY_NO", payNo); 

					//할인적용구분
					dscntApplcSe = getDscntApplcSe(map);
					map.put("DSCNT_APPLC_SE", dscntApplcSe);	
										
					baseDao.insert("SLS010200DAO.insertHouseTybyPayList", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					
					//할인적용구분
					dscntApplcSe = getDscntApplcSe(map);
					map.put("DSCNT_APPLC_SE", dscntApplcSe);					

					iRow += baseDao.update("SLS010200DAO.updateHouseTybyPayList", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SLS010200DAO.deleteHouseTybyPayList", map);
					break;
			}
		}
		
		return iRow;
	}
	
	/**
	 * 납부번호 가져오기
	 */
	@SuppressWarnings("rawtypes")
	public Integer selectPayNo(Map map) {
		Integer payNo = (Integer)baseDao.select("SLS010200DAO.selectPayNo", map);
				
		return payNo;
	}
	
	/**
	 * 할인적용구분 
	 */
	@SuppressWarnings({"rawtypes" })
	public String getDscntApplcSe(Map map) {
		String dscntApplcSe = null;
		
		String payCode = String.valueOf(map.get("PAY_CODE"));		
		if ("D1".equals(payCode)) {
			dscntApplcSe = "01";
		} else if("D2".equals(payCode)) {
			dscntApplcSe = "02";
		} else if("D3".equals(payCode)) {
			dscntApplcSe = "03";
		}
		return dscntApplcSe; 
	}
}
