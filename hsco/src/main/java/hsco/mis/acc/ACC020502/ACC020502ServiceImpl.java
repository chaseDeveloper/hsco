package hsco.mis.acc.ACC020502;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC020502ServiceImpl.java
 * @Description  	: 수입지출외현금내역 관리하는 서비스 구현체 클래스
 * @author       	: 이상명
 * @since        	: 2017. 8. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 8. 25.					이상명				최초생성
 * </pre>  
 */
@Service("ACC020502Service")
public class ACC020502ServiceImpl extends BaseService {

protected Logger log = LoggerFactory.getLogger(ACC020502ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /**
     * 수입지출외현금마스터를 조회한다.
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void incExpElseCashMastrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("incExpElseCashMastrList Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
		}
		
		List <Map> records;
		records = (List<Map>)baseDao.list("ACC020502DAO.incExpElseCashMastrList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    /**
     * 수입지출외현금상세를 조회한다.
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void incExpElseCashDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
		}
		
		List <Map> records;
		records = (List<Map>)baseDao.list("ACC020502DAO.incExpElseCashDetailList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    
    /**
     * 수입지출외현금 저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public int incExpElseCashCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow 	= 0;
		String key	= "";
		
		DataSetMap input1 = (DataSetMap) inDataset.get("input1");
		DataSetMap input2 = (DataSetMap) inDataset.get("input2");
		
		// 수입지출외현금 세부내용 저장(세부내용의 삭제건부터 처리)
		if(input2 != null) {
			for(Map map : input2.getRowMaps()) {
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				switch(rowType) {
					case DataSet.ROW_TYPE_DELETED :
						iRow += baseDao.delete("ACC020502DAO.incExpElseCashDetailD", map);
						break;
				    default:
				    	break;
				}
			}	
		}

		// 수입지출외현금 마스터 저장
		if(input1 != null) {
			for(Map map : input1.getRowMaps()) {
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						key = (String) baseDao.select("ACC020502DAO.incExpElseCashMastrPk"); 
						map.put("SN", key);
						baseDao.insert("ACC020502DAO.incExpElseCashMastrC", map);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						iRow += baseDao.update("ACC020502DAO.incExpElseCashMastrU", map);
						break;
					case DataSet.ROW_TYPE_DELETED :
						iRow += baseDao.delete("ACC020502DAO.incExpElseCashMastrD", map);
						break;
				    default:
				    	break;
				}
			}	
		}
		
		// 수입지출외현금 세부내용 저장
		if(input2 != null) {
			for(Map map : input2.getRowMaps()) {
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						if(StringUtil.isNull((String)map.get("SN"))) {
							map.put("SN", key);
						}
						baseDao.insert("ACC020502DAO.incExpElseCashDetailC", map);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						iRow += baseDao.update("ACC020502DAO.incExpElseCashDetailU", map);
						break;
				    default:
				    	break;
				}
			}	
		}
		
		return iRow;
		
	}
	
	
    
	
	/**
	 * 이월처리
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void incExpSyfd(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        // 이월처리
		baseDao.update("ACC020502DAO.incExpSyfd", inMap);
		
	}

	
	/**
	 * 수입지출외 계좌정보
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAcnutList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		List <Map> records = (List<Map>)baseDao.list("ACC020502DAO.selectAcnutList");		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
	}


    /**
     * 첨부파일
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAtchFile( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records1 = (List<Map>)baseDao.list("ACC020502DAO.selectAtchFile", inMap);
        
        DataSetMap outDsMap1 = new DataSetMap();
        outDsMap1.setRowMaps(records1);
        outDataset.put("output1", outDsMap1);
        
    }
}
