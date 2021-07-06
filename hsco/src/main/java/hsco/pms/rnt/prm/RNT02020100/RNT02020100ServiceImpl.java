package hsco.pms.rnt.prm.RNT02020100;

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
 * @Class Name   		: RNT02020100ServiceImpl.java
 * @Description  		: 매입임대 대기자 목록 정보
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
 *  2015. 10. 22.		변승우		최초생성
 *  2016. 06. 09.      	박병일		일괄등록(savePuchasWaitrCstmrC) 추가
 * </pre>  
 */


@Service("RNT02020100Service")
public class RNT02020100ServiceImpl extends BaseService{
	protected Logger log = LoggerFactory.getLogger(this.getClass());


	/**
	 * 입주대기자 목록 정보 조회(매입)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMvnWaitrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02020100DAO.selectMvnWaitrList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 입주대기자 CUD(매입)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void saveMvnWaitrCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		boolean bCheck = false;

		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}catch( Exception e) {
				throw new NexaServiceException(e); 
			}

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT02020100DAO.saveMvnWaitrC", map);
				bCheck = true;
			}
			else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT02020100DAO.saveMvnWaitrU", map);
			}
			else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("RNT02020100DAO.saveMvnWaitrD", map);
				bCheck = true;
			}
		}

		//삭제된 대기자가 있을경우 대기번호를 재조정 한다.
		if(bCheck == true){
			for(int x=0; x<list.size(); x++){
				Map map = list.get(x);

				List <Map> records = (List<Map>)baseDao.list("RNT02020100DAO.mvnWaitrNoList", map);

				for(int y=0; y<records.size(); y++){
					Map map2 = records.get(y);
					map2.put("WAIT_NO", y+1);
					baseDao.update("RNT02020100DAO.mvnWaitrNoU", map2);
				}
			}
		}
	}


	/**
	 * 입주대기자 일괄등록(매입)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
		
	public void savePuchasWaitrCstmrC(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				String sPuchasRentCstmrSeq = (String)baseDao.select("puchasRentCstmrDAO.puchasRentCstmrSeq");
				map.put("PUCHAS_CSTMR_NO", sPuchasRentCstmrSeq);
				// 매입 임대고객 등록 (TBRNT_PUCHAS_RENT_CSTMR)
				baseDao.insert("puchasRentCstmrDAO.savePuchasRentCstmrC", map);

				// 매입 입주 대기자 등록 (TBRNT_MVN_WAITR)
				baseDao.insert("RNT02020100DAO.saveMvnWaitrC", map);
			}
		}
	}
}
