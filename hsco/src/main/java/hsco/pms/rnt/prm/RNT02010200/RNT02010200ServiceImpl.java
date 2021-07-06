package hsco.pms.rnt.prm.RNT02010200;

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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   		: RNT02010200ServiceImpl.java
 * @Description  		: 건축물 정보 관리
 * @author       			: 변승우
 * @since        			: 2015. 10. 22.
 * @version      			: 1.0
 * @see          			: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 22.					변승우				최초생성
 * </pre>  
 */


@Service("RNT02010200Service")
public class RNT02010200ServiceImpl extends BaseService{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/**
	 * 매입임대 주택명, 동호 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void puchasHouseNmHoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02010200DAO.puchasHouseNmHoList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 매입임대 건축물 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void puchasHouseBildList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		System.out.println(inMap);
		List <Map> records = (List<Map>)baseDao.list("RNT02010200DAO.puchasHouseBildList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	

	/**
	 * 매입임대 건출물 저장,수정,삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void puchasHouseBildCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
			
			if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("RNT02010200DAO.puchasHouseBildD", map);
			}else{
				//TBRNT_PUCHAS_HOUSE_DONG 테이블 조회
				List <Map> records = (List<Map>)baseDao.list("RNT02010200DAO.puchasHouseNmHoList_2", map);
				if(records.size() == 0){
					throw new NexaServiceException("errors.없음.요청", "동정보가|동정보를");
				}
				
				//TBRNT_PUCHAS_HOUSE_BILD 테이블 조회
				List <Map> records2 = (List<Map>)baseDao.list("RNT02010200DAO.puchasHouseBildList_2", map);
				if(records2.size() == 0){
					baseDao.insert("RNT02010200DAO.puchasHouseBildC", map);
				}else{
					baseDao.update("RNT02010200DAO.puchasHouseBildU", map);
				}
				
			}
		}
	} 	
}
