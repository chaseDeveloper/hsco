package hsco.mis.acc.ACC060204;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC060204ServiceImpl.java
 * @Description  	: 구분회계 결산조정분개관리 관리하는 서비스 구현체 클래스
 * @author       	: 이상명
 * @since        	: 2015. 8. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 25.					이상명				최초생성
 * </pre>  
 */
@Service("ACC060204Service")
public class ACC060204ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC060204ServiceImpl.class);
    
    
    /**
	 * 전표리스트
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void chitList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("chitList Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ACC060204DAO.chitList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
     * 전표상세 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void chitDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records1 = (List<Map>)baseDao.list("ACC060204DAO.chitDetailList", inMap);		
		DataSetMap output1 = new DataSetMap();
		output1.setRowMaps(records1);
		outDataset.put("output1", output1);
		
	}
    
    
    /**
     * 전표 저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked"})
	
	public int saveChit( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	int iRow = 0;
    	
    	DataSetMap input1 = inDataset.get("input1");	// 전표마스터
		DataSetMap input2 = inDataset.get("input2");	// 전표상세
		String chitNo = null;
		if(input1.size() > 0 ) {
			// 전표마스터 저장(등록,수정)
			Map mastrMap = input1.get(0);
			int mastrRowType = ((Integer) mastrMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(mastrRowType) {
				case DataSet.ROW_TYPE_INSERTED:
					chitNo = (String) baseDao.select("ACC060204DAO.chitNo", mastrMap);
					mastrMap.put("CHIT_NO", chitNo);
					baseDao.insert("ACC060204DAO.chitMastrC", mastrMap);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					iRow += baseDao.update("ACC060204DAO.chitMastrU", mastrMap);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("ACC060204DAO.chitDetailD", mastrMap);	//전표상세 먼저 삭제
					iRow += baseDao.delete("ACC060204DAO.chitMastrD", mastrMap);
					break;
				default:
					break;
			}
		}
		if(input2.size() > 0 ){
		// 전표상세 저장
			for(Map map : input2.getRowMaps()) {
				Map mastrMap = input2.get(0);
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED:
						if(!map.containsKey("CHIT_NO")){
							if(!mastrMap.containsKey("CHIT_NO")){
								map.put("CHIT_NO", chitNo);
							}else{
								map.put("CHIT_NO", mastrMap.get("CHIT_NO"));
							}
						}
						baseDao.insert("ACC060204DAO.chitDetailC", map);
						break;
					case DataSet.ROW_TYPE_UPDATED:
						baseDao.update("ACC060204DAO.chitDetailU", map);
						break;
					case DataSet.ROW_TYPE_DELETED:
						baseDao.delete("ACC060204DAO.chitDetailD", map);
						break;
					default:
						break;
				}
			}
		}
		return iRow;
    }
    
    
    /**
     * 구분회계전표 생성
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes"})
	
	public void spaccSlipToSeSlipAi( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	
    	Map inMap = null;
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        if (inDsMap != null) {
        	inMap = inDsMap.get(0);
        }
    	
    	
		if (inMap != null) {
			
			baseDao.update("ACC060204DAO.spaccSlipToSeSlipAi", inMap);	// 구분회계전표 생성
		}
		DataSetMap output1 = new DataSetMap();
		output1.add(inMap);
		outDataset.put("output1", output1);
		
		
    }
    
    /**
     * 역분개 전표 생성
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes"})
	
	public void spaccReSlipToSeSlipAi( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	
    	Map inMap = null;
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        if (inDsMap != null) {
        	inMap = inDsMap.get(0);
        }
    	
    	
		if (inMap != null) {
			
			baseDao.update("ACC060204DAO.spaccReSlipToSeSlipAi", inMap);	// 구분회계전표 생성
		}
		DataSetMap output1 = new DataSetMap();
		output1.add(inMap);
		outDataset.put("output1", output1);
		
		
    }
    
}
