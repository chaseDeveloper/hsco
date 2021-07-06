package hsco.mis.fun.FUN040305;

import java.io.UnsupportedEncodingException;
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
import hsco.cmm.util.StringUtil;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: fun040305ServiceImpl.java
 * @Description  	: 가상계좌 수납내역을 조회하는 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2015. 09. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 09. 24.				   양성모				최초생성
 * </pre>  
 */

@Service("fun040305Service")
public class FUN040305ServiceImpl extends BaseService implements FUN040305Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    /**
	 * 집행계획이동요청/승인 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMvmnCptalList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("FUN040305DAO.selectMvmnCptalList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 자금계획이동CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 * @throws UnsupportedEncodingException 
	 */	
    @SuppressWarnings({ "rawtypes" })
    
    public void MvmnCptalCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException, UnsupportedEncodingException {
    	
        // input Map get
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        
        int listSize = (list == null) ? 0 : list.size();
        
		for (int i = 0; i < listSize; i++) {
			
			Map map = list.get(i);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN040305DAO.MvmnCptalC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("FUN040305DAO.MvmnCptalU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("FUN040305DAO.MvmnCptalD", map);
					break;
			}	
		}
    }		


	/**
	 * 승인
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 * @throws UnsupportedEncodingException 
	 */	
    @SuppressWarnings({ "rawtypes" })
    
    public void updateDscnAt( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
        // input Map get
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        
        int listSize = (list == null) ? 0 : list.size();
        
		for (int i = 0; i < listSize; i++) {
			
			Map map = list.get(i);
			
			if(String.valueOf(map.get("CHK")).equals(String.valueOf(map.get("CONFM_AT")))) continue;
			
			if("1".equals(String.valueOf(map.get("CHK")))) {
				baseDao.insert("FUN040305DAO.updateDscnAt", map);	
			} else if("0".equals(String.valueOf(map.get("CHK")))) {
				baseDao.insert("FUN040305DAO.updateDscnAtCancel", map);
			}
		}
    }		


    /**
	 * 계획잔액 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAmount( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("FUN040305DAO.selectAmount", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
}