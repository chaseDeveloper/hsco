package hsco.com.sym.mnm.SYM040200;

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



/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM040200ServiceImpl.java
 * @Description  	: 메뉴정보를 관리하는 서비스 구현체 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 6. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 24.					정윤원				최초생성
 * </pre>  
 */
@Service("SYM040200Service")
public class SYM040200ServiceImpl extends BaseService implements SYM040200Service {
	
protected Logger log = LoggerFactory.getLogger(SYM040200ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
	

    /**
     * 
     */
    
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void SYM040200Code(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled())
		    log.info("SYM040200Code called!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List)baseDao.list("SYM040200DAO.SYM040200Code", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * 메뉴정보 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void SYM040200List(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		List <Map> records2;
		records = (List)baseDao.list("SYM040200DAO.SYM040200List", inMap);
		records2 = (List)baseDao.list("SYM040200DAO.SYM040200DownloadMenuList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap2);
		
	}
    
    

    /**
	 * 메뉴정보를 저장, 수정, 삭제 한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int SYM040200CUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
				int iRow = 0;
				
				DataSetMap list = (DataSetMap) inDataset.get("input1");
				
				for (int x = 0; x < list.size(); x++) {
						
					Map map = list.get(x);
					
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
					
					switch(rowType ) 
					{
					
						case DataSet.ROW_TYPE_INSERTED:
							baseDao.insert("SYM040200DAO.SYM040200C", map);
							break;
							
						case DataSet.ROW_TYPE_UPDATED:
							baseDao.update("SYM040200DAO.SYM040200U", map);
							break;
							
						case DataSet.ROW_TYPE_DELETED:
							baseDao.delete("SYM040200DAO.deleteScrinButton", map);
							baseDao.delete("SYM040200DAO.deleteAuthGrpMenu", map);
							baseDao.delete("SYM040200DAO.SYM040200D", map);
							break;
						
						default:
				}
					
			}
				
				return iRow;
				
		}
	
	 /**
		 * 화면존재여부 내역을 조회한다.
		 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
		 * @return void
		 * @throws NexaServiceException
		 */
	    @SuppressWarnings({ "rawtypes", "unchecked" })
		public void SYM040200PageIdChk(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;

			records = (List)baseDao.list("SYM040200DAO.SYM040200PageIdChk", inMap);
			
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
			
		}

		 /**
			 * MENUID를 추출한다.
			 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
			 * @return void
			 * @throws NexaServiceException
			 */
		    @SuppressWarnings({ "rawtypes", "unchecked" })
			public void SYM040200MenuKey(DataSetMap tranInfo, Map<String, Object> inVar,
					Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
					Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
				
				DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
				Map inMap = null;
				
				if (inDsMap != null)
					inMap = inDsMap.get(0);
				
				List <Map> records;

				records = (List)baseDao.list("SYM040200DAO.SYM040200MenuKey", inMap);
				
				
				DataSetMap outDsMap = new DataSetMap();
				outDsMap.setRowMaps(records);
				
				outDataset.put("output1", outDsMap);
				
			}

}
