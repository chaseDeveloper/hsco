package hsco.pms.sls.hou.rqe.SLS030201;

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
 * @Class Name   	: SLS030201ServiceImpl.java
 * @Description  	: 
 * @author       	: 최승락
 * @since        	: 2015. 11.06.
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
 *  2015. 11. 06.		 최승락			최초생성
 * </pre>
 */
@Service("SLS030201Service")
public class SLS030201ServiceImpl extends BaseService implements SLS030201Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
		

	/**
	 * 분양금납부대상자 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseLttotPayList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;
		records = (List<Map>)baseDao.list("SLS030201DAO.selectHouseLttotPayList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 분양금납부대상자 조회(조정파일생성)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes"})
	public int saveHouseLttotPayList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);		
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		
		// 납부기한일자
		Object inPayTmlmt = String.valueOf(inMap.get("PAY_TMLMT"));
		paramMap.put("IN_PAY_TMLMT", inPayTmlmt);
		
		// 조정일자
		Object inMdatDe = String.valueOf(inMap.get("MDAT_DE"));
		paramMap.put("IN_MDAT_DE", inMdatDe);
		
		// 납부순번
		Object inPaySn = inMap.get("PAY_SN");
		if (inPaySn == null) {
			paramMap.put("IN_PAY_SN", null);
		} else {
			paramMap.put("IN_PAY_SN", String.valueOf(inPaySn));
		}
		
		// 주택코드시작
		Object inHouseCodeFr = String.valueOf(inMap.get("HOUSE_CODE_FR"));
		paramMap.put("IN_HOUSE_CODE_FR", inHouseCodeFr);
		
		// 주택코드종료
		Object inHouseCodeTo = String.valueOf(inMap.get("HOUSE_CODE_TO"));
		paramMap.put("IN_HOUSE_CODE_TO", inHouseCodeTo);
		/*
		// 동시작
		Object inDongFr = String.valueOf(inMap.get("DONG_FR"));
		paramMap.put("IN_DONG_FR", inDongFr);
		
		// 동종료
		Object inDongTo = String.valueOf(inMap.get("DONG_TO"));
		paramMap.put("IN_DONG_TO", inDongTo);

		// 호시작
		Object inHoFr = String.valueOf(inMap.get("HO_FR"));
		paramMap.put("IN_HO_FR", inHoFr);
		
		// 호종료
		Object inHoTo = String.valueOf(inMap.get("HO_TO"));
		paramMap.put("IN_HO_TO", inHoTo);
		*/
		// 처리자ID
		Object inOpetrId = String.valueOf(ObjectUtil.getSessionObj("S_USER_ID"));
		paramMap.put("IN_OPETR_ID", inOpetrId);
		
		iRow += baseDao.update("SLS030201DAO.SPSLS_HOUSE_LTTOT_PAY_U", paramMap);
		
		if ("-1".equals(paramMap.get("OUT_RESULT_CD").toString())) {
			throw new NexaServiceException(paramMap.get("OUT_RESULT_MSG").toString());
		}
		
		return iRow;
	}
	
	
	/**
	 * 임대료납부대상자 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseRentPayList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;
		records = (List<Map>)baseDao.list("SLS030201DAO.selectHouseRentPayList", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 임대료납부대상자 저장(체납파일생성)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes"})
	public int saveNpymHouseRentPayList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);		
		
		iRow += baseDao.update("SLS030201DAO.saveNpymHouseRentPayList", inMap);
				
		return iRow;
	}
	
	
	/**
	 * 임대료납부대상자 조정파일 생성여부 체크
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectMdatFileCreatYn( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;
		records = (List<Map>)baseDao.list("SLS030201DAO.selectMdatFileCreatYn", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 임대료납부대상자 저장(조정파일생성)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes"})
	public int saveMdaHouseRentPayList ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);		
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		
		// 청구년월
		Object inRqestYm = String.valueOf(inMap.get("RQEST_YM"));
		paramMap.put("IN_RQEST_YM", inRqestYm);
		
		// 납부기한일자
		Object inPayTmlmt = String.valueOf(inMap.get("PAY_TMLMT"));
		paramMap.put("IN_PAY_TMLMT", inPayTmlmt);		
		
		// 조정일자
		Object inMdatDe = String.valueOf(inMap.get("MDAT_DE"));
		paramMap.put("IN_MDAT_DE", inMdatDe);
		
		// 납부순번
		Object inPaySn = String.valueOf(inMap.get("PAY_SN"));
		paramMap.put("IN_PAY_SN", inPaySn);
		
		// 주택코드시작
		Object inHouseCodeFr = String.valueOf(inMap.get("HOUSE_CODE_FR"));
		paramMap.put("IN_HOUSE_CODE_FR", inHouseCodeFr);
		
		// 주택코드종료
		Object inHouseCodeTo = String.valueOf(inMap.get("HOUSE_CODE_TO"));
		paramMap.put("IN_HOUSE_CODE_TO", inHouseCodeTo);
		
		// 동시작
		/*
		Object inDongFr = String.valueOf(inMap.get("DONG_FR"));
		paramMap.put("IN_DONG_FR", inDongFr);
		
		// 동종료
		Object inDongTo = String.valueOf(inMap.get("DONG_TO"));
		paramMap.put("IN_DONG_TO", inDongTo);

		// 호시작
		Object inHoFr = String.valueOf(inMap.get("HO_FR"));
		paramMap.put("IN_HO_FR", inHoFr);
		
		// 호종료
		Object inHoTo = String.valueOf(inMap.get("HO_TO"));
		paramMap.put("IN_HO_TO", inHoTo);
		*/
		// 처리자ID
		Object inOpetrId = String.valueOf(ObjectUtil.getSessionObj("S_USER_ID"));
		paramMap.put("IN_OPETR_ID", inOpetrId);
		
		iRow += baseDao.update("SLS030201DAO.SPSLS_HOUSE_RENT_PAY_UI", paramMap);
		
		if ("-1".equals(paramMap.get("OUT_RESULT_CD").toString())) {
			throw new NexaServiceException(paramMap.get("OUT_RESULT_MSG").toString());
		}
		
		return iRow;
	}
	
	/**
	 * 임대료전월비교 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseRentPayLsmthCmpr( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;
		records = (List<Map>)baseDao.list("SLS030201DAO.selectHouseRentPayLsmthCmpr", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 분양금납부내역(조정) 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseLttotPayListP01( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;
		records = (List<Map>)baseDao.list("SLS030201DAO.selectHouseLttotPayListP01", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 임대료납부내역[조정] 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseRentPayListP01( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;
		records = (List<Map>)baseDao.list("SLS030201DAO.selectHouseRentPayListP01", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	
	
    /**
	 * 임의수납[분양금] 저장(수정)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int mainUL( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :	
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("SLS030201DAO.updateHouseLttotPayP01", map);		
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					break;			
			}				
		}		
		return iRow;		
	}
	
    /**
	 * 임의수납[임대료] 저장(수정)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int mainUR( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :	
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("SLS030201DAO.updateHouseRentPayP01", map);		
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					break;			
			}				
		}		
		return iRow;		
	}
	
	/**
	 * 조정년월기준 고지서정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectNhtList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;
		records = (List<Map>)baseDao.list("SLS030201DAO.selectHouseRentPayListP02", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 조정년월기준 출력용파일정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectPrintList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;
		records = (List<Map>)baseDao.list("SLS030201DAO.selectHouseRentPayListPrintP02", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	
	
}
