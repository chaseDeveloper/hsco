package hsco.pms.rnt.prm.puchasRentCstmr;

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
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   		: puchasRentCstmrServiceImpl.java
 * @Description  		: 매입임대 고객 정보
 * @author       			: 변승우
 * @since        			: 2015. 11. 26.
 * @version      			: 1.0
 * @see          			: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 26.					변승우				최초생성
 * </pre>  
 */

@Service("puchasRentCstmrService")
public class puchasRentCstmrServiceImpl extends BaseService{
	protected Logger log = LoggerFactory.getLogger(this.getClass());


	/**
	 * 매입임대 고객 정보 리스트
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPuchasRentCstmrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("puchasRentCstmrDAO.selectPuchasRentCstmrList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 매입임대 고객 정보 저장,수정,삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */	
	@SuppressWarnings({ "rawtypes" })
	
	public void savePuchasRentCstmrCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
				baseDao.insert("puchasRentCstmrDAO.savePuchasRentCstmrC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("puchasRentCstmrDAO.savePuchasRentCstmrU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("puchasRentCstmrDAO.savePuchasRentCstmrD", map);
			}
		}
	} 


	/**
	 * 매입임대 고객 가족 정보 리스트
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPuchasRentCstmrFamilyList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("puchasRentCstmrDAO.selectPuchasRentCstmrFamilyList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 매입임대 고객 정보 가족 저장,수정,삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */	
	@SuppressWarnings({ "rawtypes" })
	
	public void savePuchasRentCstmrFamilyCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
				baseDao.insert("puchasRentCstmrDAO.savePuchasRentCstmrFamilyC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("puchasRentCstmrDAO.savePuchasRentCstmrFamilyU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("puchasRentCstmrDAO.savePuchasRentCstmrFamilyD", map);
			}
		}
	}




	/**
	 * 매입임대 대기자 가족 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPuchasCstmrFamilyList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("puchasRentCstmrDAO.selectPuchasCstmrFamilyList", inMap);		// 매입임대 대기자 가족 목록
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 매입임대 고객 가족 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "deprecation", "unchecked"})
	
	public void puchasCstmrFamilyCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		try {
			for (int x = 0; x < list.size(); x++) {
				Map map = list.get(x);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				ObjectUtil.setUserToMap(map);		// 세션정보 설정

				if (rowType == DataSet.ROW_TYPE_INSERTED ){
					String puchasCstmrNo = (String) baseDao.select("puchasRentCstmrDAO.puchasRentCstmr", map);				// 가족정보가 영구임대고객으로 존재하는지 조회

					//데이터 없을경우 영구임대고객 테이블에 insert
					if(StringUtil.isNull(puchasCstmrNo)){
						baseDao.getDao().getSqlMapClientTemplate().insert("puchasRentCstmrDAO.puchasRentCstmrC", map);		// 매입임대고객등록 (TBRNT_PUCHAS_RENT_CSTMR)
					}
					else{
						map.put("PUCHAS_CSTMR_NO", puchasCstmrNo);
						baseDao.update("puchasRentCstmrDAO.puchasRentCstmrU", map);			// 매입임대고객수정 (TBRNT_PUCHAS_RENT_CSTMR)
					}
					baseDao.insert("puchasRentCstmrDAO.puchasCstmrFamilyC", map);		// 매입임대고객가족등록 (TBRNT_PUCHAS_FAMILY_MATTER)
				}
				else if(rowType == DataSet.ROW_TYPE_UPDATED ){
					baseDao.update("puchasRentCstmrDAO.puchasRentCstmrU", map);				// 매입임대고객수정 (TBRNT_PUCHAS_RENT_CSTMR)
					baseDao.update("puchasRentCstmrDAO.puchasCstmrFamilyU", map);			// 매입임대고객가족수정 (TBRNT_PUCHAS_FAMILY_MATTER)
				}
				else if(rowType == DataSet.ROW_TYPE_DELETED ){
					baseDao.update("puchasRentCstmrDAO.puchasCstmrFamilyD", map);			// 매입임대고객가족삭제 (TBRNT_PUCHAS_FAMILY_MATTER)
				}
			}
			// 매입임대에서는 업무적특성(관리비산출시)으로 가족수를 자동으로 UPDATE 하지 않음
		}
		catch( Exception e) {
			throw new NexaServiceException(e);
		}
	}
}
