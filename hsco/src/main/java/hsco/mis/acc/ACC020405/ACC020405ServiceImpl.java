package hsco.mis.acc.ACC020405;

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
 * 
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : ACC020405ServiceImpl.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 11. 25.
 * @version         : 1.0
 * @see             :
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 25.                  정윤원                최초생성
 * </pre>
 */
@Service("ACC020405Service")
public class ACC020405ServiceImpl extends BaseService {

    protected Logger     log = LoggerFactory.getLogger(ACC020405ServiceImpl.class);

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	if(log.isInfoEnabled()) log.info("select Started!");
    	
    	Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
            inMap.put("INNER_SANCTN_MDL_ID","ACC-100050");
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC020405DAO.select", inMap));
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps((List<Map>) baseDao.list("ACC020405DAO.selectSancNo", inMap));
        outDataset.put("output1", outDsMap);
        outDataset.put("output2", outDsMap2);
    }
    
    
	/**
	 * 지출승인/취소
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public int timhderConfmU(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input2");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED :
					
					if("1".equals((String)map.get("TIMHDER_CONFM"))) {
						// 전표생성
						baseDao.update("ACC020405DAO.expndtrSlipI", map);
						
						// 정상적으로 생성되면 지출확인 처리
						String resultMsg = (String)map.get("OUT_RESULT_MSG"); 
						if(resultMsg == null || "".equals(resultMsg)) {
							baseDao.update("ACC020405DAO.timhderConfmU", map);
							iRow++;
						} else {
							map.put("TIMHDER_CONFM", "0");
							
							map.put("OUT_RESULT_MSG", resultMsg);
							
							throw new NexaServiceException("fail.정보등록.실패", resultMsg);
							
						}
						
						List<Map> chileList = (List<Map>) baseDao.list("ACC020405DAO.selectChildList", map);
						for(int i = 0 ; i < chileList.size() ; i++){
							Map chMap = chileList.get(i);
							baseDao.update("ACC020405DAO.expndtrSlipI", chMap);
						}
						
					} 
					else {
						// 전표 삭제
						baseDao.delete("ACC020405DAO.expndtrSlipD", map);
						
						// 지출확인 취소
						baseDao.update("ACC020405DAO.timhderConfmU", map);
						
						iRow++;
					}
					
					break;
			    default:
			    	break;
			}	
		}
		
        outDataset.put("output1", list);
		
		return iRow;
		
	}
	
	   /**
	    * UBIREOPORT DATASET을 조회한다.
	    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	    * @return void
	    * @throws NexaServiceException
	    */
	   @SuppressWarnings({ "rawtypes", "unchecked" })
	   public void innerSanctnUbiDataset( DataSetMap tranInfo, Map<String, Object> inVar,
	           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	           Map<String, DataSetMap> outDataset) throws NexaServiceException {
	       
	        Map inMap = null;
	        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
	        if (inDsMap != null) {
	            inMap = inDsMap.get(0);
	        }
	        if(inMap != null){
	        	inMap.put("INNER_SANCTN_MDL_ID", "ACC-100050");
		        if(baseDao.list("ACC020405DAO.selectSancNo", inMap).size()>0){
		        	DataSetMap tempMap = new DataSetMap();
		        	Map sanctnNoMap = (Map)baseDao.list("ACC020405DAO.selectSancNo", inMap).get(0);
		        	tempMap.setRowMaps((List<Map>) baseDao.list("ACC020405DAO.selectEmpno", sanctnNoMap));
		        	if(tempMap.size()>0){
		        		if(tempMap.get(0).containsValue("T07")){
			    		}else{
			    			inMap.putAll(tempMap.get(0));
			    		}
		        	}
		        }
		        
		        DataSetMap outDsMap = new DataSetMap();
		        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC020405DAO.select", inMap));
		        
		        outDataset.put("output1", outDsMap);
	        }
	   }
    
	/**
	 * 내부결재
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveInnerSanc( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		if(list.size()>0){
			Map map = list.get(0);
			map.put("INNER_SANCTN_MDL_ID","ACC-100050");
			baseDao.update("ACC020405DAO.saveInnerSanc", map);

		}
		
	}
}
