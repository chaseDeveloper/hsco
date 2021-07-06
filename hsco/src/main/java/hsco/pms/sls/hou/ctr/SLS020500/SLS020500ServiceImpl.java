package hsco.pms.sls.hou.ctr.SLS020500;

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
 * @Class Name   	: SLS020500ServiceImpl.java
 * @Description  	: 입주대기자 관리 ServiceImpl
 * @author       	: 정윤원
 * @since        	: 2015. 10.10.
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
 *  
 * </pre>
 */
@Service("SLS020500Service")
public class SLS020500ServiceImpl extends BaseService implements SLS020500Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

	
    /**
	 * 주택 입주대기자 리스트 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHouseMvnWaitrList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020500DAO.selectHouseMvnWaitrList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 주택 입주대기자 관리  신규,수정,삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public int saveHouseMvnWaitrList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");


		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		
			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("SLS020500DAO.insertHouseMvnWaitrList"       , map);  //입력
				
				iRow += baseDao.update("SLS020500DAO.updateHouseMvnWaitrSn"  , map);  //대기일련번호 수정
				break;
				
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("SLS020500DAO.updateHouseMvnWaitrList", map); //수정
				
				iRow += baseDao.update("SLS020500DAO.updateHouseMvnWaitrSn"  , map);  //대기일련번호 수정
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("SLS020500DAO.deleteHouseMvnWaitrFamily", map); //삭제
				iRow += baseDao.delete("SLS020500DAO.deleteHouseMvnWaitrList", map); //삭제
				break;
		    }
			
		}

		return iRow;
	}

	
	/**
	 * 주택 입주대기자 가족 리스트 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectCstmrFamilyList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020500DAO.selectCstmrFamilyList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 주택 입주대기자 리스트 일괄등록 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public int saveHouseMvnWaitrPopUp(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");


		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		
			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :
				
				Integer cCstmrNo = (Integer)baseDao.select("SLS020500DAO.selectCstmrNoFrom", map);
				
				if (cCstmrNo == null) {
					cCstmrNo = selectCtmrNo()   ;  //주택고객 번호 신규채번
					log.debug("########## 주택고객번호  신규채번 : " + cCstmrNo);;
					map.put("HOUSE_CSTMR_NO", cCstmrNo) ;  //주택고객 번호 입력
					baseDao.insert("SLS020500DAO.insertShouseCstmrInfo"          , map);  //(1)주택고객 등록
				} else {
					log.debug("########## 기등록주택고객 : " + cCstmrNo);
					map.put("HOUSE_CSTMR_NO", cCstmrNo) ;  //주택고객 번호 입력
					baseDao.update("SLS020500DAO.updateShouseCstmrInfo"          , map);
				}
				
				if (map.get("IHIDNUM").toString().equals(map.get("MST_IHIDNUM").toString())) {
					log.debug("########## 주택입주대기자 등록 : " + cCstmrNo);;
					baseDao.insert("SLS020500DAO.insertHouseMvnWaitrPouUp"       , map);  //(2)주택입주 대기자 등록
					
				} else {
					log.debug("########## 주택입주대기자가족 등록 : " + cCstmrNo);
					baseDao.insert("SLS020500DAO.insertHouseMvnWaitrFamily"       , map);
				}
								
				iRow += baseDao.update("SLS020500DAO.updateHouseMvnWaitrSn"  , map);  //(3)대기일련번호 수정
				
				break;
				
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("SLS020500DAO.updateHouseMvnWaitrPouUp", map); //수정
				
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("SLS020500DAO.deleteHouseMvnWaitrPouUp", map); //삭제
				break;
		    }
			
		}

		return iRow;
	}
	
	
	
	/**
	 * 주택 입주대기자 계약통지일자 업데이트
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public int updateNticeDeList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");


		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		
			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("SLS020500DAO.updateNticeDeList"       , map);  //계약통지일자 업데이트
				iRow += baseDao.update("SLS020500DAO.updateHouseMvnWaitrSn"  , map);  //대기일련번호 업데이트
				break;
		    }
			
			
		}

		return iRow;
	}
	
	
	
	/**
	 * 고객번호 시퀀스 가져오기
	 */
	public Integer selectCtmrNo() {
		Integer seq = (Integer)baseDao.select("SLS020500DAO.selectCstmrNo");		
		return seq;
	}
	
	
	
	/**
	 * 가족사항 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return Integer
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int saveHouseMvnFamilyList( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("SLS020500DAO.insertMvnFamily", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SLS020500DAO.updateMvnFamily", map);
					break;
				case DataSet.ROW_TYPE_DELETED :										
					iRow += baseDao.delete("SLS020500DAO.deleteMvnFamily", map);
					break;
				default :
					break;
			}
		}
		return iRow;
	}
	
    /**
	 * 안내문 헤더정보  조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectHeaderInfo(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS020500DAO.selectHeaderInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}	
	
}
