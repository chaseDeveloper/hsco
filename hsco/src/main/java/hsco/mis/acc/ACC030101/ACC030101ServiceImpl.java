package hsco.mis.acc.ACC030101;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC030101ServiceImpl.java
 * @Description  	: 세금계산서 발행 관리하는 서비스 구현체 클래스
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
@Service("ACC030101Service")
public class ACC030101ServiceImpl extends BaseService {

protected Logger log = LoggerFactory.getLogger(ACC030101ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /**
     * 세금계산서 목록
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void taxbilMasterList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("taxbilMasterList Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
		}
		
		List <Map> records;
		records = (List<Map>)baseDao.list("ACC030101DAO.taxbilMasterList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    /**
     * 품목 목록
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
   	public void taxbilDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {
       	
   		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
   		Map inMap = null;
   		if (inDsMap != null && inDsMap.size() > 0) {
   			inMap = inDsMap.get(0);
   		}
   		
   		List <Map> records;
   		records = (List<Map>)baseDao.list("ACC030101DAO.taxbilDetailList", inMap);		
   		
   		DataSetMap outDsMap = new DataSetMap();
   		outDsMap.setRowMaps(records);
   		outDataset.put("output1", outDsMap);
   	}
    
    /**
     * 세금계산서 저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	
	public int taxbilMasterCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap input1 = (DataSetMap) inDataset.get("input1");	//세금계산서
		DataSetMap input2 = (DataSetMap)inDataset.get("input2");	//품목
		
		String taxbillNo = null;	//신규등록시 세금계산서번호를 저장할 변수
		
		int listSize = (input1 == null) ? 0 : input1.size();
		for (int x = 0; x < listSize; x++) {
			Map mastrMap = input1.get(x);
			
			//세금계산서 번호
			if(mastrMap.containsKey("TAXBILL_NO")){
				taxbillNo = mastrMap.get("TAXBILL_NO").toString();	//신규등록시 세금계산서번호를 저장할 변수
			}else{
				taxbillNo = (String) baseDao.select("ACC030101DAO.selectTaxbillNo");
				mastrMap.put("TAXBILL_NO", taxbillNo);
			}
			
			switch(((Integer) mastrMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue()) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("ACC030101DAO.taxbilMasterC", mastrMap);
					break;
				case DataSet.ROW_TYPE_UPDATED :
				    baseDao.update("ACC030101DAO.taxbilMasterU", mastrMap);
					break;
				case DataSet.ROW_TYPE_DELETED :
					mastrMap.put("SEQ", null);
					baseDao.delete("ACC030101DAO.taxbilDetailD", mastrMap);
					baseDao.delete("ACC030101DAO.taxbilMasterD", mastrMap);
					break;
			    default:
			    	break;
			}
		}
		listSize = (input2 == null) ? 0 : input2.size();		//품목등록
		
		for (int x = 0; x < listSize; x++) {
			Map map = input2.get(x);
			
			//품목에 세금계산서번호가 없으면 해당 세금계산서번호를 입력(ex신규의경우)
			if(!map.containsKey("TAXBILL_NO")){
				map.put("TAXBILL_NO", taxbillNo);
			}
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("ACC030101DAO.taxbilDetailC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("ACC030101DAO.taxbilDetailU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("ACC030101DAO.taxbilDetailD", map);
					break;
			    default:
			    	break;
			}
		}
		return iRow;
	}
    
    

    /**
     * 세금계산서 발행(매출건만)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public void taxbilItisC( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap input1 = (DataSetMap) inDataset.get("input1");   //세금계산서
        
        int listSize = (input1 == null) ? 0 : input1.size();
        for (int x = 0; x < listSize; x++) {
            Map mastrMap = input1.get(x);
            switch(((Integer) mastrMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue()) {
                case DataSet.ROW_TYPE_INSERTED :
                    baseDao.insert("ACC030101DAO.taxbilItisC", mastrMap);
                    baseDao.insert("ACC030101DAO.taxbilItisDtlC", mastrMap);
                    baseDao.update("ACC030101DAO.taxbilMasterNtsU", mastrMap);
                    break;
                default:
                    break;
            }
        }
    }
}
