package hsco.pms.rnt.pra.RNT01020100;

import java.util.List;
import java.util.Map;

import org.hsqldb.lib.HashMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT01020100ServiceImpl.java
 * @Description  	: 입주대기자관리
 * @author       	: 지효정
 * @since        	: 2015. 10. 21.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * </pre>  
 */
@Service("RNT01020100Service")
public class RNT01020100ServiceImpl extends BaseService{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 입주대기자 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void mvnWaitrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01020100DAO.mvnWaitrList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 입주대기자 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void mvnWaitrCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		boolean bCheck = false;
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT01020100DAO.mvnWaitrC", map);
				bCheck = true;
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01020100DAO.mvnWaitrU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("RNT01020100DAO.mvnWaitrD", map);
				bCheck = true;
			}
		}
		
		//삭제된 대기자가 있을경우 대기번호를 재조정 한다.
		if(bCheck == true){
			for(int x=0; x<list.size(); x++){
				Map map = list.get(x);
				
				List <Map> records = (List<Map>)baseDao.list("RNT01020100DAO.mvnWaitrNoList", map);	// 대기번호 수정필요인원 목록
				
				for(int y=0; y<records.size(); y++){
					Map map2 = records.get(y);
					map2.put("WAIT_NO", y+1);
					baseDao.update("RNT01020100DAO.mvnWaitrNoU", map2);		// 대기번호 일괄 수정
				}
			}
		}
	} 
	
	/**
	 * 입주대기자 대기순위 U
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void mvnWaitrNoU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			baseDao.update("RNT01020100DAO.mvnWaitrNoU", map);
		}
	} 
	
	/**
	 * 입주대기자 일괄등록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void mvnWaitrCstmrC(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				String rentCstmrSeq = (String)baseDao.select("rentCstmrDAO.rentCstmrSeq");
				map.put("PRMANENT_CSTMR_NO", rentCstmrSeq);
				// 영구 임대고객 등록 (TBRNT_PRMANENT_RENT_CSTMR)
				baseDao.insert("rentCstmrDAO.rentCstmrC", map);
				
				// 영구 입주 대기자 등록 (TBRNT_MVN_WAITR)
				baseDao.insert("RNT01020100DAO.mvnWaitrC", map);	
			}
		}
	}

	/**
	 * 입주대기자 고객가족 목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentCstmrFamilyList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01020100DAO.rentCstmrFamilyList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 입주대기자 고객가족 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked"})
	
	public void rentCstmrFamilyCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}
			catch( Exception e) {
				throw new NexaServiceException(e); 
			}
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				//해당 데이터가 영구임대고객 테이블에 저장되어있는지 확인
				String prmanentCstmrNo = (String) baseDao.select("RNT01020100DAO.prmanentRentCstmr", map);
				
				//데이터 없을경우 영구임대고객 테이블에 insert
				if("".equals(prmanentCstmrNo) || null==prmanentCstmrNo){
					// 영구임대고객 등록 (TBRNT_PRMANENT_RENT_CSTMR)
					baseDao.insert("rentCstmrDAO.rentCstmrC", map);
					prmanentCstmrNo = (String) baseDao.select("RNT01020100DAO.prmanentRentCstmr", map);	
				}
				
				map.put("PRMANENT_CSTMR_NO", prmanentCstmrNo);
				baseDao.insert("RNT01020100DAO.rentCstmrFamilyC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				// 영구 임대고객 가족사항 수정
				baseDao.update("rentCstmrDAO.rentCstmrFamilyU", map);
				// 영구 임대고객 정보 수정
				baseDao.update("rentCstmrDAO.rentCstmrU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				// 영구 임대고객 가족사항 삭제
				baseDao.update("rentCstmrDAO.rentCstmrFamilyD", map);
				// 영구 임대고객 정보 삭제
				//baseDao.update("rentCstmrDAO.rentCstmrD", map);
			}
		}
	}  
}
