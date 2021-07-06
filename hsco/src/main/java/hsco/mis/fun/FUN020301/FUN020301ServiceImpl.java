package hsco.mis.fun.FUN020301;

import java.math.BigDecimal;
import java.util.HashMap;
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
import hsco.cmm.util.DateUtil;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: FUN020301ServiceImpl.java
 * @Description  	: 상환내역 및 일정을 관리하는 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2015. 08. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 17.				   양성모				최초생성
 * </pre>  
 */
@Service("FUN020301Service")
public class FUN020301ServiceImpl extends BaseService implements FUN020301Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /**
	 * 공사채 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPbncdList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("FUN020301DAO.selectPbncdList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * 이자지급계획 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectIntrRpayPlan2( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("FUN020301DAO.selectIntrRpayPlan2", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * 공사채 기본정보, 상환계획, 상환내역을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPbncdInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		List <Map> records2;
		List <Map> records3;
		List <Map> records4;
		List <Map> records5;
		

		records1 = (List<Map>)baseDao.list("FUN020301DAO.selectPbncdInfo", inMap);
		records2 = (List<Map>)baseDao.list("FUN020301DAO.selectIntrRpayPlan", inMap);
		records3 = (List<Map>)baseDao.list("FUN020301DAO.selectPrncpalRpayPlan", inMap);
		records4 = (List<Map>)baseDao.list("FUN020301DAO.selectIntrRpayDtls", inMap);
		records5 = (List<Map>)baseDao.list("FUN020301DAO.selectPrncpalRpayDtls", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		DataSetMap outDsMap4 = new DataSetMap();
		DataSetMap outDsMap5 = new DataSetMap();
		
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		outDsMap3.setRowMaps(records3);
		outDsMap4.setRowMaps(records4);
		outDsMap5.setRowMaps(records5);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
		outDataset.put("output4", outDsMap4);
		outDataset.put("output5", outDsMap5);
		
	} 
    
    /**
	 * 공사채 이자상환계획 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectIntrRpayPlan( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;		

		records = (List<Map>)baseDao.list("FUN020301DAO.selectIntrRpayPlan", inMap);		
	
		DataSetMap outDsMap1 = new DataSetMap();
		
		outDsMap1.setRowMaps(records);
		outDataset.put("output1", outDsMap1);
		
        records = (List<Map>)baseDao.list("FUN020301DAO.selectPrncpalRpayPlan", inMap);     

        DataSetMap outDsMap2 = new DataSetMap();
        
        outDsMap2.setRowMaps(records);
        outDataset.put("output2", outDsMap2);
		
	}
    
    /**
	 * 공사채 원금상환계획 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPrncpalRpayPlan( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("FUN020301DAO.selectPrncpalRpayPlan", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * 공사채 이자상환내역 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectIntrRpayDtls( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("FUN020301DAO.selectIntrRpayDtls", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * 공사채 원금상환내역 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPrncpalRpayDtls( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("FUN020301DAO.selectPrncpalRpayDtls", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    

	
	/**
	 * 상환계획, 상환내역 수정, 삭제, 등록 처리
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	

	public int pbncdCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");	// 이자상환계획
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN020301DAO.intrRpayPlanC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN020301DAO.intrRpayPlanU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("FUN020301DAO.intrRpayPlanD", map);
					break;
			}	
		}
		
		list = (DataSetMap) inDataset.get("input2");	// 이자상환내역
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN020301DAO.intrRpayDtlsC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN020301DAO.intrRpayDtlsU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("FUN020301DAO.intrRpayDtlsD", map);
					break;
			}	
		}	
		
		list = (DataSetMap) inDataset.get("input3");	// 원금상환내역
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN020301DAO.prncpalRpayDtlsC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN020301DAO.prncpalRpayDtlsU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("FUN020301DAO.prncpalRpayDtlsD", map);
					break;
			}	
		}	
		
		list = (DataSetMap) inDataset.get("input4");	// 원금상환계획
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN020301DAO.prncpalRpayPlanC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN020301DAO.prncpalRpayPlanU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("FUN020301DAO.prncpalRpayPlanD", map);
					break;
			}	
		}		
		
		return iRow;
		
	}
	
	
    /**
     * 이자상환계획결재정보 저장
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public int intrRpayPlanSanctnU( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {                  
        
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");	// 이자상환계획
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			iRow += baseDao.update("FUN020301DAO.intrRpayPlanSanctnU", map);
		}
		
		return iRow;        
    }    
    
	
    /**
     * 원리금상환계획결재정보 저장
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public void prncpalRpayPlanSanctnU( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {                  
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");

        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        baseDao.update("FUN020301DAO.prncpalRpayPlanSanctnU", inMap);    // 원리금상환계획결재정보 저장 
    }    
    	
	
    /**
     * 이자상환계획생성 단리, 년복리 일 때 실행
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    

    public void intrRpayPlanCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {                  
        
    	DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        baseDao.delete("FUN020301DAO.intrRpayPlanD01", inMap);    // 기존 이자상환계획 삭제 
        
        baseDao.insert("FUN020301DAO.intrRpayPlanC01", inMap);    // 신규 이자상환계획 저장 
        
        //baseDao.insert("FUN020301DAO.intrRpayPlanC02", inMap);    // 신규 이자상환계획 저장 
    }
    
    /**
     * 원금상환계획생성 단리, 년복리 일 때 실행
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public void prncpalRpayPlanCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {                  
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");

        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        baseDao.delete("FUN020301DAO.prncpalRpayPlanD01", inMap);    // 기존 원금상환계획 삭제 
        
        baseDao.insert("FUN020301DAO.prncpalRpayPlanC01", inMap);    // 신규 원금상환계획 저장
        
        // baseDao.insert("FUN020301DAO.prncpalRpayPlanC02", inMap);    // 신규 원금상환계획 저장 
    }    
    
    /**
     * 만기처리 실행
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    

    public int pbncdInfoCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");	// 이자상환계획
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN020301DAO.pbncdInfoU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					break;
			}	
		}
		
		return iRow;
		        
    } 
    
    /**
	 * 첨부파일 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAtchFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
        outDataset.put("output1", outDsMap);
    }
    
    /**
	 * 전자결재 금액 한글화
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAmtTrans( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("FUN020301DAO.selectAmtTrans", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
   /**전자결재 */
   @SuppressWarnings({ "rawtypes", "unchecked" })
   public int approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {   
	                 
	   	DataSetMap outDsMap = new DataSetMap();
       
		int iRow = 0;
		String sanctnNO = "";
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");	// 이자상환계획
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);
	        
			// 전자결재번호 조회
			if (x == 0) {
				sanctnNO = (String) baseDao.select("FUN020301DAO.selectSanctnNO", map);
			}
			
			map.put("SANCTN_NO", sanctnNO);
			
			String se = StringUtil.nvl((String)map.get("SE"));
   
			if("1".equals(se)){				// 공사채원리금납부
				baseDao.update("FUN020301DAO.approveU", map);
				baseDao.update("FUN020301DAO.approveU2", map);
			} 
			else if("2".equals(se)){		// 공사채이자납부
				baseDao.update("FUN020301DAO.approveU", map);
			}
			
			outDsMap.add(map);
		}
       
       outDataset.put("output1", outDsMap);
	       
		
		return iRow;
    		   
   }	

   /**
    * 공사채 이자지급계획 가져오기
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return void
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes", "unchecked" })
   

   public void intrRpayPlanLoad( DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {                  
       
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");	// 원금상환계획
			
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		baseDao.insert("FUN020301DAO.intrRpayDtlsLoadC", inMap);

		List <Map> records;

		records = (List<Map>)baseDao.list("FUN020301DAO.selectIntrRpayDtls", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
   }

   /**
    * 공사채 이자지급계획 가져오기
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return void
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes", "unchecked" })
   

   public void prncpalRpayPlanLoad( DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {                  
       
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");	// 원금상환계획
			
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		baseDao.insert("FUN020301DAO.prncpalRpayDtlsLoadC", inMap);

		List <Map> records;

		records = (List<Map>)baseDao.list("FUN020301DAO.selectPrncpalRpayDtls", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
   }
}
