package hsco.mis.acc.ACC050108;

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
 * @Class Name   	: ACC050108ServiceImpl.java
 * @Description  	: 지출결의분개
 * @author       	: 정 민
 * @since        	: 2017. 11. 28.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 11. 28.  				   정  민				최초생성
 * </pre>  
 */
@Service("acc050108Service")
public class ACC050108ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /**
	 * 지출결의분개 목록 조회(결의내역, 전표내역, 분개전표상세, 분개확정전표상세 )
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDsnList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		// 결의내역
		List <Map> records1 =  (List<Map>)baseDao.list("ACC050108DAO.expDsnList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records1);
		outDataset.put("output1", outDsMap);	// 결의내역
	}
	
    /**
	 * 분개전표, 분개확정전표 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectChitList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		// 분개
		inMap.put("CHIT_TY", 1);
		List <Map> records1 =  (List<Map>)baseDao.list("ACC050108DAO.chitDetailList", inMap);
		List <Map> records2 =  (List<Map>)baseDao.list("ACC050108DAO.chitMastrR", inMap);
		
		// 분개확정
		inMap.put("CHIT_TY", 2);
		List <Map> records3 =  (List<Map>)baseDao.list("ACC050108DAO.chitDetailList", inMap);
		List <Map> records4 =  (List<Map>)baseDao.list("ACC050108DAO.chitMastrR", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records1);
		outDataset.put("output1", outDsMap);	// 결의내역
		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records2);
		outDataset.put("output2", outDsMap);	// 분개전표상세내역
		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records3);
		outDataset.put("output3", outDsMap);	// 분개전표상세정보
		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records4);
		outDataset.put("output4", outDsMap);	// 분개확정전표상세내역
	}
	
	
	 /**
	 * 분개전표, 분개확정전표 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked"})
	@Transactional
	public void saveChitList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    	
    	DataSetMap input1 = inDataset.get("input1");	// 분개전표마스터
		DataSetMap input2 = inDataset.get("input2");	// 분개전표상세
    	DataSetMap input3 = inDataset.get("input3");	// 분개확정전표마스터
		DataSetMap input4 = inDataset.get("input4");	// 분개확정전표상세
		
		if(input1.size() > 0) {
			// 전표마스터 저장(등록,수정)
			Map mastrMap = input1.get(0);
			int mastrRowType = ((Integer) mastrMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(mastrRowType) {
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("ACC050103DAO.chitMastrU", mastrMap);
					break;
			}
			
			// 전표상세 저장
			for(Map map : input2.getRowMaps()) {
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED:
						map.put("CHIT_NO", (String)mastrMap.get("CHIT_NO"));
						baseDao.insert("ACC050103DAO.chitDetailC", map);
						break;
					case DataSet.ROW_TYPE_UPDATED:
						baseDao.update("ACC050103DAO.chitDetailU", map);
						break;
					case DataSet.ROW_TYPE_DELETED:
						baseDao.delete("ACC050103DAO.chitDetailD", map);
						break;
					default:
						break;
				}
			}
		}
		
		if(input3.size() > 0) {
			// 전표마스터 저장(등록,수정)
			Map mastrMap = input3.get(0);
			int mastrRowType = ((Integer) mastrMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(mastrRowType) {
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("ACC050103DAO.chitMastrU", mastrMap);
					break;
			}
			
			// 전표상세 저장
			for(Map map : input4.getRowMaps()) {
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED:
						map.put("CHIT_NO", (String)mastrMap.get("CHIT_NO"));
						baseDao.insert("ACC050103DAO.chitDetailC", map);
						break;
					case DataSet.ROW_TYPE_UPDATED:
						baseDao.update("ACC050103DAO.chitDetailU", map);
						break;
					case DataSet.ROW_TYPE_DELETED:
						baseDao.delete("ACC050103DAO.chitDetailD", map);
						break;
					default:
						break;
				}
			}
		}
	}
	
	@SuppressWarnings("rawtypes")
	public void expndtrSlipI( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
			baseDao.update("ACC050108DAO.expndtrSlipI", inMap);
			
			String msg = (String)inMap.get("OUT_RESULT_MSG");
			
			if(msg != null && !"".equals(msg)) {
				throw new NexaServiceException("fail.정보등록.실패", msg);
			}
		}
		
	}
}
