package hsco.mis.fun.FUN040301;

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
 * @Class Name   	: FUN040301ServiceImpl.java
 * @Description  	: 자금일보 서비스 구현체 클래스
 * @author       	: 이수지
 * @since        	: 2015. 11. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 20.	이수지		최초생성
 * </pre>  
 */
@Service("FUN040301Service")
public class FUN040301ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    
    /**
	 * 자금일보 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAll( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectAll", inMap));
        outDataset.put("output1", outDsMap);
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectSpend", inMap));
        outDataset.put("output2", outDsMap2);
        
        DataSetMap outDsMap3 = new DataSetMap();
        outDsMap3.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectFundCondition", inMap));
        outDataset.put("output3", outDsMap3);
        
        DataSetMap outDsMap4 = new DataSetMap();
        outDsMap4.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectDistrictSpend", inMap));
        outDataset.put("output4", outDsMap4);
	}
    
    /**
	 * 자금일보 이체팝업
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes" })
	public void trnsfr( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        baseDao.delete("FUN040301DAO.deleteTrasmit", inMap);	//송신정보삭제
        baseDao.delete("FUN040301DAO.deleteRecptn", inMap);		//수신정보삭제
        baseDao.insert("FUN040301DAO.insertTrasmit", inMap);	//송신정보등록
        baseDao.insert("FUN040301DAO.insertRecptn", inMap);		//수신정보등록
        
	}
    /**
	 * 자금일보 자금현황 업데이트
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes" })
	public int fundConditionUpdate( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			iRow += baseDao.update("FUN040301DAO.fundConditionUpdate", map);
		}
		
		return iRow;
		
	}
    
    /**
	 * 자금일보 자금현황 가져오기
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes" })
	public void fundConditionPopup( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        baseDao.update("FUN040301DAO.fundConditionPopup", inMap);
        
        // 현재 일자 자료 삭제(국비)
		baseDao.delete("FUN040301DAO.copyNxndrMoneyD", inMap);
		
		// 전일 자료 복사
		baseDao.update("FUN040301DAO.copyNxndrMoneyC", inMap);
		
        // 현재 일자 자료 삭제(기타)
		baseDao.delete("FUN040301DAO.copyEtcMoneyD", inMap);
		
		// 전일 자료 복사
		baseDao.update("FUN040301DAO.copyEtcMoneyC", inMap);
	}
    
    /**
	 * 자금일보 지구별지출현황 가져오기
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes" })
	public void districtSpendPopup( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        baseDao.delete("FUN040301DAO.districtSpendDelete", inMap);
        baseDao.insert("FUN040301DAO.districtSpendInsert", inMap);
	}
    
    /**
	 * 일괄삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes" })
	public void deleteAll( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        baseDao.delete("FUN040301DAO.deleteAll", inMap);
	}
    
    /**
	 * 데이터건 검색
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCount( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectCount", inMap));
        outDataset.put("output1", outDsMap);
	}
    
    /**
     * 프로시저호출
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
	public void callProcedure( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		baseDao.update("FUN040301DAO.callProcedure", inMap);
		
	}
    
    /**
	 * 국비, 기타현황 검색(인쇄용)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPrintList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectPrintList", inMap));
        outDataset.put("output1", outDsMap);
	}
    
    /**
	 * 정기예금현황 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDpstAcnutList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectDpstAcnutList", inMap));
        outDataset.put("output1", outDsMap);
	}
    
    /**
	 * 국비 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectNxndrMoneyList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectNxndrMoneyList", inMap));
        outDataset.put("output1", outDsMap);
	}
    
    /**
	 * 국비 CRUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int saveNxndrMoney( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("FUN040301DAO.saveNxndrMoneyD", map);
					break;
			}	
		}
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN040301DAO.saveNxndrMoneyC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("FUN040301DAO.saveNxndrMoneyU", map);
					break;
			}	
		}	
		
		list = (DataSetMap) inDataset.get("input2");

		Map map = list.get(0);
		
		// 조회
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectNxndrMoneyList", map));
        outDataset.put("output1", outDsMap);
        
		return iRow;
	
	}
	
	/**
	 * 국비 자료복사
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void copyNxndrMoney( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
		
        // 현재 일자 자료 삭제
		baseDao.delete("FUN040301DAO.copyNxndrMoneyD", inMap);
		
		// 전일 자료 복사
		baseDao.update("FUN040301DAO.copyNxndrMoneyC", inMap);
			
		// 조회
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectNxndrMoneyList", inMap));
        outDataset.put("output1", outDsMap);
	
	}
	
	/**
	 * 기타금액 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEtcMoneyList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectEtcMoneyList", inMap));
        outDataset.put("output1", outDsMap);
	}
    
    /**
	 * 기타금액 CRUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int saveEtcMoney( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("FUN040301DAO.saveEtcMoneyD", map);
					break;
			}	
		}
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN040301DAO.saveEtcMoneyC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("FUN040301DAO.saveEtcMoneyU", map);
					break;
			}	
		}	
		
		list = (DataSetMap) inDataset.get("input2");

		Map map = list.get(0);
		
		// 조회
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectEtcMoneyList", map));
        outDataset.put("output1", outDsMap);
        
		return iRow;
	
	}
	
	/**
	 * 기타금액 자료복사
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void copyEtcMoney( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
		
        // 현재 일자 자료 삭제
		baseDao.delete("FUN040301DAO.copyEtcMoneyD", inMap);
		
		// 전일 자료 복사
		baseDao.update("FUN040301DAO.copyEtcMoneyC", inMap);
			
		// 조회
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectEtcMoneyList", inMap));
        outDataset.put("output1", outDsMap);
	
	}
	
	/**
	 * 단지별 보상금 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRewardMoneyList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectDistrictSpend", inMap));
        outDataset.put("output1", outDsMap);
	}
    
    /**
	 * 단지별 보상금 CRUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int saveRewardMoney( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("FUN040301DAO.saveRewardMoneyD", map);
					break;
			}	
		}
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN040301DAO.saveRewardMoneyC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("FUN040301DAO.saveRewardMoneyU", map);
					break;
			}	
		}	
		
		list = (DataSetMap) inDataset.get("input2");

		Map map = list.get(0);
		
		// 조회
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectDistrictSpend", map));
        outDataset.put("output1", outDsMap);
        
		return iRow;
	
	}
	
	/**
	 * 단지별 보상금 자료복사
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void copyRewardMoney( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
		
        // 현재 일자 자료 삭제
		baseDao.delete("FUN040301DAO.districtSpendDelete", inMap);
		
		// 전일 자료 복사
		baseDao.update("FUN040301DAO.districtSpendInsert", inMap);
			
		// 조회
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectDistrictSpend", inMap));
        outDataset.put("output1", outDsMap);
	
	}
	
	/**
	 * 사이버 브랜치 잔액정보 가져오기
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void branchBlceCopy( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
//        List <Map> records;
//        
//		// 사이버 브랜치 잔액조회
//        records = (List<Map>)baseDao.list("FUN040301DAO.selectCb2CmstraList", inMap);
		
		// 현재 일자 자료 삭제(국비)
		baseDao.delete("FUN040301DAO.copyNxndrMoneyD", inMap);
		
		// 현재 일자 기준 브랜치 잔액 입력(국비)
		baseDao.insert("FUN040301DAO.branchNxndrMoneyC", inMap);
		
		// 현재 일자 자료 삭제(기타)
		baseDao.delete("FUN040301DAO.copyEtcMoneyD", inMap);
		
		// 현재 일자 기준 브랜치 잔액 입력(기타)
		baseDao.insert("FUN040301DAO.branchEtcMoneyC", inMap);
		
		// 현재 일자 기준 브랜치 잔액 입력(수입원, MMDA)
		baseDao.update("FUN040301DAO.branchFundConditionU", inMap);
	
	}	
	
	/**
	 * 수입지출 총괄 비고 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRm( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectRm", inMap));
        outDataset.put("output1", outDsMap);
	}	
    
    /**
	 * 기타금액 CRUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int saveRm( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		Map map = list.get(0);
		
		int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
		System.out.println(rowType);
		switch(rowType) {
		case DataSet.ROW_TYPE_INSERTED :
			baseDao.update("FUN040301DAO.saveRm", map);
			break;
		case DataSet.ROW_TYPE_UPDATED :
			System.out.println("업데이트 실행~~~~!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
			baseDao.update("FUN040301DAO.saveRm", map);
			break;
		}	
        
		return iRow;
	
	}   
	
	/**
	 * 이체정보 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectTransferInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FUN040301DAO.selectTransferInfoList", inMap));
        outDataset.put("output1", outDsMap);
	}	
    

    /**
	 * 이체정보 CRUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int saveTransferInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			
			Map inMap = list.get(x);
		
			int rowType = ((Integer) inMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
	
			switch(rowType) {
				case DataSet.ROW_TYPE_DELETED :
			        baseDao.delete("FUN040301DAO.deleteTrasmit", inMap);	//송신정보삭제
			        baseDao.delete("FUN040301DAO.deleteRecptn",  inMap);	//수신정보삭제
					break;
				case DataSet.ROW_TYPE_UPDATED :
				case DataSet.ROW_TYPE_INSERTED :
			        baseDao.delete("FUN040301DAO.deleteTrasmit", inMap);	//송신정보삭제
			        baseDao.delete("FUN040301DAO.deleteRecptn",  inMap);	//수신정보삭제
			        baseDao.insert("FUN040301DAO.insertTrasmit", inMap);	//송신정보등록
			        baseDao.insert("FUN040301DAO.insertRecptn",  inMap);	//수신정보등록
					break;
			}
		}
        
		return iRow;
	
	}   
}
