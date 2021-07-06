package hsco.mis.hrm.HRM060501;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM060501Controller.java
 * @Description  	: 
 * @author       	: 박세현
 * @since        	: 2019. 09. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2016. 09. 16.	 이형무		최초생성
 * </pre>  
 */
@Service("HRM060501Service")
public class HRM060501ServiceImpl extends BaseService implements HRM060501Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**집계내역 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectMlssList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM060501DAO.selectMlssList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
    }
    
    /*평가자 세부목록 조회*/
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectAprsrList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM060501DAO.selectAprsrList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
    }
    
    /*excel upload*/    
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void saveExcel ( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        int listSize = (inDsMap==null) ? 0 : inDsMap.size();
        
		if(listSize > 0){
			
				//상급자, 하급자 비교
				for(int x = 0; x < listSize; x++){
				   
					Map map = inDsMap.get(x);
					// 다면평가_점수 테이블 존재여부 체크
					int scoreCnt = (int)baseDao.select("HRM060501DAO.chkMlssScore", map);

					// 점수데이터가 없을때
					if(scoreCnt == 0) {
						
						if(x == 0) {
							//기존에 있던것 삭제				
							baseDao.delete("HRM060501DAO.deleteMlssAprsr", map);
							baseDao.delete("HRM060501DAO.deleteMlssAprsee", map);
						}
						
						int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
						int existAt = 0; //중복여부
						existAt = (int)baseDao.select("HRM060501DAO.chkAprsee", map);
						
						if(existAt == 0){
							
							
							switch (rowType) {
							case DataSet.ROW_TYPE_INSERTED:
								//부모테이블 인서트
								baseDao.insert("HRM060501DAO.insertMlssAprsee", map);
								
								for(int i = 1; i<=17; i++){
									String aprsrSe = "1";
									String index = "A"+i;
									
									
									// 평가자 사번 NULL이 아닐때만 실행
									if(!StringUtils.isEmpty(map.get(index))) {

										if(i > 3){
											aprsrSe = "2";
										}
										map.put("APRSR_SE", aprsrSe);
										map.put("APRSR_EMPNO", map.get(index));
										
										// 자식테이블 인서트
										baseDao.insert("HRM060501DAO.insertMlssAprsr", map);
									}
								}
								break;		    		
							}
						}
						
					} else {
						// 점수데이터가 있을때
						String errMsg = "평가점수가 존재하는 년도/반기의 데이터는 엑셀 업로드가 불가합니다.\n(확인 후, 다시 진행해주시기 바랍니다)";
		                throw new NexaServiceException("info.처리불가", errMsg);
					}
				}//for문 끝
		}
    }
    
    @SuppressWarnings({ "rawtypes" })
	public void deleteMlssAprsList ( DataSetMap tranInfo
								   , Map<String, Object> inVar
								   , Map<String, DataSetMap> inDataset
								   , Map<String, Object> outVar
								   , Map<String, DataSetMap> outDataset) throws NexaServiceException {
    		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
    	
    	int existPrsenAt = (int)baseDao.select("HRM060501DAO.chkPrsenAt",inMap); //제출여부 확인
    	
    	//제출여부가 모두 '1' 일 때 실행
    	if(existPrsenAt == 10){
    		//평가자_사번 항목 NULL 업데이트
    		baseDao.update("HRM060501DAO.deleteAprsrList", inMap);
    	}else {
    		String errMsg = "평가제출을 진행해주시기 바랍니다.\n(확인 후, 다시 진행해주시기 바랍니다)";
            throw new NexaServiceException("info.처리불가", errMsg);
    	}
    }
    
    /*
     * 평가자 상세목록 저장
     */
    @SuppressWarnings("rawtypes")
	public int updateAprDetail ( DataSetMap tranInfo
    						  , Map<String, Object> inVar
    						  , Map<String, DataSetMap> inDataset
    						  , Map<String, Object> outVar
    						  , Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    		int iRow = 0;
	        
	        DataSetMap list = (DataSetMap) inDataset.get("input1");
	        
	        int listSize = (list == null) ? 0 : list.size();
	        
	        for (int x = 0; x < listSize; x++) {
	            Map map = list.get(x);
	            
	            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
	            
	            switch(rowType) {
	                case DataSet.ROW_TYPE_UPDATED :
	                	String aprsrEmpno = (String)map.get("APRSR_EMPNO");
	                	if(aprsrEmpno != null && !"".equals(aprsrEmpno)) {
	                		baseDao.insert("HRM060501DAO.updateAprDetail", map);
	                	} else {
	                		baseDao.delete("HRM060501DAO.deleteAprDetail", map);
	                	}
	                    break;
	            }   
	        }
	        return iRow;
    }
    
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectRandomList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM060501DAO.selectRandomList");     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
    }
}