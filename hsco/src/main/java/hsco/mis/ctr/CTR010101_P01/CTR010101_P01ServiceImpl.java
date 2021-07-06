package hsco.mis.ctr.CTR010101_P01;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: Sal010101ServiceImpl.java
 * @Description  	: 봉급테이블을 관리하는 서비스 구현체 클래스
 * @author       	: 이동석
 * @since        	: 2015. 06. 08.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 06. 08.					이동석				최초생성
 * </pre>  
 */

@Service("ctr010101_P01Service")
public class CTR010101_P01ServiceImpl extends EgovAbstractServiceImpl implements CTR010101_P01Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name="ctr010101_P01DAO")
    private CTR010101_P01DAO ctr010101_P01DAO;


    public void get(DataSetMap tranInfo,Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
    		Map<String, Object> outVar, Map<String, DataSetMap> outDataset)throws Exception {

    	selectBcnchist(tranInfo, inVar, inDataset, outVar, outDataset);
	}
	
    @Override
	public void selectBcnchist(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws Exception {
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;

			if (inMap != null) {
				records = ctr010101_P01DAO.selectBcnchist(inMap);
			} else {
				records = ctr010101_P01DAO.selectBcnchist(inVar);
			}
			
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
			
		
	}
    
    @Override
	public void selectBcnchist1(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws Exception {
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;

			if (inMap != null) {
				records = ctr010101_P01DAO.selectBcnchist1(inMap);
			} else {
				records = ctr010101_P01DAO.selectBcnchist1(inVar);
			}
			
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output2", outDsMap);
			
		
	}
    
    
   
    @Override
   	public int BcnchistCUD(DataSetMap tranInfo, Map<String, Object> inVar,Map<String, DataSetMap> inDataset, 
   			Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws Exception {
   		
   		String sqlId = null;
   		String forceFlag = null;
   		
   		
   		int iRow = 0;
   		
   		DataSetMap list = (DataSetMap) inDataset.get("input1");
   		
   		for (int x = 0; x < list.size(); x++) {
   				
   			Map map = list.get(x);
   				
   			//DataSet에 Parameter를 추가
   			Iterator<String> keys = inVar.keySet().iterator();
   			while( keys.hasNext() ){
   				String key = keys.next();
   				map.put(key, inVar.get(key));
   			}
   				
   			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
   			forceFlag = null;					
   			
   		
   			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
   				
   				 ctr010101_P01DAO.BcnchistC(map);
   				 
   				 ctr010101_P01DAO.BcnchistC1(map);
   				
   			}else if (rowType == DataSet.ROW_TYPE_UPDATED){
   				
   				ctr010101_P01DAO.BcnchistU(map);
   				
   			}else if (rowType == DataSet.ROW_TYPE_DELETED){
   				
   				ctr010101_P01DAO.BcnchistD(map);	
   				 				 	
   				
   			}
   			
   		
   		}
   		return iRow;
       }
}
