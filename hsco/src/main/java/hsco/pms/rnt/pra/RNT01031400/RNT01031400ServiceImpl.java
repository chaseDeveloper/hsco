package hsco.pms.rnt.pra.RNT01031400;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT01031400ServiceImpl.java
 * @Description  	: 소송 등록
 * @author       	: 송호원
 * @since        	: 2016. 07. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 07. 17.				송호원				최초생성
 * </pre>  
 */
@Service("RNT01031400Service")
public class RNT01031400ServiceImpl extends BaseService{
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 소송정보 목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentLwstList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01031400DAO.rentLwstList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 소송정보 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes",  "unchecked" })
	
	public void rentLwstCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
				
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT01031400DAO.rentLwstC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01031400DAO.rentLwstU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("RNT01031400DAO.rentLwstD", map);
			}

			// 계약정보(TBRNT_RENT_CNTRCT) 테이블의 소송진행여부 상태 변경(1: 소송진행중)
			baseDao.update("RNT01031400DAO.retCntrctU", map);
		}
	}  
}
